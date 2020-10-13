import BaseFrame from "@/mixins/frame";
import VideoIndex from "@/mixins/video/index-frame";
import VideoList from "@/mixins/video/list-frame";
import VideoPlay from "@/mixins/video/play-frame";

const ContentFrame = {
  methods: {
    onHeaderMsg(msg, toNavItem, fromNavItem) {
      console.log("11111:" + msg + ", to:" + JSON.stringify(toNavItem));
      switch (msg) {
        case "slide_drawer_show":
          this.$refs.content.onSlideDrawerShow();
          break;
        case "nav-click":
          break;
        case "nav-changed":
          console.log("33333:" + msg + ", to:" + JSON.stringify(toNavItem));
          this.onPageChange(toNavItem.id, 1);
          break;
        case "frame-changed":
          this.onPageChange(toNavItem.id, 1);
          break;
      }
    }
  }
};

const FrameMixins = {
  BaseFrame,
  ContentFrame,
  VideoIndex,
  VideoList,
  VideoPlay
};

export default FrameMixins;
