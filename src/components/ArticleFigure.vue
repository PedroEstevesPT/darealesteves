    <template>

      <!-- Article figure -->
      <div align="center" class="article-par-padding"> 
        <v-img class="article-img"  :src="figure.img"  />
        <p class="pe-text" v-html=figure.description[this.$store.state.lang] />
      </div><br>

    </template>

    <script>
    export default {
      name: 'ArticleFigure',
      props: ["figure"],
      data() {
        return {
        };
      }
    };
    </script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";

.article-img{
  border-radius: 5%;
  width:95%;
}

@media screen and (min-width: 640px) {
    .article-img{
      width: 65%;
    }
}



</style>
