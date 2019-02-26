import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Mail from '@/components/register/Mail'
import Phone from '@/components/register/Phone'
import Findpwd from '@/components/findpwd/Findpwd'
import FPhone from '@/components/findpwd/Phone'
import FMail from '@/components/findpwd/Mail'
import Trade from '@/components/trade/Index'
import Otc from '@/components/otc/Index'
import Article from '@/components/article/Index'
import Mine from '@/components/mine/Index'
import Invite from '@/components/invite/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register,
      children: [{
        path: '/',
        name: 'Phone',
        component: Phone
      }, {
        path: '/mail',
        name: 'Mail',
        component: Mail
      }
      ]
    }, {
      path: '/findpwd',
      name: 'Findpwd',
      component: Findpwd,
      children: [{
        path: '/',
        name: 'FPhone',
        component: FPhone
      }, {
        path: '/fmail',
        name: 'FMail',
        component: FMail
      }
      ]
    }, {
      path: '/trade',
      name: 'Trade',
      component: Trade
    }, {
      path: '/otc',
      name: 'Otc',
      component: Otc,
      meta: { auth: true }
    }, {
      path: '/article',
      name: 'Article',
      component: Article
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: { auth: true }
    }, {
      path: '/invite',
      name: 'Invite',
      component: Invite,
      meta: { auth: true }
    }
  ]
})
