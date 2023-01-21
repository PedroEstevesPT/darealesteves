<template>
  <v-container >
  <div  class="article-div">

  <h1 class="article-title">
      Deploy Dockerized Flask App to Azure (App Services & Container Instances).
  </h1>  

  <br>
  <h2 class="article-title"> Index</h2>
  <li class="pe-text" @click="scrollToElement('DockerizingFlaskApp')"> Dockerizing Flask App </li>
  <li class="pe-text" @click="scrollToElement('CreateRegistryOnAzureAndUploadDockerImageToAzure')"> Create registry on Azure and upload Docker image to Azure</li>
  <li class="pe-text" @click="scrollToElement('DeployContainerOnAzureAppServices')"> Deploy container on Azure App Services </li>
  <li class="pe-text" @click="scrollToElement('HowToUpdateContainer')"> How to update the container to run a new version of the app </li>
  <br>

  <h3 class="article-title" id="DockerizingFlaskApp"> Dockerizing Flask App </h3>

    <ArticleFigure :figure=img1 />
    <ArticleFigure :figure=img2 />
    <ArticleFigure :figure=img3 />
    <ArticleFigure :figure=img4 />
    <ArticleFigure :figure=img5 />
    <ArticleFigure :figure=img6 />

  <!--Create Registry and Push img -->
  <h3 class="article-title" id="CreateRegistryOnAzureAndUploadDockerImageToAzure"> Create registry on Azure and upload Docker image to Azure</h3>

    <ArticleFigure :figure=img7 />
    <ArticleFigure :figure=img8 />
    <ArticleFigure :figure=img9 />
    <ArticleFigure :figure=img10 />
    <ArticleFigure :figure=img11 />

    <!-- Launch App Services -->
  <h3 class="article-title" id="DeployContainerOnAzureAppServices"> Deploy container on Azure App Services </h3>

    <ArticleFigure :figure=img12 />
    <ArticleFigure :figure=img13 />
    <ArticleFigure :figure=img14 />
    <ArticleFigure :figure=img15 />

    <ArticleFigure :figure=img16 />
    <ArticleFigure :figure=img17 />
    <ArticleFigure :figure=img18 />
    <ArticleFigure :figure=img19 />
    <ArticleFigure :figure=img20 />
    <ArticleFigure :figure=img21 />
    <ArticleFigure :figure=img22 />

    <!-- what to do if i need to redeploy -->
  <h3  class="article-title " id="HowToUpdateContainer"> Deploy container on Azure App Services </h3>
    <ArticleFigure :figure=img23 />

  </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import { articleMixin } from '../../articles/articleMixin.js'



