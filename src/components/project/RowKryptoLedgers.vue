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

<script lang="ts">
import Vue from 'vue'

import img from '~/assets/images/projects/krypto-ledgers-light.jpeg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=1000&sizes[]=1200&sizes[]=1600'

// components
import ProjectRow from '~/components/project/Row.vue'

export default Vue.extend({
  components: {
    ProjectRow,
  },
  data() {
    return {
      img: {
        srcset: img.srcSet,
        src: img.src,
      },
    }
  },
})
</script>
