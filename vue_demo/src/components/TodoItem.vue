<!-- 组件说明 -->
<template>
    <li @mouseenter="handleEnter" @mouseleave="handelLeave" :style="{background: bgColor}">
        <!-- onmouseover="" 进入其内部会触发
        onmouseout=""  离开其内部元素会触发-->
        <label>
            <input type="checkbox" v-model="todo.complete"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deletItem">删除</button>
    </li>
</template>

<script>
// import x from ''
export default {
  props: {
    todo: Object,
    index: Number,
    deleteTodo: Function
  },
  data () {
    return {
      bgColor: 'white', // 背景颜色
      isShow: false // 按钮是否显示
    }
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = '#aaaaaa'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    handelLeave (isLeave) {
      if (isLeave) {
        this.bgColor = 'white'
        this.isShow = false
      } else {
        this.bgColor = '#aaaaaa'
        this.isShow = true
      }
    },
    deletItem () {
      const {todo, index} = this
      if (window.confirm('确认删除' + todo.title + '吗？')) {
        this.deleteTodo(index)
      }
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
