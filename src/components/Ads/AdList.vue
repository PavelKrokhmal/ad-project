<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 offset-sm3 sm6>
        <h1 class="text--secondary mt-4 ml-12">My ads</h1>
        <v-card class="mt-4 mx-auto" 
          v-for="(ad, i) in myAds"
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
  computed: {
    myAds () {
      return this.$store.getters.myAds
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