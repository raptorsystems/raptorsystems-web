import { NuxtConfig } from '@nuxt/types'
import dotenv from 'dotenv'
import { theme } from './vuetify.options'

dotenv.config()

const config: NuxtConfig = {
  mode: 'universal',
  target: 'static',

  srcDir: 'src',

  head: {
    title: 'Raptor Systems – Desarrollo de Software en Antofagasta',
    meta: [
      {
        hid: 'keywords',
        name: 'keywords',
        content: `software, desarrollo software, antofagasta`,
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: theme.primary,
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: theme.primary,
      },
    ],
  },

  pwa: {
    meta: {
      mobileApp: false,
    },
    manifest: {
      name: 'Raptor Systems',
      short_name: 'Raptor Systems',
      description: `Creamos software enfocado en solucionar los problemas de tus clientes, cuenta con nosotros como partner tecnológico en Antofagasta.`,
      display: 'browser',
      lang: 'es-CL',
      start_url: '/',
      author: 'Raptor Systems',
    },
  },

  generate: { fallback: true },

  plugins: ['~/plugins/vee-validate'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-webfontloader'],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
    '@nuxtjs/vuetify',
  ],

  build: {
    transpile: [
      'vee-validate/dist/rules', // https://logaretm.github.io/vee-validate/guide/rules.html#importing-rules-in-nuxt-js
    ],
  },

  axios: {
    baseURL: '/',
  },

  dotenv: {
    path: process.cwd(),
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ID as string,
  },

  vuetify: {
    treeShake: true,
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '../vuetify.options.ts', // relative to srcDir
  },

  webfontloader: {
    google: {
      families: ['Raleway:100,400,500', 'Lato:300,400,500'],
    },
  },
}

export default config
