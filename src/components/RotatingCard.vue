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
      <div class="back rounded-border">
        <div class="pe-text hidden-sm-and-down">
          <i>{{ figure.description[$store.state.lang] }}</i>
        </div>
        <div class="pe-text hidden-md-and-up"  ref="backElement">
          <h4>{{ figure.description[$store.state.lang] }}</h4>
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
  transform: rotateY(180deg);
  z-index: 1;
}



@media (min-width: 768px) {
  .container:hover .card {
    transform: rotateY(180deg);
  }
}


</style>