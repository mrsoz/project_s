<template>
    <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
            <img :src="item.url" alt="">
        </mt-swipe-item>
        
        </mt-swipe>
    </div>
</template>
<script>
export default {
   
    props:["lunbotulist"],
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
</style>