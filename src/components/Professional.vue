<template>
  <v-container>
    <v-row class="text-center" align="center" justify="center"  >

      <!-- SANTIAGO E BIO TESTAR IMAGENS -->
      <v-col v-animate-onscroll.repeat="{down: 'animated fadeInLeft'}"
          cols="12" sm="12" md="2"
        >
          <v-img
            :src="pedro"
            class="profileImg"
            contain
            dense
          />
      </v-col>
      <v-col  cols="12" md="8" sm="12"  > 
          <h1 style="text-align: left;" class="display-2 font-weiht-bold mb-3" v-html="text_presentation_title"/> 

          <div>
            <p style="text-align: left;"  v-html="text_presentation_paragraph"/>
          </div>
      </v-col>



      <!-- PROFESSIONAL EXP --> 
        <div v-if="!isMobile()" v-animate-onscroll.repeat="{down: 'animated fadeInRight'}">
          <svg-icon type="mdi" :path="mdiAccount" :size="48"></svg-icon>
          <h2  v-html="text_professional_experience"> </h2> <br>
          
          <v-row class="text-center" align="center" justify="center" >
              <div v-for="NewsItem in NewsList" :key="NewsItem.id" style="margin: 0 auto;">
                <v-col  cols="12" sm="12" md="12" >
                  <NewsCard :NewsItem="NewsItem"/>
                </v-col>
              </div>
          </v-row>
        </div>

        <div v-else>
          <svg-icon type="mdi" :path="mdiAccount" :size="48"></svg-icon>
          <h2  v-html="text_professional_experience"> </h2> <br>

          <v-row class="text-center" align="center" justify="center" >
              <div v-for="(NewsItem,i) in NewsList" :key="i" style="margin: 0 auto;">
                <v-col  cols="12" sm="12" md="12" >
                
                  <div v-if="i%2==0" v-animate-onscroll.repeat="{down: 'animated fadeInLeft'}">
                    <NewsCard :NewsItem="NewsItem"/>
                  </div>            
                  <div v-else>
                    <div v-animate-onscroll.repeat="{down: 'animated fadeInRight'}">
                      <NewsCard :NewsItem="NewsItem"/>
                    </div>
                  </div>
       
                </v-col>
              </div>
          </v-row>
       </div>


      <!-- FIND ME ONLINE -->
      <v-col class="mb-5" cols="12" >
       <br> <h2 class="headline font-weight-bold mb-5" v-html="text_find_me_online" /> <br>          

        <div style="width:10%; margin: 0 auto;">
          <v-row   class="text-center" align="center" justify="center">
          <v-col
            v-for="(next,i) in whatsNext"
            :key="i"
            cols="12"
            sm="4"
          >

          <div v-if="isMobile()">
            <v-img v-if="i%2==0" :src="next.img" v-animate-onscroll.repeat="{down: 'animated fadeInLeft'}"></v-img>
            <v-img v-else :src="next.img" v-animate-onscroll.repeat="{down: 'animated fadeInRight'}"> </v-img>
          </div>
          <div v-else>
            <v-img :src="next.img" v-animate-onscroll.repeat="{down: 'animated fadeInUp'}"></v-img>
          </div>
          </v-col>
        </v-row>
        </div>
      </v-col>
    <br>


    </v-row>
  </v-container>
</template>
<script>

import pedro       from '../assets/landing/pedro.jpg';
import junitec     from '../assets/landing/exp/junitec.png';
import microsoft   from '../assets/landing/exp/ms.png';

import insta     from '../assets/icons/instagram.png';
import linkedin  from '../assets/icons/linkedin.png';
import yt        from '../assets/icons/youtube.png';


import syone       from '../assets/landing/exp/syone.jpg';
import trash4goods from '../assets/landing/exp/trash4goods.png';
import NewsCard from '../components/NewsCard.vue';
import translations from '../alltranslations.js';
import { mdiAccount } from '@mdi/js'



