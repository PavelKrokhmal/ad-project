<template>
  <v-container>
    <v-layout row v-if="!loading && myAds.length !== 0">
      <v-flex xs12 offset-sm3 sm6>
        <h1 class="text--secondary mt-4 ml-12">My ads</h1>
        <v-card class="mt-4 mx-auto" 
          v-for="(ad, i) in myAds"
          :key="i"
          width="800px" 
          height="200px" 
          elevation="10">
          <v-layout class="pa-2">
            <v-row style="height: 200px; overflow: hidden;">
              <v-col>
                <div class="exmpl" >
                  <v-img
                   :src="ad.imageSrc">
                  </v-img>
                </div>
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
    <v-layout v-else-if="!loading && myAds.length === 0">
      <v-flex xs12 offset-sm3 sm6>
        <h1 class="text--secondary">You have no ads</h1>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex xs12 class="text--center">
         <v-progress-circular
            :size="100"
            :width="7"
            color="orange"
            indeterminate
          ></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .exmpl {
    /* height: 180px; */
    max-width: 300px;
  }

</style>