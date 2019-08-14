<template>
  <div class="text-center text-md-left">
    <!-- Hero -->
    <header id="hero">
      <v-sheet dark tile>
        <v-container class="pa-12">
          <v-row>
            <v-col cols="12" sm="4">
              <h1 class="display-1">{{ hero.title }}</h1>
              <div class="my-6">
                {{ hero.tagline }}
              </div>
              <ContactBtn large rounded>hablemos</ContactBtn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </header>

    <!-- Services -->
    <section id="services">
      <v-sheet tile>
        <v-container class="pa-12">
          <v-row>Services</v-row>
        </v-container>
      </v-sheet>
    </section>

    <!-- Projects -->
    <section id="projects">
      <v-sheet dark tile>
        <v-container class="pa-12">
          <v-row>Projects</v-row>
        </v-container>
      </v-sheet>
    </section>

    <!-- Tech -->
    <section id="tech">
      <v-sheet tile>
        <v-container class="pa-12">
          <v-row>Tech</v-row>
        </v-container>
      </v-sheet>
    </section>

    <!-- Contact -->
    <section id="contact">
      <v-sheet dark tile>
        <v-container class="pa-12">
          <v-row>
            <v-col cols="12" sm="6">
              <!-- title -->
              <h2 class="pb-4 display-1 font-weight-thin">
                {{ contact.title }}
              </h2>
              <v-list>
                <!-- phone -->
                <v-list-item :href="`tel:${contact.phone}`">
                  <v-list-item-action>
                    <img
                      class="pl-1"
                      src="/whatsapp-logo.svg"
                      height="24"
                      alt="Teléfono"
                    />
                  </v-list-item-action>
                  <v-list-item-title class="text-left">
                    {{ contact.phone }}
                  </v-list-item-title>
                </v-list-item>
                <!-- email -->
                <v-list-item :href="`mailto:${contact.email}`">
                  <v-list-item-action>
                    <v-icon>email</v-icon>
                  </v-list-item-action>
                  <v-list-item-title class="text-left">
                    {{ contact.email }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <!-- form -->
            <v-col cols="12" sm="6">
              <ContactForm :email="contact.email"></ContactForm>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </section>
  </div>
</template>

<script>
import ContactBtn from '~/components/ContactBtn'
import ContactForm from '~/components/ContactForm'

export default {
  components: { ContactBtn, ContactForm },
  data() {
    return {
      hero: {
        title: `Desarrollemos juntos tus proyectos`,
        tagline: `Cuenta con nosotros como partner tecnológico, creamos experiencias digitales enfocadas en solucionar los problemas de tus clientes.`,
      },
      contact: {
        title: `Contáctenos`,
        phone: `+56 9 88901709`,
        email: `contacto@raptorsystems.cl`,
      },
    }
  },
}
</script>
