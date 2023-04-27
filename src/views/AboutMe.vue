<template>

    <!-- 1ST ROW SANTIAGO E BIO TESTAR IMAGENS 
      fluid - Makes the container occupy all wdith of screen
    -->

  <div   :style="{ 
     height: firstSectionHeight,
     width: firstImgWidth,
     background: firstImg, 
    'background-size': 'cover' //'auto 100%'
    }" >
      <!-- ADDS TEXT -->
      <v-container   :style="{ 'text-align': 'center', 'padding-top': halfFirstSectionHeight}" >
        <div style="background-color: rgba(0, 0, 255, 0.4);  display: inline-block; padding: 5px;">
          <h1 class="pe-text white-text fade-in-2s" v-html="text_aboutme_title" /> 
        </div>
        <br>
      </v-container>
  </div>



  <v-container style="max-width:95%;" >
        
    <!-- About Me Desktop -->
      <v-layout class="hidden-sm-and-down" > 
        <v-row class="text-center column wrap fill-height" align="center" justify="center"  >    

          <v-col  :class="{ leftSlide: initialLoad }"  cols="12"  xl="8" lg="7"  md="7" sm="12"> 

              <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="aboutme_tit" />
              <p align="left" class="pe-text-110" v-html="text_aboutme_paragraph"/>
          </v-col>

          <v-col :class="{ rightSlide: initialLoad }" cols="12"  xl="4" lg="5"  md="5" sm="12" >
            <ArticleFigure :figure=pedroImg />
          </v-col>

        </v-row>
      </v-layout> 

     <!--About me Mobile -->
      <v-layout class="about-1st-div hidden-md-and-up"> 
        <v-row class="text-center column wrap fill-height" align="center" justify="center">    

          <v-col  :class="{ rightSlide: initialLoad }"  cols="12"  xl="7" lg="8"  md="7" sm="12"> 
              <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="aboutme_tit"/> 
              <div>
                <p align="left" class="pe-text" style="font-size:110%;" v-html="text_aboutme_paragraph"/>
              </div>
          </v-col>
          <v-col :class="{ leftSlide: initialLoad }" cols="12"  xl="3" lg="3"  md="3" sm="12" >
              <ArticleFigure :figure=pedroImg />
          </v-col>

        </v-row>
      </v-layout> 
    </v-container>


  <!--QUOTE CAROUSEL -->
  <div   :style="{ 
     background: quoteTile, 
    'background-size': 'cover' //'auto 100%'
    }" >
      <v-container   :style="{ 'text-align': 'center', 'margin-top': quoteMargin, 'margin-bottom': quoteMargin}" >
        <QuoteCarousel/>
      </v-container>
  </div>



    <v-container style="max-width:95%;" >
      <!-- Why does this site exist -->
      <v-layout  class="subsection">
        <v-row class="text-center column wrap fill-height" align="center" justify="center"  >    
          <v-col    cols="12"  xl="7" lg="7"  md="7" sm="12"> 
            <h1 class="pe-text blue-text"  v-html="text_title_why_this_site"/> 
            <p align="left" class="pe-text-110" v-html="text_par_why_this_site" />
          </v-col>
        </v-row>
      </v-layout>
      
      <!-- Professional -->
      <router-link class="no-underline" to="/professional">          
        <v-layout class="about-1st-div subsection aboutme-site-section" >
            <v-row class="text-center column wrap fill-height" align="center" justify="center" >    
              <v-col   cols="12"  xl="7" lg="7"  md="6" sm="12"  v-animate-onscroll="{down: 'animated fadeInLeft'}" > 
                  <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_title_professional_section"/> 
                  <p   align="left" class="pe-text-110"  v-html="text_par_professional_section"/>
              </v-col>
              <v-col  cols="12"  xl="5" lg="5"  md="6" sm="12"  v-animate-onscroll="{down: 'animated fadeInRight'}">
                <ArticleFigure :figure=professional />
              </v-col>
            </v-row>
        </v-layout> 
      </router-link>

      <!-- Blog -->
      <router-link class="no-underline"  to="/blog">          
        <v-layout class="about-1st-div subsection aboutme-site-section">
            <v-row class="text-center column wrap fill-height" align="center" justify="center"    >    
                  <v-col  cols="12"  xl="5" lg="5"  md="5" sm="12" v-animate-onscroll="{down: 'animated fadeInLeft'}">
                  <ArticleFigure :figure="blog_img" />
              </v-col>
              <v-col   cols="12"  xl="7" lg="7"  md="7" sm="12"  v-animate-onscroll="{down: 'animated fadeInRight'}"> 
                  <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_title_blog_section"/> 
                  <h2  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_subtitle_blog_section"/> 

                  <div>
                  <p align="left" class="pe-text-110"  v-html="text_par_blog_section"/>
                  </div>
              </v-col>
            </v-row>
        </v-layout> 
      </router-link>

      <!-- Atelier -->
      <v-layout class="about-1st-div subsection aboutme-site-section" >
        <v-row class="text-center column wrap fill-height" align="center" justify="center">    
          <v-col  cols="12"  xl="7" lg="7"  md="7" sm="12"  v-animate-onscroll="{down: 'animated fadeInLeft'}"> 
            <h1  align="left" class="display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_title_atelier_section"/> 
            <p align="left" class="pe-text-110"  v-html="text_par_atelier_section"/>
          </v-col>
          <v-col  cols="12"  xl="5" lg="5"  md="5" sm="12"  v-animate-onscroll="{down: 'animated fadeInRight'}">
              <ArticleFigure :figure="under_construction" />
          </v-col>
        </v-row>
      </v-layout> 
    
    </v-container>
