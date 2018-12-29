<template>
  <main itemscope itemprop="mainContentOfPage" role="main" v-html="personalizarMD"></main>
</template>

<script>
import personalizarMD from '@/markdown/personalizar.md';
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-scss';
import { MUTATION_HIDE_BANNER, MUTATION_REINICIAR_BANNER_OPTIONS } from '@/store/mutations/types';

export default {
  name: 'DocumentacionPersonalizarPage',
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
      title: 'EDgrid | Configurar (Sass)',
      description:
        "Si va a trabajar con Sass lo primero es importarlo en su proyecto. @import 'path/ed-grid/ed-grid' Sin embargo, ed-grid posee un archivo config.scss que define las variables y que pueden sobreescribirse (antes de la importación). Recomendamos fijarse en estas tres variables",
      ogUrl: '/documentacion/personalizar'
    };
  },
  computed: {
    personalizarMD() {
      return personalizarMD;
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
