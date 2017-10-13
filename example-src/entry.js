import Vue from 'vue'
import VueRouter from 'vue-router'
import vAb from 'vue-ab'

import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)
Vue.component('v-ab', vAb);

const router = new VueRouter({
  mode: 'hash',
  routes,
})

router.afterEach(function (to) {
  setTimeout(function() {
    gtag('config', 'UA-35736735-1', {'page_path': '/vue-ab' + to.fullPath})
  }, 0)
})

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
