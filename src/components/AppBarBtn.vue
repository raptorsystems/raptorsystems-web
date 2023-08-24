<template>
  <v-btn
    v-bind="$attrs"
    class="text-caption text-uppercase"
    variant="flat"
    rounded
  >
    <span v-if="!$vuetify.display.mdAndDown" v-text="text" />
    <v-icon v-if="icon" :end="!$vuetify.display.mdAndDown">{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, required: true },
  icon: { type: String, default: null },
})
</script>
