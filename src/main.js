
import Vue from "vue"; //引入vue文件
import './libs/mui-master/dist/css/mui.min.css'
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);


import app from "./App.vue" // 引入模板文件
//创建vue实例并且将其挂在到app节点上
new Vue({ 
    el:'#app',
    render:(c)=>c(app)
})