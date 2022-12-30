import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Chat from '../views/Chat.vue'
import Users from '../views/Users.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    params: true

  }, {
    path: '/users',
    name: 'Users',
    component: Users,
    props: true,
    params: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
