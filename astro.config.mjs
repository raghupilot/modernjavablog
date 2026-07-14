// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// When deployed to GitHub Pages as a *project* site (username.github.io/repo-name),
// the site is served from a subpath, so `base` must match the repo name.
// Set these two env vars in your GitHub Actions workflow or a .env file — see README.
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true, // Prevents horizontal scrolling issues on mobile
    },
  },
});