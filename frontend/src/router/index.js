import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForumsView from '../views/ForumsView.vue'
import newForumView from '../views/newForumView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/forums',
      name: 'forums',
      component: ForumsView
    },
    {
      path: '/forums/new',
      name: 'newForum',
      component: newForumView
    },
  ]
})

export default router
