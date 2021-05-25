<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card elevation="10">
          <v-toolbar dark color="green">
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              class="pa-4"
              v-model="valid"
              validation>
                <v-text-field
                  v-model="email"
                  type="email"
                  prepend-icon="mdi-email"
                  :rules="emailRules"
                  label="Email"
                  required>
                </v-text-field>

                <v-text-field
                  v-model="password"
                  prepend-icon="mdi-lock"
                  :rules="passwordRules"
                  type="password"
                  label="Password"
                  required>
                </v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  prepend-icon="mdi-lock"
                  :rules="confirmPasswordRules"
                  type="password"
                  label="Confirm password"
                  required>
                </v-text-field>

                <div class="mt-4 d-flex justify-end">
                  <v-btn
                    color="green"
                    :dark="!loading && valid"
                    :disabled="!valid || loading"
                    :loading="loading"
                    @click="onSubmit">
                    Create account
                  </v-btn>
                </div>
            </v-form>
          </v-card-text>
        </v-card>
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
      email: '',
      emailRules: [
        e => !!e || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        p => !!p || 'Password is required',
        p => (p && p.length >= 6) || 'Password must be equal or more than 6 characters'
      ],
      valid: false,
      confirmPassword: '',
      confirmPasswordRules: [
        p => !!p || 'Password is required',
        p => p === this.password || 'Passwords should match'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
        .then(() => {
          this.$router.push('/')
        })
        // .catch(err => console.log(err))
      }
    }
  }
}
</script>

<style scoped>

</style>