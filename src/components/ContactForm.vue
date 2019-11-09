<template>
  <ValidationObserver v-slot="{ invalid, validated, validate }">
    <v-form
      ref="form"
      :name="formName"
      method="post"
      netlify="netlify"
      netlify-honeypot="bot-field"
      @submit.prevent="submit(validate)"
    >
      <v-card class="pa-3 frosted" elevation="6">
        <v-card-text>
          <v-text-field v-show="false" name="bot-field"></v-text-field>
          <ValidatedTextField
            v-model="form.nombre"
            rules="required"
            name="nombre"
            label="Nombre"
            append-icon="mdi-account"
          ></ValidatedTextField>
          <ValidatedTextField
            v-model="form.email"
            rules="required|email"
            name="email"
            label="Email"
            type="email"
            append-icon="mdi-email"
          ></ValidatedTextField>
          <v-text-field
            v-model="form.telefono"
            name="telefono"
            label="Teléfono"
            append-icon="mdi-phone"
          ></v-text-field>
          <v-textarea
            v-model="form.mensaje"
            name="mensaje"
            label="Mensaje"
            auto-grow
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            large
            rounded
            elevation="0"
            color="white"
            class="primary--text"
            type="submit"
            min-width="160"
            :disabled="validated && invalid"
            >enviar
            <v-icon right>mdi-send</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-form>
    <v-snackbar v-bind="snackbar">
      <div v-html="snackbar.text"></div>
      <v-btn color="white" text @click="snackbar.value = false">cerrar</v-btn>
    </v-snackbar>
  </ValidationObserver>
</template>

<script>
// components
import { ValidationObserver } from 'vee-validate'
import ValidatedTextField from '~/components/ValidatedTextField'

export default {
  components: {
    ValidationObserver,
    ValidatedTextField,
  },
  props: {
    email: { type: String, required: true },
  },
  data() {
    return {
      formName: 'contact',
      snackbar: {
        value: false,
        color: 'success',
        timeout: 0,
        text: '',
      },
      form: {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
      },
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&')
    },
    showSnackbar() {
      this.snackbar.value = true
    },
    closeSnackbar() {
      this.snackbar.value = false
    },
    showSuccess() {
      this.closeSnackbar()
      this.snackbar.color = 'success'
      this.snackbar.text = `
        📨 Mensaje enviado! pronto te contactaremos.
      `
      this.showSnackbar()
    },
    showFailure() {
      this.closeSnackbar()
      this.snackbar.color = 'error'
      this.snackbar.text = `
        No fue posible enviar el mensaje 😞 favor envíe un email a
        <a class='white--text' href='mailto:${this.email}'>${this.email}</a>
      `
      this.showSnackbar()
    },
    async submit(validate) {
      if (await validate()) {
        try {
          await this.$axios.$post(
            '/',
            this.encode({
              'form-name': this.formName,
              ...this.form,
            }),
            { header: { 'Content-Type': 'application/x-www-form-urlencoded' } },
          )
          this.showSuccess()
        } catch (error) {
          this.showFailure()
        }
      }
    },
  },
}
</script>

<style scoped>
.frosted {
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(24px);
}
</style>
