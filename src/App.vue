<template>
  <v-app>
    <v-navigation-drawer app temporary>
    <!-- -->
    </v-navigation-drawer>

    <v-app-bar absolute dark color="orange darken-1">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Ad application</v-toolbar-title>
      <v-spacer></v-spacer>
  
      <v-toolbar-items>
        <v-btn text>One link</v-btn>
        <v-btn text>Two link</v-btn>
        <v-btn text>Third link</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
