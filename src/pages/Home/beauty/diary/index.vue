<template>
  <div>
    <div class="tipBox">
      <ul>
        <li v-for="(item,index) in nvshen" :key="index">
          <div class="user">
            <img :src="item.pic" alt />
            <span>{{item.uname}}</span>
          </div>
          <div class="tip">{{item.tip}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
var isbool = true
export default {
  data() {
    return {
      nvshen: []
    };
  },
  mounted() {
    this.$api.getNvShen().then(res => {
      this.nvshen = res.data.data;
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
        .getNvShen()
        .then(res => {
          this.nvshen = this.nvshen.concat(res.data.data)
          isbool = true;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.tipBox {
  padding: 20px 15px;
  ul li {
    width: 100%;
    padding: 15px 0;
    border-bottom: dotted 1px purple;
    .user {
      width: 100%;
      height: 70px;
      text-align: left;
      img {
        width: 50px;
        border-radius: 50%;
      }
      span {
        position: relative;
        top: -18px;
        left: 5px;
        color: purple;
      }
    }
    .tip {
      padding: 5px;
      text-align: left;
      text-indent: 2em;
      color: rgb(20, 15, 20);
      font-size: 14px;
      letter-spacing: 1.1px;
      background-color: rgb(208, 224, 248);
      border-radius: 3px;
      box-shadow: 1px 3px 15px #909090;
    }
  }
  .router-link-active {
    color: rgb(133, 187, 133)!important;
    font-size: 18px;
  }
}
</style>