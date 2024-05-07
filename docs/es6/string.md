---
title: 3. 字符串扩展
icon: object-group
order: 3
category:
  - Guide
tag:
  - 字符串扩展
---


#字符串扩展
## 字符串可以被`for...of`循环遍历
```js
for(let item of 'demo'){
    console.log(item);
}
//d
//e
//m
//o
```

## 模板字符串
```js
let name = '小明';
console.log(`你好${name}`); //你好小明
```

#4.字符串新增方法

<!-- 只能常用的和比较常问的 -->
## includes(), startsWith(), endsWith()
传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。

- `includes(str,n)`：返回布尔值，表示是否找到了参数字符串。
- `startsWith(str,n)`：返回布尔值，表示参数字符串是否在原字符串的头部。
- `endsWith(str,n)`：返回布尔值，表示参数字符串是否在原字符串的尾部。
- str——代表参考的字符串
- n —— 第几个

```js
let s = 'hello word!'
s.includes('llo',2) // true
s.includes('llo',3) // false 索引不对

s.startsWith('word',6) // true
s.startsWith('word',5) // false 索引不对
```
`endsWith`的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
```js
s.endsWith('wor',9) // true
s.endsWith('llo',5) // true
```

## repeat() 
`repeat`方法**返回一个新字符串**，表示将原字符串重复`n`次。
```js
'hello!'.repeat(3) // hello!hello!hello!
```

## padStart() 和 padEnd()
ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()`用于头部补全，`padEnd()`用于尾部补全。

padStart()和padEnd()一共接受两个参数，
- 第一个参数是字符串补全生效的最大长度，
- 第二个参数是用来补全的字符串。
```js
'ad'.padStart(10,'012346789') // 01234678ad
'ad'.padEnd(10,'012346789')  // ad01234678

```

## trimStart()、trimEnd()
ES2019 对字符串实例新增了`trimStart()`和`trimEnd()`这两个方法。它们的行为与`trim()`一致，`trimStart()`消除字符串头部的空格，`trimEnd()`消除尾部的空格。它们**返回的都是新字符串，不会修改原始字符串**。
```js
let s = '  anb    ';
s.trim() // 'anb'
s.trimStart() // 'anb    '
s.trimEnd() // '  anb'
```

## replaceAll()
字符串的实例方法replace()只能替换第一个匹配 
```JS
'aabbcc'.replace('b', '_') // 'aa_bcc'
'aabbcc'.replaceAll('b', '_') // 'aa__cc'
```