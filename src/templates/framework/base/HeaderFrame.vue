<template>
  <div>
    <div ref="fixed_bar" class="md-layout header-frame">
      <div class="md-layout-item md-size-100">
        <BrandNavBar
          @slide_drawer_show="$emit('header-msg', 'slide_drawer_show')"
        ></BrandNavBar>
      </div>
      <div class="md-layout-item">
        <CarouselNavBar
          @nav-click="
            (index, keyPath) => {
              $emit('header-msg', 'nav-click', {
                index: index,
                keyPath: keyPath
              });
            }
          "
          :current_cate="current_nav"
          ref="carousel_nav"
        ></CarouselNavBar>
      </div>
    </div>
    <div :style="headCarousel">
      <Carousel v-if="showCarousel" :carousel_pics="carousel_model"></Carousel>
    </div>
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
      default: false
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
  data() {
    return {
      fixed_height: 0
    };
  },
  computed: {
    carousel_top() {
      return this.$refs.fixed_bar.clientHeight;
    },
    headCarousel() {
      return {
        paddingTop: this.fixed_height + "px"
      };
    }
  },
  mounted() {
    console.log(
      "22222:showCarousel:" + this.showCarousel + ", test:" + this.test
    );
    this.fixed_height = this.carousel_top;
    window.onresize = () => {
      return (() => {
        this.fixed_height = this.carousel_top;
      })();
    };
  }
};
</script>

<style lang="scss" scoped>
.header-frame {
  position: fixed;
  z-index: 1030;
  left: 0;
  right: 0;
  border-radius: 0;
}

.header-fixed {
  position: fixed;
  z-index: 1030;
}
</style>
