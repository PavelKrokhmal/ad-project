<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="orange"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h1 class="headline">Edit ad</h1>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="editedTitle"
                  type="text"
                  label="Title"
                  required>
                </v-text-field>

              </v-col>
              
              <v-col
                cols="12"
              >
                <v-textarea
                  v-model="editedDescription"
                  required
                  outlined
                  label="Description"
                ></v-textarea>

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
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue"
            text
            @click="onSave"
          >
            Save
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
      editedTitle: this.ad.title,
      editedDescription: this.ad.description    
    }
  },
  methods: {
    onSave () {
      if(!!this.editedTitle.trim() && !!this.editedDescription.trim()) {
        this.dialog = false

        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })
      }
    }
  },
  watch: {
    dialog: function (val) {
      if (val) {
        this.editedTitle = this.ad.title,
        this.editedDescription = this.ad.description  
      }
    },
  }
}
</script>

<style>

</style>