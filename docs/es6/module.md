---
title: 12. module模块 
icon: object-group
order: 12
category:
  - Guide
tag:
  - module模块
---


## 介绍

```js
// ES6模块
import { stat, exists, readFile } from 'fs';

export function multiply(x, y) {
  return x * y;
};

// export-default.js
export default function () {
  console.log('foo');
}
```

## export和import
- export命令用于规定模块的对外接口【export default】
- import命令用于输入其他模块提供的功能。

## ES6和CommonJS的区别
- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段
CommonJS 模块使用require()和module.exports，ES6 模块使用import和export