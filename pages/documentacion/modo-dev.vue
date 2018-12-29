<template>
  <main itemscope itemprop="mainContentOfPage" role="main" v-html="modoDevMD"></main>
</template>

<script>
import modoDevMD from '@/markdown/modo-dev.md';
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-scss';
import { MUTATION_HIDE_BANNER, MUTATION_REINICIAR_BANNER_OPTIONS } from '@/store/mutations/types';

export default {
  name: 'DocumentacionModoDevPage',
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
      title: 'EDgrid | Modo dev',
      description:
        'El modo dev (modo desarrollo en versiones anteriores) es una característica exclusiva de ed-grid (no existente en otros frameworks) que nos permite saber el breakpoint actual y los componentes del layout (ed-container y ed-item). Al activarlo el navegador muestra el layout de la siguiente manera: En la parte superior en una franja azul se muestra el breakpoint actual y la leyenda de colores para el ed-container y los ed-item. El layout de la página es coloreado de la siguiente manera:',
      ogUrl: '/documentacion/modo-dev'
    };
  },
  computed: {
    modoDevMD() {
      return modoDevMD;
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
