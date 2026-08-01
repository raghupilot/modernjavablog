// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import mermaid from 'astro-mermaid';

const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [
    mermaid({ theme: 'default', autoTheme: true }),
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      excludeLangs: ['mermaid'] // Tell Shiki to ignore mermaid code blocks
    },
  },
});