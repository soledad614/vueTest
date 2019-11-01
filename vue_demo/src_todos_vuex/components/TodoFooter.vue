<!-- 组件说明 -->
<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="isAllCheck"/>
          <!-- <slot name="checkAll"></slot> -->
        </label>
        <span>
          <span>已完成{{compeleteSize}}</span> / 全部{{totalSize}}
        </span>
        <!-- <slot name="count"></slot> -->
        <button class="btn btn-danger" @click="deleteCompletedTodo">清除已完成任务</button>
        <!-- <slot name="action"></slot> -->
      </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['totalSize', 'compeleteSize']),
    isAllCheck: {
      get () {
        return this.compeleteSize === this.totalSize && this.totalSize
      },
      set (value) {
        // this.selectAll(value)
        this.$store.dispatch('selectAll', value)
      }
    }
  },
  methods: {
    deleteCompletedTodo () {
      this.$store.dispatch('deleteCompletedTodo')
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
