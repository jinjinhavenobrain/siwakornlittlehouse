import * as T from 'three';
import {FLOOR, setStructure} from './core.js';
import {box, mat, glass, cylinder} from './models.js';
import {REFERENCE_LAYOUT} from './default-layout.js';
import {normalizeStructure,wallSpec,SIDES,sharedBathSide,wallSegments,structuralIssues} from './structure.js';
import {floorMaterial} from './finishes.js';

export const DEFAULT_STRUCTURE = normalizeStructure(REFERENCE_LAYOUT.structure);
export {SIDES,wallSpec,structuralIssues};
export const cloneStructure=()=>JSON.parse(JSON.stringify(DEFAULT_STRUCTURE));
export function makeArchitecture(scene,s){
 setStructure(s);
 const structure=new T.Group(),full=new T.Group(),cut=new T.Group(),roof=new T.Group(),garden=new T.Group(),doors=new T.Group(),lightsGroup=new T.Group();scene.add(structure,full,cut,roof,garden,doors,lightsGroup);
 const b=s.bounds,ba=s.bathroom,c=s.colors,W=b.right-b.left,D=b.front-b.back,cx=(b.left+b.right)/2,cz=(b.front+b.back)/2,thick=.15;
 function tag(m,id){m.userData.structureId=id;return m;}
 function cub(g,w,h,d,x,y,z,color,id,rounded=0){const m=box(g,w,h,d,x,y,z,color,rounded);if(id)tag(m,id);return m;}
 const wallGroups={};
 function floorSurface(w,d,x,z,target,id){const material=floorMaterial(s.finishes[target],c[target],w,d),m=new T.Mesh(new T.PlaneGeometry(w,d),material);m.rotation.x=-Math.PI/2;m.position.set(x,FLOOR+.008,z);m.receiveShadow=true;tag(m,id);structure.add(m);}
 // Raised slab, finish, bathroom, and rear deck follow the edited dimensions.
 cub(structure,W,.36,D,cx,.18,cz,c.foundation,'floor',.025);
 floorSurface(W-.15,D-.15,cx,cz,'floor','floor');
 cub(structure,ba.w,.36,ba.d,ba.x,.18,ba.z,c.foundation,'bathroom');
 floorSurface(ba.w-.15,ba.d-.15,ba.x,ba.z,'bathFloor','bathroom');
 const deckCenter=b.back-s.balcony.depth/2;
 cub(structure,W,.12,s.balcony.depth,cx,FLOOR-.07,deckCenter,c.balcony,'balcony',.008);
 for(let z=b.back-s.balcony.depth+.07;z<b.back;z+=.17)cub(structure,W-.08,.004,.009,cx,FLOOR-.007,z,c.rail,'balcony');
 const railZ=b.back-s.balcony.depth+.055;
 for(let x=b.left+.10;x<b.right-.05;x+=.23){if(x>b.right-1.1&&x<b.right-.17)continue;cub(structure,.035,.82,.035,x,FLOOR+.42,railZ,c.rail,'balcony');}
 cub(structure,W-.9,.055,.07,cx-.43,FLOOR+.86,railZ,c.rail,'balcony');
 for(const x of [b.left+.04,b.right-.04]){cub(structure,.05,.08,s.balcony.depth,x,FLOOR+.86,deckCenter,c.rail,'balcony');for(let z=railZ+.1;z<b.back-.05;z+=.23)cub(structure,.04,.8,.04,x,FLOOR+.42,z,c.rail,'balcony');}
 const lights=[];
 for(const [x,z] of [[cx-.9,cz-.6],[cx+.9,cz+.8],[ba.x,ba.z],[cx,deckCenter]]){cylinder(lightsGroup,.065,.065,.05,x,FLOOR+2.77,z,'#f5e8d3');const light=new T.PointLight('#ffdfaa',0,5,2);light.position.set(x,FLOOR+2.5,z);lightsGroup.add(light);lights.push(light);}
 const openingMeshes={};const doorLeaves={};
 function holeSegments(group,axis,start,end,fixed,holes,col,height,id){
  const cuts=[start,end,...holes.flatMap(h=>[Math.max(start,h.at-h.w/2),Math.min(end,h.at+h.w/2)])].filter(v=>v>=start&&v<=end).sort((a,b)=>a-b);
  for(let k=1;k<cuts.length;k++){const from=cuts[k-1],to=cuts[k];if(to-from<.002)continue;const mid=(from+to)/2,open=holes.find(h=>mid>h.at-h.w/2&&mid<h.at+h.w/2),pieces=open?[[0,open.sill],[open.sill+open.h,height]]:[[0,height]];
   for(const [low,high] of pieces){if(high-low<.002)continue;const w=axis==='x'?to-from:thick,d=axis==='x'?thick:to-from,x=axis==='x'?mid:fixed,z=axis==='x'?fixed:mid;
     cub(group,w,high-low,d,x,FLOOR+(high+low)/2,z,col,id);
    }
  }
 }
 function putOpening(o){const spec=wallSpec(s,o.side),horizontal=spec.axis==='x',pos=horizontal?[o.at,spec.fixed]:[spec.fixed,o.at],x=pos[0],z=pos[1];
  const g=new T.Group();g.position.set(x,FLOOR+o.sill,z);if(!horizontal)g.rotation.y=-Math.PI/2;doors.add(g);g.userData.structureId=o.id;openingMeshes[o.id]=g;
  const frm=c.frame,leafColor=o.color||(o.kind==='window'?c.window:c.door);
  for(const xx of [-o.w/2,o.w/2])cub(g,.055,o.h,.10,xx,o.h/2,0,frm,o.id);
  for(const yy of [0,o.h])cub(g,o.w+.06,.055,.10,0,yy,0,frm,o.id);
  if(o.kind==='window'){cub(g,o.w-.06,o.h-.08,.024,0,o.h/2,0,new T.MeshStandardMaterial({color:leafColor,transparent:true,opacity:.32,depthWrite:false,side:T.DoubleSide}),o.id);cub(g,.027,o.h,.09,0,o.h/2,0,frm,o.id);}
  else if(o.id==='front-door'&&o.w>=1.3){
   const panelW=o.w/2-.04,leaf=new T.Group();g.add(leaf);
   cub(leaf,panelW,o.h-.08,.029,-o.w/4,o.h/2,0,o.color?leafColor:glass,o.id);
   cub(leaf,.025,o.h-.05,.05,-o.w/2+.035,o.h/2,0,frm,o.id);
   cub(leaf,.025,.16,.05,-.06,o.h*.51,.045,frm,o.id);
   cub(g,panelW,o.h-.08,.029,o.w/4,o.h/2,-.015,o.color?leafColor:glass,o.id);
   cub(g,.028,o.h-.05,.05,o.w/2-.04,o.h/2,0,frm,o.id);
   doorLeaves[o.id]=leaf;
  } else {const leaf=new T.Group();leaf.position.x=-o.w/2+.04;g.add(leaf);cub(leaf,o.w-.08,o.h-.08,.032,o.w/2-.04,o.h/2,0,leafColor,o.id);cub(leaf,.022,.13,.08,o.w-.20,o.h*.51,.05,frm,o.id);doorLeaves[o.id]=leaf;}
 }
 for(const side of SIDES.filter(side=>side!==sharedBathSide(s))){const v=wallSpec(s,side),holes=s.openings.filter(o=>o.side===side&&o.at+o.w/2>v.start&&o.at-o.w/2<v.end);
  const bath=side.startsWith('bath-'),height=bath?2.74:3;
  const high=new T.Group(),low=new T.Group();full.add(high);cut.add(low);wallGroups[side]={full:high,low};
  for(const run of bath?[{...v,id:side+'-wall'}]:wallSegments(s,side)){
   const id=run.id,color=s.segmentColors?.[id]||(bath?c.bathWall:(c[side+'Wall']||c.wall));
   holeSegments(high,v.axis,run.start,run.end,v.fixed,holes,color,height,id);
   const lowHoles=holes.filter(o=>o.kind==='door').map(o=>({...o,h:.65,sill:0}));holeSegments(low,v.axis,run.start,run.end,v.fixed,lowHoles,color,.64,id);
  }
 }
 for(const o of s.openings)putOpening(o);
 for(const p of s.partitions){const high=new T.Group(),low=new T.Group();full.add(high);cut.add(low);wallGroups[p.id]={full:high,low};const m=cub(high,p.w,p.h,p.d,p.x,FLOOR+p.h/2,p.z,p.color||c.wall,p.id),l=cub(low,p.w,Math.min(.65,p.h),p.d,p.x,FLOOR+Math.min(.65,p.h)/2,p.z,p.color||c.wall,p.id);m.rotation.y=l.rotation.y=p.rot||0;}
 // Adjustable gable roof, attached to shell and colored independently.
 const rise=.84,run=W/2+.35,angle=Math.atan2(rise,W/2),roofDepth=D+.65;
 for(const sign of [-1,1]){const m=cub(roof,Math.hypot(run,rise),.13,roofDepth,cx+sign*run/2,FLOOR+3+rise/2,cz,c.roof,'roof');m.rotation.z=-sign*angle;}
 for(const z of [b.back,b.front]){const triangle=new T.Shape();triangle.moveTo(b.left,0);triangle.lineTo(b.right,0);triangle.lineTo(cx,rise);triangle.closePath();const mesh=new T.Mesh(new T.ExtrudeGeometry(triangle,{depth:.13,bevelEnabled:false}),mat(c.wall));mesh.position.set(0,FLOOR+3,z-.065);mesh.castShadow=true;tag(mesh,'roof');roof.add(mesh);}
 cub(roof,ba.w+.3,.11,ba.d+.4,ba.x,FLOOR+2.86,ba.z,c.bathRoof,'bath-roof');
 // Rear balcony cover changes with the balcony depth.
 const porch=cub(roof,W,.1,s.balcony.depth+.2,cx,FLOOR+2.80,deckCenter,c.roof,'roof');porch.rotation.x=-.07;
 const entry=new T.Group();entry.position.set(cx,FLOOR,b.front);doors.add(entry);
 for(let i=0;i<3;i++){const k=3-i;cub(structure,1.85,.126*k,.29,cx,.063*k,b.front+.19+i*.27,c.foundation,'floor');cub(structure,.90,.126*k,.29,b.right-.50,.063*k,railZ-.22-i*.27,c.balcony,'balcony');}
 cub(garden,13,.12,13,-.2,-.08,0,c.garden,'garden',.07);
 for(let z=b.front+1;z<6;z+=.50)cub(garden,1.2,.03,.31,cx,.02,z,'#d6d7c8','garden',.01);
 for(const [x,z] of [[-5,-3.8],[5,-4.0],[5,3.6],[-4.9,4]]){const trunk=cylinder(garden,.07,.13,1.4,x,.7,z,'#807556',9);const crown=new T.Mesh(new T.IcosahedronGeometry(.75,1),mat('#71885e'));crown.position.set(x,1.75,z);garden.add(crown);trunk.userData.structureId='garden';}
 const base=new T.Mesh(new T.PlaneGeometry(200,200),mat('#e7ede3'));base.rotation.x=-Math.PI/2;base.position.y=-.15;base.receiveShadow=true;scene.add(base);
 return {structure,full,cut,roof,garden,doors,lightsGroup,lights,base,openingMeshes,doorLeaves,wallGroups,
  front:openingMeshes['front-door']||new T.Group(),rear:openingMeshes['rear-door']||new T.Group(),bath:openingMeshes['bath-inner']||new T.Group(),
  frontLeaf:doorLeaves['front-door']||new T.Group(),rearPivot:doorLeaves['rear-door']||new T.Group(),bathLeaf:doorLeaves['bath-inner']||new T.Group()};
}
export function removeArchitecture(scene,house){for(const key of ['structure','full','cut','roof','garden','doors','lightsGroup']){scene.remove(house[key]);house[key].traverse(m=>{if(m.geometry&&!m.geometry.userData.shared)m.geometry.dispose();if(m.material&&!m.material.userData.shared){if(m.material.userData.floorTexture)m.material.map?.dispose();m.material.dispose();}});}scene.remove(house.base);house.base.geometry.dispose();}
