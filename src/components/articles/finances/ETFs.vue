<template>
  <v-container >

    <h1 class="blue-text">
       Exchange Traded Funds (ETFs)
    </h1>

    <BreadCrumbs  :items="breadcrumbs" /> 

  <br>
  <h2 class="blue-text pe-text"> Index</h2>
  <li class="pe-text underline" @click="scrollToElement('whatAre')"> O que são ETFs</li>
  <li class="pe-text underline" @click="scrollToElement('ETFsVsCA')"> Ex: ETF VWSE vs Certificados de Aforro </li>
  <li class="pe-text underline" @click="scrollToElement('InterestingETFs')"> Alguns ETFs interessantes </li>

  <br>


    <h2 id="whatAre" class="pe-text blue-text"> O que são Exchange Traded Funds (ETFs) ?</h2><br>

    <p class="pe-text">
      Os ETFs são um conjunto de títulos que podem ser comprados ou vendidos através de uma corretora
      numa bolsa de valores (ou dizendo de outra forma, podemos considerar um ETF um cabaz de ativos). <br>
      Estes títulos podem ser <b>acções </b> , <b> matérias primas </b> ou <b> obrigações</b>. <br>
      Normalmente os ETFs podem ser classificados de acordo com vários critérios: <br><br>
      <ul> <b>Geográficos</b> - Seguem vários índices mundiais como o S&P 500. </ul>
      <ul> <b>Sectoriais</b> - Seguem um determinado índice que agrega um conjunto de acções pertencentes a um determinado setor. Ex: energias </ul>
      <ul> <b>Estratégia de investimento</b> - Agregam um conjunto de acções mais adequadas para um determinado tipo de estratégia de investimento.
        Por exemplo, caso tenha preferência por acções de dividendos, saiba que é possível investir num fundo constítuido apenas por este tipo de acções. </ul>
    
    <br>
    Os ETFs dividem-se ainda em ETFs de <b>acumulação</b> e de <b>distribuição</b>.
    <br><br>
    Os <b>acumulativos</b> têm os seus dividendos automaticamente reenvestidos no fundo pelo gestor do fundo sem qualquer despesa extra.
    Como resultado o ETF aumenta e também não me tenho de preocupar em declarar dividendos no IRS.
    <br>
    <br>

    Os <b>distributivos</b> pagam dividendos aos investidores.
    <br><br>

    <b>Fontes:</b><br>
      <a href="https://www.degiro.pt/conhecimento/investir-em-etfs/diferenca-entre-etfs-acumulativos-e-etfs-distributivos">
        DEGIRO: Diferenças entre etfs acumulativos e etfs distributivos.
      </a><br>
      <a href="https://www.doutorfinancas.pt/financas-pessoais/investimentos/etf-o-que-sao-e-como-podem-ser-uma-boa-opcao-de-investimento/">
      Doutor Finanças: O que são e como funcionam como opção de investimento
      </a>

    
    </p>


    <br><br>

    <h2 id="ETFsVsCA" class="pe-text blue-text">Exercício: ETFs VWSE vs Certificados de Aforro</h2><br>
    <p class="pe-text">
    Em baixo está uma comparação de quanto dinheiro teria ganho em ETFs vs Certificados de Aforro se tivesse depositado 100000 euros nestas opções
    no dia 1 de Janeiro de 2020.
    De notar que este exercício é um bocado absurdo uma vez que os certificados de aforro são um produto de capital garantido e nos ETFs (ainda que sejam globais)
    pode se perder dinheiro , ainda que historicamente a longo prazo sejam mais vantajosos, por isso naturalmente os VWSE rendem mais, a questão
    era de alguma forma saber o prémio do risco. <br> <br>
     Outra nota importante: <b> Ganhos passados não garantem ganhos futuros.</b> 
    </p>

    <ArticleFigure :figure=AforroEvolution />

    <ArticleFigure :figure=VWCEEvolution />

    <ArticleFigure :figure=Convesor />


    <h2 id="InterestingETFs" class="pe-text blue-text"> ETFs Interessantes </h2>
    <br>

    <p class="pe-text"> <b> Vanguard FTSE All-World UCITS ETF (USD) Accumulating (VWCE) </b>  - À data de escrita desta página (24/4/2023) os top 10 holdings da VWCE segundo o site justetf.com são:  </p>    
    <br>
    
        <li> APPLE INC (3.68%)</li>
        <li> MICROSOFT CORP (3.10%)</li>
        <li> AMAZON.COM INC (1.39%)</li>
        <li> NVIDIA CORP (0.93%)</li>
        <li> ALPHABET INC A (0.89%)</li>
        <li> TESLA INC (0.88%)</li>
        <li> ALPHABET INC C (0.81%)</li>
        <li> EXXON MOBIL CORP (0.75%)</li>
        <li> UNITED HEALTH GRP.INC (0.74%)</li>
        <li> JPMORGAN CHASE & CO (0.69%)</li>

    <br>
    <p class="pe-text">  <b> iShares Core MSCI World UCITS ETF USD (IWDA) </b> - À data de escrita desta página (24/4/2023) os top 10 holdings da IWDA segundo o site justetf.com são: </p>
    <br>
        <li> APPLE INC (4.50%)</li>
        <li> MICROSOFT CORP (3.39%)</li>
        <li> AMAZON.COM INC (1.66%)</li>
        <li> NVIDIA CORP (1.10%)</li>
        <li> ALPHABET INC A (1.03%)</li>
        <li> TESLA INC (1.06%)</li>
        <li> ALPHABET INC C (0.95%)</li>
        <li> EXXON MOBIL CORP (0.87%)</li>
        <li> UNITED HEALTH GRP.INC (0.85%)</li>
        <li> JPMORGAN CHASE & CO (0.81%)</li> 
    <br>

    <p class="pe-text"> 
      Como podemos constatar o IWDA, quando comparado com o VWCE é um ETF em que os top holdings são os mesmos mas as percentagens são maiores.
    </p>

    <br>    


    <p class="pe-text"> <b> SUSW (iShares MSCI World SRI UCITS ETF) </b>  - À data de escrita desta página (24/4/2023) os top 10 holdings da SUSW segundo o site justetf.com são: </p>
    <br>
        <li>NVIDIA CORP (4.65%)</li>
        <li>TESLA INC (4.50%)</li>
        <li>MICROSOFT CORP (4.37%)</li>
        <li>THE HOME DEPOT INC (2.46%)</li>
        <li>ASML HOLDING ORD (2.46%)</li>
        <li>COCA-COLA CO (1.99%)</li>
        <li>PEPSICO INC (1.95%)</li>
        <li>NOVO NORDISK A/S -B (1.91%)</li>
        <li>ROCHE ORD (1.66%) </li>
        <li>THE WALT DISNEY CO. (1.48%)</li> 
  <p class="pe-text">
    <br>
    Pessoalmente acho este ETF muito interessante porque creio que a Inteligência Artificial vai ganhar um novo ritmo a partir de 2023
    e como tal apostar nos fabricantes de placas gráficas e semicondutores (NVIDIA e ASML respetivamente) faz todo o sentido. <br>

    Das grandes tecnológicas também acredito que a campeã será a Microsoft por isso é interessante ver que ela é a única incluída nesta lista.
    (Não vemos Google nem Amazon)
    <br>
    Paralelamente a isto fico feliz ao ver a Tesla na lista pois cada vez que saio à rua vejo mais Teslas e a marketshare dos veiculos elétricos vai aumentar.
    <br>
    Quanto às outras empresas não tenho uma opinião tão fundamentada, no entanto acredito que este ETF promete.
  
  </p>

  </v-container>
</template>
<script>

import ArticleFigure from '../../ArticleFigure.vue';
import BreadCrumbs from   '../../../components/BreadCrumbs.vue';


export default {
  name: 'ETFs',
  components: {ArticleFigure,BreadCrumbs},
  computed: { 
  },
  data: () => ({
    breadcrumbs: [
      {"title": {"en": "Blog" , "pt": "Blog"},         "path":"/blog"},
      {"title": {"en": "Finances", "pt": "Finanças"},  "path":"/blog/finances"},
      {"title": {"en": "Exchange Traded Funds (ETFs)", "pt": "Exchange Traded Funds (ETFs)"}, "path":"/blog/movies/impressivemonetbrilliantklimt"},
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