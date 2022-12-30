<template>
  <v-container >
        <h1> Gastronomy </h1>

      <v-img :width=img_width  class="article-img" :src="cinema" /> 


  </v-container>
</template>



<script>



export default {
  name: 'Gastronomy',
  setup() {

  },
  methods: {
 
  },
  computed: { 
  },
  data: () => ({
    cinema: "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672001555/pedrofortunatoesteves-site/blog/cinema/fassbinder/0_vu7vyl.jpg",
    img_width: '65%'
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";


</style>