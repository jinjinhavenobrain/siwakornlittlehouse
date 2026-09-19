import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { FLOOR, WALLS, definitions, surfaceHeight } from './core.js';
const mats=new Map(),geometries=new Map();
export function mat(color,roughness=.75,metalness=0){const key=`${color}:${roughness}:${metalness}`;if(!mats.has(key)){const m=new T.MeshStandardMaterial({color,roughness,metalness});m.userData.shared=true;mats.set(key,m);}return mats.get(key);}
export const glass=new T.MeshStandardMaterial({color:'#9dbab6',transparent:true,opacity:.27,roughness:.15,metalness:.2,depthWrite:false,side:T.DoubleSide});
glass.userData.shared=true;
export function box(parent,w,h,d,x,y,z,color='#fff',rounded=0){
 const key=`${w.toFixed(4)},${h.toFixed(4)},${d.toFixed(4)},${rounded}`;
 if(!geometries.has(key)){const geo=rounded?new RoundedBoxGeometry(w,h,d,2,Math.min(rounded,w/3,h/3,d/3)):new T.BoxGeometry(w,h,d);geo.userData.shared=true;geometries.set(key,geo);}
 const mesh=new T.Mesh(geometries.get(key),typeof color==='string'?mat(color):color);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
}
export function cylinder(parent,r1,r2,h,x,y,z,color,segments=16){const m=new T.Mesh(new T.CylinderGeometry(r1,r2,h,segments),typeof color==='string'?mat(color):color);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function ball(parent,r,x,y,z,color,scale=[1,1,1]){const m=new T.Mesh(new T.IcosahedronGeometry(r,1),mat(color));m.position.set(x,y,z);m.scale.set(...scale);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function rod(parent,a,b,r,color){const av=new T.Vector3(...a),bv=new T.Vector3(...b),m=cylinder(parent,r,r,av.distanceTo(bv),0,0,0,color,8);m.position.copy(av).add(bv).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),bv.sub(av).normalize());return m;}
function legs(g,w,d,h,color='#b59a72',size=.05){for(const x of [-w/2+.055,w/2-.055])for(const z of [-d/2+.055,d/2-.055])box(g,size,h,size,x,h/2,z,color,.009);}

