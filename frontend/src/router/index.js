import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForumsView from '../views/ForumsView.vue'
import NewForumView from '../views/NewForumView.vue'
import ForumTopicDetailView from '../views/ForumTopicDetailView.vue'
import ForumTopicsView from '../views/ForumTopicsView.vue'
import NewTopicView from '../views/NewTopicView.vue'
import ForumLayout from '../layouts/ForumLayout.vue'

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
      component: ForumLayout,
      children: [
        {
          path: '',
          name: 'forums',
          component: ForumsView
        },
        {
          path: 'new',
          name: 'newForum',
          component: NewForumView,
          beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
              next({ name: 'login' })
            }
            else {
              next()
            }
          },
        },
        {
          path: ':forum/new',
          name: 'newTopic',
          component: NewTopicView,
          beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('token')) {
              next({ name: 'login' })
            }
            else {
              next()
            }
          }
        },
        {
          path: ':forum',
          name: 'forumTopics',
          component: ForumTopicsView,
        },
        {
          path: ':forum/:topic',
          name: 'forumTopicDetail',
          component: ForumTopicDetailView
        },
      ]
    },
  ]
})

export default router
