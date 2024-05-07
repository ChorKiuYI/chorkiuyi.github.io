---
title: 2. JS事件循环机制
icon: object-group
order: 2
category:
  - Guide
tag:
  - JS事件循环机制
---


面试题内容涉及：计时器 Promise Ajax node

PS : 事件循环与浏览器密切相关
# 浏览器的进程模型
## 何为进程？
程序运行需要有自己专属的内存空间，可以把这块内存空间简单理解为进程
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1338afbf33c3492db54019d6f002fbd8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=490&h=333&s=43121&e=png&b=faf4f0)

每个应用至少有一个进程，进程之间相互独立，即使要通信，也要双方同意。
## 何为线程？
有了进程后，就可以运行程序的代码了。

运行代码的【人】称之为【线程】

一个进程至少有一个线程，所以在进程开启后会自动创建一个线程来运行代码，该线程称之为主线程。

如果程序需要同时执行多块代码，主线程就会启动更多的线程来执行代码，所以一个进程中可以包含多个线程。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecc548126e69401388aa95768b765560~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=825&h=479&s=83365&e=png&b=faf8f8)
## 浏览器有哪些进程和线程？
**浏览器是一个多进程多线程的应用程序**

浏览器内部工作极其复杂。

为了避免互相影响，为了减少连环奔溃的几率，当启动浏览器后，它会自动启动多个进程。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99960a88d074425196bc2e674fa17be2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=738&h=503&s=74267&e=png&b=fbf5f3)
### 可以在浏览器的任务管理器中查看当前所有的进程

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b3e93b55a074628bb268a86a515ed6c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=638&h=434&s=28214&e=png&b=fefefe)

其中，最主要的进程有：
1. 浏览器进程：主要负责界面显示、用户交互、紫禁城管理等，浏览器进程内部会启动多个线程处理不同的任务
2. 网络进程：负责加载网络资源。网络进程内部会启动多个线程来处理不同的网络任务。
3. **渲染进程（重点）**：渲染进程启动后，会开启一个**渲染主线程**，主线程负责执行HTML、CSS、JS代码；默认情况下，浏览器会为每个标签页开启一个新的渲染进程，以保证不同的标签页之间不互相影响。

# 渲染主线程是如何工作的？
渲染主线程是浏览器中最繁忙的线程，需要塔处理的任务包括但不限于：
- 解析HTML
- 解析CSS
- 计算样式
- 布局
- 处理图层
- 每秒把页面画60次
- 执行全局JS代码
- 执行事件处理函数
- 执行计时器的回调函数
- ...

**思考题：为什么渲染进程不适用多个线程来处理这些事情？**
要处理那么多的任务，主线程遇到了一个 前所未有的难题：**如何调度任务？**

比如：
- 正在执行一个JS函数，执行到一半的时候，用户点击了按钮，那么应该立即去执行点击事件的处理函数吗？（不会）
- 正在执行一个JS函数，执行到一半的时候，某个计时器到达了时间，该立即去执行它的回调吗？
- 浏览器进程通知我“用户点击了按钮”，与此同时，某个计时器也到达了时间，应该处理哪一个？？？
- .....

渲染主线程想出了一个绝妙的主意来处理这个问题：**排队**
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a0e02e1555c43b3971868232c668258~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=766&h=416&s=46423&e=png&b=fcf9f9)
1. 在最开始的时候，渲染主线程会进入一个无限循环
2. 每一次循环会检查消息队列中是否有任务存在。如果有，就取出第一个任务执行，执行完一个后进入下一次循环；如果没有，则进入休眠状态。
3. 其他所有线程（包括其他进程的线程）**可以随时向消息队列添加任务**。新任务会加到消息队列的末尾。再添加新任务时，如果主线程是休眠状态，则会将其唤醒以继续循环拿取任务
 
这样一来，就可以每个任务有条不紊的，持续的进行下去

**整个过程称之为事件循环（消息循环）**

# 若干解释
## 何为异步？
代码在执行过程中，会遇到一些无法立即处理的任务。比如：
- 计时完成后需要执行的任务 ———— setTimeout、setInterval
- 网络通信完成后需要执行的任务 ———— XHR、Fetch
- 用户操作后需要执行的任务 ———— addEventListner

如果让**渲染辅助线程**等待这些任务的时机达到，就会导致主线程长期处于【阻塞】的状态，从而导致浏览器【卡死】

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebf5e78a187f4d968632e53dd40bcbe5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=847&h=402&s=58699&e=png&b=fcf6f5)
**渲染主线程承担着极其重要的工作，无论如何都不能阻塞！！！**

