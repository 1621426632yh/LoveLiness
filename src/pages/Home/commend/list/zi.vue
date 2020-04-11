<template>
    <div>
        <div class="head">
      <div class="head-left" @click="shang">
        <i class="iconfont">&lt;</i>
      </div>
      <div class="head-center">详情页</div>
    </div>
        <ul class="list">
      <li>
        <div class="text">
          <div class="one">
            <img :src="uname.pic" alt />
          </div>
          <div class="two">
            <span>{{ uname.uname }}</span>
          </div>
          <div class="three">
            <span>关注TA</span>
          </div>
        </div>
        <div class="picone">
          <img :src="uname.pic" alt />
        </div>
      </li>
    </ul>
    </div>
</template>

<script>
export default {
    name: 'Zi',
    data(){
        return{
            haha:{}
        }
    },
    props:{
        uname:{
            type:[String,Number],
            required:true
        }
    },
    methods:{
        shang(){
            this.$router.back()
        }
    }
}
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
    flex: 9;
    color: #fff;
    font-size: 20px;
  }
}
body{
    width: 100%;
    background: #ccc;
}
.kong{
    width: 100%;
    height: 3rem;
    background: pink;
    text-align: center;
    line-height: 3rem;
    color: #fff;
    font-size: 22px;
    margin-bottom: 5rem;
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