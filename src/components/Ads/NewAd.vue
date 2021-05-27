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
                    :src="imageSrc"
                    height="200"
                    class="grey darken-4"
                  ></v-img>
                  <v-card-actions class="title">
                    <v-btn
                      color="orange"
                      @click="triggerUpload"
                      class="white--text">
                      Upload
                      <v-icon right dark> mdi-cloud-upload </v-icon>
                    </v-btn>
                    <v-file-input
                      style="display: none;"
                      ref="fileInput"
                      accept="image/*"
                      label="File input"
                      @change="onFileChange"
                    ></v-file-input>
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
              <v-btn class="success" @click="createAd" :disabled="!valid || !image || loading" :loading="loading">Create ad</v-btn>
            </v-flex>
          </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  data () {
    return {
      title: '',
      description: '',
      valid: false,
      promo: false,
      imageSrc: '',
      image: null
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: this.imageSrc,
          image: this.image
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/adList')
          })
          .catch(() => {})

      }
    },
    triggerUpload () {
      // optimization fix
      const id = this.$refs.fileInput.$el.lastChild.firstChild.firstChild.lastChild.id;
      document.querySelector(`input#${id}`).click();
    },
    onFileChange (file) {
      const reader = new FileReader()
      reader.onload = () => {
        this.imageSrc = reader.result
      }

      reader.readAsDataURL(file)

      this.image = file
    }
  }
}
</script>

<style scoped>

</style>