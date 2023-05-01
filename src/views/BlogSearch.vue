<template>
  <v-container >
     <br><br><br>





  <div style="text-align:center; position: relative;">
    <h1 style="margin: 0 auto; text-align:center;" class="pe-text blue-text"> 
      {{searchTitle[this.$store.state.lang]}} 
    </h1> 
    <br>
    <p class="pe-text" style="text-align:center;margin: 0 auto;"> 
          {{blog_subtext[this.$store.state.lang]}}  
    </p> 

<v-container class="results-container" style="height: 200px; position: absolute; left: 0; right: 0; transform: translateY(10px);">
  <input v-model="searchTerm" @input="search" @keyup.enter="redirectToResults" type="text" :placeholder="searchPlaceholder[this.$store.state.lang]" style="width: 100%;" />
  <ul v-for="result in results" :key="result.id" @click="selectResult(result)" class="result-card">
    <router-link :to="result.endpoint" class="no-underline">
      <div style="text-align: left;">
      <span class="pe-text"> &nbsp&nbsp {{ result.title }} ({{result.category.trim()}})</span> <br>
      </div>
    </router-link>
  </ul>
</v-container>
  </div>

    <br><br><br>     
    <br><br><br>     
    <br><br><br>     
    
    <!-- BLOG CATEGORIES -->
    <h1  class="pe-text blue-text" style="margin: 0 auto; text-align:center;">  
      {{categoriesTitle[this.$store.state.lang]}} 
    </h1>
    <br><br>

      <!-- CATEGORIES LAPTOP -->
      <v-row v-model="selectedItem" class="hidden-sm-and-down" >
        <v-col  v-for="(item, i) in items" :key="i" cols=12 sm=4 style="text-align:center;">
          <router-link v-if="item && item.blogcategory" :to="{name: item.blogCategoryName , params: item.articles}" class="no-underline"> 
           <div style="text-align: center;" class="pe-text"> 
              {{item.title[this.$store.state.lang]}} 
           </div>
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
            <li class="pe-text">
              <router-link v-if="item && item.blogcategory" :to="{name: item.blogCategoryName , params: item.articles}" class="no-underline"> 
              {{item.title[this.$store.state.lang]}} 
              </router-link>
            </li>
          </v-list-item>
        </v-list-item-group>

  <br>
  </v-container>
</template>
<script>

import axios from 'axios'; // Import axios library for making HTTP requests
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
  computed: {
    mdItemsCount() {
      // set the number of columns to 3 on desktop and 1 on mobile
      return this.$vuetify.breakpoint.mdAndUp ? 4 : 12;
    }
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
          .get('https://pedroestevespersonalsite-backend.azurewebsites.net/blog_posts/search', {
            params: {
              q: this.searchTerm,
              language: this.$store.state.lang
            }
          })
          .then(response => {

            // Update this.results with the returned results
            console.log("Printing response data:");
            console.log(response.data)

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
    },
    selectResult(result) {
      // Handle when a result is selected from the dropdown
      // e.g., redirect to a page with more details about the result
      console.log('Selected:', result);
    },
    redirectToResults() {
      // Handle when Enter is pressed
      // e.g., redirect to a page with all the search results
      console.log('Redirect to results page');
    }
    
  },
  mounted(){
    this.items = blogContent;
  },
  data: () => ({
      dialog: false,
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