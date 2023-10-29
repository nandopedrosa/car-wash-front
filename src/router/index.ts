import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Signup from '@/views/auth/Signup.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import { UseAuthService } from '@/services/auth-service'
import { createRouter, createWebHistory } from 'vue-router'

const authService = UseAuthService();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: PageNotFound,
    },

  ]
});

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !authService.isAuthenticated && to.name !== 'login'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  }
});

export default router
