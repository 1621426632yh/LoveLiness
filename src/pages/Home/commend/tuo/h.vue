<template>
    <div>
        <div class="list" v-for="(item,index) in pic" :key="index">
        <div class="img">
            <img :src="item.pic" alt="">
        </div>
    </div>
    </div>
</template>

<script>
import $ from "jquery";
var isbool = true
export default {
  name: "Huo",
  data(){
      return{
          pic:[]
      }
  },
  mounted(){
      this.$api.getJing().then(res =>{
          console.log(res.data)
          this.pic = res.data.data
      })

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
          this.pic = this.pic.concat(res.data.data)
          isbool = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    shang(){
      this.$router.back()
  }
  }
};
</script>

<style lang="less" scoped>

.list {
  width: 95%;
  height: 13rem;
  margin: 0 auto;
  border-radius: 8px;
  margin-bottom: 25px;
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  margin-left: -10px;
  .img{
      width: 90%;
      height: 90%;
      margin: 0 auto;
      background: #000;
      position: relative;
      top: 0.6rem;
      img{
          width: 100%;
          height: 100%;
      }
  }
}
</style>