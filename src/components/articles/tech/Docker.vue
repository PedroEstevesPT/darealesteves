<template>
  <v-container >
  <div  class="article-div">

    <h1> 
        Docker 🐋
    </h1>
    <BreadCrumbs  :items="breadcrumbs" />
    <br>
    <p> 
    Motivacao: Em vez de comp


    Virtualização: Em vez de parar correr a aplicação eu precisar de comprar um novo server, eu passo a conseguir ter vários sistemas operativos no mesmo HOST.
    É como correr computadores separados dentro do mesmo computador.
    Não nos esquecer que para cada OS precisamos de alocar recursos.


    CONTAINERIZATION
    Hoje em dia há uma nova tecnologia, o Docker.
     - É lightweight.
     - Portable
     - Configurado com docker files.
     - Fast (antes tinhamos de fazer boot do OS e copiar os ficheiros). No docker isto está tudo embedded no configuration management.
     - Nao ha hypervisor no docker, em vez disso existe o Docker Daemon.
     - O docker fixa o problema: "it works on my computer but not on theirs"


    </p>

    <h1> Tutorial </h1>

    <p>Publish Api to Azure Api Management: </p>
    <li>https://learn.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-api-management-using-vs?view=aspnetcore-7.0</li>
    
    <p>Dockerize the app: </p>

    <li> https://learn.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=linux</li>




    <h1> Seen videos </h1>
    <p>
    https://www.youtube.com/watch?v=JSLpG_spOBM
    </p>



    <h1> Dockerizing Flask App </h1>



    </div>
  </v-container>
</template>
<script>

import BreadCrumbs from '../../../components/BreadCrumbs.vue';



export default {
  name: 'Docker',
  components: {BreadCrumbs},
  data: () => ({
    breadcrumbs: [
      {"title": {"en":'Blog' ,  "pt": "Blog"}, "path":"/blog"},
      {"title": {"en":'Tech', "pt": "Tech"}, "path":"/blog/tech"},
      {"title": {"en":'Docker', "pt": "Docker"}, "path":"/blog/tech/docker"}
    ]

  }),
}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>