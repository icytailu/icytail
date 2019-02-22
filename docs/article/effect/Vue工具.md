# Vue 插件

main.js

## Vconsole

> 一个轻量、可拓展、针对手机网页的前端开发者调试面板。

[项目地址](https://github.com/Tencent/vConsole/blob/dev/README_CN.md)

## vue-lazyload

> 图片懒加载

[使用方法](https://segmentfault.com/a/1190000014928116)

[文档](https://github.com/hilongjw/vue-lazyload)

## fastclick

> fastclick 解决移动端 click 事件 300ms 延迟

使用方式：

在 main.js 中引入，并绑定到 body

```js
import fastclick from "fastclick";

fastclick.attach(document.body);
```

```js
import VueTouch from "vue-touch";
import VueLazyLoad from "vue-lazyload";
import Vconsole from "vconsole";
import fastclick from "fastclick";
```
