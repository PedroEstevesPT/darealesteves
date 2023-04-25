<template>
  <v-container >
    <div  class="article-div">
      <h1 class="pe-text blue-text"> Dynamics CE Web API queries</h1>

      <BreadCrumbs  :items="breadcrumbs" />

      <br>
      <h2 class="blue-text pe-text">Web API Query Index</h2>
      <li class="pe-text underline" @click="scrollToElement('ShowSolutionLayers')"> Show Solution Layers Of A Component</li>
      <li class="pe-text underline" @click="scrollToElement('ListComponents')"> List Solution Components</li>
      <li class="pe-text underline" @click="scrollToElement('AddComponents')"> Add Component To A Solution </li>
      <li class="pe-text underline" @click="scrollToElement('RemoveComponents')"> Remove Component From A Solution</li>
      <br>

      <h2 id="ListComponents" class="pe-text blue-text"> List Solution Components</h2>
      <p> 
        <b>Query: </b> org_url/api/data/v9.0/solutioncomponents?$filter=_solutionid_value eq &ltsolution_id&gt  
        <br><br>
        This query is useful because not all components are visible through the Legacy and the make.powerapps UI. <br>
        Furthermore this query also shows the componenttype of each component which is an important attribute required by other queries.
      </p>
      <ArticleFigure :figure=listComponents />


      <h2 id="ShowSolutionLayers" class="pe-text blue-text"> Show Solution Layers of A Component </h2>
      <p> 
        <b>Query: </b> org_url/api/data/v9.2/RetrieveSolutionMetadataForComponent(SolutionComponentName='SLAItem',ColumnNames=['slaitemid'],ColumnValues=[&ltslaitemid&gt])
        <br><br>
        For some components (which are not visible through the UI) an alternative to check their solution layers is through the Web API as it can be seen below.
      </p>
      <ArticleFigure :figure=showSolutionLayers />



      <h2 id="ListComponents" class="pe-text blue-text"> Add Component To A Solution </h2>

      <h2 id="ListComponents" class="pe-text blue-text"> Remove Component From A Solution </h2>


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/Fablemans.js';

export default {
  name: 'Dynamics CE Web API Queries',
  components: {ArticleFigure,BreadCrumbs},
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"},       "path":"/blog"},
      {"title": {"en": "Tech", "pt": "Tech"},    "path":"/blog/tech"},
      {"title": {"en": "Dynamics CE Web API Queries", "pt": "Dynamics CE Web API Queries"}, "path":"/blog/tech/DynamicsCEWebAPIQueries"},
    ],
    showSolutionLayers: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682385892/pedrofortunatoesteves-site/blog/tech/webAPIQueries/Screenshot_from_2023-04-25_02-24-10_h8519y.png",
        "description": {
          "pt": "Lista as componentes que existem dentro de uma solução",
          "en": "List the components inside a solution."
        }
    },
    listComponents: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682385827/pedrofortunatoesteves-site/blog/tech/webAPIQueries/listComponentsOfSolution_shwo4f.png",
        "description": {
          "pt": "Lista as componentes que existem dentro de uma solução-",
          "en": "List the components that exist inside a solution."
        }
    }

    
  }),
  
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>