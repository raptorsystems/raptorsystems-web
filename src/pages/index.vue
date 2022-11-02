<template>
  <div class="text-center text-md-left">
    <!-- Hero -->
    <v-sheet id="hero" tag="header" color="primary" dark tile>
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
              <h1 class="text-h4 mb-6" v-text="hero.title" />
              <div
                class="mb-6"
                :class="{
                  'primary--text text--lighten-5': $vuetify.breakpoint.lgAndUp,
                }"
                v-text="hero.tagline"
              />
              <v-btn
                x-large
                rounded
                dark
                color="white"
                class="primary--text"
                @click="$vuetify.goTo('#contact')"
              >
                hablemos
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
      <!-- divider -->
      <SectionDivider height="128" />
    </v-sheet>

    <!-- Services -->
    <v-sheet id="services" tag="section" tile>
      <v-container style="padding-top: 92px; padding-bottom: 128px">
        <v-row>
          <v-col cols="12">
            <h2 class="text-h4 font-weight-light mb-6">Servicios</h2>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col v-for="(item, idx) in services" :key="idx" cols="12" sm="4">
            <v-card class="py-8 text-center fill-height" rounded="lg" hover>
              <v-img :src="item.icon" height="92" contain />
              <div class="pt-6 text-h6" v-text="item.title" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Projects -->
    <v-sheet id="projects" tag="section" tile dark class="projects-bg">
      <!-- divider -->
      <SectionDivider top height="64" />
      <!-- content -->
      <v-container style="padding-top: 128px; padding-bottom: 192px">
        <v-row>
          <v-col cols="12">
            <h2 class="text-h4 font-weight-light mb-6">Nuestros proyectos</h2>
          </v-col>
        </v-row>
        <ProjectRowCarreraAps />
        <ProjectRowKryptoLedgers />
      </v-container>
      <!-- divider -->
      <SectionDivider height="128" />
    </v-sheet>

    <!-- Tech -->
    <v-sheet id="tech" tag="section" tile>
      <v-container style="padding-top: 128px; padding-bottom: 160px">
        <v-row class="mb-6">
          <v-col cols="12">
            <h2 class="text-h4 font-weight-light mb-6">
              Tecnologías que utilizamos
            </h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <a
            v-for="([icon, url], idx) in techs"
            :key="idx"
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              :src="`icons/tech/${icon}.svg`"
              class="ma-4 shrink"
              width="64"
              height="64"
              aspect-ratio="1"
              contain
            />
          </a>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Contact -->
    <v-sheet id="contact" tag="section" dark tile>
      <v-row class="fill-height" justify="center" no-gutters>
        <!-- form -->
        <v-col cols="12" lg="7" xl="8" order="2" order-lg="1">
          <v-img
            aspect-ratio="1.7778"
            max-height="600"
            sizes="(max-width: 1600px) 100vw, 1600px"
            v-bind="contact.image"
            class="pa-md-16"
          >
            <LazyContactForm
              :email="contact.email"
              rounded="xl"
              outlined
              :tile="$vuetify.breakpoint.smAndDown"
              :max-width="$vuetify.breakpoint.mdAndUp ? 400 : undefined"
            />
          </v-img>
        </v-col>
        <!-- info -->
        <v-col class="primary py-16 px-3 pa-md-16" order="1" order-lg="2">
          <!-- title -->
          <h2 class="pb-2 text-h4 font-weight-light">Conversemos</h2>
          <p class="font-weight-light">Cuéntanos de tu proyecto o negocio 😉</p>
          <v-list
            class="transparent pa-0 my-12 mx-auto ml-md-0"
            max-width="352"
            rounded
          >
            <!-- phones -->
            <v-list-item
              v-for="(phone, idx) in contact.phones"
              :key="idx"
              :href="`tel:${phone}`"
            >
              <v-list-item-action>
                <v-icon>$mdiPhone</v-icon>
              </v-list-item-action>
              <v-list-item-title>{{ phone }}</v-list-item-title>
            </v-list-item>
            <!-- WhatsApp -->
            <v-list-item :href="contact.waLink">
              <v-list-item-action>
                <v-icon>$mdiWhatsapp</v-icon>
              </v-list-item-action>
              <v-list-item-title>WhatsApp</v-list-item-title>
            </v-list-item>
            <!-- email -->
            <v-list-item :href="`mailto:${contact.email}`">
              <v-list-item-action>
                <v-icon>$mdiEmail</v-icon>
              </v-list-item-action>
              <v-list-item-title class="text-body-2">
                {{ contact.email }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// images
import contactImage from '~/assets/images/contact.jpg?resize&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=600&sizes[]=800&sizes[]=1000&sizes[]=1200&sizes[]=1400&sizes[]=1600'
import heroImage from '~/assets/images/hero.jpg?resize&sizes[]=960&sizes[]=1280&sizes[]=1600&sizes[]=1920'

//  components
import ProjectRowCarreraAps from '~/components/project/RowCarreraAps.vue'
import ProjectRowKryptoLedgers from '~/components/project/RowKryptoLedgers.vue'
import SectionDivider from '~/components/SectionDivider.vue'

export default defineComponent({
  components: {
    SectionDivider,
    ProjectRowCarreraAps,
    ProjectRowKryptoLedgers,
  },
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
        ['python', 'https://www.python.org/'],
        ['django', 'https://www.djangoproject.com/'],
        ['typescript-icon', 'https://www.typescriptlang.org/'],
        ['nodejs-icon', 'https://nodejs.org/'],
        [
          'html-5',
          'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
        ],
        ['css-3', 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
        ['vue', 'https://vuejs.org/'],
        ['vuetifyjs', 'https://vuetifyjs.com/'],
        ['nuxt', 'https://nuxtjs.org/'],
        ['tailwindcss-icon', 'https://tailwindcss.com/'],
        ['aws', 'https://aws.amazon.com/'],
        ['prisma', 'https://www.prisma.io/'],
        ['graphql', 'https://graphql.org/'],
        ['postgresql', 'https://www.postgresql.org/'],
        ['redis', 'https://redis.io/'],
        ['git-icon', 'https://git-scm.com/'],
      ],
      contact: {
        email: `contacto@raptorsystems.cl`,
        phones: ['+56 9 88901709', '+56 9 84306761'],
        waLink: `https://wa.link/cry2il`, // ? https://create.wa.link/
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
