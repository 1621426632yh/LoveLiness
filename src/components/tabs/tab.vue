<script>
export default {
  name: "Tab",
  data() {
    return {};
  },
  props: {
    index: {
      type: [String, Number],
      default: "1"
    },
    label: {
      type: String,
      default: "tab"
    }
  },
  methods: {
    clickTab() {
      this.$parent.updateCurrentIndex(this.index);
      console.log(1);
    }
  },
  mounted() {
    this.$parent.showContent.push(this);
  },
  computed: {
    active() {
      return this.$parent.currentIndex == this.index;
    }
  },
  render() {
    const classStyle = {
      tab: true,
      activeT: this.active
    };
    return (
      <li class={classStyle} onClick={this.clickTab}>
        {this.label}
      </li>
    );
  }
};
</script>
<style scoped lang='less'>
.tab {
  flex: 1;
  color: #000;
}
.tab:nth-child(2) {
  border-left: 2px solid #cccccc;
  border-right: 2px solid #cccccc;
}

.tab.activeT {
  color: #000;
}
</style>