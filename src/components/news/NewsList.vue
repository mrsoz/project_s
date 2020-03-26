<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                    <router-link :to="'/home/newsinfo/'+item.id">
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.add_time | dataFormat}}</span>
                                <span>点击{{item.click}}次</span>
                            </p>
						</div>
                    </router-link>
				
				</li>


			</ul>
    
    
    
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default {
        data(){
            return{
                newslist:[]
            }
        },
        methods:{
            getNewsList(){
                 this.$http.get("api/getnewslist").then(result=>{
                     if(result.body.status==0){
                         this.newslist = result.body.message
                     }else{
                         Toast("获取新闻列表")
                     }
                 }).catch(e=>{
                     this.newslist = [
                         {id:1,title:"你以为你是谁",add_time:"2015-04-16T03:50:28.000Z",zhaoyao:"认识自己，了解自己",click:1,img_url:"src/images/list_1.jpg"},
                         {id:2,title:"你以为你是谁",add_time:"2015-04-16T03:50:28.000Z",zhaoyao:"认识自己，了解自己",click:2,img_url:"src/images/list_2.jpg"},
                         {id:3,title:"你以为你是谁",add_time:"2015-04-16T03:50:28.000Z",zhaoyao:"认识自己，了解自己",click:3,img_url:"src/images/list_3.jpg"},
                         {id:4,title:"你以为你是谁",add_time:"2015-04-16T03:50:28.000Z",zhaoyao:"认识自己，了解自己",click:4,img_url:"src/images/list_4.jpg"},
                     ]
                 })
            }
        },
        created(){
            this.getNewsList();
        }

    }
</script>
<style lang="scss" scoped>
.mui-table-view{
    .mui-media-body{
            font-size: 14px;
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
}
    
</style>