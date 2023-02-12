<template>
  <v-container >
    <div  class="article-div">

    <h1 class="article-title" v-html="title" /><br>

    <p>
        Achei o filme do Spielberg muito giro, passasse nos 50 e os inícios dos anos 60 nos Estados Unidos e foca-se na vida de uma criança/adolescente que vai desenvolvendo a sua vocação sobre o cinema.
        Gostei muito da caracterização da época: o guarda-roupa, automóveis, música estavam no ponto.   <br>           
        Sempre gostei muito desta estética americana e o filme capturou-a muito bem.

        Percebe-se durante o filme que o Spielberg utiliza certos episódios como referência ao filmes da sua obra como:
        <li>Jaws </li>
        <li> Resgate do soldado Ryan </li>

        Por momentos pensei que o filme tinha referências ao American Grafitti, e achei que à semelhança dos filmes mencionados acima, esta era outra referência à
        obra do Spielberg, mas depois de fazer gum <i>fact checking</i> após o filme confirmei que o American Grafitti era do George Lucas.

        Takeaways do filme:
        <li> Ver se o John Ford fez filmes bacanos sem serem de cowboys. </li>
        <li> Ver o filme 'The Greatest Show on Earth (1952)' </li>


        <b>Outras notas: </b> 
        <li> O bilhete custou 5 euros e 90 no Allegro. </li>


    </p>


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import translations from  '../../../translations/articles/Fablemans.js';

export default {
  name: 'UneFemmeMariee',
  components: {ArticleFigure},
  computed: { 
    title:       function() { return translations["title"][this.$store.state.lang];},
    text:        function() { return translations["text"][this.$store.state.lang]; },
    text2:       function() { return translations["text2"][this.$store.state.lang]; },
    text3:       function() { return translations["text3"][this.$store.state.lang]; }
  },
  data: () => ({

    
  }),
}
</script>
<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";
</style>