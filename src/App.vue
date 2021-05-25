<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list
        dense
        nav>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar absolute dark color="blue darken-1" app>
      <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">
          Ad application
        </router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
  
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item in links" :key="item.title" :to="item.url">
          <v-icon left medium>
            {{ item.icon }}
          </v-icon>
            {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view ></router-view>
    </v-main>

    <v-snackbar
      :timeout="5000"
      color="red"
      :vertical="vertical"
      :value="!!error">
      {{ error }}
      <template v-slot:action="{ attrs }">
        <v-btn text @click="closeError" v-bind="attrs">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    snackbar: false,
    drawer: false,
    links: [
      { title: 'Login', icon: 'mdi-login', url: '/login'},
      { title: 'Registration', icon: 'mdi-face', url: '/registration'},
      { title: 'Orders', icon: 'mdi-book-account', url: '/orders'},
      { title: 'New ad', icon: 'mdi-book-plus', url: '/newAd'},
      { title: 'Ad list', icon: 'mdi-format-list-text', url: '/adList'},
    ],
  }),
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  }
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
