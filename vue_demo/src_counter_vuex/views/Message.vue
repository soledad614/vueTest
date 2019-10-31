<!-- 组件说明 -->
<template>
    <div>
      <ul>
        <li v-for="m in messages" :key="m.id">
          <router-link :to="`/home/message/messageDetail/${m.id}`">{{m.title}}</router-link>
          <button @click="pushRoute(m.id)">push查看</button>
          <button @click="replaceRoute(m.id)">Replace查看</button>
        </li>
      </ul>
      <button @click="back()">回退</button>
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
  methods: {
    pushRoute (id) {
      this.$router.push(`/home/message/messageDetail/${id}`)
    },
    replaceRoute (id) {
      this.$router.replace(`/home/message/messageDetail/${id}`)
    },
    back () {
      this.$router.back()
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
