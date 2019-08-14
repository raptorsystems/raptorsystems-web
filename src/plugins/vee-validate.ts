import VeeValidate, { Validator } from 'vee-validate'
import es from 'vee-validate/dist/locale/es'
import Vue from 'vue'

Vue.use(VeeValidate, {
  locale: 'es',
  delay: 500,
})

Validator.localize('es', es)
