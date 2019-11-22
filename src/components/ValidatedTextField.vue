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

<script>
// components
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'ValidatedTextField',
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    rules: { type: [Object, String], default: '' },
    // must be included in props
    value: { type: null, default: undefined },
  },
  data() {
    return {
      innerValue: undefined,
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
      this.innerValue = this.formatValue(newVal)
    },
  },
  created() {
    this.innerValue = this.formatValue(this.value)
  },
  methods: {
    formatValue(value) {
      return value
    },
  },
}
</script>
