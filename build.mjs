import { build } from 'esbuild';
await build({entryPoints:['src/main.js'],bundle:true,format:'iife',target:'es2020',minify:true,outfile:'assets/house-studio.js',legalComments:'eof'});
console.log('Offline app built: assets/house-studio.js');
