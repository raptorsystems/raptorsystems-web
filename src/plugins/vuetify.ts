import {
  mdiAccount,
  mdiEmail,
  mdiHome,
  mdiPhone,
  mdiSend,
  mdiWhatsapp,
} from '@mdi/js'
import { ThemeDefinition, createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { es } from 'vuetify/locale'
import { theme } from '../../theme'

import 'vuetify/styles'

const raptorTheme: ThemeDefinition = {
  dark: false,
  colors: theme,
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'raptorTheme',
      themes: { raptorTheme },
    },
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        mdiAccount,
        mdiEmail,
        mdiHome,
        mdiPhone,
        mdiSend,
        mdiWhatsapp,
      },
      sets: {
        mdi,
      },
    },
    locale: {
      locale: 'es',
      messages: { es },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
