// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles.css'],
  modules: ['@nuxt/content'],
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  app: {
    head: {
      title: 'Justin Schroeder',
      meta: [
        {
          name: 'description',
          content:
            'Justin Schroeder is a software engineer, open source creator, and tech speaker.',
        },
        {
          property: 'og:image',
          content: '/og.png',
        },
        {
          name: 'twitter:title',
          content: 'Justin Schroeder • @jpschroeder',
        },
        {
          name: 'twitter:site',
          content: '@jpschroeder',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
});
