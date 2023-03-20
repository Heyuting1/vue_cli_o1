/*
 * @Author: heyuting009
 * @Date: 2023-03-20 11:31:11
 * @LastEditTime: 2023-03-20 11:32:00
 * @LastEditors: heyuting009
 * @Description: 文件描述
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// test

