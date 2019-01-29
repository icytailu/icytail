# TypeScript

> TypeScript 是 JavaScript 类型的超集，它可以编译成纯 JavaScript。TypeScript 可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。

## 基础

### 布尔值

```typescript
let isLogin: boolean = false;
```

### 数字

```typescript
const price: number = 268;
```

### 字符串

```typescript
let goodsName: string = "清明上河图";
goodsName = "向日葵";
```

### 数组

> 最简单的方法是使用「类型 + 方括号」来表示数组：

```typescript
const indexList: number[] = [1, 2, 4, 6, 3];
// 常用
const goodsList: any[] = [1, "35", { name: "icytail" }];
```

### 空值

> 在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数

```typescript
function printName(name: string): void {
  console.log(name);
}
```

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`：

```typescript
const unusable: void = undefined;
```

### Null 和 Undefined

> `undefined` 类型的变量只能被赋值为 `undefined`，`null` 类型的变量只能被赋值为 `null`。

```typescript
const goods: null = null;
const jwt: undefined = undefined;
```

### 任意值

> 用`any`表示任意类型的值

```typescript
let luckyNum: any = "six";
luckyNum = 6;
```

**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**。

### 未声明类型的变量

> **变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**

```typescript
let nameInfo;
nameInfo = "xin";
nameInfo.setName = "xin";

// 等价于
let nameInfo: any;
nameInfo = "xin";
nameInfo.setName = "xin";
```

### 类型推论

> 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

```typescript
let account = 999;
// 等价于
let account: number = 999;
```

### 联合类型

> 联合类型（Union Types）表示取值可以为多种类型中的一种。

```typescript
let luckyNum: string | number;
luckyNum = "six";
luckyNum = 6;
```

### 访问联合类型的属性或方法

> 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**：

```typescript
function getLength(something: string | number): number {
  return something.length;
}
//类型“string | number”上不存在属性“length”。类型“number”上不存在属性“length”。
```

上例中，`length` 不是 `string` 和 `number` 的共有属性，所以会报错。

访问 `string` 和 `number` 的共有属性是没问题的：

```typescript
function getLength(something: string | number): string {
  return something.toString();
}
```

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```typescript
let luckyNum: string | number;
luckyNum = "six"; // 此时会判定为string
console.log(luckyNum.length); // 3
luckyNum = 6; // 此时会判定为数字
console.log(luckyNum.length); // 编译时报错
```

### 对象的类型——接口

> 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

### 元组 Tuple

> 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

## 进阶
