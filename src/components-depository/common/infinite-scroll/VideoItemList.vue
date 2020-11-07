<template>
  <div
    class="scroll-wrapper"
    ref="blog_card_list"
    :class="{ 'index-list': isIndex }"
  >
    <div
      class="md-layout md-gutter infinite-list-wrapper"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-immediate="false"
      infinite-scroll-distance="400"
      ref="infinite_list"
    >
      <div class="list-space"></div>
      <div
        v-for="(videoCover, index) in videoItems"
        :key="index"
        class="md-layout-item md-small-size-100 md-medium-size-25 md-large-size-20 md-xlarge-size-15"
      >
        <blog-card
          card-plain
          :shadow-normal="false"
          :no-colored-shadow="false"
          :card-image="videoCover.cover_image"
          @card-click="onCardClicked"
          :card_data="videoCover"
          :top_space="paddingTop"
        >
          <template slot="cardTitleHeader">
            {{ videoCover.cover_title_minor }}
          </template>
          <template slot="cardContent">
            <h6 class="card-category text-info">
              添加时间： {{ videoCover.cover_time }}
            </h6>
            <h4 class="card-title">
              <a href="javascript:void(0)">{{ videoCover.cover_title }}</a>
            </h4>
            <p class="card-description">
              {{ videoCover.cover_desc }}
              <a href="javascript:void(0)">更多</a>
            </p>
          </template>
        </blog-card>
      </div>
    </div>
  </div>
</template>

<script>
import { BlogCard } from "@/components";
export default {
  name: "BlogCardList",
  components: {
    BlogCard
  },
  props: {
    paddingTop: {
      type: Number,
      default: 0.5
    },
    videoItems: {
      type: Array,
      default: function() {
        return [];
      }
    },
    isIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      category: "0",
      page_num: 1,
      loading: false,
      noMore: false
    };
  },
  computed: {
    busy() {
      // 第一次达加载完毕后，滚动条，应该回归到顶部。--  这个体验需要优化。
      return this.videoItems.length >= 10;
    },
    contentSpace() {
      console.log("11111:" + this.$refs.blog_card_list.clientWidth);
      console.log("22222:" + this.$refs.infinite_list.clientWidth);
      let space = this.$refs.blog_card_list.clientWidth - this.$refs.infinite_list.clientWidth;
      return space;
    }
  },
  mounted() {
    console.log("00000:" + this.contentSpace);
  },
  methods: {
    loadMore() {
      this.$eventBus.$emit("more-data");
    },
    onCardClicked(params) {
      console.log("1111111111==>" + JSON.stringify(params));
      this.$store.commit("setCurrentVideoData", params.card_data);
      this.$emit("video-cover-click", params);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout .md-gutter {
  margin-right: 0;
  margin-left: 0;
}

.scroll-wrapper {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.index-list {
  border: 2px solid red;
}

.list-space {
  background-color: yellow;
  width: 100%;
}
</style>
