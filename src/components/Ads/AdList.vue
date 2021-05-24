<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 offset-sm3 sm6>
        <h1 class="text--secondary mt-4 ml-12">My ads</h1>
        <v-card class="mt-4 mx-auto" 
          v-for="(ad, i) in ads"
          :key="i"
          width="800px" 
          height="200px" 
          elevation="10">
          <v-layout class="pa-2" fill-height>
            <v-row dense>
              <v-col class="ov">
                <v-img class="img"
                  :src="ad.imageSrc">
                </v-img>
              </v-col>
              <v-col>
                <v-card-title>
                  {{ad.title}}
                </v-card-title>
                <v-card-text>
                  {{ad.description}}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: '1 ad', 
          description: 'Description', 
          promo: false, 
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', 
          id: 1
        },
        {
          title: '2 ad', 
          description: 'Description', 
          promo: true, 
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', 
          id: 2
        },
        {
          title: '3 ad', 
          description: 'Description', 
          promo: true, 
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', 
          id: 3
        },
        {
          title: '4 ad', 
          description: 'Description', 
          promo: false, 
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', 
          id: 4
        },
        {
          title: '5 ad', 
          description: 'Description', 
          promo: false, 
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', 
          id: 5
        },
        {
          title: '6 ad', 
          description: 'Description', 
          promo: false, 
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', 
          id: 6
        }
      ],
    }
  }
}
</script>

<style scoped>
  .ov {
    overflow: hidden;
    max-width: 300px;
  }
  .img {
    height: 100%;
    width: auto;
  }
</style>