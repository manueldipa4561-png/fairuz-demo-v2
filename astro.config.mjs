// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Netlify exposes the primary URL as `URL` at build time.
// TODO: replace the fallback with the real production domain once the client approves the demo.
const site = process.env.SITE_URL || process.env.URL || 'https://fairuz-demo-v2.netlify.app';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    // Italian lives at the root (/menu), English under /en (/en/menu).
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'it', locales: { it: 'it-IT', en: 'en-GB' } },
    }),
  ],
});
