<template>
  <v-container >

    <h1 class="blue-text">
       Euribor, TAN, TAEGs, Spreads
    </h1>
    <BreadCrumbs  :items="breadcrumbs" />  <br>

  <p>
    Spread - Quem procura um crédito à habitação acaba por ter de lidar com um Spread.
    Quanto mais alto for o Spread, mais temos de pagar ao banco.

    O que é o Spread ? (copiado do Doutor finanças)

    O spread é a componente da taxa de juro que acresce ao indexante.
    O indexante é a taxa de juro de referência.
    Em Portugal esta taxa é a Euribor.

    Dependendo do contrato a Euribor pode ser atualizada trimestral, semestral ou anualmente.
    O spread , por norma é fixo, mas pode sofrer alterações.

Segundo o regulador, o spread é livremente definido pela instituição de crédito para cada contrato, tendo em conta “o risco de crédito do cliente, o rácio entre o valor do empréstimo e o valor do imóvel, e o seu custo de financiamento”.

Assim, simplificando, o spread acaba por representar o lucro para a instituição de crédito, sendo que o seu valor depende de instituição para instituição e de contrato para contrato, visto representar, em parte, o risco assumido pelo banco.

Como a facilidade ou dificuldade que a instituição de crédito tem em financiar-se também está refletida no spread, em períodos de crise financeira em que o risco é maior e os bancos sofrem dificuldades, os spreads tendem a subir.


    Referencias: https://www.doutorfinancas.pt/creditos/o-que-e-o-spread-no-credito-habitacao/
  </p>

  <p>
    Euribor - Taxa de juro de que um conjunto de bancos da zona Euro cobram por emprestarem dinheiro entre si.
  </p>

  </v-container>
</template>
<script>

import ArticleFigure from '../../ArticleFigure.vue';
import BreadCrumbs from   '../../BreadCrumbs.vue';


export default {
  name: 'Euribor, TAN, TAEG, Spreads',
  components: {ArticleFigure,BreadCrumbs},
  computed: { 
  },
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"},         "path":"/blog"},
      {"title": {"en": "Finances", "pt": "Finanças"},  "path":"/blog/finances"},
      {"title": {"en": "Euribor, TAN, TAEG and Spreads", "pt": "Euribor, TAN, TAEG e Spreads"}, "path":"/blog/finances/euribortantaegspreads"},
    ],
    AforroEvolution: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682281233/pedrofortunatoesteves-site/blog/finances/certificados_de_aforro_rcpnck.png",
        "description": {
          "pt": "Se tivesse depositado 10000 euros no dia 1 de Janeiro de 2020 em certificados de aforro (série E), teria neste dia (24 de Abril de 2023), de acordo \
          com o simulador da Agência de Gestão e Tesouraria e da Dívida Pública: 102842 euros.",
        }
    },
    VWCEEvolution: { 
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682282443/pedrofortunatoesteves-site/blog/finances/vwce_evolution_2020-2023_dibpit.png",
        "description": {
          "pt": "(1) Se tivesse depositado 10000 euros no Vanguard FTSE All-World UCITS ETF (USD) \
         com base no site https://www.justetf.com/ <br>\
        considerando o câmbio euro-dollar: 1 EUR = 1.11930 USD no dia 2/1/2020 teria então 111930.00$. <br> \
        (2) 1 ETF VWCE valia no dia 2 de Janeiro de 2020 77.55$ <br>\
        (3) Com 111930$ conseguiria comprar ao preço indicado acima 1443 ETFS's (por 111904.65 $). <br>\
        (4) Segundo o https://www.justetf.com/ cada ETF VWSE valeria no dia 23/4/2023 95.43$ ou seja caso quisesse vender\
        os ETFs previamente comprados em 2020 teria 137705.49$." 
        }
    },
    Convesor: {
        "img": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1682372044/pedrofortunatoesteves-site/blog/finances/conversor_ckzwct.png",
        "description": {
          "pt": " (5) Segundo o Banco de Portugal, o câmbio USD -> EUR no dia 23/4/2023 é 1 USD = 0.91091 EUR ou seja teria ganho 125437.68 euros. <br>\
        (6) Aplicando a Taxa liberatória sobre os lucros de 28% teria lucrado 0.72 * (125437.68 - 100000) = 18315 euros, um valor substancialmente maior que 2842 euros dos CAs." 
        }
    }
    
  }),
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
  }
}}
</script>

<style lang="scss" scoped>
@import  "../../../styles/images.scss";
@import  "../../../styles/text.scss";



</style>