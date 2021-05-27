<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 v-if="!loading && orders.length !== 0">
        <h1 class="text--secondary ml-4 mt-4">Orders</h1>
        <v-list
          subheader
          two-line
          flat>
            <v-list-item-group
              multiple>

              <v-list-item v-for="(order, index) in orders" :key="index">
                <template >
                  <v-list-item-action>
                    <v-checkbox @change="markDone(order)" v-model="order.done"
                      color="success"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{order.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn class="orange" dark :to="'/ad/' + order.adId">Open</v-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length === 0">
        <h1 class="text--secondary mt-4">Orders list is empty...</h1>
      </v-flex>
       <v-flex xs12 sm6 offset-sm3 v-else>
        <v-progress-circular
            :size="100"
            :width="7"
            color="gray"
            indeterminate
        ></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    markDone(order) {
      this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },
  created () {
    this.$store.dispatch('fetchOrders')
  }
}
</script>

<style scoped>

</style>