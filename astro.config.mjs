//astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  alias: {
    '@': new URL('./src', import.meta.url).pathname, 
  },
});
