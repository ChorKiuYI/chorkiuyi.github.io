---
title: 10. Proxy  
icon: object-group
order: 10
category:
  - Guide
tag:
  - Proxy
---


## Proxy
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

new Proxy ( target ,  handler )
- target 目标对象（可以是任何对象，包括数组、函数等）
- 一个拦截器对象handler（一个对象，支持一些方法，这些方法用来定义在访问代理对象时所进行的操作）


```js
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});

obj.count = 1;
// setting count!
obj.count++;
// getting count!
// setting count!
obj.count; // 2
// getting count!
```

## Reflect 
Reflect对象设计目的
1. 将`Object`对象的一些明显属于语言内部的方法（比如`Object.defineProperty`），放到`Reflect对象`上。现阶段，某些方法同时在`Object`和`Reflect对象`上部署，未来的新方法将只部署在`Reflect对象`上。也就是说，从`Reflect对象`上可以拿到语言内部的方法。
2. 修改某些`Object方法`的返回结果，让其变得更合理。比如，`Object.defineProperty(obj, name, desc)`在无法定义属性时，会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回`false`。
3. 让`Object`操作都变成函数行为。某些`Object`操作是命令式，比如`name in obj`和`delete obj[name]`，而`Reflect.has(obj, name)`和`Reflect.deleteProperty(obj, name)`让它们变成了函数行为。
4. `Reflect对象`的方法与`Proxy对象`的方法一一对应，只要是`Proxy对象`的方法，就能在`Reflect对象`上找到对应的方法。这就让`Proxy对象`可以方便地调用对应的`Reflect方法`，完成默认行为，作为修改行为的基础。也就是说，不管`Proxy`怎么修改默认行为，你总可以在`Reflect`上获取默认行为。


### Reflect的静态方法
|方法|作用|-|
|---|---|---|
| Reflect.get(target, name, receiver) |查找并返回target对象的name属性，如果没有该属性，则返回undefined ||
| Reflect.set(target, name, value, receiver) | 设置target对象的name属性等于value||
| Reflect.has(target, name) | 对应name in obj里面的in运算符 ||
| Reflect.deleteProperty(target, name) |等同于delete obj[name]，用于删除对象的属性||
| Reflect.construct(target, args) | 等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法||
| Reflect.getPrototypeOf(target) |用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj) ||
| Reflect.setPrototypeOf(target, prototype) | 用于设置目标对象的原型（prototype），对应Object.setPrototypeOf(obj, newProto)方法。它返回一个布尔值，表示是否设置成功。||
| Reflect.apply(target, thisArg, args) | 等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数||
| Reflect.defineProperty(target, name, desc) | 等同于Object.defineProperty，用来为对象定义属性||
| Reflect.getOwnPropertyDescriptor(target, name) | 等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者||
| Reflect.isExtensible(target) | 对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展||
| Reflect.preventExtensions(target) |对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功 ||
| Reflect.ownKeys(target) |用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和 ||


## Proxy对象代理和Object.defineProperty
- Object.defineProperty，是vue2中双向数据绑定的原理，它是JavaScript中一个强大且常用的方法，用于定义对象属性，允许我们精确地控制属性的行为，包括读取、写入和删除等操作；
- Proxy是vue3中双向数据绑定的原理，是ES6中一种用于创建代理对象的特殊对象，它允许我们拦截并自定义目标对象的操作，例如属性访问、赋值、函数调用等。Proxy提供了一种机制，可以在目标对象上设置拦截器，从而拦截对目标对象的操作。

### Object.defineProperty缺点：
1. 不能监听数组的变化 
>无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应
2. 必须遍历对象的每个属性
>只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历。
>如果属性值是对象，还需要深度遍历。Proxy 可以劫持整个对象，并返回一个新的对象
3. 必须深层遍历嵌套的对象

### Proxy代理优点：
1. 支持数组
>针对整个对象，而不是对象的某个属性 ，所以也就不需要对 keys 进行遍历
2. 支持数组
>Proxy 不需要对数组的方法进行重载，省去了众多 hack，减少代码量等于减少了维护成本，而且标准的就是最好的
3. Proxy的第二个参数可以有 13 种拦截方法
>不限于apply、ownKeys、deleteProperty、has等等，是Object.defineProperty不具备的
4. Proxy返回的是一个新对象
>我们可以只操作新的对象达到目的。而Object.defineProperty只能遍历对象属性直接修改
5. Proxy作为新标准将受到浏览器厂商重点持续的性能优化
>也就是传说中的新标准的性能红利



