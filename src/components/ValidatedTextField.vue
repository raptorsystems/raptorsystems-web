<template>
  <ValidationProvider
    v-slot="{ errors, passed }"
    :name="validationName"
    :vid="$attrs.vid"
    :rules="rules"
    slim
  >
    <v-text-field
      v-model="innerValue"
      :error-messages="errors"
      :success="passed"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </ValidationProvider>
</template>

<script lang="ts">
import { ValidationProvider } from 'vee-validate'
import type { PropOptions } from 'vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'ValidatedTextField',
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    rules: { type: [Object, String], default: '' },
    // must be included in props
    value: { type: null as unknown, default: '' } as PropOptions<unknown>,
  },
  data() {
    return {
      innerValue: this.value,
    }
  },
  computed: {
    validationName(): string {
      const { label } = this.$attrs
      return label?.toLowerCase()
    },
  },
  watch: {
    // Handles external model changes
    value(newVal: unknown): void {
      this.innerValue = newVal
    },
  },
})
</script>
