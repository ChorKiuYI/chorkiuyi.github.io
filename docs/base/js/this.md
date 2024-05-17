---
title: this
icon: circle-info
---

this是在运行时进行绑定的，它的上下文取决于函数调用时的各种条件。this的绑定和声明位置没有任何关系，只取决于函数的额调用方式。
**this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用**

## 调用位置
寻找调用位置就是寻找“函数被调用的位置”
```js
function baz() {     
    // 当前调用栈是：baz     
    // 因此，当前调用位置是全局作用域 
    console.log( "baz" );     
    bar(); // <-- bar 的调用位置 
} 
 
function bar() { 
    // 当前调用栈是 baz -> bar     
    // 因此，当前调用位置在 baz 中 
    console.log( "bar" );     
    foo(); // <-- foo 的调用位置 
} 
 
function foo() {     
    // 当前调用栈是 baz -> bar -> foo     
    // 因此，当前调用位置在 bar 中 
    console.log( "foo" ); 
} 

baz(); // <-- baz 的调用位置
// baz bar foo

```

## 绑定规则
1. 默认绑定
是最常用的函数调用类型：独立函数调用，this指向全局对象window
2. 隐式绑定
当函数引 用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象
3. 显式绑定
call(..) 和 apply(..) 方法。它们的第一个参数是一个对象，它们会把这个对象绑定到 this，接着在调用函数时指定这个 this。
因为你可以直接指定 this 的绑定对象，因此我 们称之为显式绑定。
4. new绑定
在 JavaScript 中，构造函数只是一些 使用 new 操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。实际上， 它们甚至都不能说是一种特殊的函数类型，它们只是被 new 操作符调用的普通函数而已。
实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。

    new 调用函数，发生下列操作：
    1. 创建（或者说构造）一个全新的对象。 
    2. 这个新对象会被执行 [[ 原型 ]] 连接。 
    3. 这个新对象会绑定到函数调用的 this。 
    4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

下面是默认绑定、隐式绑定、显式绑定、new绑定的代码展示
```js
// 默认绑定
function foo() {      
    console.log( this.a ); 
}
var a = 2
foo() // 2 

// —————————————————隐式绑定start————————————————————
// foo在全局这里定义
function foo() {      
    console.log( this.a ); 
}  
var obj = {      
    a: 2,     
    foo: foo  // foo在obj对象内调用
};  
obj.foo(); // 2  

// — — — — — — — — — — — — — — — — — — — —
// 对象属性引用链中只有最顶层或者说最后一层会影响调用位置。
function foo() {      
    console.log( this.a ); 
} 
var obj2 = {      
    a: 42,     
    foo: foo  
}; 
var obj1 = {      
    a: 2,     
    obj2: obj2  
}; 
obj1.obj2.foo(); // 42

// — — — — — — — — — — — — — — — — — — — —

function foo() {      
    console.log( this.a ); 
} 
 
var obj = {      
    a: 2,     
    foo: foo  
}; 
 
var bar = obj.foo; // 函数别名！   
var a = "oops, global"; // a 是全局对象的属性 
bar(); // "oops, global" 

// — — — — — — — — — — — — — — — — — — — —
// 参数传递其实就是一种隐式赋值
function foo() {      
    console.log( this.a ); 
} 
 
function doFoo(fn) {     
    // fn 其实引用的是 foo 
    fn(); // <-- 调用位置！ 
} 
 
var obj = {      
    a: 2,     
    foo: foo  
}; 
 
var a = "oops, global"; // a 是全局对象的属性 
doFoo( obj.foo ); // "oops, global"

// —————————————————显式绑定start————————————————————

function foo() {      
    console.log( this.a ); 
} 
var obj = {      
    a:2 
};  
// 在调用 foo 时强制把它的 this 绑定到 obj 上
foo.call( obj ); // 2


// 硬绑定是一种非常常用的模式，ES5提供内置的方法 Function.prototype. bind

function foo(something) {      
    console.log( this.a, something );      
    return this.a + something; 
}
var obj = {      
    a:2 
};  
var bar = foo.bind( obj );  
var b = bar( 3 ); // 2 3  
console.log( b ); // 5

// —————————————————new绑定start————————————————————

function foo(a) {      
    this.a = a; 
}  
 
var bar = new foo(2); 
console.log( bar.a ); // 2

```

## 绑定的优先级
绑定规则：默认绑定、隐式绑定、显式绑定、new绑定

优先级从高到低：new绑定 > 显式绑定 > 隐式绑定 > 默认绑定

### 判断this
1. 函数是否在 new 中调用（new 绑定）？
    如果是的话 this 绑定的是新创建的对象。 
    var bar = new foo()
2. 函数是否通过 call、apply（显式绑定）或者硬绑定调用？
    如果是的话，this 绑定的是指定的对象。 
    var bar = foo.call(obj2)
