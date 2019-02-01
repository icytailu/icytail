# CSS 规范

## 代码风格

### 命名

1、适用有意义的名词命名

2、class 必须单词全字母小写，单词间以 - 分隔。

### 属性声明顺序

```css
.element {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /** 影响盒模型的放在最前面 **/
  margin: 0 auto;
  padding: 0.2rem;
  width: 2rem;
  height: 1rem;
  border: 1px solid #ddd;
  border-radius: 3px; /** 盒模型 **/
  font-size: 0.24rem;
  color: #333;
  text-align: center;
  line-height: 1em; /** 文本属性 **/
  background-color: #f5f5f5;
  opacity: 1;
  transform: scale(0.5); /** css3放在最后面 **/
}
```

## 小技巧

### 1、图片撑满整个容器，不能变形

```css
.img-filling {
  width: 100%;
  height: 6rem;
}
.img-filling img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 2、图片在不规则容器内居中

```css
.img-center {
  width: 100%;
  height: 6rem;
  position: relative;
}
.img-center img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
```
