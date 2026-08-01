// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      excludeLangs: ['mermaid'] // Keep this to prevent Shiki interference
    },
  },
});