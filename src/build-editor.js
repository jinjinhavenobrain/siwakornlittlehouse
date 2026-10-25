import * as T from 'three';
import {FLOOR,uid} from './core.js';
import {MAIN_SIDES,SIDES,SIDE_LABELS,OPPOSITE,wallSpec,wallSegments,findWallSegment,splitWall,extendBathroom,structuralIssues,FLOOR_MATERIALS,sharedBathSide} from './structure.js';
import {finishPreview} from './finishes.js';

export function createBuildEditor(api){
 const {$,$$,escapeHTML:esc}=api;
 let selected='floor',tool=null,drawingStart=null,dragging=null,lastPreview=0;
 const guide=new T.Line(new T.BufferGeometry(),new T.LineBasicMaterial({color:'#3e886b',depthTest:false}));guide.renderOrder=20;guide.visible=false;api.scene.add(guide);
 const paletteLabels={wall:'General walls',floor:'Main floor',foundation:'Foundation',bathWall:'Bathroom walls',bathFloor:'Bathroom floor',roof:'Roof / beams',bathRoof:'Bathroom roof',balcony:'Balcony deck',rail:'Balcony rails',door:'Doors',window:'Window glass',frame:'Frames',trim:'Wall trim',garden:'Garden',panel:'Timber panels',curtain:'Curtains'};
 const state=()=>api.getState(),structure=()=>state().structure;
 const number=(key,label,value,min=-6,max=6,step=.05)=>`<label class="field-label">${label}<input type="number" data-build-field="${key}" min="${min}" max="${max}" step="${step}" value="${Number(value).toFixed(3).replace(/0+$/,'').replace(/\.$/,'')}"></label>`;
 const color=(key,label,value)=>`<label class="field-label">${label}<input type="color" data-build-color="${key}" value="${value}"></label>`;
 const button=(id,label,cls='secondary')=>`<button id="${id}" class="btn ${cls} wide">${label}</button>`;
 function select(id){selected=id;cancelTool();render();}
 function line(points){guide.geometry.dispose();guide.geometry=new T.BufferGeometry().setFromPoints(points.map(p=>new T.Vector3(p.x,p.y??FLOOR+.035,p.z)));guide.visible=true;}
 function markSegment(v){const x=v.axis==='x',a={x:x?v.start:v.fixed,z:x?v.fixed:v.start},b={x:x?v.end:v.fixed,z:x?v.fixed:v.end};line([a,b,{...b,y:FLOOR+3.02},{...a,y:FLOOR+3.02},a]);}
 function cancelTool(){tool=null;drawingStart=null;guide.visible=false;api.controls.enabled=true;api.renderer.domElement.style.cursor='';$('#buildToolHint').hidden=true;$('#splitWallTool').classList.remove('active');$('#addPartition').classList.remove('active');}
 function beginTool(kind){cancelTool();tool=kind;$('#buildToolHint').hidden=false;$('#buildToolText').textContent=kind==='split'?'Click a point on an outside wall to split it.':'Click the start and end of your new wall.';$('#'+(kind==='split'?'splitWallTool':'addPartition')).classList.add('active');api.renderer.domElement.style.cursor='crosshair';if(kind==='draw')api.view('top');}
 function visible(o){while(o){if(!o.visible)return false;o=o.parent;}return true;}
 function hit(e){api.ray(e);const h=api.getHouse();for(const result of api.raycaster.intersectObjects([h.structure,h.full,h.cut,h.doors,h.roof,h.garden],true)){if(!visible(result.object))continue;let o=result.object;while(o){if(o.userData.structureId)return{id:o.userData.structureId,point:result.point};o=o.parent;}}return null;}
 function snapped(e){const p=api.pointAt(e);if(!p)return null;const step=api.getSnap()?.1:.01;let x=Math.round(p.x/step)*step,z=Math.round(p.z/step)*step;const b=structure().bounds;for(const n of ['left','right'])if(Math.abs(x-b[n])<.13)x=b[n];for(const n of ['front','back'])if(Math.abs(z-b[n])<.13)z=b[n];return{x:Math.max(-6,Math.min(6,x)),z:Math.max(-6,Math.min(6,z))};}
 function splitTarget(e){const s=structure(),h=hit(e),seg=h&&findWallSegment(s,h.id),side=seg?.side||(h?.id.endsWith('-wall')?h.id.replace('-wall',''):null);
  if(MAIN_SIDES.includes(side)){const v=wallSpec(s,side);return{side,at:h.point[v.axis]};}
  const p=api.pointAt(e);if(!p)return null;
  const candidates=MAIN_SIDES.map(side=>{const v=wallSpec(s,side);return{side,at:p[v.axis],distance:Math.abs((v.axis==='x'?p.z:p.x)-v.fixed),v};}).filter(c=>c.at>=c.v.start&&c.at<=c.v.end).sort((a,b)=>a.distance-b.distance);
  return candidates[0]?.distance<.32?candidates[0]:null;
 }
 function splitAt(side,at,snapPosition=true){try{const step=api.getSnap()?.1:.01,position=snapPosition?Math.round(at/step)*step:at;let next;const okay=api.edit(s=>next=splitWall(s,side,position));if(okay){selected=next.id;cancelTool();render();api.toast('Wall split. Select either section to edit or extend it.');}}catch(e){api.toast(e.message);}}
 function floorControls(target){const s=structure(),f=s.finishes[target];return `<div class="finish-heading"><h3>Floor finish</h3><span>Pattern + color</span></div><div class="finish-grid">${FLOOR_MATERIALS.map(m=>`<button class="finish-card ${f.material===m.id?'active':''}" data-floor-material="${m.id}" title="${m.detail}" aria-pressed="${f.material===m.id}"><img alt="" src="${finishPreview(m.id,s.colors[target])}"><span>${m.name}</span></button>`).join('')}</div>${color('colors.'+target,'Floor color · pattern stays',s.colors[target])}<div class="row">${number('finish.scale',f.material==='wood'||f.material==='herringbone'?'Pattern size · m':'Tile / pattern size · m',f.scale,.15,3,.05)}<label class="field-label">Pattern direction<select data-build-field="finish.rotation">${[0,45,90,135,180,270].map(v=>`<option value="${v}" ${f.rotation===v?'selected':''}>${v}°</option>`).join('')}</select></label></div><p class="small-note">Color changes tint the same texture. Size and direction change the pattern independently.</p>`;}
 function splitControls(run){const length=run.end-run.start;return `<div class="editor-divider"></div><h3>Split this wall</h3><p class="small-note">Split by a distance from this section’s start, or use the Split wall tool in the scene.</p><label class="field-label">Distance from start · m<input id="splitDistance" type="number" min=".25" max="${Math.max(.25,length-.25)}" step=".05" value="${(length/2).toFixed(2)}"></label>${button('splitSelected','Split into two sections')}<div class="editor-divider"></div><h3>Bathroom extension</h3><p class="small-note">Extend this wall section out from the main room. It stays attached as the house changes. The existing bathroom and fixtures follow the new section.</p><label class="field-label">Outward depth · m<input id="extensionDepth" type="number" min=".8" max="4" step=".1" value="${structure().bathroom.depth}"></label>${button('extendBathroom','Extend section as bathroom','primary')}`;}
 function render(){
  const s=structure(),b=s.bounds,q=s.bathroom,part=s.openings.find(o=>o.id===selected)||s.partitions.find(p=>p.id===selected),seg=findWallSegment(s,selected);
  const row=(id,label,sub=false)=>`<button data-build-select="${esc(id)}" class="${selected===id?'active ':''}${sub?'segment-row':''}"><span>${esc(label)}</span><small>${selected===id?'EDITING':'→'}</small></button>`;
  $('#buildList').innerHTML=row('floor','Main floor / footprint')+MAIN_SIDES.map(side=>row(side+'-wall',SIDE_LABELS[side]+' wall')+(wallSegments(s,side).length>1?wallSegments(s,side).map(v=>row(v.id,`Section ${v.index+1} · ${(v.end-v.start).toFixed(2)} m`,true)).join(''):'')).join('')+(q.enabled===false?'':row('bathroom','Attached bathroom'))+(s.balcony.enabled===false?'':row('balcony','Balcony'))+(s.room?row('loft','Green loft frame & ceiling')+row('stairwell','Stair opening'):row('roof','Main roof')+row('bath-roof','Bathroom roof')+row('garden','Garden / surroundings'))+s.openings.map(o=>row(o.id,`${o.kind==='door'?'Door':'Window'} · ${o.side}`)).join('')+s.partitions.map((p,i)=>row(p.id,`Interior wall ${i+1}`)).join('');
  $$('[data-build-select]').forEach(el=>el.onclick=()=>select(el.dataset.buildSelect));
  $('#buildPalette').innerHTML=Object.entries(paletteLabels).filter(([key])=>s.colors[key]&&!(q.enabled===false&&['bathWall','bathFloor','bathRoof'].includes(key))&&!(s.balcony.enabled===false&&['balcony','rail'].includes(key))&&!(s.room&&key==='garden')).map(([key,label])=>`<label><input type="color" value="${s.colors[key]}" data-palette="${key}"><span>${label}</span></label>`).join('');
  $$('[data-palette]').forEach(el=>el.onchange=()=>api.edit(s=>s.colors[el.dataset.palette]=el.value));
  let title='',content='',floorTarget=null;
  if(selected==='floor'){title='Main floor';floorTarget='floor';content=floorControls('floor')+'<div class="editor-divider"></div><h3>Room footprint</h3>'+`<div class="row">${number('bounds.left','Left X',b.left,-5,2)}${number('bounds.right','Right X',b.right,-2,5)}</div><div class="row">${number('bounds.back','Back Z',b.back,-5,2)}${number('bounds.front','Front Z',b.front,-2,5)}</div><p class="small-note">${(b.right-b.left).toFixed(2)} × ${(b.front-b.back).toFixed(2)} m. ${s.room?'Estimated from video until you enter measured dimensions.':'The attached bathroom follows its wall.'}</p>${s.room?number('room.height','Ceiling / loft height · m',s.room.height,2,3,.05)+'<label class="measured-check"><input id="dimensionsConfirmed" type="checkbox" '+(s.room.estimated?'':'checked')+'> I have entered measured dimensions</label>':''}`;}
  else if(seg||MAIN_SIDES.some(side=>selected===side+'-wall')){
   const side=seg?.side||selected.replace('-wall',''),v=seg||wallSpec(s,side);title=SIDE_LABELS[side]+(seg?` wall · section ${seg.index+1}`:' wall');
   content=`<p class="small-note">${(v.end-v.start).toFixed(2)} m along the ${SIDE_LABELS[side].toLowerCase()} wall${seg?'. This section has its own color and can become the bathroom extension.':'. Move the wall to resize the house.'}</p>`;
   if(!seg)content+=number('bounds.'+side,'Wall position · '+(v.axis==='x'?'Z':'X'),b[side],-5,5);
   content+=color(seg?'segment.color':'colors.'+side+'Wall',seg?'This section color':'This wall color',s.segmentColors[seg?.id]||s.colors[side+'Wall']||s.colors.wall)+splitControls(v);
   if(!tool)markSegment(v);
  }
  else if(selected==='bathroom'){title='Attached bathroom';floorTarget='bathFloor';const v=wallSpec(s,q.side);content=`<p class="attachment-note">Attached to the ${SIDE_LABELS[q.side].toLowerCase()} wall · ${(q.end-q.start).toFixed(2)} m section</p><p class="small-note">Resize the section and outward depth here. To attach it elsewhere, split an exterior wall and choose a section.</p><div class="row">${number('bathroom.start','Section start · '+v.axis.toUpperCase(),q.start,v.start,v.end-.8)}${number('bathroom.end','Section end · '+v.axis.toUpperCase(),q.end,v.start+.8,v.end)}</div>${number('bathroom.depth','Outward depth · m',q.depth,.8,4,.1)}${color('colors.bathWall','Bathroom walls',s.colors.bathWall)}<div class="editor-divider"></div>${floorControls('bathFloor')}`;}
  else if(selected.startsWith('bath-')&&selected.endsWith('-wall')){title='Bathroom '+selected.replace('bath-','').replace('-wall','')+' wall';content=color('colors.bathWall','Bathroom walls',s.colors.bathWall)+button('editBathFloor','Edit bathroom floor');}
  else if(selected==='loft'&&s.room){title='Green loft frame';content='<p class="attachment-note">Beams, ladder and hatch from the video. Switch Ceiling on to see the overhead infill.</p>'+number('room.height','Ceiling / loft height · m',s.room.height,2,3,.05)+number('room.ladderRun','Ladder horizontal run · m',s.room.ladderRun,.5,1.5,.05)+color('colors.roof','Green frame color',s.colors.roof);}
  else if(selected==='stairwell'&&s.room){title='Stair opening';content='<p class="small-note">The opening and descending steps are estimated from the video. The person stops at the landing; stair climbing is not simulated.</p>'+number('room.stairWidth','Opening width · m',s.room.stairWidth,.6,2,.05)+number('room.stairRun','Opening length · m',s.room.stairRun,.8,4,.05)+number('room.stairDrop','Visible stair drop · m',s.room.stairDrop,.6,3,.05);}
  else if(selected==='balcony'){title='Back balcony';content=number('balcony.depth','Depth',s.balcony.depth,.5,3)+color('colors.balcony','Deck color',s.colors.balcony)+color('colors.rail','Rail color',s.colors.rail);}
  else if(selected==='roof'||selected==='bath-roof'){title=selected==='roof'?'Main roof':'Bathroom roof';const key=selected==='roof'?'roof':'bathRoof';content=color('colors.'+key,'Roof color',s.colors[key]);}
  else if(selected==='garden'){title='Garden';content=color('colors.garden','Ground color',s.colors.garden);}
  else if(part?.kind){const v=wallSpec(s,part.side);title=part.kind==='door'?'Door':'Window';content=`<label class="field-label">Wall<select data-build-field="opening.side">${SIDES.filter(side=>(q.enabled!==false||!side.startsWith('bath-'))&&side!==sharedBathSide(s)).map(side=>`<option value="${side}" ${part.side===side?'selected':''}>${side}</option>`).join('')}</select></label><div class="row">${number('opening.at',v.axis.toUpperCase()+' position',part.at)}${number('opening.w','Width',part.w,.4,3)}</div><div class="row">${number('opening.h','Height',part.h,.3,part.side.startsWith('bath-')?2.7:2.7)}${number('opening.sill','Sill height',part.sill,0,2.5)}</div>${color('opening.color','Individual color',part.color||s.colors[part.kind])}${button('deleteStructure','Delete '+part.kind)}`;}
  else if(part){title='Interior wall';content=`<div class="row">${number('partition.x','Center X',part.x)}${number('partition.z','Center Z',part.z)}</div><div class="row">${number('partition.w','Length',part.w,.1,6)}${number('partition.d','Thickness',part.d,.1,6)}</div><div class="row">${number('partition.h','Height',part.h,.3,3)}${number('partition.deg','Rotation °',(part.rot||0)*180/Math.PI,-360,360,15)}</div>${color('partition.color','Wall color',part.color)}${button('deleteStructure','Delete wall')}`;}
  else {selected='floor';return render();}
  if(!seg&&!MAIN_SIDES.some(side=>selected===side+'-wall')&&!tool)guide.visible=false;
  $('#buildInspectorTitle').textContent=title;$('#buildInspector').innerHTML=content+structuralIssues(s).map(text=>`<p class="warning">${esc(text)}</p>`).join('');
  $$('[data-build-field]').forEach(el=>el.onchange=()=>{
   const [group,key]=el.dataset.buildField.split('.'),value=el.tagName==='SELECT'&&group==='opening'?el.value:Number(el.value);
   if(typeof value==='number'&&(!Number.isFinite(value)||(el.min!==''&&value<Number(el.min))||(el.max!==''&&value>Number(el.max)))){api.toast('Check the allowed dimension range.');render();return;}
   api.edit(s=>{
    if(group==='bathroom'){const q=s.bathroom;extendBathroom(s,q.side,key==='start'?value:q.start,key==='end'?value:q.end,key==='depth'?value:q.depth);return;}
    const target=group==='finish'?s.finishes[floorTarget]:group==='opening'?s.openings.find(o=>o.id===selected):group==='partition'?s.partitions.find(p=>p.id===selected):s[group];
    if(!target)return;if(key==='deg')target.rot=value*Math.PI/180;else target[key]=value;
    if(group==='opening'&&key==='side'){const v=wallSpec(s,value);target.at=Math.min(v.end-target.w/2-.1,Math.max(v.start+target.w/2+.1,target.at));}
   });
  });
  $$('[data-build-color]').forEach(el=>el.onchange=()=>{const [group,key]=el.dataset.buildColor.split('.');api.edit(s=>{if(group==='segment')s.segmentColors[selected]=el.value;else if(group==='opening')s.openings.find(o=>o.id===selected).color=el.value;else if(group==='partition')s.partitions.find(p=>p.id===selected).color=el.value;else s.colors[key]=el.value;});});
  $$('[data-floor-material]').forEach(el=>el.onclick=()=>api.edit(s=>{const d=FLOOR_MATERIALS.find(m=>m.id===el.dataset.floorMaterial);s.finishes[floorTarget].material=d.id;s.finishes[floorTarget].scale=d.scale;}));
  if($('#splitSelected'))$('#splitSelected').onclick=()=>{const v=seg||wallSpec(s,selected.replace('-wall','')),distance=Number($('#splitDistance').value);if(!Number.isFinite(distance)||distance<.25||distance>v.end-v.start-.25){api.toast('Leave at least 25 cm in each section.');return;}splitAt(v.side,v.start+distance,false);};
  if($('#extendBathroom'))$('#extendBathroom').onclick=()=>{const v=seg||wallSpec(s,selected.replace('-wall','')),depth=Number($('#extensionDepth').value);if(api.edit(s=>extendBathroom(s,v.side,v.start,v.end,depth))){selected='bathroom';render();api.toast('Bathroom extended from that section. Its shared wall stays connected.');}};
  if($('#dimensionsConfirmed'))$('#dimensionsConfirmed').onchange=e=>api.edit(s=>s.room.estimated=!e.target.checked);
  if($('#editBathFloor'))$('#editBathFloor').onclick=()=>select('bathroom');
  if($('#deleteStructure'))$('#deleteStructure').onclick=()=>{api.edit(s=>{s.openings=s.openings.filter(o=>o.id!==selected);s.partitions=s.partitions.filter(p=>p.id!==selected);delete s.wallVisibility[selected];});selected='floor';render();};
 }
 $('#splitWallTool').onclick=()=>beginTool('split');$('#addPartition').onclick=()=>beginTool('draw');$('#cancelBuildTool').onclick=cancelTool;
 for(const kind of ['Door','Window'])$('#add'+kind).onclick=()=>{const s=structure();if(s.openings.length>=40){api.toast('Maximum 40 openings.');return;}const seg=findWallSegment(s,selected),side=seg?.side||(MAIN_SIDES.includes(selected.replace('-wall',''))?selected.replace('-wall',''):'front'),v=seg||wallSpec(s,side),id=`${kind.toLowerCase()}-${Date.now().toString(36)}`;if(api.edit(s=>s.openings.push({id,kind:kind.toLowerCase(),side,at:(v.start+v.end)/2,w:kind==='Door'?.8:1,h:kind==='Door'?2:1.1,sill:kind==='Door'?0:1})))select(id);};
 $('#resetStructure').onclick=()=>{if(!confirm('Restore the supplied house structure and finishes? Your furniture stays. Undo is available.'))return;api.edit(s=>Object.assign(s,api.cloneStructure()));select('floor');};
 api.renderer.domElement.addEventListener('pointerdown',e=>{
  if(api.getMode()!=='build'||e.button!==0||api.getMeasure())return;
  if(tool){e.stopImmediatePropagation();e.preventDefault();api.controls.enabled=false;api.renderer.domElement.setPointerCapture(e.pointerId);return;}
  const h=hit(e);if(!h)return;select(h.id);const p=api.pointAt(e),s=structure();if(!p)return;
  const part=s.openings.find(o=>o.id===selected)||s.partitions.find(o=>o.id===selected),side=MAIN_SIDES.find(side=>selected===side+'-wall');
  if(!part&&!side)return;const center=part&&!part.kind?part:p;
  dragging={id:selected,pointer:e.pointerId,x:e.clientX,y:e.clientY,offsetX:center.x-p.x,offsetZ:center.z-p.z,before:JSON.stringify(state()),started:false};api.controls.enabled=false;api.renderer.domElement.setPointerCapture(e.pointerId);
 },true);
 api.renderer.domElement.addEventListener('pointermove',e=>{
  if(api.getMode()!=='build')return;
  if(tool==='draw'&&drawingStart){const p=snapped(e);if(p){line([drawingStart,p]);$('#buildToolText').textContent=`Wall length ${Math.hypot(p.x-drawingStart.x,p.z-drawingStart.z).toFixed(2)} m · click to finish`;}}
  if(tool==='split'){const t=splitTarget(e);if(t){const v=wallSpec(structure(),t.side),step=api.getSnap()?.1:.01,at=Math.round(t.at/step)*step;line([{x:v.axis==='x'?at:v.fixed,z:v.axis==='x'?v.fixed:at},{x:v.axis==='x'?at:v.fixed,z:v.axis==='x'?v.fixed:at,y:FLOOR+3.12}]);}}
  if(!dragging||e.pointerId!==dragging.pointer)return;
  if(!dragging.started){if(Math.hypot(e.clientX-dragging.x,e.clientY-dragging.y)<5)return;api.checkpoint();dragging.started=true;}
  const p=api.pointAt(e);if(!p)return;api.moveStructure(dragging.id,p.x+dragging.offsetX,p.z+dragging.offsetZ);
  if(performance.now()-lastPreview>85){api.rebuildStructure();lastPreview=performance.now();}
 });
 api.renderer.domElement.addEventListener('pointerup',e=>{
  if(api.getMode()!=='build')return;
  if(tool){e.stopImmediatePropagation();e.preventDefault();api.controls.enabled=true;
   if(tool==='split'){const t=splitTarget(e);if(t)splitAt(t.side,t.at);else api.toast('Click an exterior wall, or enter a precise split in its inspector.');}
   else {const p=snapped(e);if(!p)return;if(!drawingStart){drawingStart=p;$('#buildToolText').textContent='Start set. Click the end of the new wall.';}else {const length=Math.hypot(p.x-drawingStart.x,p.z-drawingStart.z);if(length<.25||length>6){api.toast('Draw a wall between 0.25 and 6 m long.');return;}const a=drawingStart,id=uid();if(api.edit(s=>s.partitions.push({id,x:(a.x+p.x)/2,z:(a.z+p.z)/2,w:length,d:.15,h:s.room?.height||3,rot:-Math.atan2(p.z-a.z,p.x-a.x),color:s.colors.wall})))select(id);}}
   return;
  }
  if(dragging&&e.pointerId===dragging.pointer){if(dragging.started){state().preset='custom';api.commit();}dragging=null;api.controls.enabled=true;}
 },true);
 api.renderer.domElement.addEventListener('pointercancel',()=>{dragging=null;api.controls.enabled=true;});
 window.addEventListener('keydown',e=>{if(e.key==='Escape'&&tool){cancelTool();render();}});
 return {render,cancelTool,select};
}
