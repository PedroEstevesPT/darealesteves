<template>
  <v-container class="pe-text">
     
      <br>
      <v-row  class="align-center">
        <v-col :class="{ leftSlide: initialLoad }" cols=12 xl="4" lg="6" md="7" sm="9" xs="12"  >

        <h1 class="pe-text blue-text align-left " v-html="software_title" /><br>
        <p class="align-left" v-html="software_text" /> 
        </v-col>

      <v-col :class="{ rightSlide: initialLoad }" cols="12" xl="3" lg="3" md="3"  sm="12"  >
        <div style="padding-top:5%;" >
          <v-card style="height:300px; width:149px; margin: 0 auto;" class="card-hover-animation rounded-border align-center" :elevation="cardElevation">
            <v-img    :src="trash4goods" />
          </v-card>
          <p class="text-center" style="margin-top:0%;padding-top:0%;" v-html="trash4goods_text" />  
        </div>
      </v-col>
    </v-row>

    <br><br>

    <!-- EDUCACAO -->
    <div :class="{ leftSlide: initialLoad }">
      <v-row class="align-center" > 
        <v-col cols=12 xl="7" lg="9" md="10" sm="10" xs="12">
          <h1 class="pe-text blue-text text-center" v-html="education_title" /><br>
          <p  class="align-left"  v-html="education_text1" />
        </v-col>
      </v-row>
      <br>

      <v-row class="justify-center" >
        <v-col  cols=10 xl="2" md="3" sm="9" xs="12" >
          <a href="https://www.youtube.com/watch?v=DzD4_RobRbI&list=PLGo2eVAkcAnepH0P5SU6h0wLLeeqBsvzf">
            <v-card class="rounded-border card-hover-animation" :elevation="cardElevation">
              <v-img class="rounded-border" :src="theory_of_computation_img" />
            </v-card>
          </a>
          <p class="text-center" v-html="playlist_tc" />
        </v-col>
        <v-col  cols=10 xl="2" md="3" sm="9" xs="12" >
          <a href="https://www.youtube.com/watch?v=X47e_qyymXI&list=PLGo2eVAkcAnc4oW5hRjXL1JKx9Ae3QghF">
            <v-card class="rounded-border card-hover-animation" :elevation="cardElevation">
                <v-img :src="processing_language_img" />
            </v-card>
          </a>
          <p class="text-center" v-html="playlist_language" />
        </v-col>
        <v-col cols=10 xl="2" md="3" sm="9" xs="12">
          <a href="https://www.youtube.com/watch?v=gRGFJ1vab7g&list=PLGo2eVAkcAneMWrlvAGbi49RgZs9rmWu3">
            <v-card class="rounded-border card-hover-animation" :elevation="cardElevation">
                <v-img :src="software_eng_img" />
            </v-card>
          </a>
          <p class="text-center" v-html="playlist_topics" />
        </v-col>
      </v-row>

      <v-row class="align-center">
        <v-col cols=12 xl="7" lg="9" md="10" sm="10" ><br>
          <p class="align-left" v-html="education_text2" />
          <br>
        </v-col>
      </v-row>
    </div>


    <br><br>
    <v-layout  class="section-margin-top" style=" margin: 0 auto;"  v-animate-onscroll="{down: 'animated fadeInRight'}" >
      <v-row class="text-center pe-text" align="center" justify="center" > 
        <v-col cols="10"  xs="12" sm="12" md="12" lg="12" xl="12" >
          <h1 class="blue-text" v-html="inMedia_tit" /> <br>
          <p v-html="inMedia_par">  </p>
        </v-col>

        <v-col v-for="(inMediaCard,i) in inMedia" :key="i" cols="9"  xs="12"  sm="7" md="9" lg="9" xl="9">
            <HorizontalCard class="hidden-sm-and-down"  :card="inMediaCard"/>
            <!-- I want in mobile the cards to occupy more width, that is why I am using fluid -->
            <HorizontalCard class="hidden-md-and-up"  :card="inMediaCard" fluid/>
        </v-col>

      </v-row>
    </v-layout> 


  
  </v-container>
</template>
<script>

import translations from  '../translations/projects.js';
import HorizontalCard   from '../components/HorizontalCard.vue';

