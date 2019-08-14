<template>
  <v-app>
    <v-app-bar id="app-bar" app elevate-on-scroll>
      <v-toolbar-title>
        <RaptorLogo :height="24"></RaptorLogo>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <ContactBtn depressed rounded>contáctanos</ContactBtn>
    </v-app-bar>

    <v-content>
      <nuxt></nuxt>
    </v-content>

    <v-footer id="footer" height="320" color="transparent">
      <v-row
        class="py-4 flex-column fill-height"
        align="center"
        justify="space-around"
      >
        <RaptorLogo :height="64"></RaptorLogo>
        <div class="body-2">
          Copyright &copy; {{ currentYear }} Raptor Systems SpA
        </div>
        <div class="body-2 font-weight-light pt-4">
          Hecho en ⚓ Antofagasta
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import ContactBtn from '~/components/ContactBtn'
import RaptorLogo from '~/components/RaptorLogo'

export default {
  components: { ContactBtn, RaptorLogo },
  data() {
    return {
      raptorLogo: '/images/raptorsystems_light.svg',
      links: {
        raptor: '//www.raptorsystems.cl',
      },
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
