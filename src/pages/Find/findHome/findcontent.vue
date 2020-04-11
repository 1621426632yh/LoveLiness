<template>
  <div class="content">
    <div v-for="(ele,index) in findData" :key="index">
      <h3 class="title">{{ele.title}}</h3>
      <p class="huati">
        <span class="span">{{ele.talk}}个话题</span> |
        <span>{{ele.hotTalk}}人热议</span>
      </p>
      <div class="content-img">
        <router-link :to="{name:'ProductDetail',params:{info:{img:ele.img1,title:ele.detailtitle1,price:ele.price1,candi:ele.candi1,method:ele.method1,desc:ele.desc1}}}">
          <div class="content-img-left">
            <img :src="ele.img1" alt />
          </div>
        </router-link>
        <router-link :to="{name:'ProductDetail',params:{info:{img:ele.img2,title:ele.detailtitle2,price:ele.price2,candi:ele.candi2,method:ele.method2,desc:ele.desc2}}}">
        <div>
          <img :src="ele.img2" alt />
        </div>
        </router-link>
      </div>
    </div>
    <!-- 加载更多 -->
    <div v-if="more">加载更多...</div>
    <div v-else>我是有底线的...</div>
  </div>
</template>
<script>
import img4 from "../../../assets/findimages/44.png";
import img5 from "../../../assets/findimages/55.png";
export default {
  name: "FindContent",
  data() {
    return {
      img4: img4,
      img5: img5,
      findData: [],
      findData2: [],
      more: ""
    };
  },
    mounted() {
       this.$api.getFinds().then(res => {
            console.log(res.data)
            if (res.data.data.status === 200) {
                this.findData = res.data.data.data;
                this.more = res.data.data.hasMore
            }
        })
        // 鼠标监听事件
        window.onscroll = () => {
            if (document.documentElement.scrollTop + 50 >
                document.documentElement.scrollHeight -document.documentElement.clientHeight) {
                this.$api.getFinds().then(res => {
                // console.log(res.data)
                if (res.data.data.status === 200) {
                    this.findData = this.findData.concat(res.data.data.data)
                }
                });
            }
        };
  }
};
</script>

<style scoped>
.content {
  border-radius: 0.5rem;
  margin: 10px 10px 5rem 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 9px 5px #ddd;
  position: absolute;
  top: 18rem;
  text-align: center;
}
.content-img {
  overflow: hidden;
  padding-bottom: 30px;
}
.content-img div {
  float: left;
  width: 150px;
  height: 160px;
  border: 1px solid #ccc;
}
.content-img div img {
  width: 100%;
  height: 100%;
}
.content-img-left {
  margin-right: 25px;
}
.title {
  color: #666;
  margin-bottom: 5px;
}
.huati {
  color: #999;
  margin-bottom: 15px;
}
.huati .span {
  margin-left: 23px;
}
</style>