<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: [] 
    };
  },
  methods: {
    getGoodsList() {
               this.goodslist = this.goodslist.concat([
            {
              id: 1,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_1.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            },
            {
              id: 2,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_2.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            },
            {
              id: 3,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_3.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            },
            {
              id: 4,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_4.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            },
            {
              id: 5,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_5.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            },
            {
              id: 6,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_6.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            },
            {
              id: 7,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_7.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            },
            {
              id: 8,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_8.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            },
            {
              id: 9,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_9.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            },
            {
              id: 10,
              title: "小米4s",
              add_time: "2015-04-04T20:29:20.000Z",
              zhaiyao: "小米手机，战斗机or垃圾",
              click: 0,
              img_url: "src/images/sj_10.jpg",
              sell_price: 1222,
              market_price: 2400,
              stock_quantity: 60
            }
          ]);
      // 获取商品列表
      // this.$http
      //   .get("api/getgoods?pageindex=" + this.pageindex)
      //   .then(result => {
      //     if (result.body.status === 0) {
      //       this.goodslist = this.goodslist.concat(result.body.message);
      //     }
      //   })
      //   .catch(e => {
 
      //   });
    },
    getMore() {
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id){
        this.$router.push({path:`/home/goodsinfo/${id}`})
    }
  },
  created() {
    this.getGoodsList();
  }
};
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>