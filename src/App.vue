
<template>
  <v-app>
    <!-- HEADER --> 
    <div  :style="image">
    <v-row   class="hidden-sm-and-down" align="end" justify="center"  >
      <v-col   sm="3" md="4"   >
          <v-img  class="ml-auto" :src="avatar"  width="150"/>
      </v-col>
      <v-col  v-animate-onscroll="'animated fadeInDown'"  md="8" lg="6" sm="12">
          <h1   class="font-header" style="font-size:240%;" > 
          <span class="blue neon-header">&nbsp @darealesteves &nbsp</span>
          </h1> 
          <p      class="font-header"  style="font-size:210%; font-weight:bold;" >
            <span class="blue neon-header" > &nbsp {{text_header_subtitle}} &nbsp</span>
          </p>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
      </v-col>
    </v-row>
    </div>

    <!-- MOBILE HEADER -->
    <!-- O v-template e crucial para o v-row nao ocupar a altura toda' -->
    <v-template class="hidden-md-and-up"  :style="image">
     <v-row   class="text-center" align="end" justify="center" >
        <v-col cols="3" >
          <v-img  :src="avatar"  />
        </v-col>
        <v-col sm="8" style="text-align:left;">
          <h4     class="font-header" > 
            <span class=blue style="font-size:140%;">@darealesteves</span>
          </h4> 
          <p   class="font-header"  style="font-weight:bold;" >
            <span class="blue" >  {{text_header_subtitle}}</span>
          </p>
        </v-col>
      </v-row>
    </v-template>

    <!-- TOOLBAR NON MOBILE -->
    <v-toolbar class="hidden-sm-and-down app-blue"  >
        <div class="hidden-sm-and-up app-blue">
          <v-toolbar-side-icon @click="sidebar = !sidebar" >
          </v-toolbar-side-icon>
        </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items >
          <v-btn  flat v-for="(item,idx) in toolbarItems" :key="idx" :to="item.path" >
            <router-link class="toolbar-option"  :to="item.path">          
                <span class="toolbar-btn">{{ item.title[this.$store.state.lang] }}</span>
            </router-link>
          </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      
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
      <v-spacer></v-spacer>
    </v-toolbar>


    <!-- TOOLBAR MOBILE-->
    <v-card  class="hidden-md-and-up" flat tile>
      <v-toolbar dense class="app-blue">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" color=white>
            <svg-icon type="mdi" :path="mdiMenu" :size="48"></svg-icon>
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
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
      </v-toolbar>
    </v-card>

    <!-- HAMBURGER -->  
    <v-navigation-drawer v-model="drawer" absolute bottom temporary >
      <br >
      <h1 justify="center"  class="hb-title" style="border-radius: 4%;"> 
        <span class="blue neon-header"   v-animate-onscroll="{down: 'animated fadeInLeft'}"> @darealesteves</span>
      </h1>
      <v-list nav dense >
        <v-list-item-group v-model="group" active-class="text--accent-4" v-for="(item,idx) in toolbarItems">
          <div v-animate-onscroll="'animated fadeIn'">
            <v-list-item>
              <v-list-item-title >
                  <router-link :to="item.path"  class="hb-option"  >          
                      <li class="hb-option"  v-animate-onscroll="{down: 'animated fadeInLeft'}">{{ item.title[this.$store.state.lang] }} </li>
                  </router-link>
              </v-list-item-title> 
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
      <br>

      <!-- SOCIAL ICONS MOBILE-->      
      <h3 justify="center" class="hb-title" style="border-radius: 4%;">
        <span class="blue neon-header" > {{text_find_me_online}} </span>
      </h3><br><br>
      <div>
        <v-row   class="text-center" align="center" justify="center">
          <v-col v-for="(next,i) in icons" :key="i" cols="12" >
            <div class="hidden-md-and-up" >
              <svg-icon class="hb-icon-mobile" v-if="i%2==0" type="mdi" :path="next.img" ></svg-icon>
              <svg-icon class="hb-icon-mobile" v-else type="mdi" :path="next.img" > </svg-icon>
            </div>
          </v-col>
        </v-row>
      </div> 
    </v-navigation-drawer>

    
    <router-view></router-view>

    <!-- FOOTER -->
    <v-footer dark padless style= "margin: 0 auto;" >
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn elevation="0"  v-for="icon in icons" :href="icon.url" :key="icon" class="mx-4 white--text" icon>
            <svg-icon class="social-icon" type="mdi" :path="icon.img" :size="48"></svg-icon>
          </v-btn>
        </v-card-text>
  

        <v-divider></v-divider>
        <v-card-text class="app-footer-blue" >
          {{ new Date().getFullYear() }} — <strong> Handmade by Pedro Esteves (@darealesteves) with passion :)</strong>
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
import translations from './alltranslations.js';


export default {
  name: 'App',
  setup() {
    return {
        mdiMenu
      }
  },
  computed: {
    text_find_me_online:  function() { 
      return translations["app"]["find_me_online"][this.$store.state.lang]; 
    },
    text_header_subtitle:  function() { 
      return translations["app"]["header_subtitle"][this.$store.state.lang]; 
    } 
  },
  components: {
    Professional
  }, 
  data: () => ({
      drawer: false,
      group: null,
      avatar,ptFlag, enFlag,tiles,
      image: { background: "url(" + tiles + ")" },
  //    image: { background: "url('./src/assets/azulejos.jpg')" },
      icons: [
        {"img": mdiLinkedin,  "url":"https://www.linkedin.com/in/pedro-fonseca-esteves/"},
        {"img": mdiInstagram, "url":"https://www.instagram.com/darealesteves/"},
        {"img": mdiYoutube,   "url":"https://www.youtube.com/channel/UCXqBZ8rXVdcyvtcDJ6_fiNg"}
      ],
      toolbarItems: [
        { 
          title: {
            'pt':'Professional 👨‍💻',
            'en': 'Professional 👨‍💻'
           },
          path: '/darealesteves/',
          icon: 'build'
        },
        { 
          title: {
          'pt':'Blog ✍️',
          'en':'Blog ✍️'
          },
          path: '/darealesteves/blog',
          icon: 'contact_support'
        },
        { 
          title: {
          'pt':'Atelier 🎨',
          'en':'Atelier 🎨'
          },
          path: '/darealesteves/atelier',
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
@import  "./styles/app.scss";
@import  "./styles/text.scss";
@import  "./styles/hb.scss";
@import  "./styles/images.scss";


.background-img{
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

</style>