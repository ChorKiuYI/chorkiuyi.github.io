---
title: 9. setMap  
icon: object-group
order: 9
category:
  - Guide
tag:
  - setMap
---


|方法|作用|例子|
|---|---|---|
||||
||||
||||
||||

## Set,
ES6新增的数据类型。类似数组，**成员值是唯一的，没有重复的值**。
作用：可以去除重复的值，因为Set()的成员是唯一，没有重复的值
```js
// 写法1
let s = new Set()
[1,2,3,4,5,6,7,8,1,2,3,4].forEach(item => {
    s.add(item)
});
s // new Set([1,2,3,4,5,6,7,8])
[...s] // [1, 2, 3, 4, 5, 6, 7, 8]

// 写法2
let s =new Set([1,2,3,4,5,6,7,8,1,2,3,4])
s // new Set([1,2,3,4,5,6,7,8])
[...s] // [1, 2, 3, 4, 5, 6, 7, 8]
```
Set 实例属性
|方法|作用|例子|
|---|---|---|
|Set.prototype.size|返回Set实例的成员总数|s.size|

Set 实例**操作**方法（用于操作数据）【4】
|方法|作用|例子|
|---|---|---|
|Set.prototype.add(value)|添加某个值，返回 Set 结构本身|s.add(value)|
|Set.prototype.delete(value)|删除某个值，返回一个布尔值，表示删除是否成功|s.delete(value)|
|Set.prototype.has(value)|返回一个布尔值，表示该值是否为Set的成员|s.has(value)|
|Set.prototype.clear()|清除所有成员，没有返回值|s.has()|

Set 实例**遍历**方法（用于遍历成员）【4】 + for...of循环遍历
|方法|作用|
|---|---|
|Set.prototype.keys()|返回键名的遍历器|
|Set.prototype.values()|返回键值的遍历器|
|Set.prototype.entries()|返回键值对的遍历器|
|Set.prototype.forEach()|使用回调函数遍历每个成员|

```js
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

set.forEach((value, key) => console.log(key + ' : ' + value))
// red : red
// green : green
// blue : blue
```

## Map
本质上是键值对的集合（Hash 结构）
```js
var m1 = new Map()
m1.set()
m1 // new Map([["m1","map实例1"]])





var m2 = new Map([['m2-1','map实例2-1'],['m2-2','map实例2-2']])
// new Map([["m2-1","map实例2-1"],["m2-2","map实例2-2"]])
m2.get('m2-1') // 'map实例2-1'
m2.has('m2-1') // true
m2.has('demo') // false
m2.delete('m2-1')
m2.has('m2-1') // false 

```


