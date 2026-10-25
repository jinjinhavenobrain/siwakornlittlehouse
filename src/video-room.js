import {REFERENCE_LAYOUT} from './default-layout.js';

// A visual reconstruction, not surveyed dimensions. No video or photographs
// are included in the public application.
export const VIDEO_ROOM_LAYOUT = {
 format:'house-studio-3d',version:1,name:'My room · video model',preset:'video-room',
 items:[
  {id:'video-bed',type:'timberBed',x:.45,z:-1.13,rot:0,w:1.60,d:2.13,h:.94,color:'#748dcb'},
  {id:'video-desk',type:'timberDesk',x:-.90,z:-1.10,rot:0,w:1.00,d:.58,h:.75,color:'#985d35'},
  {id:'video-chair',type:'wireChair',x:-.86,z:-.33,rot:Math.PI,w:.48,d:.52,h:.95,color:'#252723'},
  {id:'video-wardrobe',type:'timberWardrobe',x:-1.57,z:.62,rot:Math.PI/2,w:1.25,d:.57,h:2.03,color:'#aa6936'},
  {id:'video-shelf',type:'leaningShelf',x:1.66,z:.12,rot:-Math.PI/2,w:.85,d:.36,h:1.76,color:'#d4c29f'},
  {id:'video-narrow-shelf',type:'leaningShelf',x:1.25,z:.33,rot:0,w:.36,d:.30,h:1.60,color:'#d4c29f'},
  {id:'video-basket',type:'laundryBasket',x:-.20,z:1.05,rot:0,w:.47,d:.38,h:.40,color:'#c3a4ad'}
 ],
 structure:{
  bounds:{left:-1.95,right:1.95,back:-2.30,front:2.30},
  bathroom:{enabled:false,x:-2.70,z:-.80,w:1.5,d:3,side:'left',start:-2.3,end:.7,depth:1.5},
  balcony:{enabled:false,depth:1},
  room:{kind:'video-bedroom',estimated:true,height:2.48,stairWidth:.88,stairRun:1.65,stairDrop:1.80,ladderRun:.88},
  openings:[
   {id:'video-back-window',kind:'window',side:'back',at:0,w:2.90,h:.66,sill:1.12,style:'horizontal'},
   {id:'video-high-window',kind:'window',side:'back',at:-1.02,w:.58,h:.52,sill:1.88,style:'high'},
   {id:'video-bed-window',kind:'window',side:'right',at:-1.05,w:1.36,h:1.35,sill:.77,style:'curtained'},
   {id:'video-stair-window',kind:'window',side:'right',at:1.37,w:.83,h:1.35,sill:.59,style:'curtained'},
   {id:'video-entry',kind:'door',side:'front',at:.40,w:.80,h:2.10,sill:0,style:'open'}
  ],
  partitions:[],wallSplits:{front:[],back:[],left:[],right:[]},segmentColors:{},
  wallVisibility:{front:'hidden',left:'low',right:'full',back:'full','bath-front':'low','bath-back':'full','bath-left':'low','bath-right':'low'},
  finishes:{floor:{material:'wood',scale:.65,rotation:90},bathFloor:{material:'tiles',scale:.3,rotation:0}},
  colors:{...REFERENCE_LAYOUT.structure.colors,wall:'#d3ddcc',floor:'#ba773b',foundation:'#68472f',frame:'#684a37',window:'#e5e9de',trim:'#573e2e',roof:'#87a755',panel:'#4a382b',curtain:'#292744'}
 }
};
export function roomStairwell(s){const b=s.bounds,r=s.room;return {left:b.right-r.stairWidth,right:b.right,back:b.front-r.stairRun,front:b.front};}
export function roomLadder(s){const b=s.bounds,r=s.room;return {x:b.right-r.stairWidth-.37,z:b.front-.12-r.ladderRun/2,w:.65,d:r.ladderRun+.12};}
export function roomFloorRectangles(s){
 const b=s.bounds,h=roomStairwell(s);
 return [
  {left:b.left,right:h.left,back:b.back,front:b.front},
  {left:h.left,right:b.right,back:b.back,front:h.back}
 ].filter(r=>r.right-r.left>.01&&r.front-r.back>.01);
}
