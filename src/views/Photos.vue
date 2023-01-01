<template>
  <v-container >
    <PhotoGallery :Gallery="this.photos"/>
  </v-container>
</template>



<script>

import PhotoGallery from '../components/PhotoGallery.vue';




export default {
  name: 'Photos',
  components: {PhotoGallery},
  data: () => ({

    photos:  [
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