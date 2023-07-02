  <template>
  
      <!-- CARD -->
      <v-card @click.native.stop="dialog = true" class="mx-auto" style="border-radius:5%; width:300px;" >
        <v-img :src="CustomCardItem.img_url"  height=200px></v-img>
        <v-card-title primary-title>
          <h3 :class="CustomCardItem.color" > {{CustomCardItem.name}}</h3>
        </v-card-title>
          <p class="pe-text" style="text-align: center; margin: 0 auto; " v-html="CustomCardItem.title[this.$store.state.lang]"></p>
      </v-card> 

    <v-dialog  v-model="dialog" max-width="90%">
      <v-card>

        <!-- no gutters is essential to remove the small space between image and title -->
        
        <v-row cols="10" align="center" no-gutters>

          <!-- CARD IMG -->
          <v-col cols="auto" >
            <v-img class="card-img" :src="CustomCardItem.img_url"  width="50" height="50" />
          </v-col>
          <v-col>

          <!-- CARD TITLE -->
          <v-card-title :class="CustomCardItem.color"  class="card-title pe-text">
            {{CustomCardItem.title[this.$store.state.lang]}}
          </v-card-title>

          </v-col>
        </v-row>

        <v-card-text class="pe-text" v-html="CustomCardItem.modal_text[this.$store.state.lang]"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">
           <div :class="CustomCardItem.color" v-if="this.$store.state.lang=='en'">Close </div> 
            <div :class="CustomCardItem.color" v-else> Fechar </div>
          </v-btn>
        </v-card-actions>

      </v-card>  
    </v-dialog>  
  </template>

    <script>
    export default {
      name: 'CustomCard',
      props: ["CustomCardItem"],
      data() {
        return {
          dialog: false
        };
      }
    };
    </script>


<style lang="scss" scoped>
@import  "../styles/text.scss";

.card-title p {
  word-wrap: break-word;
}

@media only screen and (max-width: 600px) {
  .card-title {
    font-size: 100%;
  }
}


:hover.filter-green{
  filter: invert(37%) sepia(76%) saturate(589%) hue-rotate(58deg) brightness(93%) contrast(86%);
}

.card-img{
  margin-left: 2px;
  margin-top: 5px;
}


.microsoftblue {
  color: #04a5f0;
}

.trash4goods {
  color: #1f7f49;
}

.syone {
  color: #008b9c;
}

.junitec {
  color: #00ace2;
}

</style>
