<template>
  <v-container >
    <div  class="article-div">

      <h1 class="blue-text" v-html="title" />
      <BreadCrumbs class="pe-text"  :items="breadcrumbs" /><br>

      <p class="pe-text" v-html="text1" />
      <ArticleFigure :figure=fablemans />
      <p class="pe-text" v-html="text2" />

    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';

export default {
  name: 'UneFemmeMariee',
  components: {ArticleFigure,BreadCrumbs},
  computed: { 
    title:       function() { return translations["title"][this.$store.state.lang];},
    text1:       function() { return translations["text1"][this.$store.state.lang]; },
    text2:       function() { return translations["text2"][this.$store.state.lang]; },
  },
  data: () => ({
    breadcrumbs: [
      {"title":  {"en":'Blog' ,  "pt": "Blog"}, "path":"/blog"},
      {"title":  {"en":'Cinema', "pt": "Cinema"}, "path":"/blog/cinema"},
      {"title":  {"en":'The Fablemans', "pt": "Os Fablemans"}, "path":"/blog/cinema/Fablemans"},
    ],
    fablemans: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676234983/pedrofortunatoesteves-site/blog/cinema/fablemans/fablemans_eoisyi.jpg",
        "description": {
          "pt": "3 reacções distintas da família Fableman ao ver 'The Greatest Show on Earth (1952)' ",
          "en": "3 distinct reactions from the Fableman family while seeing the 'The Greatest Show on Earth (1952)'."
        }
    }
    
  }),
}
</script>
<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";
</style>