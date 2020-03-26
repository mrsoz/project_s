<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入内容" maxlength="120" name="" rows="3" v-model="msg"></textarea>
        
        <mt-button type="primary" size="large" @click="postComment">发表吐槽</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.index">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dataFormat}}
                </div>
                <div class="cmt-body" >
                    {{item.content=='underfined'?"用户什么都没输入":item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
   
</template>
<script>
import {Toast} from 'mint-ui'

export default {
   data(){
       return{
           pageindex:1,
           comments:[],
           msg:""
       }
      
   },
   props:["id"],
   methods:{
       getcomments(){
           this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
               if (result.body.status===0) {
                   this.comments=this.comments.concat(result.body.message)
               }else{
                   Toast("获取评论失败！！")
               }
           }).catch(e=>{
               this.comments = this.comments.concat([
                   {user_name:"匿名用户",add_time:"2015-04-04T20:29:20.000Z",content:"评论一下"},
                   {user_name:"麦当劳",add_time:"2015-04-04T20:29:20.000Z",content:"评下论一下下"},
                   {user_name:"德克士",add_time:"2015-04-04T20:29:20.000Z",content:"评下一下下"},
                   {user_name:"卡其",add_time:"2015-04-04T20:29:20.000Z",content:"评论下一下下"},
                   {user_name:"其他",add_time:"2015-04-04T20:29:20.000Z",content:"下评论一下下"}               
               ])
           })
       },
       getMore(){ 
           this.pageindex++
           this.getcomments();
       },
       postComment(){
           if(this.msg.trim().length ==0){
               Toast("你评论个几把评论")
               return 
           }
           
           this.$http.post("api/postcomment/"+this.id,{content:this.msg.trim()}).then(result=>{
               if (result.body.status===0) {
                   var cmt =  {user_name:"匿名用户",add_time:Date.now(),content:this.msg.trim()}
                   this.comments.unshift(cmt)
                   this.msg=''
               }
           }).catch(e=>{
                var cmt =  {user_name:"匿名用户",add_time:Date.now(),content:this.msg.trim()}
                this.comments.unshift(cmt)
                this.msg=''
           })
       }
   },
   created(){
       this.getcomments();
   }
}
</script>
<style lang="scss" scoped>
     .cmt-container{
        h3 {
            font: size 18px; 
        }
        textarea{
            font-size: 14px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #ccc;
                    
                }
                .cmt-body{
                    text-indent: 2em;
                    line-height: 35px;

                }
            }
        }
    }
</style>