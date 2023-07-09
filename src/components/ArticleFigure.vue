<template>

  <!-- Article figure -->
  <div align="center" class="article-par-padding"> 
    <v-col xl="8" lg="11">
    <v-img class="article-img" :width="this.calculateImgWidth()" :src="figure.img" :style="loadingSpinner"  @load="this.hideSpinner()"  />
    <!-- this css is needed to center and align on left; -->
    <br>
    <p  style="justify-content: center; text-align:left; display: grid;" class="pe-text figure-description" v-html=figure.description[this.$store.state.lang] />
    </v-col>
  </div><br>

</template>
<script>
import loadingGif  from '../assets/loading/loading.gif';

/*
The calculateImgWidth is for the screenshot of the book Ligacoes perigosas, so that it does not take too much step.
*/

export default {
  name: 'ArticleFigure',
  props: ["figure"],
  methods: {   
    calculateImgWidth() {
      if (this.figure && this.figure.width) {
        return this.figure.width + '%'; // Use the passed width
      } else {

        return '100%'; // Default width value if nothing is passed
      }
    },
    hideSpinner(){
      /*Removes spinner once the img has finished loading */
      this.loadingSpinner = {}
    }
  },
  data() {
    return {
      loadingGif,
      loadingSpinner: { background: "url(" + loadingGif + ") center" , 'background-size' : 'cover' }
    };
  }
};
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";

.article-img{
  border-radius: 5%;
}

.figure-description{
  width:100%;
}

@media screen and (min-width: 640px) {
    .article-img{
      width: 65%;
    }



}



</style>
