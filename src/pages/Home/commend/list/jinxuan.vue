<template>
  <div>
    <div class="head">
      <div class="head-left" @click="shang">
        <i class="iconfont">&lt;</i>
      </div>
      <div class="head-center">精选文章</div>
      <div class="head-right">
        <i class="iconfont">&#xe6a2;</i>
      </div>
    </div>

    <ul class="list">
      <router-link v-for="(item,index) in jing" :key="index" :to="{name:'zi' ,params:{uname: item}}">
      <li>
        <div class="text">
          <div class="one">
            <img :src="item.pic" alt />
          </div>
          <div class="two">
            <span>{{ item.uname }}</span>
          </div>
          <div class="three">
            <span>关注TA</span>
          </div>
        </div>
        <div class="picone">
          <img :src="item.pic" alt />
        </div>
      </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
var isbool = true;
export default {
  name: "Jing",
  data() {
    return {
      jing: []
    };
  },
  mounted() {
    this.$api.getJing().then(res => {
      console.log(res.data);
      this.jing = res.data.data;
    });

    //滚动加载
    this.lists();
    //滚动条到底部弹出评价窗口
    var minAwayBtm = 0; // 距离页面底部的最小距离
    $(window).scroll(() => {
      var awayBtm =
        $(document).height() - $(window).scrollTop() - $(window).height();
      if (awayBtm <= minAwayBtm && isbool) {
        isbool = false;
        this.lists();
      }
    });
  },
  methods: {
    lists() {
      this.$api
        .getJing()
        .then(res => {
          this.jing = this.jing.concat(res.data.data);
          isbool = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    shang() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  padding-top: 10px;
  display: flex;
  height: 150px;
  background: #ff406f;
  margin-bottom: -80px;
  i {
    font-size: 24px;
    color: white;
  }
  .head-left {
    flex: 1;
  }
  .head-center {
    flex: 8;
    color: #fff;
    font-size: 20px;
  }
  .head-right {
    flex: 1;
    padding-right: 5px;
  }
}
.list {
  width: 90%;
  margin: 0 auto;
  li {
    width: 100%;
    height: 16rem;
    border-radius: 8px;
    margin-bottom: 25px;
    background: #fff;
    box-shadow: 0 0 10px #ccc;
    .text {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      .one {
        width: 15%;
        float: left;
        text-align: left;
        img {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          margin-left: 20px;
          position: relative;
          top: -15px;
        }
      }
      .two {
        width: 31%;
        float: left;
        text-align: left;
        span {
          position: relative;
          left: 25px;
          color: #ccc;
        }
      }
      .three {
        width: 54%;
        text-align: right;
        float: left;
        span {
          width: 4rem;
          height: 1rem;
          border: 1px solid #ccc;
          border-radius: 15px;
          padding: 0 5px;
          margin-right: 15px;
          color: #ccc;
        }
      }
    }
    .picone {
      width: 90%;
      height: 10rem;
      margin: 20px auto;
      background: #000;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>