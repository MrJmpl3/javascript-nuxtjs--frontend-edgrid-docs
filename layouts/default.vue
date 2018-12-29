<template>
  <div class="wrapper">
    <Header></Header>
    <Banner
      v-if="banner"
      :img="bannerOptions.img"
      :title-banner="bannerOptions.title"
      :description-banner="bannerOptions.description"
      :clase="bannerOptions.clase"
      :boton="bannerOptions.boton"
      :boton-class="bannerOptions.botonClass"
      :boton-text="bannerOptions.botonText"
      :boton-url="bannerOptions.botonUrl"
      :botones="bannerOptions.botones"
    ></Banner>
    <slot v-if="docsMenu">
      <div class="l-block"></div>
      <div class="ed-grid cols-l-4 main-section l-big-section">
        <aside class="main-sidebar sidebar-first" itemscope="itemscope" itemtype="http://schema.org/WPSideBar" role="complementary">
          <div id="vertical-menu-toggle" class="vertical-menu-toggle to-l" data-content="Filtros"></div>
          <MenuDocs></MenuDocs>
        </aside>
        <div class="span-l-3"><nuxt /></div>
      </div>
    </slot>
    <slot v-else>
      <div class="l-block"></div>
      <div class="main-section l-big-section"><nuxt /></div>
    </slot>
    <Footer></Footer>
  </div>
</template>

<script>
import MenuDocs from '@/components/molecules/MenuDocs';
import Banner from '@/components/organisms/Banner';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import { mapState } from 'vuex';

export default {
  components: { MenuDocs, Footer, Banner, Header },
  computed: {
    ...mapState(['banner', 'bannerOptions']),
    docsMenu() {
      switch (this.$route.name) {
        case 'documentacion':
        case 'documentacion-instalacion':
        case 'documentacion-estructura':
        case 'documentacion-personalizar':
        case 'documentacion-breakpoints':
        case 'documentacion-layout-flexbox':
        case 'documentacion-layout-css-grid':
        case 'documentacion-layout':
        case 'documentacion-distribucion':
        case 'documentacion-alineacion':
          return true;
        default:
          return false;
      }
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
