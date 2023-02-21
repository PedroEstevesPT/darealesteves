<template>
  <v-container >
    <h1 class="title blue-text" v-html="title" />
    <BreadCrumbs class="title pe-text"  :items="breadcrumbs" /><br>
    <PhotoGallery :Gallery="this.photos"/>
  </v-container>
</template>



<script>
import translations  from '../translations/gastronomy.js';
import BreadCrumbs   from '../components/BreadCrumbs.vue';
import PhotoGallery  from '../components/PhotoGallery.vue';




export default {
  name: 'Gastronomy',
  computed: {
    title: function() { return translations["title"][this.$store.state.lang]; }
  },
  components: {PhotoGallery,BreadCrumbs},
  data: () => ({
    breadcrumbs: [
      {"title":  {"en":'Blog' ,  "pt": "Blog"}, "path":"/blog"},
      {"title":  {"en":'Gastronomy', "pt": "Gastronomia"}, "path":"/blog/gastronomy"}
    ],
    photos:  [
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676983537/pedrofortunatoesteves-site/food/20230216_151642_nit8mz.jpg",
        "title": {
            "pt": "Sushi no Hana.",
            "en": "Sushi no Hana."
          },
        "description": { 
          "pt":  "Sushi no Hana.",
          "en": "Sushi no Hana."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676983604/pedrofortunatoesteves-site/food/20230214_145144_eykj2s.jpg",
        "title": {
            "pt": "JI Burguer.",
            "en": "JI Burguer."
          },
        "description": { 
          "pt":  "JI Burguer.",
          "en": "JI Burguer."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676983618/pedrofortunatoesteves-site/food/20230203_205813_ubscb9.jpg",
        "title": {
            "pt": "Iguaria do Gandhi Palace.",
            "en": "Gandhi Palace Delicacy."
          },
        "description": { 
          "pt":  "Iguaria do Gandhi Palace.",
          "en": "Gandhi Palace Delicacy."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1674931552/pedrofortunatoesteves-site/food/IMG_0390_t4x8sv.jpg",
        "title": {
            "pt": "Burrata.",
            "en": "Burrata."
          },
        "description": { 
          "pt":  "Burrata.",
          "en": "Burrata."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1674931552/pedrofortunatoesteves-site/food/IMG_0388_uvrntg.jpg",
        "title": {
            "pt": "Pizza carbonara.",
            "en": "Pizza carbonara."
          },
        "description": { 
          "pt":  "Pizza carbonara.",
          "en": "Pizza carbonara."
        }
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1674931552/pedrofortunatoesteves-site/food/IMG_0392_widxkz.jpg",
        "title": {
            "pt": "Tagliatelle.",
            "en": "Tagliatelle."
          },
        "description": { 
          "pt":  "Tagliatelle.",
          "en": "Tagliatelle."
        }
      },
      { //6
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1674931552/pedrofortunatoesteves-site/food/IMG_0389_nfqogi.jpg",
        "title": {
            "pt": "Pizza carbonara, burrata e pasta.",
            "en": "Pizza carbonara, burrata e pasta."
          },
        "description": { 
          "pt":  "Pizza carbonara, burrata e pasta.",
          "en": "Pizza carbonara, burrata e pasta."
        } 
      },
      { //5
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1674931552/pedrofortunatoesteves-site/food/IMG_0393_vqt4b3.jpg",
        "title": {
            "pt": "Pasta com Frutos do Mar (não me lembro do nome)",
            "en": "Pasta with seafruits (don´t recall its name)"
          },
        "description": { 
          "pt": "Pasta com Frutos do Mar (não me lembro do nome)",
          "en": "Pasta with seafruits (don´t recall its name)"
        }
      },
      { //4
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1674931551/pedrofortunatoesteves-site/food/image_67183361_kup2vq.jpg",
        "title": {
            "pt": "Um chim-chim com amigos no Italy Caffe (a primeira vez que provei Aperol Spritz)",
            "en": "A toast with friends on Italy Caffe (first time I tasted Aperol Spritz)"
          },
        "description": { 
          "pt": "Um chim-chim com amigos no Italy Caffe (a primeira vez que provei Aperol Spritz)",
          "en": "A toast with friends on Italy Caffe (first time I tasted Aperol Spritz)"
        }
      },
      { //3
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
      { //2
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672498218/pedrofortunatoesteves-site/food/20221227_203653_idjdzg.jpg",
        "title": {
            "pt": "#1 Combinado de 45 peças",
            "en": "#1 Combinated of 45 pieces"
          },
        "description": { 
          "pt":  "Combinado de Sushi (45 peças) no Akari com amigos. Tão saboroso como parece :)",
          "en": "Combinated of 45 pieces with friends. As tasty as it looks :)"
        }
      },
      { //1
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