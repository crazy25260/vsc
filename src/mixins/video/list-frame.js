import { loadCardListModel } from "@/api/data/index-model";

const VideoList = {
  props: {
    cate_id: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      list_model: []
    };
  },
  created() {
    this.list_model = [];
    loadCardListModel(this.current_nav.id, 1).then(r => {
      this.renderList(r);
    });

    this.$eventBus.$on("more-data", p => {
      //这里最好用箭头函数，不然this指向有问题
      this.list_model.push({
        cover_image: require("@/assets/img/bg5.jpg"),
        cover_title: "push",
        cover_desc: "push",
        cover_title_minor: "push",
        cover_time: "2020-07-14 09:10:12"
      });
    });
  },
  methods: {
    renderList(r) {
      console.log("5555555555:" + JSON.stringify(r));
      this.list_model = r;
      this.$emit("rendered", this.$options.name);
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

export default VideoList;
