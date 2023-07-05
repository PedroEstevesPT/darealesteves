<template>

  <div   :style="{ 
   height: firstSectionHeight,
   width: largura,
   background: image, 
  'background-size': 'cover' //'auto 100%'
  }" >
    <v-container   :style="{ 
         'text-align': 'center',
         'padding-top': halfFirstSectionHeight
         }" >
        <h1 class="pe-text white-text fade-in-2s" v-html="text_professional_first_par" />  <br>
        

        <v-btn class="blue" href="https://www.linkedin.com/in/pedro-esteves-pt/" > {{text_contact}} </v-btn>
    </v-container>
  </div>


  <!-- 2ND ROW PROFESSIONAL -->
  <br><br>
  <v-row class="text-center pe-text" align="center" justify="center"> 

    <div  v-animate-onscroll="{down: 'animated fadeInRight'}">

      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
        <div class="centered-container">
          <div class="content-container">
            <h1  class="blue-text" v-html="professional_experience_tit" /> <br>
            <p class="center-text-align-left hidden-sm-and-down" v-html="professional_experience_par" />
          </div> 
        </div>
      </v-col>

      <!-- PROFESSIONAL EXPERIENCE CARDS DESKTOP -->
      <v-row class="text-center hidden-sm-and-down" align="center" justify="center"  >
        <div v-for="ProfessionalExperienceCard in ProfessionalExperience" :key="ProfessionalExperienceCard.id" style="margin: 0 auto;">

          <v-col cols="12" sm="12" md="12">
            <div class="custom-card-wrapper">
              <CustomCard class="custom-card" :CustomCardItem="ProfessionalExperienceCard"/>
            </div>
          </v-col>
        </div> 
      </v-row>

      <!-- PROFESSIONAL EXPERIENCE CARDS MOBILE -->
      <v-row class="pe-text blue-text text-center hidden-md-and-up" align="center" justify="center" >
        <div v-for="(ProfessionalExperienceCard,i) in ProfessionalExperience" :key="i" >
          <v-col  cols="12" sm="12" md="12" >
            <div v-if="i%2==0" v-animate-onscroll="{down: 'animated fadeInLeft'}">
              <CustomCard :CustomCardItem="ProfessionalExperienceCard"/>
            </div>            
            <div v-else v-animate-onscroll="{down: 'animated fadeInRight'}">
                <CustomCard :CustomCardItem="ProfessionalExperienceCard"/>
            </div>
          </v-col>
        </div>
      </v-row>
    </div>
  </v-row> 
  <br><br>

  <!-- TECH SKILLS -->
    <v-row class="text-center pe-text section-margin-top"  align="center" justify="center"  v-animate-onscroll="{down: 'animated fadeInLeft'}">

      <!-- TECH SKILLS PAR-->
      <v-col cols="12" xl="12" lg="12" md="12" sm="12" xs="12">
        <div class="centered-container">
          <div class="content-container">
            <h1  class="blue-text" v-html="tech_skills_tit" /> <br>
            <p class="center-text-align-left hidden-sm-and-down" v-html="tech_skills_par" />
          </div> 
        </div>
      </v-col>

      <v-col cols="12"  xl="4"  lg="4"  md="4" sm="12" xs="12" v-for="(category,i) in techSkills" >
        <h3 class="blue-text" style="text-align:center;"> {{category.title[this.$store.state.lang]}} <br></h3>

        <v-list-item-group
          v-model="selectedItem"
          style="justify-content: center; text-align:left; display: grid;" 
        >
          <v-list-item v-for="item in category.items">

            <!-- OPTION -->    
            <v-list-item-content>
              <img width=20 :src="item.img_url" />  {{item.title}}
            </v-list-item-content>

          </v-list-item>
        </v-list-item-group>
      </v-col>
    </v-row>



    <!-- WHAT I FIND OR VALUE -->
    <br><br>
    <v-layout class="section-margin-top" style="width:80%; margin: 0 auto;"    v-animate-onscroll="{down: 'animated fadeInRight'}">
      <v-row class="text-center pe-text " align="center" justify="center" > 
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <h1 class="blue-text" v-html="whatILookFor_tit" />
          </v-col>

          <!-- cols e importante para garantir que cada desenho aparece numa linha diferente" -->
          <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" v-for="item in whatILookFor">
            <v-img style="border-radius:25%; margin: 0 auto;" width=50% :src="item.img_url"  /> 
            <h1 class="blue-text" v-html="item.title[this.$store.state.lang]" />  
            <p v-html="item.description[this.$store.state.lang]" />
          </v-col>
      </v-row>
    </v-layout> 


    <!-- IN MEDIA-->
    <br><br>
  <v-layout  class="section-margin-top" style=" margin: 0 auto;"  v-animate-onscroll="{down: 'animated fadeInLeft'}" >
      <v-row class="text-center pe-text" align="center" justify="center" > 
        <v-col   xs="12" sm="12" md="12" lg="12" xl="12" >
          <h1 class="blue-text" v-html="inMedia_tit" /> 
          <p v-html="inMedia_par">  </p>
        </v-col>

        <v-col v-for="(inMediaCard,i) in inMedia" :key="i" cols="12"  xs="12"  sm="12" md="12" lg="12" xl="12">
            <HorizontalCard class="hidden-sm-and-down"  :card="inMediaCard"/>

            <!-- I want in mobile the cards to occupy more width, that is why I am using fluid -->
            <HorizontalCard class="hidden-md-and-up"  :card="inMediaCard" fluid/>

        </v-col>
      </v-row>
    </v-layout> 




