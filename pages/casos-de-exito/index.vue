<template>
  <main class="main-section">
    <div class="ed-grid cols-l-3 rows-gap">
      <Card
        v-for="caso in casos"
        :key="caso.index"
        :card-image="caso.img"
        :card-title="caso.title"
        :card-sub="caso.subtitle"
        :card-text="caso.description"
        :cardlink="caso.url"
        :user="caso.user"
        :image-user="caso.imageUser"
        :linkuser="caso.linkUser"
      ></Card>
    </div>
  </main>
</template>

<script>
import Card from '@/components/molecules/Card';
import { MUTATION_ASIGNAR_BANNER_OPTIONS, MUTATION_SHOW_BANNER } from '@/store/mutations/types';

export default {
  name: 'CasoDeExitoIndexPage',
  components: { Card },
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
      casos: [
        {
          index: 0,
          img: '/img/ed-team-web.PNG',
          title: 'EDteam',
          subtitle: 'Web oficial de EDteam',
          description: 'Plataforma dedicada a la enseñanza de programación, diseño web y todo lo referente al mundo de desarrollo web.',
          url: 'https://ed.team/',
          user: 'no',
          imageUser: '',
          linkUser: ''
        },
        {
          index: 1,
          img: '/img/map-chile-web.png',
          title: 'Map',
          subtitle: 'Agencia de selección y Outsourcing',
          description: 'MAP es una Agencia encargada de captación de nuevos talentos para empresas.',
          url: 'http://www.map-chile.cl/',
          user: 'no',
          imageUser: '',
          linkUser: ''
        },
        {
          index: 2,
          img: '/img/wizardgva-web.png',
          title: 'Wizardgva',
          subtitle: 'Agencia de soluciones TI',
          description: 'Wizardgva nace del sueño de un joven por brindar soluciones de hardware rápidas y accesibles',
          url: 'https://wizardgva.com/',
          user: 'Danny Restrepo',
          imageUser: '/img/wizardgva-user.png',
          linkUser: 'https://www.linkedin.com/in/restrepodanny/'
        },
        {
          index: 3,
          img: '/img/alkila-web.png',
          title: 'Alkila',
          subtitle: 'Empresa de reta de autos',
          description: 'Alkila es una empresa Peruana dedicada al rubro de alquiler de vehículos.',
          url: 'http://alkilarentacar.com',
          user: 'Edwing Romero Rodriguez',
          imageUser: '/img/alkila-user.png',
          linkUser: 'https://www.linkedin.com/in/edwingromero/'
        },
        {
          index: 4,
          img: '/img/gema-web.png',
          title: 'Agencia Gema',
          subtitle: 'Agencia de eventos',
          description: 'En Gema, son especialistas en el servicio de banquetes y renta de equipo para todo tipo de eventos',
          url: 'http://agenciagema.com/',
          user: 'no',
          imageUser: '',
          linkUser: ''
        },
        {
          index: 5,
          img: '/img/starwars-web.png',
          title: 'Carlos - Star Wars project',
          subtitle: 'Proyecto',
          description: 'Esta web es un poryecto personal usando EDgrid y Angular.',
          url: 'https://carlosmanotas.github.io/star-wars-ng2/',
          user: 'Carlos Manotas',
          imageUser: '/img/starwars-user.png',
          linkUser: 'https://github.com/CarlosManotas'
        },
        {
          index: 6,
          img: '/img/cripcakes-web.png',
          title: 'CrispCakes',
          subtitle: 'Microempresa',
          description: 'Microempresa dedicada a la producción de Cakes',
          url: 'http://crispcakes.tk/index.html',
          user: 'Jaime Falquez',
          imageUser: '/img/cripcakes-user.png',
          linkUser: 'https://www.facebook.com/rinnenedo?fref=gc&dti=1752954624922544'
        },
        {
          index: 7,
          img: '/img/robert-web.png',
          title: 'Portafolio - Robert',
          subtitle: 'Portafolio',
          description:
            'Esta web es el portfolio de Robert Huamán Cáceres, estudiante en Ingeniería informática y sistemas de la Universidad Nacional Micaela Bastidas de Apurímac - Perú',
          url: 'https://pepobj.github.io/dist/',
          user: 'Robert BJ Huamán Cáceres',
          imageUser: '/img/robert-user.png',
          linkUser: 'https://www.linkedin.com/in/robert-bj-huaman/'
        },
        {
          index: 8,
          img: '/img/militaria-web.png',
          title: 'Militaria',
          subtitle: 'Empresa',
          description: 'Empresa peruana dedicada a la exportación de indumentaria y accesorios para uso militar.',
          url: 'http://militaria.com.pe/',
          user: 'Edwing Romero Rodríguez',
          imageUser: '/img/alkila-user.png',
          linkUser: 'https://www.linkedin.com/in/robert-bj-huaman/'
        },
        {
          index: 9,
          img: '/img/jeanda.jpg',
          title: 'Jeanda',
          subtitle: 'Portafolio',
          description: 'Hola, mi nombre es Jean David soy de Querétaro, México y soy desarrollador y diseñador web frontend.',
          url: 'https://www.jeanda.mx/',
          user: 'Jean David Herrera Guerrero',
          imageUser: '/img/jeanda.jpg',
          linkUser: 'https://www.jeanda.mx/'
        }
      ],
      title: 'Casos de éxito',
      description: 'Casos de éxito que se encuentran actualmente en producción y que utilizan la librería de EDgrid.',
      ogUrl: '/casos-exito'
    };
  },
  mounted() {
    this.$store.commit(MUTATION_ASIGNAR_BANNER_OPTIONS, {
      bannerOptions: {
        img: '/img/docs-banner.jpg',
        title: 'Casos de éxito',
        description: 'Proyectos que usan EDgrid en producción',
        clase: 'third-color',
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
