import * as T from 'three';
import {box} from './models.js';
import {fenceObstacle} from './surfaces.js';

export function fenceModel(f,y){
 const g=new T.Group(),p=fenceObstacle(f),length=p.w,H=f.h;
 g.userData.structureId=f.id;g.position.set(p.x,y,p.z);g.rotation.y=p.rot;
 const cub=(w,h,d,x,y,color=f.color)=>box(g,w,h,d,x,y,0,color,.004);
 const bays=Math.max(1,Math.ceil(length/1.2));
 for(let i=0;i<=bays;i++)cub(.055,H,.055,-length/2+length*i/bays,H/2);
 cub(length+.055,.055,.065,0,H-.025);
 if(f.style==='glass'){
  const material=new T.MeshStandardMaterial({color:f.color,transparent:true,opacity:.28,roughness:.18,side:T.DoubleSide,depthWrite:false});
  for(let i=0;i<bays;i++)cub(length/bays-.055,H-.16,.018,-length/2+length*(i+.5)/bays,H/2,material);
 }else if(f.style==='horizontal'){
  for(let i=1;i<=3;i++)cub(length,.035,.035,0,H*i/4);
 }else{
  cub(length,.035,.045,0,.10);
  const count=Math.max(1,Math.ceil(length/.14));
  for(let i=1;i<count;i++)cub(.022,Math.max(.05,H-.15),.022,-length/2+length*i/count,H/2);
 }
 return g;
}
export function addFences(group,s,y){for(const f of s.fences||[])group.add(fenceModel(f,y));}
