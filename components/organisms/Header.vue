<template>
  <header class="main-header" itemscope itemtype="http://schema.org/WPHeader">
    <div class="ed-grid s-grid-5 cols-lg-10">
      <div class="s-cols-2 cross-center" itemscope itemtype="http://schema.org/Organization">
        <nuxt-link to="/" itemprop="url"> <img class="main-logo" alt="Logotipo de EDgrid" itemprop="logo" src="/img/EDgrid-logo.svg" /> </nuxt-link>
      </div>
      <div class="s-cols-3 lg-cols-8 main-menu-container s-cross-center s-main-end">
        <nav id="main-menu" class="main-menu" itemscope itemtype="http://schema.org/SiteNavigationElement" role="navigation">
          <ListaRutas></ListaRutas>
        </nav>
        <div id="main-menu-toggle" class="main-menu-toggle to-l"></div>
      </div>
    </div>
  </header>
</template>

<script>
import ListaRutas from '@/components/molecules/ListaRutas';

export default {
  name: 'Header',
  components: { ListaRutas }
};
</script>

<style lang="scss" scoped></style>
