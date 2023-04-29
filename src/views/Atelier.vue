<template>
  <v-container >
    <h1 class="title blue-text"> Atelier</h1> <br> 
     
     <div style="margin: 0 auto;text-align:center;">
      <v-img width="50%" align="center" justify="center" style="margin: 0 auto;" :src="under_construction_img"> </v-img> 
      <p class="pe-text"> {{under_construction}} </p>
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
        under_construction_img : "https://res.cloudinary.com/dho8ay2wz/image/upload/v1676227267/pedrofortunatoesteves-site/aboutme/DALL_E_2023-02-12_18.40.02_-_impressionist_painting_of__Under_Construction__sign_sa3wxk.png"
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";

</style>