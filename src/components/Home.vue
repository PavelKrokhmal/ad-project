<template>
 

  <div>
    <v-container fluid>
      <v-carousel>
        <v-carousel-item
          v-for="(ad,i) in ads"
          :key="i"
          :src="ad.imageSrc"
          reverse-transition="fade-transition"
          transition="fade-transition">
          <div class="carousel-link">
            <v-btn class="error" :to="'/ad/' + ad.id">
              {{ad.title}}
            </v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>

  <v-container fluid >
      <v-layout row>
        <v-row class="d-flex justify-center">
          <v-col v-for="(ad,i) in ads" :key="i" cols="auto">
            <v-card
              max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="ad.imageSrc">
              </v-img>
                <v-card-title>{{ad.title}}</v-card-title>
              <v-card-text class="text--primary">
                <div>{{ad.description}}</div>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn text :to="'/ad/' + ad.id">
                  Open
                </v-btn>
                <v-btn text class="primary">
                  Buy
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>

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
  .carousel-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .4);
    transform: translate(-50%, 0);
    padding: 10px 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>