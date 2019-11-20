<template>
  <a :href="link">
    <img class="logo" :height="height" :src="logo" :alt="alt" />
  </a>
</template>

<script>
export default {
  props: {
    dark: { type: Boolean, default: false },
    height: { type: Number, default: 64 },
  },
  data() {
    return {
      link: '//www.raptorsystems.cl',
      alt: 'Raptor Systems',
    }
  },
  computed: {
    logo() {
      return this.dark ? '/raptorsystems_dark.svg' : '/raptorsystems_light.svg'
    },
  },
}
</script>

<style scoped>
.logo {
  vertical-align: middle;
}
</style>
