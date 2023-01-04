import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/views/LoginView.vue'
import HomeView from '../components/views/HomeView.vue'
import AboutView from '../components/views/AboutView.vue'
import UserView from '../components/views/UserView.vue'
import User2View from '../components/views/User2View.vue'
import ErrorPage from '../components/views/HomeView.vue'

import MemberReg from '../components/views/MemberReg.vue'


import CTS001 from '../components/contents/CTS001.vue'

const routes = [
  {
    path: '/LogIn',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/memberReg',
    name: 'memberReg',
    component: MemberReg
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView
  },
  { path : "/user/:name", 
    name : "User", 
    component : UserView 
  },
  { path : "/user2/:name", 
    name : "User2", 
    component : User2View ,
    props: true
  },
  { path : "/cts001/", 
    name : "cts001", 
    component : CTS001 ,
    props: true
  },



  { path : "/:catchAll(.*)", 
    name : "ErrorPage", 
    component : ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //history: createWebHistory(),
  mode:'history', //해쉬값 제거 방식
  routes
})

export default router
