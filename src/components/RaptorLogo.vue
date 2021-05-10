<template>
  <NuxtLink nuxt to="/">
    <img
      :class="{ logo: true, shadow: dark }"
      :height="height"
      :src="logo"
      :alt="alt"
    />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    dark: { type: Boolean, default: false },
    height: { type: Number, default: 64 },
  },
  data() {
    return {
      alt: 'Raptor Systems',
    }
  },
  computed: {
    logo(): string {
      return this.dark ? '/raptorsystems_dark.svg' : '/raptorsystems_light.svg'
    },
  },
})
</script>

<style scoped>
.logo {
  vertical-align: middle;
}
.shadow {
  filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.2));
}
</style>
