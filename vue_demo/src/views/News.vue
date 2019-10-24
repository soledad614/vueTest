<!-- 组件说明 -->
<template>
    <div>
        <ul v-for="(news, index) in newsArr" :key="index">
        <li>{{news}}</li>
    </ul>
    </div>
</template>

<script>
// import x from ''
export default {
  data () {
    return {
      newsArr: ['news1', 'news2', 'news3']
    }
  }
}
</script>

<style>

</style>
