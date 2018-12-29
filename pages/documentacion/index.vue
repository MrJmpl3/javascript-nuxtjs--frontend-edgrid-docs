<template>
  <main itemscope itemprop="mainContentOfPage" role="main">
    <h1>Comenzar con EDgrid</h1>
    <p>EDgrid es una libreria CSS/Sass para construir layouts para web fácilmente.</p>
    <p>
      EDgrid es un proyecto de <a href="https://ed.team">EDteam</a> usado en todos los proyectos de la empresa. Es Open Source (GPL2) y puede usarla y
      modificarla libremente en todos sus proyectos.
    </p>
    <p>
      Si encuentra algun error o tiene sugerencias de mejoras,
      <a href="https://github.com/escueladigital/EDgrid/issues">puede escribirlas en Github</a>.
    </p>
  </main>
</template>

<script>
import { MUTATION_ASIGNAR_BANNER_OPTIONS, MUTATION_SHOW_BANNER } from '@/store/mutations/types';

export default {
  name: 'DocumentacionIndexPage',
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
      title: 'EDgrid | Documentación',
      description: 'Puede usar EDgrid con CSS y Sass.',
      ogUrl: '/documentacion'
    };
  },
  mounted() {
    this.$store.commit(MUTATION_ASIGNAR_BANNER_OPTIONS, {
      bannerOptions: {
        img: '/img/docs-banner.jpg',
        title: 'Documentación',
        description: 'EDgrid es muy fácil de aprender. En una hora ya lo estará usando en sus proyectos',
        clase: 'dark-color',
        boton: false,
        botonClass: '',
        botonText: '',
        botonUrl: '',
        botones: false
      }
    });
    this.$store.commit(MUTATION_SHOW_BANNER);
  }
};
</script>

<style lang="scss" scoped></style>
