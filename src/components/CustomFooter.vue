<template>

  <v-container class="app-blue" fluid>
    <v-row >
      <v-footer  dark padless class="app-blue">

        <v-container class="hidden-md-and-up" >
          <v-row>

            <v-col cols="12" >
              <h2 class="white-text Roboto">Pedro Esteves - {{ new Date().getFullYear() }} </h2>
              <br>
              <v-btn  v-for="icon in icons" :href="icon.url" :key="icon" class="white--text app-blue" icon >
                <svg-icon class="social-icon-desktop square-icon" type="mdi" :path="icon.img" :size="48"></svg-icon>
              </v-btn>
            </v-col>
        
            <v-col cols="12">
              <h2 class="Roboto white-text"> Newsletter </h2>
              <v-text-field v-model="email" style="color:white;opacity:1"  label="E-mail" required  >
                <template #append>
                  <v-btn class="mb-1" @click="subscribeNewsLetter" outlined v-html="getSendText" />
                </template>             
              </v-text-field>
              <p id="newsLetterResult">  {{newsLetterResult}}</p>

            </v-col>

            <v-col cols="12">
              <h2><VisitCounter class="white-text Roboto" /></h2>
            </v-col>

            <v-col cols="6" >
              <h2 class="Roboto white-text" v-html="getSectionText" />
              <ul
                v-for="(item, idx) in toolbarItems"
                :key="idx"
                :to="item.path" 
              >
                <router-link class="no-underline"  :to="item.path">
                  <span class="Roboto-text-110 white-text" @click="updateLanguage(item.arg)"> 
                    {{ item.title[this.$store.state.lang] }}
                  </span>
                </router-link>
              </ul>
            </v-col>
        
            <v-col cols="6" >
              <h2 class="Roboto white-text" v-html="getLanguageText" />
                <ul
                  v-for="(item, idx) in languages"
                  :key="idx"
                  :to="item.path"    
                >
                <p class="Roboto-text-110 white-text" >{{item["text"][this.$store.state.lang]}}</p>
              </ul>
            </v-col>
          </v-row>
        </v-container>


        <!-- FOOTER MD -->
        <v-container class="hidden-sm-and-down" style="width:80%;margin:0 auto;" >
          <v-row>

            <v-col cols="3">
              <h3 class="white-text">Pedro Esteves - {{ new Date().getFullYear() }} </h3>
              <v-btn  v-for="icon in icons" :href="icon.url" :key="icon" class="white--text app-blue" icon >
                <svg-icon class="social-icon-desktop" type="mdi" :path="icon.img" :size="48" />
              </v-btn>
              <br><br>
              <VisitCounter class="white-text Roboto" /><br>
            </v-col>
        
            <v-col cols="2">
              <h3 class="Roboto white-text" v-html="getSectionText" />
              <ul
                v-for="(item, idx) in toolbarItems"
                :key="idx"
                :to="item.path" 
              >
                <router-link class="no-underline"  :to="item.path">
                  <p class="Roboto white-text hover-effect"> {{ item.title[this.$store.state.lang] }}</p>
                </router-link>
              </ul>
            </v-col>
        
            <v-col cols="2">
              <h3 class="Roboto white-text" v-html="getLanguageText" />
                <ul
                  v-for="(item, idx) in languages"
                  :key="idx"
                  :to="item.path"    
                >
                <span class="Roboto white-text hover-effect"  @click="updateLanguage(item.arg)">{{item["text"][this.$store.state.lang]}}</span>
                </ul>
            </v-col>

            <v-col cols="5">
              <h3 class="Roboto white-text"> Newsletter </h3>
              <p class="Roboto white-text" v-html="getNewsletterText" />
              
              <v-text-field class="white-text"  required  >
         
                <template #label>
                  <span  style="color:white;opacity:1">E-mail</span>
                </template>
         
                <template #append>
                  <v-btn @click="subscribeNewsLetter" class="mb-1" outlined  v-html="getSendText"> </v-btn>
                </template>             
              </v-text-field>
              <p id="newsLetterResult" class="Roboto"> {{newsLetterResult}}</p>
            </v-col>

          </v-row>
       </v-container>
      </v-footer>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios'; // Import axios library for making HTTP requests
