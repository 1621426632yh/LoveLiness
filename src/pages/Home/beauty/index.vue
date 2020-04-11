<template>
  <div class="beautyBox">
    <div class="auto">
      <div class="titleBox">
        <div class="beauty_nav">
          <router-link to="/beauty/video">
            <span>美丽视频</span>
          </router-link>
          <router-link to="/beauty/diary">
            <span>女神日记</span>
          </router-link>
          <span class="blackBox">❤</span>
        </div>
      </div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="less" scoped>
.beautyBox {
  min-height: 500px;
  width: 100%;
  
  .auto{
    width: 90%;
    margin: -75px auto;
    background: #f3f3f3;
    border-radius: 5px;
  .beauty_nav {
    width: 85%;
    background-color: pink;
    span {
      display: inline-block;
      width: 49%;
    }
    .blackBox {
      width: 2%;
      opacity: 0;
      margin-right: -60px;
    }
  }
  .titleBox{
    background-color: pink;
    padding: 10px 0;
  }
  }
}
.Active {
  color: rgb(133, 187, 133);
  font-size: 18px;
}
</style>