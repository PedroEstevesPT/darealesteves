    <template>
  
      <!-- CARD -->
      <v-card :href="NewsItem.url" class="mx-auto" style="border-radius:5%;" max-width="344">
        <v-img :src="NewsItem.img_url"  height=200px></v-img>
        <v-card-title primary-title>
            <h3  style="color:#368943; font-weight:bold;"> {{NewsItem.name}}</h3><br>
            <div style="text-align:left;" >{{NewsItem.description["en"]}}</div>
        </v-card-title>
      </v-card> 

      <!-- DIALOG -->
      <v-dialog v-model="dialog" scrollable max-width="80%">
        <v-card>
          <v-card-title>{{ title }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text height="200px">{{ content }}</v-card-text>
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
