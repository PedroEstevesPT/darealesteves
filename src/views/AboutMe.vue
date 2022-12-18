<template>

    <!-- 1ST ROW SANTIAGO E BIO TESTAR IMAGENS -->
    <!--
      fluid - Makes the container occupy all wdith of screen
    -->
    <v-container  fluid >


    <!-- About me desktop -->
    <v-layout class="about-1st-div hidden-sm-and-down" :style="{ height: firstSectionHeight}"> 
      <v-row class="text-center column wrap fill-height" align="center" justify="center"  >    
        <v-col :class="{ leftSlide: initialLoad }" cols="12"  xl="3" lg="3"  md="3" sm="12" >
            <v-img :src="pedro" class="profileImg" contain dense/>
            <span  class="white pe-text"  > {{text_img_description}}</span>
        </v-col>
        <v-col  :class="{ rightSlide: initialLoad }"  cols="12"  xl="7" lg="8"  md="7" sm="12"> 
            <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_aboutme_title"/> 
            <div>
             <br> <p align="left" class="pe-text" style="font-size:110%;" v-html="text_aboutme_paragraph"/>
            </div>
        </v-col>
      </v-row>
      </v-layout> 

    <!--About me mobile -->
    <v-layout class="about-1st-div hidden-md-and-up"> 
      <v-row class="text-center column wrap fill-height" align="center" justify="center"  >    
        <v-col :class="{ leftSlide: initialLoad }" cols="12"  xl="3" lg="3"  md="3" sm="12" >
            <v-img :src="pedro" class="profileImg" contain dense/>
            <span  class="white pe-text"  > {{text_img_description}}</span>
        </v-col>
        <v-col  :class="{ rightSlide: initialLoad }"  cols="12"  xl="7" lg="8"  md="7" sm="12"> 
            <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph" v-html="text_aboutme_title"/> 
            <div>
              <p align="left" class="pe-text" style="font-size:110%;" v-html="text_aboutme_paragraph"/>
            </div>
        </v-col>
      </v-row>
      </v-layout> 



      <!-- Why does this site exist -->
      <v-layout style="background-color: pink;">
        <v-row class="text-center column wrap fill-height" align="center" justify="center"  >    
          <v-col  :class="{ rightSlide: initialLoad }"  cols="12"  xl="7" lg="7"  md="7" sm="12"> 
          <h1 class="pe-text blue-text"  v-html="text_title_why_this_site"/> 

          <p align="left" class="pe-text" v-html="text_par_why_this_site" />
          </v-col>
        </v-row>
      </v-layout>
      


    <!-- Professional -->
    <v-layout class="about-1st-div subsection">
      <v-row class="text-center column wrap fill-height" align="center" justify="center"  >    
        <v-col  :class="{ rightSlide: initialLoad }"  cols="12"  xl="7" lg="7"  md="7" sm="12"> 
            <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_title_professional_section"/> 
            <div>
             <br><br> <p align="left" class="pe-text" style="font-size:110%;" v-html="text_par_professional_section"/>
            </div>
        </v-col>
        <v-col :class="{ leftSlide: initialLoad }" cols="12"  xl="3" lg="4"  md="3" sm="12" >
            <v-img :src="pedro" class="profileImg" contain dense/>
            <span  class="white pe-text"  > Consulta a secção profissional</span>
        </v-col>
      </v-row>
      </v-layout> 



    <!-- Blog -->
    <v-layout class="about-1st-div subsection" >
        <v-row class="text-center column wrap fill-height" align="center" justify="center"  >    
               <v-col :class="{ leftSlide: initialLoad }" cols="12"  xl="3" lg="4"  md="3" sm="12" >
              <v-img :src="pedro" class="profileImg" contain dense/>
              <span  class="white pe-text"  > {{text_img_description}}</span>
          </v-col>
          <v-col  :class="{ rightSlide: initialLoad }"  cols="12"  xl="7" lg="7"  md="7" sm="12"> 
              <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_title_blog_section"/> 
              <h2  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_subtitle_blog_section"/> 

              <div>
              <br><br> <p align="left" class="pe-text" style="font-size:110%;" v-html="text_par_blog_section"/>
              </div>
          </v-col>
        </v-row>
      </v-layout> 

    <!-- Atelier -->
    <v-layout class="about-1st-div subsection">
        <v-row class="text-center column wrap fill-height" align="center" justify="center"  >    
          <v-col  :class="{ rightSlide: initialLoad }"  cols="12"  xl="7" lg="7"  md="7" sm="12"> 
              <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_title_atelier_section"/> 
              <div>
              <br><br> <p align="left" class="pe-text" style="font-size:110%;" v-html="text_par_atelier_section"/>
              </div>
          </v-col>
          <v-col :class="{ leftSlide: initialLoad }" cols="12"  xl="3" lg="4"  md="3" sm="12" >
              <v-img :src="pedro" class="profileImg" contain dense/>
              <span  class="white pe-text"  > {{text_img_description}}</span>
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
import aux from           '../aux.js'



export default {
  name: 'Pr',
  components: {NewsCard},
  created(){
    this.initialLoad = true;
  },
  mounted(){
    //console.log("imprimi no body",this.$store.state.bodyHeight);
    window.addEventListener('resize', this.resizeFirstSection);
    this.resizeFirstSection();
  },
  setup() {

  },
  computed: { 
    text_aboutme_paragraph:          function() { return translations["presentation_par"][this.$store.state.lang];          },
    text_aboutme_title:              function() { return translations["presentation_tit"][this.$store.state.lang];          },
    text_aboutme_experience:         function() { return translations["aboutme_experience"][this.$store.state.lang];        },
    text_find_me_online:             function() { return translations["find_me_online"][this.$store.state.lang];            },
    text_img_description:            function() { return translations["img_description"][this.$store.state.lang];           },
    text_title_why_this_site:        function() { return translations["about_this_site"][this.$store.state.lang];           },
    text_par_why_this_site:          function() { return translations["about_this_site_par"][this.$store.state.lang];       },
    text_title_professional_section: function() { return translations["about_this_profession"][this.$store.state.lang];     },
    text_par_professional_section:   function() { return translations["about_this_profession_par"][this.$store.state.lang]; },
    text_title_blog_section:         function() { return translations["about_this_blog_title"][this.$store.state.lang];     },
    text_subtitle_blog_section:      function() { return translations["about_this_blog_subtitle"][this.$store.state.lang];  },
    text_par_blog_section:           function() { return translations["about_this_blog_par"][this.$store.state.lang];    },
    text_title_atelier_section:      function() { return translations["about_this_atelier"][this.$store.state.lang];     },
    text_par_atelier_section:        function() { return translations["about_this_atelier_par"][this.$store.state.lang]; }
  },
  data: () => ({
        name: 'AboutMe',
        initialLoad: false,
        dialog: false,
        show: true,
        firstSectionHeight: "50vh",
        pedro
  }),
  methods: {
    resizeFirstSection(){
        var offsetHeight = this.$store.state["bodyHeight"];
        this.firstSectionHeight =  offsetHeight + "vh";
    }

  }
}
</script>

<style lang="scss" scoped>

  @import  "../styles/animation.scss";
  @import  "../styles/images.scss";
  @import  "../styles/text.scss";

</style>