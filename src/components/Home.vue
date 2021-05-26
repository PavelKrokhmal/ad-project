<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-carousel>
        <v-carousel-item
          v-for="(ad,i) in promoAds"
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
    <v-container fluid>
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
  <div v-else>
    <v-container fluid>
      <v-layout row fill-height class="mt-4">
        <v-flex xs12 class="text-center">
          <v-progress-circular
            :size="100"
            :width="7"
            color="orange"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
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