<template>
  <v-container >
   <!-- <h1> Blog</h1> <br> -->

   <div style="width:95%; margin: 0 auto;"> <br>
    <v-row class="text-center" align="center" justify="center" >

        <v-row>
          <v-col v-for="(item,i) in items" :key="n"  cols="12" xl="4" lg="4" md="4" sm="12" xs="12" >
            <v-sheet>              
            
              <h2 class="pe-text blog-option-title blue-text">{{item.title[this.$store.state.lang]}}</h2><br>

              <!-- FOODIES or PHOTOS' -->
              <div  
              
                style="justify-content: center; text-align:left; display: grid;"  

              v-if="item['title']['en'] == 'Foodies 🍲' || item['title']['en'] == 'Photos 📸'"
              >
                <router-link :to="item.path"  class="no-underline"> 
                  <p> {{item.msg[this.$store.state.lang]}} </p>
                </router-link>
              </div>



              <!-- MUSIC -->
              <div v-else-if="item['title']['en'] == 'Music 🎸'">
                <div v-for="(art,i) in item.articles" >
                  <a :href="art.url" class="no-underline"> 
                    <li class="pe-text blog-option-value"  > {{art.title}} </li> 
                  </a>
                </div>
              </div>



            <!-- NEW CATEGORIES 
             style="justify-content: center; text-align:left; display: grid;"  this is fundamental to center 
            --> 
          
            <v-list-item-group v-else
             style="justify-content: center; text-align:left; display: grid;"  
            >
              <v-list-item v-for="art in item.articles">
    
                <!-- OPTION -->    
                <router-link :to="art.path"  class="no-underline">                 
                  <li class="pe-text blog-option-value" v-if='Object.keys(art["title"]).includes(this.$store.state.lang)'>
                    {{art.title[this.$store.state.lang]}}
                  </li>
                </router-link>

              </v-list-item>
            </v-list-item-group>






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


import { mdiAccount } from '@mdi/js'



export default {
  name: 'Blog',
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
                  "path": "/blog/tech/site"
                },
                { 
                  "title": {
                    "en": "CSS Quick Snacks" 
                  },
                  "path": "/blog/tech/site"
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
                  "path": "/blog/cinema/Fassbinder"
                } 
            ]
          },
          {
            "title": {"pt" : "Livros 📚" , "en" : "Books 📚" },
            "articles": [
                { 
                  "title": {
                    "pt": "As Ligações Perigosas 12/2022" 
                  },
                  "path": "/blog/books/DangerousLiaisons"
                }  
              
            ]
          },
          {
            "title": {"pt" : "Gastronomia 🍲" , "en" : "Foodies 🍲" },
            "msg" :  {"pt": "Um.. Delicioso" , "en": "Um.. Delicious"},
            "path": "/blog/gastronomy"
          },
          {
            "title": {"pt" : "Fotografia 📸" , "en" : "Photos 📸" },
            "msg" :  {"pt": "Flash!" , "en": "Flash!"},
            "path": "/blog/photos"
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