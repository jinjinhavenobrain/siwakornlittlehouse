import * as T from 'three';
import {FLOOR,setStructure} from './core.js';
import {box,mat} from './models.js';
import {boundarySpecs,wallSegments} from './structure.js';
import {floorMaterial} from './finishes.js';
import {floorRectangles,connectionFootprint,connectionLanding} from './floors.js';
import {stairModel,openingGuard} from './stair-models.js';
import {addFences} from './surface-models.js';

export function makeCustomArchitecture(scene,s,options={}){
 const incoming=options.incoming||[],outgoing=options.outgoing||[],stairHoles=incoming.map(link=>connectionFootprint(link)),holes=[...stairHoles,...(s.floorCuts||[])];
 setStructure(s,{holes:stairHoles,connections:outgoing.map(link=>connectionFootprint(link)),landings:[...incoming.map(l=>connectionLanding(l,true)),...outgoing.map(l=>connectionLanding(l,false))]});
 const structure=new T.Group(),full=new T.Group(),cut=new T.Group(),roof=new T.Group(),garden=new T.Group(),doors=new T.Group(),lightsGroup=new T.Group();scene.add(structure,full,cut,roof,garden,doors,lightsGroup);
 const b=s.bounds,c=s.colors,H=s.room.height,wallGroups={},openingMeshes={},doorLeaves={},lights=[];
 const tag=(m,id)=>(m.userData.structureId=id,m),cub=(g,w,h,d,x,y,z,color,id)=>tag(box(g,w,h,d,x,y,z,color),id);
 function surface(rect,target='floor',id='floor'){
  const w=rect.right-rect.left,d=rect.front-rect.back,x=(rect.left+rect.right)/2,z=(rect.back+rect.front)/2;
  cub(structure,w,.18,d,x,FLOOR-.09,z,c.foundation,id);
  const m=tag(new T.Mesh(new T.PlaneGeometry(w,d),floorMaterial(s.finishes[target],c[target],w,d,{x,z})),id);m.rotation.x=-Math.PI/2;m.position.set(x,FLOOR+.008,z);m.receiveShadow=true;structure.add(m);
 }
 for(const rect of floorRectangles(b,holes))surface(rect);
 if(s.bathroom.enabled!==false){const q=s.bathroom;surface({left:q.x-q.w/2,right:q.x+q.w/2,back:q.z-q.d/2,front:q.z+q.d/2},'bathFloor','bathroom');cub(roof,q.w,.12,q.d,q.x,FLOOR+H+.06,q.z,c.bathRoof,'bath-roof');}
 if(s.balcony.enabled!==false){const d=s.balcony.depth;surface({left:b.left,right:b.right,back:b.back-d,front:b.back});}
 function wall(group,v,openings,height,color,id){
  const cuts=[v.start,v.end,...openings.flatMap(o=>[Math.max(v.start,o.at-o.w/2),Math.min(v.end,o.at+o.w/2)])].filter(n=>n>=v.start&&n<=v.end).sort((a,b)=>a-b);
  for(let i=1;i<cuts.length;i++){
   const a=cuts[i-1],z=cuts[i],mid=(a+z)/2;if(z-a<.002)continue;const opening=openings.find(o=>mid>o.at-o.w/2&&mid<o.at+o.w/2);
   for(const [low,high] of opening?[[0,Math.min(opening.sill,height)],[opening.sill+opening.h,height]]:[[0,height]])if(high>low)cub(group,v.axis==='x'?z-a:.15,high-low,v.axis==='x'?.15:z-a,v.axis==='x'?mid:v.fixed,FLOOR+(high+low)/2,v.axis==='x'?v.fixed:mid,color,id);
  }
 }
 for(const v of boundarySpecs(s)){
  const high=new T.Group(),low=new T.Group();full.add(high);cut.add(low);wallGroups[v.side]={full:high,low};const bath=v.side.startsWith('bath-'),open=s.openings.filter(o=>o.side===v.side);
  for(const run of bath?[{...v,id:v.side+'-wall'}]:wallSegments(s,v.side)){const color=s.segmentColors[run.id]||(bath?c.bathWall:c[v.side+'Wall']||c.wall);wall(high,run,open,H,color,run.id);wall(low,run,open,.64,color,run.id);}
 }
 for(const p of s.partitions){const high=new T.Group(),low=new T.Group();full.add(high);cut.add(low);wallGroups[p.id]={full:high,low};for(const [g,h] of [[high,p.h],[low,Math.min(.64,p.h)]]){const m=cub(g,p.w,h,p.d,p.x,FLOOR+h/2,p.z,p.color,p.id);m.rotation.y=p.rot;}}
 for(const o of s.openings){
  const v=boundarySpecs(s).find(v=>v.side===o.side);if(!v)continue;const g=tag(new T.Group(),o.id);g.position.set(v.axis==='x'?o.at:v.fixed,FLOOR+o.sill,v.axis==='x'?v.fixed:o.at);if(v.axis==='z')g.rotation.y=-Math.PI/2;doors.add(g);openingMeshes[o.id]=g;
  for(const x of [-o.w/2,o.w/2])cub(g,.055,o.h,.10,x,o.h/2,0,c.frame,o.id);for(const y of [0,o.h])cub(g,o.w+.05,.055,.10,0,y,0,c.frame,o.id);
  if(o.kind==='window'){cub(g,o.w-.06,o.h-.06,.02,0,o.h/2,0,new T.MeshStandardMaterial({color:o.color||c.window,transparent:true,opacity:.30,depthWrite:false,side:T.DoubleSide}),o.id);cub(g,.025,o.h,.06,0,o.h/2,0,c.frame,o.id);}
  else {const leaf=new T.Group();leaf.position.x=-o.w/2+.04;g.add(leaf);cub(leaf,o.w-.08,o.h-.07,.035,o.w/2-.04,o.h/2,0,o.color||c.door,o.id);cub(leaf,.025,.13,.07,o.w-.18,o.h*.52,.045,c.frame,o.id);doorLeaves[o.id]=leaf;}
 }
 // Ceiling openings align with the next floor's stairwell.
 for(const rect of floorRectangles(b,[...outgoing.map(link=>connectionFootprint(link)),...(options.ceilingHoles||[])]))cub(roof,rect.right-rect.left,.10,rect.front-rect.back,(rect.left+rect.right)/2,FLOOR+H+.05,(rect.back+rect.front)/2,c.roof,'ceiling');
 for(const link of outgoing){const m=stairModel(link,link.rise);m.position.y=FLOOR;structure.add(m);}
 for(const link of incoming){if(options.showIncoming!==false){const m=stairModel(link,link.rise);m.position.y=FLOOR-link.rise;structure.add(m);}structure.add(openingGuard(link,FLOOR));}
 addFences(structure,s,FLOOR);
 const light=new T.PointLight('#fff1d7',0,9,2);light.position.set((b.left+b.right)/2,FLOOR+H-.2,(b.back+b.front)/2);lightsGroup.add(light);lights.push(light);
 const base=new T.Mesh(new T.PlaneGeometry(200,200),mat('#e7ede3'));base.rotation.x=-Math.PI/2;base.position.y=-.15;base.receiveShadow=true;scene.add(base);
 return {structure,full,cut,roof,garden,doors,lightsGroup,lights,base,wallGroups,openingMeshes,doorLeaves};
}
