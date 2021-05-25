export default {
  state: {
    ads: [
      {
        title: '1 ad', 
        description: 'Description', 
        promo: false, 
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', 
        id: 1
      },
      {
        title: '2 ad', 
        description: 'Description', 
        promo: true, 
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', 
        id: 2
      },
      {
        title: '3 ad', 
        description: 'Description', 
        promo: true, 
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', 
        id: 3
      },
      {
        title: '4 ad', 
        description: 'Description', 
        promo: false, 
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', 
        id: 4
      },
      {
        title: '5 ad', 
        description: 'Description', 
        promo: false, 
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', 
        id: 5
      },
      {
        title: '6 ad', 
        description: 'Description', 
        promo: false, 
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', 
        id: 6
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      commit('createAd', {...payload, id: Math.random()})
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}