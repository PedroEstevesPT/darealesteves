<template>
  <v-container >
  <div  class="article-div">

  <h1 class="blue-text pe-text">
      Deploy Dockerized Flask App to Azure (App Services & Container Instances)
  </h1>  
  <BreadCrumbs  :items="breadcrumbs" />


  <br>
  <h2 class="blue-text pe-text"> Index</h2>
  <div>
    <li class="pe-text underline" v-for="item in indexItems" :key="item.id" @click="scrollToElement(item.id)">
      {{ item.text[this.$store.state.lang] }}
    </li>
  </div>

  <br>

  <h1 class="blue-text pe-text" id="DockerizingFlaskApp"> Dockerizing Flask App </h1>

    <ArticleFigure :figure=img1 />
    <ArticleFigure :figure=img2 />
    <ArticleFigure :figure=img3 />
    <ArticleFigure :figure=img4 />
    <ArticleFigure :figure=img5 />
    <ArticleFigure :figure=img6 />

  <!--Create Registry and Push img -->
  <h1 class="blue-text pe-text" id="CreateRegistryOnAzureAndUploadDockerImageToAzure"> Create registry on Azure and upload Docker image to Azure</h1>

    <ArticleFigure :figure=img7 />
    <ArticleFigure :figure=img8 />
    <ArticleFigure :figure=img9 />
    <ArticleFigure :figure=img10 />
    <ArticleFigure :figure=img11 />

    <!-- Launch App Services -->
  <h1 class="blue-text pe-text" id="DeployContainerOnAzureAppServices"> Deploy container on Azure App Services </h1>

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
  <h1  class="blue-text pe-text " id="HowToUpdateContainer"> Update container on Azure App Services </h1>
    <ArticleFigure :figure=img23 />

  </div>
  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from '../../../components/BreadCrumbs.vue';
import { articleMixin } from '../../articles/articleMixin.js'



