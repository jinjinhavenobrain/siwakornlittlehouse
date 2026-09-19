/** Offline bundle builder. Reuses the Three.js / OrbitControls runtime from the original licensed v1 distribution. */
import {readFileSync,writeFileSync} from 'node:fs';
const prelude=readFileSync('assets/three-runtime-base.js','utf8');
const map={
 Scene:'Fs',Color:'Gt',Fog:'Lr',WebGLRenderer:'mo',PerspectiveCamera:'Ue',OrthographicCamera:'$i',OrbitControls:'Nl',HemisphereLight:'Ws',DirectionalLight:'Ji',Group:'re',GridHelper:'io',Box3Helper:'so',Box3:'An',MeshStandardMaterial:'vi',DoubleSide:'en',Mesh:'Se',BoxGeometry:'zn',CylinderGeometry:'zr',IcosahedronGeometry:'Zr',Vector3:'E',Shape:'Xi',ExtrudeGeometry:'Hs',PlaneGeometry:'Yi',PointLight:'to',TorusGeometry:'Kr',Clock:'eo',PCFSoftShadowMap:'Ba',ACESFilmicToneMapping:'oo',SRGBColorSpace:'ze',MathUtils:'Qi',SphereGeometry:'Jr',RingGeometry:'$r',MeshBasicMaterial:'yi',CanvasTexture:'Fr',Sprite:'Ur',SpriteMaterial:'Os',BufferGeometry:'Ce',LineDashedMaterial:'jr',LineBasicMaterial:'ni',Line:'zs',Plane:'Qe',Vector2:'nt',Raycaster:'no'};
const vendorNames=Object.values(map);
for(const name of vendorNames)if(!prelude.includes(name))throw new Error('Missing embedded Three.js runtime symbol: '+name);
let content=prelude+'\n;(function(){\nconst T = {'+Object.entries(map).filter(([k])=>k!=='OrbitControls').map(([k,v])=>JSON.stringify(k)+':'+v).join(',')+'};\nconst OrbitControls=Nl;const RoundedBoxGeometry=Vl;\n';
for(const file of ['src/core.js','src/models.js','src/architecture.js','src/icons.js','src/main.js']){
 let src=readFileSync(file,'utf8').replace(/^import .*?;\s*$/gm,'').replace(/^export\s+/gm,'');
 content+='\n// '+file+'\n'+src+'\n';
}
content+='\n})();\n})();\n';
writeFileSync('assets/house-studio.js',content);
console.log('Offline self-contained build created, '+content.length+' bytes');
