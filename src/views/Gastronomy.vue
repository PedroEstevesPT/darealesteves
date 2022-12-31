<template>
  <v-container >
    <PhotoGallery :Gallery="this.photos"/>
  </v-container>
</template>



<script>

import PhotoGallery from '../components/PhotoGallery.vue';




export default {
  name: 'Gastronomy',
  components: {PhotoGallery},
  data: () => ({

    photos:  [
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672498216/pedrofortunatoesteves-site/food/20221227_203730_pndhc7.jpg",
        "title": {
            "pt": "#2 Combinado de 45 peças",
            "en": "#2 Combinated of 45 pieces"
          },
        "description": { 
          "pt":  "Combinado de Sushi (45 peças) no Akari com amigos. Tão saboroso como parece :)",
          "en": "Combinated of 45 pieces with friends. As tasty as it looks :)"
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672498218/pedrofortunatoesteves-site/food/20221227_203653_idjdzg.jpg",
        "title": {
            "pt": "1# Combinado de 45 peças",
            "en": "1# Combinated of 45 pieces"
          },
        "description": { 
          "pt":  "Combinado de Sushi (45 peças) no Akari com amigos. Tão saboroso como parece :)",
          "en": "Combinated of 45 pieces with friends. As tasty as it looks :)"
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672498218/pedrofortunatoesteves-site/food/20221227_201506_hxqede.jpg",
        "title": {
            "pt": "Cerveja Sapporo",
            "en": "Sapporo Beer"
          },
        "description": { 
          "pt":  "Cerveja japonesa. Agradável, não tão diferente das portuguesas.",
          "en": "Japonese beer, tasty, not to different from the portuguese ones."
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