export default {
  name: 'DeployDockerFlaskAzure',
  mixins: [articleMixin],
  components: {ArticleFigure},
  computed: { 
  },
  data: () => ({

    img1:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673822031/pedrofortunatoesteves-site/blog/tech/docker/app-port4999_diikc4.png",
      "description": {
        "en" : "This is the original app.py file (a very simple Flask server with just 2 routes).",
        "pt" : "Este é o ficheiro original app.py (a aplicação Flask, um simples server com duas rotas)."
      }
    },
    img2:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808135/pedrofortunatoesteves-site/blog/tech/docker/1_z8pdzh.png",
      "description": {
        "en" : "This is the original Dockerfile.",
        "pt" : "Este é o Dockerfile original."
      }
    },
    img3: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808135/pedrofortunatoesteves-site/blog/tech/docker/2_ylu525.png",
      "description": {
        "en": "After building the image with the command: \
              <b> sudo docker build -t flaskwebapi </b> \
              I can create a container and run the app with: \
              <b> sudo docker run flaskwebapi </b>\
              Notice that is is running on port 4999.",
        "pt" : "Após construir a imagem com o comando: \
                <b>sudo docker build -t flaskwebapi</b> \
                consigo criar um container e correr a aplicação com \
                <b> sudo docker run flaskwebapi</b> \
                De reparar que está a correr no porto 4999."
      },
    },
    img4: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/3_ftwiir.png",
      "description": {
        "en": "",
        "pt" : "Mas, se tentar aceder às rotas da aplicação no browser não vou conseguir. \
        Como vemos, recebo na imagem um 'This site can't be reached'. Isto acontece porque por design \
        <a href='https://docs.docker.com/config/containers/container-networking/'>o Docker não publica os portos para o Docker host. </a> \
        Eu tenho de indicar especificamente que portos quero usar. Para fazer isto: \
        <li> É boa prática declarar com o EXPOSE no Dockerfile o porto que vamos expõr (isto não tem nenhum efeito, é apenas metadata).</li> \
        <li> Usar a flag <b> -p &lt host port&gt:&ltdocker port&gt </b> Isto cria uma firewall rule que mapeia os portos do container para os portos do Docker.</li>"
      }
    },
      img5: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/4_ndlc7w.png",
      "description": {
        "en": "Above, we can see how to indicate in the Dockerfile which port must be exposed",
        "pt" : "Acima podemos ver como indicar no Dockerfile que porto deve ser exposto."
      }
      },
      img6: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/5_jvscsj.png",
      "description": {
        "en": "After running the command> \
            <b> sudo docker run -p 5001:4999 flaskwebapi </b> \
            I can see the expected route result on the browser (because the Docker port has been exposed).",

        "pt" : "Após correr o comando: \
            <b> sudo docker run  -p 5001:4999  flaskwebapi </b> \
            consigo ver o resultado esperado da rota no browser (isto porque o porto do Docker foi exposto para o host)."
      }
    },
      img7: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/7_f701l3.png",
      "description": {
        "en": "If I want to deploy the container above in Azure the first thing I need to do is to create a registry to store the images \
              created from my Dockerfiles. I can do this, after being logged in Azure with the following command: \
              <b>az create --resource-group &ltnome do resource group&gt  --name &ltnome do registry&gt </b>",

        "pt" : "Se quiser agora dar deploy do container acima no Azure, a primeira coisa que preciso de fazer é criar um registry para guardar as imagens \
        criadas a partir dos meus Dockerfiles. Consigo fazer isto após estar loggado no Azure com o comando: \
        <b>az create --resource-group &ltnome do resource group&gt  --name &ltnome do registry&gt </b>"
      }
    },
      img8: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/8_w0x3nb.png",
      "description": {
        "en": "After the command has run with success, if I check Azure UI, I can see the registry which has just been created.",
        "pt" : "Após o comando ter corrido com successo, se for à UI do Azure devo conseguir ver o registry acabadinho de criar."
      }
    },
      img9: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/9_yweerk.png",
      "description": {
        "en": "",
        "pt" : "O próximo passo para puxar a imagem para o repostório é atribuir-lhe uma tag. \
         Para perceber a utilidade deste passo, gosto de pensar nele como um version control: \
         <b> </b>"
      }
    },
      img10: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/10_kdzhlm.png",
      "description": {
        "en": "",
        "pt" : "Agora, se quiser puxar a imagem da minha aplicação Flask para o registry no Azure, primeiro preciso de fazer login no registry com o comando:\
        <b>sudo az acr login --name &ltnome do registry&gt  </b>"
      }
    },
      img11: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/11_pitddz.png",
      "description": {
        "en": "",
        "pt" : "Após estar loggado no container consigo puxar a imagem para o registry do Azure com \
        <b> sudo docker push &ltnome do registry&gt/&ltnome da imagem&gt:&ltversao da imagem&gt </b>"
      }
    },
      img12: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/12_e3yrpw.png",
      "description": {
        "en": "",
        "pt" : "Assim que a imagem está uploaded no registry o próximo passo é dar deployment da aplicação no Azure App Services. \
        Tenho de: \
        <li> Escolher um Resource Group </li>\
        <li> Escolher o nome para o .azurewebsites.net</li>\
        <li> Neste caso no Instance Details, escolher Docker Container (a imagem vai ser escolhida na imagem abaixo) </li>\
        <li> Escolher as especificações dos recursos de computação para a máquina.</li>"
      }
    },
      img13: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/13_pclwwg.png",
      "description": {
        "en": "",
        "pt" : "Reparar que quando movo para a secção Docker, obtenho este erro: \
        <b>Cannot perform credential operations for /subscriptions/.../ContainerRegistry/etc... as admin user is disabled</b>\
        Parar corrigir isto, tenho de fazer enable do Admin user no registry que guarda as Docker images."
      }
    },
      img14: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/14_tluyu1.png",
      "description": {
        "en": "",
        "pt" : "Ativando o Admin user no registry."
      }
    },
      img15: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673819169/pedrofortunatoesteves-site/blog/tech/docker/docker-config-appservices_ygbckf.gif",
      "description": {
        "en": "",
        "pt" : "Após ativar o Admin User no registry já não volto a ter aquele erro. Cabe-me agora escolher o registry, a imagem que quero dar deploy e a versão dessa imagem."
      }
    },
      img16: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/16_iy0n46.png",
      "description": {
        "en": "",
        "pt" : "Este é a última UI antes do container estar publicado."
      }
    },
      img17: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808132/pedrofortunatoesteves-site/blog/tech/docker/17_frcndi.png",
      "description": {
        "en": "",
        "pt" : "Passado um bocado verificamos que o deployment foi publicado em ...azurewebsites.net."
      }
    },
      img18: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808132/pedrofortunatoesteves-site/blog/tech/docker/18_tmqryr.png",
      "description": {
        "en": "",
        "pt" : "E conseguimos ver o App Service com a Flask app containerizada."
      }
    },
      img19: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808132/pedrofortunatoesteves-site/blog/tech/docker/19_sufoqw.png",
      "description": {
        "en": "",
        "pt" : "Mas ao tentar aceder ao azurewebsites.net reparo que demora muito tempo a carregar e depois retorna este erro: \
        <b> :( Application Error. If you are the application administrator, you can access the diagnostic resources. "
      }
    },
      img20: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/20_njlmed.png",
      "description": {
        "en": "",
        "pt" : "Acima estão as imagens que vejo quando carrego no Diagnostic Resources. Após pesquisar um pouco online, reparo que este erro normalmente está associado quando a aplicação não correr no porto 80."
      }
    },
      img21: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673821729/pedrofortunatoesteves-site/blog/tech/docker/app-port80_rjq8jg.png",
      "description": {
        "en": "",
        "pt" : "Portanto, no app.py mudei o porto para 80, alterei o porto no EXPOSE do Dockerfile, dei novamente build da imagem para criar uma versão 2 e fiz o redeployment."
      }
    },
      img22: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/24_barflh.png",
      "description": {
        "en": "",
        "pt" : "Depois de mudar o porto para 80, criar uma nova imagem e dar deployment, voilá! Consigo ver a minha aplicação 'dockerizada' a correr no Azure App Services."
      }
    },
      img23: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/23_tgyzy3.png",
      "description": {
        "en": "",
        "pt" : "Se no futuro fizer um update à minha Flask app e quiser dar redeploy, basta carregar no App Service que está a correr a Flask App \
        ir ao Deployment Center e mudar a Docker image (neste caso, escolher uma imagem com a Flask app updated()."
      }
    },
    
  })}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>