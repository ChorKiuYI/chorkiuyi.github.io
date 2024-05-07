---
title: 6. 数组扩展 
icon: object-group
order: 6
category:
  - Guide
tag:
  - 数组扩展 
---


## 扩展运算符（...）
### 基础
扩展运算符（...）好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
```js
console.log(1,...[2,3,4],5); // 1 2 3 4 5

```
### 扩展运算符应用
#### 复制数组
```js
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
console.log('a1',a1) // [ 1, 2 ]
console.log('a2',a2) // [ 1, 2 ]
// 写法二
const [...a2] = a1;
console.log('a1',a1) // [ 1, 2 ]
console.log('a2',a2) // [ 1, 2 ]
```
#### 合并数组（浅拷贝）
```js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
// ES5 的合并数组
arr1.concat(arr2, arr3); // [ 'a', 'b', 'c', 'd', 'e' ]
// ES6 的合并数组
[...arr1, ...arr2, ...arr3] // ['a', 'b', 'c', 'd', 'e']
```
#### 与解构赋值结合
```js
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []
```
### copyWithin()
数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
```js
Array.prototype.copyWithin(target, start = 0, end = this.length)
```
target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
```js
[1, 2, 3, 4, 5].copyWithin(0, 3)// [4, 5, 3, 4, 5]
```

### find()，findIndex()，findLast()，findLastIndex()
find()方法，用于找出第一个符合条件的数组成员。有符合的返回改成员，否则返回undefined
findIndex() 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
findLast()和findLastIndex()从数组结尾开始，寻找第一个value属性为奇数的成员
findLast() 对标 find()
和findLastIndex() 对标 findIndex()
```js
[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10

[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2

[1, 5, 10, 15].findLast(function(value, index, arr) {
  return value > 9;
}) // 15

[1, 5, 10, 15].findLastIndex(function(value, index, arr) {
  return value > 9;
}) // 3
```

find()，findIndex()都可以接受第二个参数，用来绑定回调函数的this对象。
```js
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    
```

### fill()
fill() 使用给定值，填充一个数组 (直接改了array数组的数据)
`array.fill(value, start, end)` 【左闭右开】
- value:填充的固定数值
- start(可选):填充的起始位置()
- end（可选）:填充的结束位置

用法：
```js
new Array(3).fill('cat') // ['cat', 'cat', 'cat']
new Array(5).fill('fill',2,4) // [empty × 2, 'fill', 'fill', empty]
[1,2,3,4].fill(0) // [0, 0, 0, 0]
```

### entries()，keys()和values()
需要结合for...of使用
- keys()是对键名的遍历
- values()是对键值的遍历
- entries()是对键值对的遍历
```js
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```
### includes
表示某个数组是否包含给定的值，与字符串的includes方法类似
```js
 ['cat','applie'].includes('cat') // true
 ['cat','applie'].includes('demo') // false
```

### flat()，flatMap() 
数组的成员有时还是数组，`Array.prototype.flat()`用于将嵌套的数组“拉平”(默认只拉平一层)，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
```js
[1,2,[3,4],[[5,6]]].flat() // [1, 2, 3, 4, [5,6]]
[1,2,[3,4],[[5,6]]].flat(2) // [1, 2, 3, 4, 5, 6]
// 如果不管多少嵌套都要拉平一维数组 用Infinity
[1,2,[3,4],[[5,6]]].flat(Infinity)  // [1, 2, 3, 4, 5, 6]
```
`flatMap()`方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后`对返回值组成的数组执行flat()方法`。该方法返回一个新数组，不改变原数组。
```js
[2,3,4,[5,6],[7,8]].flatMap(x=>x) //  [2, 3, 4, 5, 6, 7, 8]
// 上面相当于下面这样
[2,3,4,[5,6],[7,8]].map(item=>item).flat() // [2, 3, 4, 5, 6, 7, 8]
```

### at()方法
接受一个整数作为参数，返回对应位置的成员，并支持负索引。也可用于字符串和类型数组（TypedArray）
```js
const arr = [5, 12, 8, 130, 44];
arr.at(2) // 8
arr.at(-2) // 130
```



