<!-- 组件说明 -->
<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :selectAll="selectAll" :deleteCompletedTodo="deleteCompletedTodo"/>
    </div>
  </div>
</div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      // 从localStorage 读取 todos,需要解析,注意空值
      // 查询：浏览器，Apllication，Storage，Local Storage
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 全选 / 全不选
    selectAll (isSelectAll) {
      // 使用遍历
      this.todos.forEach(todo => {
        todo.complete = isSelectAll
      })
    },
    // 删除已完成的任务
    deleteCompletedTodo () {
      if (window.confirm('确定清除已完成的吗?')) {
        // 使用过滤器
        this.todos = this.todos.filter(todo => !todo.complete)
      }
    }
  },
  watch: { // 深度监视
    todos: {
      deep: true,
      handler: function (newValue, oldValue) {
        // 注意获取时，是JSON字符串，所以放入也要将数据转换成JSON字符串
        window.localStorage.setItem('todos_key', JSON.stringify(newValue))
      }
    }
  }
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
