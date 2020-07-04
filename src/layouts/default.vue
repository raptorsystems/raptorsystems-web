<template>
  <v-app>
    <v-app-bar
      v-scroll="onScroll"
      app
      elevate-on-scroll
      :scroll-threshold="scrollThreshold"
      :color="appBarColor"
    >
      <RaptorLogo :dark="!isScrolled" :height="42"></RaptorLogo>
      <v-spacer></v-spacer>
      <ContactBtn
        v-if="$vuetify.breakpoint.smAndUp"
        depressed
        rounded
        color="primary"
      >
        contáctanos
      </ContactBtn>
      <ContactBtn v-else depressed rounded color="primary">
        <v-icon>$mdiPhone</v-icon>
      </ContactBtn>
    </v-app-bar>

    <v-main>
      <nuxt></nuxt>
    </v-main>

    <v-footer id="footer" height="400" color="transparent">
      <v-row
        class="py-8 flex-column fill-height"
        align="center"
        justify="space-around"
      >
        <RaptorLogo :height="80"></RaptorLogo>
        <div class="text-body-2 font-weight-light">
          Copyright &copy; {{ currentYear }} Raptor Systems SpA
        </div>
        <div class="text-body-2 font-weight-light pt-4">
          Hecho en ⚓ Antofagasta
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

// components
import ContactBtn from '~/components/ContactBtn.vue'
import RaptorLogo from '~/components/RaptorLogo.vue'

export default Vue.extend({
  components: {
    ContactBtn,
    RaptorLogo,
  },
  data() {
    return {
      currentScroll: 0,
      scrollThreshold: 20,
      raptorLogo: '/images/raptorsystems_light.svg',
      links: {
        raptor: '//raptorsystems.cl',
      },
    }
  },
  computed: {
    currentYear(): number {
      return new Date().getFullYear()
    },
    isScrolled(): boolean {
      return this.currentScroll > this.scrollThreshold
    },
    appBarColor(): string {
      return this.isScrolled ? 'white' : 'primary'
    },
  },
  methods: {
    onScroll(): void {
      this.currentScroll = window.pageYOffset
    },
  },
})
</script>

<style>
a {
  text-decoration: none;
}
</style>
