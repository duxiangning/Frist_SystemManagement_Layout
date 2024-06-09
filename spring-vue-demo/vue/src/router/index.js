import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/Layout/layout.vue";

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: "/user",
    children:[
      {
        path: '/user',
        name: 'User',
        component: () => import("@/views/User.vue"),
      },
      {
        path: '/book',
        name: 'Book',
        component: () => import("@/views/Book.vue"),
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login.vue"),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/views/Register.vue"),
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
