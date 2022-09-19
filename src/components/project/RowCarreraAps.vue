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

<script setup lang="ts">
import imgSrc from '~/assets/images/projects/carrera-aps.jpg'

const img = {
  src: imgSrc,
}
</script>
