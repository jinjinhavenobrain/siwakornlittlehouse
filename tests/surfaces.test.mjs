import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {blankProject,addProjectFloor,chooseFloor,syncFloors,floorHoles,floorRectangles,connectionFootprint} from '../src/floors.js';
import {validateLayout,setStructure,navObstacles,pointBlocked,findPath,layoutPreset,FLOOR} from '../src/core.js';
import {cutFloor,fenceBetween,openingEdges,FENCE_STYLES} from '../src/surfaces.js';
import {fenceModel} from '../src/surface-models.js';
import {disposeModel} from '../src/models.js';
import {makeArchitecture,removeArchitecture} from '../src/architecture.js';

const area=rects=>rects.reduce((total,r)=>total+(r.right-r.left)*(r.front-r.back),0);
test('an edge-to-edge split removes the selected strip and overlaps a stair opening cleanly',()=>{
 const s=blankProject(4,4.6),l=addProjectFloor(s,'wood-ladder'),id=s.activeFloorId;
 l.x=1.3;l.z=1.6;
 cutFloor(s.structure,{left:-2,right:2,back:1,front:3},'cut-front-strip');
 const holes=floorHoles(s,id),rects=floorRectangles(s.structure.bounds,holes);
 assert.equal(holes.length,2);assert.equal(holes[1].right,connectionFootprint(l).right);
 assert.ok(Math.abs(area(rects)-4*3.3)<1e-8);
 for(const r of rects)assert.ok(r.front<=1+.0001);
 assert.equal(validateLayout(s).structure.floorCuts[0].front,2.3);
});
test('overlapping cuts can be restored individually without filling another opening',()=>{
 const s=blankProject(4,4);
 cutFloor(s.structure,{left:-1,right:1,back:-1,front:1},'cut-first');
 cutFloor(s.structure,{left:0,right:2,back:0,front:2},'cut-second');
 assert.equal(area(floorRectangles(s.structure.bounds,s.structure.floorCuts)),9);
 s.structure.floorCuts=s.structure.floorCuts.filter(r=>r.id!=='cut-first');
 assert.equal(area(floorRectangles(s.structure.bounds,s.structure.floorCuts)),12);
 s.structure.floorCuts=[];
 assert.equal(area(floorRectangles(s.structure.bounds,s.structure.floorCuts)),16);
 assert.throws(()=>cutFloor(s.structure,{left:1,right:1.01,back:0,front:1},'cut-small'));
 assert.throws(()=>cutFloor(s.structure,{left:NaN,right:2,back:0,front:1},'cut-nan'));
});
test('a partial upper floor and its fences remain local through switches and JSON',()=>{
 const s=layoutPreset('my-two-floor-room'),upper=s.floors[1].id,originalItems=structuredClone(s.items),rect={left:-2,right:2,back:1,front:2.3};
 chooseFloor(s,upper);cutFloor(s.structure,rect,'cut-custom');
 for(const [side,[a,b]] of Object.entries(openingEdges(rect)))if(side!=='right')s.structure.fences.push(fenceBetween(a,b,'fence-'+side,{style:'horizontal',color:'#445566'}));
 syncFloors(s);const round=validateLayout(JSON.parse(JSON.stringify(s)));
 assert.deepEqual(round.structure.floorCuts,s.structure.floorCuts);assert.deepEqual(round.structure.fences,s.structure.fences);
 chooseFloor(round,round.floors[0].id);assert.equal(round.structure.floorCuts.length,0);assert.equal(round.structure.fences.length,0);
 assert.deepEqual(round.items,originalItems);
 chooseFloor(round,upper);assert.equal(round.structure.floorCuts.length,1);assert.equal(round.structure.fences.length,3);
});
test('custom floor gaps and diagonal fences block walking while restored floor opens the route',()=>{
 const s=blankProject(4,4).structure;
 cutFloor(s,{left:-2,right:2,back:-.2,front:.2},'cut-crossing');
 setStructure(s);assert.equal(pointBlocked(0,0,navObstacles([])),true);assert.equal(findPath({x:0,z:-1},{x:0,z:1},[]),null);
 s.floorCuts=[];setStructure(s);assert.ok(findPath({x:0,z:-1},{x:0,z:1},[]));
 s.fences.push(fenceBetween({x:-1,z:-1},{x:1,z:1},'fence-diagonal'));
 setStructure(s);assert.equal(pointBlocked(0,0,navObstacles([])),true);assert.equal(pointBlocked(1,-1,navObstacles([])),false);
});
test('all fence styles render finite geometry at the selected height, length and angle',()=>{
 for(const style of FENCE_STYLES){const f=fenceBetween({x:-1,z:-1},{x:1,z:1},'fence-model',{h:1.3,style:style.id}),g=fenceModel(f,FLOOR);g.updateMatrixWorld(true);const b=new T.Box3().setFromObject(g);
  for(const n of [...b.min.toArray(),...b.max.toArray()])assert.ok(Number.isFinite(n),style.id);
  assert.ok(Math.abs(b.min.y-FLOOR)<1e-6);assert.ok(Math.abs(b.max.y-(FLOOR+f.h+.0025))<.01);
  assert.ok(b.min.x<=-1&&b.max.x>=1&&b.min.z<=-1&&b.max.z>=1);disposeModel(g);
 }
});
test('imports reject invalid holes, invalid fences, duplicated IDs and inactive-floor corruption',()=>{
 const s=blankProject();addProjectFloor(s,'wood-ladder');cutFloor(s.structure,{left:0,right:1,back:0,front:1},'cut-valid');s.structure.fences.push(fenceBetween({x:0,z:0},{x:1,z:1},'fence-valid'));
 const bad=fn=>{const draft=structuredClone(s);fn(draft);assert.throws(()=>validateLayout(draft));};
 bad(d=>d.structure.floorCuts[0].left=Infinity);bad(d=>d.structure.floorCuts[0].right=-1);bad(d=>d.structure.floorCuts[0].id='cut-" onclick="bad');bad(d=>d.structure.floorCuts={});
 bad(d=>d.structure.fences[0].h=0);bad(d=>d.structure.fences[0].style='unrecognized');bad(d=>d.structure.fences[0].color='red');bad(d=>d.structure.fences[0].x1=NaN);bad(d=>d.structure.fences[0].id='cut-valid');
 bad(d=>d.floors[0].structure.floorCuts=[{id:'cut-inactive',left:NaN,right:1,back:0,front:1}]);
 const legacy=blankProject();delete legacy.structure.floorCuts;delete legacy.structure.fences;const checked=validateLayout(legacy);assert.deepEqual(checked.structure.floorCuts,[]);assert.deepEqual(checked.structure.fences,[]);
});
test('rendered floor finish and slab are both absent inside custom openings in either room model',()=>{
 // Texture painting is unrelated to ray geometry; provide only the canvas methods it needs.
 const context=new Proxy({getImageData:(_x,_y,w,h)=>({data:new Uint8ClampedArray(w*h*4)})},{get:(o,k)=>k in o?o[k]:()=>{}});
 const previous=globalThis.document;globalThis.document={createElement:()=>({width:512,height:512,getContext:()=>context})};
 try{for(const doc of [blankProject(4,4),layoutPreset('my-little-house')]){
  const s=doc.structure;cutFloor(s,{left:-.5,right:.5,back:-.5,front:.5},'cut-ray');
  s.fences.push(fenceBetween({x:-.5,z:-.5},{x:.5,z:-.5},'fence-ray'));
  const scene=new T.Scene(),h=makeArchitecture(scene,s);scene.updateMatrixWorld(true);
  const surfaces=[];h.structure.traverse(m=>{if(m.isMesh&&m.userData.structureId==='floor')surfaces.push(m);});
  const ray=new T.Raycaster(new T.Vector3(0,FLOOR+.04,0),new T.Vector3(0,-1,0),0,.6);
  assert.equal(ray.intersectObjects(surfaces).length,0);
  ray.ray.origin.x=1;assert.ok(ray.intersectObjects(surfaces).length>0);
  const fence=h.structure.children.find(g=>g.userData.structureId==='fence-ray');assert.ok(fence);assert.equal(new T.Box3().setFromObject(fence).min.y.toFixed(2),FLOOR.toFixed(2));
  removeArchitecture(scene,h);
 }}finally{globalThis.document=previous;}
});
