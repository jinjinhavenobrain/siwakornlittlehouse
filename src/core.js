import {REFERENCE_LAYOUT} from './default-layout.js';
import {TWO_FLOOR_LAYOUT} from './two-floor-layout.js';
import {VIDEO_ROOM_LAYOUT,roomStairwell,roomLadder} from './video-room.js';
import {boundarySpecs,wallSpec,normalizeStructure,MAIN_SIDES,SIDES,FLOOR_MATERIALS} from './structure.js';
import {STAIR_STYLES,connectionProblem,MAX_FLOORS} from './floors.js';
export const FLOOR = .38;
export const HOUSE = { width:4.5, depth:4.75, wall:.15, height:3, ridge:4, bathroomWidth:1.5, bathroomDepth:3, balconyDepth:1 };
export const CATALOG = [
 {type:'bed3',name:'3 ft single bed',cat:'Sleep',w:.9144+.10,d:2.1,h:.82,kind:'bed',color:'#d9d7c8'},
 {type:'bed35',name:'3.5 ft single bed',cat:'Sleep',w:1.0668+.10,d:2.1,h:.82,kind:'bed',color:'#d9d7c8'},
 {type:'bed5',name:'5 ft queen bed',cat:'Sleep',w:1.524+.10,d:2.1,h:.88,kind:'bed',color:'#d9d7c8'},
 {type:'bed6',name:'6 ft king bed',cat:'Sleep',w:1.8288+.10,d:2.1,h:.88,kind:'bed',color:'#d9d7c8'},
 {type:'loft35',name:'3.5 ft loft bed',cat:'Sleep',w:1.17,d:2.14,h:2.25,kind:'loft',color:'#c6ac83'},
 {type:'loft5',name:'5 ft loft bed',cat:'Sleep',w:1.63,d:2.14,h:2.25,kind:'loft',color:'#c6ac83'},
 {type:'sofabed',name:'Convertible sofa bed',cat:'Sleep',w:1.55,d:.88,h:.84,kind:'sofabed',color:'#a7b7a0'},
 {type:'nightstand',name:'Bedside table',cat:'Storage',w:.4,d:.38,h:.48,kind:'nightstand',color:'#c6ac83'},
 {type:'desk140',name:'140 cm work desk',cat:'Work',w:1.4,d:.65,h:.75,kind:'desk',color:'#c6ac83'},
 {type:'desk160',name:'160 cm gaming desk',cat:'Work',w:1.6,d:.75,h:.75,kind:'gaming',color:'#343b3b'},
 {type:'chair',name:'Office chair',cat:'Work',w:.59,d:.59,h:1.05,kind:'chair',color:'#425956'},
 {type:'shelf',name:'Open bookshelf',cat:'Storage',w:.75,d:.32,h:1.65,kind:'shelf',color:'#c6ac83'},
 {type:'wardrobe',name:'Sliding wardrobe',cat:'Storage',w:1.1,d:.55,h:2.15,kind:'wardrobe',color:'#e7e6dc'},
 {type:'cabinet',name:'Low cabinet',cat:'Storage',w:1.2,d:.38,h:.64,kind:'cabinet',color:'#c6ac83'},
 {type:'sofa',name:'Two-seat sofa',cat:'Living',w:1.5,d:.78,h:.8,kind:'sofa',color:'#a7b7a0'},
 {type:'coffee',name:'Low coffee table',cat:'Living',w:.75,d:.45,h:.38,kind:'coffee',color:'#c6ac83'},
 {type:'tv',name:'TV & media cabinet',cat:'Living',w:1.2,d:.35,h:1.25,kind:'tv',color:'#c6ac83'},
 {type:'table',name:'Compact dining table',cat:'Living',w:.8,d:.7,h:.75,kind:'table',color:'#c6ac83'},
 {type:'stool',name:'Oak stool',cat:'Living',w:.35,d:.35,h:.46,kind:'stool',color:'#c6ac83'},
 {type:'fridge',name:'Compact refrigerator',cat:'Kitchen',w:.55,d:.52,h:1.2,kind:'fridge',color:'#e5e8e4'},
 {type:'pantry',name:'Mini pantry & sink',cat:'Kitchen',w:1.2,d:.58,h:.88,kind:'pantry',color:'#e7e6dc'},
 {type:'basin',name:'Vanity & basin',cat:'Bath',w:.6,d:.43,h:.84,kind:'basin',color:'#c6ac83'},
 {type:'toilet',name:'Toilet',cat:'Bath',w:.38,d:.66,h:.78,kind:'toilet',color:'#eeeeea'},
 {type:'shower',name:'Glass shower',cat:'Bath',w:1.20,d:.80,h:2.15,kind:'shower',color:'#b9cfcc'},
 {type:'plant',name:'Potted plant',cat:'Garden',w:.35,d:.35,h:.9,kind:'plant',color:'#bac8ae'},
 {type:'tallplant',name:'Tall indoor plant',cat:'Garden',w:.48,d:.48,h:1.5,kind:'plant',color:'#526d53'},
 {type:'outdoor',name:'Balcony bench',cat:'Garden',w:1.15,d:.45,h:.75,kind:'outdoor',color:'#bda178'},
 {type:'rug',name:'Woven area rug',cat:'Decor',w:1.5,d:1.2,h:.015,kind:'rug',color:'#c9c4aa'},
 {type:'lamp',name:'Floor lamp',cat:'Decor',w:.32,d:.32,h:1.55,kind:'lamp',color:'#ebdfc7'},
 {type:'timberBed',name:'Timber spindle bed',cat:'Sleep',w:1.60,d:2.13,h:.94,kind:'bed',roomModel:'bed',color:'#748dcb'},
 {type:'timberDesk',name:'Wooden bedroom desk',cat:'Work',w:1,d:.58,h:.75,kind:'desk',roomModel:'desk',color:'#985d35'},
 {type:'wireChair',name:'Black woven chair',cat:'Work',w:.48,d:.52,h:.95,kind:'chair',roomModel:'chair',color:'#252723'},
 {type:'timberWardrobe',name:'Timber double wardrobe',cat:'Storage',w:1.25,d:.57,h:2.03,kind:'wardrobe',roomModel:'wardrobe',color:'#aa6936'},
 {type:'leaningShelf',name:'Leaning storage shelves',cat:'Storage',w:.85,d:.36,h:1.76,kind:'shelf',roomModel:'shelf',color:'#d4c29f'},
 {type:'laundryBasket',name:'Woven laundry basket',cat:'Decor',w:.47,d:.38,h:.4,kind:'basket',roomModel:'basket',color:'#c3a4ad'},
 {type:'coatRack',name:'Tree clothes rack',keywords:'cloth rack coat hanger',cat:'Decor',w:.52,d:.52,h:1.78,kind:'coatRack',color:'#b68a5e'},
 {type:'roundTable',name:'Round wooden table',keywords:'circle desk dining',cat:'Work',w:1.10,d:1.10,h:.75,kind:'roundTable',color:'#c29b68'}
];
export const definitions = Object.fromEntries(CATALOG.map(o=>[o.type,o]));
let counter=0;
export const uid=()=>`item-${Date.now().toString(36)}-${++counter}`;
export function item(type,x,z,rot=0,extras={}){const def=definitions[type];return{id:uid(),type,x,z,rot,w:def.w,d:def.d,h:def.h,color:def.color,open:false,...extras};}
export const PRESETS=[{id:'my-little-house',name:'My little house',subtitle:'Your supplied room',image:'assets/default-layout.svg',description:'A work nook, queen bed & attached bathroom.'},{id:'my-two-floor-room',name:'My two-floor room',subtitle:'Your saved layout · 2 floors',image:'assets/two-floor-layout.svg',description:'Your furnished two-floor room, ready to make your own.'}];
export function layoutPreset(id){if(id==='my-little-house')return validateLayout(REFERENCE_LAYOUT);if(id==='my-two-floor-room')return validateLayout(TWO_FLOOR_LAYOUT);if(id==='video-room')return validateLayout(VIDEO_ROOM_LAYOUT);throw new Error('Unknown room layout.');}
export function preset(id){
 if(id==='my-little-house')return JSON.parse(JSON.stringify(REFERENCE_LAYOUT.items));
 if(id==='my-two-floor-room')return JSON.parse(JSON.stringify(TWO_FLOOR_LAYOUT.items));
 if(id==='video-room')return JSON.parse(JSON.stringify(VIDEO_ROOM_LAYOUT.items));
 const fixtures=[item('basin',-3.35,.10,Math.PI/2),item('toilet',-3.22,-.80,Math.PI/2),item('shower',-3.00,-1.825),item('outdoor',-.65,-2.91),item('plant',-1.82,-2.90),item('plant',2.65,2.9)];
 if(id==='loft')return [...fixtures,item('loft35',-1.05,-1.14),item('desk140',-1.25,-1.37,Math.PI/2,{w:1.40,d:.58}),item('chair',-.35,-1.25,-Math.PI/2),item('wardrobe',-1.70,1.35,Math.PI/2),item('sofa',1.62,.72,-Math.PI/2),item('coffee',.55,.73),item('fridge',.80,-1.96),item('shelf',.13,-2.03),item('rug',.5,.75),item('lamp',1.79,1.85)];
 if(id==='flex')return [...fixtures,item('sofabed',-1.55,-1.36,Math.PI/2),item('desk160',1.65,-.64,-Math.PI/2,{d:.72}),item('chair',.81,-.62,Math.PI/2),item('wardrobe',-1.70,1.35,Math.PI/2),item('fridge',.78,-1.94),item('rug',.02,.78),item('plant',1.78,1.85)];
 return [...fixtures,item('bed5',-.87,-1.16),item('desk140',1.68,-.60,-Math.PI/2),item('chair',.80,-.6,Math.PI/2),item('wardrobe',-1.70,1.35,Math.PI/2),item('sofa',1.65,1.23,-Math.PI/2),item('fridge',.78,-1.96),item('rug',.12,.96),item('nightstand',.22,-1.80)];
}

