<template>
  <v-container >
    <div  class="article-div">
        <h1 class="pe-text blue-text"> Apocalypse Redux </h1>
        
        <ArticleFigure :figure=apocalypseNow />

    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/Fablemans.js';

export default {
  name: 'Apocalypse Now - Redux',
  components: {ArticleFigure,BreadCrumbs},
  computed: { 
   
  },
  data: () => ({
    apocalypseNow: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381813/pedrofortunatoesteves-site/blog/museums/apocalypseNowRedux_inksmh.webp",
        "description": {
          "pt": "Captain Benjamin Willard (representado por Martin Sheen)",
          "en": "Captain Benjamin Willard (representado por Martin Sheen)."
        }
    }
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>