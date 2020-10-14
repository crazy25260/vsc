import BaseFrame from "@/mixins/frame";
import VideoIndex from "@/mixins/video/index-frame";
import VideoList from "@/mixins/video/list-frame";
import VideoPlay from "@/mixins/video/play-frame";

const ContentFrame = {
  methods: {
    onHeaderMsg(msg, param1, param2) {
      switch (msg) {
        case "slide_drawer_show":
          this.onSlideDrawerShow();
          break;
        case "nav-click":
          break;
        case "nav-changed":
          this.onPageChange(param1.id, 1);
          break;
      }
    },
    onSlideDrawerShow() {
      console.log("onSlideDrawerShow()");
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
