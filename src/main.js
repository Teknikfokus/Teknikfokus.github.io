import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParallaxJs from 'vue-parallax-js'
import store from './store/store'

Vue.use(VueParallaxJs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
