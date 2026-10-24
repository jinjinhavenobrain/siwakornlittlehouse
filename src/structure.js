// Shared, dependency-free wall topology for rendering, navigation and import.
export const MAIN_SIDES = ['front','back','left','right'];
export const SIDES = [...MAIN_SIDES,...MAIN_SIDES.map(side=>'bath-'+side)];
export const OPPOSITE = {front:'back',back:'front',left:'right',right:'left'};
export const SIDE_LABELS = {front:'Front',back:'Back',left:'Left',right:'Right'};
export const FLOOR_MATERIALS = [
 {id:'marble',name:'Veined marble',detail:'Soft, flowing veins',scale:.8,roughness:.24},
 {id:'stone',name:'Natural stone',detail:'Layered mineral texture',scale:.6,roughness:.82},
 {id:'wood',name:'Wood planks',detail:'Long grain & board joints',scale:1.2,roughness:.64},
 {id:'herringbone',name:'Herringbone wood',detail:'Interlocking parquet',scale:1.2,roughness:.64},
 {id:'matte',name:'Matt porcelain',detail:'Soft, unpolished tiles',scale:.6,roughness:.98},
 {id:'concrete',name:'Microcement',detail:'Continuous, fine texture',scale:1.5,roughness:.96},
 {id:'terrazzo',name:'Terrazzo',detail:'Fine stone chips',scale:.6,roughness:.48},
 {id:'tiles',name:'Ceramic tiles',detail:'Classic square grout grid',scale:.3,roughness:.32}
];
export const DEFAULT_WALL_VISIBILITY = Object.fromEntries(SIDES.map(side=>[side,side==='back'||side==='bath-back'?'full':'low']));
export function wallSpec(s,side){
 const q=s.bathroom,b=side.startsWith('bath-')?{left:q.x-q.w/2,right:q.x+q.w/2,back:q.z-q.d/2,front:q.z+q.d/2}:s.bounds;
 const n=side.replace('bath-','');
 return n==='front'||n==='back'?{axis:'x',start:b.left,end:b.right,fixed:n==='front'?b.front:b.back,side}:{axis:'z',start:b.back,end:b.front,fixed:n==='left'?b.left:b.right,side};
}
export function sharedBathSide(s){return s.bathroom.side?'bath-'+OPPOSITE[s.bathroom.side]:null;}
export function boundarySpecs(s){return SIDES.filter(side=>side!==sharedBathSide(s)).map(side=>wallSpec(s,side));}
export function wallSegments(s,side){
 const v=wallSpec(s,side),points=[v.start,...(s.wallSplits?.[side]||[]).filter(p=>p>v.start+.05&&p<v.end-.05),v.end].sort((a,b)=>a-b);
 return points.slice(1).map((end,index)=>({...v,id:`segment-${side}-${index}`,index,start:points[index],end}));
}
export function findWallSegment(s,id){return MAIN_SIDES.flatMap(side=>wallSegments(s,side)).find(v=>v.id===id);}
export function syncBathroom(s){
 const q=s.bathroom,b=s.bounds;
 if(!MAIN_SIDES.includes(q.side)){
  q.side=MAIN_SIDES.reduce((best,side)=>{
   const gap={left:Math.abs(q.x+q.w/2-b.left),right:Math.abs(q.x-q.w/2-b.right),front:Math.abs(q.z-q.d/2-b.front),back:Math.abs(q.z+q.d/2-b.back)};
   return gap[side]<gap[best]?side:best;
  },'left');
  const vertical=q.side==='left'||q.side==='right';
  q.start=vertical?q.z-q.d/2:q.x-q.w/2;q.end=q.start+(vertical?q.d:q.w);q.depth=vertical?q.w:q.d;
 }
 const v=wallSpec(s,q.side),length=Math.min(v.end-v.start,Math.max(.8,q.end-q.start));
 q.start=Math.min(v.end-length,Math.max(v.start,q.start));q.end=q.start+length;
 const middle=(q.start+q.end)/2;
 if(v.axis==='z'){q.w=q.depth;q.d=length;q.x=v.fixed+(q.side==='left'?-1:1)*q.depth/2;q.z=middle;}
 else {q.w=length;q.d=q.depth;q.x=middle;q.z=v.fixed+(q.side==='back'?-1:1)*q.depth/2;}
 return q;
}
export function normalizeStructure(source){
 const s=JSON.parse(JSON.stringify(source));
 syncBathroom(s);
 s.wallSplits=Object.fromEntries(MAIN_SIDES.map(side=>[side,[...new Set(s.wallSplits?.[side]||[])].sort((a,b)=>a-b)]));
 s.segmentColors ||= {};
 s.finishes ||= {};
 for(const target of ['floor','bathFloor'])s.finishes[target]={material:target==='floor'?'marble':'tiles',scale:target==='floor'?.8:.3,rotation:0,...s.finishes[target]};
 s.wallVisibility={...DEFAULT_WALL_VISIBILITY,...s.wallVisibility};
 const q=s.bathroom,v=wallSpec(s,q.side);
 for(const at of [q.start,q.end])if(at>v.start+.05&&at<v.end-.05&&!s.wallSplits[q.side].some(p=>Math.abs(p-at)<.03))s.wallSplits[q.side].push(at);
 s.wallSplits[q.side].sort((a,b)=>a-b);
 // There is one shared wall. Fold legacy duplicate bathroom doorways into it.
 const shared=sharedBathSide(s);
 for(const o of s.openings.filter(o=>o.side===shared)){
  if(!s.openings.some(other=>other.side===q.side&&other.kind===o.kind&&Math.abs(other.at-o.at)<.1))s.openings.push({...o,side:q.side});
 }
 s.openings=s.openings.filter(o=>o.side!==shared);
 return s;
}
export function splitWall(s,side,at){
 if(!MAIN_SIDES.includes(side)||!Number.isFinite(at))throw new Error('Choose an exterior wall and a split position.');
 const v=wallSpec(s,side);
 if(at<v.start+.25||at>v.end-.25)throw new Error('Leave at least 25 cm at either end of the wall.');
 s.wallSplits ||= {};s.wallSplits[side] ||= [];
 if(s.wallSplits[side].length>=12)throw new Error('This wall already has 12 split points.');
 if(s.wallSplits[side].some(p=>Math.abs(p-at)<.05))throw new Error('There is already a split here.');
 const containing=wallSegments(s,side).find(seg=>at>seg.start&&at<seg.end);
 if(!containing||at-containing.start<.25||containing.end-at<.25)throw new Error('Leave at least 25 cm in each wall section.');
 const previous=wallSegments(s,side),colors={...s.segmentColors};
 s.wallSplits[side].push(at);s.wallSplits[side].sort((a,b)=>a-b);s.segmentColors ||= {};
 for(const seg of wallSegments(s,side)){const old=previous.find(v=>(seg.start+seg.end)/2>=v.start&&(seg.start+seg.end)/2<=v.end);if(colors[old?.id])s.segmentColors[seg.id]=colors[old.id];}
 return wallSegments(s,side).find(seg=>Math.abs(seg.start-at)<.001);
}
export function extendBathroom(s,side,start,end,depth=s.bathroom.depth||1.5){
 const v=wallSpec(s,side);
 if(!MAIN_SIDES.includes(side)||![start,end,depth].every(Number.isFinite)||start<v.start-.001||end>v.end+.001||end-start<.8||depth<.8||depth>4)throw new Error('Choose at least 80 cm of wall and an extension depth from 0.8 to 4 m.');
 const old={...s.bathroom};
 s.bathroom={...old,side,start,end,depth};syncBathroom(s);
 const q=s.bathroom;
 if(Math.max(Math.abs(q.x-q.w/2),Math.abs(q.x+q.w/2),Math.abs(q.z-q.d/2),Math.abs(q.z+q.d/2))>6) {s.bathroom=old;throw new Error('The extension must stay within the 12 m planning area.');}
 // Keep exterior bathroom windows on the outward wall when changing sides.
 for(const o of s.openings.filter(o=>o.side.startsWith('bath-'))){o.side='bath-'+side;o.at=(start+end)/2;o.w=Math.min(o.w,end-start-.3);}
 s.openings=s.openings.filter(o=>o.id!=='bath-access-auto'||o.side===side);
 if(!s.openings.some(o=>o.kind==='door'&&o.side===side&&o.at-o.w/2>=start+.05&&o.at+o.w/2<=end-.05)){
  const width=Math.min(.8,end-start-.2),obstacles=s.openings.filter(o=>o.side===side);
  const candidates=[(start+end)/2,...Array.from({length:Math.ceil((end-start)*10)},(_,i)=>start+.1+width/2+i*.1)];
  const at=candidates.find(at=>at-width/2>=start+.05&&at+width/2<=end-.05&&!obstacles.some(o=>Math.abs(o.at-at)<(o.w+width)/2+.05));
  if(at!==undefined)s.openings.push({id:'bath-access-auto',kind:'door',side,at,w:width,h:2,sill:0});
 }
 const normalized=normalizeStructure(s);Object.assign(s,normalized);return s.bathroom;
}
export function structuralIssues(s){
 const result=[];
 for(const o of s.openings){const v=wallSpec(s,o.side);if(o.at-o.w/2<v.start+.02||o.at+o.w/2>v.end-.02)result.push(`${o.id}: opening extends beyond its wall.`);}
 const q=s.bathroom;
 if(q.side&&!s.openings.some(o=>o.side===q.side&&o.kind==='door'&&o.at-o.w/2>=q.start&&o.at+o.w/2<=q.end))result.push('Add a door within the bathroom wall section to connect the rooms.');
 return result;
}
