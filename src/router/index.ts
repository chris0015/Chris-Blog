import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/test',
      name: 'home',
      component: () => import('@/views/Home/index.vue'),
    },
  ],
})

export default router
