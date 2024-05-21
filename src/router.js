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
      path: '/recuperar',
      component: () => import('./components/Recuperar.vue'),
    },
    {
      path: '/confirmar_codigo',
      component: () => import('./components/ConfirmarCodigo.vue'),
    },
    {
      path: '/nueva_contrasena',
      component: () => import('./components/NuevaContrasena.vue'),
    },
    {
      path: '/reservar',
      component: () => import('./components/Reservar.vue'),
    },
    {
      path: '/principal',
      component: () => import('./components/Principal.vue'),
    },
    {
      path: '/acerca',
      component: () => import('./components/Acerca.vue'),
    },
    {
      path: '/galeria',
      component: () => import('./components/Galeria.vue'),
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