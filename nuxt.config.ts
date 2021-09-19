import { NuxtConfig } from '@nuxt/types'
import { theme } from './vuetify.options'

const config: NuxtConfig = {
  target: 'static',

  srcDir: 'src',

  components: true,

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
    },
  },

  generate: { fallback: true },

  plugins: ['~/plugins/vee-validate'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-webfontloader'],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images',
    'vue-plausible',
  ],

  build: {
    transpile: [
      'vee-validate/dist/rules', // https://logaretm.github.io/vee-validate/guide/rules.html#importing-rules-in-nuxt-js
    ],
  },

  axios: {
    baseURL: '/',
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ID as string,
  },

  optimizedImages: {
    optimizeImages: true,
  },

  plausible: {
    domain: process.env.DOMAIN ?? 'raptorsystems.cl',
  },

  vuetify: {
    treeShake: true,
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '../vuetify.options.ts', // relative to srcDir
  },

  webfontloader: {
    // Workaround for adding font-display option
    // https://github.com/Developmint/nuxt-webfontloader#adding-google-fonts-with-font-display-option
    custom: {
      families: ['Raleway:n3,n4,n5', 'Lato:n3,n4,n5'], // uses FVD notation https://github.com/typekit/fvd
      urls: [
        'https://fonts.googleapis.com/css?family=Raleway:300,400,500&display=swap',
        'https://fonts.googleapis.com/css?family=Lato:300,400,500&display=swap',
      ],
    },
  },
}

export default config
