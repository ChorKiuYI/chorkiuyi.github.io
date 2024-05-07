---
title: 7. 对象的扩展    
icon: object-group
order: 7
category:
  - Guide
tag:
  - 对象的扩展  
---

# 对象扩展

## 属性名表达式

属性名表达式对于拿去有规律的对象挺有用的，意味着属性可以是一个变量

```js
let obj = {}
obj['demo'+'1'] = '123'

console.log(obj.demo1) // '123'

let name = 'demo1Name'
obj[name] = 'demo1的名称'

// 此时的obj
// {demo1: '123', demo1Name: 'demo1的名称'}
```

## Object.getOwnPropertyDescriptor

Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。

```js
let obj1 = { name:'小明',age:12 }
let obj2 = { name:'小红',age:11 }
Object.freeze(obj2) // 冻结
Object.getOwnPropertyDescriptor(obj1,'name')
// {value: '小明', writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(obj2,'name')
// {value: '小红', writable: false, enumerable: true, configurable: false}

```

## 遍历对象

| 方法                                | 作用                                                                         |
| --------------------------------- | -------------------------------------------------------------------------- |
| for...in                          | `for...in`循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）                                 |
| Object.keys(obj)                  | `Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名                 |
| Object.getOwnPropertyNames(obj)   | `Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名 |
| Object.getOwnPropertySymbols(obj) | `Object.getOwnPropertySymbols`返回一个数组，包含对象自身的所有 Symbol 属性的键名                |
| Reflect.ownKeys(obj)              | `Reflect.ownKeys`返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举      |

## super关键字

关键字super，指向当前对象的原型对象
注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。

Object.setPrototypeOf():用来设置一个对象的原型对象（prototype），返回参数对象本身。
Object.getPrototypeOf():用于读取一个对象的原型对象（prototype）

```js
const proto = {
  foo: 'proto内容'
};

const obj1 = {
  foo: 'super-obj1',
//   目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。 也就是只能下面这样子写方法
  find() {
    // 通过super.foo引用了原型对象proto的foo属性
    return super.foo;
  }
};
const obj2 = {
  foo: 'this-obj2',
  find() {
    return this.foo;
  }
};

obj1.foo // 'super-obj1'
obj2.foo // 'this-obj2'
Object.setPrototypeOf(obj1, proto);
Object.setPrototypeOf(obj2, proto);
obj1.find() // 'proto内容'
obj2.find() // 'this-obj2'

```

# 对象新增方法

## Object.is()

Object.is() 用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
比较方法
只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。

| 方法          | 缺点                 | 例子                                                      |
| ----------- | ------------------ | ------------------------------------------------------- |
| ==          | 会自动转换数据类型，不能保证完全相等 | 1=='1' // true                                          |
| ===         | 不能判断NaN，+0===-0    | NaN === NaN //false<br>+0===-0 // true                  |
| Object.is() | 两个值是否严格相等          | Object.is(+0,-0) //false <br>Object.is(NaN,NaN) // true |

## Object.assign()

Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）

### 基础用法

```js
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

### 常用注意

#### （1）Object.assign()浅拷贝,复杂数据类型还是公用的

```js
const obj1 = {a:{b:1},c:1}
const obj2 = Object.assign({},obj1)
// 复杂数据类型
obj1.a.b = 2
obj2.a.b // 2 
// 简单数据类型
obj1.c = 'hello'
obj2.c // 1
```

#### （2）同名属性替换 重复的话就会覆盖

```js
var target = { a:1,b:2 }
var source1 = { b:3,c:4 }
var source2 = { c:5,d:8 }
Object.assign(target,source1,source2)
console.log(target); // {a: 1, b: 3, c: 5, d: 8}
```

### Object.assign()常见用途

*   为对象添加属性
*   为对象添加方法
*   克隆对象
*   合并多个对象
*   为属性制定默认值

## Object.getOwnPropertyDescriptors()

`Object.getOwnPropertyDescriptor()`方法会返回**某个对象属性**的描述对象（descriptor）。
`Object.getOwnPropertyDescriptors()`方法，返回指定对象**所有自身属性**（非继承属性）的描述对象。

```js
const obj = {
    a:'123',
    fn(){
        return 'abc'
    }
}

