<template>
  <v-container >
    <div  class="article-div">
      <h1 class="pe-text blue-text"> Gulbenkian - Faraós Superstars</h1>

      <BreadCrumbs  :items="breadcrumbs" />
      <ArticleFigure :figure=example1 />
      <ArticleFigure :figure=example2 />
      <ArticleFigure :figure=example3 />
      <ArticleFigure :figure=example4 />


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/Fablemans.js';

export default {
  name: 'Gulbenkian',
  components: {ArticleFigure,BreadCrumbs},
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"},       "path":"/blog"},
      {"title": {"en": "Museums", "pt": "Museus"},    "path":"/blog/museums"},
      {"title": {"en": "Gulbenkian - Faraós Superstars", "pt": "Gulbenkian - Faraós Superstars"}, "path":"/blog/movies/gulbenkian"},
    ],
    example1: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381520/pedrofortunatoesteves-site/blog/museums/IMG_0377_zwbjdu.jpg",
        "description": {
          "pt": "Bustos de Nefertiti",
          "en": "The first room (3rd floor)."
        }
    },
    example2: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381520/pedrofortunatoesteves-site/blog/museums/IMG_0379_npnwvx.jpg",
        "description": {
          "pt": "A primeira sala (terceiro piso).",
          "en": "The first room (3rd floor)."
        }
    },
    example3: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381519/pedrofortunatoesteves-site/blog/museums/IMG_0382_xdkpbs.jpg",
        "description": {
          "pt": "A primeira sala (terceiro piso).",
          "en": "The first room (3rd floor)."
        }
    },
    example4: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381520/pedrofortunatoesteves-site/blog/museums/IMG_0384_df6rfi.jpg",
        "description": {
          "pt": "A primeira sala (terceiro piso).",
          "en": "The first room (3rd floor)."
        }
    }


    
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>