import eslintPlugin from 'vite-plugin-eslint'
import vuetify from 'vite-plugin-vuetify'
import { theme } from './theme'

export default defineNuxtConfig({
  srcDir: 'src',

  app: {
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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@200..800&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
        },
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
  },

  // pwa: {
  //   meta: {
  //     mobileApp: false,
  //   },
  //   manifest: {
  //     name: 'Raptor Systems',
  //     short_name: 'Raptor Systems',
  //     description: `Creamos software enfocado en solucionar los problemas de tus clientes, cuenta con nosotros como partner tecnológico en Antofagasta.`,
  //     display: 'browser',
  //     lang: 'es-CL',
  //   },
  // },

  // plugins: ['~/plugins/vee-validate'],

  // modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-webfontloader'],

  modules: [
    '@nuxt/image',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify())
      })
    },
  ],

  // buildModules: [
  //   '@nuxt/typescript-build',
  //   '@nuxtjs/google-analytics',
  //   '@nuxtjs/vuetify',
  //   '@aceforth/nuxt-optimized-images',
  //   'vue-plausible',
  // ],

  css: ['~/assets/variables.scss'],

  build: {
    transpile: [
      'vuetify',
      // 'vee-validate/dist/rules', // https://logaretm.github.io/vee-validate/guide/rules.html#importing-rules-in-nuxt-js
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    // plugins: [eslintPlugin()],
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  // googleAnalytics: {
  //   id: process.env.GOOGLE_ID,
  // },

  // optimizedImages: {
  //   optimizeImages: true,
  // },

  // plausible: {
  //   domain: process.env.DOMAIN ?? 'raptorsystems.cl',
  // },

  // vuetify: {
  //   treeShake: true,
  //   defaultAssets: false,
  //   customVariables: ['~/assets/variables.scss'],
  //   optionsPath: '../vuetify.options.ts', // relative to srcDir
  // },

  // webfontloader: {
  //   // Workaround for adding font-display option
  //   // https://github.com/Developmint/nuxt-webfontloader#adding-google-fonts-with-font-display-option
  //   custom: {
  //     families: ['Raleway:n3,n4,n5', 'Lato:n3,n4,n5'], // uses FVD notation https://github.com/typekit/fvd
  //     urls: [
  //       'https://fonts.googleapis.com/css?family=Raleway:300,400,500&display=swap',
  //       'https://fonts.googleapis.com/css?family=Lato:300,400,500&display=swap',
  //     ],
  //   },
  // },
})
