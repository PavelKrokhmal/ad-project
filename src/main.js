import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import firebase from 'firebase'

import BuyModalComponent  from './components/Shared/BuyModal.vue'

Vue.config.productionTip = false

Vue.component('app-buy-modal', BuyModalComponent)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    const firebaseConfig = {
      apiKey: "AIzaSyC7x4h0EgxbvdZKBmzKWfWylLUu7UfSPos",
      authDomain: "itc-ads-bb239.firebaseapp.com",
      databaseURL: "https://itc-ads-bb239-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "itc-ads-bb239",
      storageBucket: "itc-ads-bb239.appspot.com",
      messagingSenderId: "691989586641",
      appId: "1:691989586641:web:1345622c20c67a0a625bf0"
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
