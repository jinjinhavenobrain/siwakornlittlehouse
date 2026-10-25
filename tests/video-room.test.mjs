import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {layoutPreset,setStructure,WALLS,pointBlocked,surfaceHeight,itemWarnings,destination,findPath,validateLayout} from '../src/core.js';
import {boundarySpecs,structuralIssues} from '../src/structure.js';
import {roomStairwell,roomFloorRectangles,roomLadder} from '../src/video-room.js';
const room=()=>layoutPreset('video-room');

test('video room is a separate, estimated model and never mutates the original house',()=>{
 const a=layoutPreset('my-little-house'),b=room();assert.equal(b.structure.room.estimated,true);assert.equal(b.structure.bathroom.enabled,false);assert.equal(b.structure.balcony.enabled,false);
 assert.equal(a.items.length,11);assert.equal(b.items.length,7);b.items[0].color='#ffffff';assert.notEqual(room().items[0].color,'#ffffff');assert.equal(layoutPreset('my-little-house').structure.room,undefined);
 assert.ok(existsSync(new URL('../assets/video-room.svg',import.meta.url)));
 assert.equal(boundarySpecs(b.structure).length,4);assert.deepEqual(structuralIssues(b.structure),[]);
});
test('the stair cutout is absent from the floor and remains blocked for flat-floor walking',()=>{
 const s=room().structure,h=roomStairwell(s),rects=roomFloorRectangles(s);setStructure(s);
 const area=rects.reduce((total,r)=>total+(r.right-r.left)*(r.front-r.back),0),fullArea=(s.bounds.right-s.bounds.left)*(s.bounds.front-s.bounds.back);
 assert.ok(Math.abs(area-(fullArea-(h.right-h.left)*(h.front-h.back)))<1e-8);
 const x=(h.left+h.right)/2,z=(h.back+h.front)/2;
 assert.equal(rects.some(r=>x>r.left&&x<r.right&&z>r.back&&z<r.front),false);assert.equal(pointBlocked(x,z,WALLS,.1),true);assert.ok(surfaceHeight(x,z)<.38);
 const ladder=roomLadder(s);assert.equal(pointBlocked(ladder.x,ladder.z,WALLS,.1),true);
});
test('the bedroom furniture has no default overlaps and three modeled destinations are reachable',()=>{
 const s=room();setStructure(s.structure);for(const o of s.items)assert.deepEqual(itemWarnings(o,s.items),[],o.id);
 for(const name of ['bed','desk','entrance'])assert.ok(destination(name,s.items).some(p=>findPath({x:0,z:.45},p,s.items)),name);
 assert.deepEqual(destination('bathroom',s.items),[]);assert.deepEqual(destination('balcony',s.items),[]);
});
test('room, ceiling, stairs and measurements persist; invalid reconstruction settings are rejected',()=>{
 const value=room();value.structure.room.height=2.65;value.structure.room.estimated=false;value.structure.colors.curtain='#334455';assert.deepEqual(validateLayout(JSON.parse(JSON.stringify(value))),value);
 for(const change of [{height:NaN},{height:5},{height:2.1},{stairWidth:-1},{stairRun:9},{stairDrop:0},{ladderRun:.05},{estimated:'yes'}]){const bad=room();Object.assign(bad.structure.room,change);assert.throws(()=>validateLayout(bad));}
});
