import * as T from 'three';
import {FLOOR_MATERIALS} from './structure.js';

const patterns=new Map();
function random(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function noise(x,y,seed=19){
 const ix=Math.floor(x),iy=Math.floor(y),fx=x-ix,fy=y-iy,sx=fx*fx*(3-2*fx),sy=fy*fy*(3-2*fy);
 const hash=(a,b)=>((Math.imul(a+seed,374761393)^Math.imul(b-seed,668265263))>>>0)/4294967296;
 const a=hash(ix,iy)*(1-sx)+hash(ix+1,iy)*sx,b=hash(ix,iy+1)*(1-sx)+hash(ix+1,iy+1)*sx;return a*(1-sy)+b*sy;
}
function mineral(x,y){return noise(x/151,y/151)*.53+noise(x/68,y/68,71)*.27+noise(x/29,y/29,137)*.14+noise(x/11,y/11,251)*.06;}
// Neutral luminance maps are multiplied by the chosen tint, never repainted.
// Each pattern is deterministic, so recoloring and exporting preserve its grain.
export function patternCanvas(kind){
 if(patterns.has(kind))return patterns.get(kind);
 const canvas=document.createElement('canvas'),N=512;canvas.width=canvas.height=N;
 const c=canvas.getContext('2d'),rng=random(271+FLOOR_MATERIALS.findIndex(m=>m.id===kind)*7919);
 const gray=(n,a=1)=>`rgba(${n},${n},${n},${a})`;
 c.fillStyle='#f7f7f7';c.fillRect(0,0,N,N);
 const pixels=c.getImageData(0,0,N,N);
 for(let y=0;y<N;y++)for(let x=0;x<N;x++){
  const wave=Math.sin(x*.021+Math.sin(y*.013)*2)+Math.sin(y*.031-x*.014)+Math.cos((x+y)*.014);
  const cloud=kind==='marble'||kind==='stone'?mineral(x,y):.5;
  const base=kind==='stone'?212+cloud*42:kind==='concrete'?238+wave*2:kind==='marble'?234+cloud*24:246;
  const noise=kind==='concrete'||kind==='stone'?9:3,value=Math.max(0,Math.min(255,base+(rng()-.5)*noise));
  const i=(y*N+x)*4;pixels.data[i]=pixels.data[i+1]=pixels.data[i+2]=value;pixels.data[i+3]=255;
 }
 c.putImageData(pixels,0,0);
 if(kind==='marble'||kind==='stone'){
  for(let k=0;k<(kind==='marble'?9:5);k++){
   const start=rng()*N*1.8-N*.4,phase=rng()*7,lean=rng()*.9-.45;
   const points=Array.from({length:65},(_,i)=>{const y=i*N/64;return [start+lean*y+(mineral(y+phase*101,phase*79)-.5)*170+Math.sin(y*.07+phase)*2,y];});
   for(const [width,alpha] of [[18,.018],[5,.065],[.7,.24]]){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=gray(kind==='marble'?116:150,alpha);c.lineWidth=width;c.stroke();}
   if(k%2===0){const [x,y]=points[20];c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x-12,y+40,x-70,y+50,x-87,y+115);c.lineWidth=.6;c.strokeStyle=gray(130,.18);c.stroke();}
  }
 }
 const board=(x,y,w,h,seed)=>{
  c.save();c.beginPath();c.rect(x,y,w,h);c.clip();c.fillStyle=gray(217+Math.floor(seed*30));c.fillRect(x,y,w,h);
  for(let i=0;i<32;i++){const yy=y+i*h/30;c.beginPath();for(let xx=0;xx<=w;xx+=8){const py=yy+Math.sin(xx*.025+seed*8+i*.3)*h*.027;if(xx)c.lineTo(x+xx,py);else c.moveTo(x+xx,py);}c.strokeStyle=gray(120,.05+(i%4)*.012);c.lineWidth=.45+(i%3)*.35;c.stroke();}
  c.strokeStyle=gray(95,.24);c.lineWidth=1.8;c.strokeRect(x,y,w,h);c.restore();
 };
 if(kind==='wood')for(let row=0;row<4;row++){
  const offset=row%2?N*.38:0;for(let col=-1;col<2;col++)board(col*N+offset,row*N/4,N,N/4,rng());
 }
 if(kind==='herringbone'){
  c.save();c.translate(N/2,N/2);c.rotate(Math.PI/4);const u=N/8;
  for(let x=-12;x<12;x++)for(let y=-12;y<12;y++){
   if(((x-y)%6+6)%6===0)board(x*u,y*u,3*u,u,rng());
   if(((x-y)%6+6)%6===3){c.save();c.translate((x+1)*u,y*u);c.rotate(Math.PI/2);board(0,0,3*u,u,rng());c.restore();}
  }c.restore();
 }
 if(kind==='terrazzo')for(let i=0;i<850;i++){
  const x=rng()*N,y=rng()*N,r=1.3+rng()*5;c.beginPath();
  for(let k=0;k<5;k++){const a=k/5*Math.PI*2,rr=r*(.5+rng()*.5);if(k)c.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr);else c.moveTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr);}c.closePath();c.fillStyle=gray(125+Math.floor(rng()*125),.45);c.fill();
 }
 if(['marble','stone','tiles','matte'].includes(kind)){
  c.strokeStyle=gray(kind==='tiles'?130:170,.45);c.lineWidth=kind==='tiles'?5:2.3;c.strokeRect(0,0,N,N);
  c.strokeStyle='rgba(255,255,255,.45)';c.lineWidth=1;c.strokeRect(3,3,N-6,N-6);
 }
 patterns.set(kind,canvas);return canvas;
}
export function floorMaterial(finish,color,width,depth,origin=null){
 const definition=FLOOR_MATERIALS.find(m=>m.id===finish.material)||FLOOR_MATERIALS[0];
 const map=new T.CanvasTexture(patternCanvas(definition.id));
 map.wrapS=map.wrapT=T.RepeatWrapping;
 map.repeat.set(width/finish.scale,depth/finish.scale);map.center.set(.5,.5);map.rotation=finish.rotation*Math.PI/180;map.colorSpace=T.SRGBColorSpace;map.anisotropy=4;
 // Rotate in metres so rectangular bathroom floors retain square tiles.
 const cos=Math.cos(map.rotation),sin=Math.sin(map.rotation),a=cos*width/finish.scale,b=-sin*depth/finish.scale,c=sin*width/finish.scale,d=cos*depth/finish.scale;
 map.matrixAutoUpdate=false;map.matrix.set(a,b,.5-(a+b)/2,c,d,.5-(c+d)/2,0,0,1);
 if(origin){const scale=finish.scale;map.matrix.set(cos*width/scale,sin*depth/scale,(cos*(origin.x-width/2)-sin*(origin.z+depth/2))/scale,sin*width/scale,-cos*depth/scale,(sin*(origin.x-width/2)+cos*(origin.z+depth/2))/scale,0,0,1);}
 const material=new T.MeshStandardMaterial({color,map,roughness:definition.roughness,metalness:0});
 material.userData.floorTexture=true;return material;
}
export function finishPreview(kind,color){
 const pattern=patternCanvas(kind),c=document.createElement('canvas');c.width=c.height=96;
 const ctx=c.getContext('2d');ctx.fillStyle=color;ctx.fillRect(0,0,96,96);ctx.globalCompositeOperation='multiply';const count=['marble','stone','matte','tiles'].includes(kind)?2:1;for(let y=0;y<count;y++)for(let x=0;x<count;x++)ctx.drawImage(pattern,x*96/count,y*96/count,96/count,96/count);return c.toDataURL();
}
