import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 包含需要共享的数据
 */
const state = {
  count: 0
}
/**
 * 直接更新state数据的方法
 */
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}
/**
 * 间接更新state数据的方法，由view的方法commit触发调用
 */
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  // 带条件的action
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  // 异步action
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    })
  }
}
/**
 * 包含计算属性
 */
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
