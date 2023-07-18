<template>
  <div class="container" @mouseover="hoverCard"  @click="handleCardClick">
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
        <div id="cardText"  class="pe-text" style="width: 85%;" >
          <div class=" hidden-sm-and-down">
            <i><h2  v-html="figure.quote[$store.state.lang]" /></i><br><br>
            <h3 style="width: 95%; text-align:right;" v-html="figure.writer"  /> 
          </div> 
          <div class="hidden-md-and-up"  style="text-align:left;" > 
            <router-link  :to="figure.route" style="color: inherit;" >
                <h1 v-html="figure.mobileTitle[$store.state.lang]" />
            </router-link>
            <p  v-html="figure.mobileText[$store.state.lang]" />
          </div> 
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
    setTimeout(() => {
          this.$refs.backCard.style.visibility = 'visible';
    }, 1300); 

  },
  methods: {
  handleResize() {
    if (window.innerWidth > 767) {
      // Reset the component if switching from mobile to desktop
      this.mobileCardFlipped = false;
      this.$refs.card.style.transform = null;
    }
  },
handleCardClick() {
  if (window.innerWidth <= 767) {
    if (this.mobileCardFlipped === false) {
      this.$refs.card.style.transform = 'rotateY(180deg)';
    } else {
      this.$refs.card.style.transform = 'rotateY(0deg)';
    }
    this.mobileCardFlipped = !this.mobileCardFlipped;
  } else {
    // Reset the component if switching from mobile to desktop
    this.mobileCardFlipped = false;
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

  @media screen and (max-width: 1267px) {
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

#cardText {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  animation: fadeOut 0.3s ease-in-out forwards;
  animation-delay: 0.5s; /* Added delay of 0.5 seconds */
}

.container:hover #cardText {
  opacity: 1;
  animation: none;
}

@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

}

</style>