import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login: false,
  dialogtitle: '',
  dialogcontent: '',
  showdialog: false,
  changestatus: {
    1: { // 修改昵称
      nickname: 'ming'
    },
    2: { // 修改登陆密码
      login_pwd: '123123123'
    },
    3: { // 实名认证
      shiming: false
    },
    4: { // 手机号
      mobile: {
        mobile_status: true,
        mobile_num: '187****5337'
      }
    },
    5: { // 邮箱
      mail: {
        mail_status: true,
        mail: '572***875@qq.com'
      }
    },
    6: { // 谷歌验证
      google: true
    }
  }
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
  },
  changestatus (state, status) {
    state.changestatus = status
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