Object.getOwnPropertyDescriptors(obj)
// {
//     "a": {
//         "value": "123",
//         "writable": true,
//         "enumerable": true,
//         "configurable": true
//     },
//     "fn": {
//         "writable": true,
//         "enumerable": true,
//         "configurable": true
//     }
// }
```

### 用处1：Object.getOwnPropertyDescriptors()方法配合Object.defineProperties()方法，就可以实现正确拷贝（能拷贝target对象的属性，赋值方法、取值方法）

该方法的引入目的，主要是为了解决`Object.assign()`无法正确拷贝get属性和set属性的问题。
因为Object.assign方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法(如下图)
<!-- ![Alt text转存失败，建议直接上传图片文件](<转存失败，建议直接上传图片文件 image-1.png>)

![Alt text转存失败，建议直接上传图片文件](<转存失败，建议直接上传图片文件 image.png>) -->

首先要知道下面的基本方法作用

*   `Object.assign()`方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
*   `Object.defineProperties()`:在一个对象上定义新的属性或修改现有属性，并返回该对象
*   `Object.getOwnPropertyDescriptors()`:返回指定对象**所有自身属性**（非继承属性）的描述对象

```js
// Object.assign()浅拷贝 
// 缺点：无法正确拷贝get属性和set属性的问题（总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法）
const source = {
  set foo(value) {
    console.log(value);
  }
};

// 只用Object.assign()
const target1 = {};
Object.assign(target1, source);
Object.getOwnPropertyDescriptor(target1, 'foo')
// {
//     "writable": true,
//     "enumerable": true,
//     "value": undefined
//     "configurable": true
// }

```

### 用处2：Object.getOwnPropertyDescriptors()方法配合Object.create()方法，将对象属性克隆到一个新对象。这属于浅拷贝

缺点：依然是浅拷贝

```js
const source = {
  set foo(value) {
    console.log(value);
  }
};
// Object.getOwnPropertyDescriptors()配合Object.defineProperties()
// 缺点：依然是浅拷贝
const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
// Object.getOwnPropertyDescriptors(source) 打印如下
// {
//     "foo": {
//         "enumerable": true,
//         "configurable": true,
//         "get": undefined
//         "set": ƒ foo(value)
//     }
// }

Object.getOwnPropertyDescriptor(target2, 'foo')
// Object.getOwnPropertyDescriptor(target2, 'foo') 打印如下
// {
//     "foo": {
//         "enumerable": true,
//         "configurable": true,
//         "get": undefined
//         "set": ƒ foo(value)
//     }
// }

```

## 原型对象的操作方法

ES5 —— \_\_proto\_\_属性
ES6 ——  Object.setPrototypeOf()、Object.getPrototypeOf()、Object.create()
首先要先了解`__proto__`是干嘛的，有什么用？为什么需要ES6的来替换？后续的方法有什么优点？
首先介绍下面所涉及到的知识点：

1.  \_\_proto\_\_属性：用来读取或设置当前对象的原型对象（prototype）
2.  Object.create（proto,prop）：用于创建一个新对象,使用现有的对象来提供新创建对象的原型对象。

*   proto - 必须,新创建对象的原型对象。
*   prop - 可选,设置属性及属性描述,默认值:undefined。

3.  Object.setPrototypeOf(obj,proto)：与`__proto__`相同，用来设置一个对象的原型对象（prototype），返回参数对象本身。

*   obj：要设置原型对象的对象。（不能是null或undefined）
*   proto：该对象的新原型对象或null，否则抛出TypeError异常。

4.  Object.getPrototypeOf(obj)： 与`Object.setPrototypeOf`方法配套，用于读取一个对象的原型对象。

*   obj：要获取原型对象的对象（不能是null或undefined）

ES5：\_\_proto\_\_属性，设置某对象的原型对象和读取某对象的原型对象

```js
var sourceObj = {
    a:'sObj-aaa',
    b:'sObj-bbb',
    c:'sObj-ccc',
    fn:function(){
        console.log('sObj-fn()')
    }
}
var targetObj = {
    a:'tObj-aaa',
    b:'tObj-bbb',
    d:'tObj-ddd'
}
// __proto__设置当前的原型对象：targetObj的原型对象为sourceObj 
targetObj.__proto__ = sourceObj 
// 上面相当于
targetObj = Object.create(sourceObj)


