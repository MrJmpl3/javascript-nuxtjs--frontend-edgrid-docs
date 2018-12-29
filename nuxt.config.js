module.exports = {
  mode: 'universal',

  //
  // Headers of the page
  //

  head: {
    title: 'EDgrid | Inicio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'initial-scale=1.0, width=device-width' },
      { hid: 'description', name: 'description', content: 'Descripcion de la pagina' },
      { hid: 'og:title', property: 'og:title', content: 'EDgrid | Inicio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: 'Descripcion de la pagina' },
      { hid: 'og:url', property: 'og:url', content: '/' },
      { hid: 'og:image', property: 'og:image', content: '/img/edgrid-poster.jpg' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'EDTeam' },
      { hid: 'og:locale', property: 'og:locale', content: 'es_PE' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'es_CO' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'es_MX' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'es_DO' },
      { hid: 'og:locale:alternate', property: 'og:locale:alternate', content: 'es_BO' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'EDgrid | Inicio' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@EDteamLat' },
      { hid: 'twitter:description', property: 'twitter:site', content: 'Descripcion de la pagina' },
      { hid: 'theme-color', name: 'theme-color', content: '#007BDF' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,400i,700|Open+Sans:700' },
      { rel: 'shortcut icon', href: '/img/edgrid-favicon.png' }
    ],
    scripts: []
  },

  //
  // Customize the progress-bar color
  //

  loading: { color: '#fff' },

  //
  // Global CSS
  //

  css: [{ src: '@/assets/styles/styles.scss', lang: 'scss' }],

  //
  // Plugins to load before mounting the App
  //

  plugins: [],

  //
  // Nuxt.js modules
  //

  modules: ['@nuxtjs/markdownit'],

  //
  // Build configuration
  //

  build: {
    //
    // You can extend webpack config here
    //

    extend(config, ctx) {
      //
      // Run ESLint on save
      //

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },

  //
  // Vue Router
  //

  router: {
    linkActiveClass: 'active'
  }
};
