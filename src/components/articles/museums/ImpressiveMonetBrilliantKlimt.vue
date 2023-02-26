<template>
  <v-container >
    <div  class="article-div">
      <h1 class="pe-text blue-text"> Impressive MONET & Brilliant KLIMT</h1>

      <ArticleFigure :figure=entrance />

      <ArticleFigure :figure=example1 />
      <ArticleFigure :figure=example2 />
      <ArticleFigure :figure=example3 />


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/Fablemans.js';

export default {
  name: 'ImpressiveMonetBrilliantKlimt',
  components: {ArticleFigure,BreadCrumbs},
  computed: { 
   
  },
  data: () => ({
    entrance: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676983987/pedrofortunatoesteves-site/blog/museums/20230219_115934_rnwkpd.jpg",
        "description": {
          "pt": "Entrada para 'Impressive Monet' & 'Brilliant Klimt' ",
          "en": "Entrance for 'Impressive Monet' & 'Brilliant Klimt'"
        }
    },
    example1: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676983928/pedrofortunatoesteves-site/blog/museums/20230219_121021_jktghg.jpg",
        "description": {
          "pt": "Imagem tirada da exposição.",
          "en": "Photography taken from the exhibition."
        }
    },
    example2: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381043/pedrofortunatoesteves-site/blog/museums/20230219_120958_l76ld7.jpg",
        "description": {
          "pt": "Imagem tirada da exposição.",
          "en": "Photography taken from the exhibition."
        }
    },
    example3: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381170/pedrofortunatoesteves-site/blog/museums/20230219_120947_squ5ck.jpg",
        "description": {
          "pt": "Imagem tirada da exposição.",
          "en": "Photography taken from the exhibition."
        }
    }
    
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>