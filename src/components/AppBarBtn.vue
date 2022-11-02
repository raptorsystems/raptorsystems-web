<template>
  <v-btn v-bind="attrs$" class="text-caption" v-on="$listeners">
    <span v-if="!isMobile" v-text="text" />
    <v-icon v-if="icon" :right="!isMobile">{{ icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: { type: String, required: true },
    icon: { type: String, default: null },
  },
  computed: {
    isMobile(): boolean {
      return this.$vuetify.breakpoint.mdAndDown
    },
    attrs$(): Record<string, unknown> {
      return {
        depressed: true,
        rounded: true,
        ...this.$attrs,
      }
    },
  },
})
</script>
