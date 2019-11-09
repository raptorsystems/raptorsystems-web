<template>
  <v-app>
    <v-app-bar id="app-bar" app elevate-on-scroll>
      <RaptorLogo :height="42"></RaptorLogo>
      <v-spacer></v-spacer>
      <ContactBtn
        v-if="$vuetify.breakpoint.smAndUp"
        depressed
        rounded
        color="primary"
      >
        contáctanos
      </ContactBtn>
      <ContactBtn v-else rounded color="primary">
        <v-icon>mdi-phone</v-icon>
      </ContactBtn>
    </v-app-bar>

    <v-content>
      <nuxt></nuxt>
    </v-content>

    <v-footer id="footer" height="400" color="transparent">
      <v-row
        class="py-8 flex-column fill-height"
        align="center"
        justify="space-around"
      >
        <RaptorLogo :height="80"></RaptorLogo>
        <div class="body-2 font-weight-light">
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
        raptor: '//raptorsystems.cl',
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
