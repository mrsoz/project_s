<template>

<div class="mui-numbox" data-numbox-min='1' >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" type="number"  value="1" @change="countChangeed" ref="numbox" />
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
    props:["max"],
    methods:{
        countChangeed(){
            this.$emit("getCount",this.$refs.numbox.value)
        }
    },
    mounted(){
        mui(".mui-numbox").numbox();
    },
    watch:{
        'max':function(newV,oldV){
            mui("mui-numbox").numbox().setOption('max',newV);
        }
    }

}
</script>
<style lang="scss" scoped>
    
</style>