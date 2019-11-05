import { extend, localize } from 'vee-validate'
import es from 'vee-validate/dist/locale/es.json'
import { email, required } from 'vee-validate/dist/rules'

extend('email', email)
extend('required', required)

localize('es', es)
