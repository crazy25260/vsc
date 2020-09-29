const NavMenu = {
  computed: {
    current_nav() {
      if (this.$store.state.nav_model.nav_categories) {
        return this.$store.state.nav_model.nav_categories[
          this.$store.state.nav_model.nav_index
        ];
      }

      return {};
    },
    nav_cates() {
      return this.$store.state.nav_model.nav_categories;
    }
  },
  created() {
    this.$on("nav-changed", (nav_cate, sender_frame) => {
      console.log(
        "nav-changed ==>" +
          JSON.stringify(nav_cate) +
          ", sender_frame:" +
          JSON.stringify(sender_frame) +
          ", this.frame_name:" +
          this.frame_name
      );

      if (this.$router.currentRoute.name === nav_cate.path_name) {
        this.onLoadPage(nav_cate.id, 1);
        return;
      }

      this.$store.commit("navigate", {
        router: this.$router,
        path_name: nav_cate.path_name,
        data: nav_cate.id
      });
    });

    this.$on("frame-changed", (nav_cate, sender_frame) => {
      console.log(
        "frame-changed ==>" +
          JSON.stringify(nav_cate) +
          ", sender_frame:" +
          JSON.stringify(sender_frame) +
          ", this.frame_name:" +
          this.frame_name
      );
      this.$store.commit("navigate", {
        router: this.$router,
        path_name: nav_cate.path_name,
        data: nav_cate.id
      });
    });
  },
  methods: {
    onNavClick(navIndex) {
      let navItem = this.$store.state.nav_model.nav_categories[navIndex];
      console.log("onNavClick to:" + JSON.stringify(navItem));
      console.log("onNavClick from:" + JSON.stringify(this.current_nav));
      console.log("onNavClick frame:" + JSON.stringify(this.frame_name));
      if (this.current_nav.id && this.current_nav.id !== navItem.id) {
        this.$emit("nav-changed", navItem, this.frame_name);
      }

      if (this.$router.currentRoute.name !== navItem.path_name) {
        this.$emit("frame-changed", navItem, this.frame_name);
      }

      this.$store.commit("setCurrentNavCategory", navIndex);
    }
  }
};

export default NavMenu;
