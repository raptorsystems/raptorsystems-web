<template>
  <v-app>
    <v-app-bar
      v-scroll="onScroll"
      height="64"
      :elevation="appBarElevation"
      :color="appBarColor"
    >
      <RaptorLogo :dark="!isScrolled" :height="42" />
      <v-spacer />
      <AppBarBtn
        v-if="$route.name === 'index'"
        text="contáctanos"
        icon="$mdiPhone"
        color="primary"
        href="#contact"
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
      <slot />
    </v-main>

    <v-footer id="footer" style="height: 440px" color="transparent">
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

    <ContactForm :show="isScrolled" />
  </v-app>
</template>

<script setup lang="ts">
const currentScroll = ref(0)

const scrollThreshold = 20

const currentYear = computed(() => new Date().getFullYear())

const isScrolled = computed(() => currentScroll.value > scrollThreshold)

const appBarColor = computed(() => (isScrolled.value ? 'white' : 'primary'))

const appBarElevation = computed(() => (isScrolled.value ? undefined : 0))

const onScroll = () => {
  currentScroll.value = window.pageYOffset
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
