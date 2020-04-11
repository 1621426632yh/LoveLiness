<template>
    <van-tabs v-model="activeName">
  <van-tab title="口碑点评" name="a"><KouBei :data="datauser"/></van-tab>
  <van-tab title="相关话题" name="b"><HuaTi :data="datatopic"/></van-tab>
  <van-tab title="相似产品" name="c"><ChanPin :data="datarelated"/></van-tab>
</van-tabs>
</template>
<script>
import KouBei from './KouBei'
import HuaTi from './HuaTi'
import ChanPin from './ChanPin'
export default {
    name:"ElementTabs",
    components:{
        KouBei,
        HuaTi,
        ChanPin,
    },
    data() {
      return {
        activeName: 'a',
      }
    },
    props:{
      datauser:{
        type:Array,
        default:[]
      },
      datatopic:{
        type:Array,
        default:[]
      },
      datarelated:{
        type:Array,
        default:[]
      }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    },
    mounted(){
   
    }
}
</script>
<style lang="less">
     .van-tab--active{
        color:#ff406f!important;
    }
    .van-tabs__line{
        background-color:#ff406f!important;
    }
</style>