import { createRouter, createWebHistory } from 'vue-router'
import PostsPage from '../views/PostsPage/PostsPage.vue'
import PostPage from '../views/PostPage/PostPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsPage
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostPage
    }
  ]
})

export default router
