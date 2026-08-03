import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://kunkun-blog.pages.dev',
  output: 'static',
  build: {
    format: 'directory',
  },
  i18n: {
    locales: ['zh', 'en', 'ja', 'fr'],
    defaultLocale: 'zh',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [mdx(), sitemap()],
});
