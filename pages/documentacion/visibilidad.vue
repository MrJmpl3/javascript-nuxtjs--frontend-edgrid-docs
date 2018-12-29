<template>
  <main itemscope itemprop="mainContentOfPage" role="main" v-html="visibilidadMD"></main>
</template>

<script>
import visibilidadMD from '@/markdown/visibilidad.md';
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-scss';
import { MUTATION_HIDE_BANNER, MUTATION_REINICIAR_BANNER_OPTIONS } from '@/store/mutations/types';

export default {
  name: 'DocumentacionVisibilidadPage',
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
      title: 'EDgrid | Visibilidad',
      description:
        'El componente visibilidad permite definir los breakpoints en los que un elemento se mostrará y los breakpoints en los que se ocultará. Uso con CSS (cssHelpers) Use las clases from-bp o to-bp donde bp es un breakpoint válido de ed-grid (s,m,l,xl) from-bp hará al elemento visible a partir del breakpoint especificado e invisible por debajo de él. to-bp hará al elemento visible por debajo del breakpoint especificado e invisible por encima de él.',
      ogUrl: '/documentacion/visibilidad'
    };
  },
  computed: {
    visibilidadMD() {
      return visibilidadMD;
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
