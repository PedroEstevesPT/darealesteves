<template>
  <v-container >
  <div  class="article-div">

    <h1> CSS Quick Snacks</h1><br>

    <li> Package Manager - Yarn. </li>
    <li> Version Control - Github. </li>
    <li> Hosting - Github. </li>


    <h1> The quest for a content delivery network (CDN) </h1>

    <p> 
    Segundo este vídeo da <a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/">Cloudflare</a> uma CDN é:
    Uma rede distribuída de servidores desenhada para carregar sites o mais rapidamente possível.
    Por outras palavras, a rede distribuída de servidores consegue escolher o mais próximo geograficamente da máquina a querer carregar o site, permitindo assim um carregamento de 
    assets otimizado.
    <br>
    


    Tendo experienciado no passado em projetos anterior sites em que os loading times eram grandes, tendo o meu background em Suporte e em problemas de performance e após ter sido inspirado pelo site do
    hacdias.com a voltar a programar, esta foi uma da primeiras preocupações no desenvolvimento deste site: arranjar um serviço dedicado a armazenar as imagens de modo a melhor
    
    Após uma breve investigação, momentaneamente ponderei a Cloudflare mas quando descobri que para esta modalidade se pagava 5 euros por mês, após uma breve consulta no reddit aderi à
    Cloudinary que me proporciona este serviço de borla e é empregado neste site para carregar imagens (25/12/2022).


  </p>


    </div>
  </v-container>
</template>
<script>



export default {
  name: 'CSSQuickSnacks',
  setup() {

  },
  methods: {
 
  },
  computed: { 
  },
  data: () => ({
  }),
}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>