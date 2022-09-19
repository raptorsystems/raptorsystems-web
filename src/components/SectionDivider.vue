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

<script setup lang="ts">
import { useTheme } from 'vuetify'

const props = defineProps({
  height: { type: [String, Number], default: 64 },
  color: { type: String, default: 'white' },
  bottom: { type: Boolean, default: true },
  top: { type: Boolean, default: false },
})

const fill = computed(() => {
  const { current } = useTheme()
  const themeColor = current.value.colors[props.color]
  if (!themeColor) return props.color
  return themeColor
})

const points = computed(() => {
  if (props.top) return '0,0 100,0 100,100'
  return '0,100 100,0 100,100'
})

const direction = computed(() => {
  return props.top ? 'top' : props.bottom ? 'bottom' : undefined
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
