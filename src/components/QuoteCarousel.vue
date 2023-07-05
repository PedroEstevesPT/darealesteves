<template>
<div >
    <v-carousel 
        :cycle="cycleInterval"         
        :continuous="false"
        :show-arrows="false"
        hide-delimiters
        delimiter-icon="mdi-square"
        :height="'auto'"
    >

    <!-- height=auto is needed -->
    <v-carousel-item v-for="(quote, index) in quotes" :key="index" :height="'auto'" >
     
      <div style="text-align:center; background-color:blue; border-radius: 3%; padding:1%; display: inline-block;opacity:92%;">
        <i class="white-text" style="font-size:150%;">{{ quote.text[this.$store.state.lang] }} </i><br>
        <strong class="white-text" style="text-align: right;">{{ quote.author }}</strong>
      </div>
    </v-carousel-item> 
  </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cycleInterval: 5000, // set the interval time to switch quotes
      quotes: [
        {
          text: { 
            "en": "To be great, be whole: Exclude nothing, exaggerate nothing.",
            "pt": "Para ser grande, sê inteiro: Nada teu exagera ou exclui."
          },
          author: "Ricardo Reis",
        }, 
        {
          text:  { 
            "en": "Be whole in everything. Put all that you are into the least that you do.",
            "pt" : "Sê todo em cada coisa. Põe quanto és no mínimo que fazes."
          },
          author: "Ricardo Reis",
        },
        {
          text:  { 
            "en": "Only the brave deserve the fair",
            "pt" : "Apenas os corajosos mereçem o justo"
          },
          author: "George F. Händel (Alexander's Feast)",
        },
        {
          text:  { 
            "en": "The most dangerous phrase in the language is:'We've always done it this way'",
            "pt" : "A frase mais perigosa na linguagem é: 'Nós sempre fizemos assim'"
          },
          author: "Grace Hopper",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    @import  "../styles/text.scss";
</style>