import * as T from 'three';

export function videoFurniture(g,o,def,helpers){
 const {box:bx,cylinder:cy,rod,mat}=helpers,w=def.w,d=def.d,h=def.h,c=o.color,timber='#854d2d',dark='#282c26';
 const cub=(ww,hh,dd,x,y,z,color,round=0)=>bx(g,ww,hh,dd,x,y,z,color,round);
 if(def.roomModel==='bed'){
  for(const x of [-w/2+.055,w/2-.055])for(const z of [-d/2+.055,d/2-.055])cub(.10,z<0?h:.80,.10,x,(z<0?h:.80)/2,z,timber,.012);
  for(const [z,top] of [[-d/2+.04,h-.06],[d/2-.04,.76]]){
   cub(w,.10,.08,0,top,z,timber,.014);cub(w-.10,.09,.07,0,.33,z,timber,.009);
   for(let x=-w/2+.17;x<w/2-.1;x+=.13)cub(.038,top-.42,.035,x,(top+.36)/2,z,timber,.008);
  }
  for(const x of [-w/2+.035,w/2-.035])cub(.065,.18,d-.10,x,.34,0,timber,.012);
  cub(w-.09,.22,d-.15,0,.46,0,c,.048);
  for(let row=0;row<12;row++)for(let col=0;col<9;col++){
   const x=-w/2+.14+col*(w-.28)/8,z=-d/2+.14+row*(d-.28)/11;
   cy(g,.018,.018,.002,x,.572,z,'#d7e0e8',8);
  }
  for(const x of [-w*.23,w*.23])cub(w*.40,.12,.43,x,.61,-d/2+.35,'#e8e4db',.05);
  const blanket=new T.PlaneGeometry(w*.80,d*.65,14,18),pos=blanket.attributes.position;
  for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i);pos.setZ(i,.016+Math.sin(x*16+y*7)*.016+Math.sin(y*11)*.018);}
  blanket.computeVertexNormals();const cloth=new T.Mesh(blanket,new T.MeshStandardMaterial({color:new T.Color(c).lerp(new T.Color('#d4eaf1'),.70),roughness:1,side:T.DoubleSide}));cloth.rotation.x=-Math.PI/2;cloth.position.set(.07,.582,.20);cloth.receiveShadow=true;g.add(cloth);
 } else if(def.roomModel==='desk'){
  for(const x of [-w/2+.05,w/2-.05])for(const z of [-d/2+.05,d/2-.05])cub(.055,h-.06,.055,x,(h-.06)/2,z,c,.006);
  cub(w,.065,d,0,h-.03,0,c,.012);cub(w-.10,.13,.03,0,h-.13,-d/2+.06,c);
  for(const [x,z,color,n] of [[.16,.05,'#e5dfd5',3],[-.08,-.08,'#45565a',3],[.31,-.07,'#b5d2e0',2]])for(let k=0;k<n;k++)cub(.25,.027,.21,x+(k%2)*.015,h+.014+k*.027,z,color,.012);
  for(const [x,r,height,color] of [[-.37,.027,.17,'#e8ded4'],[-.29,.022,.12,'#d8d4a4'],[-.20,.024,.10,'#3a4b45']]){cy(g,r,r,height,x,h+height/2,-.17,color,10);cy(g,r*.55,r*.55,.02,x,h+height+.01,-.17,'#d5bd57',8);}
 } else if(def.roomModel==='chair'){
  cub(w-.04,.035,d-.07,0,.43,0,c,.015);
  for(const x of [-w/2+.035,w/2-.035])for(const z of [-d/2+.035,d/2-.035])rod(g,[x,0,z],[x*.83,.44,z*.82],.013,c);
  for(const x of [-w/2+.025,w/2-.025])rod(g,[x,.4,-d/2+.05],[x,.91,-d/2-.025],.015,c);
  cub(w-.02,.026,.025,0,.91,-d/2-.025,c,.008);
  for(let x=-w/2+.045;x<w/2-.02;x+=.04)rod(g,[x,.47,-d/2+.035],[x,.89,-d/2-.025],.0045,c);
  for(let y=.49;y<.9;y+=.045)cub(w-.04,.007,.009,0,y,-d/2+.035-(y-.47)*.14,c);
 } else if(def.roomModel==='wardrobe'){
  cub(w,h,d,0,h/2,0,c,.012);
  for(const x of [-w*.246,w*.246]){cub(w*.48,h-.23,.035,x,h/2+.025,d/2+.008,new T.Color(c).multiplyScalar(1.03).getStyle(),.006);cub(.016,.24,.035,x+(x<0?.19:-.19),h*.52,d/2+.045,dark,.006);}
  for(let x=-w/2+.03;x<w/2;x+=.045)cub(.002,h-.26,.003,x,h/2+.02,d/2+.029,'#915b31');
  for(const y of [.13,.27]){cub(w-.08,.12,.025,0,y,d/2+.025,c,.004);cub(.22,.014,.035,0,y+.02,d/2+.05,'#b9b9ae',.006);}
  // A couple of jackets on the wardrobe door, as visible in the walkthrough.
  for(const [x,color] of [[-.32,'#252c30'],[-.12,'#bcb8ac']]){cub(.24,.47,.055,x,1.21,d/2+.12,color,.035);const sleeve=cub(.09,.36,.055,x-.16,1.29,d/2+.12,color,.02);sleeve.rotation.z=-.22;}
 } else if(def.roomModel==='shelf'){
  const frame='#e3decb';
  for(const x of [-w/2+.025,w/2-.025]){rod(g,[x,0,d/2-.015],[x,h,-d/2+.03],.021,frame);rod(g,[x,0,-d/2+.03],[x,h,-d/2+.03],.021,frame);}
  const bookColors=['#4b615b','#b9aa83','#c7b8a1','#525879','#9c7652','#d6d4c8'];
  for(let k=0;k<5;k++){
   const y=.08+k*(h-.13)/4,depth=d*(1-k*.08);cub(w,.025,depth,0,y,-d/2+depth/2,c,.006);
   if(k===0||k===1){cub(w*.35,.18,depth*.70,-w*.20,y+.105,-.015,'#c2b294',.008);cub(w*.35,.018,.025,-w*.20,y+.18,depth*.35,'#aa926c');}
   if(k===2||k===3)for(let j=0;j<Math.max(2,Math.floor(w*13));j++){const x=-w/2+.07+j*.055;if(x>w/2-.04)break;cub(.038,.12+(j%3)*.025,depth*.65,x,y+.08,-.015,bookColors[(j+k)%6],.003);}
   if(k===4){cy(g,.035,.035,.12,-w*.25,y+.072,-.01,'#9fbd66',10);cub(.08,.09,.065,w*.20,y+.055,0,'#dccb9f',.014);cy(g,.024,.024,.032,w*.20,y+.115,0,'#bd684c',8);}
  }
 } else if(def.roomModel==='basket'){
  cub(w,.035,d,0,.025,0,c,.016);
  for(const x of [-w/2,w/2]){cub(.025,.035,d,x,h-.025,0,c,.008);for(let z=-d/2+.035;z<d/2;z+=.045)cub(.018,h-.06,.018,x,h/2,z,c,.005);for(let y=.08;y<h;y+=.05)cub(.022,.015,d,x,y,0,c,.004);}
  for(const z of [-d/2,d/2]){cub(w,.035,.025,0,h-.025,z,c,.008);for(let x=-w/2+.035;x<w/2;x+=.045)cub(.018,h-.06,.018,x,h/2,z,c,.005);for(let y=.08;y<h;y+=.05)cub(w,.015,.022,0,y,z,c,.004);}
 }
}
