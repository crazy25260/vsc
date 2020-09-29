<template>
  <div>
    <div class="brand-nav-zone">
      <BrandNavBar></BrandNavBar>
    </div>

    <CarouselNavBar
      @nav-click="onNavClick"
      :current_cate="current_nav"
      ref="carousel_nav"
    ></CarouselNavBar>

    <Carousel v-if="with_carousel" :carousel_pics="carousel_model"></Carousel>

    <BreadCrumb></BreadCrumb>
    <!--    <InfiniteScroll></InfiniteScroll>-->
    <BlogCardList
      :paddingTop="with_carousel ? 1.5 : 0.5"
      :blogCards="list_model"
      @video-cover-click="onVideoCoverClick"
      :isIndex="false"
    ></BlogCardList>
    <pagination
      v-model="infoPagination"
      :page-count="100"
      @input="onPageChange"
      :withText="true"
      :noArrows="false"
      ref="pagination"
    >
    </pagination>
    <Footer type="white" size="small" background-color="white"></Footer>
  </div>
</template>

<script>
import BlogCardList from "@/components-depository/common/infinite-scroll/BlogCardList";
import BrandNavBar from "@/components-depository/navbar/BrandNavBar";
import CarouselNavBar from "@/components-depository/navbar/CarouselNavBar";
import Carousel from "@/components-depository/carousel/Carousel";
import BreadCrumb from "@/components-depository/common/BreadCrumb";
import Pagination from "@/components/Pagination";
import Footer from "@/components-depository/footer/Footer";

import VscMixins from "@/mixins/vsc-mixins";
import FrameMixins from "@/mixins/frame-mixins";

export default {
  name: "SimpleVideoIndexFrame",
  components: {
    Footer,
    BlogCardList,
    BrandNavBar,
    CarouselNavBar,
    Carousel,
    BreadCrumb,
    Pagination
  },
  props: {
    with_carousel: {
      type: Boolean,
      default: true
    }
  },
  mixins: [VscMixins.NavMenu, VscMixins.Pagination, FrameMixins.VideoIndex],
  methods: {
    onPageChange(item) {
      this.onLoadPage(this.current_nav.id, item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
