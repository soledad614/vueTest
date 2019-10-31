import Vue from 'vue'
import App from './App'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store // 使得所有组件均有一个store对象
})
