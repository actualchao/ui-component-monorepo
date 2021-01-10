import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { CoImg } from '@wujc/components'

Vue.config.productionTip = false

console.log(CoImg)

Vue.use(CoImg)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
