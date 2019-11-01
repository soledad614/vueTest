/**
 * 包含n个基于state的getter计算属性方法的对象模块
 */

export default {
  compeleteSize (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  },
  totalSize (state) {
    return state.todos.length
  }
}
