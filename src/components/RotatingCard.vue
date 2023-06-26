<template>
  <div class="container" @click="rotateCard">
    <br>
    <div class="card" :class="{ 'is-flipped': isFlipped }">
      <div class="front">
        <v-img class="article-img rounded-border"
          :width="calculateImgWidth()"
          :src="figure.img"
          :style="loadingSpinner"
          @load="hideSpinner"
          ref="frontImage"
        />
      </div>
      <div class="back rounded-border" ref="backCard">
        <div class="pe-text hidden-sm-and-down">
          <i>{{ figure.description[$store.state.lang] }}</i>
        </div>
        <div class="pe-text hidden-md-and-up">
          <h4>{{ figure.description[$store.state.lang] }}</h4>
        </div>
      </div>
    </div>
  </div>
  <br>
</template>

<script>
import loadingGif from '../assets/loading/loading.gif';

export default {
  name: 'RotatingCard',
  props: ['figure'],
  data() {
    return {
      loadingGif,
      loadingSpinner: { background: 'url(' + loadingGif + ') center', 'background-size': 'cover' },
      isFlipped: false,
      frontImageHeight: 0,
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

      const userAgent = navigator.userAgent.toLowerCase();
      if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent) == true){
        this.isFlipped = !this.isFlipped;
      }
    },
    setBackCardHeight() {
      if (this.$refs.frontImage && this.$refs.frontImage.$el) {
        this.frontImageHeight = this.$refs.frontImage.$el.offsetHeight;
      }
    },
  },
  watch: {
    isFlipped() {
      this.$nextTick(() => {
        if (this.isFlipped) {
          this.setBackCardHeight();
          this.$refs.frontImage.$el.style.display = 'none';
          
          this.$refs.backCard.style.height = this.frontImageHeight + 'px';
        } else {
          this.$refs.frontImage.$el.style.display = 'block';
          this.$refs.backCard.style.height = 'auto';
        }
      });
    },
  },
  mounted() {
    this.setBackCardHeight();
  },
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
  min-height: 400px; // Replace height with min-height
  height: auto; // Add this line to make the height adjust dynamically

  @media screen and (max-width: 767px) {
    /* Styles for screens smaller than 768px width */
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
  overflow: hidden; // Add this line to hide any content overflow
}

.card.is-flipped .front {
  transform: rotateY(180deg);
}

.card.is-flipped .back {
  transform: rotateY(0deg);
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