// Structural obstacles use the same openings as the rendered walls.
export const WALLS=[];
function wall(x,z,w,d){WALLS.push({x,z,w,d,rot:0});}
wall(-1.625,2.30,1.25,.15);wall(1.625,2.30,1.25,.15); // 2 m front opening
wall(( -2.25+1.25)/2,-2.30,3.5,.15);wall(2.15,-2.30,.2,.15); // 0.8 m rear opening
wall(2.175,0,.15,4.75);
wall(-2.175,(-2.375-.35)/2,.15,2.025);wall(-2.175,(.45+2.375)/2,.15,1.925);
wall(-3.675,-.875,.15,3);wall(-3,-2.30,1.5,.15);wall(-3,.55,1.5,.15);
// Balcony handrails, with a right-side exit and steps.
wall(-.5,-3.33,3.5,.07);wall(2.15,-3.33,.2,.07);wall(-2.21,-2.875,.07,1);wall(2.21,-2.875,.07,1);
// The two-panel front slider has a fixed right pane: about 1 m usable passage.
wall(.5,2.30,1,.045);
export const DOOR_ZONES=[{name:'Front door',x:0,z:2.19,w:2.0,d:.75,rot:0},{name:'Rear door',x:1.65,z:-2.18,w:.8,d:.7,rot:0},{name:'Bathroom door',x:-2.16,z:.05,w:.85,d:.8,rot:0}];
let structural=null,floorNavigation={holes:[],connections:[]};
export function setStructure(s,navigation={holes:[],connections:[]}){
 floorNavigation=navigation;
 structural=s;WALLS.length=0;DOOR_ZONES.length=0;
 const walls=(side)=>{const spec=wallSpec(s,side),horizontal=spec.axis==='x',{start,end,fixed}=spec;
 const holes=s.openings.filter(o=>o.side===side&&o.kind==='door').map(o=>({a:Math.max(start,o.at-o.w/2),b:Math.min(end,o.at+o.w/2)})).filter(o=>o.b>o.a).sort((a,b)=>a.a-b.a);
 let cursor=start;for(const h of [...holes,{a:end,b:end}]){if(h.a-cursor>.01){const mid=(cursor+h.a)/2;WALLS.push(horizontal?{x:mid,z:fixed,w:h.a-cursor,d:.15,rot:0}:{x:fixed,z:mid,w:.15,d:h.a-cursor,rot:0});}cursor=Math.max(cursor,h.b);}
 for(const o of s.openings.filter(o=>o.side===side&&o.kind==='door'))DOOR_ZONES.push({name:o.id,x:horizontal?o.at:fixed,z:horizontal?fixed:o.at,w:horizontal?o.w:.72,d:horizontal?.72:o.w,rot:0});
 };
 for(const spec of boundarySpecs(s))walls(spec.side);
 const slider=s.openings.find(o=>o.id==='front-door'&&o.kind==='door'&&o.w>=1.3);
 if(slider){const v=wallSpec(s,slider.side);WALLS.push(v.axis==='x'?{x:slider.at+slider.w/4,z:v.fixed,w:slider.w/2,d:.05,rot:0}:{x:v.fixed,z:slider.at+slider.w/4,w:.05,d:slider.w/2,rot:0});}
 const b=s.bounds,deck=s.balcony.depth;
 if(s.balcony.enabled!==false){WALLS.push({x:(b.left+b.right)/2-.52,z:b.back-deck+.04,w:b.right-b.left-1.05,d:.07,rot:0});for(const x of [b.left,b.right])WALLS.push({x,z:b.back-deck/2,w:.07,d:deck,rot:0});}
 if(s.room?.kind==='video-bedroom'){const hole=roomStairwell(s),ladder=roomLadder(s);WALLS.push({x:(hole.left+hole.right)/2,z:(hole.back+hole.front)/2,w:hole.right-hole.left,d:hole.front-hole.back,rot:0},{...ladder,rot:0});}
 for(const r of [...(navigation.holes||[]),...(navigation.connections||[])])WALLS.push({x:(r.left+r.right)/2,z:(r.back+r.front)/2,w:r.right-r.left,d:r.front-r.back,rot:0});
 for(const p of s.partitions)WALLS.push({x:p.x,z:p.z,w:p.w,d:p.d,rot:p.rot||0});
}

