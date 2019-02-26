# Vue 风格

> 主要参考[vue 官网风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

## 目录

> 轻 view，重 component

- 组件名称以 `-` 分割：`aic-loading.vue`

- 显示页面用大驼峰命名：`GoodsDetail.vue`

```js
// 项目名称缩写（艺投链 => aic）
|   |———components    // 组件
|   |   |———aic-loading.vue   // loading组件
|   |   |———aic-list.vue   // list组件
|   |———view     // UI层(原则：轻view，重component)
|   |   |———Home.vue   // 首页
|   |   |———GoodsDetail.vue   // 商品详情页
```

## Prop 定义

Prop 定义应该尽量详细。

```js
props: {
  status: String;
}
```
