import { vsc_common } from "@/api/vsc-common";
// 引入虚拟资源池
// 视频池
import videoPool from "@/mock/station/video/mockVideoPool";
// 视频封面池
import mockVideoCoverPool from "@/mock/station/video/mockVideoCoverPool";

let videoCoverPool = mockVideoCoverPool.videoCoverPool;
let SimpleVideoCardList = mockVideoCoverPool.SimpleVideoCardList;
let SimpleVideoCardList2 = mockVideoCoverPool.SimpleVideoCardList2;
let SimpleVideoCardList3 = mockVideoCoverPool.SimpleVideoCardList3;
let SimpleVideoCardList4 = mockVideoCoverPool.SimpleVideoCardList4;
let SimpleVideoCardList5 = mockVideoCoverPool.SimpleVideoCardList5;

// 首页接口模型内容
let SimpleVideoIndexData = {
  brand_model: { name: "VSC视频" },
  carousel_pics: [
    {
      name: "pic1",
      id: "5",
      src: "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel1.jpg"
    },
    {
      name: "pic2",
      id: "6",
      src: "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel2.jpg"
    },
    {
      name: "pic3",
      id: "7",
      src: "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel3.jpg"
    },
    {
      name: "pic4",
      id: "8",
      src: "http://media.meyho.cn/image/2020/vsc/sample/carousel/carousel4.jpg"
    }
  ],
  nav_model: {
    nav_categories: [
      { id: "30", name: "推荐", path: "/simple", path_name: "simple-index" },
      {
        id: "31",
        name: "电影",
        path: "/simple/list",
        path_name: "simple_list"
      },
      {
        id: "32",
        name: "电视",
        path: "/simple/list",
        path_name: "simple_list"
      },
      {
        id: "33",
        name: "模特",
        path: "/simple/list",
        path_name: "simple_list"
      },
      { id: "34", name: "专题", path: "/simple/list", path_name: "simple_list" }
    ],
    nav_index: 0
  },
  recommended_model: {
    video_list: SimpleVideoCardList,
    page_count: {
      page_num:
        SimpleVideoCardList.length / 20 +
        (SimpleVideoCardList.length % 20 > 0 ? 1 : 0),
      page_item_num: SimpleVideoCardList.length
    }
  }
};

let SimpleVideoPlayData = {
  play_video: {
    video_name: "测试视频1",
    thumbnail: "http://media.meyho.cn/image/2020/vsc/sample/250kgmodel.png",
    routes: [
      {
        route_url:
          "http://media.meyho.cn/video/2020/vsc/sample/250kgmodel/250kgmodel.m3u8",
        route_name: "俄罗斯线路",
        route_desc: "480p"
      },
      {
        route_url:
          "http://media.meyho.cn/video/2020/vsc/sample/250kgmodel/250kgmodel.m3u8",
        route_name: "香港线路",
        route_desc: "480p"
      }
    ]
  }
};

let SimpleVideoRelatedData = {
  related_model: {
    related_list: [
      videoCoverPool[0],
      videoCoverPool[1],
      videoCoverPool[2],
      videoCoverPool[3],
      videoCoverPool[4],
      videoCoverPool[5],
      videoCoverPool[6],
      videoCoverPool[7]
    ],
    comment:
      "这里是评论的相关内容，具体规范尚未制定，当前数据仅供参考。 \n" +
      "\n" +
      "一楼评论区，二楼评论，三楼评论，四楼评论，五楼评论，六楼评论，七楼评论，八楼评论，九楼评论，十楼评论。",
    tags: ["时尚", "娱乐", "院线大片", "文艺片", "豆瓣高分", "周星驰"]
  }
};

let mockData = {
  "get|/api/model/front/index": option => {
    return SimpleVideoIndexData;
  },
  "get|/api/model/front/play": option => {
    console.log("get|/api/model/front/play==>" + JSON.stringify(option));
    let video_id = "999";
    // let cate_id = vsc_common.getUrlKey("cate_id", option.url);
    if ("/api/model/front/play?" !== option.url) {
      video_id = vsc_common.getUrlKey("video_id", option.url);
    }

    let video = SimpleVideoPlayData;

    let cate_id = "30";
    for (let index = 0; index < videoPool.length; index++) {
      if (videoPool[index].video_id === video_id) {
        video = videoPool[index];
        break;
      }
    }

    if (video.cate_id) {
      cate_id = video.cate_id;
    }

    let cardList = SimpleVideoCardList;
    switch (cate_id) {
      case "31":
        cardList = SimpleVideoCardList2;
        break;
      case "32":
        cardList = SimpleVideoCardList3;
        break;
      case "33":
        cardList = SimpleVideoCardList4;
        break;
      case "34":
        cardList = SimpleVideoCardList5;
        break;
    }

    return {
      error_code: "0",
      error_desc: "success",
      play_video: video,
      video_related: {
        related_video_covers: cardList
      }
    };
  },
  "get|/api/model/related": option => {
    return {
      status: 200,
      message: "success",
      data: SimpleVideoRelatedData
    };
  },
  "get|/api/model/front/video_list": option => {
    let cate_id = "30";
    let page = "1";
    if ("/api/model/video_list?" !== option.url) {
      cate_id = vsc_common.getUrlKey("cate_id", option.url);
      page = vsc_common.getUrlKey("page", option.url);
    }

    let cardList = SimpleVideoCardList;
    switch (cate_id) {
      case "31":
        cardList = SimpleVideoCardList2;
        break;
      case "32":
        cardList = SimpleVideoCardList3;
        break;
      case "33":
        cardList = SimpleVideoCardList4;
        break;
      case "34":
        cardList = SimpleVideoCardList5;
        break;
    }

    // 默认首页的第二页的内容。
    if (page === "2") {
      cardList = SimpleVideoCardList2;
    }

    if (page === "3") {
      cardList = SimpleVideoCardList3;
    }

    return {
      video_list: cardList,
      page_count: { page_num: 3, page_item_num: 30 }
    };
  }
};

let exportData = {};

exportData = mockData;

export default exportData;
