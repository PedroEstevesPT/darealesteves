import { createStore } from 'vuex'


const store = createStore({
  state: {
    lang: 'en',
    bodyHeight: 100
  },
  
  getters: {
    user(){
      return this.state.user;
    }
  },

  mutations: { // must be synchronous
    updateLang: (state, lang) => {
      state.lang = lang
    },
    bodyHeight: (state, bodyHeight) => {
      state.bodyHeight = bodyHeight
    }
  },

  actions: { 

  }

})
export default store;
