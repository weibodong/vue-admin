import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/page/login'
import home from '../components/common/home'
import basetable from '../components/page/basetable'
import vueTable from '../components/page/vueTable'

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
        {path:'/baseform',component: resolve => require(['../components/page/baseform.vue'], resolve)},
        {path:'/vueeditor',component: resolve => require(['../components/page/vueeditor.vue'], resolve)},
        {path:'/markdown',component: resolve => require(['../components/page/markdown.vue'], resolve)},
        {path:'/upload',component: resolve => require(['../components/page/upload.vue'], resolve)},
        {path:'/basecharts',component: resolve => require(['../components/page/basecharts.vue'], resolve)},
        {path:'/drag',component: resolve => require(['../components/page/drag.vue'], resolve)},
        {path:'/vueCheckBox',component: resolve => require(['../components/page/vueCheckBox.vue'], resolve)}

      ]
    }
  ]
})
