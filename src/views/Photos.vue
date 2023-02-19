<template>

  <h1 class="title blue-text" v-html="title" />
  <BreadCrumbs class="title pe-text"  :items="breadcrumbs" /><br>
  <v-container >
    <PhotoGallery :Gallery="this.photos"/>
  </v-container>
</template>



<script>

import BreadCrumbs from   '../components/BreadCrumbs.vue';
import PhotoGallery from '../components/PhotoGallery.vue';
import translations from '../translations/photos.js';

export default {
  name: 'Photos',
  computed: {
    title: function() { return translations["title"][this.$store.state.lang]; }
  },
  components: {BreadCrumbs,PhotoGallery},
  data: () => ({
    breadcrumbs: [
      {"title":  {"en":'Blog',  "pt": "Blog"}, "path":"/blog"},
      {"title":  {"en":'Photos',"pt": "Fotografia"}, "path":"/blog/photos"}
    ],
    photos:  [
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1674931067/pedrofortunatoesteves-site/fotos/azulejos_efyjyw.jpg",
        "title": {
            "pt": "Azulejos da fachada de um edíficio em Campo de Ourique.",
            "en": "Tiles from a façade of a building in Campo de Ourique."
          },
        "description": { 
          "pt":  "Azulejos da fachada de um edíficio em Campo de Ourique.",
          "en": "Tiles from a façade of a building in Campo de Ourique."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1674931066/pedrofortunatoesteves-site/fotos/azulejos2_cmqqrl.jpg",
        "title": {
            "pt": "Azulejos da fachada de um edíficio em Campo de Ourique.",
            "en": "Tiles from a façade of a building in Campo de Ourique."
          },
        "description": { 
          "pt":  "Azulejos da fachada de um edíficio em Campo de Ourique.",
          "en": "Tiles from a façade of a building in Campo de Ourique."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673552557/pedrofortunatoesteves-site/fotos/20230112_104709_qkydkw.jpg",
        "title": {
            "pt": "Guarda Nacional Republicana (GNR) em Belém.",
            "en": "Guarda Nacional Republicana (GNR) in Belém."
          },
        "description": { 
          "pt":  "Guarda Nacional Republicana (GNR) em Belém.",
          "en": "Guarda Nacional Republicana (GNR) in Belém."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673552565/pedrofortunatoesteves-site/fotos/20230112_102509_gnecwg.jpg",
        "title": {
            "pt": "Azulejos da fachada dos 'Pastéis de Belém'.",
            "en": "Tiles from 'Pastéis de Belém' wall."
          },
        "description": { 
          "pt":  "Azulejos da fachada dos 'Pastéis de Belém'.",
          "en": "Tiles from 'Pastéis de Belém' wall."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672504758/pedrofortunatoesteves-site/fotos/20221224_124729_vmmsu6.jpg",
        "title": {
            "pt": "Vista do Passeio Marítimo de Algés.",
            "en": "View from Passeio Marítimo de Algés."
          },
        "description": { 
          "pt":  "Vista do Passeio Marítimo de Algés no final de Dezembro de 2022.",
          "en": "View from Passeio Marítimo de Algés in late December, 2022."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672504761/pedrofortunatoesteves-site/fotos/20221224_124331_jdrk2y.jpg",
        "title": {
            "pt": "Azulejos bonitos",
            "en": "Beautiful tiles"
          },
        "description": { 
          "pt":  "Azulejos bonitos na fachada de uma vivenda no Passeio Marítimo de Algés.",
          "en": "Beautiful tiles on the facade of an house in Passeio Marítimo de Algés. "
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672504761/pedrofortunatoesteves-site/fotos/20221216_211631_lxx9dv.jpg",
        "title": {
            "pt": "Camarim do teatro",
            "en": "Dressing room of the Auditorium"
          },
        "description": { 
          "pt":  "Camarim do teatro, com um aspeto muito aconchegador.",
          "en": "Dressing room of the theatre"
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672504761/pedrofortunatoesteves-site/fotos/20221216_205749_bomi7f.jpg",
        "title": {
            "pt": "Sala do Auditório",
            "en": "Auditorium"
          },
        "description": { 
          "pt":  "Sala do Auditório com um mood natalício.",
          "en": "Auditorium room with a winter/christmas mood."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672504761/pedrofortunatoesteves-site/fotos/20221216_204210_iynbq1.jpg",
        "title": {
            "pt": "Auditório Municipal Lourdes Norberto",
            "en": "Auditório Municipal Lourdes Norberto"
          },
        "description": { 
          "pt":  "Auditório Municipal Lourdes Norberto, 16 de Dezembro de 2022.",
          "en": "Auditório Municipal Lourdes Norberto, 16 of December 2022."
        }
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
    @import  "../styles/images.scss";
    @import  "../styles/text.scss";
</style>