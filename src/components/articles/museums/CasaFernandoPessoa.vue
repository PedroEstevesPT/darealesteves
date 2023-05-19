<template>
  <v-container >
    <div  class="article-div">
      <h1 class="pe-text blue-text"> Casa Fernando Pessoa</h1>
      <BreadCrumbs  :items="breadcrumbs" />
      <br> 

      <p class="pe-text"> 
        O bilhete custa 5 euros, a visita do museu começa no terceiro andar. <br>
        Das coisas a destacar é o ambiente da primeira sala: as paredes pintadas de preto e a baixa iluminação convida
        à introspecção, processo que tantas vezes o Pessoa faz na sua obra e sente-se que ouve um cuidado na forma como o 
        Museu foi construído para tentar envolver-nos num imaginário como se estivessemos dentro das obras/cabeça do Pessoa.
      </p>

      <p class="pe-text">
        Uma descoberta interessante que fiz nesta ida ao museu foi que o Pessoa em 1907, começou a fazer regularmente exercícios
        de ginástica respiratória por indicação do médico Egas Moniz, que havia de ser distinguido com o Nobel da medicina em 1949.
      </p>

      <ArticleFigure :figure=entrada />
      <ArticleFigure :figure=heteronimos />
      <ArticleFigure :figure=dashboards />

      <p class="pe-text"> 
        Eu achava que ia para lá descobrir novos heterónimos mas enganei-me, isto é um dos perigos de ter expetativas na vida.
        (Ou não temos ou devemos ter as piores possíveis).
        Heterónimos só existem o Alberto Caeiro, o Álvaro Campos, o Ricardo Reis e o semi-heterónimo Bernardo Soares, não há outros,
        o mais próximo que irás encontrar são as personagens do Dashboard acima.
      </p>


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';

export default {
  name: 'CasaFernandoPessoa',
  components: {ArticleFigure,BreadCrumbs},

  data: () => ({
    breadcrumbs: [
      {"title":  {"en":'Blog' , "pt": "Blog"}, "path":"/blog"},
      {"title":  {"en":'Museums', "pt": "Museus"}, "path":"/blog/museums"},
      {"title":  {"en":'Casa Fernando Pessoa', "pt": "Casa Fernando Pessoa"}, "path":"/blog/museums/casafernandopessoa"},
    ],
    entrada: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676984159/pedrofortunatoesteves-site/blog/museums/20230204_134438_w6wwhp.jpg",
        "description": {
          "pt": "A primeira sala (terceiro piso).",
          "en": "The first room (3rd floor)."
        }
    },
    heteronimos: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676984170/pedrofortunatoesteves-site/blog/museums/20230204_142008_afafme.jpg",
        "description": {
          "pt": "Fernando e os seus heterónimos (e a sala com fraca iluminação).",
          "en": "Fernando and his heteronyms."
        }
    },
    dashboards: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676984180/pedrofortunatoesteves-site/blog/museums/20230204_144826_yrdx7z.jpg",
        "description": {
          "pt": "As personagens criadas por Fernando Pessoa (e a sala com fraca iluminação).",
          "en": "The characters created by Fernando Pessoa."
        }
    }

  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>