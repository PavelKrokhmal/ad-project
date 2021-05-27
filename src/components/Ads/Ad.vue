<template>
  <v-container>
    <v-layout row class="mt-4">
      <v-flex xs12 offset-sm3>
        <v-card width="800px" v-if="!loading">
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
            <app-edit-ad-modal :ad="ad" v-if="isOwner"/>
            <div class="ml-2">
              <app-buy-modal :ad="ad"></app-buy-modal>
            </div>
          </v-card-actions>
        </v-card>
        <div v-else class="text-xs-center mt-4">
          <v-progress-circular
            :size="100"
            :width="7"
            color="gray"
            indeterminate
        ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    loading () {
      return this.$store.loading
    },
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  },
  components: {appEditAdModal: EditAdModal}
}
</script>

<style scoped>

</style>