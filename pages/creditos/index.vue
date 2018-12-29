<template>
  <main class="ed-grid lg-grid-6">
    <div class="lg-cols-4 lg-x-2">
      <ul class="data-list">
        <li>
          <p><span class="strong">Álvaro Felipe</span><br /><span class="small">CEO de EDteam</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/escueladigital" itemprop="url" target="_blank"
            >Ver Github</a
          >
        </li>
        <li>
          <p><span class="strong">Carlos Cuatin</span><br /><span class="small">Frontend & Mobile Apps Developer</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/carloscuatin" itemprop="url" target="_blank"
            >Ver Github</a
          >
        </li>
        <li>
          <p><span class="strong">Camilo Rodríguez</span><br /><span class="small">Web developer</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/aeroxmotion" itemprop="url" target="_blank"
            >Ver Github</a
          >
        </li>
        <li>
          <p><span class="strong">Daniel Romero</span><br /><span class="small">EDteam</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/danielromeroauk" itemprop="url" target="_blank"
            >Ver Github</a
          >
        </li>
        <li>
          <p><span class="strong">Franco Correa</span><br /><span class="small">Web (Python – JS) & iOS Developer.</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/francocorreasosa" itemprop="url" target="_blank"
            >Ver Github</a
          >
        </li>
        <li>
          <p><span class="strong">Ernesto Graterol</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/Revod" itemprop="url" target="_blank">Ver Github</a>
        </li>
        <li>
          <p><span class="strong">W-A-P</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/W-A-P" itemprop="url" target="_blank">Ver Github</a>
        </li>
        <li>
          <p><span class="strong">Jose Daniel Posso Garcia</span><br /><span class="small">Programador</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/daniel7byte" itemprop="url" target="_blank"
            >Ver Github</a
          >
        </li>
        <li>
          <p><span class="strong">Alex Andrei</span><br /><span class="small">Frontend developer</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/AlexAndrei04" itemprop="url" target="_blank"
            >Ver Github</a
          >
        </li>
        <li>
          <p><span class="strong">Johelyn Cordova</span><br /><span class="small">Diseñadora web</span></p>
          <a class="button--tertiary small icon-github space space" href="https://github.com/AKUmajinn" itemprop="url" target="_blank">Ver Github</a>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { MUTATION_ASIGNAR_BANNER_OPTIONS, MUTATION_SHOW_BANNER } from '@/store/mutations/types';

export default {
  name: 'CreditosIndexPage',
  components: {},
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
      title: 'EDgrid | Créditos',
      description: 'Créditos de quien realizo la librería, colaboro desarrollando el portal.',
      ogUrl: '/creditos'
    };
  },
  mounted() {
    this.$store.commit(MUTATION_ASIGNAR_BANNER_OPTIONS, {
      bannerOptions: {
        img: '/img/docs-banner.jpg',
        title: 'Créditos',
        description: 'Colaboradores de EDgrid',
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
