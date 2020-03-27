<template>
    <div class="shopcar-container">
        <div class="shopcar-list">
        
        <div class="mui-card" v-for="(item,index) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="item.selected" @change="selectedChanged(item.id,item.selected)"></mt-switch>
                        <img :src="item.img_url">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">${{item.price}}</span>
                                <numbox :num="item.count" :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计（不含运费）<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                            <p>以勾选商品<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件</p>
                        </div>
                        <mt-button type='danger'>去结算</mt-button>
                    </div>

                </div>
            </div>
            </div>
    </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data(){
        return{
            goodslist:[],
        }
    },
    methods:{
        getGoodsList(){
            // var idArr = []
            // this.$store.status.car.forEach(item=>{
            //     idArr.push(item.id);
            // })
            // if (idArr.length) {
            //     return;
            // }
            // this.$http.get("api/goods/getshopcarlist/"+idArr.join(",")).then((result)=>{
            
            // if(result.body.status == 0){
            //     this.goodslist = result.body.message;
            // }else{
            //     Toast("加载失败")
            // }}).catch((e)=>{})
            this.goodslist = this.$store.state.car;
            
        },
        remove(id,index){
            this.goodslist.splice(index,1);
            this.$store.commit("removeFormcar",id)
        },
        selectedChanged(id,selected){
            this.$store.commit("updateGoodsSelected",{id,selected})
        }
      
    },
    components:{
        numbox,
    },
    created(){
        this.getGoodsList();
    },
   

}
</script>
<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        .shopcar-list{
            .mui-card-content-inner{
                 display: flex;
                 align-items: center;
                 justify-content: space-between;
            }
           
            img{
                width: 60px;
                height: 60px;
            }
            h1{
                font-size: 14px;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .price{
                    color:red;
                    font-weight: bold;
                }
            }
        }
        .jiesuan{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            .red{
                color:red
            }
        }
    }
</style>
