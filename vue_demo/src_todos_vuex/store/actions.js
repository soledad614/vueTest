/**
 * 组件触发，间接操作state数据的方法对象
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL, DELETE_COMPLETED_TODO} from './mutation-types'

export default{
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo}) // 传递给mutation的是一个包含数据的对象
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  selectAll ({commit}, isCheck) {
    commit(SELECT_ALL, {isCheck})
  },
  deleteCompletedTodo ({commit}) {
    commit(DELETE_COMPLETED_TODO)
  }
}
