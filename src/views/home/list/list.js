require('swiper/dist/css/swiper.css')
import Vue from 'vue'
import App from './listApp'

new Vue({
  render: h => h(App)
}).$mount('#app')

// Vue.prototype.HOST = '/api'