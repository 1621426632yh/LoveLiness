<template>
  <div class="swiper">
    <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in baner" :key="index">
        <img :src="item.img">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Swipers",
  data() {
    return {
    baner:[],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true, // 循环模式选项
        autoplay: {
          disableOnInteraction: false, //手动滑动之后不打断播放
          delay: 2000
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
    console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(3, 1000, false)
      this.$api.getBanner().then(res => {
        this.baner = res.data.data
    })
  },
  
  directives: {
    swiper: directive
  }
};
</script>

<style lang="less" scoped>
.swiper{
    width: 90%;
    height: 11rem;
    margin: -95px auto;
    border-radius: 10px;
    img{
        width: 100%;
        height: 11rem;
        border-radius: 10px;
    }
}
.swiper-container{
     border-radius: 10px;
}
</style>