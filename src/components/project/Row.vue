<template>
  <v-row class="py-4 my-0">
    <v-col cols="12" lg="8" class="pr-lg-6">
      <h3 v-if="$vuetify.breakpoint.mdAndDown" class="text-h6">
        <slot name="title">{{ title }}</slot>
      </h3>
      <v-card max-width="800" class="mx-auto" rounded hover v-bind="linkProps">
        <slot name="img">
          <v-img
            sizes="(max-width: 824px) calc(100vw - 24px), (max-width: 944px) 800px, (max-width: 1904px) 754px, 564px"
            v-bind="imgProps"
          />
        </slot>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <slot>
        <h3 v-if="$vuetify.breakpoint.lgAndUp" class="text-h6">
          <slot name="title">{{ title }}</slot>
        </h3>
        <p class="text-body-2 font-weight-light">
          <slot name="description">{{ description }}</slot>
        </p>
        <slot name="action">
          <v-btn
            rounded
            dark
            color="white"
            class="primary--text"
            v-bind="linkProps"
          >
            {{ actionText }}
          </v-btn>
        </slot>
      </slot>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: { type: String, default: null },
    description: { type: String, default: null },
    link: { type: String, default: null },
    actionText: { type: String, default: 'ver más' },
    imgProps: { type: Object, default: () => ({}) },
  },
  computed: {
    linkProps(): { href: string; target: string; rel: string } | undefined {
      return this.link
        ? {
            href: this.link,
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : undefined
    },
  },
})
</script>
