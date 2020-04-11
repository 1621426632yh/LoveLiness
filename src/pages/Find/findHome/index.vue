<template>
  <div class="top-pink">
    <div class="topGN">
      <div class="search" @click="tiao">
        <i class="iconfont">&#xe624;</i>
      </div>
      <div class="desc">发现</div>
      <div class="aite">
        <i class="iconfont">&#xe6de;</i>
      </div>
    </div>
    <!-- top卡片导航 -->
    <TopCard />

    <!-- 内容 -->
    <FindContent />

  </div>
</template>
<script>
import TopCard from "./topCard"
import FindContent from "./findcontent"
export default {
  name: "TopPink",
  components:{
    TopCard,
    FindContent
  },
  methods:{
    tiao(){
      this.$router.push('/search')
    }
  }
};
</script>
<style scoped>
.top-pink {
  width: 100%;
  position: relative;
  height: 10rem;
  background-color: #ff406f;
}
.topGN {
  display: flex;
  padding-top: 1rem;
  color: #fff;
  font-size: 24px;
  font-weight: 100;
}
.topGN i {
  font-size: 26px;
  font-weight: 600;
}
.topGN .search {
  flex: 2;
  margin-left: 15px;
}
.topGN .desc {
  flex: 6;
  text-align: center;
  font-size: 22px;
}
.top-pink .aite {
  flex: 2;
  text-align: right;
  margin-right: 15px;
}
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    background-color: #fff;
    width: 480px;
  }
  
</style>