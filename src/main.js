import Vue from 'vue'
import App from './App.vue'
//添加
import '@babel/polyfill'
import router from './router'
import store from './stroe'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
document.addEventListener('visibilitychange', function () { //浏览器切换事件
  if (document.visibilityState == 'hidden') { //状态判断
    //normal_title=document.title;
    document.title = '标题二';
  } else {
    document.title = '标题一';
  }
});