export function furnitureModel(o){
 const def=definitions[o.type],kind=def.kind,g=new T.Group(),w=def.w,d=def.d,h=def.h,c=o.color,wood='#bda17a',dark='#37433f',linen='#ecebdc';
 g.userData.itemId=o.id;
 if(kind==='bed'||kind==='loft'){
  const loft=kind==='loft',top=loft?1.88:.55,base=top-.25;
  if(loft){for(const x of [-w/2+.045,w/2-.045])for(const z of [-d/2+.045,d/2-.045])box(g,.09,2.25,.09,x,1.125,z,c,.008);box(g,w,.09,.07,0,2.2,-d/2,c);for(const x of [-w/2,w/2]){box(g,.065,.07,d,x,2.2,0,c);box(g,.04,.07,d,x,2.04,0,c);}box(g,w-.44,.07,.07,-.22,2.2,d/2,c);for(let y=.16;y<1.9;y+=.25)box(g,.34,.04,.08,w/2-.23,y,d/2+.19,c);for(const x of [w/2-.41,w/2-.05])rod(g,[x,.02,d/2+.4],[x,1.94,d/2+.02],.025,c);}
  else{legs(g,w,d,.22,wood,.075);box(g,w,h,.085,0,h/2,-d/2+.03,wood,.03);box(g,w-.10,.35,.05,0,h-.22,-d/2+.081,c,.05);}
  box(g,w,.16,d,0,base-.02,0,wood,.035);box(g,w-.10,.22,d-.12,0,top-.11,.01,linen,.065);
  box(g,w-.13,.042,d*.6,0,top+.014,d*.13,c,.025);
  box(g,w-.13,.028,.24,0,top+.034,d*.09,new T.MeshStandardMaterial({color:c,roughness:1}),.015);
  const count=w>1.4?2:1;for(let i=0;i<count;i++)box(g,(w-.23)/count,.11,.39,(i-(count-1)/2)*(w-.12)/count,top+.045,-d/2+.34,'#f5f3e8',.055);
  if(!loft){for(const x of [-w*.24,w*.24]){box(g,w*.42,.15,.018,x,.275,d/2+.006,wood,.015);box(g,.11,.012,.012,x,.3,d/2+.02,dark);}}
 }else if(kind==='sofa'||kind==='sofabed'||kind==='outdoor'){
  const outdoor=kind==='outdoor';legs(g,w,d,.19,dark,.045);box(g,w-.03,.20,d,0,.27,0,outdoor?wood:c,.055);box(g,w,.49,.15,0,.57,-d/2+.075,c,.06);
  for(const x of [-w/2+.075,w/2-.075])box(g,.15,.38,d,x,.45,0,c,.04);
  for(const x of [-w*.22,w*.22])box(g,w*.42,.13,d-.23,x,.42,.045,outdoor?'#d9d7c4':c,.055);
  if(!outdoor){for(const x of [-w*.22,w*.22]){const pillow=box(g,w*.38,.30,.14,x,.63,-d/2+.19,c,.055);pillow.rotation.x=-.12;}}
  if(kind==='sofabed'&&o.open){for(const x of [-w/2+.09,w/2-.09])box(g,.045,.21,.045,x,.105,d/2+.96,dark);box(g,w-.14,.28,1.04,0,.29,d/2+.52,c,.05);box(g,w-.19,.03,1.0,0,.443,d/2+.50,'#e7e4d7',.02);}
 }else if(['desk','gaming','table','coffee','stool','outdoor'].includes(kind)){
  const gaming=kind==='gaming';legs(g,w,d,h-.055,gaming?dark:wood,gaming?.055:.045);box(g,w,.06,d,0,h-.03,0,c,.015);
  if(kind==='desk'||gaming){
   box(g,.23,.014,.16,0,h+.014,-d*.12,dark,.005);box(g,.04,.19,.04,0,h+.105,-d*.21,dark);box(g,.58,.35,.025,0,h+.32,-d*.23,dark,.008);
   const screen=new T.MeshStandardMaterial({color:gaming?'#315251':'#829f99',emissive:gaming?'#407787':'#51786c',emissiveIntensity:.3,roughness:.3});box(g,.546,.313,.005,0,h+.32,-d*.23+.017,screen,.003);
   box(g,.38,.015,.13,-.06,h+.014,.11,'#454e49',.008);for(let i=0;i<8;i++)box(g,.032,.004,.08,-.21+i*.043,h+.024,.1,'#bac7bb',.003);box(g,.06,.025,.09,.23,h+.02,.13,dark,.012);
   if(gaming){box(g,.20,.45,.43,w/2-.2,.29,-.04,dark,.018);for(let y of [.2,.37]){const fan=cylinder(g,.064,.064,.01,w/2-.2,y,.185,'#66bdbc');fan.rotation.x=Math.PI/2;}}
   else{cylinder(g,.036,.03,.085,-w/2+.14,h+.044,.07,'#e5e7df');}
  }
 }else if(kind==='chair'){
  cylinder(g,.035,.035,.35,0,.2,0,dark);for(let i=0;i<5;i++){let a=i*Math.PI*2/5;rod(g,[0,.09,0],[Math.sin(a)*.25,.065,Math.cos(a)*.25],.018,dark);ball(g,.033,Math.sin(a)*.25,.04,Math.cos(a)*.25,dark);}
  box(g,.46,.085,.45,0,.47,0,c,.055);box(g,.46,.52,.065,0,.77,-.2,c,.045);for(const x of [-.25,.25]){box(g,.028,.18,.03,x,.53,0,dark);box(g,.06,.035,.25,x,.63,.01,dark,.012);}
 }else if(['wardrobe','shelf','cabinet','nightstand','tv','pantry','basin'].includes(kind)){
  const ch=kind==='tv'?.48:(kind==='pantry'?.83:kind==='basin'?.66:h),isShelf=kind==='shelf';
  legs(g,w,d,.10,dark,.035);box(g,w,.045,d,0,.11,0,c,.008);box(g,w,.045,d,0,ch-.02,0,c,.008);for(const x of [-w/2+.017,w/2-.017])box(g,.035,ch-.14,d,x,ch/2+.03,0,c,.005);box(g,w-.03,ch-.1,.025,0,ch/2+.025,-d/2+.012,c);
  if(isShelf){for(let yy=.45;yy<ch-.1;yy+=.39){box(g,w-.05,.027,d,0,yy,0,c);for(let i=0;i<5;i++)box(g,.055,.18+(i%3)*.045,.16,-w*.32+i*.073,yy+.1+(i%3)*.022,0,['#879d8c','#d6c7a7','#b4bbb2','#dedbd0','#657b79'][i]);}}
  else{const count=w>.8?2:1;for(let i=0;i<count;i++){let xx=(i-(count-1)/2)*(w/count);box(g,w/count-.027,ch-.17,.025,xx,ch/2+.02,d/2-.012,c,.008);box(g,.013,kind==='wardrobe'?.38:.08,.018,xx+w/count*.31,ch/2+.05,d/2+.01,dark,.004);}}
  if(kind==='tv'){box(g,.32,.02,.17,0,.50,0,dark);box(g,.045,.13,.04,0,.56,0,dark);box(g,1.07,.60,.045,0,.91,0,dark,.012);box(g,1.01,.54,.007,0,.91,.028,'#4a6664',.009);}
  if(kind==='pantry'||kind==='basin'){
   box(g,w+.03,.05,d+.02,0,ch+.02,0,'#f1efe5',.013);const bw=kind==='basin'?w-.12:.39,bx=kind==='basin'?0:-w*.22;
   box(g,bw,.045,d-.12,bx,ch+.05,0,'#748d88',.018);box(g,bw-.055,.008,d-.17,bx,ch+.075,0,'#bbd1c9',.015);rod(g,[bx,ch+.07,-d*.28],[bx,ch+.24,-d*.28],.015,dark);rod(g,[bx,ch+.24,-d*.28],[bx,ch+.24,-d*.08],.015,dark);
   if(kind==='pantry'){box(g,.39,.018,d-.13,w*.26,ch+.058,0,dark,.01);for(let z of [-.10,.1])cylinder(g,.07,.07,.003,w*.26,ch+.069,z,'#63756d');}
  }
 }else if(kind==='fridge'){
  box(g,w,h,d,0,h/2,0,c,.035);box(g,w-.028,h*.72,.035,0,h*.39,d/2,c,.014);box(g,w-.028,h*.23,.035,0,h*.89,d/2,c,.014);box(g,.015,.20,.023,-w*.36,h*.61,d/2+.028,dark,.005);
 }else if(kind==='toilet'){
  box(g,.34,.50,.17,0,.45,-d/2+.075,c,.035);box(g,.34,.055,.19,0,.73,-d/2+.075,'#f5f4f0',.015);const bowl=ball(g,.23,0,.34,.075,c,[.82,.47,1.14]);cylinder(g,.10,.13,.27,0,.16,.01,c);const seat=new T.Mesh(new T.TorusGeometry(.145,.031,7,24),mat('#f4f3ed'));seat.rotation.x=Math.PI/2;seat.scale.y=1.3;seat.position.set(0,.435,.076);g.add(seat);box(g,.035,.008,.06,.09,.762,-d/2+.07,'#a4b0ab',.003);
 }else if(kind==='shower'){
  box(g,w,.035,d,0,.019,0,'#d5dcd4',.008);box(g,.09,.003,.09,0,.04,0,dark);box(g,.018,h,d, -w/2,.035+h/2,0,glass);box(g,.018,h,d,w/2,.035+h/2,0,glass);box(g,w*.46,h,.018,-w*.27,.035+h/2,d/2,glass);for(const x of [-w/2,w/2])box(g,.022,h,.022,x,h/2,d/2,dark);rod(g,[w*.23,1.1,-d/2+.04],[w*.23,2.03,-d/2+.04],.013,dark);rod(g,[w*.23,2.03,-d/2+.04],[w*.23,2.03,-d/2+.23],.013,dark);cylinder(g,.10,.10,.018,w*.23,2.01,-d/2+.23,dark);box(g,.16,.025,.05,w*.23,1.07,-d/2+.08,dark,.01);
 }else if(kind==='plant'){
  cylinder(g,w*.34,w*.27,h*.28,0,h*.14,0,c);cylinder(g,w*.29,w*.29,.02,0,h*.283,0,'#5b5742');rod(g,[0,h*.28,0],[.02,h*.84,0],.009,'#786c42');for(let i=0;i<9;i++){const a=i*2.4,yy=h*(.36+i*.06);rod(g,[0,yy-.04,0],[Math.sin(a)*w*.28,yy+.08,Math.cos(a)*w*.28],.007,'#7a8957');const leaf=ball(g,w*.25,Math.sin(a)*w*.33,yy+.085,Math.cos(a)*w*.33,['#507454','#6f8b59','#869b69'][i%3],[.65,.45,1.6]);leaf.rotation.y=-a;}
 }else if(kind==='rug'){
  box(g,w,.012,d,0,.01,0,c,.004);for(const zz of [-d/2+.07,d/2-.07])box(g,w-.05,.002,.025,0,.017,zz,'#ebe6d2');for(let i=0;i<30;i++)box(g,.002,.001,d-.04,-w/2+.02+i*(w-.04)/29,.017,0,'#d8d3be');
 }else if(kind==='lamp'){
  cylinder(g,.14,.15,.035,0,.02,0,dark);cylinder(g,.014,.014,h-.2,0,(h-.2)/2,0,dark);cylinder(g,.11,.17,.27,0,h-.16,0,c);cylinder(g,.15,.15,.009,0,h-.295,0,'#fff3cc');
 }
 g.scale.set(o.w/w,o.h/h,o.d/d);g.position.set(o.x,surfaceHeight(o.x,o.z)+.015,o.z);g.rotation.y=o.rot;return g;
}

