<template>
    <div class="photoinfo-container">
        <h3 class="photoinfo-title">{{photolist.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photolist.add_time | dataFormat}}</span>
            <span>点击：{{photolist.click}}次</span>
            </p>
        <hr>
         <vue-preview :slides="slides" @close="handleClose" class="thumbs"></vue-preview>
        <div class="content" v-html="photolist.content"></div>
        
           

       
        
        <comment :id="id"></comment>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            photolist:{},
            slides:[],
        }
    },
    components:{
        'comment':comment
    },
    methods:{
          handleClose () {
        console.log('close event')
      },
        getPhotoInfo(){           
            // this.$http.get("api/getimageInfo"+this.id).then(result=>{
            //     if (result.body.status ==0) {
            //         this.photolist = result.body.message
            //     }
            // }).catch( e=>{
            
            //     this.photolist= {id:this.id,title:"这是鞋子",img_url:"src/images/shoes.jpg",add_time:"2015-04-04T20:29:20.000Z",click:1,content:"这是鞋子"}
            // })
             this.photolist= {id:this.id,title:"这是鞋子",img_url:"src/images/shoes.jpg",add_time:"2015-04-04T20:29:20.000Z",click:1,content:`这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子
             这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子这是鞋子`}
        },
        getThumbs(){
            //     this.$http.get("api/getthumimages/"+this.id).then(result=>{
            //         if(result.body.status ==0){
            //             result.body.messqge.forEach(function(v,i){               
            //                 v.alt='picture1',
            //                 v.title= 'Image Caption 1',
            //                 v.w=600,
            //                 v.h= 400
            //             })
            //         this.slides = result.bodv.y.message
            //     }
            // }).catch(e=>{})
                this.slides= [
                    {
                        src: 'src/images/list_1.jpg',
                        msrc: 'src/images/list_1.jpg',                     
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'src/images/list_3.jpg',
                        msrc: 'src/images/list_3.jpg',                    
                        w: 600,
                        h: 400
                    }
                ]
        },

    },
    created(){
        this.getPhotoInfo();
        
    },
    mounted(){
         this.getThumbs();
    }

}
</script>
<style lang="scss">
    .photoinfo-container{
        padding: 3px;
        .photoinfo-title{
            color:#26a2ff;
            font-size:15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content{
            font-size: 13px;
            line-height: 30px;

        }
        .thumbs{
            .my-gallery{
                display: flex;
                background-color: #eee;
                padding: 6px;
                figure{
                    flex: 1;
                    margin: 3px;                  
                    img{
                        width:100%;
                    }
            }
        }
           
                
            

    }
        
           
        }
</style>