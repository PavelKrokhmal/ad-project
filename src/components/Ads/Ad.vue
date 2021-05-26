<template>
  <v-container>
    <v-layout row class="mt-4">
      <v-flex xs12 offset-sm3>
        <v-card width="800px">
          <v-card-title>
              <v-img class="img"
                :src="ad.imageSrc"
                height="300px">
              </v-img>
          </v-card-title>
          <v-card-text>
            <h1 class="text--primary">{{ad.title}}</h1>
            <p class="mt-4">{{ad.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark text class="orange">Edit</v-btn>
            <v-btn dark class="green">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  }
}
</script>

<style scoped>

</style>