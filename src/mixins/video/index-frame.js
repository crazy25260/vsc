import { loadIndexModel } from "@/api/data/index-model";

const VideoIndex = {
  data() {
    return {
      frame_name: "VideoIndex",
      brand_model: {},
      carousel_model: [],
      nav_model: []
    };
  },
  created() {
    if (!this.$store.state.frame_pool.get(this.frame_name)) {
      this.$store.state.frame_pool.set(this.frame_name, {
        frame_name: this.frame_name,
        nav_changed_binded: false
      });
    }

    loadIndexModel().then(r => this.renderIndex(r));
    this.$store.state.path_trace = [];
    this.$store.state.path_trace.push({
      path: this.$router.currentRoute.path,
      name: "首页"
    });
  },
  methods: {
    renderIndex(r) {
      let indexModel = r.data;
      this.brand_model = indexModel.brand_model;
      this.carousel_model = indexModel.carousel_pics;
      this.nav_model = indexModel.nav_model;

      this.$store.commit("init", {
        site_infos: [
          {
            title: "VSC",
            brand: "vsc",
            domain: "localhost"
          }
        ],
        nav_model: this.nav_model
      });
    }
  }
};

export default VideoIndex;
