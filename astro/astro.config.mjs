import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://geocrafter-studio.github.io',
  integrations: [tailwind()],
  output: 'static',
});
