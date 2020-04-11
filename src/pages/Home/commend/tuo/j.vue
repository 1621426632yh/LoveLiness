<template>
  <div class="j">
    <ul class="list">
      <li v-for="(item,index) in jing" :key="index">
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
.j{
  width: 100%;
  margin: 0 auto;
}
.list {
  width: 95%;
  margin: 0 auto;
  position: relative;
  left: -17px;
  top: 10px;
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