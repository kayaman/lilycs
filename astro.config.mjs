// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import db from '@astrojs/db';
import vercel from '@astrojs/vercel';
import svelte from '@astrojs/svelte';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [db(), svelte()],

  adapter: vercel(),
});