3. 函数是否在某个上下文对象中调用（隐式绑定）？
    如果是的话，this 绑定的是那个上 下文对象。 
    var bar = obj1.foo()
4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到 全局对象。 
    var bar = foo()


优先级验证代码：
```js
// —————— 比较隐式绑定和显式绑定 ——————
function foo() {      
    console.log( this.a ); 
} 
var obj1 = {      
    a: 2,     
    foo: foo 
}; 
var obj2 = {      
    a: 3,     
    foo: foo  
}; 
obj1.foo(); // 2  
obj2.foo(); // 3 
obj1.foo.call( obj2 ); // 3  
obj2.foo.call( obj1 ); // 2

// 上面代码证明了显式绑定优先级高于隐式绑定

// —————— 比较隐式绑定和new绑定 ——————
function foo(something) {      
    this.a = something; 
} 
var obj1 = {      
    foo: foo 
}; 
var obj2 = {}; 
obj1.foo( 2 );  
console.log( obj1.a ); // 2 
 
obj1.foo.call( obj2, 3 );  
console.log( obj2.a ); // 3 
 
var bar = new obj1.foo( 4 );  
console.log( obj1.a ); // 2  
console.log( bar.a ); // 4

// new 绑定比隐式绑定优先级高

```


## 绑定例外
> 小tips：创建一个空对象最简单的方法都是 **Object.create(null)** 
Object.create(null) 和 {} 很像，但是并不会创建 Object. prototype 这个委托，所以它比 {}“更空”

### 被忽略的this
情景：就是函数并不关心传入的this,只是不可避免要传给函数的情况下
例如 call、apply 或者 bind
两种方法：
1. 传null (但可能会产生某些副作用) PS：说人话就是也就是不够好
2. 空的非委托对象（ Object.create(null) ）PS：更安全
```js
function foo(a,b) {     
    console.log( "a:" + a + ", b:" + b ); 
}  
// 我们的 DMZ 空对象 
var ø = Object.create( null ); 
// 把数组展开成参数 
foo.apply( ø, [2, 3] ); // a:2, b:3  
// 使用 bind(..) 进行柯里化 
var bar = foo.bind( ø, 2 );  
bar( 3 ); // a:2, b:3

// 使用变量名 ø 不仅让函数变得更加“安全”，而且可以提高代码的可读性，因为 ø 表示 “我希望 this 是空”，这比 null 的含义更清楚。不过再说一遍，你可以用任何喜欢的名字 来命名 DMZ 对象。


```
## this 词法    
箭头函数：箭头函数不使用 this 的四种标准规则，而是**根据外层（函数或者全局）作用域来决 定 this**。

箭头函数的词法作用域：
```js
function foo() {     
    // 返回一个箭头函数      
    return (a) => {         
        //this 继承自 foo()         
        console.log( this.a );      
    }; 
} 
var obj1 = {      
    a:2 
}; 
var obj2 = {      
    a:3 
}; 
var bar = foo.call( obj1 ); 
bar.call( obj2 ); // 2, 不是 3 ！

```


## 总结
如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置。找到之后 就可以顺序应用下面这四条规则来判断 this 的绑定对象。
1. 由 new 调用？绑定到新创建的对象。 
2. 由 call 或者 apply（或者 bind）调用？绑定到指定的对象。 
3. 由上下文对象调用？绑定到那个上下文对象。 
4. 默认：在严格模式下绑定到 undefined，否则绑定到全局对象。

一定要注意，有些调用可能在无意中使用默认绑定规则。如果想“更安全”地忽略 this 绑 定，你可以使用一个 DMZ 对象，比如 ø = Object.create(null)，以保护全局对象。

ES6 中的箭头函数并不会使用四条标准的绑定规则，而是根据当前的词法作用域来决定 this，具体来说，箭头函数会继承外层函数调用的 this 绑定（无论 this 绑定到什么）。这 其实和 ES6 之前代码中的 self = this 机制一样。

<!-- 示例：
例子1：下列代码意图在foo函数用this

```js
function foo(num) {     
    console.log( "foo: " + num );  
    // 记录 foo 被调用的次数     
    this.count++;  // 这里无形中创建了全局count变量
} 
 
foo.count = 0; 
var i; 
 
for (i=0; i<10; i++) {     
    if (i > 5) {         
        foo( i );     
    } 
} 
// foo: 6 
// foo: 7 
// foo: 8 
// foo: 9 
 
// foo 被调用了多少次？ 
console.log( foo.count ); // 0 -- WTF
```

























奇怪的代码：

ES6用一个箭头函数将this和词法作用域联系起来，箭头函数除了少打几次键盘外
例子：
```js
var obj = {     
    id: "awesome",     
    cool: function coolFn() {         
        var self = this
        console.log( self.id );     
    }
}; 
 
var id = "not awesome"  
obj.cool(); // awesome
setTimeout(obj.cool, 100); // not awesome

// 上面现象是因为cool丢失了和this的绑定
```

 -->
