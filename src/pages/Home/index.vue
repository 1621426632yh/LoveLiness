<template>
  <div>
    <div class="head">
      <div class="head-left">
        <i class="iconfont" @click="goSerach">&#xe624;</i>
      </div>
      <div class="head-center">
        <ul>
          <li class="list">
            <router-link exact tag="li" to="/">
              <p>美丽推荐</p>
            </router-link>
          </li>
          <li class="list">
            <router-link tag="li" to="/beauty">
              <p>学变美</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="head-right" @click="goSaomiao">
        <i class="iconfont">&#xe65c;</i>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goSerach() {
      this.$router.push({
        path:'/search'
      });
    },
    goSaomiao() {
      this.$router.push({
        path:'/saomiao'
      });
    },

  }
};
</script>

<style lang="less" scoped>
.head {
  padding-top: 10px;
  display: flex;
  height: 150px;
  background: #ff406f;
  i {
    font-size: 24px;
    color: white;
  }
  .head-left {
    flex: 1;
  }
  .head-center {
    flex: 8;
    .list {
      font-size: 20px;
      float: left;
      color: white;
      margin-left: 50px;
    }
  }
  .head-right {
    flex: 1;
    padding-right: 5px;
  }
}
.nav {
  width: 97%;
  margin: 0 1.5%;
  height: 170px;
  background: white;
  position: absolute;
  top: 80px;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 130px;
  }

  div {
    float: left;
  }

  p {
    color: #ff406f;
    font-size: 14px;
  }
}
.router-link-active {
  font-size: 20px;
  border-bottom: 2px solid white;
}
</style>