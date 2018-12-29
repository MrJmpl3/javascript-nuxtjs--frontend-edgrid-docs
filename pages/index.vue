<template>
  <main>
    <div class="ed-grid">
      <h1 class="t2 s-to-center lg-mb-4">El responsive web design nunca fue tan sencillo</h1>
      <div class="main-features ed-grid cols-l-3 cols-m-2 rows-gap">
        <div class="main-feature">
          <div class="main-feature__img"><img src="/img/EDgrid-logo.svg" /></div>
          <h3>¿Qué es?</h3>
          <p>
            EDgrid es una libreria construida con Sass (y con versión CSS) para Responsive Web Design (RWD). Es muy ligero, personalizable y te
            permite prototipar y crear layouts en muy poco tiempo sin conflictos con tu proyecto.
          </p>
        </div>
        <div class="main-feature">
          <div class="main-feature__img"><img src="/img/rwd.svg" /></div>
          <h3>Solo Layout</h3>
          <p>
            No añade botones, tipografías, colores ni otro estilo visual. Es layout puro para maquetar que no genera conflictos. Además EDgrid en su
            versión Sass compila solo el código necesario sin css extra.
          </p>
        </div>
        <div class="main-feature">
          <div class="main-feature__img"><img src="/img/open-source.svg" /></div>
          <h3>Open Source</h3>
          <p>
            Completamente gratuito y de código abierto (GPL2). Puede usarlo en proyectos comerciales, descargarlo y estudiar el código y crear sus
            propias versiones derivadas sin pagar una licencia.
          </p>
        </div>
        <div class="main-feature">
          <div class="main-feature__img"><img src="/img/grid-flexbox.svg" /></div>
          <h3>CSS Grid y Flexbox</h3>
          <p>
            EDgrid usa las características más modernas de CSS: Flexbox y Grid. Además incluye fallbacks para Grid en navegadores que todavía no lo
            soporten.
          </p>
        </div>
        <div class="main-feature">
          <div class="main-feature__img"><img src="/img/columnas.svg" /></div>
          <h3>Adiós columnas</h3>
          <p>¿Cansado de las 12 columnas? Con EDgrid puedes crear layouts con completa libertad sin amarrarte a usar siempre doce columnas.</p>
        </div>
        <div class="main-feature">
          <div class="main-feature__img"><img src="/img/dev.svg" /></div>
          <h3>Debug</h3>
          <p>
            El modo dev se activa con una sola línea de código y te muestra la construcción del layout por debajo del capó. Así podrás corregir
            problemas con facilidad.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { MUTATION_ASIGNAR_BANNER_OPTIONS, MUTATION_SHOW_BANNER } from '@/store/mutations/types';

export default {
  name: 'IndexPage',
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
      title: 'EDgrid - Libreria Sass/CSS de EDteam para construir layouts web responsive',
      description: 'Libreria Sass/CSS de EDteam para construir layouts web responsive',
      ogUrl: '/'
    };
  },
  mounted() {
    this.$store.commit(MUTATION_ASIGNAR_BANNER_OPTIONS, {
      bannerOptions: {
        img: '/img/docs-banner.jpg',
        title: 'EDgrid',
        description: 'Libreria Sass/CSS de EDteam para construir layouts web responsive',
        clase: '',
        boton: false,
        botonClass: '',
        botonText: '',
        botonUrl: '',
        botones: true
      }
    });
    this.$store.commit(MUTATION_SHOW_BANNER);
  }
};
</script>

<style lang="scss"></style>
