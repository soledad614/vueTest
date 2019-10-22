<template>
  <div>
    <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="comment.user">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comment.content"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default pull-right" @click="submitComment">提交</button>
            </div>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      comment: {
        user: '',
        content: ''
      }
    }
  },
  props: ['addComment'],
  methods: {
    submitComment () {
      // 1、检查输入合法性
      const user = this.comment.user.trim()
      const content = this.comment.content.trim()
      if (!user || !content) {
        alert('用户名和评论不能为空！')
        return
      }
      // 2、封装对象
      const comment = {
        user,
        content
      }
      // 3、添加comments中
      this.addComment(comment)
    }
  }
}
</script>

<style>

</style>
