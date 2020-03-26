<template>
    <div class="goodsdesc-container">
        <h1>{{info.title}}</h1>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            id:this.$route.params.id,
            info:{},
        }
    },
    methods:{
        getGoodsDesc(){
        this.$http.get("api/goods/getdesc/"+this.id).then((result)=>{
            
            if(result.body.status == 0){
                this.info = result.body.message[0];
            }else{
                Toast("加载失败")
            }
              
        }).catch((e)=>{
            this.info = {title:"小米(Mi) 小米Note 166双网通版",content:"小米(Mi) 小米Note 166双网通版小米(Mi) 小米Note 166双网通版小米(Mi) 小米Note 166双网通版小米(Mi) 小米Note 166双网通版"}
             
            
        })
        }
         
    },
    created(){
        this.getGoodsDesc();
    }
}
    

</script>

<style scoped lang="scss">
    .goodsdesc-container{
        margin: 8px;
        h1{
            text-align: center;
            font-size: 16px;
            color:#226aff;
        }
        .content{
            font-size: 14px;
        }

    }
</style>