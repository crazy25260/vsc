import BaseFrame from "@/mixins/frame";
import VideoIndex from "@/mixins/video/index-frame";
import VideoRecommended from "@/mixins/video/recommended-frame";
import VideoList from "@/mixins/video/list-frame";
import VideoPlay from "@/mixins/video/play-frame";

const ContentFrame = {
  computed: {
    page_num() {
      if (this.page_count.page_num) {
        return this.page_count.page_num;
      }
      return 1;
    }
  },
  methods: {
    onHeaderMsg(msg, param1, param2) {
      switch (msg) {
        case "slide_drawer_show":
          this.onSlideDrawerShow();
          break;
        case "nav-click":
          break;
        case "nav-changed":
          this.onLoadPage(param1, 1);
          break;
      }
    },
    onSlideDrawerShow() {
      console.log("onSlideDrawerShow()");
    },
    onPageChange(item) {
      this.onLoadPage(this.current_nav, item);
    }
  }
};

const FrameMixins = {
  BaseFrame,
  ContentFrame,
  VideoIndex,
  VideoRecommended,
  VideoList,
  VideoPlay
};

export default FrameMixins;
