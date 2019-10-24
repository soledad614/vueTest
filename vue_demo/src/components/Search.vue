<!-- 组件说明 -->
<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>
        <button @click="searchUser" @keyup.enter="searchUser">Search</button>
      </div>
    </section>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    searchUser () {
      // 发布消息
      PubSub.publish('searchName', this.searchName)
    }
  }
}
</script>

<style>

</style>
