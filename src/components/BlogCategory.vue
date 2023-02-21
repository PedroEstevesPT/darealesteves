<template>
   <v-container>

        <h1 v-if="title" class="pe-text blue-text">
            {{title[this.$store.state.lang]}} 
        </h1>

        <BreadCrumbs  ref="myBreadCrumbs" :items="breadcrumbs" />

        <template v-if="items" >  
          
          <template v-if="this.$route.name=='music'" > 
            <template  v-for="item in items">               
              <a :href="item.path"  class="no-underline">   
                <li class="pe-text blog-option-value" >
                  {{item.title}} 
                </li>
              </a>
            </template>
          </template> 

          <!-- Other categories -->
          <v-list-item-group >
            <template v-for="art in items">
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

        </template>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>


  </v-container>
</template>

<script>

import BreadCrumbs  from '../components/BreadCrumbs.vue';


export default {
    name: 'BlogCategory',
    components: {BreadCrumbs},
    props: [],
    data() {
      return {
        breadcrumbs: null,
        content: null,
        items: null,
        title: null
      };
    },
    async mounted() {
      const {content} = await this.getContent(this.$route.name);
      var contentKeys = Object.keys(content);

      if (contentKeys.includes('title')){
        this.title = content.title;
      }

      if (contentKeys.includes('articles')){
        this.items = content.articles;
      }

      if (contentKeys.includes('breadcrumbs')){
        this.breadcrumbs = content.breadcrumbs;
      }

    },
    methods: {
      async getContent(routeName) {

        const { default: content } = await import(`./blogContent/${routeName}.js`);
        return { content };
      }
    }   
  };
</script>

<style lang="scss" scoped>
  @import  "../styles/text.scss";



</style>
