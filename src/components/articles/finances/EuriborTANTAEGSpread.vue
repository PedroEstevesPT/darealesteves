<template>
  <v-container class="pe-text">

    <h1 class="blue-text">
       Euribor, TAN, TAEGs, Spreads
    </h1>
    <BreadCrumbs  :items="breadcrumbs" />

  <p> <!-- SPREAD -->
    <b class="blue-text">Spread</b> - Quem procura um crédito à habitação acaba por ter de lidar com um Spread.
    Quanto mais alto for o Spread, mais temos de pagar ao banco.
    <br> 
    <li>
      O spread é a componente da taxa de juro que acresce ao indexante.
    O indexante é a taxa de juro de referência.
    Em Portugal esta taxa é a Euribor. 
    </li>
    <li>
    Dependendo do contrato a Euribor pode ser atualizada trimestral, semestral ou anualmente.
    <b>O spread , por norma é fixo (não varia ao longo do tempo), mas pode sofrer alterações.</b>
    </li>
    <li>
    Cada contrato pode ter um spread diferente, tendo em conta “o risco de crédito do cliente, o rácio entre o valor do empréstimo e o valor do imóvel, e o seu custo de financiamento”.
    </li>
    <li>
    Como a facilidade ou dificuldade que a instituição de crédito tem em financiar-se também está refletida no spread, em períodos de crise financeira em que o risco é maior e os bancos sofrem dificuldades, os spreads tendem a subir.
    </li>
  </p>

  <br><br>
  <p> <!--Euribor -->
    <b class="blue-text">Euribor</b> - Taxa de juro de que um conjunto de bancos da zona Euro cobram por emprestarem dinheiro entre si.
    <li> Euribor nasceu com o Euro no dia 1 de Janeiro de 1999. É uma abreviatura para <i>Euro Interbank Offered Rate</i>.</li>

    <li> A Euribor reúne um conjunto de taxas: Euribor a uma semana, 1, 3, 6 e 12 meses. </li>

    <li>
        Este grupo de bancos é atualmente constituído por 19 na zona euro incluindo a CGD. </li>

    <li> 
        Euribor é a média as taxas de juro praticadas nos empréstimos entre um grupo específico de bancos em Euros.<br>
        Para o cálculo são excluídas 15% das taxas mais altas e 15% das taxas mais baixas e o resultado final é arredondado a três 
        décimas.
    </li>

    <li> As Taxas Euribor são calculadas diariamente pela Federação Europeia de Bancos e são comunicadas às 10 horas de Lisboa. </li>
    <li> <b> A Euribor varia ao longo do tempo consoante o mercado (a mais comum é a 6 meses). </b> </li>
  </p>
 
  <br><br>
  <p>
    <b class="blue-text"> TAN</b> - TAN é uma sigla para Taxa Anual Nominal. Trata-se da soma entre a Euribor e o Spread.
    <li> É esta soma que se paga mensalmente ao banco (basta dividir o valor por 12). </li>
    <li> <b >A TAN não inclui despesas associadas com a contratação do crédito.</b> </li>
  </p>

  <br><br>

  <p> 
    <p><b class="blue-text"> TAEG </b> - TAEG é uma sigla para Taxa Anual Efetiva Global. 
    É a medida para a qual devemos olhar para comparar propostas. </p>
    <li> A TAEG mede o custo total dos empréstimos. Inclui encargos com juros,
      comissões bancárias, despesas processuais, seguros e todos os outros custos. </li>
    <li style="color:green;"><b> A TAEG é um melhor indicador que a TAN. É isto o que convém comparar entre propostas de bancos.</b> </li>
  </p>

  <br><br>

  <p> <b class="blue-text">TAE </b> - TAE é uma sigla para Taxa Anual Efetiva. É a TAEG menos impostos.
  <li> Ela inclui os custos associados a um determinado empréstimo, juros, comissões bancárias e prémios dos seguros exigidos
    mas não inclui impostos como o do selo. </li>
  <li> Este indicador tem perdido relevância, sendo mais interessante olhar para a TAEG que é mais completa. </li>


  <br>

  <p><b class="blue-text"> Fontes: </b></p>
    <p><a href="https://www.doutorfinancas.pt/creditos/o-que-e-o-spread-no-credito-habitacao/">Doutor Finanças - O que é o spread no crédito habitação ?</a></p>
    <p> <a href="https://www.doutorfinancas.pt/creditos/tan-e-taeg-quais-as-diferencas/"> Doutor Finanças - TAN e TAEG - Quais as diferenças ? </a></p>
    <p> <a href="https://contasconnosco.cofidis.pt/credito/qual-a-diferenca-entre-as-taxas-tan-tae-e-taeg">Cofidis - Qual a diferença entre as taxas TAN, TAE e TAEG ? </a></p>

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