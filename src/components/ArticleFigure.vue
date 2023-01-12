<template>

  <!-- Article figure -->
  <div align="center" class="article-par-padding"> 
    <v-img class="article-img" :width="this.calculateImgWidth()" :style="loading" :src="figure.img"  />

    <!-- this css is needed to center and align on left; -->
    <p  style="justify-content: center; text-align:left; display: grid;" class="pe-text figure-description" v-html=figure.description[this.$store.state.lang] />
  </div><br>

</template>
<script>
import loadingGif  from '../assets/loading/loading.gif';

/*
The calculcateImgWidth is for the screenshot of the book Ligacoes perigosas, so that it does not take too much step.
*/

export default {
  name: 'ArticleFigure',
  props: ["figure"],
  methods: {   
    calculateImgWidth() { 

      if (Object.keys(this.figure).includes("width")){
        return "50%";
      }
    } 
  },
  data() {
    return {
      loadingGif,
      img_width: "100%",
      loading: { background: "url(" + loadingGif + ") center" , 'background-size' : 'cover' }
    };
  }
};
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";

.article-img{
  border-radius: 5%;
  width:95%;
}

.figure-description{
  width:100%;
}

@media screen and (min-width: 640px) {
    .article-img{
      width: 65%;
    }

  .figure-description{
    width:65%;
  } 

}



</style>
