<template>
  <div class="container" @click="rotateCard">
    <br>
    <div class="card"  :class="{ 'is-flipped': isFlipped }">
      <div class="front">
        <v-img class="article-img rounded-border" 
          :width="calculateImgWidth()" 
          :src="figure.img" 
          :style="loadingSpinner" 
          @load="hideSpinner" />
      </div>
      <div class="back rounded-border" >
        <div class="pe-text">
          {{ figure.description[$store.state.lang] }}
        </div>
      </div>
    </div>
  </div>
  <br>
</template>

<script>
import loadingGif from '../assets/loading/loading.gif';

export default {
  name: 'RotatingArticleFigure',
  props: ['figure'],
  data() {
    return {
      loadingGif,
      loadingSpinner: { background: 'url(' + loadingGif + ') center', 'background-size': 'cover' },
      isFlipped: false
    };
  },
  methods: {
    calculateImgWidth() {
      if (Object.keys(this.figure).includes('width')) {
        return '50%';
      }
    },
    async hideSpinner() {
      /* Removes spinner once the img has finished loading */
      this.loadingSpinner = {};
    },
    rotateCard() {
      this.isFlipped = !this.isFlipped;
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
  margin: 0 auto; //center;
  height: 430px;
  width: 350px;
  position: relative;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
}

.front,
.back {
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  position: absolute;
}

.rounded-border{
  border-radius: 5%;
}

.front {
  z-index: 2;
  backface-visibility: hidden;
}

.back {
  background-color: blue;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  z-index: 1;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

@media (min-width: 768px) {
  .container:hover .card {
    transform: rotateY(180deg);
  }
}

@media (max-width: 768px) {
  .card:active {
    transform: rotateY(180deg);
  }
}
</style>