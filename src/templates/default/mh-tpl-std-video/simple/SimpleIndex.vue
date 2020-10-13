<template>
  <div>
    <router-view name="header" ref="header" @header-msg="onHeaderMsg" />
    <router-view ref="content" />
    <router-view name="footer" ref="footer" />
  </div>
</template>

<script>
import VscMixins from "@/mixins/vsc-mixins";

export default {
  name: "SimpleIndex",
  mixins: [VscMixins.NavMenu],
  methods: {
    onHeaderMsg(msg, params) {
      console.log(this.$options.name + "::onHeaderMsg():" + msg);
      // 特定子控件之间的事件，直接联动调用
      this.$refs.content.onHeaderMsg(
        msg,
        this.$options.name,
        this.$refs.header.$options.name
      );

      // 子控件事件处理，并转化新消息
      switch (msg) {
        case "nav-click":
          this.onNavClick(params.index);
          break;
      }
    },
    onNavClick(navIndex) {
      let navItem = this.$store.state.nav_model.nav_categories[navIndex];
      console.log("onNavClick to:" + JSON.stringify(navItem));
      console.log("onNavClick from:" + JSON.stringify(this.current_nav));
      if (this.$store.state.nav_model.nav_index !== navIndex) {
        this.$store.commit("setCurrentNavCategory", navIndex);
        console.log(
          "22222:" + this.$router.currentRoute.name + " | " + navItem.path_name
        );
        if (
          this.$refs.content.$options.name === "SimpleVideoListFrame" &&
          this.$router.currentRoute.name === navItem.path_name
        ) {
          // // 这里只是发射消息，其他地方要处理，需要绑定该消息。
          // this.$refs.content.$emit("nav-changed", navItem, this.current_nav);
          this.$refs.content.onHeaderMsg(
            "nav-changed",
            navItem,
            this.current_nav
          );
          return;
        }
      }

      if (this.$router.currentRoute.name !== navItem.path_name) {
        // // 这里只是发射消息，其他地方要处理，需要绑定该消息。
        // this.$refs.content.$emit("frame-changed", navItem, this.frame_name);
        this.$refs.content.onHeaderMsg(
          "frame-changed",
          navItem.path_name,
          this.$router.currentRoute.name
        );

        this.$store.commit("navigate", {
          router: this.$router,
          path_name: navItem.path_name,
          data: navItem.id
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
