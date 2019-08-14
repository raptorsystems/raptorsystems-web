import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'spa',

  srcDir: 'src/',

  head: {
    title: 'Raptor Systems | Software, Cloud, Web y Hardware en Antofagasta',
  },

  meta: {
    mobileApp: false,
  },

  manifest: {
    name: 'Raptor Systems',
    short_name: 'Raptor Systems',
    description: `Software, Cloud, Web y Hardware en Antofagasta.`,
    display: 'browser',
    lang: 'es-CL',
    start_url: '/',
    author: 'Raptor Systems',
  },

  generate: { fallback: true },

  plugins: ['~/plugins/vee-validate'],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxtjs/vuetify',
    'nuxt-webfontloader',
  ],

  googleAnalytics: {
    id: process.env.googleID || '.',
  },

  vuetify: {},

  webfontloader: {
    google: {
      families: ['Roboto:300,400,500,700|Material+Icons'],
    },
  },
}

export default config
