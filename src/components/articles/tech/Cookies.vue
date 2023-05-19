<template>
  <v-container >
  
    <h1 class="pe-text blue-text" v-html="title" />
    <BreadCrumbs  :items="breadcrumbs" />


    <h2 class="pe-text blue-text" v-html="whatAreCookiesTitle" /> 
    <br>
    <p class="pe-text" v-html="whatAreCookiesText" /><br>

    <h2 class="pe-text blue-text" v-html="commonUsesTitle" />
    <br>
    <p class="pe-text" v-html="commonUsesText" />


    <br>

    <h2 class="pe-text blue-text" v-html="jwtVsCookiesTitle" />
    <br>


    <p class="pe-text" v-html="jwtVsCookiesText" />

    

    <br>



  </v-container>
</template>
<script>

import ArticleFigure from  '../../../components/ArticleFigure.vue';
import BreadCrumbs   from  '../../../components/BreadCrumbs.vue';
import translations  from  '../../../translations/articles/cookies.js';


export default {
  name: 'Cookies',
  components: {ArticleFigure,BreadCrumbs},
  computed: {
    title:               function()  { return translations["title"][this.$store.state.lang];},
    whatAreCookiesText:  function()  { return translations["whatAreCookiesText"][this.$store.state.lang];},
    whatAreCookiesTitle: function()  { return translations["whatAreCookiesTitle"][this.$store.state.lang];},
    commonUsesTitle:     function()  { return translations["commonUsesTitle"][this.$store.state.lang];},
    commonUsesText:     function()  { return translations["commonUsesText"][this.$store.state.lang];},
    jwtVsCookiesTitle:   function()  { return translations["jwtVsCookiesTitle"][this.$store.state.lang];},
    jwtVsCookiesText:  function()  { return translations["jwtVsCookiesText"][this.$store.state.lang];}
  },
  data: () => ({
    breadcrumbs: [
      {"title": {"en":'Blog' ,  "pt": "Blog"},   "path":"/blog"},
      {"title": {"en":'Tech',   "pt": "Tech"},   "path":"/blog/tech"},
      {"title": {"en":'Cookies', "pt": "Cookies"}, "path":"/blog/tech/cookies"}
    ]})
}
</script>
<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";
</style>