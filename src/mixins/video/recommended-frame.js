import { loadCardListModel, loadIndexModel } from "@/api/data/index-model";

const VideoRecommended = {
  data() {
    return {
      list_model: [],
      page_count: { page_num: 0, page_item_num: 0 }
    };
  },
  created() {
    loadIndexModel().then(r => this.renderRecommendedContent(r));
    this.$eventBus.$on("more-data", p => {
      if (this.list_model) {
        //这里最好用箭头函数，不然this指向有问题
        this.list_model.push({
          cover_image: require("@/assets/img/bg5.jpg"),
          cover_title: "push",
          cover_desc: "push",
          cover_title_minor: "push",
          cover_time: "2020-07-14 09:10:12"
        });
      }
    });
  },
  methods: {
    renderRecommendedContent(r) {
      let recommendedModel = r.recommended_model;
      this.renderList(recommendedModel);
      this.$emit("rendered", this.$options.name);
    },
    renderList(r) {
      this.list_model = r.video_list;
      this.page_count = r.page_count;
    },
    onVideoCoverClick(params) {
      this.$store.commit("navigate", {
        router: this.$router,
        path_name: "simple_play",
        data: params.card_data
      });
    },
    onLoadPage(cate, page) {
      loadCardListModel(cate.id, page).then(r => {
        this.renderList(r);
        this.$vscCommon.scrollToTop();
        this.setPage(page);
      });
    }
  }
};

export default VideoRecommended;
