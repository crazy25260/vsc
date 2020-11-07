<template>
  <div>
    <VideoItemList
      :paddingTop="with_carousel ? 1.5 : 0.5"
      :videoItems="list_model"
      @video-cover-click="onVideoCoverClick"
      :isIndex="false"
    ></VideoItemList>
    <pagination
      v-model="infoPagination"
      :page-count="100"
      @input="onPageChange"
      :withText="true"
      :noArrows="false"
      ref="pagination"
    >
    </pagination>
  </div>
</template>

<script>
import VideoItemList from "@/components-depository/common/infinite-scroll/VideoItemList";
import Pagination from "@/components/Pagination";
import VscMixins from "@/mixins/vsc-mixins";
import FrameMixins from "@/mixins/frame-mixins";

export default {
  name: "VideoRecommendedFrame",
  components: {
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
    FrameMixins.VideoRecommended,
    VscMixins.Pagination
  ],
  mounted() {
    console.log(this.$options.name + " mounted.");
  }
};
</script>

<style lang="scss" scoped></style>
