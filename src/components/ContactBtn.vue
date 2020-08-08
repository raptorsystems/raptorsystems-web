<template>
  <v-btn
    v-bind="$attrs"
    aria-label="CONTÁCTANOS"
    @click="$vuetify.goTo('#contact')"
  >
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
