export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/discovery/index",
    "pages/radio/index",
    "pages/mine/index",
  ],

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },

  tabBar: {
    color: "#94a3b8",
    selectedColor: "#1e293b",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./static/tabbarIcons/index.png",
        selectedIconPath: "./static/tabbarIcons/index_selected.png",
      },
      {
        pagePath: "pages/discovery/index",
        text: "发现",
        iconPath: "./static/tabbarIcons/discovery.png",
        selectedIconPath: "./static/tabbarIcons/discovery_selected.png",
      },
      {
        pagePath: "pages/radio/index",
        text: "收音机",
        iconPath: "./static/tabbarIcons/radio.png",
        selectedIconPath: "./static/tabbarIcons/radio_selected.png",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "./static/tabbarIcons/mine.png",
        selectedIconPath: "./static/tabbarIcons/mine_selected.png",
      },
    ],
  },
});
