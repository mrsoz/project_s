import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue' 
import MemberContainer from './components/tabbar/MemberContainer.vue' 
import SearchContainer from './components/tabbar/SearchContainer.vue' 
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue' 
// 3. 创建路由对象
var router = new VueRouter({
  linkActiveClass:"mui-active",
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home', component:HomeContainer},
    {path:'/member', component:MemberContainer},
    {path:'/search', component:SearchContainer},
    {path:'/shopcar', component:ShopcarContainer}
  ]
})

// 把路由对象暴露出去
export default router