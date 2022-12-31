<template>
  <v-container >


    <v-layout class="section-margin-top"  >
      <v-row class="text-center pe-text " align="center" > 


          <!-- cols e importante para garantir que cada desenho aparece numa linha diferente" -->
          <v-col cols="4" xs="4" sm="4" md="4" lg="4" xl="4" v-for="(item,i) in photos" :key="i">



            <!-- GRID ITEM-->
            <div style="background-color:green; color:green;">
              <v-img  :src="photos[i].img_url" @click="openPopUp(item)" @click.native.stop="dialog = true"  /> 
            </div>



            <v-dialog  v-model="dialog" width="80%" >

              <!-- ARROWS -->
              <v-row class="text-center column wrap fill-height" >

                  <v-col cols="6" lg="6" xl="6" sm="1" xs="1"  align="right"  >
                    <v-btn elevation="0"  icon   @click="moveImg('left')">
                      <svg-icon color="blue" type="mdi"  :path="mdiArrowLeft"  :size="48"></svg-icon>
                    </v-btn>
                  </v-col>


                  <v-col cols="6" lg="6" xl="6" sm="1" xs="1" align="left" >
                    <v-btn elevation="0" class="mx-4 white--text app-blue" icon  @click="moveImg('right')">
                      <svg-icon color="blue" type="mdi"  :path="mdiArrowRight"      :size="48"></svg-icon>
                    </v-btn>                                                      
                  </v-col>
              
              </v-row>               

              <!-- POPUP dialog-->
              <v-card>
                <v-row>

                  <!-- IMG 
                    padding-bottom: 0 -> needed for the image to occupy all width
                    cover             -> needed for the image to take all the width
                  -->
                  <v-col  xl="9" lg="9"  style="padding-bottom: 0%;">
                    <v-img cover :src="this.selected_image"  @click.native.stop="dialog = true"  /> 
                  </v-col>
                  
                  <!-- DESCRIPTION -->
                  <v-col cols="12" xl="3" lg="3">
                    <v-card-title class="headline"> Passeio Marítimo de Algés</v-card-title>
                    <v-card-text > {{this.selected_text}} </v-card-text>
            
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">
                        <div v-if="this.$store.state.lang=='en'">Close </div> 
                        <div v-else> Fechar </div>
                      </v-btn>
                    </v-card-actions>
                  </v-col>

                </v-row>
              </v-card> 

            </v-dialog>  



          </v-col>
      </v-row>
    </v-layout> 



  </v-container>
</template>



<script>
import { mdiArrowLeft, mdiArrowRight}  from '@mdi/js';



export default {
  name: 'Gastronomy',
  setup() {
    return {
      mdiArrowLeft,
      mdiArrowRight
    }
  },
  methods: {

    openPopUp(item){
      this.selected_image = item["img_url"];
      this.selected_text = item["text"];
    },

    moveImg(direction){

      if (direction == "right" && this.img_index < this.photos.length - 1){
        this.img_index += 1;
      }
      else if (direction == "left" && this.img_index > 0){
        this.img_index -= 1;
      }

      console.log("direction", direction);
      console.log(this.img_index);
      this.selected_image = this.photos[this.img_index]["img_url"];
      this.selected_text = this.photos[this.img_index]["text"];

    }


  },
  computed: { 
  },
  data: () => ({
    img_index: 0,
    dialog: false,
    selected_image: null,
    selected_text: null,
    photos:  [
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672001555/pedrofortunatoesteves-site/blog/cinema/fassbinder/0_vu7vyl.jpg",
        "text": "imagem 1"
      },
      {
        "img_url": "https://images.unsplash.com/photo-1581281863883-2469417a1668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYXxlbnwwfHwwfHw%3D&w=1000&q=80",
        "text": "imagem 2"
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672001555/pedrofortunatoesteves-site/blog/cinema/fassbinder/0_vu7vyl.jpg",
        "text": "imagem 3"
      },
      {
        "img_url": "https://res.cloudinary.com/dho8ay2wz/image/upload/v1672001555/pedrofortunatoesteves-site/blog/cinema/fassbinder/0_vu7vyl.jpg",
        "text": " imagem 4"
      }
    ],
    img_width: '25%'
  }),
}
</script>

<style lang="scss" scoped>
@import  "../styles/images.scss";
@import  "../styles/text.scss";


</style>