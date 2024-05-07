---
title: 1.Letconst
icon: object-group
order: 1
category:
  - Guide
tag:
  - Letconst
---
专业术语:

- “变量提升”现象，即变量可以在声明之前使用，值为undefined
- 暂时性死区: 在代码块内，使用let命令**声明变量之前，该变量都是不可用的**。这在语法上，称为 `暂时性死区`

## let特点

1. 不存在变量提升
2. 暂时性死区
3. 在相同作用域内，不能重复声明

## 块级作用域

ES5只有全局作用域和函数作用域，没有块级作用域

### 为什么需要块级作用域？？？？？

1. 内层变量可能覆盖外层变量
2. 用来计数的循环变量泄露为全局变量。

### 块级作用域

1. 块级作用域: let实际上为 JavaScript 新增了块级作用域。
2. 块级作用域与函数声明：
   ES6 引入了块级作用域，明确允许在块级作用域之中声明函数,但在块级作用域外不可用，但是，考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

```js
// 证明存在块级作用域——let命令所在的代码块内有效。
{
    var a = 1
    let b = 2
}
console.log(a); // 1
console.log(b); // ReferenceError: b is not defined

// 证明存在块级作用域——for中的let 和 var
for(var i = 0;i<6;i++){
    console.log(`var 定义的参数：${i}`);
}
console.log(i); // 6
for(let j = 0;j<6;j++){
    console.log(`let 定义的参数：${j}`);
}
console.log(j); // ReferenceError: j is not defined



// 例子：每个一秒打印
for(var i = 0;i<6;i++){
    setTimeout(() => { // 延时队列
        console.log(`var 定义的参数：${i}`);  // 执行这个代码的时候，主线程for已经结束执行了
    },i);
}
// var 定义的参数：6
// var 定义的参数：6
// var 定义的参数：6
// var 定义的参数：6
// var 定义的参数：6
// var 定义的参数：6


// 用立即执行函数来解决，这里其实利用了函数作用域
for(var i = 0;i<6;i++){
    (function(i){  //函数作用域
        setTimeout(() => { // 延时队列
            console.log(`var 定义的参数-函数作用域：${i}`);  // 执行这个代码的时候，主线程for已经结束执行了
        });
    })(i)
}
// var 定义的参数-函数作用域：0
// var 定义的参数-函数作用域：1
// var 定义的参数-函数作用域：2
// var 定义的参数-函数作用域：3
// var 定义的参数-函数作用域：4
// var 定义的参数-函数作用域：5

// 用Let解决 因为有块级作用域
for(let j = 0;j<6;j++){
    setTimeout(()=>{
        console.log(`let 定义的参数-块级作用域：${j}`);
    },j)
}
// let 定义的参数-块级作用域：0
// let 定义的参数-块级作用域：1
// let 定义的参数-块级作用域：2
// let 定义的参数-块级作用域：3
// let 定义的参数-块级作用域：4
// let 定义的参数-块级作用域：5


```

## const声明常量（块级作用域有的特点都有）

1. 声明一个只读常量，一旦声明就不能再次更改了

```js
const a = '1111'
// a = '2222' // Assignment to constant variable(常量变量赋值)
console.log(a);
```

2. 如果声明复合类型的数据（对象、数组），因为是复杂数据类型，存储在堆内存，变量保存的是其引用地址，而不是数据本身，所以const声明变量的时候，不能更改的是引用地址，而复杂数据类型数据本身是可以修改的

如果想要连复杂类型数据都不能修改呢？

使用 `Object.freeze`方法冻结

```js
// 对象冻结
const user = {
    age:12,
    name:'hello'
}
console.log(user.age); // 12
user.age = 15
console.log(user.age); // 15
user.id = '0101001'
console.log(user.id); // 0101001
Object.freeze(user) // 冻结
user.age = 12
console.log(user.age); // 15
user.sex = '男'
console.log(user.sex); //undefined
```

> 总结：ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。
>
> 总之，暂时性死区的本质就是，只要**一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量**。

声明变量方法（6）

- ES5只有两种声明变量的方法：var function
- ES6新增4种：let const import class

## 顶层对象属性

顶层对象，在浏览器指的是window对象、node指的是global对象。ES5中，顶层对象和全局对象是等价的，也因此会带来不少问题。

`var、function` 声明的全局变量，依旧是顶层对象的属性
`let、const、class` 声明的全局变量，不属于顶层对象的属性。
