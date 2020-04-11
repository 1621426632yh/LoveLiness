<template>
  <div>
    <div class="search">
      <i class="iconfont haha" @click="shang">&lt;</i>
      <div class="sou">
        <i class="iconfont">&#xe624;</i>
        <input type="text" class="inp" v-model="sousuo" />
      </div>
      <div class="btn">
        <button type="button" @click="sou">搜索</button>
      </div>
    </div>
    <div class="tab" style="display: none" ref="tabs">
      <SearchTab />
    </div>
  </div>
</template>

<script>
import SearchTab from "./searchTab";
import axios from "axios";

export default {
  name: "Searchs",
  data() {
    return {
      block: "block",
      sousuo: "",
      page: 1
    };
  },
  components: {
    SearchTab
  },
  methods: {
    shang() {
      this.$router.back();
    },
    sou() {
      this.$refs.tabs.style.display = this.block;
    }
  }
};
</script>

<style lang="less" scoped>
.search {
  display: flex;
  height: 3rem;
  background: #ff406f;
  .haha {
    color: #fff;
    font-size: 20px;
    position: relative;
    top: 0.5rem;
  }
  .sou {
    flex: 7;
    height: 1.5rem;
    background: #fff;
    position: relative;
    top: 0.8rem;
    left: 20px;
    i {
      width: 10%;
      font-size: 26px;
      font-weight: bold;
      color: #f00;
      position: relative;
      left: -4px;
      top: 0px;
    }
    .inp {
      width: 75%;
      height: 1.3rem;
      border: 0;
      outline: none;
      padding-left: 8px;
      position: relative;
      top: -0.45rem;
    }
  }
  .btn {
    flex: 3;
    button {
      width: 45%;
      height: 1.5rem;
      position: relative;
      top: 0.8rem;
      color: red;
      border-radius: 6px;
      background: #fff;
      border: 0;
      outline: none;
    }
  }
}
</style>