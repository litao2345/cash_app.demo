import Vue from 'vue'

import Vuex from 'vuex'
import VueResouse from 'vue-resource'
// import VueSocketIo from 'vue-socket.io'
import VueLazyLoad from 'vue-lazyload'
import ProgresSive from 'progressive-image/dist/vue'
import Element from 'element-ui'

import FastClick from 'fastclick'

import App from './App'
import store from './store/index'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(VueResouse)
// Vue.use(VueSocketIo, '/')
Vue.use(VueLazyLoad)
Vue.use(ProgresSive, {removePreview: true, scale: true})
Vue.use(Element)

FastClick.attach(document.body)

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('log')
  }

  const $log = JSON.parse(sessionStorage.getItem('log'))
  if (!$log && to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }
})

/*
 eslint-disable no-new
 */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
