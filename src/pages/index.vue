<template>
  <div class="text-center text-md-left">
    <!-- Hero -->
    <header id="hero">
      <v-sheet color="primary" dark tile>
        <v-img
          eager
          contain
          aspect-ratio="1.6"
          max-height="800"
          sizes="(max-width: 1280px) 100vw, 1280px"
          v-bind="heroImage"
        >
          <v-container style="padding-top: 96px; padding-bottom: 128px">
            <v-row align-content="center" justify="end" class="text-md-right">
              <v-col cols="12" lg="6">
                <h1 class="text-h4">
                  {{ hero.title }}
                </h1>
                <div
                  class="my-6"
                  :class="{
                    'primary--text text--lighten-5':
                      $vuetify.breakpoint.lgAndUp,
                  }"
                >
                  {{ hero.tagline }}
                </div>
                <ContactBtn
                  x-large
                  rounded
                  dark
                  color="white"
                  class="primary--text"
                >
                  hablemos
                </ContactBtn>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-sheet>
      <!-- divider -->
      <SectionDivider height="128"></SectionDivider>
    </header>

    <!-- Services -->
    <section id="services">
      <v-sheet tile>
        <v-container style="padding-top: 92px; padding-bottom: 128px">
          <v-row>
            <v-col cols="12">
              <h2 class="text-h4 font-weight-thin">Servicios</h2>
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col v-for="(item, idx) in services" :key="idx" cols="12" sm="4">
              <v-hover>
                <template v-slot="{ hover }">
                  <v-card
                    class="py-8 text-center fill-height"
                    :elevation="hover ? 12 : 0"
                  >
                    <v-img :src="item.icon" height="92" contain />
                    <div class="pt-6 text-h6">{{ item.title }}</div>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </section>

    <!-- Projects -->
    <section id="projects">
      <!-- divider -->
      <SectionDivider top height="64"></SectionDivider>
      <!-- content -->
      <v-sheet tile dark class="projects-bg">
        <v-container style="padding-top: 128px; padding-bottom: 192px">
          <v-row>
            <v-col cols="12">
              <h2 class="text-h4 font-weight-thin">Nuestros proyectos</h2>
            </v-col>
          </v-row>
          <ProjectRowCarreraAps />
          <ProjectRowKryptoLedgers />
        </v-container>
      </v-sheet>
      <!-- divider -->
      <SectionDivider height="128"></SectionDivider>
    </section>

    <!-- Tech -->
    <section id="tech">
      <v-sheet tile>
        <v-container style="padding-top: 128px; padding-bottom: 160px">
          <v-row class="mb-6">
            <v-col cols="12">
              <h2 class="text-h4 font-weight-thin">
                Tecnologías que utilizamos
              </h2>
            </v-col>
          </v-row>
          <v-row justify="space-around">
            <v-img
              v-for="tech in techs"
              :key="tech"
              :src="`icons/tech/${tech}.svg`"
              class="mx-2 my-4"
              width="80"
              height="60"
              contain
            />
          </v-row>
        </v-container>
      </v-sheet>
    </section>

    <!-- Contact -->
    <section id="contact">
      <v-sheet color="primary" dark tile>
        <v-img
          aspect-ratio="1.7778"
          max-height="900"
          sizes="(max-width: 1600px) 100vw, 1600px"
          v-bind="contact.image"
        >
          <v-container
            class="fill-height"
            style="padding-top: 64px; padding-bottom: 64px"
          >
            <v-row>
              <!-- form -->
              <v-col cols="12" lg="6" class="px-4" order="2" order-lg="1">
                <ContactForm :email="contact.email" />
              </v-col>
              <!-- info -->
              <v-col cols="12" lg="6" order="1" order-lg="2">
                <!-- title -->
                <h2 class="pb-4 text-h4 font-weight-thin">Contáctanos</h2>
                <v-list class="transparent">
                  <!-- phones -->
                  <v-list-item
                    v-for="(phone, idx) in contact.phones"
                    :key="idx"
                    class="px-2"
                    :href="`tel:${phone}`"
                  >
                    <v-list-item-action>
                      <v-icon>$mdiWhatsapp</v-icon>
                    </v-list-item-action>
                    <v-list-item-title class="text-left">
                      {{ phone }}
                    </v-list-item-title>
                  </v-list-item>
                  <!-- email -->
                  <v-list-item class="px-2" :href="`mailto:${contact.email}`">
                    <v-list-item-action>
                      <v-icon>$mdiEmail</v-icon>
                    </v-list-item-action>
                    <v-list-item-title class="text-left">
                      {{ contact.email }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-sheet>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// images
import contactImage from '~/assets/images/contact.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=1000&sizes[]=1200&sizes[]=1400&sizes[]=1600'
import heroImage from '~/assets/images/hero.jpg?resize&sizes[]=960&sizes[]=1280&sizes[]=1600&sizes[]=1920'

export default Vue.extend({
  data() {
    return {
      hero: {
        title: `Desarrollemos juntos tus proyectos`,
        tagline: `Cuenta con nosotros como partner tecnológico, creamos experiencias digitales enfocadas en solucionar los problemas de tus clientes.`,
      },
      services: [
        {
          title: 'Desarrollo a medida',
          icon: '/icons/icons8-code-file.svg',
        },
        {
          title: 'Aplicaciones móviles',
          icon: '/icons/icons8-cell-phone.svg',
        },
        {
          title: 'Páginas web',
          icon: '/icons/icons8-application-window.svg',
        },
      ],
      techs: [
        'python',
        'django',
        'typescript-icon',
        'nodejs-icon',
        'html-5',
        'css-3',
        'vue',
        'vuetifyjs',
        'nuxt',
        'aws',
        'prisma',
        'graphql',
        'postgresql',
        'redis',
        'git-icon',
      ],
      contact: {
        email: `contacto@raptorsystems.cl`,
        phones: ['+56 9 88901709', '+56 9 84306761'],
        image: {
          srcset: contactImage.srcSet,
          src: contactImage.src,
        },
      },
    }
  },
  computed: {
    heroImage() {
      return this.$vuetify.breakpoint.mdAndUp
        ? {
            srcset: heroImage.srcSet,
            src: heroImage.src,
          }
        : {
            gradient: '180deg, #235de5 15%, #05d5ff 70%, #a6ffcb 94%',
          }
    },
  },
})
</script>

<style>
header,
section {
  position: relative;
}
.v-list-item__action {
  margin-right: 16px !important;
}
.projects-bg {
  background-image: linear-gradient(
    150deg,
    #235de5 15%,
    #05d5ff 70%,
    #a6ffcb 94%
  );
}
</style>
