<template>

  <!-- Article figure 
  Followed:
  https://medium.com/@simply_stef/tutorial-css-animation-rotating-cards-a2943d01861e


  -->
  <div class="container"> 
    <br>
       <div class="card">
            <v-img class="article-img front" 
              :width="this.calculateImgWidth()" 
              :src="figure.img" 
              :style="loadingSpinner"  
              @load="this.hideSpinner()"  
            />
           <div class="back"  ref="backRef" id="back">
              <div  class="pe-text">
                {{this.figure.description[this.$store.state.lang]}}
              </div>
           </div >
       </div>
  </div>
    <!-- this css is needed to center and align on left; 
    <p  style="justify-content: center; text-align:left; display: grid;" class="pe-text figure-description" v-html=figure.description[this.$store.state.lang] />
  
  -->
  <br>

</template>
<script>
import loadingGif  from '../assets/loading/loading.gif';

/*
The calculcateImgWidth is for the screenshot of the book Ligacoes perigosas, so that it does not take too much step.
*/

export default {
  name: 'RotatingArticleFigure',
  props: ["figure"],
  data() {
    return {
      loadingGif,
      loadingSpinner: { background: "url(" + loadingGif + ") center" , 'background-size' : 'cover' }
    };
  },
  methods: {   
    calculateImgWidth() { 
      if (Object.keys(this.figure).includes("width")){
        return "50%";
      }
    },
    async hideSpinner(){
      /*Removes spinner once the img has finished loading */
      this.loadingSpinner = {}
      const backRef = this.$refs.backRef;
    }
  }
};
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";


@media screen and (min-width: 640px) {
  .article-img{
    width: 65%;
  }
}

body{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
}


.card{
  height: 430px;
  width: 350px;
  position: relative;
  transition: all 1s linear;
  transform-style: preserve-3d;
}

.front,
.back{
  background-color: blue;
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-family: 'Lobster', cursive;
  border-radius: 10px;
  position: absolute;
}

.front{
  z-index: 2;
  backface-visibility: hidden;
}

.back{
  transform: rotateY(180deg);
  backface-visibility: hidden;
  z-index: 1;
}

.container:hover .card{
  transform: rotateY(180deg);
}

</style>
