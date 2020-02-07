import es from 'vuetify/lib/locale/es'
import { UserVuetifyPreset } from 'vuetify/types'

export const theme = {
  primary: '#235de5',
  accent: '#9dfaff',
  error: '#fff',
}

export const options: UserVuetifyPreset = {
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
}

export default options
