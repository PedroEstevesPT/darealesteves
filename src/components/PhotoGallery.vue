    <template>

 <v-container >


    <v-layout  class="photoGallery" >
      <v-row  align="center" > 


          <!-- cols e importante para garantir que cada desenho aparece numa linha diferente" -->
          <v-col  cols="12" xs="5" sm="5" md="4" lg="4" xl="4" v-for="(item,i) in Gallery" :key="i" >


            <!-- GRID ITEM
             cover -> is needed to occupy the image on all width
            -->
            <div>
              <v-img cover class="gridImg" 

                  :style="loading"
                  @mouseenter="Gallery[i].showImg = true" 
                  @mouseleave="Gallery[i].showImg = false" 
                  :src="Gallery[i].img_url" 
                  @click="changePopUp(item)" 
                  @click.native.stop="dialog = true"
               >
              
                <div v-if="Gallery[i].showImg" class="hidden-sm-and-down gridImgBackground">
                  <p class="gridImgText pe-text"> 
                  {{Gallery[i].description[[this.$store.state.lang]]}}
                  </p>
                </div>
              </v-img> 
            </div>
          </v-col>


            <v-dialog  v-model="dialog"  class="popupDialog"  >

              <!-- ARROWS -->
              <v-row class="text-center column wrap fill-height" >
                  <v-col cols="6" lg="6" xl="6" sm="1" xs="1"  align="right"  >
                    <v-btn elevation="0"  icon   @click="moveImg('left')">
                      <svg-icon color="blue" type="mdi"  :path="mdiArrowLeft"  :size="48" />
                    </v-btn>
                  </v-col>


                  <v-col cols="6" lg="6" xl="6" sm="1" xs="1" align="left" >
                    <v-btn elevation="0" class="mx-4 white--text app-blue" icon  @click="moveImg('right')">
                      <svg-icon color="blue" type="mdi"  :path="mdiArrowRight"      :size="48" />
                    </v-btn>                                                      
                  </v-col>
              </v-row>               

              <!-- POPUP dialog-->
              <v-card >
                <v-row>

                  <!-- IMG 
                    padding-bottom: 0 -> needed for the image to occupy all width
                    cover             -> needed for the image to take all the width
                  -->
                  <v-col cols="12" xl="9" lg="9" md="9" sm="12" xs="12" class="popupImg">
                    <v-img cover :src="this.selected_image"  @click.native.stop="dialog = true"  /> 
                  </v-col>
                  
                  <!-- DESCRIPTION -->
                  <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12">
                    <v-card-title class="headline"> {{this.selected_title}}</v-card-title>
                    <v-card-text > {{this.selected_description}} </v-card-text>
            
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" flat="flat" @click.native="dialog = false">
                        <div v-if="this.$store.state.lang=='en'">Close </div> 
                        <div v-else> Fechar </div>
                      </v-btn>
                    </v-card-actions>
                  </v-col>

                </v-row>
              </v-card> 

            </v-dialog>  



      </v-row>
    </v-layout> 



  </v-container>
    </template>

<script>

import loadingGif  from '../assets/loading/loading.gif';


import { mdiArrowLeft, mdiArrowRight}  from '@mdi/js';

  export default {
    name: 'PhotoGallery',
    setup() {
      return {
        mdiArrowLeft,
        mdiArrowRight
      }
    },
    props: ["Gallery"],
    data() {
      return {
        loadingGif,
        dialog: false,
        img_index: 0,
        selected_image: null,
        selected_title: null,
        selected_description: null,
        img_width: '25%',
        showText: false,
        loading: { background: "url(" + loadingGif + ") center" , 'background-size' : 'cover' },
      };
    },
    methods: {

      changePopUp(item){
        this.selected_image = item["img_url"];
        this.selected_title = item["title"][this.$store.state.lang];
        this.selected_description  = item["description"][this.$store.state.lang];
      },

      moveImg(direction){

        if (direction == "right" && this.img_index < this.Gallery.length - 1){
          this.img_index += 1;
        }
        else if (direction == "left" && this.img_index > 0){
          this.img_index -= 1;
        }

        this.changePopUp(this.Gallery[this.img_index]);
      }
    }
  };
  </script>

<style lang="scss" scoped>
  @import  "../styles/text.scss";



.gridImg{
  max-height: 500px;
  max-width: 500px;
  background: cover;
}

.gridImg:hover{
  border: solid 5px blue;
}

.gridImgBackground{
  background-color:black ; 
  opacity:80% ;
}

.gridImgText {
    color:white; 
    opacity:100%;
}

.popupImg {
  padding-bottom: 0%;
}

.popupDialog{
  width:80%;
}


.photoGallery{
  margin: 0 auto;
  width:80%;
}

//mobile
@media screen and (max-width: 640px) {
    
    .gridImg{
      height: 100%;
      width: 100%;
    }

    .gridImg:hover{
    }
    
    .photoGallery {
      margin: 0 auto;
      width:100%;
    }
}


</style>
