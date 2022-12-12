<template>

    <!-- 1ST ROW SANTIAGO E BIO TESTAR IMAGENS -->
    <!--
      fluid - Makes the container occupy all wdith of screen
    -->
    <v-container  fluid >
<br>
    <!-- os 80vh sao uma fix nojenta so para desktop -->
    <v-layout class="professional-1st-div"> 

      <v-row class="text-center column wrap fill-height" align="center" justify="center"  >    
        <v-col :class="{ leftSlide: initialLoad }" cols="12"  xl="3" lg="4"  md="3" sm="12" >
            <v-img :src="pedro" class="profileImg" contain dense/>
            <span  class="white pe-text"  > {{text_img_description}}</span>
        </v-col>
        <v-col  :class="{ rightSlide: initialLoad }"  cols="12"  xl="7" lg="7"  md="7" sm="12"> 
            <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph" v-html="text_aboutme_title"/> 
            <div>
             <br><br> <p align="left" class="pe-text" style="font-size:110%;" v-html="text_aboutme_paragraph"/>
            </div>
        </v-col>
      </v-row>
      </v-layout> 
    </v-container>
</template>
<script>

import pedro       from   '../assets/landing/pedro.jpg';
import junitec     from   '../assets/landing/exp/junitec.png';
import microsoft   from   '../assets/landing/exp/ms.png';
import insta     from     '../assets/icons/instagram.png';
import linkedin  from     '../assets/icons/linkedin.png';
import yt        from     '../assets/icons/youtube.png';
import syone       from   '../assets/landing/exp/syone.jpg';
import trash4goods from   '../assets/landing/exp/trash4goods.png';
import NewsCard from      '../components/NewsCard.vue';


import translations from  '../translations/aboutme.js';
import aux from         '../aux.js'



export default {
  name: 'Pr',
  components: {NewsCard},
  created(){
    this.initialLoad = true;
  },
  mounted(){
    console.log("imprimi no body",this.$store.state.bodyHeight);
  },
  setup() {

  },
  computed: { 
    text_aboutme_paragraph:  function() { return translations["presentation_par"][this.$store.state.lang]; } ,
    text_aboutme_title:      function() { return translations["presentation_tit"][this.$store.state.lang]; },
    text_aboutme_experience: function() { return translations["professional_experience"][this.$store.state.lang]; },
    text_find_me_online:     function() { return translations["find_me_online"][this.$store.state.lang]; },
    text_img_description:    function() { return translations["img_description"][this.$store.state.lang]; }
  },
  data: () => ({
        name: 'AboutMe',
        initialLoad: false,
        dialog: false,
        show: true,
        pedro
  }),
  methods: {
  }
}
</script>

<style lang="scss" scoped>

  @import  "../styles/animation.scss";
  @import  "../styles/images.scss";
  @import  "../styles/text.scss";

</style>