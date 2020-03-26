<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>{{newsinfo.add_time | dataFormat }}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <comment :id="id"></comment>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
    
    data(){
        return {
            id :this.$route.params.id,
            newsinfo:{}
        }
    },
    methods:{
        getNewsInfo(){
            this.$http.get("api/getnew/"+this.id).then(result=>{
                if(result.body.status==0){
                    this.newsinfo = result.body.messages[0]
                }else{
                    Toast("获取失败")
                }
            }).catch(e=>{
                this.newsinfo = {
                    id:1,
                    title:"买房或炒股，你无法拒绝的理由之100",
                    click:5,
                    add_time:"2015-04-16T04:06:12.000Z",
                    content:`买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100
                    买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，
                    你无法拒绝的理由之100
                     买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股
                     ，你无法拒绝的理由之100
                      买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，
                      你无法拒绝的理由之100
                       买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，你无法拒绝的理由之100买房或炒股，
                       你无法拒绝的理由之100
                    `

                }
            })
        }
    },
    created(){
        this.getNewsInfo();
    },
    components:{
        "comment":comment
    }

}
</script>
<style lang="scss" scoped>
    .newsinfo-container{
        padding: 0 5px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px;
            color:red;

        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
             font-size: 13px;
        }
    }
</style>