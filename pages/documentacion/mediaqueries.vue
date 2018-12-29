<template>
  <main itemscope itemprop="mainContentOfPage" role="main" v-html="mediaqueriesMD"></main>
</template>

<script>
import mediaqueriesMD from '@/markdown/mediaqueries.md';
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-scss';
import { MUTATION_HIDE_BANNER, MUTATION_REINICIAR_BANNER_OPTIONS } from '@/store/mutations/types';

export default {
  name: 'DocumentacionMediaQueriesPage',
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
      title: 'EDgrid | Mediaqueries (Sass)',
      description:
        'Con ed-grid escribir media queries es tan sencillo como usar cualquiera de estos tres mixins from($bp) to($bp) fromTo($from,$to) Los tres mixins reciben como parámetros breakpoints válidos que pueden ser del core de ed-grid s,m,l,xl o números especificados en px, em o rem. from($bp) remplaza al antiguo desde($size) significa que los estilos se aplicarán desde ese breakpoint en adelante.',
      ogUrl: '/documentacion/mediaqueries'
    };
  },
  computed: {
    mediaqueriesMD() {
      return mediaqueriesMD;
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
