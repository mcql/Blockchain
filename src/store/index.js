import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login: false,
  dialogtitle: '',
  dialogcontent: '',
  showdialog: false
}

const mutations = {
  login (state, status) {
    state.login = status
  },
  dialogtitle (state, status) {
    state.dialogtitle = status
  },
  dialogcontent (state, status) {
    state.dialogcontent = status
  },
  showdialog (state, status) {
    state.showdialog = status
  }
}

// const actions = {
//   LOGIN (context) {
//     context.commit('login')
//   }
// }

const store = new Vuex.Store({
  state,
  mutations
//   actions
})

export default store
