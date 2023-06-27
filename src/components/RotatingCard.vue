<template>
  <div class="container" @click="rotateCardDesktop" @mouseover="hoverCard" @mouseleave="unhoverCard">
    <br>
    <div class="card" :class="{ 'is-flipped': isFlipped && isMobileDevice }">
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
        <div class="pe-text hidden-md-and-up">
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
      isFlipped: false,
      isHovered: false,
      frontElement: null,
    };
  },
  methods: {
    calculateImgWidth() {
      return Object.keys(this.figure).includes('width') ? '50%' : undefined;
    },
    hideSpinner() {
      this.loadingSpinner = {};
    },
rotateCardDesktop() {
  if (!this.isHovered) {
    if (this.isMobileDevice) {
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped && this.frontElement) {
        setTimeout(() => {
          if (this.frontElement) {
            this.frontElement.style.transform = 'rotateY(180deg)';
          }
        }, 10);
      }
    } else {
      this.isFlipped = !this.isFlipped;
    }
  }
},
    hoverCard() {
      if (!this.isMobileDevice) {
        this.isHovered = true;
      }
    },
    unhoverCard() {
      if (!this.isMobileDevice) {
        this.isHovered = false;
      }
    },
  },
  computed: {
    isMobileDevice() {
      return window.innerWidth < 768;
    },
  },
  mounted() {
    this.frontElement = this.$refs.frontElement;
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setBackCardHeight);
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