<template>
  <a :href="link">
    <img class="logo" :height="height" :src="logo" :alt="alt" />
  </a>
</template>

<script>
export default {
  props: {
    height: { type: Number, default: 64 },
  },
  data() {
    return {
      logo: '/raptorsystems_light.svg',
      link: '//www.raptorsystems.cl',
      alt: 'Raptor Systems',
    }
  },
}
</script>

<style scoped>
.logo {
  vertical-align: middle;
}
</style>
