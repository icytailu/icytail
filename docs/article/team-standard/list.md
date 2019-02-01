# 目录规范

文件资源命名

- **文件名不得含有空格**

- **文件名建议只使用小写字母，不使用大写字母。( 为了醒目，某些说明文件的文件名，可以使用大写字母，比如 README、LICENSE。 )**

- **文件名包含多个单词时，单词之间建议使用半角的连词线 ( - ) 分隔。**

[gulp 模板](https://github.com/icytailu/gulp-tmp)

## 简单页面

```js
.
└── src
    ├── css
    │   ├── base
    │   │   ├── index.styl
    │   ├── detail
    │   │   ├── index.styl
    │   ├── index.styl
    │   └── lib
    │       ├── index.styl
    ├── img
    ├── js
    │   ├── base
    │   │   └── jquery-3.3.1.min.js
    │   ├── common
    │   │   ├── jquery.lazyload.min.js
    │   └── index.js
    └── view
        ├── concat
        │   ├── concat.html
        │   └── concat.js
        └── list
            ├── list.html
            └── list.js
    ├── index.html
├── README.md
├── gulpfile.js
├── .gitignore
├── package.json
```

## vue 单页应用

### vue-cli 3.X

```sh
 npm i -g @vue/cli
```

1、使用图形界面操作

```sh
vue ui
```

2、默认型

```sh
vue create vue-project
```

选择模板 **空格选择，回车确定**

```sh
Vue CLI v3.3.0
? Please pick a preset:
  project-tpl (vue-router, stylus, babel, eslint)
  default (babel, eslint)
❯ Manually select features  # 选择这个
```

选择应用

```sh
Vue CLI v3.3.0
? Please pick a preset: Manually select features
? Check the features needed for your project:
 ◉ Babel # 选择这个 用空格选择
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router # 选择这个
 ◯ Vuex
 ◉ CSS Pre-processors # 选择这个
❯◉ Linter / Formatter # 选择这个
 ◯ Unit Testing
 ◯ E2E Testing
```

配置

```sh
Vue CLI v3.3.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Route
r, CSS Pre-processors, Linter
? Use history mode for router? (Requires proper server set
up for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS
Modules are supported by default): Stylus # 选择 stylus
? Pick a linter / formatter config: Prettier # 选择 Prettier
? Pick additional lint features: (Press <space> to select,
 <a> to toggle all, <i> to invert selection)Lint on save # 选择 on save
? Where do you prefer placing config for Babel, PostCSS,
ESLint, etc.? In dedicated config files # 选择 In dedicated config files
? Save this as a preset for future projects? (y/N) y # 输入y
```

项目目录

```js
.
└───src
│   │   app.vue    // 主页面
│   │   main.js    // 主入口
|   |   router.js  // 所有路由
│   │
│   |———assets    // css、image、svg等资源
│   |   |———stylus   // 所有sass资源
│   |   |———img   // image图标库
|   |
|   |———components    // 组件
|   |
|   |———view     // UI层(原则：轻view，重component)
|   |
|   |———api    // 接口层
|   |   | index.js   // 所有接口
|   |   | http.js  // axios二次封装
|   |   | jwtStatus.js  // jwt状态
|   |
|   |———utils     // 工具层
|   |   | config.example.js// 配置文件，包括常量配置
|   |   | config.js// 配置文件，包括常量配置
|   |   | filters.js  // 所有Vue过滤
|
└───public         // 公用文件，不经过webpack处理
│   │   favicon.ico
│   │   index.html
|   README.md
|   babel.config.js
|   package.json
|   postcss.config.js
|   .browserslistrc
|   .editorconfig
|   .eslintrc.js
|   .gitignore
```
