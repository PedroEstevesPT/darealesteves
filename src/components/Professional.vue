<template>
  <v-container>
    <v-row class="text-center" align="center" justify="center" >

      <!-- TESTAR IMAGENS -->
      <v-col 
          cols="12"
          sm="12"
          md="2"
        >
          <v-img
            :src="pedro"
            class="profileImg"
            contain
            dense
          />
      </v-col>
      <v-col cols="12" md="8" sm="12"> 
          <h1 style="text-align: left;" class="display-2 font-weiht-bold mb-3" v-html="text_presentation_title"/> 

          <div>
            <p style="text-align: left;"  v-html="text_presentation_paragraph"/>
          </div>
      </v-col>


      <!-- PROFESSIONAL EXP --> 
      <div >
        <svg-icon type="mdi" :path="mdiAccount" :size="48"></svg-icon>

        <h2 v-html="text_professional_experience"> </h2> <br>
        
        <v-row class="text-center" align="center" justify="center" >
            <div v-for="NewsItem in NewsList" :key="NewsItem.id" style="margin: 0 auto;">
              <v-col 
                cols="12"
                sm="12"
                md="12"
               >
                <NewsCard :NewsItem="NewsItem"/>
              </v-col>


            </div>
        </v-row>
      </div>

      <!-- FIND ME ONLINE -->
      <v-col
        class="mb-5"
        cols="12"
      >
       <br> 
       <h2 class="headline font-weight-bold mb-5" v-html="text_find_me_online" />

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>
<script>

import pedro       from '../assets/landing/pedro.jpg';
import junitec     from '../assets/landing/exp/junitec.png';
import microsoft   from '../assets/landing/exp/ms.png';
import syone       from '../assets/landing/exp/syone.jpg';
import trash4goods from '../assets/landing/exp/trash4goods.png';
import NewsCard from '../components/NewsCard.vue';
import translations from '../alltranslations.js';
import { mdiAccount } from '@mdi/js'



export default {
  name: 'Professional',
  components: {NewsCard},
  setup() {
    return {
        mdiAccount
      }
  },
  computed: { 
    text_presentation_paragraph:  function() { 
      console.log(translations["landing"]["presentation_par"]);
      console.log(typeof(translations["landing"]["presentation_par"]["pt"]))
      return translations["landing"]["presentation_par"][this.$store.state.lang]; 
    } ,
    text_presentation_title:      function() { return translations["landing"]["presentation_tit"][this.$store.state.lang]; },
    text_professional_experience: function() { return translations["landing"]["professional_experience"][this.$store.state.lang];},
    text_find_me_online:          function() { return translations["landing"]["find_me_online"][this.$store.state.lang]; }

  },
  data: () => ({
        name: 'Professional',
        dialog: false,
        NewsList: [
          {
            id: 1,
            name: "Microsoft",
            color: "microsoftblue",

            title: {
              "pt": "Engenheiro de Suporte",
              "en": "Dynamics 365 Support Engineer"
            },
            modal_text: {
              "pt" : "<p>Começei a trabalhar na Microsoft em Outubro de 2021 com Support Engineer do Dynamics CRM 365 na área de customizações. \
              Desde aí tenho estado a ajudar pessoas e negócios de todos os cantos do mundo a alcançarem mais com produtos Microsoft, nomeadamente o Dynamics 365. \
              Paralelamente a isto tenho aproveitado a minha atividade profissional para realizar certificações em diferentes produtos da Microsoft: \
              <ul style='margin-left:2%;'> <br>\
                <li> Microsoft Certified: Dynamics 365 Fundamentals (CRM) </li>\
                <li> Microsoft Certified: Azure Fundamentals</li>\
                <li>Microsoft Certified: Power Platform Fundamentals</li>\
                <li>Microsoft Certified: Security Compliance and Identity Fundamentals</li> \
                <li>Microsoft Certified: Power Platform Developer Associate</li>\
              </ul></p>  "
              ,
              "en" : "I started working at Microsoft in October of 2021."
            },
            img_url: microsoft,
            url: "https://www.pcguia.pt/2021/02/projecto-de-reciclagem-interactiva-trash4goods-com-gamificacao-e-o-vencedor-do-premio-e-waste-open-innovation/",
          },
          {
            id: 2,
            name: "Trash4Goods",
            color: "trash4goods",
            title: {
                "pt": "Co-fundador e Lead Developer",
                "en": "Co-founder and Lead Developer"
            },
            modal_text: {
              "pt" : "ccccccccccc",
              "en" : "dddddddd"
            },
            img_url: trash4goods,
            url: "https://visao.sapo.pt/exameinformatica/2021-02-12-e-waste-open-innovation-distingue-startup-que-vai-desafiar-os-portugueses-a-reciclarem-produtos-eletronicos/"
          },
          {
            id: 3,
            name: "Syone",
            color: "syone",
            title: { 
              "pt":"Estágio de Verão em NLP",
              "en": "NLP Summer Internship"
            },
            modal_text: {
              "pt" : "asasas",
              "en" : "asasasa"
            },
            img_url: syone,
            url: "https://www.youtube.com/watch?v=TyYe9Qmoq3U&t=291s"
          },
          {
            id: 4,
            name: "Junitec",
            color: 'junitec',
            title:  {
              "pt" : "Membro do Departamento Técnico",
              "en" : "Member of the Technical Department"
            },
            modal_text: {
              "pt" : "asasas",
              "en" : "asasasa"
            },
            img_url: junitec,
            url: "http://www.betventures.org/bet19.html"
          }
        ],
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    pedro,
    whatsNext: [
      {
        text: 'Linkedin',
        href: 'https://www.linkedin.com/in/pedro-fonseca-esteves/',
      },
      {
        text: 'Youtube',
        href: 'https://www.youtube.com/channel/UCXqBZ8rXVdcyvtcDJ6_fiNg',
      },
      {
        text: 'Instagram',
        href: 'https://www.instagram.com/darealesteves/',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";

</style>