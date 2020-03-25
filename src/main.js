
import Vue from "vue"; //引入vue文件
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'
import { Header,Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResourse from 'vue-resource'
Vue.use(VueResourse)
import router from './router'
import app from "./App.vue" // 引入模板文件
//创建vue实例并且将其挂在到app节点上
new Vue({ 
    el:'#app',
    render:(c)=>c(app),
    router
})