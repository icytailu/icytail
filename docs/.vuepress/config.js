module.exports = {
  head: [["link", { rel: "icon", href: "/favicon.ico" }]], //被注入页面 HTML <head> 额外的标签
  title: "Icy Tail",
  description:
    "你所面临的问题，基本上是大家都会面对的问题，所以，你在面对的不仅仅是一个问题，更是一次次机遇，趁此良机，请你乘胜追击。",
  displayAllHeaders: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "article", link: "/article/" },
      { text: "GitHub", link: "https://github.com/icytailu" }
    ],
    sidebar: {
      "/article/": ["", "html", "css", "typescript"],
      "/": ["", "/article/"],
      // docs文件夹下面的article文件夹 文档中md文件 书写的位置(命名随意)
      "/article/": [
        {
          title: "前端规范~",
          children: [
            "/article/front-end/html", // 以docs为根目录来查找文件
            // 上面地址查找的是：docs>article>front-end>html.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
            "/article/front-end/css",
            "/article/front-end/js"
          ]
        },
        {
          title: "测试哦~",
          children: ["/article/test/test"]
        }
      ]
    }
  }
};
