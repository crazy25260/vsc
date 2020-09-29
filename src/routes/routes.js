import Vue from "vue";
import VueRouter from "vue-router";
import MainEntry from "@/layouts/MainEntry";
import StandardIndex from "@/templates/default/mh-tpl-std-0/StandardIndex";

// import SimpleIndex from "@/templates/private/video/porn/simple/SimpleIndex";
// import SimplePlay from "@/templates/private/video/porn/simple/SimplePlay";
// import SimpleList from "@/templates/private/video/porn/simple/SimpleList";

import SimpleIndex from "@/templates/default/mh-tpl-std-video/simple/SimpleIndex";
import SimpleList from "@/templates/default/mh-tpl-std-video/simple/SimpleList";
import SimplePlay from "@/templates/default/mh-tpl-std-video/simple/SimplePlay";
import SimpleLogin from "@/templates/default/mh-tpl-std-video/simple/SimpleLogin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainEntry
  },
  {
    path: "/index",
    name: "index",
    components: { default: StandardIndex }
  },
  {
    path: "/simple",
    name: "simple",
    components: { default: SimpleIndex }
  },
  {
    path: "/simple/list",
    name: "simple_list",
    components: { default: SimpleList }
  },
  {
    path: "/simple/play",
    name: "simple_play",
    components: { default: SimplePlay }
  },
  {
    path: "/login-page",
    name: "login",
    components: { default: SimpleLogin }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 导航路径切换以后，滚动条归顶。 参考资料：https://www.jianshu.com/p/84b7647a1e03
router.afterEach((to, from) => {
  window.pageYOffset = 0;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

export default router;
