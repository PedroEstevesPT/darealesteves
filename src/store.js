import { createStore } from 'vuex'


const store = createStore({
  state: {
    lang: 'pt',
    bodyHeight: 100
  },
  
  getters: {
    user(){
      return this.state.user;
    }
  },

  mutations: { // must be synchronous
    updateLang: (state, lang) => {
      console.log("store: updated language");
      state.lang = lang
    },
    bodyHeight: (state, bodyHeight) => {
      console.log("store: updated body height");
      state.bodyHeight = bodyHeight
    }
  },

  actions: { 

  }

})
export default store;
