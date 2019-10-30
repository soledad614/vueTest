<!-- 组件说明 -->
<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
          <li>
              <router-link to="/home/news">News</router-link>
              <router-link to="/home/message">Message</router-link>
          </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import x from ''
export default {
}
</script>

<style>

</style>
