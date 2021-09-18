<template>
  <ValidationObserver v-slot="{ failed, validate }">
    <v-card v-bind="$attrs" class="pa-3 mx-auto frosted">
      <v-form
        ref="form"
        :name="formName"
        method="post"
        netlify="netlify"
        netlify-honeypot="asunto"
        @submit.prevent="submit(validate)"
      >
        <v-card-text>
          <v-text-field v-show="false" label="asunto" name="asunto" />
          <ValidatedTextField
            v-model="form.nombre"
            rules="required"
            name="nombre"
            label="Nombre"
            append-icon="$mdiAccount"
          />
          <ValidatedTextField
            v-model="form.email"
            rules="required|email"
            name="email"
            label="Email"
            type="email"
            append-icon="$mdiEmail"
          />
          <v-text-field
            v-model="form.telefono"
            name="telefono"
            label="Teléfono"
            append-icon="$mdiPhone"
          />
          <v-textarea
            v-model="form.mensaje"
            name="mensaje"
            label="Mensaje"
            auto-grow
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
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
          <v-spacer />
        </v-card-actions>
      </v-form>
    </v-card>
    <v-snackbar bottom v-bind="snackbar">
      <template v-if="snackbar.success">
        Mensaje enviado 📨<br />pronto te contactaremos!
      </template>
      <template v-else>
        No fue posible enviar el mensaje 😞<br />
        envíanos un email directamente a:<br />
        <a class="font-weight-bold" :href="`mailto:${email}`">
          {{ email }}
        </a>
      </template>
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

// components
import ValidatedTextField from '~/components/ValidatedTextField.vue'

export default Vue.extend({
  components: {
    ValidatedTextField,
    ValidationObserver,
  },
  inheritAttrs: false,
  props: {
    email: { type: String, required: true },
  },
  data() {
    return {
      formName: 'contact',
      snackbar: {
        value: false,
        timeout: -1,
        success: true,
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
      this.snackbar.success = true
      this.showSnackbar()
    },
    showFailure(): void {
      this.closeSnackbar()
      this.snackbar.success = false
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

<style lang="sass" scoped>
.frosted
  background-color: rgba(0, 0, 0, 0.05) !important
  backdrop-filter: blur(16px)

  @supports not (backdrop-filter: none)
    background-color: rgba(0, 0, 0, 0.15) !important
</style>