</template>
<script>


import translations    from  '../translations/aboutme.js';
import ArticleFigure   from  '../components/ArticleFigure.vue';
import QuoteCarousel   from  '../components/QuoteCarousel.vue';
import tiles           from '../assets/azulejos.jpg';

export default {
  name: 'AboutMe',
  components: {ArticleFigure,QuoteCarousel},
  created(){
    this.initialLoad = true;
  },
  mounted(){
    window.addEventListener('resize', this.resizeFirstSection);
    this.resizeFirstSection();
  },
  computed: { 
    aboutme_tit:                     function() { return translations["aboutme_tit"][this.$store.state.lang];  },
    greeting_img_msg:                function() { return translations["greeting_img_description"][this.$store.state.lang];  },
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
    text_par_blog_section:           function() { return translations["about_this_blog_par"][this.$store.state.lang];       },
    text_title_atelier_section:      function() { return translations["about_this_atelier"][this.$store.state.lang];        },
    text_par_atelier_section:        function() { return translations["about_this_atelier_par"][this.$store.state.lang];    }
  },
  data: () => ({
        name: 'AboutMe',
        firstImgWidth: "100vw",
        firstImg:  "url(https://res.cloudinary.com/dho8ay2wz/image/upload/v1676214436/pedrofortunatoesteves-site/aboutme/mosteiro_qnnbht.png) center no-repeat",
        initialLoad: false,
        dialog: false,
        show: true,
        firstSectionHeight: "50vh",
        halfFirstSectionHeight: "25vh",
        quoteMargin: "2%",
        quoteTile: "url(https://img.freepik.com/vetores-premium/estilizacao-de-azulejos-em-aquarela-com-ornamentos-azuis-azulejos-portugal-ornamento-turco_515275-804.jpg) center",
        blog_img: {
            "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676218300/pedrofortunatoesteves-site/aboutme/SurrealisticMozart_hgb43e.png",
            "description": {"pt": "","en": ""}
        },
        professional: {
            "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1677940168/pedrofortunatoesteves-site/aboutme/DALL_E_2023-03-04_14.27.34_-_Impressionist_painting_showing_the_professional_path_of_a_Developer_xylmto.png",
            "description": {"pt": "","en": ""}
        },
        pedroImg: { 
            "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672084371/pedrofortunatoesteves-site/aboutme/santiago_1_aexecy.png",
            "description": {"pt": "Eu em Santiago de Compostela no Verão de 2022",
                            "en": "Me in Santiago de Compostela, Summer of 2022."}
        },
        under_construction: { 
            "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676227267/pedrofortunatoesteves-site/aboutme/DALL_E_2023-02-12_18.40.02_-_impressionist_painting_of__Under_Construction__sign_sa3wxk.png",
            "description": {"pt": "", "en": ""}
        }
  }),
  methods: {
    resizeFirstSection(){
      console.log("=== Resize First Section ===");
      var offsetHeight = this.$store.state["bodyHeight"];
      this.firstSectionHeight =  offsetHeight + "vh";
      this.halfFirstSectionHeight =  this.firstSectionHeight * 0.55
      console.log("firstSectionHeight", this.firstSectionHeight);
    }
  } 
}
</script>

<style lang="scss" scoped>

  @import  "../styles/animation.scss";
  @import  "../styles/aboutme.scss";
  @import  "../styles/images.scss";
  @import  "../styles/text.scss";

</style>