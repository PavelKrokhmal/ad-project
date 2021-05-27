<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="blue"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Buy
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h1 class="headline">Do you want to buy it? </h1>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="name"
                  type="text"
                  label="Your name"
                  required>
                </v-text-field>

              </v-col>
              
              <v-col
                cols="12"
              >
               <v-text-field
                  v-model="phone"
                  type="text"
                  label="Your phone"
                  required>
                </v-text-field>

              </v-col>

            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            :disabled="localLoading"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue"
            text
            :loading="localLoading"
            :disabled="localLoading"
            @click="onBuy"
          >
            Buy it!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      dialog: false,
      name: '',
      phone: '',
      localLoading: false    
    }
  },
  methods: {
    onBuy () {
      if(this.name.trim() && this.phone.trim()) {
        this.localLoading = true  
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId
        })
        .finally(() => {
          this.name = '',
          this.phone = ''
          this.localLoading = false
          this.dialog = false
        })
      }
    }
  },
  watch: {
    dialog: function (val) {
      if (!val) {
        this.name = '',
        this.phone = ''  
      }
    },
  }
}
</script>

<style>

</style>