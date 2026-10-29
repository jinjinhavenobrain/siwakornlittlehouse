import test from 'node:test';
import assert from 'node:assert/strict';
import {blankProject,addProjectFloor,STAIR_STYLES,connectionProblem,floorHoles,floorRectangles} from '../src/floors.js';
import {item,layoutPreset,validateLayout} from '../src/core.js';

test('every stair style can add an upper floor over furniture, an interior wall and a doorway in a small room',()=>{
 for(const style of STAIR_STYLES){
  const s=blankProject(2,2);s.items.push(item('wardrobe',0,0,0,{w:2,d:2}));s.structure.partitions.push({id:'wall-through-stairs',x:0,z:0,w:2,d:.15,h:2.8,rot:0,color:'#e8e7df'});s.structure.openings.push({id:'door-in-front',kind:'door',side:'front',at:0,w:.8,h:2,sill:0});
  const furniture=structuredClone(s.items),link=addProjectFloor(s,style.id,true,'left');
  assert.equal(link.x,0,style.id);assert.equal(link.z,0,style.id);assert.equal(connectionProblem(s,link),null,style.id);assert.equal(validateLayout(s).floors.length,2);assert.deepEqual(s.floors[0].items,furniture);assert.equal(s.structure.partitions[0].id,'wall-through-stairs');
 }
});
test('overlapping stairs, landings, walls and furniture persist unchanged through JSON validation',()=>{
 const s=layoutPreset('my-two-floor-room'),l=s.stairs[0];Object.assign(l,{style:'turn',turn:'left',x:1.8,z:2.1,w:3,run:5});
 s.items.push(item('wardrobe',l.x,l.z));s.structure.partitions.push({id:'wall-on-flight',x:l.x,z:l.z,w:3,d:.15,h:2.8,rot:0,color:'#e8e7df'});s.stairs.push({...l,id:'stairs-overlapping-flight',turn:'right'});
 const checked=validateLayout(s);assert.equal(checked.stairs.length,2);assert.deepEqual(checked.stairs,s.stairs);assert.deepEqual(checked.items,s.items);assert.equal(checked.structure.partitions[0].id,'wall-on-flight');assert.deepEqual(validateLayout(JSON.parse(JSON.stringify(checked))),checked);
});
test('oversized and overlapping stair openings are clipped to the floor without rejecting placement',()=>{
 const s=blankProject(2,2),l=addProjectFloor(s,'timber');Object.assign(l,{x:.9,z:0,w:3,run:5});s.stairs.push({...l,id:'stairs-second-opening'});const checked=validateLayout(s),rects=floorRectangles(checked.structure.bounds,floorHoles(checked,checked.activeFloorId));
 assert.ok(rects.every(r=>r.right>r.left&&r.front>r.back&&r.left>=-1&&r.right<=1&&r.back>=-1&&r.front<=1));const area=rects.reduce((sum,r)=>sum+(r.right-r.left)*(r.front-r.back),0);assert.ok(Math.abs(area-.8)<1e-8);
});
