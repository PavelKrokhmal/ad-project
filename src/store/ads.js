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
    },
    updateAd(state, {title, description, id}) {
      const ad = state.ads.find(a => a.id === id)
      ad.title = title
      ad.description = description
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      // commit('createAd', {...payload, id: Math.random()})
      commit('clearError')
      commit('setLoading', true)

      const image = payload.image

      try {
        const newAd = new Ad(payload.title, 
          payload.description, 
          getters.user.id, 
          '', 
          payload.promo)

        const fbValue = await firebase.database().ref('ads').push(newAd)

        const imageExt = image.type.split('/').pop()
        const fileData = await firebase.storage().ref(`ads/${fbValue.key}.${imageExt}`).put(image)

        const imageSrc = await fileData.ref.getDownloadURL()

        await firebase.database().ref('ads').child(fbValue.key).update({
          imageSrc
        })
        
        commit('createAd', {...newAd, id: fbValue.key, imageSrc })
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

        const ads = fbValue.val() || []
        
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
    },
    async updateAd ({commit}, {title, description, id}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        await firebase.database().ref('ads').child(id).update({
          title, description
        })
        
        commit('updateAd',  {title, description, id})
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
    myAds (state, getters) {
      return state.ads.filter(ad => {
        return ad.ownerId === getters.user.id
      })
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}