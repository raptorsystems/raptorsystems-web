<template>
  <v-btn v-bind="$attrs" class="text-caption" depressed rounded>
    <span v-if="!$vuetify.display.mdAndDown" v-text="text" />
    <v-icon v-if="icon" :right="!$vuetify.display.mdAndDown">{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, required: true },
  icon: { type: String, default: null },
})
</script>
