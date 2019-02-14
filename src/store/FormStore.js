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
    },
    address: function (state, payload) {
      state.address = payload
    },
    cp: function (state, payload) {
      state.cp = payload
    },
    company: function (state, payload) {
      state.company = payload
    },
    function: function (state, payload) {
      state.function = payload
    }
  },
  getters: {
  },
  actions: {
  }
})
