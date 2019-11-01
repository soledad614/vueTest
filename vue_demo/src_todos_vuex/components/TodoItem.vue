<!-- 组件说明 -->
<template>
    <li @mouseenter="handleEnter" @mouseleave="handelLeave" :style="{background: bgColor}">
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
    index: Number
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
        this.bgColor = '#cccccc'
        this.isShow = true
      } else {
        this.bgColor = '#ffffff'
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
        this.$store.dispatch('deleteTodo', index)
      }
    }
  }
}
</script>

<style>
li {
  list-style: none;
  height: 36px;
  /* line-height: 36px; */
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>
