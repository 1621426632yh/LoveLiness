<template>
  <div>
    <Swipers />
    <div class="kong"></div>
    <div class="list">
      <div class="link" @click="jingone">精选文章</div>
      <div class="link" @click="huo">活动推荐</div>
      <div class="link" @click="mei">每日一签</div>
    </div>

    <!-- tab切换 -->
    <div class="huodong">
      <i class="iconfont">&#xe634;</i>
      活动专题
      <i class="iconfont">&#xe634;</i>
    </div>
    <div class="tabs">
      <Tabs :currentIndex="currentIndex" @changeCurrentIndex="getCurrentIndex">
        <div class="tab">
          <Tab label="Essay" index="1">
            <div>
              <J />
            </div>
          </Tab>
        </div>

        <div class="tab">
          <Tab label="Activity" index="2">
            <div>
              <H />
            </div>
          </Tab>
        </div>
        <div class="tab">
          <Tab label="Signed" index="3">
            <div>
              <M />
            </div>
          </Tab>
        </div>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Swipers from "./swiper";
import $ from "jquery";
import J from "./tuo/j";
import H from "./tuo/h";
import M from "./tuo/m";

var isbool = true;
export default {
  name: "Commend",
  components: {
    Swipers,
    J,
    H,
    M
  },
  data() {
    return {
      jing: [],
      currentIndex: 1
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
    jingone() {
      this.$router.push("/jinxuan");
    },
    huo() {
      this.$router.push("/huodong");
    },
    mei() {
      this.$router.push("/mei");
    },

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
    getCurrentIndex(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.kong {
  width: 100%;
  height: 7rem;
}
.list {
  width: 90%;
  height: 3rem;
  margin: 0 auto;
  background: #ccc;
  border-radius: 8px;
  text-align: center;
  .link {
    width: 33%;
    float: left;
    font-size: 16px;
    height: 1.5rem;
    line-height: 1.5rem;
    margin-top: 0.8rem;
  }
}
.tabs {
  width: 90%;
  margin: 0 auto;
  height: 2rem;
  background: #ccc;
  text-align: center;
  border-radius: 8px;
  .tab {
    width: 63%;
    height: 1.5rem;
    float: left;
  }
}
.huodong {
  width: 100%;
  height: 2rem;
  padding: 30px 0 10px 0;
  text-align: center;
  color: #1a1a1a;
  font-size: 20px;
  .iconfont {
    color: red;
    font-weight: bold;
  }
}
</style>