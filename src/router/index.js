import Vue from 'vue'
import Router from 'vue-router'
import olmap from '@/components/olmap.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'olmap',
      component: olmap
    }
  ]
})
