import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    meta: {
      title: 'Home'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    meta: {
      title: 'About'
    },
    component: () => import('@/views/About.vue')
  },
  {
    path: '/contact',
    meta: {
      title: 'Contact'
    },
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/user',
    meta: {
      title: 'User'
    },
    component: () => import('@/views/Users.vue')
  }
]

const router = createRouter({
  history: createWebHistory(window.ingressUrl || window.publicPath || ''),
  routes,
  scrollBehavior() {
    // Scroll to the top of the page on route navigation
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | Motor Service` : 'Motor Service'
  next()
})

export default router
