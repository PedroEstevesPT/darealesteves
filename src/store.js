import { createStore } from 'vuex'


const store = createStore({
  state: {
    lang: 'pt',
    loggedIn: false
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
    }
  },

  actions: { 

  }

})
export default store;
