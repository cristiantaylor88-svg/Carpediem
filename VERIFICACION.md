# Verificación de la primera versión

- El compilador oficial de Astro transformó correctamente los seis componentes y páginas `.astro`, sin errores de sintaxis.
- Las 15 rutas solicitadas están declaradas; las páginas de especialidades, profesionales y talleres se generan desde datos compartidos.
- El logo publicado es una copia binaria del JPG oficial. Se muestra completo, sin cambios de color, proporciones ni recortes.
- Las cuatro fuentes locales declaradas en el diseño están presentes; se incluyen las licencias OFL.
- La dirección está unificada en 5B, incluido JSON-LD.
- Los enlaces de WhatsApp usan el número confirmado y mensajes iniciales por especialidad.
- Se incluyen navegación móvil sin JavaScript, enlace para saltar al contenido, foco visible, HTML semántico y diseño con puntos de adaptación para pantallas pequeñas.

**Limitación:** no fue posible completar la compilación de producción por una restricción de acceso a directorios del entorno. Por lo tanto, no están confirmados el resultado HTML final, la revisión visual en navegador ni las métricas de rendimiento. Ejecutar las comprobaciones del README antes de publicar. No se realizó despliegue en Cloudflare ni se modificó el dominio.

El archivo `scripts/verify.mjs` está listo para validar el resultado real de la compilación. No se afirma que esas pruebas hayan pasado.
