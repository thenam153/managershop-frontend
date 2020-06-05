import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: true, // flase
    id: -1
  },
  mutations: {
    acceptLogin(state) {
      state.login = true
    },
    rejectLogin(state) {
      state.login = false
    },
    setId(state, id) {
      state.id = id;
    }
  },
  actions: {
    rejectLogin(context) {
      axios({
        method: "POST",
        url: "http://localhost:1503/dangxuat",
      })
      .then(res => {
        context.commit("rejectLogin")
      })
    }
  },
  modules: {
  }
})
