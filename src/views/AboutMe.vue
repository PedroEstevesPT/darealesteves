<template>

  <!-- 1ST ROW SANTIAGO E BIO TESTAR IMAGENS 
    fluid - Makes the container occupy all wdith of screen
  -->
  <div   :style="{ 
     height: firstSectionHeight,
     width: firstImgWidth,
     background: jeronimos, 
    'background-size': 'cover' //'auto 100%'
    }" >
      <!-- ADDS TEXT -->
      <v-container   :style="{ 'text-align': 'center', 'padding-top': halfFirstSectionHeight}" >
        <div style="background-color: rgba(0, 0, 255, 0.6);  display: inline-block; padding: 5px;">
          <TypeWriter   :display-text-array="displayTextArray"  />
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

          
          <v-col :class="{ rightSlide: initialLoad }" cols="12"  xl="4" lg="3"  md="5" sm="12" >
            <RotatingArticleFigure :figure=pedroImg />
          </v-col>

        </v-row>
      </v-layout> 

      <br>
      <br>
      <br>


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
              <RotatingArticleFigure :figure=pedroImg />
          </v-col>

        </v-row>
      </v-layout> 
    </v-container>


    <!--QUOTE CAROUSEL -->
    <div  :style="quoteTile" >
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
      
      <!-- Professional  -->
      <v-layout class="about-1st-div subsection aboutme-site-section" >
        <v-row class="text-center column wrap fill-height" align="center" justify="center" >    
          <v-col   cols="12"  xl="7" lg="7"  md="6" sm="12"  v-animate-onscroll="{down: 'animated fadeInLeft'}" > 
            <router-link to="/professional" class="router-link-vanilla"> 
              <h1  align="left"  class="card-title hidden-sm-and-down display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_title_professional_section"/> 
            </router-link>
            <p   align="left" class="pe-text-110 hidden-sm-and-down"  v-html="text_par_professional_section"/>
          </v-col>
          <v-col  cols="12"  xl="5" lg="5"  md="6" sm="12"  v-animate-onscroll="{down: 'animated fadeInRight'}">
              <RotatingCard :figure=professionalCard />
          </v-col>
        </v-row>
      </v-layout> 

        <!-- Blog -->
        <v-layout class="about-1st-div subsection aboutme-site-section">
          <v-row class="text-center column wrap fill-height" align="center" justify="center"    >    
            <v-col  cols="12"  xl="5" lg="5"  md="5" sm="12" v-animate-onscroll="{down: 'animated fadeInLeft'}">
              <div class="rotating-card-container">
                <RotatingCard :figure="blogCard" />
              </div>
            </v-col>
            <v-col cols="12"  xl="7" lg="7"  md="7" sm="12"  v-animate-onscroll="{down: 'animated fadeInRight'}"> 
              <router-link to="/blog" class="router-link-vanilla"> 
                <h1  align="left" class="card-title hidden-sm-and-down display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_title_blog_section"/> 
              </router-link>
              <h2  align="left" class="hidden-sm-and-down display-2 font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_subtitle_blog_section"/> 
              <div>
                <p align="left" class="hidden-sm-and-down pe-text-110"  v-html="text_par_blog_section"/>
              </div>
            </v-col>
          </v-row>
        </v-layout> 

      <!-- Atelier -->
      <v-layout class="about-1st-div subsection aboutme-site-section" >
        <v-row class="text-center column wrap fill-height" align="center" justify="center">    
          <v-col  cols="12"  xl="7" lg="7"  md="7" sm="12"  v-animate-onscroll="{down: 'animated fadeInLeft'}"> 
           <router-link to="/atelier" class="router-link-vanilla"> 
            <h1  align="left" class="card-title display-2 hidden-sm-and-down font-weiht-bold mb-3 pe-text presentation-paragraph blue-text" v-html="text_title_atelier_section"></h1> 
            </router-link> 
            <p align="left" class="hidden-sm-and-down pe-text-110"  v-html="text_par_atelier_section"/>
          </v-col>
          <v-col  cols="12"  xl="5" lg="5"  md="5" sm="12"  v-animate-onscroll="{down: 'animated fadeInRight'}">
              <RotatingCard :figure="atelierCard" />
          </v-col>
        </v-row>
      </v-layout> 

  </v-container>
</template>
<script>

import translations            from  '../translations/aboutme.js';
import ArticleFigure           from  '../components/ArticleFigure.vue';
import RotatingArticleFigure   from  '../components/RotatingArticleFigure.vue';
import RotatingCard            from  '../components/RotatingCard.vue';
import QuoteCarousel           from  '../components/QuoteCarousel.vue';
import TypeWriter              from  '../components/TypeWriter.vue';
import QuoteTile               from  '../assets/aboutme/QuoteTile.jpg';

