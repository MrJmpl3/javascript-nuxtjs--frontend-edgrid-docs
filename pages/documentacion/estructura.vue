<template>
  <main itemscope itemprop="mainContentOfPage" role="main" v-html="estructuraMD"></main>
</template>

<script>
import estructuraMD from '@/markdown/estructura.md';
import { MUTATION_HIDE_BANNER, MUTATION_REINICIAR_BANNER_OPTIONS } from '@/store/mutations/types';

export default {
  name: 'DocumentacionEstructuraPage',
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.ogUrl
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.description
        }
      ]
    };
  },
  data() {
    return {
      title: 'EDgrid | Estructura',
      description:
        'La siguiente es la estructura de archivos de ed-grid. Solo se explican los archivos y directorios propios del proyecto y no las herramientas comunes de desarrollo (package.json, .gitignore, etc)',
      ogUrl: '/documentacion/estructura'
    };
  },
  computed: {
    estructuraMD() {
      return estructuraMD;
    }
  },
  mounted() {
    this.$store.commit(MUTATION_REINICIAR_BANNER_OPTIONS);
    this.$store.commit(MUTATION_HIDE_BANNER);
  }
};
</script>

<style lang="scss" scoped></style>