export function buildHouse(scene){
 const structure=new T.Group(),full=new T.Group(),cut=new T.Group(),roof=new T.Group(),garden=new T.Group(),doors=new T.Group(),lightsGroup=new T.Group();scene.add(structure,full,cut,roof,garden,doors,lightsGroup);
 const wallmat=mat('#eeeae0'),trim=mat('#d8d3c8'),frame=mat('#38433f'),wood=mat('#a58b67'),floorMat=mat('#d2b991');
 box(structure,4.5,.36,4.75,0,.18,0,'#b2b4a7',.025);box(structure,1.5,.36,3,-3,.18,-.875,'#b2b4a7',.02);
 box(structure,4.2,.04,4.45,0,FLOOR-.02,0,floorMat);
 for(let i=0;i<27;i++){const x=-2.10+i*.156;box(structure,.0015,.002,4.45,x,FLOOR+.002,0,'#b09b7d');for(let k=0;k<3;k++){const z=-2.22+((i%3)*.37+k*1.55);if(z<2.2)box(structure,.153,.002,.002,x+.077,FLOOR+.002,z,'#af997a');}}
 for(let i=0;i<5;i++)for(let j=0;j<9;j++)box(structure,.266,.028,.296,-3.465+i*.27,FLOOR-.012,-2.075+j*.30,'#d8dbd1');
 box(structure,4.5,.12,1,0,FLOOR-.07,-2.875,wood,.008);for(let x=-2.2;x<2.25;x+=.14)box(structure,.006,.002,1,x,FLOOR-.008,-2.875,'#786c56');
 for(let i=0;i<3;i++){box(structure,2.55,.126*(3-i),.27,0,.063*(3-i),2.51+i*.27,'#c4c6ba',.01);box(structure,1,.126*(3-i),.27,1.64,.063*(3-i),-3.51-i*.27,wood,.008);}
 for(let x=-2.18;x<=2.2;x+=.23){if(x>1.2&&x<2.0)continue;box(structure,.035,.83,.035,x,FLOOR+.42,-3.33,wood,.004);}box(structure,3.44,.065,.075,-.48,FLOOR+.86,-3.33,wood,.012);box(structure,.18,.065,.075,2.15,FLOOR+.86,-3.33,wood);
 for(const x of [-2.20,2.20]){box(structure,.075,.065,1,x,FLOOR+.86,-2.875,wood,.01);for(let z=-3.29;z<-2.4;z+=.19)box(structure,.035,.83,.035,x,FLOOR+.42,z,wood);}
 const panels=[];
 function segment(group,axis,start,end,center,bottom,top,material=wallmat){if(end-start<.001||top-bottom<.001)return;const m=axis==='x'?box(group,end-start,top-bottom,.15,(start+end)/2,FLOOR+(top+bottom)/2,center,material):box(group,.15,top-bottom,end-start,center,FLOOR+(top+bottom)/2,(start+end)/2,material);return m;}
 function wallWithHoles(axis,start,end,center,holes=[],height=3){
  let prev=start;for(const hole of holes.sort((a,b)=>a.a-b.a)){segment(full,axis,prev,hole.a,center,0,height);segment(full,axis,hole.a,hole.b,center,0,hole.bottom);segment(full,axis,hole.a,hole.b,center,hole.top,height);prev=hole.b;}segment(full,axis,prev,end,center,0,height);
 }
 wallWithHoles('x',-2.25,2.25,2.30,[{a:-1,b:1,bottom:0,top:2}]);
 wallWithHoles('x',-2.25,2.25,-2.30,[{a:-1.16,b:-.16,bottom:1,top:2.1},{a:1.25,b:2.05,bottom:0,top:2}]);
 wallWithHoles('z',-2.375,2.375,2.175,[{a:-.4,b:.6,bottom:1,top:2.1}]);
 wallWithHoles('z',-2.375,2.375,-2.175,[{a:-.35,b:.45,bottom:0,top:2},{a:.84,b:1.84,bottom:1,top:2.1}]);
 wallWithHoles('z',-2.375,.625,-3.675,[{a:-1.25,b:-.65,bottom:2.1,top:2.55}],2.74);
 wallWithHoles('x',-3.75,-2.25,-2.30,[],2.74);wallWithHoles('x',-3.75,-2.25,.55,[],2.74);
 for(const z of [-2.30,.55]){const wedge=new T.Shape();wedge.moveTo(-3.75,0);wedge.lineTo(-2.25,0);wedge.lineTo(-2.25,.20);wedge.closePath();const mesh=new T.Mesh(new T.ExtrudeGeometry(wedge,{depth:.15,bevelEnabled:false}),wallmat);mesh.position.set(0,FLOOR+2.74,z-.075);mesh.castShadow=true;full.add(mesh);}
 for(const w of WALLS.slice(0,10)){box(cut,w.w,.56,w.d,w.x,FLOOR+.28,w.z,wallmat);box(cut,w.w+.01,.025,w.d+.01,w.x,FLOOR+.573,w.z,trim);}
 // The far wall stays tall in cutaway view to keep windows and the room legible.
 segment(cut,'x',-2.25,-1.16,-2.30,.56,2.45);segment(cut,'x',-.16,1.25,-2.30,.56,2.45);segment(cut,'x',-1.16,-.16,-2.30,.56,1);segment(cut,'x',-1.16,-.16,-2.30,2.1,2.45);segment(cut,'x',1.25,2.05,-2.30,2,2.45);segment(cut,'x',2.05,2.25,-2.30,.56,2.45);segment(cut,'x',-3.75,-2.25,-2.30,.56,2.45);
 function frameOpening(parent,w,h,x,y,z,rot=0,window=true){const g=new T.Group();g.position.set(x,FLOOR+y,z);g.rotation.y=rot;parent.add(g);for(const xx of [-w/2,w/2])box(g,.05,h,.085,xx,h/2,0,frame);for(const yy of [0,h])box(g,w+.06,.05,.085,0,yy,0,frame);if(window){box(g,.03,h,.05,0,h/2,0,frame);for(const xx of [-w/4,w/4])box(g,w/2-.04,h-.08,.018,xx,h/2,0,glass);}return g;}
 frameOpening(full,1,1.1,2.175,1,.10,Math.PI/2);frameOpening(full,1,1.1,-2.175,1,1.34,Math.PI/2);frameOpening(full,.6,.45,-3.675,2.1,-.95,Math.PI/2);
 frameOpening(full,1,1.1,-.66,1,-2.3);frameOpening(cut,1,1.1,-.66,1,-2.3);
 const front=frameOpening(doors,2,2,0,0,2.30,0,false),frontLeaf=new T.Group();front.add(frontLeaf);box(frontLeaf,.96,1.93,.025,-.5,1,.012,glass);for(const x of [-.98,-.02])box(frontLeaf,.035,1.97,.045,x,1,.03,frame);box(front, .96,1.93,.025,.5,1,-.035,glass);box(front,.035,1.97,.045, .98,1,-.03,frame);box(frontLeaf,.02,.16,.04,-.1,1,.06,frame);
 const rear=frameOpening(doors,.8,2,1.65,0,-2.3,0,false),rearPivot=new T.Group();rearPivot.position.set(-.38,0,0);rear.add(rearPivot);box(rearPivot,.75,1.95,.045,.375,1,0,'#9a8262',.01);box(rearPivot,.025,.10,.035,.66,.93,.04,frame);
 const bath=frameOpening(doors,.8,2,-2.175,0,.05,Math.PI/2,false),bathLeaf=box(bath,.78,1.96,.045,0,1,-.045,'#c6b391',.01);box(bathLeaf,.025,.13,.03,.28,0,.04,frame);
 // Main gable, 3 m eaves and 4 m ridge above the floor.
 for(const z of [-2.30,2.30]){const shape=new T.Shape();shape.moveTo(-2.25,0);shape.lineTo(2.25,0);shape.lineTo(0,1);shape.closePath();const m=new T.Mesh(new T.ExtrudeGeometry(shape,{depth:.13,bevelEnabled:false}),wallmat);m.position.set(0,FLOOR+3,z-.065);m.castShadow=true;roof.add(m);for(let y=.12;y<.92;y+=.13){const width=4.5*(1-y);box(roof,width,.008,.015,0,FLOOR+3+y,z+(z>0?.07:-.07),'#d2d1c5');}}
 const slope=Math.atan(1/2.25),run=2.63,rise=run/2.25;for(const sign of [-1,1]){
  const r=box(roof,Math.hypot(run,rise),.12,5.4,sign*run/2,FLOOR+4-rise/2,0,'#454d48');r.rotation.z=-sign*slope;
  const fascia=box(roof,Math.hypot(run,rise),.14,.10,sign*run/2,FLOOR+4-rise/2,2.70,'#e6e5d9');fascia.rotation.z=-sign*slope;const fascia2=fascia.clone();fascia2.position.z=-2.70;roof.add(fascia2);
  for(let k=0;k<9;k++){let x=(k+.5)*run/9,y=4-x/2.25+.075;const seam=box(roof,.028,.02,5.4,sign*x,FLOOR+y,0,'#687069');seam.rotation.z=-sign*slope;}
  box(roof,.11,.12,5.42,sign*run,FLOOR+4-rise,0,'#eeeade');
 }box(roof,.12,.12,5.46,0,FLOOR+4.05,0,'#4a534b',.025);
 const bathRoof=box(roof,1.84,.12,3.42,-3.0,FLOOR+2.89,-.875,'#525e55');bathRoof.rotation.z=.14;for(let x=-3.8;x<-2.25;x+=.22){const seam=box(roof,.022,.015,3.42,x,FLOOR+2.97+(x+3)*.14,-.875,'#687369');}
 const porchRoof=box(roof,4.5,.10,1.23,0,FLOOR+2.80,-2.93,'#596456');porchRoof.rotation.x=-.12;
 // Warm practical lighting fixtures, preserved in every view.
 const lights=[];for(const [x,z] of [[-1.20,-.6],[1.0,.65],[-3,-.70],[0,-2.93]]){const b=cylinder(lightsGroup,.07,.07,.055,x,FLOOR+2.78,z,'#f4ecd6');const light=new T.PointLight('#ffdfaa',0,5,2);light.position.set(x,FLOOR+2.5,z);lights.push(light);lightsGroup.add(light);}
 for(const x of [-1.32,1.32]){box(full,.10,.23,.10,x,FLOOR+1.78,2.43,'#33423a',.018);box(full,.065,.16,.03,x,FLOOR+1.78,2.489,'#eee8d1',.004);}
 box(full,.76,.24,.18,.3,FLOOR+2.68,-2.17,'#f3f1e8',.035); // Air conditioner
 // Display garden only; deliberately no property boundary dimensions.
 box(garden,13,.12,13,-.2,-.08,0,'#9ba990',.09);box(garden,5.45,.024,6.8,-.05,.01,-.1,'#babfaa',.02);
 for(let z=3.38;z<6;z+=.47)box(garden,1.18,.025,.34,0,.038,z,'#d6d7c8',.015);
 function tree(x,z,scale=1){const g=new T.Group();garden.add(g);g.position.set(x,.03,z);g.scale.setScalar(scale);cylinder(g,.055,.12,2.1,0,1.05,0,'#807556',9);for(let i=0;i<6;i++){const a=i*2.4;ball(g,.72,Math.sin(a)*.35,2.0+(i%3)*.36,Math.cos(a)*.35,['#71885e','#83996a','#66835a'][i%3],[1,1.05,1]);}}
 tree(-4.9,-3.45,1.15);tree(4.6,-3.9,.95);tree(5.0,3.5,.9);tree(-4.8,3.75,.77);
 for(let i=0;i<22;i++){const a=i*2.399,x=Math.sin(a)*(.7+(i%4)*.12)+(i<11?-4.6:4.0),z=Math.cos(a)*1.2+(i<11?-.1:1);ball(garden,.23,x,.19,z,['#83946b','#94a173','#7a9368'][i%3],[1,.75,1.1]);}
 for(const [x,z] of [[-2.9,2.1],[3.2,-2.8],[-4.4,-2.0],[3.65,2.4]])ball(garden,.28,x,.12,z,'#a2ab98',[1.3,.5,.8]);
 const base=new T.Mesh(new T.PlaneGeometry(200,200),mat('#e7ede3'));base.rotation.x=-Math.PI/2;base.position.y=-.15;base.receiveShadow=true;scene.add(base);
 return{structure,full,cut,roof,garden,doors,lightsGroup,lights,front,frontLeaf,rear,rearPivot,bath,bathLeaf,base};
}

export function makePerson(scene){
 const root=new T.Group(),body=new T.Group();root.add(body);scene.add(root);const head=box(body,.24,.28,.24,0,1.56,0,'#d9b999',.013);const torso=box(body,.35,.57,.23,0,1.12,0,'#e0a76b',.014);
 const arms=[],legs=[];for(const side of [-1,1]){const arm=new T.Group();arm.position.set(side*.235,1.37,0);box(arm,.12,.56,.16,0,-.265,0,'#d9b999',.012);body.add(arm);arms.push(arm);const leg=new T.Group();leg.position.set(side*.10,.835,0);box(leg,.16,.835,.19,0,-.4175,0,'#405b55',.012);body.add(leg);legs.push(leg);}
 // Exactly six box meshes: no extra face, hands or feet.
 root.position.set(0,FLOOR+.015,1.4);
 return{root,body,head,torso,arms,legs,reset(){body.rotation.set(0,0,0);body.position.set(0,0,0);for(const limb of [...arms,...legs])limb.rotation.set(0,0,0);}};
}

export function disposeModel(group){group.traverse(o=>{if(o.geometry&&!o.geometry.userData.shared)o.geometry.dispose();if(o.material&&!o.material.userData.shared)o.material.dispose();});}
