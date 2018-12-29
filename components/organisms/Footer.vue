<template>
  <footer class="main-footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
    <div class="ed-container main-footer--content">
      <div class="ed-item l-50 s-to-center s-center">
        <p class="smaller s-mb-1">
          EDgrid es una librería Sass/Css para crear diseños web responsive y mobile first.
          <a
            class="icon-slack space"
            href="https://join.slack.com/t/edlabs/shared_invite/enQtMjk1MjcxOTUzMzgxLTgyY2MwZjY3ODRhNGQyMWJkOWRkOGFlZjQ1YjJiYjAxOTMwNGIzMGViMjc5ODZmMmI3ZGFlNGNiMTEwNGIyNzc"
            target="_blank"
            title="Slack de EDgrid"
          ></a>
          <a class="icon-github space" href="https://github.com/escueladigital/EDgrid" target="_blank" title="EDgrid en EDgrid"></a>
          <a class="icon-docs space" href="documentacion" target="_blank" title="Documentación de EDgrid"></a>
        </p>
        <p class="smaller s-mb-1">
          EDgrid es una marca de <a href="https://ed.team" target="_blank">EDteam</a>. Repositorio de este sitio web en
          <a href="https://github.com/escueladigital/EDgrid" target="_blank">Github</a>
        </p>
      </div>
      <div class="ed-item">
        <p class="smaller s-center s-mb-0">
          <a href="https://ed.team/alvaro" target="_blank" title="Blog de Alvaro Felipe">Alvaro Felipe </a
          ><span>2015 - {{ new Date().getFullYear() }}</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped></style>
