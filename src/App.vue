
<template>
  <v-app>

    <v-toolbar dark color=""   align-center fixed app>
            <div class="hidden-sm-and-up">
              <v-toolbar-side-icon @click="sidebar = !sidebar" >
              </v-toolbar-side-icon>
            </div>
            <v-toolbar-title >
              <router-link to="/"   tag="span" style="cursor: pointer; " >
              </router-link>
            </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-toolbar-items >
            <v-btn 
              flat
              v-for="(item,idx) in toolbarItems"
              :key="idx"
              :to="item.path">

              <router-link to="/professional">          
                    <v-icon left dark>{{ item.icon }}</v-icon>
                    {{ item.title["pt"] }} 
              </router-link>

            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
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
            <v-img  contain  class="hidden-md-and-up" width=40   :src="enFlag"> </v-img>
          </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

<!--
      <v-main>
        <Professional/>
      </v-main>
  -->

      <router-view></router-view>


  </v-app>
</template>

<script>

import Professional from './components/Professional.vue'
import ptFlag from './assets/flags/PT.png'
import enFlag from './assets/flags/EN.png'

import store from './store';

export default {
  name: 'App',

  components: {
    Professional
  },
  data: () => ({
      ptFlag, enFlag,
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
          'pt':'Hobbies',
          'en':'Hobbies'
          },
          path: '/hobbies',
          icon: 'contact_support'
        } /*,
       { 
          title: {
          'pt':'Acerca deste site',
          'en':'About this ite'
          },
          path: '/hobbies',
          icon: 'contact_support'
        } */
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
