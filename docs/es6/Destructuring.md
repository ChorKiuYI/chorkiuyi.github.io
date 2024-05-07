---
title: 2. 变量解构赋值
icon: object-group
order: 2
category:
  - Guide
tag:
  - 变量解构赋值
---
- 数组
- 对象
- 字符串
- 数值和布尔值
- 函数参数
- 圆括号


## 一、数组解构赋值
### 1、基本用法（直接赋值）
```js
let [a,b,c] = [1,2,3]
console.log('a',a); // 1
console.log('b',b); // 2
console.log('c',c); // 3


let [x, y, ...z] = ['a'];
console.log('x',x); // a
console.log('y',y); // undefined
console.log('z',z); // []
```
### 2、默认赋值
```js
let [name = '小明',age] = [,13]
console.log('name',name); // 小明
console.log('age',age); // 13
```
```js
let [name = '小明',age] = ['小红']
console.log('name',name); // 小红
console.log('age',age); // undefined
```


## 二、对象解构赋值
### 基本用法（直接赋值）

- 数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值

```js
let {a,b} = {a:'aa',b:'bb'}
console.log('a',a); // aa
console.log('b',b); // bb
```
- 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
- foo是匹配的模式，boo1才是变量。真正被赋值的是变量boo1，而不是模式foo
```js
let { foo: foo1, bar: bar1 } = { foo: 'aaa', bar: 'bbb' };
console.log('foo',foo);  //foo is not defined
console.log('foo1',foo1); // aaa
console.log('bar',bar); // bar is not defined
console.log('bar1',bar1); // bbb
```

`Object.setPrototypeOf()` 静态方法可以将一个指定对象的原型(即内部的 [[Prototype]] 属性)设置为另一个对象或者 null

Object.setPrototypeOf(obj, proto);
- obj：要设置原型对象的对象。
- proto：该对象的新原型对象或null，否则抛出TypeError异常。
- 返回值:设置了新的原型对象的对象。


对象`obj1`的原型对象是`obj2`。`foo`属性不是`obj1`自身的属性，而是继承自`obj2`的属性，解构赋值可以取到这个属性。
```js
const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);
const { foo } = obj1;
foo // "bar"
```

### 默认值赋值
```js
const {name='小红',age} = {age:'13'}
console.log('name',name);//小红
console.log('age',age);// 13


const {name1='小红',age1} = {name1:'小明'}
console.log('name1',name1);// 小明
console.log('age1',age1);// undefined
```

## 字符串解构赋值
```js
const [a,b,c,d,e] = [1,2,3,4,5]
console.log('a',a); // 1
console.log('b',b); // 2
console.log('c',c); // 3
console.log('d',d); // 4
console.log('e',e); // 5
```


## **解构赋值的作用** 
1. 交换变量的值
2. 从函数返回多个值
3. 函数参数的定义
4. 提取 JSON 数据
5. 函数参数的默认值
6. 遍历 Map 结构
7. 輸入模块的指定方法


### 1. 交换变量的值
```js
let x = 1;
let y = 2;
[x,y] = [y,x];
console.log('x',x); // 2
console.log('y',y); // 1
```
### 2. 从函数返回多个值
函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
```js
function exmaple(){
    return [1,2,3]
}
const [a,b,c] = exmaple()
console.log('a',a); // 1
console.log('b',b); // 2
console.log('c',c); // 3

function exmaple1(){
    return {
        name:'小红',
        age:13
    }
}
let {name,age} = exmaple1()
console.log('name',name); // 小红
console.log('age',age); // 13
```
### 3. 函数参数的定义
```js
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
```
4. 提取 JSON 数据
5. 函数参数的默认值
6. 遍历 Map 结构
7. 輸入模块的指定方法