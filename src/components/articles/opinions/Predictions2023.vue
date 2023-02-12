<template>
  <v-container >

    <h1 class="blue-text">
        Previsões para 2023: ChatGPT, Layoffs, oportunidades (escrito a 21/1/2023)
    </h1>
    <br>


    <p>
      Eu cheguei tarde há festa umas duas semanas.
      Mas quando finalmente usei o ChatGPT eu fiquei boquiaberto.
      Após fazer-lhe questões como:
    </p>
    <br>

    <li> O João tem 20 anos, há 10 anos atrás o João tinha o dobro da idade do Miguel, que idade tem o Miguel hoje ? </li>  
    <li> O que é que o Adolfo, o Francisco, o Benito e o António têm em comum ? </li>  
    <li> Explica-me o argumento da diagonalização como se fosses uma mistura do Voltaire e um gangster italiano. </li>  
    <li> O que é que a palavra 'love' e a capital de Itália traduzida para português, escrita de trás para a frente têm em comum ? </li>
    <li> Arranja-me um final alternativo para o TaxiDriver. </li> 
    <li> Ajuda-me com código deste site. </li>

    <br>

    <p>
      Eu fiquei <b>assombrado</b>.
    </p>

    <br>

    <p>
       Para as perguntas objetivas o ChatGPT deu sempre a resposta certa, e para as mais subjetivas ele é extremamente criativo, já para não falar do rate de output.
      Uns segundos, e tinha a resposta a cada questão. A tecnologia chegou ao ponto da mudança de paradigma.
    </p>

    <br>

    <p>
      Tirei o mestrado em Engenharia Informática entre 2018-2021.
      Durante estes anos, além de frequentar grupos de leitura no contexto do desenvolvimento da minha dissertação em ASR, também fui bolseiro dum projeto destinada à investigação de Semantic Parsing.
      Nomeadamente, na tradução de Língua Natural para SQL (mexi em modelos como O T5, RAT-SQL, SMbop etc...), isto não é para ser pretensioso, longe disso na verdade, mas do que vi até agora, nada se aproxima do ChatGPT.
      O salto tornou-se público no final de 2022, inícios de 2023,
      e os impactos disto na sociedade vão tornar-se globais, reforço, nada voltará a ser o mesmo. Em baixo estão as minhas previsões:
    </p>

    <br>

    <h2>
      Previsões
    </h2>
    <br>

    <p>
      Desde o final de 2022 têm sido anunciados layoffs gigantescos nas Big Tech. Esta quarta-feira, 18/1/2023 foi o dia em que o Satya, CEO da Microsoft anunciou a notícia, através de um email para todos os FTE com o título:
      <a href="https://blogs.microsoft.com/blog/2023/01/18/subject-focusing-on-our-short-and-long-term-opportunity/"> Focusing on our short- and long-term opportunity </a> <br>
      Neste mesmo dia, horas antes do email ser lançado, tinha falado com o meu Technical Lead e a expressar basicamente que os sinais estavam à nossa frente, muito do trabalho que eu os meus colegas fazemos enquanto Support Engineer 
      pode ser facilmente substítuido ou otimizado pelo ChatGPT.
      O email do Satya não diz que o layoff se deve a AI, de facto, com a guerra na Ucrânia e outras variáveis mundiais, está neste momento a acontecer uma recessão económica, mas no meu entender, o papel que o ChatGPT pode ter tido, pode ser bastante
      maior do que o que se julga.


      Segue-se em baixo algumas das previsões para o resto do ano:
    </p>

    <br>


      <li> O ChatGPT não vai continuar a ser gratuito </li>


      <li> Os layoffs nas Big Tech vão continuar e a situação não é boa para o supporte</li>

      <li> A desvalorização do trabalho informático feito por humanos e a valorização do mundo físico (preços na alimentação, imobiliário, restauração e bens físicos continuarão a subir) </li>


      <li> Distopia vs Utopia </li>




    <br>

  </v-container>
</template>
<script>

import ArticleFigure from '../../../components/ArticleFigure.vue';


export default {
  name: 'Predictions2023',
  components: {ArticleFigure},
  computed: { 
  },
  data: () => ({

 
    
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