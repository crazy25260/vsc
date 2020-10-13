<template>
  <div>
    <BreadCrumb></BreadCrumb>
    <BlogCardList
      :paddingTop="with_carousel ? 1.5 : 0.5"
      :blogCards="list_model"
      @video-cover-click="onVideoCoverClick"
    ></BlogCardList>
    <pagination v-model="infoPagination" :page-count="3" @input="onPageChange">
    </pagination>
  </div>
</template>

<script>
import BlogCardList from "@/components-depository/common/infinite-scroll/BlogCardList";
import BreadCrumb from "@/components-depository/common/BreadCrumb";
import Pagination from "@/components/Pagination";

import VscMixins from "@/mixins/vsc-mixins";
import FrameMixins from "@/mixins/frame-mixins";

export default {
  name: "SimpleVideoListFrame",
  components: {
    BlogCardList,
    BreadCrumb,
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
  ],
  methods: {
    onPageChange(nav_id, item) {
      this.onLoadPage(nav_id, item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
