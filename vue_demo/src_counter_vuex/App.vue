<!-- 组件说明 -->
<template>
  <div>
    <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['count']), // count()返回值：{count() {return this.$store.state['count']}}
    // ...mapGetters(['evenOrOdd']) // mapGetters()返回值：{evenOrOdd() {return this.$store.getters['evenOrOdd']}}
    // 使用对应关系
    ...mapGetters({evenOrOdd:'evenOrOdd'})
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    // // 增加
    // increment () {
    //   this.$store.dispatch('increment')
    // },
    // // 减少
    // decrement () {
    //   this.$store.dispatch('decrement')
    // },
    // // 如果是奇数才增加
    // incrementIfOdd () {
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // // 异步增加
    // incrementAsync () {
    //   this.$store.dispatch('incrementAsync')
    // }
  }
}
</script>

<style>

</style>
