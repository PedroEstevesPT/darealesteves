<template>
  <v-container >
  <div  class="article-div">

    <h1 class="pe-text blue-text">💻 About this site </h1>
    <BreadCrumbs  :items="breadcrumbs" />
    
    <br>
    <div class="pe-text">
      <li> Frontend - Vue 3.0                       </li>
      <li> Package Manager - Yarn                   </li>
      <li> Version Control - Github                 </li>
      <li> Hosting - Github Pages <b>(gratuito) </b></li>
    </div>

    <br>

    <h1 class="pe-text blue-text"> Ideas for features </h1>
    <br>
    <div class="pe-text">
      <p> Abaixo seguem-se umas ideias que quero implementar no site: </p><br>
      <li> Breadcrumbs (implementada)    </li>
      <li> Implementar barra de pesquisa </li>
      <li> Contador de visitas no site   </li>
      <li> Tornar o zoom das fotografias mais interessante em mobile </li>
    </div>
    <br>

    <h1 class="pe-text blue-text"> The quest for a content delivery network (CDN) </h1>
    <br>

    

    <p class="pe-text"> 
    Segundo este vídeo da <a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/">Cloudflare</a> uma CDN é:
    Uma rede distribuída de servidores desenhada para carregar sites o mais rapidamente possível.
    Por outras palavras, a rede distribuída de servidores consegue escolher o mais próximo geograficamente da máquina a querer carregar o site, permitindo assim um carregamento de 
    assets otimizado.
    <br><br>
    
    Tendo experienciado no passado em projetos anterior sites em que os loading times eram grandes, tendo o meu background em Suporte e em problemas de performance e após ter sido inspirado pelo site do
    hacdias.com a voltar a programar, esta foi uma da primeiras preocupações no desenvolvimento deste site: arranjar um serviço dedicado a armazenar as imagens.
    
    <br><br>
    Após uma breve investigação, momentaneamente ponderei a Cloudflare mas quando descobri que para esta modalidade se pagava 5 euros por mês, após uma breve consulta no reddit aderi à
    Cloudinary que me proporciona este serviço de borla e é empregado neste site para carregar imagens.
    </p>




    </div>
  </v-container>
</template>
<script>
import BreadCrumbs from '../../../components/BreadCrumbs.vue';



export default {
  name: 'Site',
  components: {BreadCrumbs},
  data: () => ({
    breadcrumbs: [
      {"title": {"en":'Blog', "pt": "Blog"}, "path":"/blog"},
      {"title": {"en":'Tech', "pt": "Tech"}, "path":"/blog/tech"},
      {"title": {"en":'About this site', 
      "pt": "Sobre este cidade"}, "path":"/blog/tech/site"}
    ]
  }),
}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>