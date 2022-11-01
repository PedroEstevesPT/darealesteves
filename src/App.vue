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
                <div v-if="item.title == 'Login'">
                    <v-btn large style="background-color:green;" >LOG IN </v-btn>
                </div>
                <div flat v-else>
                    <v-icon left dark>{{ item.icon }}</v-icon>
                    {{ item.title["pt"] }} 
                </div>
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>


          <!--
              <v-toolbar-title >
                 <div @click="updateLanguage('pt')">
                    <v-img  contain style="margin: 0 auto;"  class="hidden-sm-and-down" width=50 src="src/assets/flags/PT.png"> </v-img>
                    <v-img  contain style="margin: 0 auto;"  class="hidden-md-and-up" width=40   src="src/assets/flags/PT.png"> </v-img>
                </div>
              </v-toolbar-title>

              <v-toolbar-title >
                <div @click="updateLanguage('en')">
                  <v-img  contain  class="hidden-sm-and-down" width=50 src="src/assets/flags/EN.png"> </v-img>
                  <v-img  contain  class="hidden-md-and-up" width=40   src="src/assets/flags/EN.png"> </v-img>
                </div>
              </v-toolbar-title>
          -->
          
        <v-spacer></v-spacer>


      </v-toolbar>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import store from './store';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
  data: () => ({
      toolbarItems: [
        { 
          title: {
            'pt':'Sobre mim',
            'en': 'About'
           },
          path: '/concept',
          icon: 'build'
        },
        { 
          title: {
          'pt':'Contactos',
          'en':'Contact'
          },
          path: '/faq',
          icon: 'contact_support'
        },
        { 
          title: {
            'pt':'Música',
            'en':'Music',
          } ,
          path: '/destaques', 
          icon: 'phone' 
        }
      ]
    }),
    

  methods: {
    updateLanguage(activeLang){
      this.$store.commit('updateLang', activeLang);
    }
  } 


}
</script>
