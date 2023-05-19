<template>
  <v-container >
  <div  class="article-div">

    <h1 class="pe-text blue-text" v-html="title" />
    <BreadCrumbs  :items="breadcrumbs" />


    <h2 class="pe-text blue-text" v-html="techStack" /> 
    <br>
    <p class="pe-text" v-html="techStackTechnologies" />


    <br>

    <h2 class="pe-text blue-text" v-html="ideasForFeatures"/>
    <br>
    <div class="pe-text" v-html="features">

    </div>
    <br>

    <h2 class="pe-text blue-text" v-html="cdnTitle" />
    <br>

    <p class="pe-text" v-html="cdnText" /> 




    </div>
  </v-container>
</template>
<script>

import { articleMixin } from '../../articles/articleMixin.js'
import BreadCrumbs from '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/site.js';



export default {
  name: 'Site',
  components: {BreadCrumbs},
  computed:{
    title: function(){ return translations["title"][this.$store.state.lang];},
    techStack: function(){ return translations["techStack"][this.$store.state.lang];},
    techStackTechnologies: function(){ return translations["techStackTechnologies"][this.$store.state.lang];},
    ideasForFeatures: function(){ return translations["featuresTitle"][this.$store.state.lang];},
    features: function(){ return translations["features"][this.$store.state.lang];},
    cdnTitle: function(){ return translations["cdnTitle"][this.$store.state.lang];},
    cdnText:  function(){ return translations["cdnText"][this.$store.state.lang];}
  },
  data: () => ({
    breadcrumbs: [
      {"title": {"en":'Blog', "pt": "Blog"}, "path":"/blog"},
      {"title": {"en":'Tech', "pt": "Tech"}, "path":"/blog/tech"},
      {"title": {"en":'About this site', "pt": "Sobre este site"}, "path":"/blog/tech/site"}
    ]
  }),
}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>