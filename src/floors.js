import {REFERENCE_LAYOUT} from './default-layout.js';
import {normalizeStructure,wallSpec} from './structure.js';

export const MAX_FLOORS=4;
export const STAIR_STYLES=[
 {id:'timber',name:'Wooden stairs',detail:'Classic steps with a handrail',w:.90,run:2.60,shape:'straight',color:'#b18b61'},
 {id:'open',name:'Open timber stairs',detail:'Light, open steps on two rails',w:.90,run:2.60,shape:'open',color:'#b18b61'},
 {id:'floating',name:'Floating stairs',detail:'Minimal treads on a central beam',w:.90,run:2.50,shape:'floating',color:'#d0b28b'},
 {id:'turn',name:'L-shaped stairs',detail:'Two short flights and a corner landing',w:1.80,run:1.80,shape:'turn',color:'#ae8660'},
 {id:'spiral',name:'Spiral stairs',detail:'Curved steps around a central pole',w:1.60,run:1.60,shape:'spiral',color:'#566862'},
 {id:'wood-ladder',name:'Wooden loft ladder',detail:'Simple timber rails and rungs',w:.68,run:.80,shape:'ladder',color:'#b18b61'},
 {id:'metal-ladder',name:'Metal loft ladder',detail:'Slim metal rails and round rungs',w:.62,run:.65,shape:'ladder',color:'#526461'},
 {id:'space-saver',name:'Space-saving stairs',detail:'Steep, alternating paddle steps',w:.75,run:1.45,shape:'paddle',color:'#b18b61'}
];
const copy=value=>JSON.parse(JSON.stringify(value));
export function blankStructure(width=4,depth=4,height=2.8){
 const s=copy(REFERENCE_LAYOUT.structure);
 s.bounds={left:-width/2,right:width/2,back:-depth/2,front:depth/2};
 s.bathroom={enabled:false,x:-2.7,z:0,w:1.5,d:3,side:'left',start:-1.5,end:1.5,depth:1.5};
 s.balcony={enabled:false,depth:1};s.openings=[];s.partitions=[];s.wallSplits={};s.segmentColors={};
 s.room={kind:'custom-room',height,estimated:false};
 s.colors={...s.colors,wall:'#e8e7df',floor:'#c3a17a',foundation:'#bdc0b3',roof:'#eeede6',frame:'#6c7a70',door:'#b59973'};
 s.finishes={floor:{material:'wood',scale:.65,rotation:0},bathFloor:{material:'matte',scale:.6,rotation:0}};
 s.wallVisibility={front:'low',back:'full',left:'low',right:'full'};
 return normalizeStructure(s);
}
export function blankProject(width=4,depth=4,height=2.8){
 const structure=blankStructure(width,depth,height);
 return {format:'house-studio-3d',version:1,name:'My new room',preset:'custom',items:[],structure,activeFloorId:'floor-1',floors:[{id:'floor-1',name:'Ground floor',items:[],structure:copy(structure)}],stairs:[]};
}
export function resizeFootprint(s,axis,size){
 if(!Number.isFinite(size)||size<2||size>10)throw new Error('Use a room size from 2 to 10 metres.');
 const b=s.bounds,horizontal=axis==='width',start=horizontal?'left':'back',end=horizontal?'right':'front',center=(b[start]+b[end])/2,oldSize=b[end]-b[start],oldStart=b[start];
 if(center-size/2<-6||center+size/2>6)throw new Error('Keep the room inside the planning area.');
 b[start]=center-size/2;b[end]=center+size/2;
 for(const o of s.openings.filter(o=>horizontal?['front','back'].includes(o.side):['left','right'].includes(o.side))){o.w=Math.min(o.w,size-.30);o.at=b[start]+(o.at-oldStart)/oldSize*size;o.at=Math.max(b[start]+o.w/2+.1,Math.min(b[end]-o.w/2-.1,o.at));}
 for(const side of horizontal?['front','back']:['left','right'])if(s.wallSplits?.[side])s.wallSplits[side]=s.wallSplits[side].map(n=>b[start]+(n-oldStart)/oldSize*size);
 return s;
}
export function projectFloors(state){
 if(!state.floors?.length)return[{id:'floor-1',name:'Ground floor',items:state.items,structure:state.structure}];
 return state.floors.map(f=>f.id===state.activeFloorId?{...f,items:state.items,structure:state.structure}:f);
}
export function syncFloors(state){if(state.floors)state.floors=projectFloors(state).map(copy);return state;}
export function ensureFloors(state){
 if(!state.floors){state.activeFloorId='floor-1';state.floors=projectFloors(state).map(copy);state.stairs=[];}
 return syncFloors(state);
}
export function chooseFloor(state,id){
 syncFloors(state);const floor=state.floors?.find(f=>f.id===id);if(!floor)throw new Error('Choose an existing floor.');
 state.activeFloorId=id;state.items=copy(floor.items);state.structure=copy(floor.structure);return state;
}
export function floorHeight(floor){return floor.structure.room?.height||3;}
export function floorElevations(state){let y=0;return projectFloors(state).map(f=>{const level={...f,elevation:y};y+=floorHeight(f)+.20;return level;});}
export function connectionFootprint(link,padding=0){
 const sideways=Math.abs(Math.sin(link.rot))>.5,w=(sideways?link.run:link.w)+padding*2,d=(sideways?link.w:link.run)+padding*2;
 return{left:link.x-w/2,right:link.x+w/2,back:link.z-d/2,front:link.z+d/2};
}
export function rectanglesOverlap(a,b){return a.left<b.right-.005&&a.right>b.left+.005&&a.back<b.front-.005&&a.front>b.back+.005;}
export function footprintInside(rect,bounds,margin=.14){return rect.left>=bounds.left+margin&&rect.right<=bounds.right-margin&&rect.back>=bounds.back+margin&&rect.front<=bounds.front-margin;}
function itemRect(o){const c=Math.abs(Math.cos(o.rot||0)),s=Math.abs(Math.sin(o.rot||0)),w=o.w*c+o.d*s,d=o.w*s+o.d*c;return{left:o.x-w/2,right:o.x+w/2,back:o.z-d/2,front:o.z+d/2};}
export function connectionLanding(link,upper=false){
 const turn=upper&&link.style==='turn',w=turn?.50:link.w,d=turn?link.run*.46:.50,x=turn?link.w/2+.25:0,z=turn?-link.run/2+d/2:(upper?-1:1)*(link.run/2+.25),c=Math.cos(link.rot),s=Math.sin(link.rot);
 return itemRect({x:link.x+x*c+z*s,z:link.z-x*s+z*c,w,d,rot:link.rot});
}
export function connectionProblem(state,link,{furniture=true}={}){
 const floors=projectFloors(state),from=floors.find(f=>f.id===link.from),to=floors.find(f=>f.id===link.to),rect=connectionFootprint(link);
 if(!from||!to||floors.indexOf(to)!==floors.indexOf(from)+1)return'Connect two neighbouring floors.';
 for(const f of [from,to]){
  if(!footprintInside(rect,f.structure.bounds))return'Move the connection inside both rooms, away from the walls.';
  const landing=connectionLanding(link,f===to),reserved=[rect,landing];
  if(!footprintInside(landing,f.structure.bounds))return'Leave at least 50 cm of clear landing space at both ends.';
  if(f.structure.partitions.some(p=>reserved.some(r=>rectanglesOverlap(r,itemRect(p)))))return'This connection or its landing overlaps an interior wall. Move it to a clear space.';
  if(furniture&&f.items.some(o=>o.type!=='rug'&&reserved.some(r=>rectanglesOverlap(r,itemRect(o)))))return'This connection or its landing overlaps furniture. Move it or clear a space first.';
  if(f.structure.openings.filter(o=>o.kind==='door').some(o=>{const v=wallSpec(f.structure,o.side),door=v.axis==='x'?{x:o.at,z:v.fixed,w:o.w,d:.75,rot:0}:{x:v.fixed,z:o.at,w:.75,d:o.w,rot:0};return rectanglesOverlap(rect,itemRect(door));}))return'Keep the door entrance clear when placing stairs.';
  if((state.stairs||[]).some(other=>other.id!==link.id&&(other.from===f.id||other.to===f.id)&&(rectanglesOverlap(landing,connectionFootprint(other,.08))||rectanglesOverlap(rect,connectionLanding(other,other.to===f.id)))))return'Leave a clear landing between the two floor connections.';
 }
 if((state.stairs||[]).some(s=>s.id!==link.id&&[s.from,s.to].some(id=>id===link.from||id===link.to)&&rectanglesOverlap(rect,connectionFootprint(s,.12))))return'Leave a landing between the two floor connections.';
 return null;
}
export function suggestConnection(state,from,to,style='timber',options={}){
 const def=STAIR_STYLES.find(s=>s.id===style);if(!def)throw new Error('Choose a stair or ladder style.');
 const floor=projectFloors(state).find(f=>f.id===from),b=floor.structure.bounds;
 const link={id:'stairs-'+Date.now().toString(36)+'-'+(state.stairs?.length||0),from,to,style,x:0,z:0,rot:0,w:def.w,run:def.run,color:def.color,...(options.dimensions||{})};
 for(const rot of options.rotations||[0,Math.PI/2,Math.PI,Math.PI*1.5]){
  link.rot=rot;const rect=connectionFootprint(link),hw=(rect.right-rect.left)/2,hd=(rect.front-rect.back)/2;
  const zs=[(b.back+b.front)/2],xs=[(b.left+b.right)/2];
  for(let z=b.back+hd+.20;z<=b.front-hd-.19;z+=.10)zs.push(z);
  for(let x=b.right-hw-.20;x>=b.left+hw+.19;x-=.10)xs.unshift(x);
  for(const z of zs)for(const x of xs){
   link.x=Math.round(x*100)/100;link.z=Math.round(z*100)/100;if(!connectionProblem(state,link))return link;
  }
 }
 throw new Error('Make some clear floor space for this style, or choose a smaller ladder.');
}
export function addProjectFloor(state,style='timber',copyWalls=false){
 ensureFloors(state);if(state.floors.length>=MAX_FLOORS)throw new Error('This project can have up to four floors.');
 const lower=state.floors.at(-1),b=lower.structure.bounds,number=state.floors.length,id='floor-'+Date.now().toString(36)+'-'+(number+1);
 // A room shell keeps the project editable without the old preset's decorative roof or fixed ladders.
 for(const f of state.floors)if(f.structure.room?.kind!=='custom-room')f.structure.room={kind:'custom-room',height:floorHeight(f),estimated:false};
 state.structure=copy(state.floors.find(f=>f.id===state.activeFloorId).structure);
 const structure=blankStructure(b.right-b.left,b.front-b.back,floorHeight(lower));structure.bounds=copy(b);
 structure.colors=copy(lower.structure.colors);structure.finishes=copy(lower.structure.finishes);
 if(copyWalls)structure.partitions=copy(lower.structure.partitions);
 state.floors.push({id,name:`Floor ${number+1}`,items:[],structure});
 let link;try{link=suggestConnection({...state,structure:state.floors.find(f=>f.id===state.activeFloorId).structure},lower.id,id,style);}catch(error){state.floors.pop();throw error;}
 state.stairs.push(link);chooseFloor(state,id);state.preset='custom';return link;
}
export function removeTopFloor(state){
 ensureFloors(state);if(state.floors.length<2)throw new Error('Keep at least one floor.');const id=state.floors.at(-1).id;
 state.floors.pop();state.stairs=state.stairs.filter(s=>s.from!==id&&s.to!==id);chooseFloor(state,state.floors.at(-1).id);return state;
}
export function floorHoles(state,id){return(state.stairs||[]).filter(s=>s.to===id).map(s=>connectionFootprint(s));}
// Split the slab around actual openings; overlapping holes remain safe.
export function floorRectangles(bounds,holes=[]){
 let rects=[{...bounds}];for(const hole of holes){const next=[];for(const r of rects){if(!rectanglesOverlap(r,hole)){next.push(r);continue;}
  const left=Math.max(r.left,hole.left),right=Math.min(r.right,hole.right),back=Math.max(r.back,hole.back),front=Math.min(r.front,hole.front);
  next.push({left:r.left,right:left,back:r.back,front:r.front},{left:right,right:r.right,back:r.back,front:r.front},{left,right,back:r.back,front:back},{left,right,back:front,front:r.front});
 }rects=next.filter(r=>r.right-r.left>.003&&r.front-r.back>.003);}return rects;
}
