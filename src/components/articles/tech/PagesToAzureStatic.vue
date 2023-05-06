<template>
  <v-container >
  
    <h1 class="blue-text pe-text"> Do Github Pages para o Azure (I)</h1>
    <BreadCrumbs  :items="breadcrumbs" />

    <li class="pe-text underline" @click="scrollToElement('DockerizingFlaskApp')"> Do Github Pages para o Azure</li>
    <li class="pe-text underline" @click="scrollToElement('Redeploying2Azure')"> Redeploying no Azure </li>
    <br>


    <p>
        Certo dia, estava eu a divertir-me a programar este projeto e como costume, dei o comando <b>yarn deploy</b> que criei
        no meu package.json  para fazer o deploy do projeto para o Github Pages. Mas o site teimava em não atualizar, depois de
        carregar F5 múltiplas vezes sem obter o resultado esperado fui ao Github, acedi ao repositório e isto chamou-me à atenção:
    </p>

      <ArticleFigure :figure=failedDeployment />
      <ArticleFigure :figure=update2Pro />

    <p class="pe-text"> 

        Naturalmente não ia pagar 48 euros ao ano para hospedar o meu site (lol). Mas incomodava-me ter de aprender uma ferramenta gratuita
        recôndita (que provavelmente ainda iria exigir alguma configuração manual) para fazer o deploy deste website, principalmente
        quando a minha querida modalidade gratuita do Heroku já estava mais que morta e em decomposição:
        <a href="https://help.heroku.com/RSBRUH58/removal-of-heroku-free-product-plans-faq"> Removal of Heroku Free Product Plans FAQ </a>
        <br><br>
        Após discutir isto com um amigo meu a alternativa era clara. Podia usar os meus Azure Credits por trabalhar para a Microsoft.
        <br>

        A minha ideia inicial era fazer o deploy do site usando o App Services. Mas não era a solução mais adequada dado a natureza estática
        deste frontend. O Azure tem um serviço: 'Static Web Apps' que parecia indicado para o que queria.
         <br> <br>

        Dito e Feito, fui para o Azure criar uma Static Web App, em 2 minutos fiz deploy e bum: 
        </p>
        <ArticleFigure :figure=deploymentError />

        <p class="pe-text"> 
            Após 15 minutos de debugging, entendi o que se passava. A culpa era do ficheiro vite.config.js
        </p>

        <ArticleFigure :figure=viteBefore />
        <ArticleFigure :figure=viteAfter />

   <p class="pe-text"> 
        Depois de fazer a alteração, voilá, o site foi deployed às mil maravilhas.
        Abaixo seguem-se os passos detalhados:  
    </p>

    <ArticleFigure :figure=DeployAzure1 />
    <ArticleFigure :figure=DeployAzure2 />
    <ArticleFigure :figure=DeployAzure3 />

    <h2 id="Redeploying2Azure" class="pe-text blue-text"> Redeploying no Azure</h2>

    <p class="pe-text">
      Nos meus primeiros testes para dar o update to site tinha de criada cada vez uma Static Web App que iria gerar um url
      diferente. Obviamente tem de exister alguma forma mais CI/CD de fazer isto.
    </p> 


  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from   '../../BreadCrumbs.vue';
import { articleMixin } from '../../articles/articleMixin.js'



export default {
  components: {ArticleFigure,BreadCrumbs},
  mixins: [articleMixin],
  name: 'From Github Pages to Azure Static Web Apps',
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"}, "path":"/blog"},
      {"title": {"en": "Tech",  "pt": "Tech"},  "path":"/blog/tech"},
      {"title": {"en": "From Github Pages to Azure", "pt": "From Github Pages to Azure"}, "path":"/blog/tech/pages2static"}
    ],
    failedDeployment:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683052495/pedrofortunatoesteves-site/blog/tech/Pages2Azure/failure_lluwrw.png",
      "description": {
        "en" : "",
        "pt" : "O deployment tinha falhado."
      }
    },
    update2Pro:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683052495/pedrofortunatoesteves-site/blog/tech/Pages2Azure/update_pro_s9joal.png",
      "description": {
        "en" : "",
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
        "en" : "",
        "pt" : "Este foi o aspeto da correção."
      }
    },
    DeployAzure1:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683061221/pedrofortunatoesteves-site/blog/tech/Pages2Azure/DeployAzure_gg3czk.png",
      "description": {
        "en" : "",
        "pt" : "Este foi o aspeto da correção."
      }
    },
    DeployAzure2:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683061221/pedrofortunatoesteves-site/blog/tech/Pages2Azure/DeployAzure2_joi7se.png",
      "description": {
        "en" : "",
        "pt" : "Preencher as opções com o repositório do Github e o branch a ser deployed."
      }
    },
    DeployAzure3:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1683061221/pedrofortunatoesteves-site/blog/tech/Pages2Azure/DeployAzure3_vt24ud.png",
      "description": {
        "en" : "",
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