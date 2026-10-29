// User-drawn floor openings and fences. Coordinates are local to each floor.
export const FENCE_STYLES=[
 {id:'vertical',name:'Vertical rails'},
 {id:'horizontal',name:'Horizontal rails'},
 {id:'glass',name:'Glass panels'}
];
export function rectangleBetween(a,b){return{left:Math.min(a.x,b.x),right:Math.max(a.x,b.x),back:Math.min(a.z,b.z),front:Math.max(a.z,b.z)};}
export function clipRectangle(rect,bounds){
 const r={left:Math.max(rect.left,bounds.left),right:Math.min(rect.right,bounds.right),back:Math.max(rect.back,bounds.back),front:Math.min(rect.front,bounds.front)};
 return r.right-r.left>.003&&r.front-r.back>.003?r:null;
}
export function cutFloor(s,rect,id){
 if(!['left','right','back','front'].every(k=>Number.isFinite(rect[k])))throw new Error('Choose a rectangular floor section.');
 const r=clipRectangle(rect,s.bounds);
 if(!r||r.right-r.left<.0999||r.front-r.back<.0999)throw new Error('Choose at least 10 cm in both directions inside the room.');
 s.floorCuts||=[];
 if(s.floorCuts.length>=30)throw new Error('Use up to 30 floor openings per floor.');
 const cut={id,...r};s.floorCuts.push(cut);return cut;
}
export function fenceBetween(a,b,id,options={}){
 const length=Math.hypot(b.x-a.x,b.z-a.z);
 if(![a.x,a.z,b.x,b.z].every(Number.isFinite)||length<.0999)throw new Error('Draw a fence at least 10 cm long.');
 return{id,x1:a.x,z1:a.z,x2:b.x,z2:b.z,h:1,style:'vertical',color:'#6e7d6b',...options};
}
export function openingEdges(r){return{
 back:[{x:r.left,z:r.back},{x:r.right,z:r.back}],
 right:[{x:r.right,z:r.back},{x:r.right,z:r.front}],
 front:[{x:r.right,z:r.front},{x:r.left,z:r.front}],
 left:[{x:r.left,z:r.front},{x:r.left,z:r.back}]
};}
export function fenceObstacle(f){return{x:(f.x1+f.x2)/2,z:(f.z1+f.z2)/2,w:Math.hypot(f.x2-f.x1,f.z2-f.z1),d:.065,rot:-Math.atan2(f.z2-f.z1,f.x2-f.x1)};}
