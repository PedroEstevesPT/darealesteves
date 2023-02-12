<template>
  <v-container >
  <div  class="article-div">

    <h1 class="pe-text blue-text" v-html="title" /><br>

    <h2 class="pe-text article-par-padding  blue-text" v-html="subtitle1" /> 
    <p class="pe-text article-par-padding" v-html="text1" />
    <ArticleFigure :figure=letterGraph />

    <p class="pe-text article-par-padding" v-html="text2" /> 

    <h2 class="pe-text article-par-padding  blue-text" v-html="author_title" />
    <p class="pe-text article-par-padding" v-html="about_the_author" /> 

    <h2 class="pe-text article-par-padding  blue-text" v-html="edition_title" />
       <ArticleFigure :figure=book />

    <p class="pe-text article-par-padding" v-html="about_the_edition" /> 


    <h2 class="pe-text article-par-padding  blue-text" v-html="subtitle2" /> <br>
    <ol >
        <div v-for="(item,i) in this.excerpts" style="width:90%; margin: 0 auto;">
          <li class="pe-text article-par-padding" v-html=item /> 
        </div>
    </ol>

    <h2 class="pe-text article-par-padding  blue-text" v-html="interesting_words" /> <br>
    <ol>
      <div v-for="word in this.words">
        <li  class="pe-text article-par-padding "  v-html=word />
      </div>
    </ol>




    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import translations from  '../../../translations/articles/dangerousliaisons.js';


export default {
  name: 'DangerousLiaisons',
  components: {ArticleFigure},
  setup() {

  },
  methods: {
  },
  computed: { 
    title:              function()     { return translations["title"][this.$store.state.lang];},
    subtitle1:          function() { return translations["subtitle1"][this.$store.state.lang];},
    subtitle2:          function() { return translations["subtitle2"][this.$store.state.lang];},
    text1:              function()     { return translations["text1"][this.$store.state.lang];},
    text2:              function()     { return translations["text2"][this.$store.state.lang];},
    excerpts:           function()  { return translations["excerpts"][this.$store.state.lang];},
    words:              function()   { return translations["words"][this.$store.state.lang];},
    edition:            function()   { return translations["edition"][this.$store.state.lang];},
    interesting_words:  function(){ return translations["interesting_words"][this.$store.state.lang];},
    edition_title:      function(){ return translations["edition_title"][this.$store.state.lang];  },
    author_title:       function(){ return translations["author_title"][this.$store.state.lang]; },
    about_the_author:   function(){ return translations["about_the_author"][this.$store.state.lang]; },
    about_the_edition:  function(){ return translations["about_the_edition"][this.$store.state.lang]; }

  },
  data: () => ({
    letterGraph:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672587283/pedrofortunatoesteves-site/blog/books/ligacoesperigosas.drawio_djlsuw.png",
      "description": {
        "en" : "",
        "pt" : "Grafo das cartas trocadas no romance, não garanto que esteja completo. <br> \
           Acho que a influência da unidade curricular Análise e Síntese de Algoritmos (ASA) é evidente :) "
      }
    },
    book: {
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672587651/pedrofortunatoesteves-site/blog/books/20230101_135322_cl584b.jpg",
      "description": {
        "en": "",
        "pt" : "O livro que li."
      },
      "width": "80%"
    }
  }),
}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>