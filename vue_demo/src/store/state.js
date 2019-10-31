/**
 * vuex管理的共享对象
 */
import storageUtil from '../utils/storageUtil'

export default{
  todos: storageUtil.readTodos()
}
