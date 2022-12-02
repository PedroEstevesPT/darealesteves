<template>
  <v-container >
   <!-- <h1> Blog</h1> <br> -->

   <div style="width:95%; margin: 0 auto;">
    <v-row class="text-center" align="center" justify="center" >


        <v-row>
          <v-col v-for="(item,i) in items" :key="n"  cols="12" md="4" sm="12" xs="12" >
            <v-sheet >
              
              <h2>{{item.title[this.$store.state.lang]}}</h2><br>

              <!-- MUSIC -->
              <div v-if="item['title']['en'] == 'Music 🎸'">
                <div v-for="(art,i) in item.articles" style="text-align:left;">
                   <a :href=art.url > <li> {{art.title}} </li> </a>
                </div>
              </div>

              <div v-else v-for="(art,i) in item.articles">
                <router-link :to="art.path">          
                  <li> {{art.title[this.$store.state.lang]}} </li>
                </router-link> 
              </div>
            </v-sheet>

          </v-col>
        </v-row>
    </v-row>
    </div>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

  </v-container>
</template>
<script>

import pedro       from '../assets/landing/pedro.jpg';
import junitec     from '../assets/landing/exp/junitec.png';
import microsoft   from '../assets/landing/exp/ms.png';
import syone       from '../assets/landing/exp/syone.jpg';
import trash4goods from '../assets/landing/exp/trash4goods.png';
import NewsCard from '../components/NewsCard.vue';
import Fassbender from '../components/articles/cinema/Fassbender.vue';


import translations from '../alltranslations.js';
import { mdiAccount } from '@mdi/js'



export default {
  name: 'Blog',
  components: {NewsCard},
  setup() {
    return {
        mdiAccount
      }
  },
  methods: {
    redirectTo(url){
        window.location.href=url;      
    } 
  },
  computed: { 
       function() { return translations["landing"]["find_me_online"][this.$store.state.lang]; }
  },
  data: () => ({
        dialog: false,
        items : [
          {"title": {"pt" : "Tech 👨‍💻" , "en" : "Tech 👨‍💻" },
            "articles" : [ 
                { 
                  "title": {
                    "pt": "To be written",
                    "en": " To be written" 
                  },
                  "path": "/blog/cinema/Fassbender"
                } 
            ]
          },
          {
            "title": {"pt" : "Música 🎸" ,"en" : "Music 🎸" },
            "articles": [
              {"title" : "Françoise Hardy - Tout les garçons et les filles (Guitar Cover)" ,"url":"https://www.youtube.com/watch?v=U9tY-tRrrXQ"},
              {"title" : "Françoise Hardy - Il est tout pour moi (Guitar Cover)","url":"https://www.youtube.com/watch?v=RmBAJbHeavE"},
              {"title" : "Françoise Hardy - Tu n'as qu'un mote a dire (Guitar Cover)","url":"https://www.youtube.com/watch?v=_mPtMr0ZCu0"},
              {"title" : "Françoise Hardy - Comment Te Dire Adieu (Guitar Cover)","url":"https://www.youtube.com/watch?v=MaLtz9xb-DM"},
              {"title" : "Françoise Hardy - Comment Te Dire Adieu (Guitar Cover with harmonies)","url":"https://www.youtube.com/watch?v=vWU49cMR88w"}, 
              {"title" : "Serge Gainsbourg - Cha Cha Du Loup (Bass Cover)","url":"https://www.youtube.com/watch?v=todPDqCs5Ao"}, 
              {"title" : "Serge Gainsbourg - Judith (Bass Cover)","url":"https://www.youtube.com/watch?v=D8ZNoNPoD5Y"}, 
              {"title" : "Serge Gainsbourg - L´eau à la bouche (Bass Cover)","url":"https://www.youtube.com/watch?v=BZZMYUy-lMA"} 
            ]
           },
          {
            "title": {"pt" : "Cinema 🎥" , "en" : "Cinema 🎥" },
            "articles": [
                { 
                  "title": {
                    "pt": "A minha opinião sobre o Rainer Fassbender",
                    "en": "My take on Rainer Fassbender" 
                  },
                  "path": "/blog/cinema/Fassbender"
                } 
            ]
          },
          {
            "title": {"pt" : "Livros 📚" , "en" : "Books 📚" },
            "articles": []
          },
          {
            "title": {"pt" : "Fitness 🏃" , "en" : "Fitness 🏃" },
            "articles": []
          },
          {
            "title": {"pt" : "Opiniões 🗣️" , "en" : "Rants 🗣️" },
            "articles": []
          },
        ]

  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";

</style>