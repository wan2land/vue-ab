import Vue from 'vue'
import VueAb from 'vue-ab'

import App from '../example-src/App.vue'

// example using from global! :-)
// Vue.use(VueAb)

new Vue({
    el: '#app',
    render: h => h(App)
})
