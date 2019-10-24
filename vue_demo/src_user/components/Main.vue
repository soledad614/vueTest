<!-- 组件说明 -->
<template>
    <div>
      <h1 v-show="forSearch">请输入需要搜索的用户名</h1>
      <h1 v-show="loading">Loading......</h1>
      <div class="row" v-for="(user, index) in users" :key="index">
        <div class="card" v-show="users.length>0">
            <a :href="user.url" target="_blank">
              <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.name}}</p>
        </div>
      </div>
      <h1 v-show="errorMsg">{{errorMsg}}</h1>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'

export default {
  data () {
    return {
      forSearch: true,
      loading: false,
      users: null, // user={url:'', avatar_url:'', name:''}
      errorMsg: ''
    }
  },
  mounted () {
    // 订阅消息,并请求
    PubSub.subscribe('searchName', (msg, searchName) => {
      // 更新状态
      this.forSearch = false
      this.loading = true
      this.users = []
      this.error = ''
      // 请求
      const baseUrl = 'https://api.github.com/search/users?q='
      axios.get(baseUrl + searchName).then(
        // 获取数据成功
        response => {
          // 更新状态
          this.loading = false
          // 映射
          this.users = response.data.items.map(item => ({
            url: item.url,
            avatar_url: item.avatar_url,
            name: item.login
          }))
        }).catch(error => {
        // 获取数据失败
        this.loading = false
        this.errorMsg = error
      })
    })
  }
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
