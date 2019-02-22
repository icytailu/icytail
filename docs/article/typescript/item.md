# TypeScript 项目

## 编译上下文

> 用来给文件分组，告诉 TypeScript 哪些文件是有效的，哪些是无效的。除了有效文件所携带信息外，编译上下文也包含了有哪些编译选项正在使用。

### tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./built",
    "allowJs": true,
    "target": "es2016",
    "module": "commonjs"
  },
  "include": ["./src/**/*"]
}
```
