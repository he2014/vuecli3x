import Vue from 'vue'
import App from './App.vue'
//添加
import '@babel/polyfill'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')