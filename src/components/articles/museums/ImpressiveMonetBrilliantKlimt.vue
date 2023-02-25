<template>
  <v-container >
    <div  class="article-div">
        <h1 class="pe-text blue-text"> Impressive MONET & Brilliant KLIMT</h1>

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

    
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>