<template>
  <v-container >
    <div  class="article-div">

    <h1 class="article-title" v-html="title" /><br>
    <p class="pe-text article-par-padding" v-html="text" /> 
     <ArticleFigure :figure=goddard />
    <p class="pe-text " v-html="text2" /> 
    <ArticleFigure :figure=femmeMariee />
    <p class="pe-text " v-html="text3" /> 
    <ArticleFigure :figure=kleenex />
    <ArticleFigure :figure=ticket />


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import translations from  '../../../translations/articles/femmeMariee.js';

export default {
  name: 'UneFemmeMariee',
  components: {ArticleFigure},
  computed: { 
    title:       function() { return translations["title"][this.$store.state.lang];},
    text:       function() { return translations["text"][this.$store.state.lang]; },
    text2:       function() { return translations["text2"][this.$store.state.lang]; },
    text3:       function() { return translations["text3"][this.$store.state.lang]; },

  },
  data: () => ({
    dialog: false,
    femmeMariee: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673115388/pedrofortunatoesteves-site/blog/cinema/femmemariee/une_femme_mariee_iw5enr.webp",
        "description": {"pt": "Charlotte, a protagonista do filme ao lado de um incógnito ocultado por um livro."}
    },
    goddard: {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673115080/pedrofortunatoesteves-site/blog/cinema/femmemariee/20230106_210425_jb06er.jpg",
      "description": {"pt": "<span> Uma colecção de fotografias tiradas dos filmes do Jean-Luc Godard numa das paredes da bilheteira da Cinemateca para acompanhar o ciclo. </span>" }

    },
    ticket: {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673115081/pedrofortunatoesteves-site/blog/cinema/femmemariee/20230106_233459_bzlbaq.jpg",
      "description": {"pt": "O bilhete da Cinemateca custo 3,20 euros, enquanto no NIMAS custou 8 euros." }
    },
    kleenex: {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673118072/pedrofortunatoesteves-site/blog/cinema/femmemariee/une-femme-mariee_yimdjn.jpg",
      "description": {"pt": "A caixa da Kleenex, por baixo do 'rádio-televisão'." }
    }
    
  }),
}
</script>
<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";
</style>