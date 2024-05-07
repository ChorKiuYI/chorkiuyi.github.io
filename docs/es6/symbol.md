---
title: 8. Symbol   
icon: object-group
order: 8
category:
  - Guide
tag:
  - Symbol 
---

为什么会出现Symbol原始数据类型？
ES5 的对象属性名都是字符串，这容易造成属性名的冲突。
Symbol表示独一无二的值

复习一下？数据类型有哪些？（8）
null undefined String Number Boolean Object Symbol BigInt

## 基础
下面证明Symbol表示独一无二的
```js
let s1 = Symbol()
let s2 = Symbol()
s1 // Symbol()
s2 // Symbol()
s1 == s2 // false
```
一般都建议加参数，如下面代码所示
```js
let s3 = Symbol('s3')
let s4 = Symbol('s4')
let s5 = Symbol('s4')
s3 // Symbol(s3)
s4 // Symbol(s4)

s4==s5 // false
// 转为字符串
s3.toString() // 'Symbol(s3)'
s4.toString() // 'Symbol(s4)' 
```

## Symbol.prototype.description
Symbol 值的实例属性description，直接返回 Symbol 值的描述

description比toString()方便，代码如下：
 ```js
let s1 = Symbol('symbol1')
let s2 = Symbol('symbol2')
 
s1.description // 'symbol1'
s2.description // 'symbol2'
s1.toString() // 'Symbol(symbol1)'
s2.toString() // 'Symbol(symbol2)'
```
## 作为属性名的Symbol
只要 Symbol 值作为标识符，用于对象的属性名，就能保证不会出现同名的属性。对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
```js
// 作为属性名的Symbol
let symName = Symbol()
let obj = {}
obj[symName] = 'helloSymbol'
// 或者
let obj = {
    [symName]:'helloSymbol'
}
// 或者
let obj = {}
Object.defineProperty(obj,symName,{value:'helloSymbol'})

obj[symName] // 'helloSymbol'
```

## 属性名的遍历
`Object.getOwnPropertySymbols()`方法，可以获取当前对象的**所有**用作**属性名的 Symbol 值**。
```js
const obj = {}
let s1 = Symbol('s1')
let s2 = Symbol('s2')
obj[s1] = 'symbol1'
obj[s2] = 'symbol2'

Object.getOwnPropertySymbols(obj) // [Symbol(s1), Symbol(s2)]
```