### toReversed()，toSorted()，toSpliced()，with()
允许对数组进行操作时，不改变原数组，而返回一个原数组的拷贝。
- 颠倒数组成员的位置: Array.prototype.toReversed() -> Array 
- 对数组成员排序: Array.prototype.toSorted(compareFn) -> Array
- 在指定位置，删除指定数量的成员，并插入新成员: Array.prototype.toSpliced(start, deleteCount, ...items) -> Array
- 将指定位置的成员替换为新的值: Array.prototype.with(index, value) -> Array
```js
const sequence = [1, 2, 3];
sequence.toReversed() // [3, 2, 1]
sequence // [1, 2, 3]

const outOfOrder = [3, 1, 2];
outOfOrder.toSorted() // [1, 2, 3]
outOfOrder // [3, 1, 2]

const array = [1, 2, 3, 4];
array.toSpliced(1, 2, 5, 6, 7) // [1, 5, 6, 7, 4]
array // [1, 2, 3, 4]

const correctionNeeded = [1, 1, 3];
correctionNeeded.with(1, 2) // [1, 2, 3]
correctionNeeded // [1, 1, 3]
```


总结：
|方法|作用|例子|
|---|---|---|
|扩展运算符（...）|将一个数组转为用逗号分隔的参数序列|console.log(1,...[2,3,4],5); // 1 2 3 4 5|
| Array.from()|用于将两类对象转为真正的数组|let arrayLike = {<br>'0': 'a',<br>'1': 'b',<br>'2': 'c',<br>length: 3<br>};<br>// ES5 的写法<br>var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']<br>// ES6 的写法<br>let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']|
|Array.of()方法|用于将一组值，转换为数组。|Array.of(3, 11, 8) // [3,11,8]|
|copyWithin()|在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。会修改到当前数组|[1, 2, 3, 4, 5].copyWithin(0, 3)// [4, 5, 3, 4, 5]|
|find()|用于找出**第一个**符合条件的数组成员|[1, 5, 10, 15].find(function(value, index, arr) {<br>return value > 9;<br>}) // 10|
|findIndex()|用于找出第一个符合条件的数组成员的位置|[1, 5, 10, 15].findIndex(function(value, index, arr) {<br>return value > 9;<br>}) // 2|
|findLast()|从数组的最后一个成员开始，依次向前检查 ,类比find()|[1, 5, 10, 15].findLast(function(value, index, arr) {return value > 9;}) // 15|
|findLastIndex()|从数组的最后一个成员开始，依次向前检查 ,类比findIndex()|[1, 5, 10, 15].findLastIndex(function(value, index, arr) {return value > 9;}) // 3|
|fill()|使用给定值，填充一个数组|new Array(5).fill('fill',2,4) // [empty × 2, 'fill', 'fill', empty]|
|entries()|对键值对的遍历|for (let [index, elem] of ['a', 'b'].entries()) {console.log(index, elem);}// 0 "a"// 1 "b"|
|keys()|对键名的遍历|for (let index of ['a', 'b'].keys()) {console.log(index);}// 0// 1|
|values()|对键值的遍历|for (let elem of ['a', 'b'].values()) {console.log(elem);}// 'a'// 'b'|
|includes()|表示某个数组是否包含给定的值| ['cat','applie'].includes('cat') // true|
|flat()|用于将嵌套的数组“拉平”，变成一维的数组|[1,2,[3,4],[[5,6]]].flat() // [1, 2, 3, 4, [5,6]]<br>[1,2,[3,4],[[5,6]]].flat(2) // [1, 2, 3, 4, 5, 6] <br>// 如果不管多少嵌套都要拉平一维数组 用Infinity<br>[1,2,[3,4],[[5,6]]].flat(Infinity)  // [1, 2, 3, 4, 5, 6]|
|flatMap()|对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后`对返回值组成的数组执行flat()方法`|[2,3,4,[5,6],[7,8]].flatMap(x=>x) //  [2, 3, 4, 5, 6, 7, 8]<br>// 上面相当于下面这样<br>[2,3,4,[5,6],[7,8]].map(item=>item).flat() // [2, 3, 4, 5, 6, 7, 8]|
|at()|接受一个整数作为参数，返回对应位置的成员，并支持负索引||


