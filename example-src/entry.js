import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAb from 'vue-ab'

import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueAb)

const router = new VueRouter({
  mode: 'hash',
  routes,
})

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
