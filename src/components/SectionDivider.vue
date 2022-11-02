<template>
  <svg
    :height="height"
    :class="direction"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <polygon :fill="fill" :points="points" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    height: { type: [String, Number], default: 64 },
    color: { type: String, default: 'white' },
    bottom: { type: Boolean, default: true },
    top: { type: Boolean, default: false },
  },
  computed: {
    fill(): string {
      const themeColor = this.$vuetify.theme.themes.light[this.color] as string
      if (!themeColor) return this.color
      return themeColor
    },
    points(): string {
      if (this.top) return '0,0 100,0 100,100'
      return '0,100 100,0 100,100'
    },
    direction(): 'top' | 'bottom' | undefined {
      return this.top ? 'top' : this.bottom ? 'bottom' : undefined
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
.top {
  margin-top: -1px;
}
.bottom {
  bottom: 0;
  margin-bottom: -1px;
}
</style>
