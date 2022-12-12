<template>
  <v-container >
    <h1 class="title"> Atelier</h1> <br> 
     
     <div style="margin: 0 auto;text-align:center;">
      <v-img width="50%" align="center" justify="center" style="margin: 0 auto;" :src="under_construction_img"> </v-img> 
      <p> {{under_construction}} </p>
    </div>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

  </v-container>
</template>
<script>

import under_construction_img from "../assets/under_construction.jpg";
import translations from  '../translations/atelier.js';


export default {
  name: 'Atelier',
  setup() {
  },
  methods: {

  },
  computed: { 
    under_construction: function() { 
      return translations["under_construction"][this.$store.state.lang]; 
    }
  },
  data: () => ({
        under_construction_img
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";

</style>