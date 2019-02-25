// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

// 路由判断
router.beforeEach((to, from, next) => {
  if (to.path == '/login' || to.path == '/' || to.path == '/register' || /* eslint-disable-line */
      to.path == '/findpwd' || to.path == '/trade' || to.path == '/article' || /* eslint-disable-line */
      to.path == '/mail' || to.path == '/fmail') { /* eslint-disable-line */
    next()
  } else {
    if (!store.state.login) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
})
