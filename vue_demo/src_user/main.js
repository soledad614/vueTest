import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueResource) // 内部或给vm对象和组件对象添加一个属性：$http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