export default {
  name: 'Atelier',
  components: {HorizontalCard},
  created(){
    this.initialLoad = true;
  },
  setup() {
  },
  methods: {

  },
  computed: { 
    software_title:    function(){ return translations["software-title"][this.$store.state.lang]; },
    software_text:     function(){ return translations["software-text"][this.$store.state.lang]; },
    trash4goods_text:  function(){ return translations["trash4goods-text"][this.$store.state.lang]; },
    education_title:   function(){ return translations["education-title"][this.$store.state.lang]; },
    education_text1:   function(){ return translations["education-text-1"][this.$store.state.lang]; },
    education_text2:   function(){ return translations["education-text-2"][this.$store.state.lang]; },
    playlist_tc:       function(){ return translations["playlist-tc"][this.$store.state.lang]; },
    playlist_language: function(){ return translations["playlist-language"][this.$store.state.lang]; },
    playlist_topics:   function(){ return translations["playlist-topics"][this.$store.state.lang]; },    
    inMedia_tit:       function(){ return translations["inMedia_tit"][this.$store.state.lang]; },
    inMedia_par:       function(){ return translations["inMedia_par"][this.$store.state.lang]; }
  },
  data: () => ({
    cardElevation: 6 ,
    initialLoad: false,
    theory_of_computation_img:"https://res.cloudinary.com/dho8ay2wz/image/upload/v1688602611/pedrofortunatoesteves-site/projects/imagem1_bfmpn3.png",
    processing_language_img:  "https://res.cloudinary.com/dho8ay2wz/image/upload/v1688602610/pedrofortunatoesteves-site/projects/imagem2_jqbjxe.png",
    software_eng_img:         "https://res.cloudinary.com/dho8ay2wz/image/upload/v1688602605/pedrofortunatoesteves-site/projects/imagem3_rajlik.png",
    under_construction_img :  "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676227267/pedrofortunatoesteves-site/aboutme/DALL_E_2023-02-12_18.40.02_-_impressionist_painting_of__Under_Construction__sign_sa3wxk.png",
    trash4goods:              "https://res.cloudinary.com/dho8ay2wz/image/upload/v1688682754/pedrofortunatoesteves-site/projects/cropped_cellphone_lzgfym.jpg",
    inMedia: [
            {
              "where": "Continente (Youtube)",
              "title": { "en": "3rd Prize at Missão Continente Hackathon", "pt": "3º Prémio no Hackathon Missão Continente"},
              "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1688772911/hackathon-missaocontinete_czabdh.png",
              "media_url": "https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png",
              "img_url_margin_bottom": '-5px',
              "img_url_width": '25px',
              "link": "https://www.youtube.com/watch?v=v1yFY6Q2-Oc",
              "description": {
                "en": "Missão  Continente Hackathon challenged participants to develop solutions to digitally transform solidarity campaigns and bring\
                Escola Missão Continente to all children in Portugal. My prototype: ContinenteGive, an interschool solidarity campaign powered by a \
                low-code app for Tablet took the 3rd place.",
                "pt": "O Hackathon Missão Continente desafiou os participantes a desenvolverem soluções para digitalizarem campanhas solidárias e trazerem a\
                Escola Missão Continente a todas as crianças do país. O meu projeto ContinenteGive, uma campanha interescolar solidária potenciada por uma app\
                low-code para Tablet obteve o terceiro lugar."
              } 
            },
            {
              "where": "in Microsoft Dynamics Community",
              "title": {"en": "Getting Dynamics 365 CE entity records into Python","pt": "Trabalhando com records do Dynamics 365 CE no Python"},
              "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006081/pedrofortunatoesteves-site/professional/ms_vmlmbi.png",
              "media_url": "https://static-00.iconduck.com/assets.00/microsoft-dynamics-365-icon-308x512-5hhoth6a.png",
              "img_url_margin_bottom": '-5px',
              "img_url_width": '25px',
              "link": "https://community.dynamics.com/365/b/customizing-dynamics-365/posts/getting-dynamics-crm-entity-records-with-python",
              "description": {
                "en": "Detailed tutorial I wrote for Microsoft Community on how to get entity records from Dynamics 365 CE into Python.",
                "pt": "Tutorial detalhado com imagens de como conseguir obter os entity records do Dynamics 365 CE no Python."
              } 
            },
            {
              "where": "IN PC GUIA",
              "title": {
                "en":"Trash4Goods cria solução para aumentar a taxa de reciclagem em Portugal",
                "pt":"Trash4Goods cria solução para aumentar a taxa de reciclagem em Portugal"
              },
              "img_url": "https://www.pcguia.pt/wp-content/uploads/2022/08/teamheadert4g.png.webp",
              "media_url": "https://www.pcguia.pt/wp-content/uploads/2017/04/Icone_PCG.png",
              "img_url_margin_bottom": '-5px',
              "img_url_width": '25px',
              "link": "https://www.pcguia.pt/2022/09/trash4goods-cria-solucao-para-aumentar-a-taxa-de-reciclagem-em-portugal/",
              "description":  {
                "en": "The portuguese startup developed a platform that leverages gamification to reward who recycles. \ The goal is to change the way people look at residuals: \
                «not like trash, but as matter that can bring benefits»",
                "pt": "A startup nacional desenvolveu uma plataforma que usa gamificação para recompensar quem faz reciclagem.\
                 O objectivo é que as pessoas olhem para os resíduos, «não como lixo, mas sim como matéria-prima que lhes pode trazer benefícios»."
              }
            },
            {
              "title": {"pt": "E-Waste Open Innovation Quer Portugueses A Reciclar Mais Lixo Eletrónico", "en": "E-Waste Open Innovation Wants Portuguese to Recycle More Electronic Waste" },
              "where": "IN Exame Informática",
              "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006271/pedrofortunatoesteves-site/professional/trash4goods-exameinformatica_mwwsty.jpg",
              "media_url": "https://images.trustinnews.pt/uploads/sites/5/2020/01/Logos-Exame-Informatica.png",
              "img_url_margin_bottom": '0px',
              "img_url_width": '45px',
              "link": "https://www.pcguia.pt/2022/09/trash4goods-cria-solucao-para-aumentar-a-taxa-de-reciclagem-em-portugal/",
              "description": {
                "en": "Trash4Goods is the startup that won the first edition of e-Waste Open Innovation, an entrepneurship competition that promotes the development of solutions for the recycling of electronic residuals.",
                "pt":" Trash4Goods é a startup que ganhou a primeira edição do e-Waste Open Innovation, uma competição de empreendedorismo que promove o desenvolvimento de soluções para a reciclagem de Resíduos de Equipamentos Elétricos e Eletrónicos (REEE)."
              }
            }]
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