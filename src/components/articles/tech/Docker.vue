<template>
  <v-container >
  <div  class="article-div">

    <h1 class="pe-text blue-text" v-html="title" /> 
    <BreadCrumbs  :items="breadcrumbs" />

    <h2 class="pe-text blue-text" v-html="virtualizationTitle"  />
    <br>
    <p class="pe-text" v-html="virtualizationText" /> 
    <br>

    <h2 class="pe-text blue-text" v-html="dockerVirtualizationTitle" />
    <br>
    <p class="pe-text" v-html="dockerVirtualizationText" />


    <br>
    <h2 class="pe-text blue-text" v-html="usefulLinks" /> 
    <br>

    <li v-for="(link, index) in links" :key="index" >
      <a class="no-underline" :href="link.url" target="_blank">{{ link.text[this.$store.state.lang] }}</a>
    </li>

      <li>
        <router-link to="/blog/tech/dotnetWebApiAzure" class="no-underline"> 
          Deploying Dockerized Flask App to Azure
        </router-link>
      </li>
    </div>





  </v-container>
</template>
<script>

import BreadCrumbs  from  '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/Docker.js';


export default {
  name: 'Docker',
  components: {BreadCrumbs},
  computed: { 
    title:                     function(){ return translations["title"][this.$store.state.lang];},
    virtualizationTitle:       function(){ return translations["virtualization-title"][this.$store.state.lang];},
    virtualizationText:        function(){ return translations["virtualization-text"][this.$store.state.lang];},
    dockerVirtualizationTitle: function(){ return translations["docker-virtualization-title"][this.$store.state.lang];},
    dockerVirtualizationText:  function(){ return translations["docker-virtualization-text"][this.$store.state.lang];},
    usefulLinks:               function(){ return translations["useful-links"][this.$store.state.lang];},
 },
  data: () => ({
    breadcrumbs: [
      {"title": {"en":'Blog',   "pt": "Blog"},   "path":"/blog"},
      {"title": {"en":'Tech',   "pt": "Tech"},   "path":"/blog/tech"},
      {"title": {"en":'Docker', "pt": "Docker"}, "path":"/blog/tech/docker"}
    ],
    links: [
      {
        text: { "en": "Publish an ASP.NET Core web API to Azure API Management with Visual Studio" ,"pt": "Publish an ASP.NET Core web API to Azure API Management with Visual Studio" },
        url:  'https://learn.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-api-management-using-vs?view=aspnetcore-7.0'
      },
      {
        text: { "en": "Tutorial: Containerize a .NET app" ,"pt": "Tutorial: Containerize a .NET app"  },
        url:  'https://learn.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=linux' 
      },
      {
        text: { "en": "Introduction To Docker and Docker Containers" ,"pt": "Introduction To Docker and Docker Containers"  },
        url:  'https://www.youtube.com/watch?v=JSLpG_spOBM' 
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>