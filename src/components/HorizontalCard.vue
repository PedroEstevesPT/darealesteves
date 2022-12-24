    <template>
  
      <!--Horizontal card CARD -->
        <v-container>

      <v-card @click.native.stop="dialog = true" >
        <v-layout fluid>
        <v-row class="text-center column wrap fill-height" align="center" justify="center" >    
            <v-col :class="{ leftSlide: initialLoad }"   xl="3" lg="3" md="5" sm="12" >
                <v-img :src="card.img_url"  height=200px></v-img>
            </v-col>
            
            <v-col  :class="{ rightSlide: initialLoad }"   xl="8" lg="8" md="7" sm="12"> 
            
            <div style="text-align:left;font-size:150%;" > 
                <img :style="{ 'margin-bottom': card.img_url_margin_bottom, width: card.img_url_width}"  :src="card.media_url"/>
                <span>&nbsp {{card.title}} </span>
            </div>
            
            <p style="text-align:left">{{card.description}} </p>
            </v-col>
        </v-row>
        </v-layout>

      </v-card> 
        </v-container>


<!--
    <v-dialog  v-model="dialog" max-width="90%">
      <v-card>
        <v-card-title class="headline" :class="CustomCardItem.color" >{{CustomCardItem.title[this.$store.state.lang]}}</v-card-title>
        <v-card-text v-html="CustomCardItem.modal_text[this.$store.state.lang]"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">
           <div v-if="this.$store.state.lang=='en'">Close </div> 
            <div v-else> Fechar </div>
          </v-btn>
        </v-card-actions>
      </v-card>  
    </v-dialog>  
-->
    </template>

    <script>
    export default {
      name: 'HorizontalCard',
      props: ["card"],
      data() {
        return {
          dialog: false
        };
      }
    };
    </script>

<style lang="scss" scoped>



</style>
