import firebase from 'firebase'

class Ad {
  constructor(title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

// {
//   title: '1 ad', 
//   description: 'Description', 
//   promo: false, 
//   imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', 
//   id: '1'
// },

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      // commit('createAd', {...payload, id: Math.random()})
      commit('clearError')
      commit('setLoading', true)

      try {
        const newAd = new Ad(payload.title, 
          payload.description, 
          getters.user.id, 
          payload.imageSrc, 
          payload.promo)
        const fbValue = await firebase.database().ref('ads').push(newAd)
        
        commit('createAd', {...newAd, id: fbValue.key})
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds ({commit}) {
      commit('clearError')
      commit('setLoading', true)

      const resultAds = []
      try {
        const fbValue = await firebase.database().ref('ads').once('value')

        const ads = fbValue.val()

        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key))
        })
        
        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
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