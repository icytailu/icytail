# HTML 规范

## 代码风格

### 标签

1、标签名必须使用小写字母。

2、HTML 标签的使用应该遵循标签的语义。

`header`

> 通常被放置在页面或者页面中某个区块元素的顶部，包含整个页面或者区块的标题、简介等信息，起到引导与导航的作用。

`nav`

> 表示页面的导航，可以通过导航连接到网站的其他页面，或者当前页面的其它部分。

`aside`

> 所包含的内容不是页面的主要内容、具有独立性，是对页面的补充。

`article`

> 表示包含于一个文档、页面、应用程序或网站中的一段独立的内容，可以被独立的发布或者重新使用文章标记标签。

`section`

> 是一个主题性的内容分组，通常用于对页面进行分块或者对文章等进行分段

`footer`

> 一般被放置在页面或者页面中某个区块的底部，包含版权信息、联系方式等信息。

`p` 段落

`h1~h6` 标题

`span` 文字

`i` 包裹 icon

应用案例

```html
<!-- 导航 -->
<header class="nav-wrapper hide-xs ">
  <nav data-flex="row main-between cross-center">
    <a href="#firstPage"> <i class="logo icon-logo"></i> </a>
    <ul data-flex="row cross-center" class="nav fcfff fs16">
      <li class="nav-item"><a href="#firstPage" class="op10">首页</a></li>
      <li class="nav-item"><a href="#secondPage">服务</a></li>
      <li class="nav-item"><a href="#3rdPage">案例展示</a></li>
      <li class="nav-item"><a href="#4thPage">解决方案</a></li>
      <li class="nav-item"><a href="#5thPage">微信开发</a></li>
      <li class="nav-item"><a href="#6thPage">区块链</a></li>
      <li class="nav-item"><a href="#7thPage">合作伙伴</a></li>
    </ul>
  </nav>
</header>
<article>
  <h1>JavaScript框架</h1>
  <p>Javascript框架是指以Javascript语言为基础搭建的编程框架。</p>
  <section>
    <h2>Vue.js<h2>
    <p>Vue.js是用于构建交互式的Web界面的库</p>
  </section>
  <section>
    <h2>Node.Js<h2>
    <p>Node.js就是运行在服务端的JavaScript</p>
  </section>
</article>
<footer>
  上海拾芳信息科技有限公司 沪ICP备17051047号-2
</footer>
```

## HTML5 模板

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="description" content="网站描述" />
    <meta name="keywords" content="网站搜索关键词" />
    <meta name="robots" content="index,follow" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0,
      minimum-scale=1.0,maximum-scale=1.0,
      user-scalable=no"
    />
    <meta name="renderer" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="msapplication-tap-highlight" content="no" />

    <title>网站标题</title>
    <!-- 网站icon -->
    <link rel="shortcut icon" href="./img/favicon.png" type="image/png" />
    <!-- 只允许有一个css -->
    <link rel="stylesheet" href="./css/index.css" />
  </head>
  <body>
    <!-- 只允许有一个js -->
    <script src="./js/index.js"></script>
  </body>
</html>
```
