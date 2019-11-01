<!-- 组件说明 -->
<template>
    <ul class="todo-main">
        <TodoItem v-for="(todo,index) in todos" :key="index"  :todo="todo" :index="index" />
    </ul>
</template>

<script>
import TodoItem from './TodoItem'
import {mapState} from 'vuex'
import storageUtil from '../utils/storageUtil'

export default {
  computed: {
    ...mapState(['todos'])
  },
  components: {
    TodoItem
  },
  watch: {
    todos: {
      deep: true, // 深度监听
      handler: storageUtil.saveTodos
    }
  }
}
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
