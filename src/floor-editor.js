import {STAIR_STYLES,MAX_FLOORS,projectFloors,floorElevations,addProjectFloor,removeTopFloor} from './floors.js';

export function stairPreview(style,turn='right'){
 const def=STAIR_STYLES.find(s=>s.id===style);let drawing='';
 if(def.shape==='spiral'){drawing='<ellipse cx="58" cy="60" rx="27" ry="10"/><path d="M58 15v54M35 55q45-12 3-20q38-13 2-20M39 20l37 6M37 36l39 7M35 53l41 7"/>';}
 else if(def.shape==='ladder'){drawing='<path d="M38 70 53 14M62 70 77 14M42 58h24M45 46h24M48 34h24M51 22h24"/>';}
 else if(def.shape==='turn'){drawing='<path d="M25 70V40h27V20h39M25 61h27M25 51h27M52 40h14V20M66 40h13V20M79 40h12V20"/>';}
 else {for(let i=0;i<6;i++){const x=27+i*7,y=67-i*8;drawing+=`<path d="M${x} ${y}h28v5h-28z"/>`;}if(def.shape!=='floating')drawing+='<path d="M26 54 63 12M53 58 91 17"/>';if(def.shape==='paddle')drawing+='<path d="M42 61 65 14"/>';}
 return `<svg viewBox="0 0 116 82" aria-hidden="true"><g transform="${style==='turn'&&turn==='left'?'translate(116 0) scale(-1 1)':''}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${drawing}</g></svg>`;
}

