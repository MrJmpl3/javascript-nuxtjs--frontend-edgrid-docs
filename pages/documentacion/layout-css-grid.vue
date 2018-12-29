<template>
  <main itemscope itemprop="mainContentOfPage" role="main" v-html="layoutCSSGridMD"></main>
</template>

<script>
import layoutCSSGridMD from '@/markdown/layout-css-grid.md';
import Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-scss';
import { MUTATION_HIDE_BANNER, MUTATION_REINICIAR_BANNER_OPTIONS } from '@/store/mutations/types';

export default {
  name: 'DocumentacionLayoutCSSGridPage',
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
      title: 'EDgrid | Flujo de trabajo (CSS/Sass)',
      description:
        'Sass o CSS Puede usar ed-grid con CSS (añadiendo el archivo css e insertando clases en html) o con Sass (mixins preconstruidos). Se recomienda Sass para aprovechar todo el potencial de ed-grid. A lo largo de esta documentación se indicará si nos referimos al trabajo con Sass o CSS.',
      ogUrl: '/documentacion/layout-css-grid'
    };
  },
  computed: {
    layoutCSSGridMD() {
      return layoutCSSGridMD;
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
