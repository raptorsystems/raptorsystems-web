<template>
  <div class="text-center text-md-left">
    <!-- Hero -->
    <header id="hero">
      <v-sheet color="primary" dark tile>
        <v-img
          max-height="1200"
          sizes="(max-width: 1920px) 100vw, 1920px"
          srcset="
            /images/hero,w_240.jpg 240w,
            /images/hero,w_564.jpg 564w,
            /images/hero,w_812.jpg 812w,
            /images/hero,w_991.jpg 991w,
            /images/hero,w_1158.jpg 1158w,
            /images/hero,w_1324.jpg 1324w,
            /images/hero,w_1463.jpg 1463w,
            /images/hero,w_1920.jpg 1920w"
          src="/images/hero,w_1920.jpg"
        >
          <v-container style="padding-top: 96px; padding-bottom: 128px;">
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
        <v-container style="padding-top: 92px; padding-bottom: 128px;">
          <v-row>
            <v-col cols="12">
              <h2 class="text-h4 font-weight-thin">
                Servicios
              </h2>
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
        <v-container style="padding-top: 128px; padding-bottom: 192px;">
          <v-row class="mb-4">
            <v-col cols="12">
              <h2 class="text-h4 font-weight-thin">
                Nuestros proyectos
              </h2>
            </v-col>
          </v-row>
          <v-row v-for="project in projects" :key="project.name">
            <v-col :key="project.name" cols="12" lg="8">
              <v-hover>
                <template v-slot="{ hover }">
                  <v-card
                    max-width="800"
                    :dark="hover"
                    :elevation="hover ? 16 : 6"
                  >
                    <v-img v-bind="project.img" />
                  </v-card>
                </template>
              </v-hover>
            </v-col>
            <v-col cols="12" lg="4">
              <p class="text-h6">{{ project.name }}</p>
              <p v-html="project.description"></p>
              <v-btn
                rounded
                dark
                color="white"
                class="primary--text"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                ver más
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      <!-- divider -->
      <SectionDivider height="128"></SectionDivider>
    </section>

    <!-- Tech -->
    <section id="tech">
      <v-sheet tile>
        <v-container style="padding-top: 128px; padding-bottom: 160px;">
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
          max-height="1000"
          sizes="(max-width: 1600px) 100vw, 1600px"
          srcset="
            /images/contact,w_240.jpg 240w,
            /images/contact,w_479.jpg 479w,
            /images/contact,w_654.jpg 654w,
            /images/contact,w_788.jpg 788w,
            /images/contact,w_898.jpg 898w,
            /images/contact,w_1016.jpg 1016w,
            /images/contact,w_1116.jpg 1116w,
            /images/contact,w_1211.jpg 1211w,
            /images/contact,w_1354.jpg 1354w,
            /images/contact,w_1600.jpg 1600w,"
          src="/images/contact,w_1600.jpg"
        >
          <v-container
            class="fill-height"
            style="padding-top: 64px; padding-bottom: 64px;"
          >
            <v-row>
              <!-- form -->
              <v-col cols="12" lg="6" class="px-4" order="2" order-lg="1">
                <ContactForm :email="contact.email" />
              </v-col>
              <!-- info -->
              <v-col cols="12" lg="6" order="1" order-lg="2">
                <!-- title -->
                <h2 class="pb-4 text-h4 font-weight-thin">
                  Contáctanos
                </h2>
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

// components
import ContactBtn from '~/components/ContactBtn.vue'
import ContactForm from '~/components/ContactForm.vue'
import SectionDivider from '~/components/SectionDivider.vue'

export default Vue.extend({
  components: {
    ContactBtn,
    ContactForm,
    SectionDivider,
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
      projects: [
        {
          name: 'Carrera APS',
          img: {
            src: `/images/projects/carrera-aps,w_2846.jpg 2846w`,
            sizes: `(max-width: 2846px) 100vw, 2846px`,
            srcset: `
              /images/projects/carrera-aps,w_240.jpg 240w,
              /images/projects/carrera-aps,w_610.jpg 610w,
              /images/projects/carrera-aps,w_869.jpg 869w,
              /images/projects/carrera-aps,w_1133.jpg 1133w,
              /images/projects/carrera-aps,w_1361.jpg 1361w,
              /images/projects/carrera-aps,w_1593.jpg 1593w,
              /images/projects/carrera-aps,w_1793.jpg 1793w,
              /images/projects/carrera-aps,w_1952.jpg 1952w,
              /images/projects/carrera-aps,w_2184.jpg 2184w,
              /images/projects/carrera-aps,w_2366.jpg 2366w,
              /images/projects/carrera-aps,w_2560.jpg 2560w,
              /images/projects/carrera-aps,w_2846.jpg 2846w`,
          },
          description: `Es una solución que permite a los departamentos de salud municipales administrar de una manera amigable y eficiente la Carrera Funcionaria de la Ley&nbsp;19.378.`,
          link: '//carrerafuncionaria.cl',
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
      },
    }
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
