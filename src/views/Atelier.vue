<template>
  <v-container class="pe-text">
     

      <v-row>
        <v-col cols=6 sm="12" md="7">

        <h1 class="pe-text blue-text"> Software </h1>
        <p> 
          Quando não estou a desenvolver a minha atividade profissional para conta de outrém gosto de criar e programar projetos.
          <br><br>
          Sejam estes projetos de grupos, hackathons ou projetos pessoais.
          <br><br>
          Atualmente encontro-me a desenvolver uma agenda pessoal  com recurso a webscrapping e inteligência artificial
        </p>
        </v-col>
      <v-col cols="6" sm="12" md="5">
         bla bla
      </v-col>
      </v-row>





    <v-row>
      <v-col cols=12 md="12" sm="12">
        <h1 class="pe-text blue-text text-center"> Educação </h1>
        <p>
          Começei a fazer vídeos educativos para o Youtube em 2018 porque percebi que para além da sua realização me ajudar a compreender
          melhor os tópicos também causava um impacto positivo na audiência ao criar um conteúdo que respondesse às suas perguntas.
          Até agora a playlist está divida em 3 áreas principais:
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols=4 md="4">
        <a href="https://www.youtube.com/watch?v=DzD4_RobRbI&list=PLGo2eVAkcAnepH0P5SU6h0wLLeeqBsvzf">
          <v-card class="rounded-border" :elevation="cardElevation">
            <v-img class="rounded-border" :src="theory_of_computation_img" />
          </v-card>
        </a>
        <p class="text-center"> <br> Playlist de Teoria de Computação</p>
      </v-col>
      <v-col cols=4 md="4">
        <a href="https://www.youtube.com/watch?v=X47e_qyymXI&list=PLGo2eVAkcAnc4oW5hRjXL1JKx9Ae3QghF">
          <v-card class="rounded-border" :elevation="cardElevation">
              <v-img :src="processing_language_img" />
          </v-card>
        </a>
        <p class="text-center"> <br>Playlist de Algoritmos aplicados ao Processamento de Linguagem </p>
      </v-col>
      <v-col cols=4 md="4">
        <a href="https://www.youtube.com/watch?v=gRGFJ1vab7g&list=PLGo2eVAkcAneMWrlvAGbi49RgZs9rmWu3">
          <v-card class="rounded-border" :elevation="cardElevation">
              <v-img :src="software_eng_img" />
          </v-card>
        </a>
        <p class="text-center"> <br>Playlist de Tópicos de Engenharia de Software </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols=12 md="12" sm="12" >
        <p >
          <br>
          Os vídeos já foram vistos por mais de 10000 pessoas ajudando-as a perceber melhor os tópicos mencionados acima.
          Esta é uma área que tenciono prosseguir no futuro alargando os tópicos para Inteligência Artificial e Bases de Dados.
        </p> <br>
      </v-col>

    </v-row>



  
  </v-container>
</template>
<script>

import translations from  '../translations/atelier.js';

export default {
  name: 'Atelier',
  setup() {
  },
  methods: {

  },
  computed: { 
    under_construction: function() { 
      return translations["under_construction"][this.$store.state.lang]; 
    }
  },
  data: () => ({
    cardElevation: 6 ,
    theory_of_computation_img:"https://res.cloudinary.com/dho8ay2wz/image/upload/v1688602611/pedrofortunatoesteves-site/projects/imagem1_bfmpn3.png",
    processing_language_img:  "https://res.cloudinary.com/dho8ay2wz/image/upload/v1688602610/pedrofortunatoesteves-site/projects/imagem2_jqbjxe.png",
    software_eng_img:         "https://res.cloudinary.com/dho8ay2wz/image/upload/v1688602605/pedrofortunatoesteves-site/projects/imagem3_rajlik.png",
    under_construction_img :  "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676227267/pedrofortunatoesteves-site/aboutme/DALL_E_2023-02-12_18.40.02_-_impressionist_painting_of__Under_Construction__sign_sa3wxk.png"
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";

.rounded-border{
  border-radius: 5%;
}

</style>