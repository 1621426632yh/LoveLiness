<template>
  <div class="Sort-box">
    <div class="Sort-title">
      <p>分类</p>
      <router-link to="/search" tag="span" class="iconfont icon-Search">&#xe624;</router-link>
    </div>
    <!-- 彩妆 -->
    <div class="Sort-Content">
      <div class="Content-title">
        <p>
          <span class="iconfont icon">&#xe634;</span>魅力彩妆
          <span class="iconfont icon">&#xe634;</span>
        </p>
      </div>
      <div class="Sort-product">
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:1001}}">
            <div class="caizhuang1"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:1002}}">
            <div class="caizhuang2"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:1003}}">
            <div class="caizhuang3"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:1004}}">
            <div class="caizhuang4"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:1005}}">
            <div class="caizhuang5"></div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 面部护理 -->
    <div class="Sort-Content">
      <div class="Content-title">
        <p>
          <span class="iconfont icon">&#xe634;</span>面部护理
          <span class="iconfont icon">&#xe634;</span>
        </p>
      </div>
      <div class="Sort-product">
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:2001}}">
            <div class="mianbu1"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:2002}}">
            <div class="mianbu2"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:2003}}">
            <div class="mianbu3"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:2004}}">
            <div class="mianbu4"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:2005}}">
            <div class="mianbu5"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:2006}}">
            <div class="mianbu6"></div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 香水 -->
    <div class="Sort-Content">
      <div class="Content-title">
        <p>
          <span class="iconfont icon">&#xe634;</span>香水
          <span class="iconfont icon">&#xe634;</span>
        </p>
      </div>
      <div class="Sort-product">
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:3001}}">
            <div class="xiangshui1"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:3002}}">
            <div class="xiangshui2"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:3003}}">
            <div class="xiangshui3"></div>
          </router-link>
        </div>
        <div class="product-list">
          <router-link :to="{name:'Product',params:{productid:3004}}">
            <div class="xiangshui4"></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sort",
  components: {}
};
</script>
<style lang="less" scoped>
.Sort-title {
  height: 60px;
  background: #ff406f;
  font-size: 20px;
  line-height: 60px;
  color: #fff;
  margin-bottom: 20px;
  position: relative;
  .icon-Search {
    font-size: 25px;
    color: #fff;
    position: absolute;
    top: 3px;
    left: 15px;
  }
}
.Sort-Content {
  width: 335px;
  margin: 10px auto 30px;
  .Content-title {
    margin-bottom: 13px;
  }
  .Sort-product {
    width: 100%;
    height: 175px;
    box-shadow: 0 2px 15px #eaeaea;
    .product-list {
      float: left;
      width: 20%;
      height: 61px;
      margin: 16px 7.6px 0;
      div {
        width: 42px;
        height: 100%;
        margin: 0 auto;
        background: url("../../assets/Sortimg/01.png") no-repeat;
        background-size: 245px;
      }
      .caizhuang1 {
        background-position: 1px 3px;
      }
      .caizhuang2 {
        background-position: -67px 3px;
      }
      .caizhuang3 {
        background-position: -134px 3px;
      }
      .caizhuang4 {
        background-position: -203px 3px;
      }
      .caizhuang5 {
        background-position: 1px -71px;
      }

      .mianbu1 {
        background-position: 1px -191px;
      }
      .mianbu2 {
        background-position: -67px -191px;
      }
      .mianbu3 {
        background-position: -136px -191px;
      }
      .mianbu4 {
        background-position: -202px -191px;
      }
      .mianbu5 {
        background-position: 1px -263px;
      }
      .mianbu6 {
        background-position: -67px -264px;
      }

      .xiangshui1 {
        background-position: 1px -382px;
      }
      .xiangshui2 {
        background-position: -67px -382px;
      }
      .xiangshui3 {
        background-position: -136px -382px;
      }
      .xiangshui4 {
        background-position: -203px -382px;
      }
    }
  }
}
</style>