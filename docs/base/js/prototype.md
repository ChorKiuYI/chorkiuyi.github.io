---
title: 对象原型prototype
icon: circle-info
---
## 对象
### 语法
对象可以通过两种形式定义：声明（文字）形式和构造形式。
1. 对象的文字语法大概是这样：
```js
var myObj = {     
    key: value     
    // ... 
};
```
2. 构造形式大概是这样：
```js
var myObj = new Object(); 
myObj.key = value;
```

### 类型
对象是JS的基础，JS共有八种数据类型
- String
- Number
- Boolean
- Null
- undefined
- OBject
- BigInt
- Symbol

检验数据类型：
typeof instanceof Object.prototype.toString
使用方法：
```js
var strPrimitive = "I am a string";  typeof strPrimitive; // "string"  
strPrimitive instanceof String; // false 
 
var strObject = new String( "I am a string" );  
typeof strObject; // "object" 
strObject instanceof String; // true 
 
// 检查 sub-type 对象 
Object.prototype.toString.call( strObject ); // [object String]

```

### 内容
对象的内容是由一些存储在特定命名位置的（任意类型的）值组成的， 我们称之为属性。
```js
var myObject = {     
    a: 2 
};  
myObject.a; // 2 
myObject["a"]; // 2
```
- .a 语法通 常被称为“属性访问”
- ["a"] 语法通常被称为“键访问”

### 复制
浅拷贝和深拷贝

#### 浅拷贝
##### JSON序列化
对于 JSON 安全（也就是说可以被序列化为一个 JSON 字符串并且可以根据这个字符串解 析出一个结构和值完全一样的对象）的对象来说，有一种巧妙的复制方法
```js
var newObj = JSON.parse( JSON.stringify( someObj ) );
```
##### Object.assign(..)
ES6 定义了 Object.assign(..) 方 法来实现浅复制。Object.assign(..) 方法的第一个参数是目标对象，之后还可以跟一个 或多个源对象。它会遍历一个或多个源对象的所有可枚举（enumerable，参见下面的代码） 的自有键（owned key，很快会介绍）并把它们复制（使用 = 操作符赋值）到目标对象，最 后返回目标对象
```js
var newObj = Object.assign( {}, myObject ); 
 
newObj.a; // 2 
newObj.b === anotherObject; // true  
newObj.c === anotherArray; // true  
newObj.d === anotherFunction; // true

```