export function createFloorEditor(api){
 const {$,$$,escapeHTML:esc}=api;let style='timber',turn='right',selected=null;
 const field=(key,label,value,min,max,step=.1)=>`<label class="field-label">${label}<input data-stair-field="${key}" type="number" min="${min}" max="${max}" step="${step}" value="${Number(value).toFixed(2)}"></label>`;
 function selectConnection(id){selected=id;api.currentFloor();render();$('#connectionEditor').scrollIntoView?.({block:'nearest',behavior:'smooth'});}
 function updateConnection(id,mutator){
  api.editProject(draft=>mutator(draft.stairs.find(l=>l.id===id)));
 }
 function render(){
  const state=api.getState(),floors=projectFloors(state),active=state.activeFloorId||floors[0].id;
  $('#floorTabs').innerHTML=floors.map((f,i)=>`<button data-floor="${f.id}" class="${f.id===active&&!api.isOverview()?'active':''}" aria-pressed="${f.id===active&&!api.isOverview()}"><span>${i+1}</span>${esc(f.name)}</button>`).join('');
  $$('[data-floor]').forEach(el=>el.onclick=()=>api.switchFloor(el.dataset.floor));
  $('#wholeHouseBtn').hidden=floors.length<2;$('#wholeHouseBtn').classList.toggle('active',api.isOverview());$('#wholeHouseBtn').textContent=api.isOverview()?'← Edit this floor':'View whole house';
  $('#floorCount').textContent=`${floors.length} / ${MAX_FLOORS} FLOORS`;
  $('#stairStyles').innerHTML=STAIR_STYLES.map(s=>`<button class="stair-card ${s.id===style?'active':''}" data-stair-style="${s.id}" aria-pressed="${s.id===style}" title="${esc(s.detail)}">${stairPreview(s.id,turn)}<b>${s.name}</b><small>${s.w.toFixed(2)} × ${s.run.toFixed(2)} m</small></button>`).join('');
  $$('[data-stair-style]').forEach(el=>el.onclick=()=>{style=el.dataset.stairStyle;render();});
  $('#newStairTurn').hidden=style!=='turn';
  $$('[data-new-stair-turn]').forEach(el=>{el.classList.toggle('active',el.dataset.newStairTurn===turn);el.setAttribute('aria-pressed',String(el.dataset.newStairTurn===turn));el.onclick=()=>{turn=el.dataset.newStairTurn;render();};});
  $('#addFloorBtn').disabled=floors.length>=MAX_FLOORS;$('#addFloorBtn').textContent=floors.length>=MAX_FLOORS?'Four floors added':`+ Add floor ${floors.length+1} with this style`;
  $('#floorName').value=floors.find(f=>f.id===active)?.name||'Ground floor';
  const linked=(state.stairs||[]).filter(l=>l.from===active||l.to===active);if(!linked.some(l=>l.id===selected))selected=linked[0]?.id||null;
  $('#connectionsList').innerHTML=linked.map(l=>{const a=floors.find(f=>f.id===l.from),b=floors.find(f=>f.id===l.to);return `<button data-connection="${l.id}" class="${l.id===selected?'active':''}"><b>${esc(STAIR_STYLES.find(s=>s.id===l.style).name)}${l.style==='turn'?' · turns '+(l.turn||'right'):''}</b><small>${esc(a.name)} → ${esc(b.name)}</small></button>`;}).join('');
  $$('[data-connection]').forEach(el=>el.onclick=()=>selectConnection(el.dataset.connection));
  const link=linked.find(l=>l.id===selected);$('#connectionEditor').hidden=!link;
  $('#removeFloorBtn').hidden=floors.length<2;
  if(!link)return;
  const levels=floorElevations(state),low=levels.find(f=>f.id===link.from),high=levels.find(f=>f.id===link.to);
  $('#connectionEditor').innerHTML=`<h3>Move & resize connection</h3><p class="small-note">Move, resize or change the style freely. Overlaps are allowed; the upper-floor opening follows automatically.</p><label class="field-label">Style<select id="connectionStyle">${STAIR_STYLES.map(s=>`<option value="${s.id}" ${link.style===s.id?'selected':''}>${s.name}</option>`).join('')}</select></label>${link.style==='turn'?`<fieldset class="stair-turn-choice"><legend>Turn as you go upstairs</legend><div>${['left','right'].map(value=>`<button class="${(link.turn||'right')===value?'active':''}" data-connection-turn="${value}" aria-pressed="${(link.turn||'right')===value}">${stairPreview('turn',value)}<span>Turn ${value}</span></button>`).join('')}</div><p class="small-note">Mirror the L shape. Use Direction below to rotate the whole staircase.</p></fieldset>`:''}<div class="row">${field('x','Left / right · m',link.x,-5.5,5.5)}${field('z','Back / front · m',link.z,-5.5,5.5)}</div><div class="row">${field('w','Width · m',link.w,.5,3,.05)}${field('run','Floor space · m',link.run,.4,5,.05)}</div><label class="field-label">Direction<select id="connectionRotation">${[0,90,180,270].map(v=>`<option value="${v}" ${Math.round(link.rot*180/Math.PI)%360===v?'selected':''}>${v}°</option>`).join('')}</select></label><label class="field-label">Color<input type="color" id="connectionColor" value="${link.color}"></label><div class="stair-nudge" aria-label="Move connection 10 centimetres"><button data-stair-nudge="0,-0.1" aria-label="Move toward back">↑</button><button data-stair-nudge="-0.1,0" aria-label="Move left">←</button><span>Move 10 cm</span><button data-stair-nudge="0.1,0" aria-label="Move right">→</button><button data-stair-nudge="0,0.1" aria-label="Move toward front">↓</button></div><p class="small-note">Connects ${esc(low.name)} to ${esc(high.name)} · ${(high.elevation-low.elevation).toFixed(2)} m rise. Switch floors to furnish each room. Blocky explores the selected floor.</p>`;
  $$('[data-stair-field]').forEach(el=>el.onchange=()=>{const v=Number(el.value);if(!Number.isFinite(v)){api.toast('Enter a size in metres.');render();return;}updateConnection(link.id,l=>l[el.dataset.stairField]=v);});
  $('#connectionStyle').onchange=e=>{const def=STAIR_STYLES.find(s=>s.id===e.target.value);updateConnection(link.id,l=>Object.assign(l,{style:def.id,w:def.w,run:def.run,color:def.color,...(def.id==='turn'?{turn:l.turn||turn}:{})}));};
  $('#connectionRotation').onchange=e=>updateConnection(link.id,l=>l.rot=Number(e.target.value)*Math.PI/180);
  $$('[data-connection-turn]').forEach(el=>el.onclick=()=>updateConnection(link.id,l=>l.turn=el.dataset.connectionTurn));
  $('#connectionColor').onchange=e=>updateConnection(link.id,l=>l.color=e.target.value);
  $$('[data-stair-nudge]').forEach(el=>el.onclick=()=>{const [x,z]=el.dataset.stairNudge.split(',').map(Number);updateConnection(link.id,l=>{l.x=Math.round((l.x+x)*100)/100;l.z=Math.round((l.z+z)*100)/100;});});
 }
 $('#addFloorBtn').onclick=()=>{let added;const okay=api.editProject(draft=>{added=addProjectFloor(draft,style,$('#copyFloorWalls').checked,turn);});if(okay){selected=added.id;api.switchFloor(api.getState().activeFloorId);api.toast('New floor added. Use the floor tabs to move between rooms.');render();}};
 $('#removeFloorBtn').onclick=()=>api.editProject(draft=>removeTopFloor(draft));
 $('#floorName').onchange=e=>{const name=e.target.value.trim();if(!name){render();return;}api.editProject(draft=>{const id=draft.activeFloorId||'floor-1';draft.floors.find(f=>f.id===id).name=name.slice(0,40);});};
 $('#wholeHouseBtn').onclick=()=>api.toggleOverview();
 return{render,selectConnection};
}
