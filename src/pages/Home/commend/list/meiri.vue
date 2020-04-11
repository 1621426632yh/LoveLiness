<template>
  <div>
    <div class="head">
      <div class="head-left" @click="shang">
        <i class="iconfont">&lt;</i>
      </div>
      <div class="head-center">活动推荐</div>
      <div class="head-right">
        <i class="iconfont">&#xe6a2;</i>
      </div>
    </div>
    
    <Calendar v-on:choseDay="clickDay" v-on:changeMonth="changeDate" :sundayStart="true"></Calendar>
  </div>
</template>
<script>
import Calendar from "vue-calendar-component";

export default {
  name: "Meis",
  components: {
    Calendar
  },
  methods: {
    shang() {
      this.$router.back();
    },
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  padding-top: 10px;
  display: flex;
  height: 8rem;
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
</style>