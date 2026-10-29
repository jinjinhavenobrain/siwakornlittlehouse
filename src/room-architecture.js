import * as T from 'three';
import {FLOOR,setStructure} from './core.js';
import {box,mat,cylinder} from './models.js';
import {boundarySpecs,wallSegments} from './structure.js';
import {roomStairwell,roomLadder,roomFloorRectangles} from './video-room.js';
import {floorMaterial} from './finishes.js';
import {floorRectangles} from './floors.js';
import {addFences} from './surface-models.js';

export function makeVideoArchitecture(scene,s){
 setStructure(s);
 const structure=new T.Group(),full=new T.Group(),cut=new T.Group(),roof=new T.Group(),garden=new T.Group(),doors=new T.Group(),lightsGroup=new T.Group();scene.add(structure,full,cut,roof,garden,doors,lightsGroup);
 const c=s.colors,b=s.bounds,r=s.room,height=r.height,hole=roomStairwell(s),ladder=roomLadder(s),wallGroups={},openingMeshes={},doorLeaves={},lights=[];
 const tag=(m,id)=>(m.userData.structureId=id,m);
 const cub=(g,w,h,d,x,y,z,color,id,round=0)=>tag(box(g,w,h,d,x,y,z,color,round),id);
 const rod=(g,a,b,width,color,id)=>{const start=new T.Vector3(...a),end=new T.Vector3(...b),m=cub(g,width,start.distanceTo(end),width,0,0,0,color,id,.005);m.position.copy(start).add(end).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),end.sub(start).normalize());return m;};
 function floorRectangle(rect,target='floor',id='floor'){
  const w=rect.right-rect.left,d=rect.front-rect.back,x=(rect.left+rect.right)/2,z=(rect.back+rect.front)/2;
  cub(structure,w,.14,d,x,FLOOR-.075,z,c.foundation,id);
  const finish=floorMaterial(s.finishes[target],c[target],w,d,{x,z}),plane=tag(new T.Mesh(new T.PlaneGeometry(w,d),finish),id);plane.rotation.x=-Math.PI/2;plane.position.set(x,FLOOR+.008,z);plane.receiveShadow=true;structure.add(plane);
 }
 for(const rect of roomFloorRectangles(s))for(const part of floorRectangles(rect,s.floorCuts||[]))floorRectangle(part);
 addFences(structure,s,FLOOR);
 if(s.bathroom.enabled!==false){const q=s.bathroom;floorRectangle({left:q.x-q.w/2,right:q.x+q.w/2,back:q.z-q.d/2,front:q.z+q.d/2},'bathFloor','bathroom');cub(roof,q.w,.10,q.d,q.x,FLOOR+height+.05,q.z,c.bathRoof,'bath-roof');}
 function wall(group,v,holes,H,id,color){
  const points=[v.start,v.end,...holes.flatMap(o=>[Math.max(v.start,o.at-o.w/2),Math.min(v.end,o.at+o.w/2)])].filter(p=>p>=v.start&&p<=v.end).sort((a,b)=>a-b),horizontal=v.axis==='x';
  for(let i=1;i<points.length;i++){
   const start=points[i-1],end=points[i],mid=(start+end)/2;if(end-start<.003)continue;
   const opening=holes.find(o=>mid>o.at-o.w/2&&mid<o.at+o.w/2),ranges=opening?[[0,Math.min(H,opening.sill)],[opening.sill+opening.h,H]]:[[0,H]];
   for(const [low,high] of ranges){if(high<=low)continue;cub(group,horizontal?end-start:.14,high-low,horizontal?.14:end-start,horizontal?mid:v.fixed,FLOOR+(low+high)/2,horizontal?v.fixed:mid,color,id);
    // The video shows vertical timber paneling on the far wall.
    if(v.side==='back'&&low<1.10){const top=Math.min(high,1.10),z=v.fixed+.082;cub(group,end-start,top-low,.024,mid,FLOOR+(low+top)/2,z,c.panel,id);
     for(let x=start+.025;x<end-.01;x+=.055)cub(group,.006,top-low,.006,x,FLOOR+(low+top)/2,z+.014,'#30271f',id);
     if(top===1.10)cub(group,end-start,.045,.040,mid,FLOOR+1.10,z+.005,c.trim,id);
    }
   }
  }
 }
 for(const spec of boundarySpecs(s)){
  const high=new T.Group(),low=new T.Group();full.add(high);cut.add(low);wallGroups[spec.side]={full:high,low};
  const holes=s.openings.filter(o=>o.side===spec.side),bath=spec.side.startsWith('bath-');
  for(const v of bath?[{...spec,id:spec.side+'-wall'}]:wallSegments(s,spec.side)){
   const color=s.segmentColors[v.id]||(bath?c.bathWall:s.colors[spec.side+'Wall']||c.wall);
   wall(high,v,holes,height,v.id,color);wall(low,v,holes,.64,v.id,color);
  }
 }
 function opening(o){
  const spec=boundarySpecs(s).find(v=>v.side===o.side);if(!spec)return;
  const g=new T.Group();g.position.set(spec.axis==='x'?o.at:spec.fixed,FLOOR+o.sill,spec.axis==='x'?spec.fixed:o.at);if(spec.axis==='z')g.rotation.y=-Math.PI/2;tag(g,o.id);doors.add(g);openingMeshes[o.id]=g;
  const frame=o.color||c.frame;
  if(o.style!=='open'){
   for(const x of [-o.w/2,o.w/2])cub(g,.05,o.h,.09,x,o.h/2,0,frame,o.id);
   for(const y of [0,o.h])cub(g,o.w+.05,.05,.09,0,y,0,frame,o.id);
  }
  if(o.kind==='window'){
   cub(g,o.w-.07,o.h-.07,.018,0,o.h/2,0,new T.MeshStandardMaterial({color:o.style==='horizontal'?new T.Color(c.window).multiplyScalar(.30):c.window,transparent:true,opacity:o.style==='horizontal'?.90:.23,roughness:.4,side:T.DoubleSide,depthWrite:false}),o.id);
   const count=o.style==='horizontal'?4:2;
   for(let i=1;i<count;i++)cub(g,.024,o.h-.04,.055,-o.w/2+o.w*i/count,o.h/2,.015,frame,o.id);
   if(o.style==='curtained'){
    cub(g,o.w,.024,.055,0,o.h*.48,.015,frame,o.id);
    const clothHeight=o.sill+o.h-.18,top=o.h+.15;
    const curtainFace=spec.side==='right'?.12:spec.side==='left'?-.12:.12;
    const rodMesh=cylinder(g,.016,.016,o.w+.72,0,top+.03,curtainFace,'#ad8e53',10);rodMesh.rotation.z=Math.PI/2;tag(rodMesh,o.id);
    for(const sign of [-1,1])for(let pleat=0;pleat<7;pleat++){
     const x=sign*(o.w/2+.035)+sign*pleat*.042,depth=.045+Math.sin(pleat/6*Math.PI*3)*.022;
     cub(g,.053,clothHeight,.035,x,top-clothHeight/2,curtainFace+depth,c.curtain,o.id,.012);
     const ring=cylinder(g,.024,.024,.012,x,top-.025,curtainFace+depth,'#b6a16d',8);ring.rotation.x=Math.PI/2;tag(ring,o.id);
    }
   }
  }else if(o.style!=='open'){
   const leaf=new T.Group();leaf.position.x=-o.w/2+.04;g.add(leaf);cub(leaf,o.w-.08,o.h-.06,.035,o.w/2-.04,o.h/2,0,c.door,o.id);doorLeaves[o.id]=leaf;
  }
 }
 for(const o of s.openings)opening(o);
 for(const p of s.partitions){const high=new T.Group(),low=new T.Group();full.add(high);cut.add(low);wallGroups[p.id]={full:high,low};for(const [group,H] of [[high,p.h],[low,Math.min(.64,p.h)]]){const m=cub(group,p.w,H,p.d,p.x,FLOOR+H/2,p.z,p.color,p.id);m.rotation.y=p.rot||0;}}
 // The staircase really descends into an opening in the floor.
 const steps=9,run=(hole.front-hole.back)/steps,drop=r.stairDrop/steps,stairX=(hole.left+hole.right)/2;
 for(let k=0;k<steps;k++){
  const y=FLOOR-k*drop,z=hole.back+(k+.5)*run;
  cub(structure,hole.right-hole.left-.07,.055,run+.025,stairX,y-.035,z,'#755031','stairwell',.004);
  cub(structure,hole.right-hole.left-.07,drop,.035,stairX,y-drop/2,hole.back+(k+1)*run,'#62442d','stairwell');
 }
 for(const x of [hole.left+.055,hole.right-.055])rod(structure,[x,FLOOR-.12,hole.back],[x,FLOOR-r.stairDrop-.12,hole.front],.075,'#62442d','stairwell');
 rod(structure,[hole.left+.035,FLOOR+.88,hole.back],[hole.left+.035,FLOOR-r.stairDrop+.88,hole.front],.055,'#8a5734','stairwell');
 for(let i=0;i<=steps;i+=2){const z=hole.back+i*run,y=FLOOR-i*drop;rod(structure,[hole.left+.035,y,z],[hole.left+.035,y+.86,z],.035,'#825332','stairwell');}
 cub(structure,.055,.92,.055,hole.left+.035,FLOOR+.46,hole.back,'#8a5734','stairwell');
 // A green ladder leads to the loft hatch visible above the bedroom.
 const ladderBack=ladder.z-ladder.d/2+.06,ladderTop=b.front-.12;
 for(const x of [ladder.x-.29,ladder.x+.29]){
  rod(structure,[x,FLOOR+.02,ladderBack],[x,FLOOR+height+.04,ladderTop],.055,c.roof,'loft');
  cub(structure,.055,.53,.055,x,FLOOR+height+.28,ladderTop,c.roof,'loft');
 }
 for(let k=1;k<=8;k++){const t=k/9;cub(structure,.55,.035,.095,ladder.x,FLOOR+t*height,ladderBack+t*(ladderTop-ladderBack),c.roof,'loft',.004);}
 // Perimeter beams stay visible in cutaway; the roof button reveals the infill.
 for(const [side,z] of [['back',b.back+.05],['front',b.front-.05]]){const beam=cub(structure,b.right-b.left,.15,.10,(b.left+b.right)/2,FLOOR+height-.055,z,c.roof,'loft');beam.userData.wallSide=side;}
 for(const [side,x] of [['left',b.left+.05],['right',b.right-.05]]){const beam=cub(structure,.10,.15,b.front-b.back,x,FLOOR+height-.055,(b.back+b.front)/2,c.roof,'loft');beam.userData.wallSide=side;}
 for(let x=b.left+.48;x<b.right-.1;x+=.48){
  const cutAtHatch=Math.abs(x-ladder.x)<.45,front=cutAtHatch?b.front-1.05:b.front;
  cub(roof,.065,.14,front-b.back,x,FLOOR+height-.055,(b.back+front)/2,c.roof,'loft');
 }
 const hatchLeft=ladder.x-.43,hatchRight=ladder.x+.43,hatchBack=b.front-1.05;
 for(const rect of [{left:b.left,right:b.right,back:b.back,front:hatchBack},{left:b.left,right:hatchLeft,back:hatchBack,front:b.front},{left:hatchRight,right:b.right,back:hatchBack,front:b.front}])if(rect.right>rect.left)cub(roof,rect.right-rect.left,.055,rect.front-rect.back,(rect.left+rect.right)/2,FLOOR+height+.04,(rect.back+rect.front)/2,'#e1e3da','loft');
 cub(roof,.07,.12,1.05,hatchLeft,FLOOR+height-.02,b.front-.525,c.roof,'loft');cub(roof,.07,.12,1.05,hatchRight,FLOOR+height-.02,b.front-.525,c.roof,'loft');
 // Simple high roof plane, approximated from the final upward pan.
 const upper=cub(roof,b.right-b.left,.06,b.front-b.back,(b.left+b.right)/2,FLOOR+height+1.15,(b.back+b.front)/2,'#e4e2dc','loft');upper.rotation.z=-.10;
 const light=new T.PointLight('#fff0ce',0,7,2);light.position.set(-.3,FLOOR+height-.25,-.2);lightsGroup.add(light);lights.push(light);
 const base=new T.Mesh(new T.PlaneGeometry(200,200),mat('#e7ede3'));base.rotation.x=-Math.PI/2;base.position.y=FLOOR-r.stairDrop-.32;base.receiveShadow=true;scene.add(base);
 return {structure,full,cut,roof,garden,doors,lightsGroup,lights,base,openingMeshes,doorLeaves,wallGroups,front:new T.Group(),rear:new T.Group(),bath:new T.Group(),frontLeaf:new T.Group(),rearPivot:new T.Group(),bathLeaf:new T.Group()};
}
