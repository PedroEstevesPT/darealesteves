<template>
  <v-container >
    <div  class="article-div">

    <h1 class="blue-text" v-html="title" /><br>

      <p v-html="text1" />
      <ArticleFigure :figure=fablemans />

      <p v-html="text2" />


    


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import translations from  '../../../translations/articles/Fablemans.js';

export default {
  name: 'UneFemmeMariee',
  components: {ArticleFigure},
  computed: { 
    title:       function() { return translations["title"][this.$store.state.lang];},
    text1:        function() { return translations["text1"][this.$store.state.lang]; },
    text2:       function() { return translations["text2"][this.$store.state.lang]; },
  },
  data: () => ({
    fablemans: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676234983/pedrofortunatoesteves-site/blog/cinema/fablemans/fablemans_eoisyi.jpg",
        "description": {
          "pt": "3 reacções distintas da família Fableman ao ver 'The Greatest Show on Earth (1952)' ",
          "en": "Charlotte, the main character of the movie together with a 'mystery man' covered by 'Berenice', a five-act tragedy by the French playwright Jean Racine."
        }
    },
    
  }),
}
</script>
<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";
</style>