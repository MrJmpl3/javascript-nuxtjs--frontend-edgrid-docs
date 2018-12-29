<template>
  <div class="main-banner diagonal l-block img-container" :class="clase">
    <div class="ed-grid lg-grid-6">
      <div class="lg-cols-4 lg-x-2 s-center">
        <img class="main-banner__img" :src="img" />
        <div class="main-banner__data">
          <div class="t2">{{ titleBanner }}</div>
          <p class="s-mb-2">{{ descriptionBanner }}</p>
          <a v-if="boton" :class="`button--${botonClass}`" :href="botonUrl" target="_blank">{{ botonText }}</a>
          <div v-if="botones" class="s-center">
            <a
              class="button--ghost-light s-mr-2"
              href="https://join.slack.com/t/edlabs/shared_invite/enQtMjk1MjcxOTUzMzgxLTgyY2MwZjY3ODRhNGQyMWJkOWRkOGFlZjQ1YjJiYjAxOTMwNGIzMGViMjc5ODZmMmI3ZGFlNGNiMTEwNGIyNzc"
              target="_blank"
              title="Slack de EDgrid"
            >
              <span>Slack</span>
            </a>
            <a class="button--ghost-light s-mr-2" href="https://github.com/escueladigital/EDgrid" target="_blank" title="EDgrid en Github">
              <span>Github</span>
            </a>
            <a class="button--ghost-light" href="/documentacion" title="Documentación de EDgrid"> <span>Documentación</span> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    img: {
      required: true,
      type: String
    },
    titleBanner: {
      required: true,
      type: String
    },
    descriptionBanner: {
      required: true,
      type: String
    },
    clase: {
      required: true,
      type: String
    },
    boton: {
      required: true,
      type: Boolean
    },
    botonClass: {
      required: true,
      type: String
    },
    botonUrl: {
      required: true,
      type: String
    },
    botonText: {
      required: true,
      type: String
    },
    botones: {
      required: true,
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped></style>
