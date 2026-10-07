import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://carpediemequipo.com.ar', output: 'static', trailingSlash: 'always', integrations: [sitemap()] });
