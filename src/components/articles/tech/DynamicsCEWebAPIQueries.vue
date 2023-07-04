<template>
  <v-container >
    <div  class="article-div">
      <h1 class="pe-text blue-text"> Dynamics CE Web API queries</h1>
      <BreadCrumbs  :items="breadcrumbs" />

      <h2 class="blue-text pe-text">Web API Query Index</h2>
      <div>
        <li class="pe-text underline" v-for="item in indexItems" :key="item.id" @click="scrollToElement(item.id)">
          {{ item.text[this.$store.state.lang] }}
        </li>
      </div>
      <br>

      <h2 id="ListComponents" class="pe-text blue-text" v-html="listComponentsTitle" />
        <b>Query Example: </b> <br> org_url/api/data/v9.2/solutioncomponents?$filter=_solutionid_value eq &ltsolution_id&gt  
        <br><br>
      <p class ="pe-text" v-html="listComponentsFromSolution"/>
      <ArticleFigure :figure=listComponents />


      <h2 id="ShowSolutionLayers" class="pe-text blue-text" v-html="showSolutionLayersTitle"/> 
        <b>Query Example: </b> org_url/api/data/v9.2/RetrieveSolutionMetadataForComponent(SolutionComponentName='SLAItem',ColumnNames=['slaitemid'],ColumnValues=[&ltslaitemid&gt])
        <br><br>

      <p class="pe-text" v-html="showSolutionLayersText" /> 
      <ArticleFigure :figure=showSolutionLayers />


      <h2 id="AddComponents" class="pe-text blue-text" v-html="addComponentToSolution"/>
        <b>Query Example: </b> 
        <br>fetch(window.origin + "/api/data/v9.2/AddSolutionComponent",{ <br>
          &nbsp method: "POST", <br>
          &nbsp headers: {'Content-Type': 'application/json'}, <br>
          &nbsp body: JSON.stringify({ <br>
            &nbsp &nbsp 'ComponentId':'21f4e2bd-3bbf-ed11-83ff-000d3adf6e95', <br>
            &nbsp &nbsp 'ComponentType':10076,<br>
            &nbsp &nbsp 'SolutionUniqueName':'exportSLAItem', <br>
            &nbsp &nbsp 'AddRequiredComponents':false, <br>
            &nbsp &nbsp 'DoNotIncludeSubcomponents':false, <br>
            &nbsp &nbsp 'IncludedComponentSettingsValues':null <br> 
          })
        });
        <br><br>

        <p class="pe-text" v-html="addComponentToSolutionText"/> 
        <ArticleFigure :figure=addComponentsToSolution />
        <br>


      <h2 id="RemoveComponents" class="pe-text blue-text" v-html="removeComponentFromSolutionTitle"/>
      <p> 
        <b>Query Example: </b> 
        <br>
        fetch(window.origin + "/api/data/v9.2/RemoveSolutionComponent",{ <br>
        &nbsp method: "POST", <br>
        &nbsp headers: {'Content-Type': 'application/json'}, <br>
        &nbsp body: JSON.stringify({ <br>
        &nbsp &nbsp 'SolutionComponent': {"solutioncomponentid": "21f4e2bd-3bbf-ed11-83ff-000d3adf6e95"}, <br>
        &nbsp &nbsp 'ComponentType':10076, <br>
        &nbsp &nbsp 'SolutionUniqueName': 'exportSLAItem' <br>
        }) });
      </p>
      
      <br>
      <p class="pe-text" v-html="removeComponentFromSolutionText"/> 


      <ArticleFigure :figure=removeComponentsFromSolution />


    </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';
import { functionMixin } from '../../../components/functionMixin.js'
import translations from  '../../../translations/articles/dynamicscewebapi.js';


export default {
  name: 'Dynamics CE Web API Queries',
  mixins: [functionMixin],
  components: {ArticleFigure,BreadCrumbs},
  computed: { 
    title:                            function() { return translations["title"][this.$store.state.lang];},
    showSolutionLayersTitle:          function() { return translations["showSolutionLayersTitle"][this.$store.state.lang];},
    showSolutionLayersText:           function() { return translations["showSolutionLayersText"][this.$store.state.lang];},
    listComponentsTitle:              function() { return translations["listComponentsTitle"][this.$store.state.lang];},
    listComponentsFromSolution:       function() { return translations["listComponentsFromSolution"][this.$store.state.lang];},
    addComponentToSolution:           function() { return translations["addComponentToSolutionTitle"][this.$store.state.lang];},
    addComponentToSolutionText:       function() { return translations["addComponentToSolutionText"][this.$store.state.lang];},
    removeComponentFromSolutionTitle: function() { return translations["removeComponentFromSolutionTitle"][this.$store.state.lang];},
    removeComponentFromSolutionText:  function() { return translations["removeComponentFromSolutionText"][this.$store.state.lang];}
  },
  data: () => ({
    indexItems: [
        { id: 'ListComponents',      text: {"en": "List Solution Components",           "pt": "Lista Componentes De Uma solução" }},
        { id: 'ShowSolutionLayers',  text: {"en": "Show Solution Layers Of A Component","pt": "Mostra As Solution Layers De Uma Componente" }},
        { id: 'AddComponents',       text: {"en": "Add Component To A Solution",       "pt": "Adiciona Componentes A Solução"}},
        { id: 'RemoveComponents',    text: {"en": "Remove Component From A Solution",  "pt": "Remove Componentes De Uma Solução" }}
    ],
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"}, "path":"/blog"},
      {"title": {"en": "Tech", "pt": "Tech"},  "path":"/blog/tech"},
      {"title": {"en": "Dynamics CE Web API Queries", "pt": "Dynamics CE Web API Queries"}, "path":"/blog/tech/DynamicsCEWebAPIQueries"},
    ],
    listComponents: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682385827/pedrofortunatoesteves-site/blog/tech/webAPIQueries/listComponentsOfSolution_shwo4f.png",
        "description": {
          "pt": "Lista as componentes que existem dentro de uma solução.",
          "en": "List the components that exist inside a solution."
        },
        "width": "100"
    },
    showSolutionLayers: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682385892/pedrofortunatoesteves-site/blog/tech/webAPIQueries/Screenshot_from_2023-04-25_02-24-10_h8519y.png",
        "description": {
          "pt": "Lista as componentes que existem dentro de uma solução",
          "en": "List the components inside a solution."
        },
        "width": "100"
    },
    removeComponentsFromSolution: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1684537690/pedrofortunatoesteves-site/blog/tech/webAPIQueries/image_1_snquwj.png",
        "description": {
          "pt": "Remove componente de dentro de uma solução.",
          "en": "Remove component from a solution using the Web API."
        },
        "width": "100"
    },
    addComponentsToSolution: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1684537690/pedrofortunatoesteves-site/blog/tech/webAPIQueries/image_lgprv2.png",
        "description": {
          "pt": "Adiciona componente a uma solução usando a Web API",
          "en": "Add component to a solution using Web API."
        },
        "width": "100"
    }            
  }),
  
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>