<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
            <img :src="item.url" alt="">
        </mt-swipe-item>
        
        </mt-swipe>
 <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                 <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        
		        </ul> 
		</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return{
            lunbotulist:[ 
                {"img":"lunbo_1.jpg","url":"src/images/lunbo_1.jpg"},
                {"img":"lunbo_2.jpg","url":"src/images/lunbo_2.jpg"}
                ],
           
            
        }
    },
    methods:{
        
        getLunbotu(){
              
            this.$http.jsonp("http://vue.studyit.io/api/getlunbo").then((result)=>{
               
                if(result.body.status == 0){
                    lunbotulist = result.body.message;
                }else{
                    Toast("加载失败")
                }
                
            }).catch((e)=>{})
      
        }
    },
    created(){
        this.getLunbotu();
    }

}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            // &:nth-child(){

            // }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border-top:0;
        img{
            width: 60px;
        }
        .mui-media-body{
            font: 13px;
        }
    }
    
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
      border: 0;
  }
</style>
