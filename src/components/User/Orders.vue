<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary ml-4 mt-4">Orders</h1>
        <v-list
          subheader
          two-line
          flat>
            <v-list-item-group
              v-model="settings"
              multiple>

              <v-list-item v-for="(order, index) in orders" :key="index">
                <template >
                  <v-list-item-action>
                    <v-checkbox @change="markDone(order)" :input-value="order.done"
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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [{
        id: 1,
        name: 'Pavel Krokhmal',
        phone: '099-99-99-99',
        adId: 1,
        done: false
      },
      {
        id: 2,
        name: 'Pavel Krokhmal',
        phone: '099-99-99-99',
        adId: 2,
        done: true
      },
      {
        id: 3,
        name: 'Pavel Krokhmal',
        phone: '099-99-99-99',
        adId: 3,
        done: false
      }
      ]
    }
  },
  methods: {
    markDone(order) {
      order.done = true
    }
  }
}
</script>

<style scoped>

</style>