<template>
  <nav id="vertical-menu" class="vertical-menu" itemscope itemtype="http://schema.org/WPSideBar">
    <ul>
      <li v-for="sidebarItem in sidebar" :key="sidebarItem.indice" itemprop="url">
        <nuxt-link :to="sidebarItem.url" itemprop="name" :title="sidebarItem.texto" exact>{{ sidebarItem.texto }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuDocs',
  data() {
    return {
      sidebar: [
        {
          indice: 0,
          texto: 'Comenzar con EDgrid',
          url: '/documentacion'
        },
        {
          indice: 1,
          texto: 'Instalación',
          url: '/documentacion/instalacion'
        },
        {
          indice: 2,
          texto: 'Estructura de archivos',
          url: '/documentacion/estructura'
        },
        {
          indice: 3,
          texto: 'Personalizar EDgrid',
          url: '/documentacion/personalizar'
        },
        {
          indice: 4,
          texto: 'Breakpoints',
          url: '/documentacion/breakpoints'
        },
        {
          indice: 5,
          texto: 'Columnas con Flexbox',
          url: '/documentacion/layout-flexbox'
        },
        {
          indice: 6,
          texto: 'Filas y columnas con CSS Grid (beta)',
          url: '/documentacion/layout-css-grid'
        },
        {
          indice: 7,
          texto: 'Layout',
          url: '/documentacion/layout'
        },
        {
          indice: 8,
          texto: 'Distribucion',
          url: '/documentacion/distribucion'
        },
        {
          indice: 9,
          texto: 'Alineación',
          url: '/documentacion/alineacion'
        },
        {
          indice: 10,
          texto: 'Visibilidad',
          url: '/documentacion/visibilidad'
        },
        {
          indice: 11,
          texto: 'Mediaqueries',
          url: '/documentacion/mediaqueries'
        },
        {
          indice: 12,
          texto: 'Estilos base',
          url: '/documentacion/base'
        },
        {
          indice: 13,
          texto: 'Modo dev',
          url: '/documentacion/modo-dev'
        },
        {
          indice: 14,
          texto: 'Funciones',
          url: '/documentacion/funciones'
        },
        {
          indice: 15,
          texto: 'Videos responsive',
          url: '/documentacion/videos'
        },
        {
          indice: 16,
          texto: 'Menus',
          url: '/documentacion/menus'
        },
        {
          indice: 17,
          texto: 'Prototipado (beta)',
          url: '/documentacion/prototipado'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
