# ES6+

## let 和 const

> 常量用 const 变量用 let

```js
const goodsList = [];
let pageLoading = true;
pageLoading = false;
```

## 模板字符串

```js
const city = "上海";
const address = `${city} 九亭`;
```

## 箭头函数

```js
const getUser = function() {
  // ...
};
const getUser = () => {
  // ...
};
```

注意点：

1.尽量不要使用箭头函数定义对象的方法

```js
const user = {
  age: 22,
  getAge: () => console.log(this.age)
};
user.getAge(); //  undefined
```

2.尽量不要使用箭头函数定义原型方法

```js
function Foo() {
  this.value = 1;
}
Foo.prototype.getValue = () => console.log(this.value);
let foo = new Foo();
foo.getValue(); // undefined
```

3.作为事件的回调函数 this 的指向为 window

```js
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log(this === window); // => true
  this.innerHTML = "Clicked button";
});
```

## 解构赋值

### 对象的解构赋值

```js
// 提取 JSON 数据
const goodsList = {
  id: 66,
  status: "OK",
  imgs: ["bc.png", "icon.png"]
};
let { id, imgs } = goodsList;
// id 66
// imgs  ["bc.png", "icon.png"]
```
