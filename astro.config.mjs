import { defineConfig, sharpImageService } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  compressHTML: true,
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  image: {
    service: sharpImageService()
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        de: 'de-DE',
        fr: 'fr-FR',
        ku: 'ku-IQ',
        tr: 'tr-TR',
      },
    },
  })],
  site: 'https://cevdetardaharan.github.io',
  base: '/philosophia',
});