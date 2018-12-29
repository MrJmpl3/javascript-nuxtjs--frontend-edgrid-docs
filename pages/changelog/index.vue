<template>
  <div class="ed-grid lg-grid-6">
    <div class="lg-cols-4 lg-x-2">
      <ul class="data-list">
        <li>
          <p><span class="strong">Actual (v 2.1.6)</span><br /><span class="small">Agrega CSS grid y resuelve varios bugs menores.</span></p>
          <a
            class="button small icon-download space"
            href="https://github.com/escueladigital/EDgrid/archive/master.zip"
            itemprop="url"
            target="_blank"
          >
            Descargar versión
          </a>
        </li>
        <li>
          <p>
            <span class="strong">v2.0 (3 dic 2016)</span><br /><span class="small"
              >Cambia su enfoque al de librería (pretendía ser un framework) en versión Sass y CSS. Permite usar mixins que compilano solo el código
              necesario, además de activar y desactivar componentes.</span
            >
          </p>
          <a
            class="button small icon-download space"
            href="https://github.com/escueladigital/EDgrid/releases/tag/v2.0.0"
            itemprop="url"
            target="_blank"
          >
            Descargar versión
          </a>
        </li>
        <li>
          <p>
            <span class="strong">v1.2 (26 sep 2015)</span><br /><span class="small"
              >Se cambia floats por flexbox. Se usan las clases <code>.ed-container</code> y <code>.ed-item</code> en remplazo de
              <code>.grupo</code> y <code>.caja</code></span
            >
          </p>
          <a class="button small icon-download space" href="https://github.com/escueladigital/EDgrid/releases/tag/1.2" itemprop="url" target="_blank">
            Descargar versión
          </a>
        </li>
        <li>
          <p>
            <span class="strong">v1.0 (19 abr 2015)</span><br /><span class="small"
              >Uso de floats, clases <code>.grupo</code> y <code>.caja</code></span
            >
          </p>
          <a
            class="button small icon-download space"
            href="https://github.com/escueladigital/EDgrid/releases/tag/v1.0"
            itemprop="url"
            target="_blank"
          >
            Descargar versión
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MUTATION_ASIGNAR_BANNER_OPTIONS, MUTATION_SHOW_BANNER } from '@/store/mutations/types';

export default {
  name: 'ChangelogIndexPage',
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
      title: 'EDgrid | Changelog',
      description: 'Registro de cambios que ha tenido la librería EDgrid.',
      ogUrl: '/changelog'
    };
  },
  mounted() {
    this.$store.commit(MUTATION_ASIGNAR_BANNER_OPTIONS, {
      bannerOptions: {
        img: '/img/docs-banner.jpg',
        title: 'Changelog',
        description: 'Lanzamientos importantes de EDgrid',
        clase: 'accent-color',
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
