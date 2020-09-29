<template>
  <div></div>
</template>

<script>
export default {
  name: "MainEntry",
  data() {
    return {
      msg: "hello"
    };
  },
  created() {
    this.$store.state.path_trace = [];
    this.$store.commit("navigate", {
      router: this.$router,
      path_name: "simple",
      data: "MainEntry"
    });
  }
};
</script>

<style lang="scss" scoped></style>
