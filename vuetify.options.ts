import { mdiAccount, mdiEmail, mdiPhone, mdiSend, mdiWhatsapp } from '@mdi/js'
import es from 'vuetify/lib/locale/es'
import { UserVuetifyPreset } from 'vuetify/types'
import { VuetifyLocale } from 'vuetify/types/services/lang'

export const theme = {
  primary: '#235de5',
  accent: '#9dfaff',
  error: '#fff',
}

const icons = {
  mdiAccount,
  mdiEmail,
  mdiPhone,
  mdiSend,
  mdiWhatsapp,
}

export const options: UserVuetifyPreset = {
  icons: {
    iconfont: 'mdiSvg',
    values: icons,
  },
  lang: {
    locales: { es: es as VuetifyLocale },
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
