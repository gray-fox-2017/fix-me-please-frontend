import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/detail/:id',
      props: true,
      name: 'Detail',
      component: Detail
    }
  ]
})
