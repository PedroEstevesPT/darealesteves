<template>
  <v-container >
    <div  class="article-div">
        <h1 class="pe-text blue-text"> Museu da Misericórdia do Porto (MMIPO)</h1>

        No início de 2023 fui ao Porto e acabei por visitar este museu.

        Desconhecia que se no século XIX fosse um indíviduo com elevadas posses financeiras e se as resolvesse doar durante a minha vida
        ou através dum testamento à misericórdia ganhava o título de benfeitor e um retrato (e talvez até um busto) que me imortalizasse para as gerações vindouras.

        Da visita a este museu de todas as obras que vi destaco o da Josefa de Óbidos e o do Domingos Sequeira.


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

    
  })
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>