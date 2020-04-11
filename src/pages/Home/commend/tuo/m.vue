<template>
    <div>
      <div class="ri">
        <Calendar v-on:choseDay="clickDay" v-on:changeMonth="changeDate" :sundayStart="true"></Calendar>
      </div>
        <div class="kong"></div>
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
.ri{
  margin-left: -1.8rem;
}
.kong{
  width: 100%;
  height: 5rem;
}
</style>