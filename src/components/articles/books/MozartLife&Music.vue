<template>
  <v-container >
    <div  class="article-div">

    <h1 class="pe-text blue-text" v-html="title" />  
    <BreadCrumbs  :items="breadcrumbs" />

    <h2 class="pe-text blue-text" v-html="about" /> 
    <br>

    <p class="pe-text" v-html="aboutText" />
    <br>


    <h2 class="pe-text blue-text" v-html="facts" /> 
    <br>

    <p class="pe-text" v-html="factsText" />
    <br>

    <h2 class="pe-text blue-text" v-html="descriptionOfMozartWorks" />
    <br>

    <p class="pe-text" v-html="mozartWorks"/>
    <br>

    <h2 class="pe-text blue-text" v-html="authorEdition"/>
    <br>

    <p class="pe-text" v-html="authorEditionText" />
    <br>

    <h2 class="pe-text blue-text" v-html="interestingWords" />
    <br>

    <p class="pe-text" v-html="interestingWordsText" />


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/MozartLifeWork.js';




export default {
  name: 'Mozart - Life & Music',
  components: {ArticleFigure,BreadCrumbs},
  computed: { 
    about:     function(){ return translations["about"][this.$store.state.lang];}, 
    aboutText: function(){ return translations["about-text"][this.$store.state.lang];}, 
    facts:     function(){ return translations["facts"][this.$store.state.lang];}, 
    factsText: function(){ return translations["facts-text"][this.$store.state.lang];}, 
    title:     function(){ return translations["title"][this.$store.state.lang];},
    descriptionOfMozartWorks: function(){ return translations["descriptionOfMozartWorks"][this.$store.state.lang];},
    mozartWorks:              function(){ return translations["mozartWorks"][this.$store.state.lang];},
    authorEdition:            function(){ return translations["title"][this.$store.state.lang];},
    authorEditionText:        function(){ return translations["authorEdition-text"][this.$store.state.lang];},
    interestingWords:         function(){ return translations["interestingWords"][this.$store.state.lang];},
    interestingWordsText:     function(){ return translations["interestingWords-text"][this.$store.state.lang];}

  },
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"},   "path":"/blog"},
      {"title": {"en": "Books", "pt": "Livros"}, "path":"/blog/books"},
      {"title": {"en": "Mozart - Life & Music", "pt": "Mozart - Vida e Música"}, "path":"/blog/books/MozartLifeWork"},
    ],
  })
}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>