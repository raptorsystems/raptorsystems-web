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
    ></v-text-field>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

// components
import { ValidationProvider } from 'vee-validate'

export default Vue.extend({
  name: 'ValidatedTextField',
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    rules: { type: [Object, String], default: '' },
    // must be included in props
    value: { type: null as any, default: '' } as PropOptions<any>,
  },
  data() {
    return {
      innerValue: this.value,
    }
  },
  computed: {
    validationName() {
      const { label } = this.$attrs
      return label && label.toLowerCase()
    },
  },
  watch: {
    // Handles external model changes
    value(newVal) {
      this.innerValue = newVal
    },
  },
})
</script>
