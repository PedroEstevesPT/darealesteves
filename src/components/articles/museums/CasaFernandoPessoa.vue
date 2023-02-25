<template>
  <v-container >
    <div  class="article-div">
        <h1> Casa Fernando Pessoa</h1>

    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/Fablemans.js';

export default {
  name: 'CasaFernandoPessoa',
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