import { VueFlip } from 'vue-flip';


export default {
  name: 'AboutMe',
  components: {'vue-flip': VueFlip, ArticleFigure,RotatingArticleFigure,RotatingCard, QuoteCarousel, TypeWriter},
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
        displayTextArray: {
          "pt": ["Olá, sou o Pedro","Obrigado por visitares o meu portefólio online","Espero que gostes!"],
          "en": ["Hello, I am Pedro!","ddWelcome to my online portfolio","Hope you enjoy it!"]
        }, 
        firstImgWidth: "100vw",
        video: "url(https://res.cloudinary.com/dho8ay2wz/video/upload/v1687996229/pedrofortunatoesteves-site/gifs/jeronimos_holtei.mp4) center",
        jeronimos:  "url(https://res.cloudinary.com/dho8ay2wz/image/upload/v1682804704/pedrofortunatoesteves-site/aboutme/jeronimos_vnsxik.jpg) center no-repeat",
        initialLoad: false,
        dialog: false,
        show: true,
        firstSectionHeight: "50vh",
        halfFirstSectionHeight: "32vh",
        quoteMargin: "2%",
        quoteTile: { background: "url(" + QuoteTile + ") center center" ,'background-repeat': 'repeat-x', 'background-size' : 'auto 100%' },
        pedroImg: { 
            "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682964184/pedrofortunatoesteves-site/aboutme/santiago_1_aexecy_tw6ib7.jpg",
            "description": {"pt": "Em Santiago de Compostela no Verão de 2022",
                            "en": "In Santiago de Compostela, Summer of 2022."}
        },
        professionalCard: { 
            "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1684795042/pedrofortunatoesteves-site/aboutme/work_kohqhl.png",
            "quote": {"pt": "Procura ser alguém de valor, em vez de alguém de sucesso.",
                      "en": "Strive not to be a success, but rather to be of value."},
            "writer": "Albert Einstein",
            "route": "professional",
            "mobileTitle": {"en": "Professional Path", "pt": "Percurso Profissional"},
            "mobileText": {"pt": "Descobre mais sobre o meu percurso profissional: <br><br> \
            <li> Como me contactar ☎️</li> \
            <li> O que realizei até agora ➡️</li> \
            <li> As minhas skills 🔧</li> \
            <li> O que valorizo 👨‍💼</li>", "en": "In this section you can find more about my professional path: <br><br>\
            <li> How to contact me ☎️</li>  \
            <li> What I have done so far ➡️ </li> \
            <li> My skills 🔧</li> \
            <li> what I look for 👨‍💼</li>"}
        },
        blogCard: { 
            "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1684795042/pedrofortunatoesteves-site/aboutme/blogging_qdlkre.png",
            "quote": { "pt": "Escrever é pintar com a voz",
                       "en": "Writing is the painting of the voice."},
            "writer": "Voltaire",
            "route":"/blog",
            "mobileTitle": {"pt": "Blogging", "en": "Blogging"},
            "mobileText": {"en": "Read my posts on a variety of topics, including: IT, Music, Movies, Experiences etc... <br> Here is where you can find them.", 
                           "pt": "Os meus 'hot takes' numa panóplia de temas: IT, Música, Filmes, experiências etc...<br> Encontra-os aqui. "}
        },
        atelierCard: {
          "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1687806797/pedrofortunatoesteves-site/aboutme/project-atelier_k6iw9c.png",
          "quote": { "pt": "Cantando, espalharei por toda parte, Se a tanto me ajudar o engenho e arte.",
                     "en": "Singing, I will spread everywhere, If my wit and art assist me so."},
          "writer": "Luís Vaz de Camões",
          "route":"/atelier",
          "mobileTitle":{"pt": "Atelier (em construção)", "en": "Atelier (under construction)"},
          "mobileText": {"en": "At this moment, this section of the website is under construction. <br> Suprises will come for those who wait :)",
                         "pt": "De momento, esta secção do site encontra-se sobre construção. <br> Surpresas para breve. :)"
          }
        }
  }),
  methods: {
    resizeFirstSection(){
      var offsetHeight = this.$store.state["bodyHeight"];
      this.firstSectionHeight =  offsetHeight + "vh";
      this.halfFirstSectionHeight =  this.firstSectionHeight * 0.55
    }
  } 
}
</script>

<style lang="scss" scoped>




.card-title:hover {
  text-decoration: underline;
}

.router-link-vanilla{
  text-decoration: none;
  color: inherit;
}

.rotating-card-container {
  max-width: 100%; /* Set the maximum width to 100% */
  margin: 0 auto; /* Center the card horizontally within the container */
}

  @import  "../styles/animation.scss";
  @import  "../styles/aboutme.scss";
  @import  "../styles/images.scss";
  @import  "../styles/text.scss";
</style>