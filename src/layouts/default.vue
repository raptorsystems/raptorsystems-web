<template>
  <v-app>
    <v-app-bar
      v-scroll="onScroll"
      app
      elevate-on-scroll
      height="64"
      :scroll-threshold="scrollThreshold"
      :color="appBarColor"
    >
      <RaptorLogo :dark="!isScrolled" :height="42" />
      <v-spacer />
      <AppBarBtn
        v-if="$route.name === 'index'"
        text="contáctanos"
        icon="$mdiPhone"
        color="primary"
        @click="$vuetify.goTo('#contact')"
      />
      <AppBarBtn
        v-else
        text="home"
        icon="$mdiHome"
        color="transparent"
        :dark="!isScrolled"
        nuxt
        to="/"
      />
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer id="footer" height="440" color="transparent">
      <v-row
        class="py-16 flex-column fill-height"
        align="center"
        justify="space-around"
      >
        <RaptorLogo :height="80" />
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
import { defineComponent } from 'vue'

// components
import AppBarBtn from '~/components/AppBarBtn.vue'
import RaptorLogo from '~/components/RaptorLogo.vue'

export default defineComponent({
  components: {
    AppBarBtn,
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
