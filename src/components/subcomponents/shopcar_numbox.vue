<template>

<div class="mui-numbox" data-numbox-min='1' >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number" readonly :value="num" @change="countChangeed" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
   
</div>
    
</template>
<script>
import mui from '../../libs/mui/js/mui.min.js'
export default {
    data(){
        return{
           
        }
    },
    
    props:["num","goodsid"],
    methods:{
        countChangeed(){
          this.$store.commit("updateGoodsInfo",{id:this.goodsid,count:this.$refs.numbox.value})          
        }
    },
    mounted(){
        mui(".mui-numbox").numbox();
      
    },
   

}
</script>
<style lang="scss" scoped>
    
</style>