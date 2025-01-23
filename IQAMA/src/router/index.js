import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contactus from '../views/Contactus.vue'
import TermsOfService from '../views/TermsOfService.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import ServiceBureauPackage from '../views/ServiceBureauPackage.vue'
import MedicalServicesPakage from '../views/MedicalServicesPackage.vue'
import Acount from '../views/Acount.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',

      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },   {
      path: '/Contactus',
      name: 'Contactus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Contactus.vue'),

    }, {
      path: '/termsofservice',
      name: 'TermsOfService',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TermsOfService.vue'),

    },{
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PrivacyPolicy.vue'),

    },
    {
      path: '/ServiceBureauPackage',
      name: 'ServiceBureauPackage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ServiceBureauPackage.vue'),

    },   {
      path: '/MedicalServicesPackage',
      name: 'MedicalServicesPackage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MedicalServicesPackage.vue'),

    },
    {
      path: '/Acount',
      name: 'Acount',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Acount.vue'),

    },
  ],
})

export default router
