<template>
  <v-container >
  
    <h1 class="pe-text blue-text"> Git Essentials </h1>
    <BreadCrumbs  :items="breadcrumbs" />

    <p>
    O git é um distributed version control system (VCS) para código.
    Conseguimos saber quem fez as mudanças ao longo do tempo.
    O ficheiro .git guarda toda a informação sobre o repositório.
    </p><br>

    <h2 class="blue-text pe-text">
       Comandos
    </h2><br>

    <p> 
        <li> <b>git add </b> - Prepara as mudanças que vão ser incluídas no próximo commit (as mudanças são comunicadas ao git explicitamente através deste commit) </li>
        <li> <b>git commit </b> - O git tira uma snapshot das alterações na staging area e guarda-as num repositório Git juntamente com uma mensagem que descreve as alterações.</li>
        <li> <b>git branch </b> - Lista os branches existentes. <br></li>
        <li> <b>git branch &lt;branch name&gt; </b> - Cria um branch com o nome &ltbranch name&gt. O conteúdo desse branch vai ser uma cópia do branch atual. </li>
        <li> <b>git checkout &lt;branch name&gt; </b> - Faz checkout do branch com o nome  &lt;branch name&gt;. Se o branch não existir localmente o Git irá criar um branch localmente que faz tracking do remote.</li>
        <li> <b>git merge</b> - Combina as mudanças dum branch noutro. Se não houver conflitos o Git cria um merge commit. Se houver conflitos vou ter de os resolver. Quando o conflito for resolvido posso fazer staging das mudanças.
         <br><br> &nbsp &nbsp &nbsp <b> git checkout destination-branch </b> (Muda para o branch de destino)
         <br>     &nbsp &nbsp &nbsp <b> git merge source-branch </b> (Faz merge das mudanças do source branch no branch de destino)
         <br><br> &nbsp &nbsp &nbsp Se houver um conflito, uma boa prática após o resolver é:  <br>
         <br>     &nbsp &nbsp &nbsp <b> git add path/to/file </b> (Faz merge das mudanças do source branch no branch de destino)
         <br>     &nbsp &nbsp &nbsp <b> git commit -m "Merge changes from source-branch into destination-branch" </b> (Faz merge das mudanças do source branch no branch de destino)      
        </li>
        <br>
        <li> <b>git rebase</b> - Aplica as mudanças de um branch noutro branch.
          <br>
          <br> &nbsp &nbsp &nbsp <b> git checkout my-feature-branch</b> (Muda para o branch de destino)
          <br> &nbsp &nbsp &nbsp <b> git rebase master </b> (Rebase do branch no master branch)
          <br>        <br>

        </li>
        <li> <b>git stash</b> - Salva temporariamente as mudanças na working directory sem fazer commit para o repositório, permitindo mudar de branch ou trabalhar numa task diferente. Depois pode-se voltar a aplicar as mudanças com <b>git stash apply</b>. </li> 
        <li> <b>git revert</b> - Cria um commit que anula as mudanças feitas pelo último commit. <b> git revert HEAD </b> - Reverte as mudanças feitas pelo último commit. </li> 
        <li> <b>git reset </b> - Faz reset do branch para um dado commit e descarta todas as mudanças que ocorreram depois. <br> 
              <br><b>&nbsp &nbsp &nbsp git reset --hard abc123 </b> (Faz reset do branch para um comit antigo e descarta as mudanças feitas depois deste commit)
        </li> 

    </p>
    <br>

    <h2 class="blue-text pe-text">
       Github Actions
    </h2><br>

    <p> As Github Actions são uma feature do Github que permite automatizar tarefas. <br>
        As Github actions são definidas usando um ficheiro YAML que especifica os steps a serem executados quando um workflow é triggered. <br>
        Estas automações incluem: correr testes, fazer build da aplicação, deployments para um server.
        <br><br> 
        Este site inicialmente estava deployed no Github pages e eu corria o seguinte comando para fazer build do site deploy no Github Pages: <br>
        <br> 
        rm -r dist/ ; <br> 
        yarn build; <br> 
        git add  dist -f ; <br>
        git add . ; <br> 
        git commit -m 'new deploy' ; <br>
        git subtree push --prefix dist origin gh-pages"
        <br> <br> 
        Essencialmente, quando fazia o deployment no Github Pages estava apenas a chutar a pasta onde o site foi built para o servidor de deployment.<br>
        Após criar uma Static Web App no Azure, continuei a fazer o deployment do branch gh-pages no Azure Static Web Apps e o Azure criou a pasta abaixo que contém a Github
        action que faz com que assim que haja um commit puxado para o repositório remote, dá build para a Azure Static Web App.
    </p>

    
      <ArticleFigure :figure=githubActions />


    <br>
    <h2 class="blue-text pe-text">
        Git Merge vs Git Rebase
    </h2>

    <br>
    <h2 class="blue-text pe-text">
       Git Flows
    </h2>

    <p> 
        Git flow - É uma estratégia de como organizar o trabalho em equipa. 
        - one long running branch (main or master)   <br>
        - pelo menos um branch de integração, (dev ou test)
        - abrir feature branches, assim que a feature tiver sido concluida e testada, dar merge no integration e depois matar o branch
    </p>
    <p>asdsad asd as</p>




    <p>
    Queremos decidir que ficheiros queremos enviar para a staging area.
    
    A razão para isto acontecer é que num projeto grande eu posso já ter feito várias alterações ao código
    mas apenas querer enviar alguns dos ficheiros modificados.

    O git add irá enviar o ficheiro para a stagin area.

    O que são untracked files ?

    São ficheiros sobre os quais ainda não avisámos o Git da sua existência.

    </p>

 


    



  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../BreadCrumbs.vue';

export default {
  name: 'Github Essentials',
  components: {ArticleFigure,BreadCrumbs},

  computed: { 
    title:    function() { return translations["title"][this.$store.state.lang];},
  },
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"}, "path":"/blog"},
      {"title": {"en": "Tech",  "pt": "Tech"},  "path":"/blog/tech"},
      {"title": {"en": "Git Essentials", "pt": "Git (Essencial)"}, "path":"/blog/tech/pages2static"}
    ],
    githubActions: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683412599/pedrofortunatoesteves-site/blog/tech/github/githubactions_whkjya.png",
        "description": {
          "pt": "Github Actions adicionadas pelo Azure Static Web Apps no meu repositório. <br> Podemos ver o ficheiro YAML com o sufixo .yml.' ",
          "en": "Github Actions added by Azure Static Web Apps on my repository."
        }
    }


  }),
}
</script>
<style lang="scss" scoped>
    @import  "../../../styles/images.scss";
    @import  "../../../styles/text.scss";
</style>