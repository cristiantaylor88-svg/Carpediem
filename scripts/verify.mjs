import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const routes=['/','/equipo/','/equipo/marianela-belen-salgado/','/especialidades/','/especialidades/psicopedagogia/','/especialidades/psicologia/','/especialidades/terapia-ocupacional/','/especialidades/psicomotricidad/','/especialidades/fonoaudiologia/','/talleres/','/talleres/habilidades-sociales/','/familias/','/familias/preguntas-frecuentes/','/nosotros/','/contacto/'];
for(const route of routes){
 const html=fs.readFileSync(path.join('dist',route,'index.html'),'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route+' debe tener un h1');
 assert(html.includes('lang="es-AR"'),route+' idioma');
 assert(html.includes(`href="https://carpediemequipo.com.ar${route}"`),route+' canonical');
 assert(html.includes('name="description"'),route+' descripción');
 assert(html.includes('https://wa.me/5491144476935'),route+' WhatsApp');
 assert(!html.includes('4954 4B'),route+' dirección anterior');
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
 assert(schemas.length,route+' JSON-LD');
 schemas.forEach(s=>JSON.parse(s[1]));
 for(const [,link] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)){
  assert(fs.existsSync(path.join('dist',link)) || fs.existsSync(path.join('dist',link,'index.html')),route+' enlace faltante: '+link);
 }
}
for(const file of ['robots.txt','sitemap.xml','sitemap-index.xml','sitemap-0.xml','404.html'])assert(fs.existsSync('dist/'+file),file+' faltante');
const sitemap=fs.readFileSync('dist/sitemap-0.xml','utf8');
routes.forEach(r=>assert(sitemap.includes('https://carpediemequipo.com.ar'+r),r+' falta en sitemap'));
console.log('Verificación correcta: 15 rutas, enlaces internos, metadatos, JSON-LD, WhatsApp, sitemap y página 404.');