// 下面验证一下,targetObj能获取
targetObj.c  // 'sObj-ccc'
targetObj.fn() // sObj-fn()
// __proto__ 读取当前的原型对象,原型对象就是
targetObj.__proto__
// { "a": "sObj-aaa", "b": "sObj-bbb", "c": "sObj-ccc",fn: ƒ ()} 

```

ES6：Object.setPrototypeOf()、Object.getPrototypeOf()，设置某对象的原型对象和读取某对象的原型对象

```js
var sourceObj = {
    a:'sObj-aaa',
    b:'sObj-bbb',
    c:'sObj-ccc',
    fn:function(){
        console.log('sObj-fn()')
    }
}
var targetObj = {
    a:'tObj-aaa',
    b:'tObj-bbb',
    d:'tObj-ddd'
}
// 设置某对象的原型对象 这里是设置targetObj的原型对象为sourceObj
Object.setPrototypeOf(targetObj,sourceObj)
// 读取targetObj的原型对象（预测就是sourceObj）
Object.getPrototypeOf(targetObj)
// {a: 'sObj-aaa', b: 'sObj-bbb', c: 'sObj-ccc', fn: ƒ}

```

## Object.keys()，Object.values()，Object.entries()

*   Object.keys(): 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的**键名**
*   Object.values(): 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的**键值**
*   Object.entries(): 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的**键值对数组**
*   Object.fromEntries()：是Object.entries()的逆操作，用于将一个键值对数组转为对象。主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象
    fromEntries

基础用法

```js
var obj = { name:'小明',age:13 }
Object.keys(obj) // ['name', 'age']
Object.values(obj) // ['小明', 13]
Object.entries(obj) // [ ['name', '小明'], ['age', 13] ]

```

for...of + Object.keys配套的Object.values和Object.entries使用

```js
let obj = { a: 1, b: 2, c: 3 };

for(let key of Object.keys(obj)){
  console.log(key)
}
// a
// b
// c

for(let v of Object.values(obj)){
  console.log(v)
}
// 1
// 2
// 3

for (let [key, value] of Object.entries(obj)) {
  console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
  // console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}
// "a": 1
// "b": 2
// "c": 3

```

### Object.fromEntries()

*   Object.entries(): 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的**键值对数组**
*   Object.fromEntries()：是Object.entries()的逆操作，用于将一个键值对数组转为对象。主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象

```js
var obj = { name:'小明',age:13 }
Object.entries(obj) // [ ['name', '小明'], ['age', 13] ]

const obj1 = new Map([['name', '小明'], ['age', 13]])
const obj2 = new Map().set('name','小红').set('age',12)
Object.fromEntries(obj1) // {name: '小明', age: 13}
Object.fromEntries(obj2) // {name: '小红', age: 12}

```

### Object.hasOwn()

JavaScript 对象的属性分成两种：自身的属性和继承的属性。

1.  hasOwnProperty()： 可以判断某个属性是否为原生属性

*   object.hasOwnProperty(property)  object对象 property指定属性名

2.  Object.hasOwn(obj,property)，也可以判断是否为**自身的属性**【ES2022 在Object对象上面新增了一个静态方法】

*   obj: 所要判断的对象
*   property: 属性名

```js
var obj = Object.create({a:1,b:2})
obj.c = 'CCC'

obj.hasOwnProperty('c') // true
obj.hasOwnProperty('a') // false

Object.hasOwn(obj,'c') // true
Object.hasOwn(obj,'a') // false

```

那为什么还要有Object.hasOwn()?
Object.hasOwn()的一个好处是，对于不继承Object.prototype的对象不会报错，而hasOwnProperty()是会报错的。
举个例子：
Object.create(null)返回的对象obj是没有原型的，不继承任何属性，这导致调用obj.hasOwnProperty()会报错，但是Object.hasOwn()就能正确处理这种情况。

```js
const obj = Object.create(null);
Object.hasOwn(obj,'a')  // false
obj.hasOwnProperty('a') // Uncaught TypeError: obj.hasOwnProperty is not a function
```
