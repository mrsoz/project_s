<template>
  <div class="goodsinfo-container">

     <transition @before-enter="beforeEnter" @enter="Enter" @after-enter="afterEnter" >
        <div class="ball" v-show="ballFlag" ref="ball"></div>
     </transition>
    <div class="mui-card">
     
				<div class="mui-card-content">
					<div class="mui-card-content-inner" style="padding:0px">
           <swiper :lunbotulist="lunbotulist"></swiper>
        
					</div>
				</div>
			</div>
      <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价: <span class="now-price">{{goodsinfo.se1l_price}}</span>
            </p>       
            <p>购买数量：<numbox @getCount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>          
           <p>
              <mt-button type='primary' size="small"> 立即购买</mt-button>
              <mt-button type='danger' size="small" @click="addToShopCar">加入购物车</mt-button>
            </p>
           
					</div>
				</div>
			</div>
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p>商品货号：{{goodsinfo.goods_no}}</p>
            <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
            <p>上架时间：{{goodsinfo.add_time|dataFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button> 
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>         
        </div>
			</div>
  </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
  data(){
    return{
      id:this.$route.params.id,
      lunbotulist:[],
      goodsinfo:{},
      ballFlag:false,
      selectedCount:1,
    } 
  },
  methods:{
      getLunbotu(){       
        this.$http.get("api/getthumimages/"+this.id).then((result)=>{
            
            if(result.body.status == 0){
                this.lunbotulist = result.body.message;
            }else{
                Toast("加载失败")
            }
              
        }).catch((e)=>{
            this.lunbotulist = [
                {"img":"lunbo_1.jpg","url":"src/images/lunbo_1.jpg"},
                {"img":"lunbo_2.jpg","url":"src/images/lunbo_2.jpg"}
            ]
        })
      
      },
      getGoodsInfo(){
        // this.$http.get("api/goods/getinfo/"+this.id).then((result)=>{
            
        //     if(result.body.status == 0){
        //         this.goodsinfo = result.body.message[0];
        //     }else{
        //         Toast("加载失败")
        //     }
              
        // }).catch((e)=>{
        //     this.goodsinfo = 
        //   {title:"小米(Mi) 小米Note 166双网通版",stock_quantity: 60,se1l_price: 2199,market_price: 2699,id:this.id,goods_no:"SD2932214404",add_time: "2015-04-19T17:19:30.000Z"}
             
            
        // })
          this.goodsinfo = {title:"小米(Mi) 小米Note 166双网通版",stock_quantity: 60,se1l_price: 2199,market_price: 2699,id:this.id,goods_no:"SD2932214404",add_time: "2015-04-19T17:19:30.000Z",img_url: "src/images/sj_1.jpg",}
             
      },
      goDesc(id){
        this.$router.push({name:"goodsdesc",params:{id}})
      },
      goComment(id){
           this.$router.push({name:"goodscomment",params:{id}})
      },
      addToShopCar(){
        this.ballFlag=!this.ballFlag;
        var goodsinfo_1 = {
          id:this.id,
          title:this.goodsinfo.title,
          count:this.selectedCount,
          img_url:this.goodsinfo.img_url,
          price:this.goodsinfo.se1l_price,
          selected:true
        };
        this.$store.commit("addToCar",goodsinfo_1);
      },
      getSelectedCount(count){
        this.selectedCount=parseInt(count);
    
      },
      beforeEnter(el){
        el.style.transform = `translate(0,0)`
      },
      Enter(el,done){
        var ballPositon = this.$refs.ball.getBoundingClientRect();
        var badgeposition = document.querySelector(".mui-badge").getBoundingClientRect();
        var xDist = badgeposition.left - ballPositon.left;
        var yDist = badgeposition.top - ballPositon.top;
        el.offsetWidth;
        
          el.style.transform = `translate(${xDist}px,${yDist}px)`
        el.style.transition ="all .5s cubic-bezier(.43, 0, 1, .04)"
        done();
      },
      afterEnter(el){
        this.ballFlag =!this.ballFlag
      }
  },
  created(){
    this.getLunbotu();
    this.getGoodsInfo()
  },
   components:{
      swiper,numbox
    }
}
</script>
<style lang="scss" scoped>
  .goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
 
    .now-price{
      color: red;
      font-size: 16px;
      font-weight: bold;
    }
    .mui-card-footer{
      display: block;
      button{
        margin: 10px 0;
      }
    }
    .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 360px;
    left: 145px;
    z-index: 15;
    }
  }
</style>