<template>
  <svg
    :height="height"
    :class="{ bottom: !top }"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <polygon :fill="fill" :points="points" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    height: { type: [String, Number], default: 64 },
    color: { type: String, default: 'white' },
    bottom: { type: Boolean, default: true },
    top: { type: Boolean, default: false },
  },
  computed: {
    fill() {
      const themeColor = this.$vuetify.theme.themes.light[this.color]
      if (!themeColor) return this.color
      return themeColor
    },
    points() {
      if (this.top) return '0,0 100,0 100,100'
      return '0,100 100,0 100,100'
    },
  },
})
</script>

<style scoped>
svg {
  position: absolute;
  width: 100%;
  left: 0;
}
.bottom {
  bottom: 0;
}
</style>
