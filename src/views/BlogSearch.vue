<template>
  <v-container class="container">
    
    <br><br><br><br>   


     
    <div  :class="{ leftSlide: initialLoad }"  style="text-align:center; position: relative; " >
      <h1 style="margin: 0 auto; text-align:center;" class="pe-text blue-text"> 
        {{searchTitle[this.$store.state.lang]}} 
      </h1> 
      <br>
      <p class="pe-text-120" style="text-align:center;margin: 0 auto;"> 
            {{blog_subtext[this.$store.state.lang]}}  
      </p> 

    <v-container class="results-container" style="height: 200px; position: absolute; left: 0; right: 0; transform: translateY(10px);">
      
      <input v-model="searchTerm" @input="search" @keyup.enter="redirectToResults" type="text" :placeholder="searchPlaceholder[this.$store.state.lang]"  class="pe-text-120" />
     
      <ul v-for="result in results" :key="result.id" @click="selectResult(result)" class="result-card">
        <router-link :to="result.endpoint" class="no-underline">
          <div style="text-align: left;">
          <span class="pe-text-120"> &nbsp&nbsp {{ result.title }} ({{result.category.trim()}})</span> <br>
          </div>
        </router-link>
      </ul>
    </v-container>
  </div>

  <br><br><br>     
  <br><br><br>     
  <br><br><br><br>     
    
    <!-- BLOG CATEGORIES -->
    <div :class="{ rightSlide: initialLoad }" >
      <h1  class="pe-text blue-text" style="margin: 0 auto; text-align:center;">  
        {{categoriesTitle[this.$store.state.lang]}} 
      </h1>
      <br><br>

      <!-- CATEGORIES LAPTOP -->
      <v-row v-model="selectedItem" class="hidden-sm-and-down" v-animate-onscroll="{initialLoad: 'animated fadeInLeft'}">
        <v-col  v-for="(item, i) in items" :key="i" cols="12" lg="4" md="4" sm="4" style="text-align:center;" >
          <router-link v-if="item && item.blogcategory" :to="{name: item.blogCategoryName , params: item.articles}" class="no-underline"> 
            <p style="text-align: center;" class="pe-text-120" v-html="item.title[this.$store.state.lang]" /> 
          </router-link>
        </v-col>
      </v-row> 

      <!-- CATEGORIES MOBILE -->
        <v-list-item-group
          v-model="selectedItem"
          class="hidden-md-and-up"
          style="justify-content: center; text-align:left; display: grid;" 
        >
          <v-list-item v-for="(item, i) in items" >
            <!-- OPTION -->    
            <li class="pe-text ">
              <router-link v-if="item && item.blogcategory" :to="{name: item.blogCategoryName , params: item.articles}" class="no-underline"> 
              {{item.title[this.$store.state.lang]}} 
              </router-link>
            </li>
          </v-list-item>
        </v-list-item-group>
      </div>
  </v-container>
</template>
<script>

import axios from 'axios'; 
import { mdiAccount } from '@mdi/js'
import BlogCategory   from '../components/BlogCategory.vue';
import blogContent    from '../components/blogContent/blogCategories.js';

export default {
  name: 'BlogSearch',
  components: {BlogCategory},
  setup() {
    return {
      mdiAccount
    }
  },
  created(){
    this.initialLoad = true;
  },
  methods: {
    redirectTo(url){
      window.location.href=url;      
    },
   search() {
      this.results = [];
      if (this.searchTerm.length > 3) {
        // Make query to backend with this.searchTerm and language from store
        axios
          .get('https://pedroestevespersonalsite-backend.azurewebsites.net/api/blog_posts/search', {
            params: {
              searchWord: this.searchTerm,
              language: this.$store.state.lang
            }
          })
          .then(response => {
            this.results = response.data;
            this.showDropdown = true;
          })
          .catch(error => {
            console.error('Error searching blog posts:', error);
          });
      } else {
        this.results = [];
        this.showDropdown = false;
      }
    }
  },
  mounted(){
    this.items = blogContent;
  },
  data: () => ({
      dialog: false,
      initialLoad: false,
      items: null,
      blog_subtext:      {"en": "All the displayed results are in English.",
                          "pt": "Todo os resultados apresentados estão em português."},
      searchTitle:       {"en": "Search", "pt": "Pesquisar"},
      categoriesTitle:   {"en": "Categories", "pt": "Categorias"},
      searchPlaceholder: {"en":"Search...","pt":"Pesquisa..."},
      results: [],
      searchTerm: ''
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";
@import  "../styles/animation.scss";


.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 60%;
  }
}

.centerBlogCategory {
  display: grid;
  justify-content: center;
}

.blog-col2 {
  display: flex;
}
.blog-option-title2 {
  margin: 0 auto;
  text-align: left;
}

//All that appears below is to style the dropdown
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
}

li {
  padding: 10px;
  cursor: pointer;
}

li:hover {
  background-color: #e0e0e0;
}

.no-underline span.pe-text {
    text-align: left;
}

@media (min-width: 768px) {
  /* Styles for screens with minimum width of 768px (tablets and larger) */
  .results-container {
    max-width: 600px;
  }

  .result-card {
    margin-right: 8px; /* Add margin between cards */
  }
}
</style>