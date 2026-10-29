import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {blankProject,resizeFootprint,addProjectFloor,removeTopFloor,chooseFloor,syncFloors,projectFloors,floorElevations,floorHoles,floorRectangles,connectionFootprint,connectionProblem,STAIR_STYLES} from '../src/floors.js';
import {validateLayout,item,setStructure,pointBlocked,navObstacles,FLOOR} from '../src/core.js';
import {furnitureModel,disposeModel} from '../src/models.js';
import {stairModel} from '../src/stair-models.js';

test('scratch project is an empty room with explicit dimensions and no inferred extensions',()=>{
 const s=validateLayout(blankProject(6,5,2.7));assert.equal(s.items.length,0);assert.equal(s.structure.room.kind,'custom-room');assert.equal(s.structure.bounds.right-s.structure.bounds.left,6);assert.equal(s.structure.bathroom.enabled,false);assert.equal(s.structure.balcony.enabled,false);assert.equal(s.floors.length,1);assert.equal(s.structure.openings.length,0);
});
test('the default four-metre room accepts the default stairs, and ten-metre rooms remain valid',()=>{
 const s=blankProject();addProjectFloor(s);assert.equal(validateLayout(s).floors.length,2);assert.equal(validateLayout(blankProject(10,10)).structure.bounds.right,5);
});
test('simple width resizing keeps the room centre and openings inside the wall',()=>{
 const s=blankProject().structure;s.openings.push({id:'test-window',kind:'window',side:'back',at:1.3,w:1,h:1,sill:1});resizeFootprint(s,'width',2);assert.equal(s.bounds.left,-1);assert.equal(s.bounds.right,1);assert.ok(s.openings[0].at+s.openings[0].w/2<=.901);assert.equal(validateLayout({...blankProject(),structure:s}).structure.bounds.right,1);assert.throws(()=>resizeFootprint(s,'depth',NaN));
});
test('all eight connection styles create real upper-floor openings and finite ascending geometry',()=>{
 assert.equal(STAIR_STYLES.length,8);
 for(const style of STAIR_STYLES){const s=blankProject(5,5,2.8),link=addProjectFloor(s,style.id),checked=validateLayout(s),levels=floorElevations(checked),hole=floorHoles(checked,checked.activeFloorId)[0],rects=floorRectangles(checked.structure.bounds,[hole]);
  assert.equal(connectionProblem(checked,link),null,style.id);assert.equal(levels[1].elevation,3);assert.ok(rects.every(r=>!((link.x>r.left&&link.x<r.right)&&(link.z>r.back&&link.z<r.front))),style.id);
  const remaining=rects.reduce((sum,r)=>sum+(r.right-r.left)*(r.front-r.back),0);assert.ok(Math.abs(remaining-(25-link.w*link.run))<1e-8,style.id);
  const model=stairModel(link,3);model.updateMatrixWorld(true);const bounds=new T.Box3().setFromObject(model);assert.ok(bounds.min.y<.4&&bounds.max.y>=3,style.id);for(const n of [...bounds.min.toArray(),...bounds.max.toArray()])assert.ok(Number.isFinite(n),style.id);disposeModel(model);
 }
});
test('each floor keeps its furniture, finish, name and height through switches and JSON',()=>{
 const s=blankProject(5,5);s.items.push(item('coatRack',-1.4,0));s.structure.finishes.floor.material='herringbone';s.structure.room.height=2.7;addProjectFloor(s,'wood-ladder');s.floors[1].name='Bedroom';s.items.push(item('roundTable',0,0,0,{w:1.6,d:1.6}));s.structure.finishes.floor.material='matte';s.structure.room.height=2.6;syncFloors(s);const upper=s.activeFloorId;
 chooseFloor(s,'floor-1');assert.equal(s.items[0].type,'coatRack');assert.equal(s.structure.finishes.floor.material,'herringbone');chooseFloor(s,upper);assert.equal(s.items[0].w,1.6);assert.equal(s.structure.finishes.floor.material,'matte');assert.deepEqual(validateLayout(JSON.parse(JSON.stringify(s))),validateLayout(s));assert.equal(projectFloors(s)[1].name,'Bedroom');assert.ok(Math.abs(floorElevations(s)[1].elevation-2.9)<1e-9);
});
test('four-floor project keeps all connections, removes top-floor links and rejects a fifth floor',()=>{
 const s=blankProject(5,5);for(let i=0;i<3;i++)addProjectFloor(s,'timber');assert.equal(validateLayout(s).floors.length,4);assert.equal(s.stairs.length,3);assert.throws(()=>addProjectFloor(s,'timber'),/four/);removeTopFloor(s);assert.equal(validateLayout(s).floors.length,3);assert.equal(s.stairs.length,2);assert.equal(s.activeFloorId,s.floors.at(-1).id);
});
test('import validates inactive floors, connections and complete floor chains',()=>{
 const s=blankProject(5,5);addProjectFloor(s,'metal-ladder');const bad=fn=>{const c=structuredClone(s);fn(c);assert.throws(()=>validateLayout(c));};bad(c=>c.floors[0].items=[item('coatRack',NaN,0)]);bad(c=>c.stairs[0].to=c.stairs[0].from);bad(c=>c.stairs[0].rot=.3);bad(c=>c.stairs[0].id='stairs-" onclick="bad');bad(c=>c.stairs[0].x=6.1);bad(c=>c.stairs=[]);bad(c=>c.floors[1].id=c.floors[0].id);bad(c=>c.activeFloorId='missing');const extra=structuredClone(s);extra.floors[0].floors=[{}];assert.equal(validateLayout(extra).floors[0].floors,undefined);
});
test('floor opening and stair footprints block the single-floor walking simulation',()=>{
 const s=blankProject(5,5),l=addProjectFloor(s,'wood-ladder'),h=connectionFootprint(l);setStructure(s.structure,{holes:[h],connections:[]});assert.equal(pointBlocked(l.x,l.z,navObstacles([])),true);setStructure(s.structure,{holes:[],connections:[]});assert.equal(pointBlocked(l.x,l.z,navObstacles([])),false);
});
test('round-table diameter changes keep the top circular, with a separate stable base and height',()=>{
 const bounds=[];for(const diameter of [.9,1.8]){const o=item('roundTable',0,0,0,{w:diameter,d:diameter,h:.75}),model=furnitureModel(o);model.position.y=0;model.updateMatrixWorld(true);const b=new T.Box3().setFromObject(model);bounds.push(b);assert.ok(Math.abs(b.max.x-b.min.x-diameter)<.005);assert.ok(Math.abs(b.max.z-b.min.z-diameter)<.005);assert.ok(Math.abs(b.max.y-.75)<.005);assert.equal(validateLayout({...blankProject(),items:[o]}).items[0].d,diameter);disposeModel(model);}
 assert.ok(Math.abs(bounds[0].max.y-bounds[1].max.y)<.001);assert.throws(()=>validateLayout({...blankProject(),items:[item('roundTable',0,0,0,{w:1,d:2})]}),/diameter/);
});
