import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./components/Login.vue'),
    },
    {
      path: '/login_admin',
      component: () => import('./components/LoginAdmin.vue'),
    },
    {
      path: '/principal',
      component: () => import('./components/Principal.vue'),
    },
    {
      path: '/cuenta',
      component: () => import('./components/Cuenta.vue'),
    },
    {
      path: '/registro',
      component: () => import('./components/Registro.vue'),
    }
  ]
})