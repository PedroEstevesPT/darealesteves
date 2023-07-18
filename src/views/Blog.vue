<template>
  <v-container >
   <div > 
    <br> <br>
    <v-row class="text-center" align="center" justify="center" >

        <v-row>
          <v-col v-for="(item,i) in items" :key="i"  cols="12" xl="4" lg="4" md="4" sm="12" xs="12" >
            <v-sheet>              
            
              <!-- TITLE -->
              <router-link  v-if="item && item.blogcategory"  :to="{name: item.blogCategoryName , params: item.articles}" class="no-underline">                 
                <h2 class="pe-text blog-option-title blue-text">{{item.title[this.$store.state.lang]}}</h2><br>
              </router-link>

              <!-- FOODIES or PHOTOS' -->
              <div class="centerBlogCategory" 
                v-if="item['title']['en'] == 'Foodies 🍲' || item['title']['en'] == 'Photos 📸'">

                <router-link :to="item.blogcategory"  class="no-underline"> 
                  <p> {{item.msg[this.$store.state.lang]}} </p>
                </router-link>
              </div>

              <!-- MUSIC -->
              <div class="centerBlogCategory" v-else-if="item['title']['en'] == 'Music 🎸'">
                <div v-for="(art,i) in item.articles" :key=i >
                  <a :href="art.path" class="no-underline"> 
                    <li class="pe-text blog-option-value"  > {{art.title}} </li> 
                  </a>
                </div>
              </div>


              <!-- Other categories -->
              <v-list-item-group class="centerBlogCategory" v-else>
                <template v-for="art in item.articles">
                  <v-list-item v-if='Object.keys(art["title"]).includes(this.$store.state.lang)' :key="art.id">
                    <!-- OPTION -->    
                    <router-link :to="art.path"  class="no-underline">                 
                      <li class="pe-text blog-option-value" >
                        {{art.title[this.$store.state.lang]}} 
                      </li>
                    </router-link>
                  </v-list-item>
                </template>
              </v-list-item-group>


              
            </v-sheet>
            <br><br>
          </v-col>
        </v-row>
    </v-row>
    </div>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>



  </v-container>
</template>
<script>


import { mdiAccount } from '@mdi/js'
import BlogCategory   from '../components/BlogCategory.vue';
import blogContent    from '../components/blogContent/blogCategories.js';

export default {
  name: 'Blog',
  components: {BlogCategory},
  setup() {
    return {
      mdiAccount
    }
  },
  methods: {
    redirectTo(url){
      window.location.href=url;      
    }  
  },
  mounted(){
    this.items = blogContent;
  },
  data: () => ({
      dialog: false,
      items: null
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
</style>