因此，浏览器选择**异步**来解决问题，如下图

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a990102688649dca84431b82d1bc0a8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=853&h=382&s=61935&e=png&b=fcf6f6)
使用异步的方式，渲染主线程永不阻塞
### 面试题：如何理解JS的异步？！！！
JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。而渲染主线程承担着诸多的工作：渲染页面、执行JS都在其中。

如果使用同步的方式，就极有可能导致主线程白白的消耗时间，另一方面导致导致页面无法及时更新，给用户造成卡死现象

所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听、主线程将任务交给其他线程去处理。自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将实现传递**回调函数包装成任务**，加入到消息队列的末尾排队，等待主线程**调度**执行。

在这种异步模式下，浏览器永不阻塞，从而最大限度地保证了单线程的流畅运行。

## JS为何会阻碍渲染？

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello</h1>
    <button>改变</button>
    <script>
        var h1 = document.querySelector('h1')
        var btn = document.querySelector('button')
        // 死循环指定的时间
        function delay(duration){
            var start = Date.now()
            while(Date.now() - start < duration){}
        }

        btn.onclick = function(){
            h1.textContent = "点击后改变了"
            delay(3000)
        }
    </script>
</body>
</html>
```
点击后，页面等待3000ms后才渲染新的改变数据到页面上


## 任务有优先级吗？
任务没有优先级，在消息队列中先进先出

但**消息队列最有优先级的**

根据W3C的最新解释：
- 每个任务都有一个任务类型，**同一个类型的任务必须在一个队列**，不同类型的任务可以分属于不同的队列。在一次事件循环中，浏览器可以根据实际情况
从不同的队列中取出任务执行
- 浏览器必须准备好一个微队列（microtask queue），队列中的任务优先所有其他任务执行
https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint

随着浏览器的复杂度急剧提升，W3C不再使用宏队列的说法

在目前chrome的实现中，至少包含了下面的队列：
- 延时队列：用于存放计时器到达后的回调任务，优先级【中】
- 交互队列：用于存放用户操作后产生的事件处理任务，优先级【高】
- 微队列：用户存放需要最快执行的任务，优先级【最高】

> 添加任务到微队列的主要方式是使用 Promise、MutationObserver

例如：
```js
// 立即把一个函数添加到微队列
Promise.resolve().then(函数)
```

浏览器还有很多其他的队列，与我们开发关系不大，这里不做考虑

### 面试题：阐述一下JS的事件循环
> 事件循环又叫消息循环，是**  **。
> 
>在Chrome的源码中，它开启一个不会结束的for循环，每次循环从消息队列中取出中去除第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。
>
>过去把消息队列简单分为宏任务和微任务，这种说法目前已无法满足复杂的浏览器环境，取而代之是一种更加灵活多变的处理方式。
>
>根据W3C官方解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列，不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取那一队列的任务。但必须有一个微队列，微队列的任务一定具有最高的优先级，必须有限调度执行。

### 面试题：JS中的计时器能做到精确计时吗？为什么？
答案：不行，因为：
> 1、计算机硬件没有原子钟，无法做到精确计时
> 
> 2、操作系统的计时函数本身就有少量偏差，由于JS的计时器最终调用的是操作系统的函数，也就携带了这些偏差
> 
> 3、按照W3C的标准，浏览器实现计时器时，如果嵌套层级超过5层，则会带有4毫秒的最少时间，这样在计时时间少于4毫秒时又带来了偏差
> 
> 4、受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差 【重要】

练习题1：

```js
        setTimeout(function(){
            console.log(1);
        },0)

        Promise.resolve().then(function(){
            console.log(2);
        })
        console.log(3);
       
        
      //输出顺序 3  2  1
```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0aa7764eb3ae4ea78e0da2f1f3dc9a75~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=371&h=214&s=8134&e=png&b=282828)
练习题2：

```js
        setTimeout(function(){
            console.log(1);
        },0)
        function delay(duration){
            var start = Date.now()
            while(Date.now() - start < duration){}
        }
        delay(3000)
        console.log(2);
        
        输出顺序：2  1
```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebe0c943bbf0484183c901c9a26e104f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=448&h=227&s=10774&e=png&b=282828)

练习题3：

```js
        function a(){
            console.log(1);
            Promise.resolve().then(function(){
                console.log(2);
            })
        }

        setTimeout(function(){
            console.log(3);
            Promise.resolve().then(a)
        },0)
        Promise.resolve().then(function(){
            console.log(4);
        })
        console.log(5);

    //  输出顺序：  5 4 3 1 2
```


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42a1948c5f9d4bf691f207e431e1c8c4~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=355&h=360&s=14240&e=png&b=292929)


总结：**单线程是异步产生的原因 事件循环是异步的实现方式**