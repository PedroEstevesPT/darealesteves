<template>
  <v-container >
  
    <h1 class="blue-text pe-text"> Do Github Pages para o Azure (I)</h1>
    <BreadCrumbs  :items="breadcrumbs" />

    <li class="pe-text underline" @click="scrollToElement('DockerizingFlaskApp')"> Do Github Pages para o Azure</li>
    <li class="pe-text underline" @click="scrollToElement('Redeploying2Azure')"> Redeploying no Azure </li>
    <br>

    <p class="pe-text" v-html="text1" />
    <ArticleFigure :figure=failedDeployment />
    <ArticleFigure :figure=update2Pro />

    <p class="pe-text" v-html="text2" /> 
    <ArticleFigure :figure=deploymentError />
    
    <p class="pe-text" v-html="text3" /> 
    <ArticleFigure :figure=viteBefore />
    <ArticleFigure :figure=viteAfter />

    <p class="pe-text" v-html="text4" /> 
    <ArticleFigure :figure=DeployAzure1 />
    <ArticleFigure :figure=DeployAzure2 />
    <ArticleFigure :figure=DeployAzure3 />

    <h2 id="Redeploying2Azure" class="pe-text blue-text" v-html="redeployingInAzureTitle" />
    <br>

    <p class="pe-text" v-html="redeployingInAzureText" />

    
   <p class="pe-text">
      <b>{{ this.$store.state.lang === 'en' ? 'Check' : 'Ver' }} <router-link :to="{ path: '/blog/tech/git', hash: '#GithubActions' }">Github Actions</router-link></b>
    </p>

  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../BreadCrumbs.vue';
import {functionMixin } from '../../../components/functionMixin.js'
import translations from  '../../../translations/articles/github2Azure.js';



export default {
  components: {ArticleFigure,BreadCrumbs},
  mixins: [functionMixin],
  name: 'From Github Pages to Azure Static Web Apps',
  computed: { 
    title: function() { return translations["title"][this.$store.state.lang];},
    text1: function() { return translations["text1"][this.$store.state.lang];},
    text2: function() { return translations["text2"][this.$store.state.lang];},
    text3: function() { return translations["text3"][this.$store.state.lang];},
    text4: function() { return translations["text4"][this.$store.state.lang];},
    redeployingInAzureTitle: function() { return translations["redeployingInAzureTitle"][this.$store.state.lang];},
    redeployingInAzureText: function() { return translations["redeployingInAzureText"][this.$store.state.lang];}

  },
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"}, "path":"/blog"},
      {"title": {"en": "Tech",  "pt": "Tech"},  "path":"/blog/tech"},
      {"title": {"en": "From Github Pages to Azure", "pt": "From Github Pages to Azure"}, "path":"/blog/tech/pages2static"}
    ],
    failedDeployment:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683052495/pedrofortunatoesteves-site/blog/tech/Pages2Azure/failure_lluwrw.png",
      "description": {
        "en" : "The deployment had failed.",
        "pt" : "O deployment tinha falhado."
      }
    },
    update2Pro:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683052495/pedrofortunatoesteves-site/blog/tech/Pages2Azure/update_pro_s9joal.png",
      "description": {
        "en" : "That's when I put two and two together and realized what was happening. My Github Pro (from my University days) had just expired.",
        "pt" : "Foi então que juntei 2+2 e percebi o que passava. O meu Github Pro (ainda dos meus tempos do muy nobre Instituto) tinha acabado de expirar."
      }
    },
    deploymentError:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683053078/pedrofortunatoesteves-site/blog/tech/Pages2Azure/deployment_error_ovmb8a.png",
      "description": {
        "en" : "",
        "pt" : "Um site branco, olhando para a consola, rapidamente percebi o que se passava, um problema de paths."
      }
    },
    viteBefore:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683053512/pedrofortunatoesteves-site/blog/tech/Pages2Azure/vite_before_qqrplv.png",
      "description": {
        "en" : "",
        "pt" : "Para fazer o deployment no github pages é esperado que o base tenha o mesmo nome do repositório, que neste caso era 'darealesteves' ,porém no Static Web Apps isso não se aplica.."
      }
    },
    viteAfter:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683053512/pedrofortunatoesteves-site/blog/tech/Pages2Azure/vite-after_v4pjkz.png",
      "description": {
        "en" : "This is what the fix looked like.",
        "pt" : "Este foi o aspeto da correção."
      }
    },
    DeployAzure1:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683061221/pedrofortunatoesteves-site/blog/tech/Pages2Azure/DeployAzure_gg3czk.png",
      "description": {
        "en" : "Static Web App creation on Azure.",
        "pt" : "Criação da Web App no Azure."
      }
    },
    DeployAzure2:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683061221/pedrofortunatoesteves-site/blog/tech/Pages2Azure/DeployAzure2_joi7se.png",
      "description": {
        "en" : "Fill in the options with the GitHub repository and the branch to be deployed.",
        "pt" : "Preencher as opções com o repositório do Github e o branch a ser deployed."
      }
    },
    DeployAzure3:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683061221/pedrofortunatoesteves-site/blog/tech/Pages2Azure/DeployAzure3_vt24ud.png",
      "description": {
        "en" : "The site after the deployment (as we can see by the url)",
        "pt" : "O site após estar deployed (como podemos constatar pelo URL)."
      }
    }
  }),
}
</script>
<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";
</style>