<template>
  <ValidationObserver v-slot="{ failed, validate }">
    <v-form
      ref="form"
      :name="formName"
      method="post"
      netlify="netlify"
      netlify-honeypot="asunto"
      @submit.prevent="submit(validate)"
    >
      <v-card class="pa-3 frosted" elevation="6">
        <v-card-text>
          <v-text-field
            v-show="false"
            label="asunto"
            name="asunto"
          ></v-text-field>
          <ValidatedTextField
            v-model="form.nombre"
            rules="required"
            name="nombre"
            label="Nombre"
            append-icon="$mdiAccount"
          ></ValidatedTextField>
          <ValidatedTextField
            v-model="form.email"
            rules="required|email"
            name="email"
            label="Email"
            type="email"
            append-icon="$mdiEmail"
          ></ValidatedTextField>
          <v-text-field
            v-model="form.telefono"
            name="telefono"
            label="Teléfono"
            append-icon="$mdiPhone"
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
            :disabled="failed"
            >enviar
            <v-icon right>$mdiSend</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-form>
    <v-snackbar bottom v-bind="snackbar">
      <div v-html="snackbar.text"></div>
      <template #action="{ attrs }">
        <v-btn
          v-bind="attrs"
          color="white"
          text
          @click="snackbar.value = false"
        >
          cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from 'vue'
import { ValidationObserver } from 'vee-validate'

export default Vue.extend({
  components: {
    ValidationObserver,
  },
  props: {
    email: { type: String, required: true },
  },
  data() {
    return {
      formName: 'contact',
      snackbar: {
        value: false,
        timeout: -1,
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
    encode(data: Record<string, string>): string {
      return Object.keys(data)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&')
    },
    showSnackbar(): void {
      this.snackbar.value = true
    },
    closeSnackbar(): void {
      this.snackbar.value = false
    },
    showSuccess(): void {
      this.closeSnackbar()
      this.snackbar.text = `
        Mensaje enviado 📨<br>pronto te contactaremos!
      `
      this.showSnackbar()
    },
    showFailure(): void {
      this.closeSnackbar()
      this.snackbar.text = `
        No fue posible enviar el mensaje 😞<br>
        envíanos un email directamente a:<br>
        <a class='font-weight-bold' href='mailto:${this.email}'>${this.email}</a>
      `
      this.showSnackbar()
    },
    async submit(
      validate: ({ silent }?: { silent?: boolean }) => Promise<boolean>,
    ): Promise<void> {
      if (await validate()) {
        try {
          await this.$axios.$post(
            '/',
            this.encode({
              'form-name': this.formName,
              ...this.form,
            }),
            {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            },
          )
          this.showSuccess()
        } catch (error) {
          this.showFailure()
        }
      }
    },
  },
})
</script>

<style scoped>
.frosted {
  background-color: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(32px);
}
</style>