import VisitCounter  from  './VisitCounter.vue';
import { mdiMenu,mdiLinkedin,mdiYoutube,mdiGithub }  from '@mdi/js';
import { functionMixin } from '../components/functionMixin.js';

export default {
  name: 'CustomFooter',
  mixins: [functionMixin],
  components: {VisitCounter},
  data() {
    return {
      email: '',
      newsLetterResult: '', 
      icons: [
        {"img": mdiLinkedin, "url":"https://www.linkedin.com/in/pedro-esteves-pt/" },
        {"img": mdiGithub,   "url":"https://github.com/PedroEstevesPT" },
        {"img": mdiYoutube,  "url":"https://www.youtube.com/channel/UCXqBZ8rXVdcyvtcDJ6_fiNg" }
      ],
      languages: [
        { "text": {"en": "English 🇬🇧", "pt": "Inglês 🇬🇧"}, "arg":"en" },
        { "text": {"en": "Portuguese 🇵🇹", "pt": "Português 🇵🇹"}, "arg": "pt"}
      ],
      toolbarItems: [
        { 
          title: {
            'pt': 'Sobre Mim',
            'en': 'About Me'
           },
          path: '/aboutme',
          icon: 'build'
        },
        { 
          title: {
            'pt':'Professional',
            'en': 'Professional'
           },
          path: '/professional',
          icon: 'build'
        },
        { 
          title: {
          'pt':'Blog',
          'en':'Blog'
          },
          path: '/blog',
          icon: 'contact_support'
        },
        { 
          title: {
          'pt':'Projetos',
          'en':'Projects'
          },
          path: '/atelier',
          icon: 'contact_support'
        }
      ]
    };
  },
  mounted() {
    this.incrementCounter();
  },
  computed: {
    getLanguageText() {
      if (this.$store.state.lang === 'pt') { return 'Linguagens'; } 
      else if (this.$store.state.lang === 'en') { return 'Languages'; }
    },
    getSectionText() {
      if (this.$store.state.lang === 'pt') { return 'Secções'; } 
      else if (this.$store.state.lang === 'en') { return 'Sections'; }
    },
    getNewsletterText() {
      if (this.$store.state.lang === 'pt') { return 'Subscreve para novidades sobre os projetos'; } 
      else if (this.$store.state.lang === 'en') { return 'Keep up to date, subscribe the news!'; }
    },
    getSendText() {
      if (this.$store.state.lang === 'pt') { return 'Enviar'; } 
      else if (this.$store.state.lang === 'en') { return 'Send'; }
    }
  },
  methods: {
    
    incrementCounter() {
      const endpoint =  'https://pedroestevespersonalsite-backend.azurewebsites.net/api/increment_view_count'
      axios.post(endpoint)
        .then(() => {
        })
        .catch((error) => {
          if (error.code != "ERR_BAD_REQUEST"){ //this one is expected to happen often
            console.error('Error incrementing the view count:', error);
          }
        });
    },
    subscribeNewsLetter() {
      this.newsLetterResult = "";
      const elements = document.querySelectorAll("#newsLetterResult");

      const email = this.email;
      const endpoint =  'https://pedroestevespersonalsite-backend.azurewebsites.net/api/newsletter'
      axios.post(endpoint, {email})
        .then((response) => {
         
            if (response.status == 200 && response["data"]["success"] == true){
              elements.forEach((element) => {
                element.style.color = "lightgreen";
              });
            }else {
              elements.forEach((element) => {
                element.style.color = "red";
              });
            }
            this.newsLetterResult = response.data.text[this.$store.state.lang];

        })
        .catch((error) => {

          elements.forEach((element) => {
            element.style.color = "red";
          });
          if (this.$store.state.lang == "pt") {
            this.newsLetterResult = "Pedido inválido";
          }else{
            this.newsLetterResult = "Invalid request"
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import  "../styles/text.scss";
@import  "../styles/app.scss";

.hover-effect:hover {
  font-size: 20px;
}

</style>
