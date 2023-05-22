<template>
  <v-container >
    <div  class="article-div">
        <h1 class="pe-text blue-text"> Apocalypse Now Redux </h1>
        <BreadCrumbs class="pe-text"  :items="breadcrumbs" />
  
        <ArticleFigure :figure=apocalypseNow />

        <p class="pe-text">
          Em Fevereiro fui à Cinemateca rever o Apocalypse Now, versão Redux.

          Aqui ficam alguns takeways desta revisão: <br><br>

          <li>
            A fila para a sala parecia a fila para ir tomar a hóstia.
            Não me lembro de ver uma fila tão grande para entrar numa sala de cinema.
          </li>
          <li>
            O protagonista, o capitão Willard é muito parecido com o Travis Bickle do <i>Taxi Driver</i>,
            na medida em que ambos são 2 homens de meia idade a lutarem para ter um objetivo na vida. Enquanto o objetivo do Willard
            é lhe dado pelos seus superiores militares (assassinar o Coronel Kurtz) o do Travis vai alternando ao longo do filme: ou é ter uma relação amorosa com a Betsy, ou matar o Pallantine
            ou salvar a Iris.
          </li>
          <li>
          A canção 'The End' dos The Doors que aparece tão iconicamente no início do filme parece que na verdade influenciou mesmo todo o guião.
          Por exemplo, a estrofe abaixo: <br>

          <i class="blue-text" style="margin:0 auto; text-align: center;"> <br>
            <span> Lost in a Roman wilderness of pain <br></span>
            <span> And all the children are insane<br></span>
            <span> All the children are insane <br></span>
            <span> Waiting for the summer rain  <br></span>
          </i> <br>

          Este fragmento da letra parece que inspirou a cena da comunidade no meio da selva onde o Coronel Kurtz é adorado e as crianças parecem ser uma referência direta
          às do filme, nomeadamente quando o Willard está preso e elas vão observá-lo com curiosidade. <br>

          <br> Outro exemplo: <br>

          <i class="blue-text" style="margin:0 auto; text-align: center;"> <br>
            <span> The snake is long<br></span>
            <span> Seven miles<br></span>
            <span> Ride the snake <br></span>
            <span> He's old <br></span>
            <span> And his skin is cold<br></span>
            <span> The West is the best<br></span>
            <span> The West is the best <br></span>
            <span> Get here and we'll do the rest <br></span>
            <span> The blue bus is calling us <br></span>
            <span> The blue bus is calling us <br></span>
            <span> Driver, where are you taking us? <br></span>

          </i> <br>

          A letra acima parece estar a referir-se ao percurso no rio que o Willard faz com o seu batalhão até chegar
          à comunidade onde tem de assassinar o Coronel Kurtz, a 'Snake' refere-se ao fictício rio <i>Nung</i>. 
          Apenas o Willard sabe a razão pela qual estão a fazer
          essa viagem e apesar de não ser ele a guiar o barco, esta linha não faz menos sentido: 
          <b> 'Driver, where are you taking us?' </b> (Pode ser interpretada como uma interrogação pelos restantes membros do batalhão que vão na missão mas desconhecem o objetivo)

          </li>
          <br>
          E por fim o trecho abaixo está em linha com o assassinato do Coronel:
          <br>

          <i class="blue-text" style="margin:0 auto; text-align: center;"> <br>
            <span> The killer awoke before dawn<br></span>
            <span> He put his boots on<br></span>
            <span> He took a face from the ancient gallery <br></span>
            <span> And he walked on down the hall  <br></span>
          </i> <br>
    
          <li>
            Nota-se que a parte final do filme (a partir do momento que chegam à comunidade do coronel) foi completamente rushed.
            É impossível esconder, o desenvolvimento da narrativa é super acelerado nos últimos minutos do filme.
            A meu ver, este é o pecado principal deste filme.
          </li>

        </p>
    
    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/fablemans.js';

export default {
  name: 'Apocalypse Now - Redux',
  components: {ArticleFigure,BreadCrumbs},
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"},       "path":"/blog"},
      {"title": {"en": "Movies", "pt": "Filmes"},    "path":"/blog/cinema"},
      {"title": {"en": "Apocalypse Now Redux", "pt": "Apocalypse Now Redux"}, "path":"/blog/movies/ApocalypseNow"},
    ],
    apocalypseNow: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677381813/pedrofortunatoesteves-site/blog/museums/apocalypseNowRedux_inksmh.webp",
        "description": {
          "pt": "Captain Benjamin Willard (representado por Martin Sheen).",
          "en": "Captain Benjamin Willard (representado por Martin Sheen)."
        }
    }
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>