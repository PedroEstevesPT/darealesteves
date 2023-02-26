<template>
  <v-container >
    <div  class="article-div">
        <h1 class="pe-text blue-text"> Museu da Misericórdia do Porto (MMIPO)</h1>
        <br>
        <BreadCrumbs  :items="breadcrumbs" />

        <p class="pe-text">
        No início de 2023 fui ao Porto e acabei por visitar este museu.

        Desconhecia que se no século XIX fosse um indíviduo com elevadas posses financeiras e se as resolvesse doar durante a minha vida
        ou através dum testamento à misericórdia ganhava o título de benfeitor e um retrato (e quem diria, talvez até um busto) que me imortalizasse para as gerações vindouras.

        Da visita a este museu de todas as obras que vi destaco uma da Josefa de Óbidos e do Domingos Sequeira que estão exibidas em baixo.
        </p><br>  

        <h3 class="pe-text blue-text"> 
          Notas adicionais 
        </h3>

        <p class="pe-text"> 
          À semelhança da Casa Fernando Pessoa a visita começava no terceiro piso e terminava no primeiro. <br>
          O bilhete foi uma autêntica agiotagem: 10 euros (um dos bilhete de Museu mais caro que me lembro). 
        </p>

      <ArticleFigure :figure=josefaDeObidos />

      <p class="pe-text">
        Há qualquer coisa na palete de cores usada na pintura acima assim como no semblante das figuras que me transmite uma sensação positiva,
        quase como ouvir uma música numa tonalidade maior quando comparada a outras obras que também vi no Museu.
      </p>

      <ArticleFigure :figure=domingosSequeira />

      <p class="pe-text"> 
        Achei bastante piada a esta descrição da pintura do Domingos Sequeira que mostra o <i>cliché</i>
        do clássico artista incompreendido.
        <i>
          Domingos Sequeira ...em 1789 escreve a João Pinto da Silva, seu interlocutor na corte 
          portuguesa, informando-o da finalização desta cópia de Bartolomeo Schedoni para a oferecer à rainha D.Maria I. Tal não
          aconteceu por sugestão do embaixador D.João de Almeida que considerou o tema "pouco próprio". 
        </i>
      </p>

    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/Fablemans.js';

export default {
  name: 'MMIPO',
  components: {ArticleFigure,BreadCrumbs},
  computed: { 
   
  },
  data: () => ({
    breadcrumbs: [
      {"title":  {"en":'Blog' , "pt": "Blog"}, "path":"/blog"},
      {"title":  {"en":'Cinema', "pt": "Cinema"}, "path":"/blog/museums"},
      {"title":  {"en":'Museu da Misericórdia do Porto (MMIPO)', "pt": "Museu da Misericórdia do Porto (MMIPO)"}, "path":"/blog/cinema/mmipo"},
    ],
    salaDosBenfeitores: {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676984087/pedrofortunatoesteves-site/blog/museums/20230219_104422_ltrcuj.jpg",
        "description": {
          "pt": "Sala dos benfeitores quando se entra no MMIPO.",
          "en": "One of the first rooms of MMIPO, with portraits of people who donated/made contributions to Igreja da Misericórdia do Porto."
        }  
    },
    josefaDeObidos: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676984128/pedrofortunatoesteves-site/blog/museums/20230219_111147_reo6y6.jpg",
        "description": {
          "pt": "A Sagrada Família com São João Batista, Santa Isabel e Anjos por Josefa de Óbidos.",
          "en": "Holy Family with Saint John the Baptist, Saint Elizabeth and Angels by Josefa de Óbidos."
        }
    }, 
    domingosSequeira: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676984149/pedrofortunatoesteves-site/blog/museums/20230219_110947_bdg95w.jpg",
        "description": {
          "pt": "Santa Irene curando as feridas de S.Sebastião por Domingos Sequeira.",
          "en": "Saint Sebastian tended by Saint Irene por Domingos Sequeira."
        }
    }
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>