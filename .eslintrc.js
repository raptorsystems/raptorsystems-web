module.exports = {
  root: true,

  parser: 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    extraFileExtensions: ['.vue'],
  },

  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',
    // ESLint typescript rules
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Nuxt
    // https://typescript.nuxtjs.org/guide/lint.html#lint
    '@nuxtjs/eslint-config-typescript',
    // Prettier
    'plugin:prettier/recommended',
  ],

  plugins: ['vuetify'],

  rules: {
    // @typescript-eslint
    '@typescript-eslint/camelcase': 'off',
    // vue
    'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    'vue/multi-word-component-names': 'off',
    // vuetify
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error',
  },
}
