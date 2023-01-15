<template>
  <v-container >
    <div  class="article-div">

    <p>
        Achei o filme muito giro, os anos 50 e os inícios dos anos 60 nos Estados Unidos tinham uma estética bestial.
        O guarda-roupa, os carros, a música, fenomenal.

        Percebe-se durante o filme que o Spielberg utiliza certos episódios como referência ao filmes da sua obra como:
        <li>Jaws </li>
        <li> Resgate do soldado Ryan </li>

        Por momentos pensei que o filme tinha referências ao American Grafitti, e achei que como os outros filmes mencionados acima, esta era outra referência à
        obra do Spielberg, mas depois de fazer algum fact check após o filme confirmei que o American Grafitti era do George Lucas.

        Takeaways do filme:
        <li> Ver se o John Ford fez filmes bacanos sem serem de cowboys. </li>
        <li> Ver o filme 'The Greatest Show on Earth (1952)' </li>


        Outras notas: 
        <li> O bilhete custou 5 euros e 90. </li>


    </p>


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