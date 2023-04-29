
<template >
  <v-app >
  
    <!--
      FULSCREEN HEADER 
      Estou a calcular o vh que a toolbar ocupa
    --> 
    <div class="hidden-sm-and-down appHeader"  :style="image"   id="desktopHeader">
      <v-row     align="end" justify="center"  >
        <v-col   sm="3" md="4"   >
            <v-img  class="ml-auto" :class="{ downSlide: headerAnimations }"  :src="avatar"  width="110"/>
        </v-col>
        <v-col :class="{ downSlide: headerAnimations }" md="8" lg="6" sm="12">
          <h1   class="font-header" style="font-size:240%;" > 
          <span class="blue neon-header">&nbsp Pedro F. Esteves &nbsp</span>
          </h1> 
          <p class="font-header"  style="font-size:210%; font-weight:bold;" >
            <span class="blue neon-header" > {{text_desktop_header_subtitle}}</span>
          </p>           
        </v-col>
      </v-row>
      

    </div>

    <div>
    <!-- TOOLBAR NON MOBILE -->
    <v-toolbar class="hidden-sm-and-down app-blue" id="toolbar" style="margin: 0 auto;">
        <div class="hidden-sm-and-up app-blue">
          <v-toolbar-side-icon @click="sidebar = !sidebar" >
          </v-toolbar-side-icon>
        </div>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>      
      <v-spacer/>      
      <v-spacer/>      
      <v-spacer/>      
      <v-spacer/>      
      <v-spacer/>
      <v-toolbar-items >
          <v-btn  flat v-for="(item,idx) in toolbarItems" :key="idx" :to="item.path" >
            <router-link class="toolbar-option"  :to="item.path">          
                <span class="toolbar-btn">{{ item.title[this.$store.state.lang] }}</span>
            </router-link>
          </v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>

      <!-- LANGUAGES -->
      <v-toolbar-title >
          <div @click="updateLanguage('pt')">
            <v-img  contain   class="language-img hidden-sm-and-down" width=50 :src="ptFlag"> </v-img>
            <v-img  contain   class="language-img hidden-md-and-up" width=40   :src="ptFlag"> </v-img>
        </div>
      </v-toolbar-title>
      <v-toolbar-title >
        <div @click="updateLanguage('en')">
          <v-img  contain  class="language-img hidden-sm-and-down" width=50 :src="enFlag"> </v-img>
          <v-img  contain  class="language-img hidden-md-and-up" width=40   :src="enFlag"> </v-img>
        </div>
      </v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
    </div>



    <!-- MOBILE HEADER -->
    <!-- O v-template e crucial para o v-row nao ocupar a altura toda' -->
    <v-template class="hidden-md-and-up appHeader"  :style="image" id="mobileHeader">
     <v-row   class="text-center" align="end" justify="center" >
        <v-col cols="3" >
          <v-img  :src="avatar" />
        </v-col>
        <v-col sm="8" style="text-align:left;" :class="{ downSlide: drawer }" >
          <h4 class="font-header" > 
            <span class=blue style="font-size:140%;">Pedro F. Esteves</span>
          </h4> 
          <p   class="font-header"  style="font-weight:bold;" >
            <span class="blue" >{{text_mobile_header_subtitle}}</span>
          </p>
        </v-col>
      </v-row>
    </v-template>

    <v-template>
    <!-- TOOLBAR MOBILE-->
    <v-card  class="hidden-md-and-up " flat tile>
      <v-toolbar dense class="app-blue">
        <v-toolbar-title >
          <div @click="updateLanguage('pt')">
              <v-img  contain   class="language-img hidden-sm-and-down" width=50 :src="ptFlag"> </v-img>
              <v-img  contain   class="language-img hidden-md-and-up" width=40   :src="ptFlag"> </v-img>
          </div>
        </v-toolbar-title>
        <v-toolbar-title >
          <div @click="updateLanguage('en')">
            <v-img  contain  class="language-img hidden-sm-and-down" width=50 :src="enFlag"> </v-img>
            <v-img  contain  class="language-img hidden-md-and-up"   width=40 :src="enFlag"> </v-img>
          </div>
        </v-toolbar-title>
        <v-spacer/>
        <v-spacer/>
        <v-spacer/>
        <v-spacer/>
        <v-spacer/>

          <v-app-bar-nav-icon @click.stop="this.clickDrawer()" color=white>
            <svg-icon type="mdi" :path="mdiMenu" :size="48"></svg-icon>
        </v-app-bar-nav-icon>
      </v-toolbar>
    </v-card>

    </v-template>




    <!-- HAMBURGER 
    * temporary - Faz com que o hamburguer nao se bug quando mudo de desktop para mobile
    * @transitionend=checkHamburguerStatus - Needed to reset overflow once hamburguer is hidden to
    be able to scroll
    -->  
    
    <v-navigation-drawer class="hidden-md-and-up"  

      @transitionend="checkHamburguerStatus" 
      v-model="drawer"    
      right temporary fixed app
      
    >
  <h1 justify="center"  class="hb-title"  :class="{ leftSlide: drawer }"> 
        <span class="blue neon-header">  {{ new Date().getFullYear() }} - Pedro F. Esteves</span>    
      </h1>
      
      <!-- HAMBURGUER OPTIONS -->
      <v-list nav dense >
        <v-list-item-group v-model="group" active-class="text--accent-4" v-for="(item,idx) in toolbarItems">
          <div>
            <v-list-item>               <!-- the rest of the transition is on transition -->
              <v-list-item-title :class="{ leftSlide: drawer}">
                  <!-- Hamburguer Options -->
                  <router-link :to="item.path"  class="hb-option"  >          
                      <li  class="hb-option-li"> &nbsp > &nbsp {{ item.title[this.$store.state.lang] }} </li>
                  </router-link>
              </v-list-item-title> 
            </v-list-item>
          </div>
        </v-list-item-group> <br>
      </v-list>

      <!-- SOCIAL ICONS MOBILE-->      
      <h3 justify="center" class="hb-title " :class="{ leftSlide: drawer }">
        <span class="blue neon-header" > {{text_find_me_online}} </span>
      </h3><br>
      <div>
      <v-row class="text-center" align="center" justify="center">
        <!-- Just changed cols='' from 3 to 12 -->
        <v-col v-for="(next,i) in icons" :key="i" cols="3" >
          <div class="hidden-md-and-up" :class="{ leftSlide: drawer }" > 
            <v-btn elevation="0" :href="next.url">  
              <svg-icon class="hb-icon-mobile" :size="60" v-if="i%2==0" type="mdi" :path="next.img" ></svg-icon>
              <svg-icon class="hb-icon-mobile" :size="60" v-else type="mdi" :path="next.img" > </svg-icon>
            </v-btn>
          </div>
        </v-col>     
      </v-row>
      </div> 

    <!--HAMBURGUER NAVIGATION DRAWER FOOTER -->
    <template v-slot:append> 
      <h3 class="hb-title" :class="{ leftSlide: drawer }"> 
        <span class="blue neon-header">
        <VisitCounter class="white-text"/>
        </span>
      </h3>
    </template>
  </v-navigation-drawer>



    
    <!-- CONTENT -->
    <router-view></router-view>


    <!-- FOOTER 
    fluid - Essencial para ocupar toda a width
    -->
    <v-container class="app-blue" fluid>
      <v-row >
        <v-footer dark padless class="app-blue"  >
          <v-card flat tile class="text-center app-blue center-card" >
            <v-card-text style="margin:0 auto;text-align: center;">
              <v-btn elevation="0"  v-for="icon in icons" :href="icon.url" :key="icon" class="mx-4 white--text app-blue" icon >
                <svg-icon class="social-icon-desktop" type="mdi" :path="icon.img" :size="48"></svg-icon>
              </v-btn>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="app-footer-blue" style="color:white;" >
              <strong><VisitCounter /> </strong>

              {{ new Date().getFullYear() }} — <strong> Handmade by Pedro Esteves (@darealesteves) with passion :)</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-row>
    </v-container>

  <!-- Added notifications on App.vue -->
  <notifications>
    <template #body="props" >
      <div class="my-notification" style="background-color:yellow; text-align:left; margin-top:5%;   border: 1px solid red;">
        <p class="title" style="text-align:left;">
          {{ props.item.title }}
        </p>
        <div v-html="props.item.text"/>
      </div>
    </template>
  </notifications>

  </v-app>
