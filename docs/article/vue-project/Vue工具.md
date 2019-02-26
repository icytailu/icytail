# Vue 技巧

> 提升使用 Vue 的快感

[淘宝镜像](https://npm.taobao.org/)

安装 vue-cli

```sh
cnpm install -g @vue/cli
```

vue/cli 配置文件 [参考](https://cli.vuejs.org/zh/config/)

```js
// 在根目录创建vue.config.js
module.exports = {
  // 选项...
  filenameHashing: false
};
```

## 优雅的引入组件

> 举个栗子：vant

```sh
npm i babel-plugin-import -D
```

在.babelrc 中配置 plugin

```json
"plugins": [
    ["import",{"libraryName":"vant","style":true}]
  ]
```

## 全局注册组件

在 components 文件夹下面创建`componentRegister.js`

```js
// @/components/componentRegister.js
import Vue from 'vue'
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase()   string.slice(1)
}
const requireComponent = require.context(
  '.',
  false,
  /\.vue$/
  // 找到components文件夹下以.vue命名的文件
)
export default requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = capitalizeFirstLetter(
    fileName.replace(/^\.\//, '').replace(/\.\w $/, '')
    // 因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

```

在`main.js`中使用

```js
// main.js
import componentRegister from "@/components/componentRegister.js";
new Vue({
  componentRegister
});
```

## Vue 过滤器

> Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。

过滤器可以用在两个地方：

- 双花括号插值
- v-bind 表达式 (2.1.0+ 开始支持)。

过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```vue
<p>{{item.name | truncate(16)}}</p>
```

### 全局注册过滤器

```js
// main.js
import * as filterObj from "@/utils/filter.js";
Object.keys(filterObj).forEach(key => Vue.filter(key, filterObj[key]));
```

### 截取字符串

```js
/**
 *
 * @param {String} text
 * @param {Number} length
 * @param {String} clamp
 *
 */
export function truncate(text, length, clamp) {
  text = text || "";
  clamp = clamp || "...";
  length = length || 30;
  if (text.length <= length) return text;
  var tcText = text.slice(0, length - clamp.length);
  var last = tcText.length - 1;
  while (last > 0 && tcText[last] !== " " && tcText[last] !== clamp[0]) {
    last -= 1;
  }
  // Fix for case when text dont have any `space`
  last = last || length - clamp.length;
  tcText = tcText.slice(0, last);

  return tcText + clamp;
}
```

## Vue 手机网页调试

> 一个轻量、可拓展、针对手机网页的前端开发者调试面板。

[项目地址](https://github.com/Tencent/vConsole/blob/dev/README_CN.md)

## Vue 图片懒加载

> 图片懒加载

安装

```npm
npm i vue-lazyload -D
```

[使用方法](https://segmentfault.com/a/1190000011672452)

[文档](https://github.com/hilongjw/vue-lazyload)

vant 组件使用：

```js
// main.js 引入
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require("./assets/image/img-err.png"),
  loading: require("./assets/image/loading.gif"),
  attempt: 3
});
```

使用：

```html
<!-- :src="item.thumbs[0]" ==> v-lazy="item.thumbs[0]"-->
<img v-lazy="item.thumbs[0]" class="images" />
```

样式：

```css
[lazy="error"] {
  object-fit: scale-down !important;
}

[lazy="loading"] {
  object-fit: scale-down !important;
}
```

## 移动端 click 事件 300ms 延迟

> fastclick 解决移动端 click 事件 300ms 延迟

使用方式：

在 main.js 中引入，并绑定到 body

```js
import fastclick from "fastclick";

fastclick.attach(document.body);
```
