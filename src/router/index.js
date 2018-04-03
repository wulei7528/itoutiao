import Vue from 'vue'
import Router from 'vue-router'
import { NewsList } from '@/pages/news-list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: NewsList
  }]
})
