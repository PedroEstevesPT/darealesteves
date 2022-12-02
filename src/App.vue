
<template>
  <v-app>
    <!-- HEADER --> 
    <div  style= "background: url('./src/assets/azulejos.jpg');">
    <v-row   class="hidden-sm-and-down" align="end" justify="center"  >
      <v-col   sm="3" md="6"   >
          <v-img  class="ml-auto" :src="avatar"  width="150"/>
      </v-col>
      <v-col  md="6" sm="12" class="font-header" > 
          <h1  class="font-header" > Pedro F.P.F. Esteves</h1> 
          <p class="font-header" >
          @darealesteves <br> 
          Eng. Informático, Espírito livre
          </p>
      </v-col>
    </v-row>
    </div>

    <!-- MOBILE HEADER -->
    <!-- O v-template e crucial para o v-row nao ocupar a altura toda' -->
    <v-template class="hidden-md-and-up" style= "background: url('./src/assets/azulejos.jpg');">
     <v-row   class="text-center" align="end" justify="center" >
        <v-col cols="3"  >
          <v-img  :src="avatar"  />
        </v-col>
        <v-col cols="6" md="4" sm="6">
          <div class="font-header">
           Pedro F.P.F Esteves <br>
           @darealesteves
          </div>
        </v-col>
      </v-row>
    </v-template>


    <!-- TOOLBAR NON MOBILE -->
    <v-toolbar class="hidden-sm-and-down" dark color=""  >
        <div class="hidden-sm-and-up">
          <v-toolbar-side-icon @click="sidebar = !sidebar" >
          </v-toolbar-side-icon>
        </div>

          <!--
          <v-toolbar-title >
            <router-link to="/"   tag="span" style="cursor: pointer; " >
            </router-link>
          </v-toolbar-title> -->

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items >
          <v-btn flat v-for="(item,idx) in toolbarItems" :key="idx" :to="item.path" >
            <router-link :to="item.path">          
                <v-icon left dark>{{ item.icon }}</v-icon>
                {{ item.title["pt"] }} 
            </router-link>
          </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      
      <!-- LANGUAGES -->
      <v-toolbar-title >
          <div @click="updateLanguage('pt')">
            <v-img  contain style="margin: 0 auto;"  class="hidden-sm-and-down" width=50 :src="ptFlag"> </v-img>
            <v-img  contain style="margin: 0 auto;"  class="hidden-md-and-up" width=40   :src="ptFlag"> </v-img>
        </div>
      </v-toolbar-title>
      <v-toolbar-title >
        <div @click="updateLanguage('en')">
          <v-img  contain  class="hidden-sm-and-down" width=50 :src="enFlag"> </v-img>
          <v-img  contain  class="hidden-md-and-up" width=40   :src="enFlag"> </v-img>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>


      <!-- TOOLBAR MOBILE-->
    <v-card  class="hidden-md-and-up" flat tile>
      <v-toolbar dense>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer">
            <svg-icon type="mdi" :path="mdiMenu" :size="48"></svg-icon>
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-toolbar-title >
          <div @click="updateLanguage('pt')">
              <v-img  contain style="margin: 0 auto;"  class="hidden-sm-and-down" width=50 :src="ptFlag"> </v-img>
              <v-img  contain style="margin: 0 auto;"  class="hidden-md-and-up" width=40   :src="ptFlag"> </v-img>
          </div>
        </v-toolbar-title>
        <v-toolbar-title >
          <div @click="updateLanguage('en')">
            <v-img  contain  class="hidden-sm-and-down" width=50 :src="enFlag"> </v-img>
            <v-img  contain  class="hidden-md-and-up"   width=40 :src="enFlag"> </v-img>
          </div>
        </v-toolbar-title>
      </v-toolbar>
    </v-card>
    <!-- HAMBURGER -->  
    <v-navigation-drawer v-model="drawer" absolute bottom temporary  >
      <v-list nav dense>
      <h1> Pedro F.P.F. Esteves </h1>
        <v-list-item-group v-model="group"
          active-class="deep-purple--text text--accent-4"
          v-for="(item,idx) in toolbarItems"
        >
          <v-list-item>
            <v-list-item-title>
                <router-link :to="item.path"  style="text-decoration: none;" >          
                    <p>{{ item.title["pt"] }} </p>
                </router-link>

            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>

    <!-- FOOTER -->
    <v-footer dark padless style= "margin: 0 auto;" >
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn elevation="0" v-for="icon in icons" :href="icon.url" :key="icon" class="mx-4 white--text" icon>
            <svg-icon type="mdi" :path="icon.img" :size="48"></svg-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
        <i> Na vida dás amor para o amor vir atrás, eu estou só tranquilo à espera do que a vida traz - El App </i>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong> Made by Pedro F.P.F. Esteves with love.</strong>
        </v-card-text>
      </v-card>
    </v-footer>



  </v-app>
</template>

<script>
import { mdiMenu,mdiLinkedin,mdiYoutube,mdiInstagram }  from '@mdi/js';
import Professional from './views/Professional.vue'
import ptFlag       from './assets/flags/PT.png'
import enFlag       from './assets/flags/EN.png'
import avatar       from './assets/cartoon/avatar.png';
import tiles        from './assets/azulejos.jpg';

import store        from './store';

export default {
  name: 'App',
  setup() {
    return {
        mdiMenu
      }
  },
  components: {
    Professional
  },
  data: () => ({
      drawer: false,
      group: null,
      avatar,ptFlag, enFlag,tiles,
      icons: [
        {"img": mdiLinkedin,  "url":"https://www.linkedin.com/in/pedro-fonseca-esteves/"},
        {"img": mdiInstagram, "url":"https://www.instagram.com/darealesteves/"},
        {"img": mdiYoutube,   "url":"https://www.youtube.com/channel/UCXqBZ8rXVdcyvtcDJ6_fiNg"}
      ],
      toolbarItems: [
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
        }
      ]
    }),
  methods: {
    updateLanguage(activeLang){
      console.log(activeLang);
      this.$store.commit('updateLang', activeLang);
    }
  } 
}
</script>

<style lang="scss" scoped>


@import  "./styles/font.scss";
@import  "./styles/images.scss";




</style>