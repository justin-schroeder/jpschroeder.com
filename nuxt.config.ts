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
          name: 'twitter:site',
          content: '@jpschroeder',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
});
