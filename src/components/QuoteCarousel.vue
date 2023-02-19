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
     
      <div style="text-align:center; background-color:blue; border-radius: 3%; padding:1%; display: inline-block;opacity:90%;">
        <i class="white-text" style="font-size:150%;">{{ quote.text }}</i><br>
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
          text: "Para ser grande, sê inteiro: nada Teu exagera ou exclui.",
          author: "Ricardo Reis",
        },
        {
          text: "Sê todo em cada coisa. Põe quanto és No mínimo que fazes.",
          author: "Ricardo Reis",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    @import  "../styles/text.scss";
</style>