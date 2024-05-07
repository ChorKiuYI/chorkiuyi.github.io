import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "前端基础",
      icon: "laptop-code",
      prefix: "base/",
      // link: "es6/",
      children: "structure",
    },
    // {
    //   text: "ES6",
    //   icon: "laptop-code",
    //   prefix: "es6/",
    //   link: "es6/",
    //   children: "structure",
    // },
    {
      text: "浏览器以及网络相关",
      icon: "laptop-code",
      prefix: "browser/",
      link: "browser/",
      children: "structure",
    },
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "Docs",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    // },
  ],
});
