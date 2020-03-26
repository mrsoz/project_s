<template>
    <div class="goodscomment-container">
        <comment :id="$route.params.id"></comment>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    components:{
        comment
    }
}
    

</script>
<style scoped lang="scss">
.goodscomment-container{
    margin: 8px;
}
</style>