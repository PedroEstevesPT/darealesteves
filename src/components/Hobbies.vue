<template>
  <v-container>
    <v-row class="text-center" align="center" justify="center" >

        <h1> Hobbies </h1>

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
        dialog: false,
        NewsList: [
          {
            id: 1,
            name: "Microsoft",
            color: "microsoft_blue",
            title: {
              "pt": "Engenheiro de Suporte",
              "en": "Dynamics 365 Support Engineer"
            },
            modal_text: {
              "pt" : "Começei a trabalhar na Microsoft em Outubro de 2021.",
              "en" : "dsfd dds asd sa "
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
              "pt" : "adsad ",
              "en" : "bvcv sdsd"
            },
            img_url: trash4goods,
            url: "https://visao.sapo.pt/exameinformatica/2021-02-12-e-waste-open-innovation-distingue-startup-que-vai-desafiar-os-portugueses-a-reciclarem-produtos-eletronicos/"
          },
          {
            id: 3,
            name: "Syone",
            color: "black",
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
            color: "black",
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