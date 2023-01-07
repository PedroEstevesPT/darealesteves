<template>
  <v-container >
  
    <h1> Git Essentials </h1>

    bla bla bla, O git é um distributed version control system (VCS).
    Conseguimos saber quem fez as mudanças ao longo do tempo.

    O ficheiro .git guarda toda a informação sobre o repositório.

    <h2>
        Git workflows
    </h2>

    <p> 
        Git flow - É uma estratégia de como organizar o trabalho em equipa. 
    

        - one long running branch (main or master)   <br>
        - pelo menos um branch de integração, (dev ou test)
        - abrir feature branches, assim que a feature tiver sido concluida e testada, dar merge no integration e depois matar o branch
    </p>
    <p>
        asdsad asd as
    </p>



    <h2 class="pe-text">
        add , commit , push
    </h2>

    <p>
    Queremos decidir que ficheiros queremos enviar para a staging area.
    
    A razão para isto acontecer é que num projeto grande eu posso já ter feito várias alterações ao código
    mas apenas querer enviar alguns dos ficheiros modificados.

    O git add irá enviar o ficheiro para a stagin area.

    O que são untracked files ?

    São ficheiros sobre os quais ainda não avisámos o Git da sua existência.

    </p>

    <h2 class="pe-text">
    branch
    </h2>

    <p> 
    git branch - Lista os branches existentes. <br>

    git branch &lt;branch name&gt; - Cria um branch com o nome branch name. O conteúdo desse branch vai ser uma cópia do branch atual. <br>

    git checkout &lt;branch name&gt; - Faz checkout do branch com o nome  &lt;branch name&gt;.
    

    </p>

    

    <h2 class="pe-text">
    status
    </h2>

    <h2 class="pe-text"> 
    clone 
    </h2>


    <h2 class="pe-text"> 
        merge 
    </h2>

    <p>
        git merge master - Vai pegar nas changes do branch master e colocá-las no meu branch atual.
    </p>

    <h2 class="pe-text"> 
        checkout 

        git checkout (commit hash)
    </h2>

    <h2 class="pe-text"> 
        rebase 
    </h2>

    <p> 
        Git merge vs git Rebase.

        - Ambos sao formas de incluir mudanças (commits) num branch vindas de outro branch.
        - Merge preserva a branch history, um rebase não.
        - Um merge é para combinar branches públicos, o rebase, branches privados.


        Ex de utilização do rebase:

        - git checkout branch
        - git rebase master 
        - git checkout master 
    </p>




    <h2 class="pe-text"> 
        revert 
    </h2>

    <h2 class="pe-text"> 
        clean 
    </h2>


  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import translations from  '../../../translations/articles/femmeMariee.js';

export default {
  name: 'UneFemmeMariee',
  components: {ArticleFigure},
  computed: { 
    title:       function() { return translations["title"][this.$store.state.lang];},

  },
  data: () => ({
    dialog: false

  }),
}
</script>
<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";
</style>