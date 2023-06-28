<template>
  <div class="container" @mouseover="hoverCard" @mouseleave="unhoverCard" @click="handleCardClick">
    <br> 
    <div class="card"  ref="card">
      <div class="front" ref="frontElement">
        <v-img class="article-img rounded-border"
          :width="calculateImgWidth()"
          :src="figure.img"
          :style="loadingSpinner"
          @load="hideSpinner"
          ref="frontImage"
        />
      </div>
      <div class="back rounded-border" ref="backCard" >
        <div class="pe-text hidden-sm-and-down" style="width: 85%;">
          <i><h2  v-html="figure.quote[$store.state.lang]" /></i><br><br>
          <h3 style="width: 95%; text-align:right;" v-html="figure.writer"  /> 
        </div>
        <div class="pe-text hidden-md-and-up"  style="width: 85%;">
          <h1 class="pe-text" style="text-align:left" v-html="figure.mobileTitle[$store.state.lang]" />
          <p  class="pe-text" style="text-align:left" v-html="figure.mobileText[$store.state.lang]" />

        </div>
      </div>
    </div>
  </div>
  <br>
</template>

<script>
import { ref } from 'vue';
import loadingGif from '../assets/loading/loading.gif';

export default {
  name: 'RotatingCard',
  props: ['figure'],
  data() {
    return {
      loadingGif,
      loadingSpinner: { background: `url(${loadingGif}) center`, 'background-size': 'cover' },
      mobileCardFlipped: false
    };
  },
  mounted() {
    // Add a resize event listener
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
        //AVOID BUG: when the size of the screen changes, the cards must reset
          this.$refs.card.style.transform = 'rotateY(0deg)';
    
    },
    handleCardClick() {
      this.$refs.backCard.style.visibility = 'visible';
      if (window.matchMedia("(max-width: 767px)").matches) {
        
        if (this.mobileCardFlipped == false){
          this.$refs.card.style.transform = 'rotateY(180deg)';
        }
        else{
          this.$refs.card.style.transform = 'rotateY(0deg)';
        }
        this.mobileCardFlipped = ! this.mobileCardFlipped;
      }
    },

    calculateImgWidth() {
      return Object.keys(this.figure).includes('width') ? '50%' : undefined;
    },
    hideSpinner() {
      this.loadingSpinner = {};
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/images.scss';
@import '../styles/text.scss';

@media screen and (min-width: 640px) {
  .article-img {
    width: 65%;
  }
}

.card {
  margin: 0 auto;
  width: 400px;
  position: relative;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
  min-height: 400px;
  height: auto;

  @media screen and (max-width: 767px) {
    width: 300px;
    min-height: 300px;
  }
}

.front,
.back {
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}



.rounded-border {
  border-radius: 5%;
}

.front {
  z-index: 2;
  backface-visibility: hidden;
}

.back {
  background-color: blue;
  visibility: hidden;
  transform: rotateY(180deg);
  z-index: 1;
}



@media (min-width: 768px) {
  .container:hover .card {
    transform: rotateY(180deg);
  }
}


</style>