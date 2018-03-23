import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/page/login'
import home from '../components/common/home'
import basetable from '../components/page/basetable'
import vueTable from '../components/page/vueTable'
import baseform from '../components/page/baseform'
import vueeditor from '../components/page/vueeditor'
import markdown from '../components/page/markdown'
import upload from '../components/page/upload'
import basecharts from '../components/page/basecharts'
import drag from '../components/page/drag'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/login'},
    {path: '/login',name: 'login',component: login},
    {
      path:'/basetable',
      component:home,
      children:[
        {path:'/',component:basetable},
        {path:'/vueTable',component:vueTable},
        {path:'/baseform',component:baseform},
        {path:'/vueeditor',component:vueeditor},
        {path:'/markdown',component:markdown},
        {path:'/upload',component:upload},
        {path:'/basecharts',component:basecharts},
        {path:'/drag',component: resolve => require(['../components/page/drag.vue'], resolve)}

      ]
    }
  ]
})