export default {
  name: 'DeployDockerFlaskAzure',
  mixins: [articleMixin],
  components: {ArticleFigure,BreadCrumbs},
  data: () => ({
    indexItems: [
        { id: 'DockerizingFlaskApp', text: {"en": "Dockerizing Flask App", "pt": "Dockerizing Flask App" }},
        { id: 'CreateRegistryOnAzureAndUploadDockerImageToAzure', text: {"en": "Create registry on Azure and upload Docker image to Azure", "pt": "Criando o registry no Azure e fazendo o upload da Docker Image no Azure." }},
        { id: 'DeployContainerOnAzureAppServices', text:{"en": 'Deploy container on Azure App Services', "pt": "Deploy de um container no Azure"}},
        { id: 'HowToUpdateContainer', text: {"en" :"Update the container to run a new version of the app", "pt": "Update de um container para correr a nova versão da App." }}
    ],
    breadcrumbs: [
      {"title": {"en":'Blog' ,  "pt": "Blog"}, "path":"/blog"},
      {"title": {"en":'Tech', "pt": "Tech"}, "path":"/blog/tech"},
      {"title": {"en":'Deploy Dockerized Flask App to Azure (App Services & Container Instances)', 
      "pt": "Deploy Dockerized Flask App to Azure (App Services & Container Instances)"}, "path":"/blog/tech/blog/tech/deploydockerflaskazure"}
    ],
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
        "en": "However, if I try to access the application routes in the browser, I won't be able to. \
              As we can see in the image, I receive a 'This site can't be reached' message. This happens because by design, \
              <a href='https://docs.docker.com/config/containers/container-networking/'>Docker does not publish ports to the Docker host.</a> \
              I have to specifically indicate which ports I want to use. To do this: \
              <li>It is good practice to declare the port we want to expose with the EXPOSE instruction in the Dockerfile (this has no effect, it's just metadata).</li> \
              <li>Use the <b>-p &lt;host port&gt;:&lt;docker port&gt;</b> flag. This creates a firewall rule that maps the container ports to the Docker ports.</li>",
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
        "en": "Above, we can see how to indicate in the Dockerfile which port must be exposed.",
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
        "en": "The next step to push the image to the repository is to assign it a tag.\
        To understand the purpose of this step, I like to think of it as a version control system:",
        "pt" : "O próximo passo para puxar a imagem para o repostório é atribuir-lhe uma tag. \
         Para perceber a utilidade deste passo, gosto de pensar nele como um version control:"
      }
    },
      img10: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/10_kdzhlm.png",
      "description": {
        "en": "Now, if you want to push the image of my Flask application to the registry on Azure, first I need to log in to the registry using the command: \
        <b>sudo az acr login --name <registry name></b",
        "pt" : "Agora, se quiser puxar a imagem da minha aplicação Flask para o registry no Azure, primeiro preciso de fazer login no registry com o comando:\
        <b>sudo az acr login --name &ltnome do registry&gt  </b>"
      }
    },
      img11: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/11_pitddz.png",
      "description": {
        "en": "After being logged into the container, I can push the image to the Azure registry using:\
               <b>sudo docker push <registry name>/<image name>:<image version></b>",
        "pt" : "Após estar loggado no container consigo puxar a imagem para o registry do Azure com \
        <b> sudo docker push &ltnome do registry&gt/&ltnome da imagem&gt:&ltversao da imagem&gt </b>"
      }
    },
      img12: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/12_e3yrpw.png",
      "description": {
        "en": "Once the image is uploaded to the registry, the next step is to deploy the application to Azure App Services. Here's what you need to do: \
        Choose a Resource Group. \
        Choose a name for the .azurewebsites.net domain. \
        In the Instance Details, select Docker Container (the image will be chosen in the image below). \
        Choose the specifications for the compute resources for the machine.",
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
        "en": "Note that when I move to the Docker section, I get this error:\
               <b> Cannot perform credential operations for /subscriptions/.../ContainerRegistry/etc... as admin user is disabled</b>\
              To fix this, I need to enable the Admin user in the registry that stores the Docker images.",
        "pt" : "Reparar que quando movo para a secção Docker, obtenho este erro: \
        <b>Cannot perform credential operations for /subscriptions/.../ContainerRegistry/etc... as admin user is disabled</b>\
        Parar corrigir isto, tenho de fazer enable do Admin user no registry que guarda as Docker images."
      }
    },
      img14: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/14_tluyu1.png",
      "description": {
        "en": "Activating Admin user in registry.",
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
        "en": "This is the layer UI before the container is published.",
        "pt" : "Este é a última UI antes do container estar publicado."
      }
    },
      img17: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808132/pedrofortunatoesteves-site/blog/tech/docker/17_frcndi.png",
      "description": {
        "en": "After a short while we can check the deployment was published on ...azurewebsites.net",
        "pt" : "Passado um bocado verificamos que o deployment foi publicado em ...azurewebsites.net."
      }
    },
      img18: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808132/pedrofortunatoesteves-site/blog/tech/docker/18_tmqryr.png",
      "description": {
        "en": "And we can see the App Service with the Flask app containerized.",
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
        "en": "Above are the images that I see when I click on Diagnostic Resources. After doing some online research, I notice that this error is usually associated with the application not running on port 80.",
        "pt" : "Acima estão as imagens que vejo quando carrego no Diagnostic Resources. Após pesquisar um pouco online, reparo que este erro normalmente está associado quando a aplicação não correr no porto 80."
      }
    },
      img21: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673821729/pedrofortunatoesteves-site/blog/tech/docker/app-port80_rjq8jg.png",
      "description": {
        "en": "Therefore, in the app.py file, I changed the port to 80, modified the port in the Dockerfile's EXPOSE instruction, rebuilt the image to create version 2, and performed the redeployment.",
        "pt" : "Portanto, no app.py mudei o porto para 80, alterei o porto no EXPOSE do Dockerfile, dei novamente build da imagem para criar uma versão 2 e fiz o redeployment."
      }
    },
      img22: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808134/pedrofortunatoesteves-site/blog/tech/docker/24_barflh.png",
      "description": {
        "en": "After changing the port to 80, creating a new image, and deploying it, voilà! I can see my 'dockerized' application running on Azure App Services.",
        "pt" : "Depois de mudar o porto para 80, criar uma nova imagem e dar deployment, voilá! Consigo ver a minha aplicação 'dockerizada' a correr no Azure App Services."
      }
    },
      img23: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673808133/pedrofortunatoesteves-site/blog/tech/docker/23_tgyzy3.png",
      "description": {
        "en": "If in the future you make an update to your Flask app and want to redeploy it, \
               you simply need to go to the running App Service that hosts the Flask app, access \
              the Deployment Center, and change the Docker image. In this case, you would choose an \
              updated image that contains the updated Flask app.",
        "pt" : "Se no futuro fizer um update à minha Flask app e quiser dar redeploy, basta carregar no App Service que está a correr a Flask App \
        ir ao Deployment Center e mudar a Docker image (neste caso, escolher uma imagem com a Flask app updated)."
      }
    },
    
  })}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>