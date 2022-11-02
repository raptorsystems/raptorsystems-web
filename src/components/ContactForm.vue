<template>
  <v-fab-transition>
    <v-btn
      v-if="show"
      fab
      large
      bottom
      right
      fixed
      color="primary"
      class="ma-6"
      @click="onClick"
    >
      <v-icon size="28">$mdiMessage</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script lang="ts">
import type { EmbedPopup } from '@typeform/embed/types/base'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    show: { type: Boolean, default: true },
  },
  data() {
    return {
      popup: undefined as EmbedPopup | undefined,
    }
  },
  methods: {
    async initPopup() {
      if (this.popup) return

      const { createPopup } = await import('@typeform/embed')

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      await import('@typeform/embed/build/css/popup.css')

      this.popup = createPopup('kNPl8W6o', {
        enableSandbox: this.$nuxt.context.isDev,
      })
    },
    async onClick() {
      await this.initPopup()
      this.popup?.toggle()
    },
  },
})
</script>
