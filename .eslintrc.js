/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'plugin:vuetify/recommended',
    'prettier',
  ],
}
