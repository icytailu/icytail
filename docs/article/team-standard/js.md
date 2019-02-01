# JavaScript 规范

## 变量

> Camel Case 小驼峰式命名法：首字母小写。🌰：userInfo、productList

### 用有意义，可读性好的变量名

```js
var upChainDate = moment().format("YYYY-MM-DD yy:mm:ss");
```

### 使用 ES6 的 const 定义常量

```js
const address = "上海市 松江区 沪亭北路";
```

### 避免重复的描述

```js
// bad
const userInfo = {
  userName: "icyTail",
  userAge: 23
};
// good
const userInfo = {
  name: "icyTail",
  age: 23
};
```

### 使用默认参数而不是短路参数

```js
// bad
function getPrice(price) {
  const price = price || 100;
  // ...
}
// good
function getPrice(price = 100) {
  // ...
}
```

## 函数

**命名方法：** 小驼峰方式 ( 构造函数使用大驼峰命名法 )

**命名规范：** 前缀为动词

| 动词 |                         含义                         |                            返回值 |
| ---- | :--------------------------------------------------: | --------------------------------: |
| can  | 判断是否可执行某个动作 ( 权限 ) 函数返回一个布尔值。 |     true：可执行；false：不可执行 |
| has  |       判断是否含有某个值 函数返回一个布尔值。        | true：含有此值；false：不含有此值 |
| is   |        判断是否为某个值 函数返回一个布尔值。         |              函数返回一个非布尔值 |
| get  |                      获取某个值                      |              函数返回一个非布尔值 |
| set  |                      设置某个值                      |                          无返回值 |

```js
let bLogin = true;
function canBuy() {
  bLogin ? true : false;
}
function hasValue() {
  $("input").val() ? true : false;
}
function isLogin() {
  bLogin ? true : false;
}
function getGoodsList() {
  this.API.getData("goodsList", "", "POST").then(resp => {
    return resp.goodsList;
  });
}
```

### 函数功能的单一性

这是软件功能中最重要的原则之一。

```js
// bad
function emailClients(clients) {
  clients.forEach(client => {
    let clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
// good
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

### 函数名应明确表明其功能

```js
// bad
function addToDate(date, month) {
  // ...
}
const date = new Date();
// It's hard to tell from the function name what is added
addToDate(date, 1);
// good
function addMonthToDate(month, date) {
  // ...
}
const date = new Date();
addMonthToDate(1, date);
```

### 移除重复的代码

```js
// bad
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary();
    const data = {
      expectedSalary
    };
    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach(manager => {
    const expectedSalary = manager.calculateExpectedSalary();
    const data = {
      expectedSalary
    };

    render(data);
  });
}

// good
function showEmployeeList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience
    };

    switch (employee.type) {
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
      case "developer":
        data.githubLink = employee.getGithubLink();
        break;
    }

    render(data);
  });
}
```

### 不要使用 Flag 作为函数参数

这通常意味着函数的功能的单一性已经被破坏。此时应考虑对函数进行再次划分。

```js
// bad
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
// good
function createFile(name) {
  fs.create(name);
}
function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

### 采用函数式编程

```js
// bad
const programmerOutput = [
  {
    name: "Uncle Bobby",
    linesOfCode: 500
  },
  {
    name: "Suzie Q",
    linesOfCode: 1500
  },
  {
    name: "Jimmy Gosling",
    linesOfCode: 150
  },
  {
    name: "Gracie Hopper",
    linesOfCode: 1000
  }
];

let totalOutput = 0;

for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}
// goods
const programmerOutput = [
  {
    name: "Uncle Bobby",
    linesOfCode: 500
  },
  {
    name: "Suzie Q",
    linesOfCode: 1500
  },
  {
    name: "Jimmy Gosling",
    linesOfCode: 150
  },
  {
    name: "Gracie Hopper",
    linesOfCode: 1000
  }
];

const totalOutput = programmerOutput.reduce(
  (totalLines, output) => totalLines + output.linesOfCode,
  0
);
```

### 三元条件判断（if 的快捷方法）

```js
let bLoading = true;
function initPage() {
  bLoading ? true : false;
}
```

### 封装判断条件

```js
// bad
if (fsm.state === "fetching" && isEmpty(listNode)) {
  // ...
}
//good
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === "fetching" && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```

### 避免条件判断

```js
// bad
class Airplane {
  // ...
  getCruisingAltitude() {
    switch (this.type) {
      case "777":
        return this.getMaxAltitude() - this.getPassengerCount();
      case "Air Force One":
        return this.getMaxAltitude();
      case "Cessna":
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}
// good
class Airplane {
  // ...
}

class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
```

### 避免“否定情况”的判断

```js
// bad
function isDOMNodeNotPresent(node) {
  // ...
}

if (!isDOMNodeNotPresent(node)) {
  // ...
}
// good
function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}
```
