import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path:'/Main',
        name:'Main',
        component:()=>import('../views/Main')
      },
      {
        path:'/Article',
        name:'Article',
        component:()=>import('../views/Article')
      },
      {
        path:'/About',
        name:'About',
        component:()=>import('../views/About')
      },
      {
        //默认加载‘Main’组件
        path:'/',
        redirect:'/Main'
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
