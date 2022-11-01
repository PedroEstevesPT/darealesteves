//import Vue from 'vue'
import Vuex from 'vuex'

//Vue.use(Vuex)

export default new Vuex.Store({
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
    /*
    setQuote: async (context) => {
        await $backend.fetchQuote().then(response => {
          context.commit('SetQuotes', response.data);
          return response.data;
        }).catch(error => context.commit('SetError', error))
    }
    */
  }

})
