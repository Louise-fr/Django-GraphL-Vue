import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



import Post from '@/components/Post'
import Author from '@/components/Author'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/author/:username', component: Author },
  { path: '/post/:slug', component: Post },
  { path: '/tag/:tag', component: PostsByTag },
  { path: '/', component: AllPosts },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
