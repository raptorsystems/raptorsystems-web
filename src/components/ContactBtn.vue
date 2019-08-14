<template>
  <v-btn v-bind="$attrs" color="primary" @click="$vuetify.goTo('#contact')">
    <slot></slot>
  </v-btn>
</template>
