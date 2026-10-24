import test from 'node:test';
import assert from 'node:assert/strict';
import {REFERENCE_LAYOUT} from '../src/default-layout.js';
import {normalizeStructure,wallSpec,wallSegments,splitWall,extendBathroom,syncBathroom,boundarySpecs,sharedBathSide,structuralIssues,MAIN_SIDES,FLOOR_MATERIALS} from '../src/structure.js';
import {validateLayout,preset,PRESETS,setStructure,WALLS,pointBlocked,findPath,destination} from '../src/core.js';
const fresh=()=>normalizeStructure(REFERENCE_LAYOUT.structure);
const doc=s=>({...REFERENCE_LAYOUT,structure:s});

test('the supplied room replaces the three starter choices without moving its furniture',()=>{
 assert.deepEqual(PRESETS.map(p=>p.id),['my-little-house']);
 assert.deepEqual(preset('my-little-house'),REFERENCE_LAYOUT.items);
 const a=preset('my-little-house');a[0].color='#ffffff';assert.notEqual(a[0].color,preset('my-little-house')[0].color);
 const s=fresh();assert.equal(s.bathroom.side,'left');assert.equal(s.bathroom.x+s.bathroom.w/2,s.bounds.left);
 assert.deepEqual(structuralIssues(s),[]);setStructure(s);
 for(const action of ['bed','desk','bathroom','balcony','entrance'])assert.ok(destination(action,REFERENCE_LAYOUT.items).some(p=>findPath({x:0,z:1.3},p,REFERENCE_LAYOUT.items)),action);
});
test('splitting a wall yields two contiguous, independently colored sections',()=>{
 const s=fresh();const v=wallSpec(s,'front'),at=v.start+1.25;splitWall(s,'front',at);
 const [a,b]=wallSegments(s,'front');assert.equal(a.end,b.start);assert.equal(a.start,v.start);assert.equal(b.end,v.end);
 s.segmentColors[a.id]='#123456';s.segmentColors[b.id]='#abcdef';splitWall(s,'front',(b.start+b.end)/2);
 const sections=wallSegments(s,'front');assert.deepEqual(sections.map(v=>s.segmentColors[v.id]),['#123456','#abcdef','#abcdef']);
 assert.throws(()=>splitWall(s,'front',at));assert.throws(()=>splitWall(s,'front',at+.1));assert.throws(()=>splitWall(s,'front',v.end-.1));
});
for(const side of MAIN_SIDES)test(`${side}: bathroom extends from a section with one shared wall and a usable doorway`,()=>{
 const s=fresh();s.openings=[];const v=wallSpec(s,side);const start=v.start+.35,end=start+1.8;
 extendBathroom(s,side,start,end,1.1);const q=s.bathroom;
 assert.equal(q.side,side);assert.equal(q.end-q.start,1.8);assert.equal(boundarySpecs(s).length,7);assert.equal(boundarySpecs(s).some(v=>v.side===sharedBathSide(s)),false);
 assert.deepEqual(structuralIssues(s),[]);const door=s.openings.find(o=>o.id==='bath-access-auto');assert.ok(door);
 setStructure(s);const point=v.axis==='x'?{x:door.at,z:v.fixed}:{x:v.fixed,z:door.at};assert.equal(pointBlocked(point.x,point.z,WALLS,.1),false);
 const coordinate=side==='left'?q.x+q.w/2:side==='right'?q.x-q.w/2:side==='back'?q.z+q.d/2:q.z-q.d/2;
 assert.equal(coordinate,s.bounds[side]);s.bounds[side]+=.2;syncBathroom(s);
 const moved=side==='left'?q.x+q.w/2:side==='right'?q.x-q.w/2:side==='back'?q.z+q.d/2:q.z-q.d/2;assert.equal(moved,s.bounds[side]);
 assert.throws(()=>extendBathroom(s,side,start,end,.1));
});
test('legacy duplicate bathroom doorway is merged into the shared wall',()=>{
 const s=fresh();const door=s.openings.find(o=>o.kind==='door'&&o.side==='left');s.openings.push({...door,id:'legacy-bath-inner',side:'bath-right'});
 const n=normalizeStructure(s);assert.equal(n.openings.some(o=>o.side==='bath-right'),false);assert.equal(n.openings.filter(o=>o.side==='left'&&o.kind==='door').length,1);
});
test('new finishes, section colors and wall visibility survive JSON validation',()=>{
 const s=fresh();splitWall(s,'front',0);s.segmentColors['segment-front-0']='#aabbcc';s.finishes.floor={material:'herringbone',scale:1.4,rotation:90};s.finishes.bathFloor={material:'matte',scale:.4,rotation:45};s.wallVisibility.front='hidden';s.wallVisibility.left='full';
 const round=validateLayout(JSON.parse(JSON.stringify(doc(s)))).structure;assert.deepEqual(round,s);assert.equal(FLOOR_MATERIALS.length,8);
 for(const invalid of [{material:'unknown',scale:.6,rotation:0},{material:'wood',scale:0,rotation:0},{material:'wood',scale:.6,rotation:Infinity}]){const bad=fresh();bad.finishes.floor=invalid;assert.throws(()=>validateLayout(doc(bad)));}
 const bad=fresh();bad.wallVisibility.front='invisible';assert.throws(()=>validateLayout(doc(bad)));
 bad.wallVisibility.front='low';bad.wallSplits.left=[NaN];assert.throws(()=>validateLayout(doc(bad)));
});
