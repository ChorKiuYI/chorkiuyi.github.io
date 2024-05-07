---
title: 4. 数值扩展
icon: object-group
order: 4
category:
  - Guide
tag:
  - 数值扩展
---

数值的扩展有很多，这里只记录一下工作中可能会涉及到的方法，其他像bigInt类型的扩展、全曲线函数、对数相关方法、32位精度等冷门的就不记录在内

## Number.isFinite()和Number.isNaN()
- Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
- Number.isNaN()用来检查一个值是否为NaN。

```js
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
```

>与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效

```js
isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
Number.isNaN(1) // false
```

## Number.parseInt(), Number.parseFloat() 
ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
- Number.parseInt() 取整
- Number.parseFloat() 
```js
Number.parseInt(13.33333) // 13

Number.parseFloat('10') //10
Number.parseFloat('10.00') //10
Number.parseFloat('237,21') //237
Number.parseFloat('237.21') //237.21
Number.parseFloat('12 34 56') //12
Number.parseFloat(' 36 ') //36
Number.parseFloat('36 is my age') //36
Number.parseFloat('-10') //-10
Number.parseFloat('-10.2') //-10.2
```

## Number.isInteger()用来判断一个数值是否为整数。
PS：如果对数据精度的要求较高，不建议使用Number.isInteger()判断一个数值是否为整数
```js
Number.isInteger(25);   //true  
Number.isInteger(25.4); //false 
Number.isInteger('25'); //false 
Number.isInteger(true); //false 
Number.isInteger();     //false
Number.isInteger(null); //false 
```

## Math 对象的扩展
### Math.trunc() 用于去除一个数的小数部分，返回整数部分
```js
console.log(Math.trunc(4.7)); // 4 
console.log(Math.trunc(-4.7)); // -4  
console.log(Math.trunc('123.321')); // 123 
console.log(Math.trunc(true)); // 1 
console.log(Math.trunc(false)); // 0 
console.log(Math.trunc(null)); // 0 
console.log(Math.trunc()); // NaN 
console.log(Math.trunc('demo')); // NaN
```

### Math.sign() 判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
它会返回五种值。
- 参数为正数，返回+1；
- 参数为负数，返回-1；
- 参数为 0，返回0；
- 参数为-0，返回-0;
- 其他值，返回NaN。

```js
Math.sign(23); // 1
Math.sign(-23); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign('123.321'); // 1
Math.sign('demo1'); // NaN
```

### Math.cbrt()方法用于计算一个数的立方根。
```js
Math.cbrt(8); // 2
Math.cbrt('8'); // 2
Math.cbrt(27); // 3
Math.cbrt(8); // 2
Math.cbrt(1); // 1
Math.cbrt(2); // 1.2599210498948732
Math.cbrt(0); // 0
```

## 总结：

|方法|作用|简单使用|
|---|---|---|
|Number.isFinite() |检查一个数值是否为有限的（finite），即不是Infinity | Number.isFinite(15); // true |
|Number.isNaN()|检查一个值是否为NaN|Number.isNaN(NaN) // true|
|Number.parseInt()|取整|Number.parseInt(13.33333) // 13|
|Number.parseFloat() |将参数解析为浮点数并将其返回|Number.parseFloat('36 is my age') //36|
|Number.isInteger()|用来判断一个数值是否为整数 | Number.isInteger(25);   //true|
|Math.trunc()|用于去除一个数的小数部分，返回整数部分。|Math.trunc(4.9) // 4|
|Math.sign()|判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值|Math.sign(23); // 1 <br> Math.sign(-23); // -1 <br>Math.sign(0); // 0 <br>Math.sign(-0); // -0 <br>Math.sign('123.321'); // 1 <br>Math.sign('demo1'); // NaN|
|Math.cbrt()|用于计算一个数的立方根。|Math.cbrt(8); // 2 <br>Math.cbrt('8'); // 2 <br>Math.cbrt(27); // 3 <br>Math.cbrt(8); // 2 <br>Math.cbrt(1); // 1 <br>Math.cbrt(2); // 1.2599210498948732 <br>Math.cbrt(0); // 0|
