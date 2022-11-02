<template>
  <v-container>
    <v-row class="text-center" align="center" justify="center" >

      <!-- TESTAR IMAGENS -->
      <v-col 
          cols="12"
          sm="6"
          md="3"
        >
          <v-img
            :src="pedro"
            class="profileImg"
            contain
            dense
          />
      </v-col>

      <v-col cols="6" md="8">
          <h1 class="display-2 font-weiht-bold mb-3" v-html="text_presentation_title">
            
          </h1>

          <div style="width: 80%; margin:0 auto;">
            <p style="text-align: left;"  v-html="text_presentation_paragraph" >
            </p>
          </div>
      </v-col>


      <!-- PROFESSIONAL EXP --> 
      <div >
        <h2>Past Experience</h2> <br>
        
        <v-row class="text-center" align="center" >
            <div v-for="NewsItem in NewsList" :key="NewsItem.id" style="margin: 0 auto;">
              <v-col 
                cols="6"
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
        <h2 class="headline font-weight-bold mb-5">
          Find me online
        </h2>

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


export default {
  name: 'HelloWorld',
  components: { NewsCard},

  computed: { 
    text_presentation_paragraph:   function() { return translations["landing"]["presentation_par"][this.$store.state.lang]; } ,
    text_presentation_title:   function() { return translations["landing"]["presentation_tit"][this.$store.state.lang]; }

  },
  data: () => ({

        NewsList: [
          {
            id: 1,
            name: "Microsoft",
            description: {
              "pt": "Dynamics 365 Support Engineer",
              "en": "Dynamics 365 Support Engineer"
            },
            img_url: microsoft,
            url: "https://www.pcguia.pt/2021/02/projecto-de-reciclagem-interactiva-trash4goods-com-gamificacao-e-o-vencedor-do-premio-e-waste-open-innovation/",
          },
          {
            id: 2,
            name: "Trash4Goods",
            description: {
                "pt": "Co-founder and Lead Developer",
                "en": "Co-founder and Lead Developer"
            },
            img_url: trash4goods,
            url: "https://visao.sapo.pt/exameinformatica/2021-02-12-e-waste-open-innovation-distingue-startup-que-vai-desafiar-os-portugueses-a-reciclarem-produtos-eletronicos/"
          },
          {
            id: 3,
            name: "Syone",
            description: { 
              "pt":"NLP Summer Internship",
              "en": "NLP Summer Internship"
            },
            img_url: syone,
            url: "https://www.youtube.com/watch?v=TyYe9Qmoq3U&t=291s"
          },
          {
            id: 4,
            name: "Junitec",
            description:  {
              "pt" : "Membro do departamento técnico",
              "en" : "Member of the Technical Department"
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
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Youtube',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Instagram',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";

</style>