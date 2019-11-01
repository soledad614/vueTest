// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './base.css'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  render: h => h(App),
  store
})
// new Vue({
//   el: '#app',
//   components: { App },
//   render:function (createElement) {
//     return createElement(App) // <App/>
//   },
//   store
// })
//
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
//   store
// })