</template>

<script>
import { mdiMenu,mdiLinkedin,mdiYoutube,mdiGithub }  from '@mdi/js';
import { notify } from "@kyvg/vue3-notification";

import avatar        from './assets/cartoon/avatar.png';
import enFlag        from './assets/flags/EN.png'
import ptFlag        from './assets/flags/PT.png'
import store         from './store';
import tiles         from './assets/tile.png';
import translations  from  './translations/app.js';
import Professional  from './views/Professional.vue'
import VisitCounter  from  './components/VisitCounter.vue';


export default {
  name: 'App',
  setup() {
    return {
        mdiMenu
      }
  },
  computed: {
    text_find_me_online:  function() { 
      return translations["find_me_online"][this.$store.state.lang]; 
    },
    text_mobile_header_subtitle:  function() { 
      return translations["header_mobile_subtitle"][this.$store.state.lang]; 
    },
    text_desktop_header_subtitle:  function() { 
      return translations["header_desktop_subtitle"][this.$store.state.lang]; 
    }  
  },
  components: {
    Professional,
    VisitCounter
  }, 
  mounted() {

    //resizes every time screen size change.
    window.addEventListener('resize', this.calculateFirstDivHeight);
    this.calculateFirstDivHeight();
    this.headerAnimations = true;

  },
  data: () => ({
      drawer: false,
      headerAnimations: false,
      group: null,
      avatar,ptFlag, enFlag,tiles,
      image: { background: "url(" + tiles + ") center center" ,'background-repeat': 'repeat-x', 'background-size' : 'auto 100%' ,  },
      icons: [
        {"img": mdiLinkedin, "url":"https://www.linkedin.com/in/pedro-fonseca-esteves/" },
        {"img": mdiGithub,   "url":"https://github.com/PedroFortunatoEsteves" },
        {"img": mdiYoutube,  "url":"https://www.youtube.com/channel/UCXqBZ8rXVdcyvtcDJ6_fiNg" }
      ],
      toolbarItems: [
        { 
          title: {
            'pt': 'Sobre Mim 👨‍💻',
            'en': 'About Me 👨‍💻'
           },
          path: '/aboutme',
          icon: 'build'
        },
        { 
          title: {
            'pt':'Professional 💼',
            'en': 'Professional 💼'
           },
          path: '/professional',
          icon: 'build'
        },
        { 
          title: {
          'pt':'Blog ✍️',
          'en':'Blog ✍️'
          },
          path: '/blog',
          icon: 'contact_support'
        },
        { 
          title: {
          'pt':'Atelier 🎨',
          'en':'Atelier 🎨'
          },
          path: '/atelier',
          icon: 'contact_support'
        }
      ]
    }),
  watch: {

  },
  methods: {
    updateLanguage(activeLang){

      //Check if the choosen language is available for the current route:
      if (this.$route.meta.availableLangs.includes(activeLang)){
        this.$store.commit('updateLang', activeLang);
      }
      else{
        console.log("this language is not available for the current route");
        
        if (activeLang == "pt"){
          notify({
            "title": "Aviso",
            title: "⚠️ Esta página ainda não está disponível em português.",
            type: "warn"
          });
        }
        else if (activeLang == "en"){
          notify({
            title: "⚠️ Warning",
            text: "This page is not available in English yet",
            type: "warn"
          });
        }
      }
    },

    checkHamburguerStatus(){
      if (this.drawer == false){
        document.documentElement.style.overflow = "auto";
      }
    },
    clickDrawer(){
      this.drawer = !this.drawer;

      //When hamburguer is selected want to disable scroll on the page
      if (this.drawer == true){
        document.documentElement.style.overflow = "hidden";
      }
      else{
        document.documentElement.style.overflow = "auto";
      }
    },

    calculateFirstDivHeight(){
      
      let toolbarHeight = document.getElementById("desktopHeader").clientHeight;
      if (toolbarHeight == 0){
          toolbarHeight = document.getElementById("mobileHeader").clientHeight;
      }

      let screenHeight = window.innerHeight;
      let bodyVH = 100 - toolbarHeight / screenHeight * 100;
      this.$store.commit('bodyHeight', bodyVH);
    }
  } 
}
</script>

<style lang="scss" scoped>
  @import  "./styles/animation.scss";
  @import  "./styles/app.scss";
  @import  "./styles/text.scss";
  @import  "./styles/hb.scss";
  @import  "./styles/images.scss";

  .v-navigation-drawer{
      /* Add the following CSS to change the direction of the drawer */
      right: 0;
      transform: translateX(100%);
      background-color: red;
      color:red;
  }


</style>