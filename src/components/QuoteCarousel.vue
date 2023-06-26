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
            "pt": "Para ser grande, sê inteiro: Nada teu exagera ou exclui.",
            "en": "To be great, be whole: Nothing of yours exaggerates or excludes."
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
            "en": "Who is John Galt ?",
            "pt" : "Quem é John Galt ?"
          },
          author: "Ayn Rand",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    @import  "../styles/text.scss";
</style>