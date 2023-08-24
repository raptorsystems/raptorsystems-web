<template>
  <v-row class="py-4 my-0">
    <v-col cols="12" lg="8" class="pr-lg-6">
      <h3 v-if="$vuetify.display.mdAndDown" class="text-h6">
        <slot name="title">{{ title }}</slot>
      </h3>
      <v-card max-width="800" class="mx-auto" rounded hover v-bind="linkProps">
        <slot name="img">
          <v-img :src="img(imgSrc, { format: 'webp', quality: 70 })" />
        </slot>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <slot>
        <h3 v-if="$vuetify.display.lgAndUp" class="text-h6">
          <slot name="title">{{ title }}</slot>
        </h3>
        <p class="text-body-2 font-weight-light">
          <slot name="description">{{ description }}</slot>
        </p>
        <slot name="action">
          <v-btn
            rounded
            theme="dark"
            color="white"
            class="text-primary"
            v-bind="linkProps"
          >
            {{ actionText }}
          </v-btn>
        </slot>
      </slot>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: null },
  description: { type: String, default: null },
  link: { type: String, default: null },
  actionText: { type: String, default: 'ver más' },
  imgSrc: { type: String, required: true },
})

const img = useImage()

const linkProps = computed(() =>
  props.link
    ? {
        href: props.link,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : undefined,
)
</script>
