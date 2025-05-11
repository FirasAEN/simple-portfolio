import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';


const isDev = import.meta.env.DEV;

let base = isDev ? '.' : '/simple-portfolio';

// visit https://astro.build/config
export default defineConfig({
  site: 'https://firasaen.github.io', // Use to generate your sitemap and canonical URLs in your final build.
  base,
  trailingSlash: 'always', // Use to always append '/' at end of url
  output: 'static',
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
    },
  },
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
});
