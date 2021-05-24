<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mt-4">Create new add</h1>
          <v-form
              ref="form"
              v-model="valid"
              validation>
            <v-text-field
              v-model="title"
              type="text"
              :rules="[v=> !!v || 'Title is required']"
              label="Ad title"
              required>
            </v-text-field>

            <v-textarea
              v-model="description"
              :rules="[v=> !!v || 'Description is required']"
              required
              label="Description"
            ></v-textarea>

          </v-form>
          <v-layout row class="mt-4">
            <v-flex xs12>
              <v-col cols="6">
                <v-card outlined>
                  <v-card-title>
                    Ad preview
                  </v-card-title>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                    height="200"
                    class="grey darken-4"
                  ></v-img>
                  <v-card-actions class="title">
                    <v-btn
                      color="orange"
                      class="white--text">
                      Upload
                      <v-icon right dark> mdi-cloud-upload </v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12>
               <v-switch
                v-model="promo"
                label="Add to promo?"
               ></v-switch>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12>
              <v-spacer></v-spacer>
              <v-btn class="success" @click="createAd" :disabled="!valid">Create ad</v-btn>
            </v-flex>
          </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      valid: false,
      promo: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }

        console.log(ad)
      }
    }
  }
}
</script>

<style scoped>

</style>