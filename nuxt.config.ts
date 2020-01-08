import { Configuration } from '@nuxt/types'
import es from 'vuetify/lib/locale/es'

require('dotenv').config()

const theme = {
  primary: '#235de5',
  secondary: '#9dfaff',
  error: '#fff',
}

const config: Configuration = {
  mode: 'spa',

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

  axios: {
    baseURL: '/',
  },

  dotenv: {
    path: process.cwd(),
  },

  googleAnalytics: {
    dev: false,
    id: process.env.GOOGLE_ID,
  },

  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    icons: {
      iconfont: 'mdiSvg',
    },
    lang: {
      locales: { es },
      current: 'es',
    },
    theme: {
      themes: {
        light: theme,
        dark: theme,
      },
    },
  },

  webfontloader: {
    google: {
      families: ['Raleway:100,400,500', 'Lato:300,400,500'],
    },
  },
}

export default config
