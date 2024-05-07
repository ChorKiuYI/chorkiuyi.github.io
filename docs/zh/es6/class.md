---
title: 11. Class  
icon: object-group
order: 11
category:
  - Guide
tag:
  - Class
---


## Class基础 
### class写法
```js
class Person{
    // 类的默认方法
    constructor(name,age){
        this.name = name
        this.age = age
    }
    setName(name){
        this.name = name
        console.log(`设置姓名:${name}`);
    }
    getName(){
        console.log(`获取姓名:${this.name}`)
    }
    setAge(age){
        this.age = age
        console.log(`设置年龄:${age}`);
    }
    getAge(){
        console.log(`获取年龄:${this.age}`)
    }
    say(){
        console.log(`我是${this.name}今年${this.age}岁`);
    }
}
// 类的实例
let p1 = new Person('小明',12)
let p2 = new Person('小红',15)
p2.say() // 我是小红今年15岁
p1.getName() // 获取姓名:小明
p1.getAge() // 获取年龄:12        
p1.say() // 我是小明今年12岁   
p1.setName('小小明') // 设置姓名:小小明    
p1.say() // 我是小小明今年12岁
p1.setAge(18) // 设置年龄:18        
p1.say() // 我是小小明今年18岁
p2.say() // 我是小红今年15岁

//  类的内部所有定义的方法
Object.getOwnPropertyNames(Person.prototype)
//  ['constructor', 'setName', 'getName', 'setAge', 'getAge', 'say']
```
### 静态方法static
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上`static关键字`，就表示**该方法不会被实例继承，而是直接通过类来调用**，这就称为“静态方法”。
```js
class Person{
    static sayHello(){
        console.log('Hello Static');
        this.sayBye()
    },
    static sayBye(){
        console.log('ByeBye Static');
    },
    sayBye(){
        console.log('ByeBye');
    }
}
Person.sayHello() 
// Hello Static
// ByeBye Static

let p1 = new Person()
p1.sayHello() //  p1.sayHello is not a function
```

### 静态属性
静态属性指的是 **Class本身的属性**，即Class.propName，**而不是定义在实例对象（this）上的属性**
 
```js
class Person{
    static prop = 12
}
// class本身
Person.prop // 12
// 静态属性实例对象访问不了
let p1 = new Person()
p1.prop // undefined
```

### 私有属性（#）和 私有方法（#）
私有方法和私有属性，是**只能在类的内部访问的方法和属性，外部不能访问**
私有属性不限于从this引用，只要是在类的内部，实例也可以引用私有属性
```js

class Foo{
    // 私有属性
    #baseValue = '私有属性';
    // 公共属性
    constructor(name){
        this.name = name + this.#baseValue
    }
    // 静态属性    
    static staticValue = '静态属性';
    // 私有方法
    #staticSum(){
        console.log('私有方法')
    }
    // 静态方法
    static staticSum(){
        console.log('静态方法')
    }  
    // 公有方法
    Sum(){
        console.log('公用方法')
        this.#staticSum()
    }
}
let f1 = new Foo()
f1.Sum()
// 公用方法
// 私有方法


```

## Class继承
正常公有方法、属性的继承 `extends`继承 和 `super()`
```js
class Animal {
    constructor(id,name){
        console.log('Animals');
        this.id = id
        this.name = name
    }
    eat(){
        console.log(`${this.name}正在吃东西`);
    }
    sleep(){
        console.log(`${this.name}正在睡觉`);
    }
    sayHello(){
        console.log(`大家好，我是${this.id}号${this.name}`);
    }
}
class Dogs extends Animal{
    constructor(){
        super()
        console.log('Dogs');
    }
}

let dog1 = new Dogs()
// Animals
// Dogs
dog1.name = 1
dog1.name = '小黄狗'
dog1.eat() // 小黄狗正在吃东西
dog1.sayHello() // 大家好，我是undefined号小黄狗
```

### 私有属性和私有方法继承
父类所有的属性和方法，都会被子类继承，除了私有的属性和方法。
子类无法继承父类的私有属性，或者说，**私有属性只能在定义它的 class 里面使用**。
如果真的想要，只能通过在父类建造一个读取私有属性的公共方法，子类通过这个公共方法实现

### 静态属性和静态方法继承
浅拷贝

### Object.getPrototypeOf()从子类获取父类
```js
class Animal {
    constructor(id,name){
        this.id = id
        this.name = name
    }
}
class Dogs extends Animal{
    constructor(){
        super()
    }
}
Object.getPrototypeOf(Dogs) === Animal // true
```
### super 关键字 ****（有空看）
super既可以做函数也可以当做对象使用


