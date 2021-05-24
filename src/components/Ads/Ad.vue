<template>
  <v-container>
    <v-layout row class="mt-4">
      <v-flex xs12 offset-sm3>
        <v-card width="800px">
          <v-card-title>
              <v-img class="img"
                :src="'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'"
                height="300px">
              </v-img>
          </v-card-title>
          <v-card-text>
            <h1 class="text--primary">lorem</h1>
            <p class="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laborum. Nam, perferendis. Praesentium mollitia laboriosam ab a similique facilis ut.</p>
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
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>