</template>
<script>

import vangogh          from '../assets/professional/vangogh.webp';
import CustomCard       from '../components/CustomCard.vue';
import HorizontalCard   from '../components/HorizontalCard.vue';
import DownloadableLink from '../components/DownloadableLink.vue';
import translations     from '../translations/professional.js';


export default {
  name: 'Professional',
  components: {CustomCard,HorizontalCard,DownloadableLink},
  created(){
    //Main picture and subtitle will slide from left to center.
    this.initialLoad = true;
    //Este evento e triggered sempre que ha um scroll
    //window.addEventListener('scroll', this.handleScroll);
  },
  mounted(){
    window.addEventListener('resize', this.resizeFirstSection);
    this.resizeFirstSection();
  },   
  setup() {
    return {
    }
  },
  computed: { 
    text_professional_first_par: function() { return translations["first_message"][this.$store.state.lang];},
    professional_experience_tit: function() { return translations["professional_experience_tit"][this.$store.state.lang]; },
    professional_experience_par: function() { return translations["professional_experience_par"][this.$store.state.lang]; },
    download_cv_par:  function() { return translations["download_cv_par"][this.$store.state.lang]; },
    tech_skills_tit:  function() { return translations["tech_skills_tit"][this.$store.state.lang]; },
    tech_skills_par:  function() { return translations["tech_skills_par"][this.$store.state.lang]; },
    inMedia_tit:      function() { return translations["inMedia_tit"][this.$store.state.lang]; },
    inMedia_par:      function() { return translations["inMedia_par"][this.$store.state.lang]; },
    whatILookFor_tit: function() { return translations["value_tit"][this.$store.state.lang]; },
    text_contact:     function() { return translations["contact"][this.$store.state.lang];}

  },

  data: () => ({
        name: 'Professional',
        image:  "url(" + "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682804988/pedrofortunatoesteves-site/professional/DALL_E_2023-02-12_17.32.39_-_Digital_art_of_XIX_century_Lisbon_uohaab_e7kilf.jpg" + ") center no-repeat",
        firstSectionHeight: "50vh",
        halfFirstSectionHeight: "28vh",
        largura: "100vw",
        initialLoad: false,
        dialog: false,
        professionalCards: false,
        show: true,
        selectedItem: 1,
        python: "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672016422/pedrofortunatoesteves-site/professional/skills/python_mtj327.png",

        whatILookFor: [
          {
            "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006285/pedrofortunatoesteves-site/professional/teamwork_yq4jke.png",
            "title": {
              "en": "Teamwork for Impact",
              "pt": "Trabalho em equipa com Impacto"
            },
            "description":{
              "en": "Integrate a collaborative team that generates meaningful impact on a day-to-day basis.",
              "pt": "Integrar uma equipa colaborativa que gera impacto diariamente."
            }
          },
          {
            "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006285/pedrofortunatoesteves-site/professional/growth_edvqdd.png",
            "title": {
              "en": "Growth",
              "pt": "Crescimento"
            },
            "description":{
              "en": "Learning new things that I can add to my daily work to make it better and more efficient.",
              "pt": "Adquirir conhecimento novo para trazer mais valor e eficiência no meu trabalho."
            }
          },
          {
            "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006285/pedrofortunatoesteves-site/professional/flexibility_nchll1.png",
            "title": {
              "en": "Flexibility",
              "pt": "Flexibilidade"
            },
            "description":{
              "en": "Work-life balance (ex: hybrid work).",
              "pt": "Work-life balance (ex: trabalho híbrido)"
            }
          }
        ],
        techSkills: [
          {
            "title": {"en": "What I often use", "pt": "Uso frequentemente"}, 
            "items":[
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672016422/pedrofortunatoesteves-site/professional/skills/python_mtj327.png",
                "title": "Python"

              },
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672016422/pedrofortunatoesteves-site/professional/skills/vue_ajdqxm.png",
                "title": "Vue.js"
              },
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672018718/pedrofortunatoesteves-site/professional/skills/sql_qwbeho.png",
                "title": "SQL",
              },
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672016421/pedrofortunatoesteves-site/professional/skills/git_r9jpxx.png",
                "title": "Git"
              }
            ]
          },
          {
            "title": { "en": "MS Skills", "pt": "MS Skills" },
            "items":[
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672019218/pedrofortunatoesteves-site/professional/skills/dynamics-crm_swxnv3.png",
                "title": "Dynamics CRM"
              },
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672016421/pedrofortunatoesteves-site/professional/skills/powerplatform_nnjso5.png",
                "title": "Power Platform"
              },
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672018135/pedrofortunatoesteves-site/professional/skills/azure_nygiw8.png",
                "title": "Azure"
              },
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672016421/pedrofortunatoesteves-site/professional/skills/c_k8fqts.png",
                "title": "C#"
              }
            ]
          }, 
          {
            "title": {
                "en" : "Other skills", 
                "pt" : "Projetos pontuais" 
            },
            "items":[
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672018180/pedrofortunatoesteves-site/professional/skills/flutter-logo-768x768_iifn7f.jpg",
                "title":   "Flutter"  
              },
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672016421/pedrofortunatoesteves-site/professional/skills/kaldi_qyqycz.png",
                "title":   "Kaldi"
              },
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672016421/pedrofortunatoesteves-site/professional/skills/node_ff8iht.webp",
                "title":   "Node.js"
              },
              {
                "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672016421/pedrofortunatoesteves-site/professional/skills/js_znmm5u.png",
                "title":   "Javascript"
              }
            ]}]
          ,
        inMedia: [
            {
              "where": "in Microsoft Dynamics Community",
              "title": "Getting Dynamics CRM entity records into Python",
              "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006081/pedrofortunatoesteves-site/professional/ms_vmlmbi.png",
              "media_url": "https://static-00.iconduck.com/assets.00/microsoft-dynamics-365-icon-308x512-5hhoth6a.png",
              "img_url_margin_bottom": '-5px',
              "img_url_width": '25px',
              "link": "https://community.dynamics.com/365/b/customizing-dynamics-365/posts/getting-dynamics-crm-entity-records-with-python",
              "description": {
                "en": "Detailed tutorial I wrote for Microsoft Community on how to get entity records from Dynamics CE into Python.",
                "pt": "Tutorial detalhado com imagens de como conseguir obter os entity records do Dynamics CE no Python."
              } 
            },
            {
              "where": "IN PC GUIA",
              "title": "Trash4Goods cria solução para aumentar a taxa de reciclagem em Portugal",
              "img_url": "https://www.pcguia.pt/wp-content/uploads/2022/08/teamheadert4g.png.webp",
              "media_url": "https://www.pcguia.pt/wp-content/uploads/2017/04/Icone_PCG.png",
              "img_url_margin_bottom": '-5px',
              "img_url_width": '25px',
              "link": "https://www.pcguia.pt/2022/09/trash4goods-cria-solucao-para-aumentar-a-taxa-de-reciclagem-em-portugal/",
              "description":  {
                "en": "The portuguese startup developed a platform that leverages gamification to reward who recycles. \ The goal is to change the way people look at residuals: \
                «not like trash, but as matter that can bring benefits»",
                "pt": "A startup nacional desenvolveu uma plataforma que usa gamificação para recompensar quem faz reciclagem.\
                 O objectivo é que as pessoas olhem para os resíduos, «não como lixo, mas sim como matéria-prima que lhes pode trazer benefícios»."
              }
            },
            {
              "title": "E-Waste Open Innovation Quer Portugueses A Reciclar Mais Lixo Eletrónico",
              "where": "IN Exame Informática",
              "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006271/pedrofortunatoesteves-site/professional/trash4goods-exameinformatica_mwwsty.jpg",
              "media_url": "https://images.trustinnews.pt/uploads/sites/5/2020/01/Logos-Exame-Informatica.png",
              "img_url_margin_bottom": '0px',
              "img_url_width": '45px',
              "link": "https://www.pcguia.pt/2022/09/trash4goods-cria-solucao-para-aumentar-a-taxa-de-reciclagem-em-portugal/",
              "description": {
                "en": "Trash4Goods is a startup who won the first edition of e-Waste Open Innovation, a entrepneurship competition that promotes the development of solutions for the recycling of electronic residuals.",
                "pt":" Trash4Goods é a startup que ganhou a primeira edição do e-Waste Open Innovation, uma competição de empreendedorismo que promove o desenvolvimento de soluções para a reciclagem de Resíduos de Equipamentos Elétricos e Eletrónicos (REEE)."
              }
            }],
        ProfessionalExperience: [
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
              Desde então tenho estado a ajudar pessoas e negócios de todos os cantos do mundo a alcançarem mais com produtos Microsoft, nomeadamente o Microsoft Dynamics 365. \
              Paralelamente a isto tenho aproveitado a minha atividade profissional para me desafiar e aumentar o conhecimento em diferentes áreas e produtos através da realização de certificações em diferentes produtos da Microsoft: \
              <ul style='margin-left:2%;'> <br>\
                <li>Microsoft Certified: Dynamics 365 Fundamentals (CRM) </li>\
                <li>Microsoft Certified: Azure Fundamentals</li>\
                <li>Microsoft Certified: Power Platform Fundamentals</li>\
                <li>Microsoft Certified: Security Compliance and Identity Fundamentals</li> \
                <li>Microsoft Certified: Power Platform Developer Associate</li>\
                <li>Microsoft Certified: Azure AI Fundamentals</li>\
                <li>Microsoft Certified: Power Platform Solution Architect Expert</li>\
                <li>Microsoft Certified: Azure Developer Associate</li>\
                <li>Microsoft Certified: Azure Data Engineer Associate</li>\
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
                <li>Microsoft Certified: Azure AI Fundamentals</li>\
              </ul><br> I love the job I am currently doing because I learn everyday about customer needs and  exciting new products as well. <br> \
              For the next steps I will strive to keep causing a positive impact near our customers and on my time as well as learn more.</p>"
              
              
            },
            img_url: "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006081/pedrofortunatoesteves-site/professional/ms_vmlmbi.png",
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
            img_url: "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006081/pedrofortunatoesteves-site/professional/trash4goods_iug8oj.png",
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
            img_url: "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006081/pedrofortunatoesteves-site/professional/syone_ixq9yo.jpg",
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
            img_url:  "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672006081/pedrofortunatoesteves-site/professional/junitec_kxehse.png",
            url: "http://www.betventures.org/bet19.html"
          }
        ],
     vangogh
  }),
  methods: {
    handleScroll() {
      this.professionalCards = true;
    },
    
    resizeFirstSection(){
      var offsetHeight = this.$store.state["bodyHeight"];
      this.firstSectionHeight =  1 * offsetHeight + "vh";

      console.log("offsetHeight: ", offsetHeight);
      this.halfFirstSectionHeight =  this.firstSectionHeight * 0.00000000001
    }

  }
}
</script>

<style lang="scss" scoped>

  @import  "../styles/animation.scss";
  @import  "../styles/images.scss";
  @import  "../styles/professional.scss";
  @import  "../styles/text.scss";

.custom-card-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem; /* Adjust margin bottom as needed */
}

.custom-card {
  width: 100%; /* Set the desired width for the cards */
}

.centered-container {
  display: flex;
  justify-content: center;
}

.content-container {
  margin: 0 20px; /* Add desired margin from left and right */
}

.center-text-align-left {
  text-align: left;
}

</style>