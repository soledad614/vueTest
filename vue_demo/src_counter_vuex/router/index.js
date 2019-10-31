/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入router会涉及的组件
import About from '../views/About'
import Home from '../views/Home'
import Message from '../views/Message'
import News from '../views/News'
import MessageDetail from '../views/MessageDetail'

// 声明使用vue-router组件
Vue.use(VueRouter)

// 新建一个路由器对象并暴露
export default new VueRouter({
  routes: [
    {
      path: '/about', // path左側斜杆代表根路径
      component: About
    },
    {
      path: '/Home',
      component: Home,
      // 嵌套路由
      children: [
        {
          path: '/home/news',
          component: News
        },
        {
          path: 'message', // 简便显示
          component: Message,
          // 嵌套路由
          children: [
            {
              path: '/home/message/messageDetail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {// 默认重定向到about页面
      path: '',
      redirect: '/about'
    }
  ]
})
