<template>
  <main itemscope itemprop="mainContentOfPage" role="main" v-html="breakpointMD"></main>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-scss';
import { MUTATION_HIDE_BANNER, MUTATION_REINICIAR_BANNER_OPTIONS } from '@/store/mutations/types';
import breakpointMD from '@/markdown/breakpoints.md';

export default {
  name: 'DocumentacionBreakPointsPage',
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
      title: 'EDgrid | CSS',
      description:
        'La principal diferencia de ed-grid 2 con su versión anterior es que podemos decidir qué componentes compilar a CSS. En la versión 1, todo el CSS era compilado generando código innecesario. Si usted desea puede trabajar solo con la versión CSS de ed-grid 2, y añadir clases al código HTML para construir su layout según el flujo de trabajo recomendado. El CSS de ed-grid 2 se clasifica en 2 grupos:',
      ogUrl: '/documentacion/breakpoints'
    };
  },
  computed: {
    breakpointMD() {
      return breakpointMD;
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
