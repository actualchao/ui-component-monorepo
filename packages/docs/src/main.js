/*
 * @Author: cgone
 * @Date: 2020-11-29 17:05:53
 * @Last Modified by: cgone
 * @Last Modified time: 2021-01-10 15:27:39
 */
import Vue from 'vue'
import App from './app.vue'

import demoBlock from './components/demo-block'

import './demo-styles/index.scss'
import './assets/styles/common.css'
import './assets/styles/fonts/style.css'
import '@cgone/theme'

import VueRouter from 'vue-router'
import elementUI from 'element-ui'

import { CoImg } from '@cgone/components'

console.log(CoImg)

Vue.config.productionTip = false

Vue.component('demo-block', demoBlock)
Vue.use(CoImg)

Vue.use(VueRouter)
Vue.use(elementUI)

const routes = [
  { path: '/', component: () => import('./upload.md') }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
