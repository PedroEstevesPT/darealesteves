
<template >
  <v-app >
    <div class="app-container">
  
    <!--
      FULSCREEN HEADER 
      Estou a calcular o vh que a toolbar ocupa
    --> 
    <div class="hidden-md-and-down appHeader"  :style="headerTile"   id="desktopHeader">
      <v-row     align="end" justify="center"  >
        <v-col   md="4"   >
            <v-img  class="ml-auto" :class="{ downSlide: headerAnimations }"  :src="avatar"  width="110"/>
        </v-col>
        <v-col :class="{ downSlide: headerAnimations }" md="8" lg="6" sm="12">
          <h1   class="font-header" style="font-size:240%;" > 
          <span class="blue neon-header">&nbsp Pedro Esteves &nbsp</span>
          </h1> 
          <p class="font-header"  style="font-size:210%; font-weight:bold;" >
            <span class="blue neon-header" > {{text_desktop_header_subtitle}}</span>
          </p>           
        </v-col>
      </v-row>
    </div>

<!--
  background-color: transparent;
  position: absolute; 
  top: 0%; 
  left: 0; 
  right: 0;
  -->

  <div  :class="desktopToolbarColor"  >
    <div style="display: flex; justify-content: center;"> <!-- TOOLBAR NON MOBILE -->
      <v-toolbar class="hidden-sm-and-down" :class="desktopButtonsToolbarColor" id="toolbar" >
        <div>
          <v-toolbar-items class="mx-auto">
            <v-btn
              v-for="(item, idx) in toolbarItems"
              :key="idx"
              :to="item.path"
              variant="plain"
              style="opacity:100%;font-size:130%;"
            >
              <router-link class="toolbar-option" :to="item.path">
                <span class="toolbar-btn" >{{ item.title[this.$store.state.lang] }}</span>
              </router-link>
            </v-btn>
          </v-toolbar-items>
        </div>
        <!-- LANGUAGES -->
        <div class="d-flex align-center pl-3">
          <v-toolbar-title>
            <div @click="updateLanguage('pt')">
              <v-img contain class="language-img hidden-sm-and-down" width="80" :src="ptFlag"></v-img>
              <v-img contain class="language-img hidden-md-and-up"   width="70" :src="ptFlag"></v-img>
            </div>
          </v-toolbar-title>
          <v-toolbar-title class="pl-3">
            <div @click="updateLanguage('en')">
              <v-img contain class="language-img hidden-sm-and-down" width="80" :src="enFlag"></v-img>
              <v-img contain class="language-img hidden-md-and-up"   width="70" :src="enFlag"></v-img>
            </div>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </div>
      </v-toolbar>
    </div>
  </div>


    <!-- TOOLBAR MOBILE TABLET-->
    <v-toolbar dense class="mobile-toolbar hidden-md-and-up" :class="mobileToolbarColor">
      <div class="d-flex align-center" style="padding-left:5%;">
        <v-toolbar-title>
          <div @click="updateLanguage('pt')" class="mr-2">
            <v-img contain class="language-img hidden-sm-and-down" width="60" :src="ptFlag"></v-img>
            <v-img contain class="language-img hidden-md-and-up" width="60" :src="ptFlag"></v-img>
          </div>
        </v-toolbar-title>
        <v-toolbar-title>
          <div @click="updateLanguage('en')" class="mr-auto">
            <v-img contain class="language-img hidden-sm-and-down" width="60" :src="enFlag"></v-img>
            <v-img contain class="language-img hidden-md-and-up" width="50" :src="enFlag"></v-img>
          </div>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="clickDrawer()" color="white">
        <svg-icon type="mdi" :path="mdiMenu" size="48"></svg-icon>
      </v-app-bar-nav-icon>
    </v-toolbar>





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
      <span class="blue neon-header">  {{ new Date().getFullYear() }} - Pedro Esteves</span>    
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
  </div>
  <CustomFooter />

  </v-app>
</template>

<script>

import { mdiMenu,mdiLinkedin,mdiYoutube,mdiGithub }  from '@mdi/js';
import { notify } from "@kyvg/vue3-notification";
import {watch,ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';

import avatar        from './assets/cartoon/avatar.png';
import enFlag        from './assets/flags/EN.png'
import ptFlag        from './assets/flags/PT.png'
import store         from './store';
import headerTile    from './assets/app/header_tile.png';
import translations  from  './translations/app.js';
import CustomFooter  from  './components/CustomFooter.vue';
import Professional  from './views/Professional.vue'
import VisitCounter  from  './components/VisitCounter.vue';
import { functionMixin } from './components/functionMixin.js'


export default {
  name: 'App',
  mixins: [functionMixin],
  components: {
    Professional,
    VisitCounter,
    CustomFooter
  }, 
  setup() {
    const existingData = {
      mdiMenu // Your existing properties and methods
    };

    const mobileToolbarColor = ref(''); // Initial toolbar class
    const desktopToolbarColor = ref('');
    const desktopButtonsToolbarColor = ref('');

    const route = useRoute();

    const updateToolbarClass = () => {
      // Define your logic to determine the toolbar class based on the route/component
      if (route.name === 'About Me') {
        mobileToolbarColor.value = 'transparent-mobile-toolbar';
        desktopButtonsToolbarColor.value = 'transparent-desktop-toolbar';
      } 
      else if (route.name === 'Professional') {
        mobileToolbarColor.value = 'transparent-mobile-toolbar';
        desktopButtonsToolbarColor.value = 'dark-desktop-toolbar'; 
      }
      else {
        mobileToolbarColor.value = 'standard-mobile-toolbar';
        desktopToolbarColor.value = 'blue-desktop-toolbar'; 
        desktopButtonsToolbarColor.value = 'blue-desktop-toolbar';
      }
    };

    watch(
      () => route.name,
      () => {
        // Update toolbar class based on the route/component change
        updateToolbarClass();
      }
    );

    onMounted(() => {
      // Set the initial toolbar class based on the current route/component
      updateToolbarClass();
    });

    return {
      ...existingData, // Merge existing properties and methods
      mobileToolbarColor, // Include the toolbarClass in the returned object
      desktopButtonsToolbarColor,
      desktopToolbarColor
    };
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
      avatar,ptFlag, enFlag,headerTile,
      headerTile: { background: "url(" + headerTile + ") center center" ,'background-repeat': 'repeat-x', 'background-size' : 'auto 100%' ,  },
      icons: [
        {"img": mdiLinkedin, "url":"https://www.linkedin.com/in/pedro-esteves-pt/" },
        {"img": mdiGithub,   "url":"https://github.com/PedroEstevesPT" },
        {"img": mdiYoutube,  "url":"https://www.youtube.com/channel/UCXqBZ8rXVdcyvtcDJ6_fiNg" }
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
          path: '/projects',
          icon: 'contact_support'
        } 
      ]
    }),
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
        toolbarHeight = 0 //caso do Mobile em que o tablet nao tem altura
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

//ensures that the footer appears at the end of each div
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.v-navigation-drawer{
    /* Add the following CSS to change the direction of the drawer */
    right: 0;
    transform: translateX(100%);
}

</style>