<template  style="background-color:blue;">
<v-container class="fill-height"  >
    <v-row align="center" justify="center" class="fill-height" >
        
        <p  class="pe-text" style="color:blue;font-size:250%;">
          {{ this.text[this.$store.state.lang]}}
        </p>

    </v-row>
</v-container>
</template>
<script>



export default {
  name: 'NotFOund',
  setup() {
  },
  methods: {

  },
  computed: { 

  },
  data: () => ({
      text: {"en": "Oh oh, it looks like there is nothing here...", "pt":"Oops, parece que não há nada aqui..."  }
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";

</style>