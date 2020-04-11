<template>
  <div class="tab">
    <Tabs :currentIndex="currentIndex" @changeCurrentIndex="getCurrentIndex">
      <Tab label="话题" index="1">
        <div>内容1</div>
      </Tab>
      <Tab label="产品" index="2">
        <div>内容2</div>
      </Tab>
      <Tab label="用户" index="3">
        <div>内容3</div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: "SearchTab",
  data() {
    return {
      currentIndex: 1
    };
  },
  methods: {
    getCurrentIndex(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped lang='less'>
</style>