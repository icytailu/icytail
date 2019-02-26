module.exports = {
  head: [["link", { rel: "mask-icon", href: "/favicon.svg" }]], //被注入页面 HTML <head> 额外的标签
  title: "Icy Tail",
  description:
    "你所面临的问题，基本上是大家都会面对的问题，所以，你在面对的不仅仅是一个问题，更是一次次机遇，趁此良机，请你乘胜追击。",
  displayAllHeaders: true,
  themeConfig: {
    sidebar: {
      "/article/": ["", "html", "css", "typescript"],
      "/": ["", "/article/"],
      // docs文件夹下面的article文件夹 文档中md文件 书写的位置(命名随意)
      "/article/": [
        {
          title: "团队规范",
          children: [
            "/article/team-standard/list",
            "/article/team-standard/html", // 以docs为根目录来查找文件
            // 上面地址查找的是：docs>article>front-end>html.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
            "/article/team-standard/css",
            "/article/team-standard/js"
          ]
        },
        {
          title: "前端",
          children: ["/article/front-end/ES6"]
        },
        {
          title: "Vue",
          children: ["/article/vue-project/vue-standard","/article/vue-project/Vue工具"]
        },
        {
          title: "效率",
          children: [
            "/article/effect/Mac软件",
            "/article/effect/最佳实践"
          ]
        },
        {
          title: "TypeScript",
          children: [
            "/article/typescript/item",
            "/article/typescript/typescript基础"
          ]
        }
      ]
    }
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: "./components"
      }
    ]
  ]
};
