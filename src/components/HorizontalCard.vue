    <template>
  
      <!--Horizontal card CARD -->
        <v-container >

            <a :href="card.link" class="no-underline"><v-card @click.native.stop="dialog = true" >
                <v-layout fluid>
                    <v-row class="text-center column wrap fill-height hidden-sm-and-down" align="center" justify="center" > 

                        <!--IMG -->   
                        <v-col   xl="3" lg="3" md="5" sm="12" >
                            <v-img :src="card.img_url"  height=200px></v-img>
                        </v-col>    
                        <!-- TEXT -->
                        <v-col    xl="8" lg="8" md="7" sm="12"> 
                            <div style="text-align:left;font-size:150%;" > 

                                <h3 class="pe-text blue-text"  v-html="card.title"   />
                                <img :style="{ 'margin-bottom': card.img_url_margin_bottom, width: card.img_url_width}"  :src="card.media_url"/>
                                <span>&nbsp {{card.where}} </span>
                            </div>
                            <!-- DESCRIPTION OF CARD WILL NOT APPEAR IN MOBILE -->
                            <p style="text-align:left">{{card.description}} </p>
                        </v-col>
                    </v-row>


                    <!-- MOBILE -->
                    <v-row class="text-center column wrap fill-height hidden-md-and-up" align="center" justify="center" > 
                        <!--IMG -->   
                        <v-col   sm="12" xs="12">
                            <v-img :src="card.img_url" ></v-img>

                                <h3 class="pe-text blue-text"  v-html="card.title"   />

                                <img :style="{ 'margin-bottom': card.img_url_margin_bottom, width: card.img_url_width}"  :src="card.media_url"/>
                                <span>&nbsp {{card.where}} </span>
                        </v-col>    
                    </v-row>


                </v-layout>
            </v-card> </a>
        </v-container>

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

  @import  "../styles/text.scss";


</style>
