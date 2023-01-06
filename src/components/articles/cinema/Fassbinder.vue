<template>
  <v-container >
  <div  class="article-div">

    <h1 v-html="title" /><br>
    <ArticleFigure :figure=rainer />

    <p class="pe-text" v-html="intro" />
    <ArticleFigure :figure=cinema  />
    <p class="pe-text article-par-padding" v-html="first_text" />
    <p class="pe-text article-par-padding" v-html="second_text" />
    <ArticleFigure :figure=ali  />
    <p class="pe-text article-par-padding" v-html="third_text" /> 
    <ArticleFigure :figure=schygulla  />
    <p class="pe-text article-par-padding" v-html="fourth_text" />

    <div  style= "margin: 0 auto;text-align:center;">
    
    <i><br>"Yes, I seem to be, what I'm not you see <br>
      And I'm wearing my heart like a crown <br>
      Pretending that you're still around".</i>
    </div>
    </div>
  </v-container>
</template>
<script>


import ArticleFigure from '../../../components/ArticleFigure.vue';
import translations from  '../../../translations/articles/fassbinder.js';


export default {
  name: 'Fassbinder',
  components: {ArticleFigure},
  setup() {
  },
  mounted(){
  },
  methods: {
  },
  computed: { 
    title:       function() { return translations["title"][this.$store.state.lang];},
    intro:       function() { return translations["intro"][this.$store.state.lang]; },
    first_text:  function() { return translations["first_text"][this.$store.state.lang]; },
    second_text: function() { return translations["second_text"][this.$store.state.lang]; },
    third_text: function() { return translations["third_text"][this.$store.state.lang]; },
    fourth_text: function() { return translations["fourth_text"][this.$store.state.lang]; }
  },
  data: () => ({
    dialog: false,
    rainer: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672001554/pedrofortunatoesteves-site/blog/cinema/fassbinder/1_naooup.jpg",
        "description": {"pt": "Der mann, Rainer Werner Fassbinder (1945-1982)" }
    },
    cinema: {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672001555/pedrofortunatoesteves-site/blog/cinema/fassbinder/0_vu7vyl.jpg",
      "description": {"pt": "          O <b>NIMAS</b>: é uma grande experiência ir à última sessão do dia absover uma obra-prima do século passado. <br> \
          Já não é tão giro pagar 8 euros, mas já cantava o Chuck Berry: c´est la vie. " }

    },
    ali: {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672001554/pedrofortunatoesteves-site/blog/cinema/fassbinder/2_dfwhce.jpg",
      "description": {"pt": "Cartaz do <b>Angst essen Seele auf</b>, em inglês: <b> Ali: Fear Eats the Soul (1974) </b> <br> \
        Pronto já fizeste a tua lição do Duolingo hoje :) " }
    },
    schygulla: {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672001554/pedrofortunatoesteves-site/blog/cinema/fassbinder/3_o4y9q7.webp",
      "description": {"pt": "Hanna Schygulla em <b>The Marriage of Maria Braun (1979)" }
    }
  }),
}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>