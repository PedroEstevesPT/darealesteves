    <template>
  
      <!-- CARD -->
      <v-card @click.native.stop="dialog = true" class="mx-auto" style="border-radius:5%;" >
        <v-img :src="NewsItem.img_url"  height=200px></v-img>
        <v-card-title primary-title>
            <h3  style="color:#368943; font-weight:bold;"> {{NewsItem.name}}</h3><br>
            <p style="text-align:center; margin: 0 auto;" v-html="NewsItem.title[this.$store.state.lang]" ></p>
        </v-card-title>
      </v-card> 

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text> {{NewsItem.modal_text[this.$store.state.lang]}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    </template>

    <script>
    export default {
      name: 'NewsCard',
      props: ["NewsItem"],
      data() {
        return {
          dialog: false
        };
      }
    };
    </script>

<style lang="scss" scoped>

  :hover.filter-green{
    filter: invert(37%) sepia(76%) saturate(589%) hue-rotate(58deg) brightness(93%) contrast(86%);
  }
</style>
