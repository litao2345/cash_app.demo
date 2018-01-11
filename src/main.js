import Vue from 'vue'

import Vuex from 'vuex'
import VueResouse from 'vue-resource'
// import VueSocketio from 'vue-socket.io'
import Element from 'element-ui'

import FastClick from 'fastclick'

import App from './App'
import store from './store/index'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(VueResouse)
// Vue.use(VueSocketio, '/')
Vue.use(Element)

FastClick.attach(document.body)

// router.beforeEach((to, from, next) => {
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
