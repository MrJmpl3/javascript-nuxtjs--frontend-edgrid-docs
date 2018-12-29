<template>
  <main itemscope itemprop="mainContentOfPage" role="main" v-html="menusMD"></main>
</template>

<script>
import menusMD from '@/markdown/docs/menu.md';
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-scss';
import { MUTATION_HIDE_BANNER, MUTATION_REINICIAR_BANNER_OPTIONS } from '@/store/mutations/types';

export default {
  name: 'DocumentacionMenusPage',
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
      title: 'EDgrid | Uso con CSS (cssCore)',
      description:
        'Con ed-grid puede crear menus responsive fácilmente. Basta con crear una lista ul y los enlaces dentro de cada li. Uso con CSS (cssCore) Añada la clase ed-menu al ul de nivel superior. Añada la clase n-horizontal siendo n el breakpoint (s,m,l,xl) desde el cual el menú será horizontal. Añada alguna de las tres clases para cambiar el estilo: default nav-bar button-bar',
      ogUrl: '/documentacion/menus'
    };
  },
  computed: {
    menusMD() {
      return menusMD;
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
