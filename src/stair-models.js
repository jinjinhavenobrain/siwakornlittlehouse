import * as T from 'three';
import {box,cylinder,mat} from './models.js';
import {STAIR_STYLES,turnSign} from './floors.js';

export function stairModel(link,rise){
 const g=new T.Group(),def=STAIR_STYLES.find(s=>s.id===link.style),w=link.w,d=link.run,c=link.color,metal=link.style==='metal-ladder'?'#53635d':'#52615a';
 g.userData.structureId='connection:'+link.id;g.userData.connectionId=link.id;
 const cub=(W,H,D,x,y,z,color=c)=>box(g,W,H,D,x,y,z,color,.006);
 const rod=(a,b,width=.035,color=c)=>{const av=new T.Vector3(...a),bv=new T.Vector3(...b),m=cub(width,av.distanceTo(bv),width,0,0,0,color);m.position.copy(av).add(bv).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),bv.sub(av).normalize());return m;};
 const n=Math.max(10,Math.ceil(rise/.19));
 if(def.shape==='ladder'){
  for(const x of [-w/2+.025,w/2-.025]){rod([x,0,d/2-.05],[x,rise+.08,-d/2+.05],.045);rod([x,rise,-d/2+.05],[x,rise+.65,-d/2+.05],.04);}
  for(let i=1;i<n;i++){const t=i/n,y=t*rise,z=d/2-.05-t*(d-.10);if(link.style==='metal-ladder'){const rung=cylinder(g,.018,.018,w-.05,0,y,z,c,12);rung.rotation.z=Math.PI/2;}else cub(w-.05,.032,.10,0,y,z);}
 }else if(def.shape==='spiral'){
  const radius=Math.min(w,d)/2,steps=Math.max(18,n),turn=Math.PI*3;
  cylinder(g,.045,.045,rise+.95,0,(rise+.95)/2,0,metal,16);
  for(let i=0;i<steps;i++){
   const a=Math.PI/2+turn*i/(steps-1),y=(i+1)/steps*rise,sector=new T.Shape(),half=turn/(steps-1)*.51,a0=a-half,a1=a+half;
   sector.moveTo(.07*Math.cos(a0),.07*Math.sin(a0));sector.lineTo(radius*Math.cos(a0),radius*Math.sin(a0));sector.absarc(0,0,radius,a0,a1,false);sector.lineTo(.07*Math.cos(a1),.07*Math.sin(a1));sector.closePath();
   const mesh=new T.Mesh(new T.ExtrudeGeometry(sector,{depth:.055,bevelEnabled:false}),mat(c));mesh.rotation.x=Math.PI/2;mesh.position.y=y;mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);
   const x=(radius-.04)*Math.cos(a),z=(radius-.04)*Math.sin(a);rod([x,y,z],[x,y+.86,z],.018,metal);
   if(i){const prev=a-turn/(steps-1),py=i/steps*rise;rod([(radius-.04)*Math.cos(prev),py+.86,(radius-.04)*Math.sin(prev)],[x,y+.86,z],.025,metal);}
  }
 }else if(def.shape==='turn'){
  const flight=Math.min(w,d)*.46,half=Math.ceil(n/2),runZ=d-flight,runX=w-flight;
  for(let i=0;i<half;i++)cub(flight,.065,runZ/half+.015,-w/2+flight/2,(i+1)/half*rise/2,d/2-(i+.5)/half*runZ);
  cub(flight,.07,flight,-w/2+flight/2,rise/2,-d/2+flight/2);
  for(let i=0;i<half;i++)cub(runX/half+.015,.065,flight,-w/2+flight+(i+.5)/half*runX,rise/2+(i+1)/half*rise/2,-d/2+flight/2);
  rod([-w/2+.04,0,d/2],[-w/2+.04,rise/2,-d/2+flight],.07,metal);
  rod([-w/2+flight,rise/2,-d/2+.04],[w/2,rise,-d/2+.04],.07,metal);
  rod([-w/2+.04,.86,d/2],[-w/2+.04,rise/2+.86,-d/2+flight/2],.035,metal);
  rod([-w/2+.04,rise/2+.86,-d/2+flight/2],[w/2,rise+.86,-d/2+flight/2],.035,metal);
 }else{
  for(let i=0;i<n;i++){
   const t=(i+.5)/n,y=(i+1)/n*rise,z=d/2-t*d,paddle=def.shape==='paddle',W=paddle?w*.64:w-.06,x=paddle?(i%2?1:-1)*w*.17:0;
   cub(W,.06,paddle?d/n*1.6:d/n+.018,x,y,z);
   if(def.shape==='straight')cub(w-.06,rise/n,.025,0,y-rise/n/2,z-d/n/2);
  }
  const beams=def.shape==='floating'?[0]:[-w/2+.08,w/2-.08];for(const x of beams)rod([x,-.07,d/2],[x,rise-.07,-d/2],def.shape==='floating'?.12:.075,metal);
  for(const x of [-w/2+.035,w/2-.035]){
   rod([x,.88,d/2],[x,rise+.88,-d/2],.035,metal);
   for(let i=0;i<=n;i+=2){const t=i/n;rod([x,t*rise,d/2-t*d],[x,t*rise+.86,d/2-t*d],.022,metal);}
  }
 }
 g.scale.x=turnSign(link);g.position.set(link.x,0,link.z);g.rotation.y=link.rot;return g;
}

export function openingGuard(link,y){
 const g=new T.Group(),w=link.w,d=link.run;g.userData.structureId='connection:'+link.id;
 // Three sides stay guarded; the far edge is the arrival landing.
 for(const x of [-w/2-.025,w/2+.025].filter(x=>link.style!=='turn'||x<0)){
  box(g,.035,.035,d,x,y+.90,0,'#6e7d6b');
  for(let z=-d/2;z<=d/2+.001;z+=.32)box(g,.025,.90,.025,x,y+.45,z,'#6e7d6b');
 }
 if(link.style==='turn'){box(g,w,.035,.035,0,y+.90,-d/2,'#6e7d6b');for(let x=-w/2;x<=w/2+.001;x+=.30)box(g,.025,.90,.025,x,y+.45,-d/2,'#6e7d6b');}
 box(g,w,.035,.035,0,y+.90,d/2,'#6e7d6b');
 for(let x=-w/2;x<=w/2+.001;x+=.30)box(g,.025,.90,.025,x,y+.45,d/2,'#6e7d6b');
 g.scale.x=turnSign(link);g.position.set(link.x,0,link.z);g.rotation.y=link.rot;return g;
}
