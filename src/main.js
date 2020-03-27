
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
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.http.options.root ="http://vue.studyit.io"
Vue.http.options.emulateJSON =true
import router from './router'
import app from "./App.vue" // 引入模板文件
import moment from 'moment'

Vue.filter("dataFormat",function(value,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(value).format(pattern)
})
let store = new Vuex.Store({
    state:{
        car:JSON.parse(localStorage.getItem("car"))||[],
    },
    mutations:{
        addToCar(state,goodsinfo){            
            var flag = state.car.some((item)=>{
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count); 
                    
                    return  true              
                }
            })
            if(!flag){
                state.car.push(goodsinfo);        
            }
           
            localStorage.setItem("car",JSON.stringify(state.car))
           
        },
        updateGoodsInfo(state, goodsinfo) {
            
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.count= parseInt(goodsinfo.count)
                    return true
                }
               
            });
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        removeFormcar(state,id){
            state.car.some((item,index)=>{
                if(item.id == id){
                    state.car.splice(index,1);
                    return true
                }
               
            });
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info) {
            state.car.some((item,index)=>{
                if(item.id == info.id){
                    item.selected = info.selected
                    return true
                }
               
            });
            localStorage.setItem("car",JSON.stringify(state.car))
        },
    },
    getters:{
        getAllCount(state){
            var c = 0;
            state.car.forEach((item)=>{
                c += item.count;
                console.log(typeof item.count)
            })
           
            return c;
        },
        getGoodsCountAndAmount(state){
            var o = {
                count:0,
                amount:0
            };
            state.car.forEach((item)=>{
               if(item.selected){
                   o.count +=item.count;
                   o.amount += item.price * item.count
               }
            })
           
            return o;
        }
        
    }
})

//创建vue实例并且将其挂在到app节点上
new Vue({ 
    el:'#app',
    render:(c)=>c(app),
    router,
    store
})