export default {
  name: 'Professional',
  components: {NewsCard},
  setup() {
    return {
        mdiAccount
      }
  },
  computed: { 
    text_presentation_paragraph:  function() { 
      console.log(translations["landing"]["presentation_par"]);
      console.log(typeof(translations["landing"]["presentation_par"]["pt"]))
      return translations["landing"]["presentation_par"][this.$store.state.lang]; 
    } ,
    text_presentation_title:      function() { return translations["landing"]["presentation_tit"][this.$store.state.lang]; },
    text_professional_experience: function() { return translations["landing"]["professional_experience"][this.$store.state.lang];},
    text_find_me_online:          function() { return translations["landing"]["find_me_online"][this.$store.state.lang]; }
  },
  methods: {
    macaco: function() {
      console.log("bloco");
    },
    isMobile: function() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
  data: () => ({
        name: 'Professional',
        dialog: false,
        show: true,
        NewsList: [
          {
            id: 1,
            name: "Microsoft",
            color: "microsoftblue",

            title: {
              "pt": "Engenheiro de Suporte",
              "en": "Dynamics 365 Support Engineer"
            },
            modal_text: {
              "pt" : "<p>Começei a trabalhar na Microsoft em Outubro de 2021 com Support Engineer do Dynamics CRM 365 na área de customizações. \
              Desde aí tenho estado a ajudar pessoas e negócios de todos os cantos do mundo a alcançarem mais com produtos Microsoft, nomeadamente o Microsoft Dynamics 365. \
              Paralelamente a isto tenho aproveitado a minha atividade profissional para me desafiar e aumentar o conhecimento em diferentes áreas e produtos através da realização de certificações em diferentes produtos da Microsoft: \
              <ul style='margin-left:2%;'> <br>\
                <li> Microsoft Certified: Dynamics 365 Fundamentals (CRM) </li>\
                <li> Microsoft Certified: Azure Fundamentals</li>\
                <li>Microsoft Certified: Power Platform Fundamentals</li>\
                <li>Microsoft Certified: Security Compliance and Identity Fundamentals</li> \
                <li>Microsoft Certified: Power Platform Developer Associate</li>\
              </ul> <br> Como próximos passos espero continuar a causar um impacto positivo junto dos nossos clientes e da minha equpa e aumentar o meu conhecimento \
              de modo a estar feliz, realizado e procurando sempre a melhor versão de mim mesmo.</p>  " 
              ,
              "en" : "<p> I started working at Microsoft in October of 2021 as a Support Engineer for Dynamics CE 365 in the customizations area.\
              Since then I have been helping people and businesses all around the world to achieve more with Microsoft products, namely Microsoft Dynamics 365. </p>\
              Parallel to this I have been using this opportunity to increase my knowledge in different areas and Microsoft products by doing different certifications:\
              <ul style='margin-left:2%;'> <br>\
                <li> Microsoft Certified: Dynamics 365 Fundamentals (CRM) </li>\
                <li> Microsoft Certified: Azure Fundamentals</li>\
                <li>Microsoft Certified: Power Platform Fundamentals</li>\
                <li>Microsoft Certified: Security Compliance and Identity Fundamentals</li> \
                <li>Microsoft Certified: Power Platform Developer Associate</li>\
              </ul><br> For the next steps I will strive to keep causing a positive impact near our customers and on my time as well as learn more.</p>"
              
              
            },
            img_url: microsoft,
            url: "https://www.pcguia.pt/2021/02/projecto-de-reciclagem-interactiva-trash4goods-com-gamificacao-e-o-vencedor-do-premio-e-waste-open-innovation/",
          },
          {
            id: 2,
            name: "Trash4Goods",
            color: "trash4goods",
            title: {
                "pt": "Co-fundador e Lead Developer",
                "en": "Co-founder and Lead Developer"
            },
            modal_text: {
              "pt" : "'Ao reciclar, ganhamos todos', é este o mote do Trash4Goods, Startup que visa gamificar a reciclagem e promover a economia circular que co-fundei em outubro de 2019 e onde trabalhei até Setembro de 2021. <br>\
              Como milestones neste projeto destaco a elaboração do <a href='https://tecnico.ulisboa.pt/pt/noticias/campus-e-comunidade/trash4goods-um-projeto-em-que-ganha-o-ambiente-e-tambem-quem-recicla/'> primeiro teste-piloto</a> com uma sinergia entre uma aplicação mobile e um caixote físico.<br>\
              Como segunda iteração deste projeto descartámos o caixote físico e focámo-nos num sistema de recolhas/competições programáveis com enfoque no mobile. <br>\
              A minha saída do Trash4Goods acontece depois da segunda iteração estar concluída e testada e antes do segundo-teste piloto ter lugar. \
              Ainda durante a minha participação neste projeto destaco: \
              <ul style='margin-left:2%;'> <br> \
                <li> O primeiro lugar no hackathon <a href='http://www.betventures.org/bet19.html'> BET\'19</a></li>\
                <li> Terceiro lugar no <a href='https://taikai.network/cityhack/hackathons/city-hack-2020'> City Hack </a></li> \
                <li> Vitória no <a href='https://erp-recycling.org/en-pt/news-and-events/2021/02/e%E2%80%91waste-open-innovation-winners/'>e-Waste Open Innovation</a></li><br> \
              </ul> \
              juntamente com um trabalho de criação de awareness\
              sobre a reciclagem/economia circular nas redes sociais \
              <a href='https://www.instagram.com/trash4goods/'>Instagram</a> \
              e <a href='https://www.facebook.com/trash4goods'>Facebook</a>.",
             
              "en" : "'By recycling we all win', this is the motto of Trash4Goods, Startup with the mission of gamifying recycling and promoting circular economy which I co-founded in October 2019 and worked until September 2021.<br> \
              During this time, besides being involved in many of the strategic decision of the project I was also the main web developer, fullstack developer and mobile developer.<br>\
              As milestones of this project I highlight the elaboration of the \
              <a href='https://tecnico.ulisboa.pt/en/news/campus-community/trash4goods-a-project-that-protects-the-environment-and-rewards-people-for-recycling-properly/'>pilot test</a> with a synergy between a mobile app (Flutter) and an intelligent physical trashbin. <br> \
              For the second iteration of this project we discarded the physical trashbin and focused on the mobile development with the creation of a system of programmable competitions. <br>\
              I left Trash4Goods after the second iteration of the app was concluded and tested before the beginning of the second pilot.<br> \
              During my tenure in the project besides the pilot-tests I highlight the: \
              <ul style='margin-left:2%;'> <br>\
                <li> 1st place in the hackathon <a href='http://www.betventures.org/bet19.html'> BET\'19</a></li>\
                <li> 3rd place in the hackathon <a href='https://taikai.network/cityhack/hackathons/city-hack-2020'> City Hack </a></li>\
                <li> 1st place in the competition <a href='https://erp-recycling.org/en-pt/news-and-events/2021/02/e%E2%80%91waste-open-innovation-winners/'>e-Waste Open Innovation</a></li>\
              </ul><br>\
              Together with the creation of awareness for recycling and circular economy in\
              <a href='https://www.instagram.com/trash4goods/'>Instagram</a> \
              and in <a href='https://www.facebook.com/trash4goods'>Facebook</a>."
            },
            img_url: trash4goods,
            url: "https://visao.sapo.pt/exameinformatica/2021-02-12-e-waste-open-innovation-distingue-startup-que-vai-desafiar-os-portugueses-a-reciclarem-produtos-eletronicos/"
          },
          {
            id: 3,
            name: "Syone",
            color: "syone",
            title: { 
              "pt":"Estágio de Verão em NLP",
              "en": "NLP Summer Internship"
            },
            modal_text: {
              "pt" : "Durante os meses de Julho e Agosto de 2019 realizei em contexto professional \
              um Estágio de Verão em NLP na Syone, uma software house sediada em Lisboa.<br> Durante este estágio utilizei Python e técnicas de Named Entity recognition para gerar descrições em Língua Natural de gráficos e data em formato tabular.",
              "en" : "From July to August of 2019 I used this opportunity to have a summer internship focused on NLP in Syone. <br> \
              During this internship I used Python to generate descriptions in Natural Language from charts and tabular data of different topics."
            },
            img_url: syone,
            url: "https://www.youtube.com/watch?v=TyYe9Qmoq3U&t=291s"
          },
          {
            id: 4,
            name: "JUNITEC",
            color: 'junitec',
            title:  {
              "pt" : "Membro do Departamento Técnico",
              "en" : "Member of the Technical Department"
            },
            modal_text: {
              "pt" : "Desde Setembro de 2018 até Dezembro de 2020 enquanto estudava no Instituto Superior Técnico fui membro do departamento técnico da JUNITEC, a Júnior Empresa da minha faculdade.\
               Durante este tempo tive a oportunidade de trabalhar com colegas e amigos talentosos em diferentes projetos dos quais destaco 4: \
               <ul style='margin-left:2%;'> <br>\
                <li> Como último projeto na JUNITEC co-fundei o <a href='https://tecnico.ulisboa.pt/pt/tag/trash4goods/'>Trash4Goods</a>, projeto cujo objetivo era a gamificação da reciclagem \
                e a promoção da economia circular tendo sido o responsável pela elaboração do site (Vue.js), desenvolvimento do backend do caixote (Flask) e da aplicação mobile (Flutter) </li>\
                <li> Developer num <a href='https://www.instagram.com/reel/B-aOOFpBuni/'>projeto de consultoria </a> para um dos maiores museus de Portugal. Este projeto consistiu na elaboração duma web app em (Vue.js, Node.js e MySQL) \
                que permitia a gestão de obras de arte. Neste projeto também estive envolvido no levantamento de requisitos.  </li>\
                <li> Webdeveloper do site do TecStorm'19. A terceira edição do maior hackathon universitário  (<a href='https://tek.sapo.pt/extras/site-do-dia/artigos/tecstorm19-uma-maratona-com-muita-tecnologia-por-dentro'>Tecstorm'19</a>), organizado pela JUNITEC, \
                realizado no Pavilhão do Conhecimento e contando com a presença do Presidente da República: Marcelo Rebelo de Sousa. \
                Neste projeto de equipa programei o site juntamente com as inscrições no hackathon para além de promover o evento em várias faculdades do país.</li> \
                <li> Desenvolvimentos na sede da JUNITEC - Atualizações ao site (HTML/CSS/PHP), abertura/fecho de recrutamentos. \
                Criação de uma campainha ligada à nossa sede através da API do Slack. </li>\
              </ul>"
            ,
              "en" : "From September 2018 to December 2020, while I studied at Instituto Superior Técnico I was a member of JUNITEC (the Junior Enterprise of my University) Technical Department. \
              During this time I had the opportunity to work with talented colleagues and friends in different projects where I highlight 4: \
                   <ul style='margin-left:2%;'> <br>\
                <li> As my last project on JUNITEC I co-founded <a href='https://tecnico.ulisboa.pt/pt/tag/trash4goods/'>Trash4Goods</a>, project in which the goal included gamifying recycling\
                and the promotion of circular economy. I was responsible for elaborating the site (Vue.js), developing the backend of the trashbin (Flask) and the mobile application (Flutter) </li>\
                <li> Developer on a <a href='https://www.instagram.com/reel/B-aOOFpBuni/'>consulting project </a> for one of the biggest museums in Portugal. This project consisted in the creation of a web app in (Vue.js, Node.js e MySQL) \
                that allowed the management of works of art. During this project I was also present on meetings with the customer and requirements gathering.</li>\
                <li> Webdeveloper of TecStorm'19. The third biggest university hackathon (<a href='https://tek.sapo.pt/extras/site-do-dia/artigos/tecstorm19-uma-maratona-com-muita-tecnologia-por-dentro'>Tecstorm'19</a>), organized by JUNITEC, \
                took place on Pavilhão do Conhecimento and counted with the presence of the President of the Portuguese Republic: Marcelo Rebelo de Sousa. \
                In this team project I programmed the site and was responsible for the enrollment form of the participants on the hackathon. Besides that, I also promoted the hackathon in different universities of the country.</li> \
                <li> Developments on  <a href='https://junitec.pt/'> JUNITEC </a> headquarters. - Updates to the site (HTML/CSS/PHP), opening/closing recruitment season. \
                Creation of a physical doorbell triggered by the Slack API. </li> \
              </ul>"   
            },
            img_url: junitec,
            url: "http://www.betventures.org/bet19.html"
          }
        ],
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    pedro,
    whatsNext: [
      {
        img :  linkedin,
        text: 'Linkedin',
        href: 'https://www.linkedin.com/in/pedro-fonseca-esteves/',
      },
      {
        img:   yt,
        text: 'Youtube',
        href: 'https://www.youtube.com/channel/UCXqBZ8rXVdcyvtcDJ6_fiNg',
      },
      {
        img: insta,
        text: 'Instagram',
        href: 'https://www.instagram.com/darealesteves/',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";



</style>