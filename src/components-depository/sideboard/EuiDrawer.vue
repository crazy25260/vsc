<template>
  <!--    抽屉区域-->
  <el-drawer
    :title="title"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose"
    size="75%"
  >
    <h3>这里是你的自定义面板内容</h3>
  </el-drawer>
</template>

<script>
export default {
  name: "EuiDrawer",
  data() {
    return {
      title: "抽屉式侧面板",
      drawer: false,
      direction: "rtl"
    };
  },
  methods: {
    handleClose(done) {
      done();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
