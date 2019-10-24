<!-- 组件说明 -->
<template>
    <div>
      <ul>
        <li v-for="m in messages" :key="m.id">
          <router-link :to="`/home/message/messageDetail${m.id}`">{{m.title}}</router-link>
        </li>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
</template>

<script>
// import x from ''
export default {
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'Message001'},
        {id: 3, title: 'Message003'},
        {id: 5, title: 'Message005'}
      ]
      this.messages = messages
    }, 500)
  }
}
</script>

<style>

</style>
