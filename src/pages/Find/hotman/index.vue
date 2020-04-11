<template>
  <div>
    <CallBack :title="title" />
    <TopCard :hotimg="hotimg" :title="title" />

    <div class="top-rem">
      <div class="FG">
        <div class="FG-content" v-for="(ele,index) in HotManData" :key="index">
          <router-link 
            :to="{name:'DaRenDetail',params:{userid:{name:ele.author,userimg:ele.userimg,bigimg:ele.img1}}}">
          <div class="position-tx">
          <p class="author-info" >
            <img class="author-tx" :src="ele.userimg" alt />
            <span class="name">{{ele.author}}</span>
            <span class="guanzhu">关注ta</span>
          </p>
          <div class="author-bigimg">
            <div class="left">
              <img :src="ele.img1" alt />
            </div>
            <div class="right">
              <img :src="ele.img2" alt />
            </div>
          </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 加载更多 -->
    <div v-if="more">加载更多...</div>
    <div v-else>我是有底线的...</div>
  </div>
</template>
<script>
import CallBack from "../components/callback";
import TopCard from "../components/topcard";
import img from "../../../assets/findimages/pink11.jpg";
export default {
  name: "HotMan",
  data() {
    return {
      title: "最美达人",
      hotimg: img,
      HotManData: [],
      more:""

    };
  },
  components: {
    CallBack,
    TopCard
  },
  methods:{
    /* mandetail(){
      this.router.push({
        name:"DaRenDetail"
      })
    } */

  },
  mounted() {
    this.$api.getBeauty().then(res => {
      console.log(res.data);
      if (res.data.data.status === 200) {
        this.HotManData = res.data.data.data;
        this.more = res.data.data.hasMore
        // console.log(this.HotManData);
      }
    }),
    // 鼠标监听事件
    window.onscroll = () => {
        if (document.documentElement.scrollTop + 50 >
            document.documentElement.scrollHeight -document.documentElement.clientHeight) {
            this.$api.getBeauty().then(res => {
            // console.log(res.data)
            if (res.data.data.status === 200) {
                this.HotManData = this.HotManData.concat(res.data.data.data)
            }
            });
        }
    };
  }
};
</script>

<style scoped>
.top-rem {
  margin-top: 7rem;
}
.FG {
  width: 100%;
  /* position: relative; */
}
.position-tx{
  position: relative;


}
.FG-content {
  margin: 10px 10px 40px 10px;
  padding: 10px 0;
  box-shadow: 0px 0px 9px #999;
  border-radius: 8px;
  /* border: 1px solid #999; */
}
.author-info {
  padding: 0px 10px 15px 60px;
  /* position: relative; */
}
.guanzhu {
  border: 1px solid #333;
  border-radius: 20px;
  padding: 0 10px;
  float: right;
  display: block;
  margin-right: 10px;
  font-size: 14px;
}
.author-tx {
  position: absolute;
  display: block;
  left: 10px;
  top: -20px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
}
.author-bigimg {
  display: flex;
  padding: 10px;
}
.author-bigimg div {
  flex: 1;
  height: 180px;
}
.author-bigimg .left {
  margin-right: 10px;
}
.author-bigimg .right {
  margin-left: 10px;
}
.author-bigimg img {
  width: 99.5%;
  height: 100%;
}
.author-bigimg img:hover {
  box-shadow: 0px 0px 9px #999;
}
</style>