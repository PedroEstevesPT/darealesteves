<template>
  <v-container >
  
    <h1 class="pe-text blue-text"> 
        Deploy .NET WEB API in Azure 
    </h1>
    
    <BreadCrumbs  :items="breadcrumbs" />
    <ArticleFigure :figure=img1 />
    <ArticleFigure :figure=img2 />
    <ArticleFigure :figure=img3 />
    <ArticleFigure :figure=img4 />
    <ArticleFigure :figure=img5 />
    <ArticleFigure :figure=img6 />
    <ArticleFigure :figure=img7 />
    <ArticleFigure :figure=img8 />
    <ArticleFigure :figure=img9 />
    <ArticleFigure :figure=img10 />
    <ArticleFigure :figure=img11 />

<!--
    <p>
      Como continuação a este artigo estava a planear fazer uma parte 2 em que utilizando Docker iria criar um container para esta aplicação e fazer deployment da mesma no Azure.
      E tudo funcionou bem localmente, mas assim que que fiz o deployment para uma Container Instance a rotas não estavam inacessíveis.
      Após algumas horas de troubleshooting, descobri que no momento em que escrevo este artigo, Janeiro de 2023, existe muita pouca informação disponível que relacione estes 2 tópicos 
      .NET 7.0 e Docker. 
      Na verdade, parece que a direcção é criar containers sem o Dockerfile:
      <a>https://devblogs.microsoft.com/dotnet/announcing-builtin-container-support-for-the-dotnet-sdk/ </a>
      Através do comando dotnet publish.
      Realmente, isto poupa muito tempo na configuração do Dockerfile.
      Tendo em conta esta contingência em vez de tentar <i>dockerizar</i> uma aplicação .NET, irei tentar fazer o mesmo para um backend em python.

    </p> -->

  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';
import BreadCrumbs from '../../../components/BreadCrumbs.vue';
import translations from  '../../../translations/articles/femmeMariee.js';

export default {
  name: 'DotNetWebAPIAzure',
  components: {ArticleFigure,BreadCrumbs},
  computed: { 
    title: function() { return translations["title"][this.$store.state.lang];}
  },
  data: () => ({ 
    breadcrumbs: [
      {"title": {"en":'Blog', "pt": "Blog"}, "path":"/blog"},
      {"title": {"en":'Tech', "pt": "Tech"}, "path":"/blog/tech"},
      {"title": {"en":'Deploy .NET WEB API in Azure', 
      "pt": "Deploy .NET WEB API in Azure"}, "path":"/blog/tech/dotnetWebApiAzure"}
    ],
    img1:  {
      "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645714/pedrofortunatoesteves-site/blog/tech/api-management/1_vd6kgo.png",
      "description": {
        "en" : "dotnet initially was not installed in Ubuntu.",
        "pt" : "O dotnet não está inicialmente instalado no Ubuntu."
      }
    },
    img2: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645715/pedrofortunatoesteves-site/blog/tech/api-management/3_y6prns.png",
      "description": {
        "en": "To create the dotnet application, I created a folder named WebApi2Azure and created a WebAPI in dotnet using the command 'dotnet new webapi'.",
        "pt" : "Para criar a aplicação dotnet criei uma pasta WebApi2Azure e criei uma WebAPI em dotnet com o comando 'dotnet new webapi'."
      },
    },
    img3: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673647274/pedrofortunatoesteves-site/blog/tech/api-management/3_5_yw9xo7.png",
      "description": {
        "en": "To run the application, simply use 'dotnet run'. \
               To add a route, you just need to create a single file in the Controllers folder like the one shown in the image above.\
               As we can see, the application is running on port 5010.",
        "pt" : "Para correr a aplicação basta 'dotnet run'.  \
        Para adicionar uma rota basta criar um único ficheiro na pasta dos Controllers como o da imagem acima.\
        Como podemos ver a aplicação está a correr no porto 5010."
      },
    },
    img4: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645714/pedrofortunatoesteves-site/blog/tech/api-management/6_a3qldr.png",
      "description": {
        "en": "As we can see the endpoint /test returns the expected result.",
        "pt" : "Como podemos ver o endpoint /test entrega o resultado esperado."
      },
    },
    img5: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645715/pedrofortunatoesteves-site/blog/tech/api-management/7_khvxc5.png",
      "description": {
        "en": "Looking at the .csproj file we can see that when we generate the dotnet API that the framework is net 7.0.",
        "pt" : "Pelo ficheiro .csproj , gerado quando criámos a API dotnet, conseguimos ver que a framework é net 7.0."
      },
    },
    img6: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645715/pedrofortunatoesteves-site/blog/tech/api-management/8_xkfo8f.png",
      "description": {
        "en": " In Azure, we create the App Service as shown in the image above. I chose the Runtime stack as .NET 7 \
                because the target framework uses net 7.0. \
                Note that I selected a free Pricing Plan since this is just a test.",
        "pt" : "No Azure criamos o App Services como na imagem acima. Escolhi a Runtime stack como .NET 7 pois a target framework usa net 7.0. \
        Reparar que escolhi um Pricing Plan free, uma vez que isto é apenas um teste."
      },
    },
    img7: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645715/pedrofortunatoesteves-site/blog/tech/api-management/9_zvivpj.png",
      "description": {
        "en": " To deploy this .NET API, after installing the Visual Studio Code extension and logging in with my account,\
                once the App Services instance from the above image is available in Visual Studio Code, \
                I can select it and then choose the 'Deploy to Web App' option.",
        "pt" : "Para dar deployment desta API em .NET após instalar a extensão do Visual Studio Code e fazer login com a minha conta, assim que a instância de App Services \
        da imagem acima estiver disponível no Visual Studio Code eu consigo seleccioná-la e de seguida seleccionar a opção 'Deploy to Web App'."
      },
    },
    img8: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645715/pedrofortunatoesteves-site/blog/tech/api-management/10_ynjcmq.png",
      "description": {
        "en": "App under the deployment process (part 1)",
        "pt" : "App no processo do deployment (parte 1)."
      },
    },
    img9: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645715/pedrofortunatoesteves-site/blog/tech/api-management/11_ynuxgm.png",
      "description": {
        "en": "App under the deployment process (part 2)",
        "pt" : "App no processo do deployment (parte 2)."
      },
    },
    img10: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645715/pedrofortunatoesteves-site/blog/tech/api-management/12_kqgwmc.png",
      "description": {
        "en": "At first, it looks like the application was not deployed.. but if I check the endpoint in the screenshot below...",
        "pt" : "Parece que a aplicação não foi deployed mas se consultar a route na imagem abaixo..."
      }
    },
    img11: { 
      "img" : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1673645716/pedrofortunatoesteves-site/blog/tech/api-management/13_jhh2tj.png",
      "description": {
        "en": "As we can see the endpoint is returning the expected result. If I wanted to update \
        I could just create a new route on Visual Studio and deploy again.",
        "pt" : "Como podemos ver a rota está a retornar o resultado esperado. Se quisesse fazer um update \
        bastava criar uma rota nova no Visual Studio Code e fazer o deployment outra vez."
      }
    }
  }),
}
</script>
<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";
</style>