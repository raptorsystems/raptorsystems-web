// ? this file cant import any ts code, as is imported on a .js file on @nuxtjs/vuetify module
import { mdiEmail, mdiHome, mdiMessage, mdiPhone, mdiWhatsapp } from '@mdi/js'
import { es } from 'vuetify/lib/locale'
import { UserVuetifyPreset } from 'vuetify/types'

export const theme = {
  primary: '#235de5',
  accent: '#9dfaff',
  error: '#fff',
}

const icons = {
  mdiEmail,
  mdiHome,
  mdiMessage,
  mdiPhone,
  mdiWhatsapp,
}

export const options: UserVuetifyPreset = {
  icons: {
    iconfont: 'mdiSvg',
    values: icons,
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
}

export default options
