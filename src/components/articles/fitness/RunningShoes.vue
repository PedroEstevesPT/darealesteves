<template>
  <v-container >

    <h1 class="blue-text">
    Os meus sapatos de corrida
    </h1>
    
    <br>

    <h2 class="pe-text blue-text"> KIPRUN KD PLUS </h2>
    <ArticleFigure :figure=kiprun />

    <h2 class="pe-text blue-text"> AISICS GEL-ZIRUSS 4</h2>
    <ArticleFigure :figure=gelZirus />
    
    <h2 class="pe-text blue-text"> AISICS GEL-NIMBUS 24 </h2>
    <ArticleFigure :figure=gelNimbus />



  </v-container>
</template>
<script>

import ArticleFigure from '../../ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';


export default {
  name: 'ETFs',
  components: {ArticleFigure},
  computed: { 
  },
  data: () => ({
    kiprun: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682292071/pedrofortunatoesteves-site/blog/fitness/kiprun_kd_plus_rfltuc.png",
        "description": {
          "pt": "Os primeiros sapatos desta lista são os Kiprun Kd Plus. Gosto muito deles e são bastante confortáveis, quer no calcanhar como de lado, tenho-os pelo menos desde 2021."
        }
    },
    gelZirus: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682292059/pedrofortunatoesteves-site/blog/fitness/gel-ziruss4_rb3rbp.png",
        "description": {
          "pt": "Os Gel-Ziruss 4 da Aisics foram uns sapatos que comprei depois dos Kiprun Kd Plus. Usava-os sobretudo para as minhas corridas dos 10 km. \
          Durante muito tempo foram os meus sapatos de eleição, mas em certas corridas causavam-me feridas nos calcanhares, portanto não são de todos os meus sapatos favoritos e encontram-se reformados."
        }
    },
    gelNimbus: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682292053/pedrofortunatoesteves-site/blog/fitness/gel-nimbus_fz0r0j.png",
        "description": {
          "pt": "Comprei os Gel-Nimbus 24 da Aisics no verão de 2022. Comparando com os  Gel-Ziruss 4 e Kiprun Kd Plus os Nimbus são consideravelmente mais caros mas são de longe os melhores.\
          Para além de serem super confortáveis, acho que me ajudam na corrida como nenhum outro sapato me ajuda \
          Lembro-me que tinha corrido 15 km e ficado a sangrar dos calcanhares com os Gel-Ziruss 4 e passados 1-2 dias fui comprar os Gel-Nimbus 24 e voltei a correr a distância mais longa \
          que alguma vez corri na vida: 21 km. No entanto, habitualmente uso-os nas minhas corridas de 10km."
        }
    }
    
  }),
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
  }
}}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>