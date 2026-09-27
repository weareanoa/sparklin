// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://weareanoa.github.io/sparklin
  // Switch base to '/' if deploying to a custom domain (e.g. sparklin.weareanoa.app).
  site: 'https://weareanoa.github.io',
  base: '/sparklin',
  vite: {
    server: {
      allowedHosts: ['proud-bikes-strive.loca.lt', 'sparklin.weareanoa.app'],
    },
  },
});
