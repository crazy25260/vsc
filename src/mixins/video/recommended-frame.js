import { loadCardListModel, loadIndexModel } from "@/api/data/index-model";

const VideoRecommended = {
  data() {
    return {
      frame_name: "VideoIndex",
      list_model: []
    };
  },
  created() {
    if (!this.$store.state.frame_pool.get(this.frame_name)) {
      this.$store.state.frame_pool.set(this.frame_name, {
        frame_name: this.frame_name,
        nav_changed_binded: false
      });
    }

    loadIndexModel().then(r => this.renderRecommendedContent(r));
    this.$store.state.path_trace = [];
    this.$store.state.path_trace.push({
      path: this.$router.currentRoute.path,
      name: "首页"
    });
    this.$eventBus.$on("more-data", p => {
      //这里最好用箭头函数，不然this指向有问题
      this.list_model.push({
        thumbPic: require("@/assets/img/bg5.jpg"),
        name: "push",
        desc: "push",
        cardTitleHeader: "push",
        pubTime: "2020-07-14 09:10:12"
      });
    });
  },
  methods: {
    renderRecommendedContent(r) {
      let indexModel = r.data;
      this.list_model = indexModel.index_list;
    },
    renderList(r) {
      this.list_model = r.data;
    },
    onVideoCoverClick(params) {
      this.$store.commit("navigate", {
        router: this.$router,
        path_name: "simple_play",
        data: params.card_data
      });
    },
    onLoadPage(cate_id, page) {
      loadCardListModel(cate_id, page).then(r => {
        this.renderList(r);
        this.$vscCommon.scrollToTop();
        this.setPage(page);
      });
    }
  }
};

export default VideoRecommended;
