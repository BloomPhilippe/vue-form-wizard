import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: null,
    lastName: null,
    address: null,
    cp: null,
    company: null,
    function: null
  },
  mutations: {
    firstName: function (state, payload) {
      state.firstName = payload
    },
    lastName: function (state, payload) {
      state.lastName = payload
    }
  },
  getters: {
  },
  actions: {
  }
})
