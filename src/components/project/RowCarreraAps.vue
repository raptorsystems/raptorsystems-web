<template>
  <ProjectRow
    title="Carrera APS"
    link="https://carrerafuncionaria.cl"
    :img-props="img"
  >
    <template #description>
      Una solución que permite a los departamentos de salud municipales
      administrar de una manera amigable y eficiente la Carrera Funcionaria de
      la Ley&nbsp;19.378.
    </template>
  </ProjectRow>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import img from '~/assets/images/projects/carrera-aps.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=1000&sizes[]=1200&sizes[]=1600'

// components
import ProjectRow from '~/components/project/Row.vue'

export default defineComponent({
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
