<template>
  <v-container >
    <div  class="article-div">
      <h1 class="pe-text blue-text"> Concerto da Páscoa 2023 - Requiem de Mozart</h1>

      <BreadCrumbs  :items="breadcrumbs" />
      <br>

      <p class="pe-text">
        No dia 6 de Abril de 2023 fui ao CCB ouvir o Concerto da Páscoa - Requiem do Mozart. 
        O bilhete para a plateia originalmente custava 35 euros mas acabei por pagar apenas 24.50 devido a um desconto
        (penso que por ser jovem, ao rever a fatura não especifica). <br>
        Gostei muito, as peças que já conhecia foram bastante bem executadas tendo em conta as referências que tinha (de escutar na Internet).
        O único detalhe que notei foi que as vozes masculinas do coro ouviam-se menos que as femininas.
      </p>

      <ArticleFigure :figure=concert1 />
      <ArticleFigure :figure=concert2 />

      <p class="pe-text">
        Também durante este período umas pessoas muito próximas de mim :) foram à Áustria coincidentemente e trouxeram-me uns doces
        muito giros: "Mozart Herzen" da "Confiserie Heindl". Mais do que o sabor dos doces achei a apresentação fantástica: A caixa, o retrato
        do Mozart, o design é lindíssimo. E para além dos bonbons uma das embalagens também trazia um licor de café com uma garrafa em forma de violino
        com "Nannerl - Salzburg" estampado no corpo do instrumento (Nannerl é alcunha da irmã de Mozart).
      </p>

      <ArticleFigure :figure=mozartsweets1 />
      <ArticleFigure :figure=mozartsweets2 />

    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';

export default {
  name: 'Easter Concert 2023',
  components: {ArticleFigure,BreadCrumbs},
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"},       "path":"/blog"},
      {"title": {"en": "Culture", "pt": "Cultura"},    "path":"/blog/culture"},
      {"title": { "pt": "Concerto da Páscoa 2023 - Requiem de Mozart"}, "path":"/blog/culture/easterconcert2023"},
    ],
    concert1: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682356089/pedrofortunatoesteves-site/blog/museums/IMG-20230406-WA0006_nlox4l.jpg",
        "description": {
          "pt": "O Grande Auditório do CCB momentos antes do concerto."
        }
    },
    concert2: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682356089/pedrofortunatoesteves-site/blog/museums/IMG-20230406-WA0004_yafvqm.jpg",
        "description": {
          "pt": "Penso que nunca tive lugares tão bons para assistir ao concerto, estavam literalmente na primeira fila.",
        }
    },
    mozartsweets1: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682356564/pedrofortunatoesteves-site/blog/museums/20230410_214951_vq5pi6.jpg",
        "description": {
          "pt": "Caixa de bonbons 'Original Mozart Herzen' da confeitaria Heindl. Devorei-os num instante.",
        }
    },
    mozartsweets2: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682356538/pedrofortunatoesteves-site/blog/museums/mozart_chocolates_vul1sq.png",
        "description": {
          "pt": "A garrafinha de licor de café 'Nannerl' e os bonbons do Mozart."
        }
    }


    
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>