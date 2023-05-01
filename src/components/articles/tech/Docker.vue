<template>
  <v-container >
  <div  class="article-div">

    <h1 class="pe-text blue-text"> 
        Docker 🐋
    </h1>
    <BreadCrumbs  :items="breadcrumbs" />

    <h2 class="pe-text blue-text"> Virtualização </h2>
    <p class="pe-text"> 
      Suponhamos que tens uma companhia que quer correr múltiplas aplicações num servidor físico. <br>

      No entanto, algumas dessas aplicações requerem sistemas operativos diferentes ou diferentes versões de software.

      Neste caso a virtualização pode ser usada parar criar múltiplas máquinas virtuais no mesmo servidor físico.
      Cada uma com o sistema operativo necessário para cada aplicação em conjunto com a configuração do software.
      <br><br>
      A virtualização permite à companhia usar eficientemente os recursos do servidor físico mantendo separação
      de aplicações o que previne conflitos e simplifica gestão. 
      Sem virtualização a companhia teria de comprar ou manter servidores físicos separados.

    </p><br>

    <h2 class="pe-text blue-text"> Docker vs Virtualização </h2>

    <p class="pe-text">
      O Docker é uma tecnologia mais leve que a virtualização.
      Se as aplicações que necessitar de correr funcionarem todas no mesmo sistema operativo
      e tiverem apenas dependências diferentes (ex: uma necessita do pyodbc 3.0.0 e outra do pyodbc 4.0.39)
      então mais vale usar o Docker. 
      Assim poupo ter de criar várias máquinas virtuais, cada uma com o seu OS!
      Já para não falar que logicamente, fazer deploy de um container do Docker é muito mais rápido que uma máquina virtual.

    </p>

    <br>
    <h2 class="pe-text blue-text"> Links úteis </h2>

    <li> https://learn.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-api-management-using-vs?view=aspnetcore-7.0</li>
    <li> https://learn.microsoft.com/en-us/dotnet/core/docker/build-container?tabs=linux</li>
    <li> https://www.youtube.com/watch?v=JSLpG_spOBM </li>


    <li>
      <router-link to="/blog/tech/dotnetWebApiAzure" class="no-underline"> 
      Deploying Dockerized Flask App to Azure
      </router-link>
    </li>





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