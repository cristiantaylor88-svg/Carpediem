# Carpe Diem — primera versión web

Sitio estático en Astro, preparado para Cloudflare Pages. Incluye las 15 rutas solicitadas, logo oficial intacto, identidad visual del manual v2, voz rioplatense, consultas por WhatsApp, FAQs generales y contextuales. Dirección confirmada: **Dr. Amadeo Sabattini 4954 5B, Caseros, Tres de Febrero, Buenos Aires**.

## Ejecutar y verificar

Requiere Node.js 22.12 o posterior compatible con Astro 6. Dependencias fijadas en `pnpm-lock.yaml`.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm verify
pnpm preview
```

Alternativa con npm: `npm install`, `npm run dev`, `npm run build`, `npm run verify`. En ese caso, conservar el nuevo package-lock.json y usar npm de manera consistente.

## Publicar gratis en Cloudflare Pages

1. Subir esta carpeta a un repositorio propio de GitHub o GitLab (sin node_modules).
2. Cloudflare → Workers & Pages → crear una aplicación Pages → importar el repositorio.
3. Framework: Astro. Comando de construcción: `npm run build`. Directorio de salida: `dist`. Directorio raíz: la raíz de este proyecto. Usar Node.js 22 o 24 compatible.
4. Revisar el despliegue en el subdominio pages.dev, incluida la navegación móvil y el contacto.
5. En el proyecto Pages → Custom domains → agregar `carpediemequipo.com.ar`. Seguir las indicaciones de Cloudflare para la zona DNS existente; no cambiar registros de correo.
6. Confirmar certificado HTTPS activo y que el dominio muestra el despliegue. Si se usa www, configurarlo como dominio adicional y redirigirlo al dominio principal.
7. Search Console: verificar la propiedad del dominio con el TXT indicado por Google; enviar `https://carpediemequipo.com.ar/sitemap-index.xml`. Inspeccionar inicio, contacto y Psicopedagogía.

También se puede ejecutar `pnpm build` y cargar la carpeta `dist` con Direct Upload en Pages. No subir los archivos fuente como si fueran el sitio compilado.

Documentación oficial: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

## Contenido y ampliaciones

- `src/data/site.ts`: datos institucionales, profesionales, especialidades, talleres y FAQ. Agregar un registro genera automáticamente la nueva página y su enlace en el listado correspondiente.
- `src/pages/index.astro`: portada.
- `src/pages/[...slug].astro`: páginas y listados.
- `src/layouts/Layout.astro`: navegación, footer, metadatos y datos estructurados.
- `src/styles/global.css`: paleta del manual, tipografías locales y diseño responsive.
- `public/logo.jpg`: archivo oficial copiado íntegramente, sin alteraciones.
- `public/fonts/`: fuentes con licencias OFL, servidas localmente.

Para nuevos artículos de familias, agregar páginas `.astro` dentro de `src/pages/familias/`, con título, descripción, autor real, fecha real de publicación/revisión y fuentes cuando hagan afirmaciones clínicas. Enlazarlos desde el hub. El sitemap los incorporará al compilar.

## SEO y contenido responsable

HTML semántico, idioma es-AR, canonical por página, titles y descriptions, Open Graph básico con logo oficial, robots, sitemap y JSON-LD de Organization, WebSite, WebPage, BreadcrumbList, FAQPage y Person cuando corresponde. No se publican matrículas, títulos académicos, fotos, horarios, coberturas ni nombres sin confirmar. FAQPage describe las respuestas visibles; no garantiza resultados enriquecidos en buscadores. No se prometen resultados SEO/AEO/GEO ni terapéuticos.

El taller se presenta para consulta, sin afirmar fechas o inscripción abierta. Estimulación temprana aparece en el manual, pero no fue agregada porque no forma parte de la arquitectura solicitada. No hay rastreadores, formularios ni servicios externos de fuentes.

## Estado de verificación

La compilación de producción **no quedó verificada**: el entorno de construcción rechazó lecturas requeridas por esbuild y no permite elevar permisos. El proyecto conserva su configuración normal de Astro. Ejecutar `pnpm build` y luego `pnpm verify` antes de publicar. No se realizó despliegue ni modificación del DNS. El verificador revisa las 15 rutas, enlaces internos, canonical, JSON-LD, sitemap, WhatsApp y 404 sobre el resultado real de Astro.

Pendientes editoriales: confirmar credenciales y matrículas con cada profesional, agregar fotos autorizadas, completar responsables de las cuatro especialidades restantes y detalles reales del taller. Los textos públicos están preparados para orientar sin completar esos datos por suposición.
