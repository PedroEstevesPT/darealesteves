<template>
  <v-container >
  
    <h1 class="pe-text blue-text"> Cookies </h1>

    <BreadCrumbs  :items="breadcrumbs" />


    <h2 class="pe-text blue-text"> 
        What are cookies ?

    </h2>



  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from '../../../components/BreadCrumbs.vue';

export default {
  name: 'Cookies',
  components: {ArticleFigure,BreadCrumbs},
  data: () => ({
    breadcrumbs: [
      {"title": {"en":'Blog' ,  "pt": "Blog"},   "path":"/blog"},
      {"title": {"en":'Tech',   "pt": "Tech"},   "path":"/blog/tech"},
      {"title": {"en":'Cookies', "pt": "Cookies"}, "path":"/blog/tech/cookies"}
    ]})
}
</script>
<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";
</style>