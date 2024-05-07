---
title: 5. 函数的扩展
icon: object-group
order: 5
category:
  - Guide
tag:
  - 函数的扩展
---
## 主要是应用方面的
### 参数默认值
```js
function foo({x, y = 5}) {
    console.log(x, y);
  }
  
  foo({}) // undefined 5
  foo({x: 1}) // 1 5
  foo({x: 1, y: 2}) // 1 2
  foo()  // Uncaught TypeError: Cannot destructure property 'x' of 'undefined' as it is undefined.
```

### rest参数
ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

求和
```js
// 求和
function add(...val){
    let sum = 0 
    for(var i of val){
        sum+= i
    }
    return sum
}
add(1,2,3,4,5) // 15
```


ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。

## 箭头函数
### 基本使用
ES6允许使用“箭头” `=>` 定义函数
```js
const full = ( first, last ) => first + ' ' + last;
full('小','明'); // 小 明
const fullObj = ({ first, last }) => first + ' ' + last;
fullObj({first:'小',last:'哈哈'}); // 小 哈哈
```
### 特点
箭头函数的特点：
1. 箭头函数没有自己的`this对象`
2. 不可以当作构造函数，也就是说，不可以对箭头函数使用`new命令`，否则会抛出一个错误。
3. 不可以使用`arguments对象`，该对象在函数体内不存在。如果要用，可以用`rest参数`代替。
4. 不可以使用`yield命令`，因此箭头函数不能用作`Generator函数`。


最重要的是第一点。对于普通函数来说，内部的this指向函数运行时所在的对象，但是这一点对箭头函数不成立。它没有自己的this对象，内部的this就是定义时上层作用域中的this。也就是说，箭头函数内部的this指向是固定的，相比之下，普通函数的this指向是可变的。
#### this强绑定 + 箭头函数
```js
function foo() {
  setTimeout(() => {
    //  这里面的this
    console.log('id:', this.id);
  }, 100);
}
var id = 21;
foo()
foo.call({ id: 42 });
```

#### 请问下面的代码之中，this的指向有几个？
```js
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1
```
答案是`this`的指向只有一个，就是`函数foo`的`this`，这是因为所有的内层函数都是箭头函数，都没有自己的`this`，它们的`this`其实都是最外层foo函数的`this`。所以不管怎么嵌套，`t1、t2、t3`都输出同样的结果。

#### 不适用场合
```js
globalThis.s = 21;
const obj = {
  s: 42,
  m: () => console.log(this.s)
};
obj.m() // 21

// obj.m()是箭头函数，里面的额this，是指向全局而不是obj对象，所以打印出来的21
```

### 从箭头函数引申出JS的this指向？
#### 一、什么是this?
绝大多数情况下，函数的调用方式决定了this的值（运行时绑定）
this关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，**总指向调用它的对象**

this在函数执行过程中，this一旦确定，就不可以再更改

#### 二、this的绑定规则
- 默认绑定
- 隐式绑定
- new绑定
- 显示绑定

##### 默认绑定(不在严格模式下)
```js
var name = 'jerry'
function person(){
    console.log(this.name);
    return this.name
}
person() // 'jerry'
```
#### 隐式绑定
```js
function test(){
    console.log('test:'+this.x);
}
var obj={
    x:1,
    m:function(){
        console.log('m:'+this.x); 
    },
    n:()=>{
        console.log('n:'+this.x);
    },
    test:test,
    y:{
        x:2,
        fn:function(){
            console.log('y.fn:'+this.x); 
            console.log('y.fn-this',this); 
        }
    }
}
obj.m() // m:1
obj.n() // n:undefined
obj.test() // test:1

// 下面两种调用方式
obj.y.fn() 
// y.fn:2
// y.fn-this {x: 2, fn: ƒ}
var j = obj.y.fn
j() 
// y.fn  undefined
// y.fn-this Window 
```
#### new绑定
通过构建函数new关键字生成一个实例对象，此时this指向实例对象。 
```js
// 基础例子
function test(){
    this.x = 1
}
var obj = new test()
obj.x // 1

// 如果返回一个对象，this指向返回的对象
function fn(){
    this.user = 'xxx'
    return {}
}
var a = new fn()
console.log(a.user); // undefined

// 如果返回简单类型/null，this指向实例对象
function fn(){
    this.user = 'xxx'
    return 1
    // return null 
}
var a = new fn;
console.log(a.user); // xxx
```
#### 显示绑定
apply()、bind()、call()函数方法
```js
var obj = {}
obj.x = 1;
obj.m = test
obj.m() // 1
obj.m.apply(obj) // 1
```
### 箭头函数
.........待补充..........


### 尾调用优化
尾调用：指某个函数的**最后一步**是**调用另一个函数**
```js
function f(x){
  return g(x);
}
```
尾递归：函数调用自身，称为递归。如果**尾调用自身**，就称为尾递归。
尾递归意义：ES6 中只要使用尾递归，就**不会发生栈溢出**（或者层层递归造成的超时），相对节省内存
```js
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

Fibonacci2(100) // 573147844013817200000
Fibonacci2(1000) // 7.0330367711422765e+208
Fibonacci2(10000) // Infinity


function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5) // 120
```