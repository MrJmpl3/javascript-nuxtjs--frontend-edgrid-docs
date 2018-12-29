<template>
  <main itemscope itemprop="mainContentOfPage" role="main" v-html="funcionesMD"></main>
</template>

<script>
import funcionesMD from '@/markdown/funciones.md';
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-scss';
import { MUTATION_HIDE_BANNER, MUTATION_REINICIAR_BANNER_OPTIONS } from '@/store/mutations/types';

export default {
  name: 'DocumentacionFuncionesPage',
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
      title: 'EDgrid | Funciones (Sass)',
      description:
        'ed-grid incluye dos funciones útiles en el RWD: em($px) y rem($px). Estas funciones convierten un número en px a em o rem respectivamente. Estas funciones lanzarán un error si le pasa un valor diferente a un número en pixeles',
      ogUrl: '/documentacion/funciones'
    };
  },
  computed: {
    funcionesMD() {
      return funcionesMD;
    }
  },
  mounted() {
    this.$store.commit(MUTATION_REINICIAR_BANNER_OPTIONS);
    this.$store.commit(MUTATION_HIDE_BANNER);

    Prism.highlightAll();
  }
};
</script>

<style lang="scss" scoped></style>
