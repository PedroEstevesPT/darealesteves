<template>
  <v-container >
     <br><br><br>



 <h1 style="margin: 0 auto; text-align:center;" class="pe-text blue-text"> Blog</h1> 
    <br>

<div style="text-align:center; position: relative;">
  <v-container class="results-container" style="height: 200px; position: absolute; left: 0; right: 0; transform: translateY(10px);">
    <input v-model="searchTerm" @input="search" @keyup.enter="redirectToResults" type="text" placeholder="Search..." style="width: 100%;" />
    <v-card v-for="result in results" :key="result.id" @click="selectResult(result)" class="result-card">
      <router-link :to="result.endpoint" class="no-underline">
        <span class="pe-text">{{ result.title }}  ({{result.category}} )</span> <br>
      </router-link>
    </v-card>
  </v-container>
</div>
    <br><br><br>     
    <br><br><br>     

    <br><br><br>     
    
    <!--Blog categories -->
     <h1 style="margin: 0 auto; text-align:center;" class="pe-text blue-text"> Categorias </h1> <br><br>

    <div style="margin: 0 auto;text-align:center; display: flex; flex-wrap: wrap;">
      <v-row class="text-center" align="center" justify="center" >
        <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
          <router-link v-if="item && item.blogcategory" :to="{name: item.blogCategoryName , params: item.articles}" class="no-underline">
              <p class="centerBlogCategory pe-text blog-option-title blue-text" style="text-align:left;">
                {{item.title[this.$store.state.lang]}}
              </p>
          </router-link>
        </v-col>
      </v-row>
    </div>

    <br><br><br>     
    <br><br><br>     


  </v-container>
</template>
<script>


import { mdiAccount } from '@mdi/js'
import BlogCategory   from '../components/BlogCategory.vue';
import blogContent    from '../components/blogContent/blogCategories.js';
import axios from 'axios'; // Import axios library for making HTTP requests

export default {
  name: 'BlogSearch',
  components: {BlogCategory},
  setup() {
    return {
      mdiAccount
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
  text-align:left; 
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