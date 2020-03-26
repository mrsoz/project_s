
import Vue from "vue"; //引入vue文件
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'
// import { Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui';
 import 'mint-ui/lib/style.css'
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI);
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResourse from 'vue-resource'
Vue.use(VueResourse)
import VuePreview from 'vue-preview'
Vue.use(VuePreview);
Vue.http.options.root ="http://vue.studyit.io"
Vue.http.options.emulateJSON =true
import router from './router'
import app from "./App.vue" // 引入模板文件
import moment from 'moment'

Vue.filter("dataFormat",function(value,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(value).format(pattern)
})

//创建vue实例并且将其挂在到app节点上
new Vue({ 
    el:'#app',
    render:(c)=>c(app),
    router
})