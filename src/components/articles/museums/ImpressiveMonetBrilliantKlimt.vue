<template>
  <v-container >
    <div  class="article-div">
      <h1 class="pe-text blue-text"> Impressive MONET & Brilliant KLIMT</h1>
      <BreadCrumbs  :items="breadcrumbs" /> <br>

      <p class="pe-text"> 
        Durante o processo de procura para fazer algo durante a última hora nesta minha visita ao Porto chamou-me à atenção um cartaz com uns
        grafismos muito apelativos chamado 'Impressive MONET & Brilliant KLIMT'.
      </p><br>

      <p class="pe-text">
        Apesar do bilhete ser extremamente caro: 11 euros, fui e durante os primeiros minutos foi incrível, a musica clássica
        do Chopin e Beethoven a dar no background e as projecções destes 2 pintores a aparecerem/desaparecerem dá uma sensação positiva muito gira.
        <br><br>

        Mas depois, acaba-se por cair na real, são só projecções, that´s it.

        A experiência deve ter durado meia hora, ou seja a nível de entretenimento pelo valor pago não foi um ratio muito bom.
        Em contrapatida destaco o factor de novidade e realmente saio desta visita a achar que existe muito espaço e oportunidades hoje, na segunda
        década do século XXI para mudar a nossa experiência nos museus, apesar deste desfile de projecções não ser um museu.
      </p>

      <ArticleFigure :figure=entrance />
      <ArticleFigure :figure=example1 />
      <ArticleFigure :figure=example2 />
      <ArticleFigure :figure=example3 />


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
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"},       "path":"/blog"},
      {"title": {"en": "Museums", "pt": "Museus"},    "path":"/blog/museums"},
      {"title": {"en": "Impressive MONET & Brilliant KLIMT", "pt": "Impressive MONET & Brilliant KLIMT"}, "path":"/blog/movies/impressivemonetbrilliantklimt"},
    ],
    entrance: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676983987/pedrofortunatoesteves-site/blog/museums/20230219_115934_rnwkpd.jpg",
        "description": {
          "pt": "Entrada para 'Impressive Monet & Brilliant Klimt' ",
          "en": "Entrance for 'Impressive Monet & Brilliant Klimt'"
        }
    },
    example1: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676983928/pedrofortunatoesteves-site/blog/museums/20230219_121021_jktghg.jpg",
        "description": {
          "pt": "Fotografia tirada durante a experiência.",
          "en": "Photography taken from the exhibition."
        }
    },
    example2: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381043/pedrofortunatoesteves-site/blog/museums/20230219_120958_l76ld7.jpg",
        "description": {
          "pt": "Fotografia tirada durante a experiência.",
          "en": "Photography taken from the exhibition."
        }
    },
    example3: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381170/pedrofortunatoesteves-site/blog/museums/20230219_120947_squ5ck.jpg",
        "description": {
          "pt": "Fotografia tirada durante a experiência.",
          "en": "Photography taken from the exhibition."
        }
    }
    
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>