<template>
  <ProjectRow
    title="Krypto Ledgers"
    link="https://kryptoledgers.com"
    :img-props="img"
  >
    <template #description>
      Calcula tus impuestos de criptomonedas y sigue tu portafolio todo en un
      mismo lugar.
    </template>
  </ProjectRow>
</template>

<script setup lang="ts">
import imgSrc from '~/assets/images/projects/krypto-ledgers-light.jpeg'

const img = {
  src: imgSrc,
}
</script>
