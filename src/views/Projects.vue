<template>
  <v-container class="pe-text">
     
      <br>
      <v-row  class="align-center">
        <v-col :class="{ leftSlide: initialLoad }" cols=12 sm="12" md="7" lg="7" >

        <h1 class="pe-text blue-text align-left " v-html="software_title" />
        <p class="align-left" v-html="software_text" /> 
        </v-col>

      <v-col :class="{ rightSlide: initialLoad }" cols="12" sm="12" md="3">
        <div style="padding-top:5%;">
          <v-img style="height:200px;"  :src="trash4goods" />
          <p class="text-center" style="margin-top:0%;padding-top:0%;" v-html="trash4goods_text" />  
        </div>
      </v-col>
    </v-row>

    <br><br>

    <!-- EDUCACAO -->
    <div :class="{ leftSlide: initialLoad }">
      <v-row class="align-center" > 
        <v-col cols=12 md="10" sm="12">
          <h1 class="pe-text blue-text text-center" v-html="education_title" />
          <p  class="align-left"  v-html="education_text1" />
        </v-col>
      </v-row>

      <v-row class="justify-center" >
        <v-col  cols=10 md="3" sm="12" xs="12" >
          <a href="https://www.youtube.com/watch?v=DzD4_RobRbI&list=PLGo2eVAkcAnepH0P5SU6h0wLLeeqBsvzf">
            <v-card class="rounded-border" :elevation="cardElevation">
              <v-img class="rounded-border" :src="theory_of_computation_img" />
            </v-card>
          </a>
          <p class="text-center" v-html="playlist_tc" />
        </v-col>
        <v-col  cols=10 md="3" sm="12" xs="12" >
          <a href="https://www.youtube.com/watch?v=X47e_qyymXI&list=PLGo2eVAkcAnc4oW5hRjXL1JKx9Ae3QghF">
            <v-card class="rounded-border" :elevation="cardElevation">
                <v-img :src="processing_language_img" />
            </v-card>
          </a>
          <p class="text-center" v-html="playlist_language" />
        </v-col>
        <v-col cols=10 md="3" sm="12" xs="12">
          <a href="https://www.youtube.com/watch?v=gRGFJ1vab7g&list=PLGo2eVAkcAneMWrlvAGbi49RgZs9rmWu3">
            <v-card class="rounded-border" :elevation="cardElevation">
                <v-img :src="software_eng_img" />
            </v-card>
          </a>
          <p class="text-center" v-html="playlist_topics" />
        </v-col>
      </v-row>

      <v-row class="align-center">
        <v-col cols=12 md="10" sm="10" >
          <p class="align-left" v-html="education_text2" />
          <br>
        </v-col>
      </v-row>
    </div>


  
  </v-container>
</template>
<script>

import translations from  '../translations/projects.js';

export default {
  name: 'Atelier',
  created(){
    this.initialLoad = true;
  },
  setup() {
  },
  methods: {

  },
  computed: { 
    software_title: function(){
      return translations["software-title"][this.$store.state.lang]; 
    },
    software_text: function(){
      return translations["software-text"][this.$store.state.lang]; 
    },
    trash4goods_text: function(){
      return translations["trash4goods-text"][this.$store.state.lang]; 
    },
    education_title: function(){
      return translations["education-title"][this.$store.state.lang]; 
    },
    education_text1: function(){
      return translations["education-text-1"][this.$store.state.lang]; 
    },
     education_text2: function(){
      return translations["education-text-2"][this.$store.state.lang]; 
    },
    playlist_tc: function(){
      return translations["playlist-tc"][this.$store.state.lang]; 
    },
    playlist_language: function(){
      return translations["playlist-language"][this.$store.state.lang]; 
    } ,
    playlist_topics: function(){
      return translations["playlist-topics"][this.$store.state.lang]; 
    }    
    
  },
  data: () => ({
    cardElevation: 6 ,
    initialLoad: false,
    theory_of_computation_img:"https://res.cloudinary.com/dho8ay2wz/image/upload/v1688602611/pedrofortunatoesteves-site/projects/imagem1_bfmpn3.png",
    processing_language_img:  "https://res.cloudinary.com/dho8ay2wz/image/upload/v1688602610/pedrofortunatoesteves-site/projects/imagem2_jqbjxe.png",
    software_eng_img:         "https://res.cloudinary.com/dho8ay2wz/image/upload/v1688602605/pedrofortunatoesteves-site/projects/imagem3_rajlik.png",
    under_construction_img :  "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676227267/pedrofortunatoesteves-site/aboutme/DALL_E_2023-02-12_18.40.02_-_impressionist_painting_of__Under_Construction__sign_sa3wxk.png",
    trash4goods:              "https://res.cloudinary.com/dho8ay2wz/image/upload/v1688682754/pedrofortunatoesteves-site/projects/cropped_cellphone_lzgfym.jpg"
 }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";
@import  "../styles/animation.scss";

.rounded-border{
  border-radius: 5%;
}

.align-center{
    display:flex; 
    justify-content:center;
}

.align-left {
  text-align: left;
}

</style>