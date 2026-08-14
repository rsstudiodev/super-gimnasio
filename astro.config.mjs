// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rsstudiodev.github.io',
  base: '/super-gimnasio',
  integrations: [react(), sitemap(), partytown()],

  vite: {
    plugins: [tailwindcss()],
  },
});
