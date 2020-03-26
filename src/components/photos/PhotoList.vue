<template>
    <div>
       <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                   
                    <a v-for="item in cates" :key="item.id" :class="['mui-control-item',item.id==0?'mui-active':'']" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                
                </div>
            </div>
        </div>
        
       
        <ul class="photo-list">
             <router-link :to="'/home/photoinfo/'+item.id" v-for="item in list" :key="item.id" tag="li">
                    <img v-lazy="item.img_url">
                    <div class="title">{{item.title}}</div>
             </router-link>
         
        </ul>
    </div>
    
</template>
<script>

    import mui from '../../libs/mui/js/mui.min.js'   
    export default {
        data(){
            return {
                cates:[],
                list:[],
                
            }
        },
        methods:{
            getAllCategory(cateId){
                  this.cates=[
                        {id:0,title:"全部"},
                        {id:1,title:"鞋子"},
                        {id:2,title:"家具"},
                        {id:3,title:"衣服"},
                        {id:4,title:"摄影"},
                        {id:5,title:"电脑"}
                    ]
                // this.$http.get('api/gettimgcategory'+cateId).then(result=>{
                //     if(result.body.status ==0){
                //         this.cates = result.body.message.unshift({id:0,title:"全部"});
                //     }
                // }).catch(e=>{
                //     this.cates=[
                //         {id:0,title:"全部"},
                //         {id:1,title:"鞋子"},
                //         {id:2,title:"家具"},
                //         {id:3,title:"衣服"},
                //         {id:4,title:"摄影"},
                //         {id:5,title:"电脑"}
                //     ]
                // })
            },
            getPhotoListByCateId(cateId){
                   switch (cateId) {
                    case 1:
                    this.list=[                         
                     {id:61,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:62,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:63,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:64,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:65,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:66,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                    ]
                    break;
                    case 2:
                    this.list=[                         
                      {id:71,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:72,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:73,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:74,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:75,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:76,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                    ]
                    break;
                    case 3:
                    this.list=[                         
                     {id:81,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:82,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:83,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:84,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:85,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:86,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:87,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                    ]
                    break;
                    case 4:
                    this.list=[                         
                    {id:91,title:"这是摄影",img_url:"src/images/photography.jpg"},
                            {id:92,title:"这是摄影",img_url:"src/images/photography.jpg"},
                            {id:93,title:"这是摄影",img_url:"src/images/photography.jpg"},
                            {id:94,title:"这是摄影",img_url:"src/images/photography.jpg"},
                    ]
                    break;
                    case 5:
                    this.list=[                         
                    {id:55,title:"这是电脑",img_url:"src/images/computer.jpg"}
                    ]
                    break;
                    default:
                        this.list=[
                            {id:50,title:"这是全部",img_url:"src/images/all.jpg"},
                            {id:61,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:62,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:63,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:64,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:65,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:66,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                            {id:71,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:72,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:73,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:74,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:75,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:76,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                            {id:81,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:82,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:83,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:84,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:85,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:86,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:87,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                            {id:91,title:"这是摄影",img_url:"src/images/photography.jpg"},
                            {id:92,title:"这是摄影",img_url:"src/images/photography.jpg"},
                            {id:93,title:"这是摄影",img_url:"src/images/photography.jpg"},
                            {id:94,title:"这是摄影",img_url:"src/images/photography.jpg"},
                            {id:101,title:"这是电脑",img_url:"src/images/computer.jpg"}
                        ]
                        break;
                }    
                // this.$http.get("api/getimages/"+cateId).then(result=>{
                //     if(result.body.status ==0){
                //          this.list = result.body.message
                //     }
                // }).catch(e=>{
                   
                //     switch (cateId) {
                //     case 1:
                //     this.list=[                         
                //     {id:51,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                //     ]
                //     break;
                //     case 2:
                //     this.list=[                         
                //     {id:52,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                //     ]
                //     break;
                //     case 3:
                //     this.list=[                         
                //     {id:53,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                //     ]
                //     break;
                //     case 4:
                //     this.list=[                         
                //     {id:54,title:"这是摄影",img_url:"src/images/photography.jpg"},
                //     ]
                //     break;
                //     case 5:
                //     this.list=[                         
                //     {id:55,title:"这是电脑",img_url:"src/images/computer.jpg"}
                //     ]
                //     break;
                //     default:
                //         this.list=[
                //             {id:50,title:"这是全部",img_url:"src/images/all.jpg"},
                //             {id:51,title:"这是鞋子",img_url:"src/images/shoes.jpg"},
                //             {id:52,title:"这是家具",img_url:"src/images/furnishing.jpg"},
                //             {id:53,title:"这是衣服",img_url:"src/images/clothes.jpg"},
                //             {id:54,title:"这是摄影",img_url:"src/images/photography.jpg"},
                //             {id:55,title:"这是电脑",img_url:"src/images/computer.jpg"}
                //         ]
                //         break;
                // }    
                // })
            },
          
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            })
        },
        created(){
            this.getAllCategory();
            this.getPhotoListByCateId(0)
        }
    }
</script>
<style lang='scss' scoped>
*{
    touch-action: pan-y;
}
.photo-list{
    margin: 0;
    padding: 0 10px;
    li{
        position: relative;
        background-color: #ccc;
        text-align: center;
        list-style: none;
        box-shadow: 0 0 8px #999;
        margin-bottom: 10px;
        img{
            width: 100%;
            vertical-align: middle;
        }
        image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        }
        .title{
            position: absolute;
            bottom: 0;
            color:#fff;
            width: 100%;
            text-align: left;
            text-indent: 2em;
            max-height: 84px;
            font-size: 14px;
            background-color: rgba(0,0,0,0.4);
        }
    }
   
}
</style>