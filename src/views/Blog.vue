<template>
  <v-container >
   <!-- <h1> Blog</h1> <br> -->

   <div style="width:95%; margin: 0 auto;"> <br>
    <v-row class="text-center" align="center" justify="center" >

        <v-row>
          <v-col v-for="(item,i) in items" :key="n"  cols="12" md="4" sm="12" xs="12" >
            <v-sheet  v-animate-onscroll="{down: 'animated fadeIn'}">              
              <h2 class="pe-text blog-option-title">{{item.title[this.$store.state.lang]}}</h2><br>

              <!-- MUSIC -->
              <div v-if="item['title']['en'] == 'Music 🎸'">
                <div v-for="(art,i) in item.articles" style="text-align:left;">
                   <a class="pe-text blog-option-value" :href="art.url" > <li> {{art.title}} </li> </a>
                </div>
              </div>

              <!-- OTHER CATEGORIES -->
              <div v-else v-for="(art,i) in item.articles">
                <router-link :to="art.path"  class="pe-text blog-option-title"> 
                  <li v-if='Object.keys(art["title"]).includes(this.$store.state.lang)' > {{art.title[this.$store.state.lang]}} </li>
                </router-link> 
              </div>
            </v-sheet>
            
            <br><br>

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



  </v-container>
</template>
<script>


import NewsCard from '../components/NewsCard.vue';
import Fassbinder from '../components/articles/cinema/Fassbinder.vue';
import Site from '../components/articles/tech/Site.vue';


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
                    "en": "About this site (4/12/2022 - ...)" 
                  },
                  "path": "/darealesteves/blog/tech/site"
                }  
 
            ]
          },
          {
            "title": {"pt" : "Música 🎸" ,"en" : "Music 🎸" },
            "articles": [
              {"title" : "🇫🇷 Françoise Hardy - Comment Te Dire Adieu (Guitar Cover)","url":"https://www.youtube.com/watch?v=MaLtz9xb-DM"},
              {"title" : "🇫🇷 Françoise Hardy - Comment Te Dire Adieu (Guitar Cover with harmonies)","url":"https://www.youtube.com/watch?v=vWU49cMR88w"}, 
              {"title" : "🇫🇷 Françoise Hardy - Tout les garçons et les filles (Guitar Cover)" ,"url":"https://www.youtube.com/watch?v=U9tY-tRrrXQ"},
              {"title" : "🇫🇷 Françoise Hardy - Tu n'as qu'un mote a dire (Guitar Cover)","url":"https://www.youtube.com/watch?v=_mPtMr0ZCu0"},
              {"title" : "🇫🇷 Françoise Hardy - Il est tout pour moi (Guitar Cover)","url":"https://www.youtube.com/watch?v=RmBAJbHeavE"},
              {"title" : "🇨🇴 Juanes - Tengo La Camisa Negra (Bass Cover)","url":"https://www.youtube.com/watch?v=5GwyLmw6F6Y"}, 
              {"title" : "🇫🇷 Serge Gainsbourg - Cha Cha Du Loup (Bass Cover)","url":"https://www.youtube.com/watch?v=todPDqCs5Ao"}, 
              {"title" : "🇫🇷 Serge Gainsbourg - Judith (Bass Cover)","url":"https://www.youtube.com/watch?v=D8ZNoNPoD5Y"}, 
              {"title" : "🇫🇷 Serge Gainsbourg - L´eau à la bouche (Bass Cover)","url":"https://www.youtube.com/watch?v=BZZMYUy-lMA"}, 
              {"title": "🇺🇸 Frank Sinatra - Fly me to the moon (Bass Cover)", "url": "https://www.youtube.com/watch?v=heG2TCHXNB8"}
            ]
           },
          {
            "title": {"pt" : "Cinema 🎥" , "en" : "Cinema 🎥" },
            "articles": [
                { 
                  "title": {
                    "pt": "Rainer Fassbinder no NIMAS (3/12/2022)" 
                  },
                  "path": "/darealesteves/blog/cinema/Fassbinder"
                } 
            ]
          },
          {
            "title": {"pt" : "Livros 📚" , "en" : "Books 📚" },
            "articles": [
                { 
                  "title": {
                    "en": "Atlas Shrugged (Ayn Rand)",
                    "pt": "A Revolta de Atlas (Ayn Rand)" 
                  },
                  "path": "/darealesteves/blog/"
                },
                { 
                  "title": {
                    "en": "Les Liaisons dangereuses (Chordelos de Laclos)",
                    "pt": "As Ligações Perigosas (Chordelos de Laclos)" 
 
                  },
                  "path": "/darealesteves/blog/"
                }  
              
            ]
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
@import  "../styles/text.scss";

</style>