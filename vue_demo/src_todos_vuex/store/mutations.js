/**
 * 由action的commit触发，直接操作state数据的对象方法
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_COMPLETED_TODO} from './mutation-types'

export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL] (state, {isCheck}) {
    state.todos.forEach(todo => (todo.complete = isCheck))
  },
  [DELETE_COMPLETED_TODO] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  }
}
