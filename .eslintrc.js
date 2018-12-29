module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['airbnb-base', '@nuxtjs', 'prettier', 'prettier/standard', 'prettier/vue'],
  plugins: ['prettier'],
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: ['nuxt', 'nuxt-link', 'no-ssr']
      }
    ],
    'vue/no-v-html': 0,
    'prettier/prettier': ['error', { semi: true, singleQuote: true, printWidth: 150 }]
  }
};
