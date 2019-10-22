<template>
  <div id="app">
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <Add :addComment="addComment"></Add>
        <List :comments="comments" :deleteComment="deleteComment"></List>
    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  methods: {
    // 添加评论
    addComment (comment) {
      this.comments.unshift(comment)
    },
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  data () {
    return {
      comments: [
        {
          user: 'Wendy',
          content: 'Vue 很棒！'
        },
        {
          user: 'Bob',
          content: 'Vue so easy！'
        },
        {
          user: 'Alice',
          content: 'Vue just so so!'
        }
      ]
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style>

</style>
