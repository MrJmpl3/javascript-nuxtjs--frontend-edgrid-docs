<template>
  <ul>
    <li v-for="menu in menus" :key="menu.indice" itemprop="url">
      <nuxt-link :to="menu.ruta" :target="menu.ruta === 'https://ed.team' ? '_blank' : ''" itemprop="name" :title="`Enlace de ${menu.titulo}`" exact>
        {{ menu.titulo }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListaRutas',
  data() {
    return {
      menus: [
        {
          indice: 0,
          titulo: 'Documentación',
          ruta: '/documentacion'
        },
        {
          indice: 1,
          titulo: 'Casos de éxito',
          ruta: '/casos-de-exito'
        },
        {
          indice: 2,
          titulo: 'Changelog',
          ruta: '/changelog'
        },
        {
          indice: 3,
          titulo: 'Créditos',
          ruta: '/creditos'
        },
        {
          indice: 4,
          titulo: 'Ir a EDteam',
          ruta: 'https://ed.team'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
