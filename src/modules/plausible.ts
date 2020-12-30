import { Module } from '@nuxt/types'

interface PlausibleOptions {
  enabled?: boolean
  domain?: string
}

const plausible: Module<PlausibleOptions> = function (moduleOptions) {
  // merge options
  const options: PlausibleOptions = {
    ...moduleOptions,
    ...this.options.plausible,
  }

  // By default enable only for non development
  if (options.enabled === undefined) {
    options.enabled = !this.options.dev
  }

  // add plausible script
  if (
    // only if enabled
    options.enabled &&
    // only if we got the domain
    options.domain &&
    // only if head is not a function
    typeof this.options.head !== 'function'
  ) {
    this.options.head.script = this.options.head.script || []
    this.options.head.script.push({
      src: 'https://plausible.io/js/plausible.js',
      async: true,
      defer: true,
      'data-domain': options.domain,
    })
  }
}

export default plausible

declare module '@nuxt/types' {
  interface Configuration {
    plausible?: PlausibleOptions
  }
}
