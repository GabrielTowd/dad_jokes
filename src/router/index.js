import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Submission from '@/components/Submission'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/submission',
      name: 'Submission',
      component: Submission
    }
  ]
})
