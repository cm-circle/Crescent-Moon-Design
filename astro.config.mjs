// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://crescentmoondesign.com',
  base: '/Crescent-Moon-Design/',
  integrations: [mdx(), sitemap()],
});
