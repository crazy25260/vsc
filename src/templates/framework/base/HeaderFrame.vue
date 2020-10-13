<template>
  <div>
    <div class="brand-nav-zone">
      <BrandNavBar
        @slide_drawer_show="$emit('header-msg', 'slide_drawer_show')"
      ></BrandNavBar>
    </div>

    <CarouselNavBar
      @nav-click="
        (index, keyPath) => {
          $emit('header-msg', 'nav-click', { index: index, keyPath: keyPath });
        }
      "
      :current_cate="current_nav"
      ref="carousel_nav"
    ></CarouselNavBar>

    <Carousel v-if="showCarousel" :carousel_pics="carousel_model"></Carousel>
  </div>
</template>

<script>
import BrandNavBar from "@/components-depository/navbar/BrandNavBar";
import CarouselNavBar from "@/components-depository/navbar/CarouselNavBar";
import Carousel from "@/components-depository/carousel/Carousel";
import VscMixins from "@/mixins/vsc-mixins";

export default {
  name: "HeaderFrame",
  components: { Carousel, CarouselNavBar, BrandNavBar },
  mixins: [VscMixins.NavMenu],
  props: {
    showCarousel: {
      type: Boolean,
      default: true
    },
    carousel_model: {
      type: Array,
      default: function() {
        return [
          {
            name: "pic1",
            id: "5",
            src:
              "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel1.jpg"
          },
          {
            name: "pic2",
            id: "2",
            src:
              "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel2.jpg"
          },
          {
            name: "pic3",
            id: "3",
            src:
              "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel3.jpg"
          },
          {
            name: "pic4",
            id: "4",
            src:
              "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel4.jpg"
          }
        ];
      }
    }
  },
  methods: {
    // onSlideDrawerShow() {
    //   console.log("onSlideDrawerShow()->slide_drawer_show");
    //   this.$emit("slide_drawer_show");
    // }
  }
};
</script>

<style lang="scss" scoped></style>
