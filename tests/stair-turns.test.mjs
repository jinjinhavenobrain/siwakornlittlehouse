import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {existsSync} from 'node:fs';
import {blankProject,addProjectFloor,connectionLanding,connectionFootprint,connectionProblem} from '../src/floors.js';
import {stairModel,openingGuard} from '../src/stair-models.js';
import {disposeModel} from '../src/models.js';
import {validateLayout,layoutPreset,PRESETS} from '../src/core.js';

const centre=r=>({x:(r.left+r.right)/2,z:(r.back+r.front)/2});
test('left and right L stairs exit on the correct side at every compass rotation, with an open guardrail exit',()=>{
 for(const rot of [0,Math.PI/2,Math.PI,Math.PI*1.5])for(const turn of ['left','right']){
  const sign=turn==='left'?-1:1,link={id:'stairs-test',style:'turn',turn,x:0,z:0,w:1.8,run:1.8,rot,color:'#ae8660'},model=stairModel(link,3),guard=openingGuard(link,0);
  model.updateMatrixWorld(true);guard.updateMatrixWorld(true);
  const top=model.children.find(m=>Math.abs(m.position.y-3)<1e-9),point=top.getWorldPosition(new T.Vector3()),along=point.x*Math.cos(rot)-point.z*Math.sin(rot);
  assert.ok(along*sign>0,`${turn}: top flight exits the correct side at ${rot}`);
  const landing=centre(connectionLanding(link,true)),exit=landing.x*Math.cos(rot)-landing.z*Math.sin(rot);assert.ok(exit*sign>link.w/2,`${turn}: upper landing follows the flight`);
  const rail=guard.children[0].getWorldPosition(new T.Vector3()),guardSide=rail.x*Math.cos(rot)-rail.z*Math.sin(rot);assert.ok(guardSide*sign<0,`${turn}: opposite side stays guarded`);
  const mirrored={...link,turn:turn==='left'?'right':'left'};assert.deepEqual(connectionFootprint(link),connectionFootprint(mirrored));disposeModel(model);disposeModel(guard);
 }
});
test('turn direction survives JSON; older L stairs default to right and invalid directions are rejected',()=>{
 const s=blankProject(6,6);addProjectFloor(s,'turn',false,'left');const checked=validateLayout(s);assert.equal(checked.stairs[0].turn,'left');assert.deepEqual(validateLayout(JSON.parse(JSON.stringify(checked))),checked);
 const old=structuredClone(s);delete old.stairs[0].turn;assert.equal(validateLayout(old).stairs[0].turn,'right');const bad=structuredClone(s);bad.stairs[0].turn='forward';assert.throws(()=>validateLayout(bad),/stair or ladder/);
});
test('adding a new L staircase uses the selected turn and leaves a fitting arrival landing',()=>{
 for(const turn of ['left','right']){const s=blankProject(4,4.6),l=addProjectFloor(s,'turn',false,turn);assert.equal(l.turn,turn);assert.equal(connectionProblem(s,l),null);assert.equal(validateLayout(s).floors.length,2);}
});
test('the uploaded two-floor room replaces the video card with all furniture and its saved ladder',()=>{
 assert.deepEqual(PRESETS.map(p=>p.id),['my-little-house','my-two-floor-room']);assert.ok(!PRESETS.some(p=>p.name.includes('video')));
 const s=layoutPreset('my-two-floor-room');assert.equal(s.name,'My two-floor room');assert.equal(s.activeFloorId,'floor-1');assert.equal(s.floors.length,2);assert.equal(s.items.length,9);assert.equal(s.floors[1].items.length,4);
 assert.deepEqual(s.structure.bounds,{left:-2,right:2,back:-2.3,front:2.3});assert.equal(s.structure.room.height,2.8);assert.equal(s.structure.openings.length,5);
 const table=s.items.find(o=>o.type==='roundTable'),bed=s.floors[1].items.find(o=>o.type==='timberBed');assert.deepEqual([table.x,table.z,table.w,table.d],[1.5,1,.7,.7]);assert.deepEqual([bed.x,bed.z,bed.w,bed.d],[-1.1,-1.1,1.6,2.13]);
 const l=s.stairs[0];assert.deepEqual([l.style,l.x,l.z,l.w,l.run,l.rot],['wood-ladder',.2,1.8,.68,.8,Math.PI*1.5]);assert.ok(existsSync(new URL('../assets/two-floor-layout.svg',import.meta.url)));
});
test('the new starting room loads independent copies and saves the whole two-floor project',()=>{
 const a=layoutPreset('my-two-floor-room'),b=layoutPreset('my-two-floor-room');a.floors[1].items[0].color='#ffffff';a.items[0].x=0;assert.notDeepEqual(a.floors[1].items,b.floors[1].items);assert.notEqual(a.items[0].x,b.items[0].x);assert.deepEqual(validateLayout(JSON.parse(JSON.stringify(b))),b);
});
