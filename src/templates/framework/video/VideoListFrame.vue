<template>
  <div class="video-list">
    <!--    <BreadFrame></BreadFrame>-->
    <VideoItemList
      :paddingTop="with_carousel ? 1.5 : 0.5"
      :videoItems="list_model"
      @video-cover-click="onVideoCoverClick"
    ></VideoItemList>
    <pagination v-model="infoPagination" :page-count="3" @input="onPageChange">
    </pagination>
  </div>
</template>

<script>
import VideoItemList from "@/components-depository/common/infinite-scroll/VideoItemList";
import Pagination from "@/components/Pagination";

import VscMixins from "@/mixins/vsc-mixins";
import FrameMixins from "@/mixins/frame-mixins";
// import BreadFrame from "@/templates/framework/base/BreadFrame";

export default {
  name: "SimpleVideoListFrame",
  components: {
    // BreadFrame,
    VideoItemList,
    Pagination
  },
  props: {
    with_carousel: {
      type: Boolean,
      default: true
    }
  },
  mixins: [
    FrameMixins.BaseFrame,
    FrameMixins.ContentFrame,
    FrameMixins.VideoList,
    VscMixins.Pagination
  ]
};
</script>

<style lang="scss" scoped>
.video-list {
  margin-top: 0;
}
</style>
