import Vue from 'vue'
import VueAb from '../src/index.js'

import App from '../example-src/App.vue'

Vue.use(VueAb)

new Vue({
    el: '#app',
    render: h => h(App)
})