export function worldPoint(o,x,z){const c=Math.cos(o.rot||0),s=Math.sin(o.rot||0);return{x:o.x+x*c+z*s,z:o.z-x*s+z*c};}
export function localPoint(o,x,z){const c=Math.cos(o.rot||0),s=Math.sin(o.rot||0);const dx=x-o.x,dz=z-o.z;return{x:dx*c-dz*s,z:dx*s+dz*c};}
export function overlap(a,b,pad=0){
 const axes=[a.rot||0,(a.rot||0)+Math.PI/2,b.rot||0,(b.rot||0)+Math.PI/2];
 const corners=o=>[[-o.w/2,-o.d/2],[o.w/2,-o.d/2],[o.w/2,o.d/2],[-o.w/2,o.d/2]].map(p=>worldPoint(o,...p));
 const ca=corners(a),cb=corners(b);
 return axes.every(r=>{const ax=Math.cos(r),az=-Math.sin(r);const pa=ca.map(p=>p.x*ax+p.z*az),pb=cb.map(p=>p.x*ax+p.z*az);return Math.max(...pa)+pad>Math.min(...pb)+.008&&Math.max(...pb)+pad>Math.min(...pa)+.008;});
}
export function pieces(o,nav=false,height=1.7){
 const kind=definitions[o.type]?.kind;if(!kind||kind==='rug')return[];
 if(kind==='loft'){
   const sx=o.w/definitions[o.type].w,sz=o.d/definitions[o.type].d;
   const points=[[-o.w/2+.045*sx,-o.d/2+.045*sz],[o.w/2-.045*sx,-o.d/2+.045*sz],[-o.w/2+.045*sx,o.d/2-.045*sz],[o.w/2-.045*sx,o.d/2-.045*sz]];
   let result=points.map(([x,z])=>({...worldPoint(o,x,z),w:.09*sx,d:.09*sz,rot:o.rot}));
   result.push({...worldPoint(o,o.w/2-.23*sx,o.d/2+.20*sz),w:.42*sx,d:.46*sz,rot:o.rot});
   if(nav && height>o.h*(1.53/2.25))result.push({...o});
   return result;
 }
 // Sofa opens forward, leaving its rear edge fixed.
 if(kind==='sofabed'&&o.open){const scale=o.d/definitions[o.type].d;return[{...o,...worldPoint(o,0,.52*scale),d:o.d+1.04*scale}];}
 if(nav&&kind==='shower')return[]; // Walk-in shower: the entrance opens automatically.
 return[o];
}
export function itemWarnings(o,items){
 const warnings=[];const op=pieces(o);
 if(op.some(p=>WALLS.some(w=>overlap(p,w))))warnings.push('Overlaps a wall or balcony railing.');
 if(op.some(p=>items.some(other=>other.id!==o.id&&pieces(other).some(q=>overlap(p,q)))))warnings.push('Overlaps another object.');
 if(op.some(p=>DOOR_ZONES.some(w=>overlap(p,w))))warnings.push('Occupies a door clearance zone.');
 if(op.some(p=>(floorNavigation.landings||[]).some(r=>overlap(p,{x:(r.left+r.right)/2,z:(r.back+r.front)/2,w:r.right-r.left,d:r.front-r.back,rot:0}))))warnings.push('Overlaps a stair landing.');
 if(definitions[o.type].kind==='loft')warnings.push(`Loft: mattress about ${(o.h*1.88/2.25).toFixed(2)} m high. Check ceiling, guardrails & ladder.`);
 if(Math.abs(o.x)>6||Math.abs(o.z)>6)warnings.push('Outside the illustrated garden area.');
 if(structural?.room?.kind==='custom-room'){const b=structural.bounds;if(op.some(p=>p.x-p.w/2<b.left||p.x+p.w/2>b.right||p.z-p.d/2<b.back||p.z+p.d/2>b.front))warnings.push('Part of this item is outside the room.');if(o.h>structural.room.height)warnings.push('This item is taller than the ceiling.');}
 return warnings;
}
export const personRadius=height=>.30*height/1.70;
export function pointBlocked(x,z,obstacles,radius=.30){return obstacles.some(o=>{const p=localPoint(o,x,z);const dx=Math.max(Math.abs(p.x)-o.w/2,0),dz=Math.max(Math.abs(p.z)-o.d/2,0);return dx*dx+dz*dz<radius*radius;});}
export function navObstacles(items,height=1.7){return [...WALLS,...items.flatMap(o=>pieces(o,true,height))];}
export function surfaceHeight(x,z){
 if(structural){const b=structural.bounds,q=structural.bathroom,deck=structural.balcony.depth;
  if((floorNavigation.holes||[]).some(r=>x>=r.left&&x<=r.right&&z>=r.back&&z<=r.front))return FLOOR; // Navigation reserves the opening; furniture stays at this floor's elevation.
  if(structural.room?.kind==='video-bedroom'){const h=roomStairwell(structural);if(x>=h.left&&x<=h.right&&z>=h.back&&z<=h.front)return FLOOR-structural.room.stairDrop*(z-h.back)/(h.front-h.back);}
  if(x>=b.left&&x<=b.right&&z>=b.back-(structural.balcony.enabled===false?0:deck)&&z<=b.front)return FLOOR;
  if(q.enabled!==false&&x>=q.x-q.w/2&&x<=q.x+q.w/2&&z>=q.z-q.d/2&&z<=q.z+q.d/2)return FLOOR;
  if(Math.abs(x-(b.left+b.right)/2)<1&&z>=b.front&&z<b.front+.825)return Math.max(.02,FLOOR*(1-(z-b.front)/.825));
  if(x>b.right-1.15&&x<b.right-.05&&z<b.back-deck&&z>b.back-deck-.825)return Math.max(.02,FLOOR*(1-(b.back-deck-z)/.825));
  return .025;
 }
 if(x>=-2.25&&x<=2.25&&z>=-3.375&&z<=2.375)return FLOOR;
 if(x>=-3.75&&x<-2.25&&z>=-2.375&&z<=.625)return FLOOR;
 if(Math.abs(x)<1.3&&z>=2.375&&z<3.2)return Math.max(.02,FLOOR*(1-(z-2.375)/.825));
 if(x>1.13&&x<2.16&&z<-3.375&&z>-4.2)return Math.max(.02,FLOOR*(1-(-z-3.375)/.825));
 return .025;
}
// Limit raised-floor transitions to the front and rear stair approaches.
function traversableSurface(a,b){return Math.abs(surfaceHeight(a.x,a.z)-surfaceHeight(b.x,b.z))<.14;}
class Heap{constructor(){this.v=[];}push(v){let a=this.v,i=a.push(v)-1;while(i){let p=(i-1)>>1;if(a[p].f<=v.f)break;a[i]=a[p];i=p;}a[i]=v;}pop(){let a=this.v,r=a[0],v=a.pop();if(a.length){let i=0;while(i*2+1<a.length){let j=i*2+1;if(j+1<a.length&&a[j+1].f<a[j].f)j++;if(a[j].f>=v.f)break;a[i]=a[j];i=j;}a[i]=v;}return r;}}
export function findPath(start,end,items,height=1.7){
 if(![start.x,start.z,end.x,end.z].every(v=>Number.isFinite(v)&&Math.abs(v)<=6))return null;
 const step=.10,min=-6,max=6,n=121,obs=navObstacles(items,height),radius=personRadius(height);
 const idx=(x,z)=>Math.round((z-min)/step)*n+Math.round((x-min)/step);
 const point=i=>({x:min+(i%n)*step,z:min+Math.floor(i/n)*step});
 const startI=idx(start.x,start.z),endI=idx(end.x,end.z);if(startI<0||startI>=n*n||endI<0||endI>=n*n)return null;
 if(pointBlocked(end.x,end.z,obs,radius))return null;
 const blocked=new Int8Array(n*n);blocked.fill(-1);
 function free(i){if(i<0||i>=n*n)return false;if(blocked[i]<0){const p=point(i);blocked[i]=pointBlocked(p.x,p.z,obs,radius)?1:0;}return !blocked[i];}
 if(!free(startI)||!free(endI))return null;
 const g=new Float32Array(n*n);g.fill(Infinity);g[startI]=0;const from=new Int32Array(n*n);from.fill(-1);const closed=new Uint8Array(n*n);const heap=new Heap();heap.push({i:startI,f:0});
 while(heap.v.length){const cur=heap.pop().i;if(closed[cur])continue;closed[cur]=1;if(cur===endI){let result=[end];for(let j=endI;j!==startI;j=from[j])result.push(point(j));result.push(start);return result.reverse();}
 const p=point(cur),cx=cur%n,cz=Math.floor(cur/n);
 for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const xx=cx+dx,zz=cz+dz;if(xx<0||xx>=n||zz<0||zz>=n)continue;const ni=zz*n+xx;if(closed[ni]||!free(ni))continue;if(dx&&dz&&(!free(cz*n+xx)||!free(zz*n+cx)))continue;const q=point(ni);if(!traversableSurface(p,q))continue;const cost=g[cur]+Math.hypot(dx,dz);if(cost>=g[ni])continue;g[ni]=cost;from[ni]=cur;heap.push({i:ni,f:cost+Math.hypot(q.x-end.x,q.z-end.z)/step});}}
 return null;
}
export function destination(action,items){
 if(structural){const b=structural.bounds,q=structural.bathroom;
  if(action==='bathroom')return q.enabled===false?[]:[{x:q.x,z:q.z,pose:'stand',label:'In the bathroom'}];
  if(action==='balcony')return structural.balcony.enabled===false?[]:[{x:b.right-.6,z:b.back-structural.balcony.depth/2,pose:'stand',label:'Taking a balcony break'}];
  if(action==='entrance'&&structural.room?.kind==='video-bedroom'){const h=roomStairwell(structural);return[{x:h.left-.45,z:h.back+.22,pose:'stand',label:'At the stair landing'}];}
  if(action==='entrance'){const door=structural.openings.find(o=>o.kind==='door'&&o.side==='front')||structural.openings.find(o=>o.id==='front-door');if(door){const v=wallSpec(structural,door.side),inward={front:-1,back:1,left:1,right:-1}[door.side];return[{x:v.axis==='x'?door.at:v.fixed+inward*.4,z:v.axis==='x'?v.fixed+inward*.4:door.at,pose:'stand',label:'At the entrance'}];}return[];}
 }
 if(action==='bathroom')return[{x:-2.64,z:.05,pose:'stand',label:'In the bathroom'}];
 if(action==='balcony')return[{x:1.55,z:-2.88,pose:'stand',label:'Taking a balcony break'}];
 if(action==='entrance')return[{x:-.5,z:2.02,pose:'stand',label:'At the front door'}];
 if(action==='bed'){
  const o=items.find(o=>['bed','loft','sofabed'].includes(definitions[o.type].kind));if(!o)return[];
  if(definitions[o.type].kind==='loft')return[{...worldPoint(o,o.w/2-.23*o.w/definitions[o.type].w,o.d/2+.83*o.d/definitions[o.type].d),pose:'sleep',item:o,label:'Climbing to bed'}];
  const eff=pieces(o)[0];return [[-eff.w/2-.42,.15],[eff.w/2+.42,.15],[0,eff.d/2+.42]].map(p=>({...worldPoint(eff,...p),pose:'sleep',item:o,label:'Resting on the bed'}));
 }
 if(action==='desk'){
  const desk=items.find(o=>['desk','gaming','roundTable'].includes(definitions[o.type].kind));if(!desk)return[];
  const chairs=items.filter(o=>definitions[o.type].kind==='chair').sort((a,b)=>Math.hypot(a.x-desk.x,a.z-desk.z)-Math.hypot(b.x-desk.x,b.z-desk.z));const chair=chairs[0];
  if(chair && Math.hypot(chair.x-desk.x,chair.z-desk.z)<1.8)return [[-.72,0],[.72,0],[0,.72],[0,-.72]].map(p=>({...worldPoint(chair,...p),pose:'sit',item:chair,label:'Working at the desk'}));
  return[{...worldPoint(desk,0,desk.d/2+.45),pose:'stand',label:'At the desk (add a chair to sit)'}];
 }
 return[];
}
export function validateLayout(data,nested=false){
 if(!data||data.format!=='house-studio-3d'||data.version!==1||!Array.isArray(data.items)||data.items.length>180)throw new Error('Not a supported House Studio layout (maximum 180 items).');
 const ids=new Set();const items=data.items.map(o=>{if(!o||!definitions[o.type]||typeof o.id!=='string'||o.id.length>100||ids.has(o.id))throw new Error('Invalid or duplicate furniture ID.');ids.add(o.id);for(const k of ['x','z','rot','w','d','h'])if(typeof o[k]!=='number'||!Number.isFinite(o[k]))throw new Error('Furniture dimensions must be finite numbers.');if(Math.abs(o.x)>6||Math.abs(o.z)>6||o.w<.1||o.w>4||o.d<.1||o.d>4||o.h<.01||o.h>3||Math.abs(o.rot)>100)throw new Error('Furniture dimensions or positions are outside the supported range.');if(o.type==='roundTable'&&Math.abs(o.w-o.d)>.001)throw new Error('A round table needs equal width and depth. Change its diameter.');if(!/^#[0-9a-f]{6}$/i.test(o.color))throw new Error('Invalid furniture colour.');return{id:o.id,type:o.type,x:o.x,z:o.z,rot:o.rot,w:o.w,d:o.d,h:o.h,color:o.color,open:!!o.open};});
 let structure;
 if(data.structure!==undefined){const s=data.structure;if(!s||typeof s!=='object'||!s.bounds||!s.bathroom||!s.balcony||!s.colors||!Array.isArray(s.openings)||!Array.isArray(s.partitions)||s.openings.length>40||s.partitions.length>30)throw new Error('Invalid structural layout.');
  for(const [obj,fields] of [[s.bounds,['left','right','back','front']],[s.bathroom,['x','z','w','d']],[s.balcony,['depth']]])for(const k of fields)if(!Number.isFinite(obj[k])||Math.abs(obj[k])>6)throw new Error('Invalid structural dimensions.');
  if(s.bounds.right-s.bounds.left<2||s.bounds.front-s.bounds.back<2||s.bathroom.w<.8||s.bathroom.d<.8||s.balcony.depth<.5||s.balcony.depth>3)throw new Error('Structural dimensions are too small or out of range.');
  const colors=['wall','floor','foundation','bathWall','bathFloor','roof','bathRoof','balcony','rail','door','window','frame','trim','garden'];for(const k of colors)if(!/^#[0-9a-f]{6}$/i.test(s.colors[k]||''))throw new Error('Invalid structural color.');
  const seen=new Set();for(const o of s.openings){if(!o||typeof o.id!=='string'||o.id.length>60||seen.has(o.id)||!['door','window'].includes(o.kind)||!['front','back','left','right','bath-front','bath-back','bath-left','bath-right'].includes(o.side)||!['at','w','h','sill'].every(k=>Number.isFinite(o[k]))||Math.abs(o.at)>6||o.w<.4||o.w>3||o.h<.3||o.h>2.7||o.sill<0||o.sill+o.h>3)throw new Error('Invalid door or window.');seen.add(o.id);}
  for(const p of s.partitions)if(!p||typeof p.id!=='string'||p.id.length>60||seen.has(p.id)||!['x','z','w','d','h','rot'].every(k=>Number.isFinite(p[k]))||Math.abs(p.x)>6||Math.abs(p.z)>6||p.w<.1||p.d<.1||p.h<.3||p.h>3||p.w>6||p.d>6||!/^#[0-9a-f]{6}$/i.test(p.color))throw new Error('Invalid partition.');else seen.add(p.id);
  for(const [key,value] of Object.entries(s.colors))if(!/^#[0-9a-f]{6}$/i.test(value))throw new Error('Invalid structural color.');
  if(s.bathroom.side!==undefined&&(!MAIN_SIDES.includes(s.bathroom.side)||!['start','end','depth'].every(k=>Number.isFinite(s.bathroom[k]))||s.bathroom.end-s.bathroom.start<.8||s.bathroom.depth<.8||s.bathroom.depth>4))throw new Error('Invalid bathroom attachment.');
  if(s.wallSplits!==undefined){if(!s.wallSplits||typeof s.wallSplits!=='object'||Array.isArray(s.wallSplits))throw new Error('Invalid wall splits.');for(const [side,points] of Object.entries(s.wallSplits)){if(!MAIN_SIDES.includes(side)||!Array.isArray(points)||points.length>12||points.some(n=>!Number.isFinite(n)||Math.abs(n)>6))throw new Error('Invalid wall splits.');}}
  if(s.segmentColors!==undefined){if(!s.segmentColors||typeof s.segmentColors!=='object'||Array.isArray(s.segmentColors))throw new Error('Invalid segment colors.');for(const [id,color] of Object.entries(s.segmentColors))if(!/^segment-(front|back|left|right)-\d{1,2}$/.test(id)||!/^#[0-9a-f]{6}$/i.test(color))throw new Error('Invalid wall section color.');}
  if(s.finishes!==undefined){if(!s.finishes||typeof s.finishes!=='object'||Array.isArray(s.finishes))throw new Error('Invalid floor finishes.');for(const [target,f] of Object.entries(s.finishes))if(!['floor','bathFloor'].includes(target)||!f||!FLOOR_MATERIALS.some(m=>m.id===f.material)||!Number.isFinite(f.scale)||f.scale<.15||f.scale>3||!Number.isFinite(f.rotation)||Math.abs(f.rotation)>360)throw new Error('Invalid floor finish.');}
  if(s.wallVisibility!==undefined){if(!s.wallVisibility||typeof s.wallVisibility!=='object'||Array.isArray(s.wallVisibility))throw new Error('Invalid wall visibility.');for(const [key,value] of Object.entries(s.wallVisibility))if(![...SIDES,...s.partitions.map(p=>p.id)].includes(key)||!['full','low','hidden'].includes(value))throw new Error('Invalid wall visibility.');}
  for(const obj of [s.bathroom,s.balcony])if(obj.enabled!==undefined&&typeof obj.enabled!=='boolean')throw new Error('Invalid room component visibility.');
  if(s.room!==undefined){const r=s.room,W=s.bounds.right-s.bounds.left,D=s.bounds.front-s.bounds.back;if(!r||!['video-bedroom','custom-room'].includes(r.kind)||typeof r.estimated!=='boolean'||!Number.isFinite(r.height)||r.height<2||r.height>3)throw new Error('Use a ceiling height from 2 to 3 metres.');if(r.kind==='video-bedroom'&&(!['stairWidth','stairRun','stairDrop','ladderRun'].every(k=>Number.isFinite(r[k]))||r.stairWidth<.6||r.stairWidth>Math.min(2,W-.8)||r.stairRun<.8||r.stairRun>D-.8||r.stairDrop<.6||r.stairDrop>3||r.ladderRun<.5||r.ladderRun>1.5))throw new Error('Check the stair and ladder dimensions.');}
  if(s.room&&s.openings.some(o=>o.sill+o.h>s.room.height+.001))throw new Error('Lower the existing window or door opening before reducing the ceiling below it.');
  structure=normalizeStructure(s);
  const q=structure.bathroom;if(q.enabled!==false&&Math.max(Math.abs(q.x-q.w/2),Math.abs(q.x+q.w/2),Math.abs(q.z-q.d/2),Math.abs(q.z+q.d/2))>6)throw new Error('The attached bathroom must stay within the 12 m planning area.');
  if(Object.values(structure.wallSplits).some(points=>points.length>12))throw new Error('Maximum 12 split points per exterior wall.');
 }
 const result={format:'house-studio-3d',version:1,name:typeof data.name==='string'?data.name.slice(0,60):'Imported layout',preset:PRESETS.some(p=>p.id===data.preset)?data.preset:'custom',items,...(structure?{structure}:{})};
 if(data.floors!==undefined){
  if(nested||!Array.isArray(data.floors)||data.floors.length<1||data.floors.length>MAX_FLOORS||!structure)throw new Error('Use one to four floors.');
  const seen=new Set();result.activeFloorId=data.activeFloorId;
  result.floors=data.floors.map(f=>{if(!f||typeof f.id!=='string'||!/^floor-[a-z0-9-]{1,50}$/.test(f.id)||seen.has(f.id)||typeof f.name!=='string'||!f.name.trim())throw new Error('Invalid floor name or ID.');seen.add(f.id);const checked=validateLayout({format:result.format,version:1,name:f.name,items:f.id===data.activeFloorId?items:f.items,structure:f.id===data.activeFloorId?structure:f.structure},true);if(!checked.structure)throw new Error('Every floor needs a room.');return{id:f.id,name:f.name.slice(0,40),items:checked.items,structure:checked.structure};});
  if(!seen.has(result.activeFloorId))throw new Error('Choose an existing floor.');
  if(!Array.isArray(data.stairs)||data.stairs.length>12)throw new Error('Invalid floor connections.');const linkIds=new Set();
  result.stairs=data.stairs.map(l=>{if(!l||typeof l.id!=='string'||!/^stairs-[a-z0-9-]{1,60}$/.test(l.id)||linkIds.has(l.id)||(l.turn!==undefined&&!['left','right'].includes(l.turn))||!STAIR_STYLES.some(s=>s.id===l.style)||!['x','z','w','run','rot'].every(k=>Number.isFinite(l[k]))||Math.abs(l.x)>6||Math.abs(l.z)>6||l.w<.5||l.w>3||l.run<.4||l.run>5||Math.abs(l.rot)>Math.PI*2+.001||Math.abs(l.rot/(Math.PI/2)-Math.round(l.rot/(Math.PI/2)))>.001||!/^#[0-9a-f]{6}$/i.test(l.color))throw new Error('Invalid stair or ladder dimensions.');linkIds.add(l.id);return{id:l.id,from:l.from,to:l.to,style:l.style,x:l.x,z:l.z,w:l.w,run:l.run,rot:l.rot,color:l.color,...(l.style==='turn'||l.turn!==undefined?{turn:l.turn||'right'}:{})};});
  for(const link of result.stairs){const problem=connectionProblem(result,link);if(problem)throw new Error(problem);}
  for(let i=1;i<result.floors.length;i++)if(!result.stairs.some(l=>l.from===result.floors[i-1].id&&l.to===result.floors[i].id))throw new Error('Each upper floor needs stairs or a ladder.');
 }
 return result;
}
