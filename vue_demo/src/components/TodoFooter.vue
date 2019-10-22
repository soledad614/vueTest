<!-- 组件说明 -->
<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="checkAll"/>
        </label>
        <span>
          <span>已完成{{isCompeleteSize}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="deleteCompletedTodo">清除已完成任务</button>
      </div>
</template>

<script>
// import x from ''
export default {
  props: {
    todos: Array,
    selectAll: Function,
    deleteCompletedTodo: Function
  },
  computed: {
    isCompeleteSize () {
      // 使用reduce函数循环计算
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    checkAll: {
      get () {
        return this.isCompeleteSize === this.todos.length && this.isCompeleteSize
      },
      set (value) {
        this.selectAll(value)
      }
    }
  }
}
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
