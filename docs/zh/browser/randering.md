---
title: 1. 浏览器渲染原理
icon: object-group
order: 1
category:
  - Guide
tag:
  - 浏览器渲染原理
---



渲染 （rander）

**html字符串 ——渲染——> 像素信息**

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/763fe58c6b8946548e5cd18cd728a1e5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=826&h=392&s=136451&e=png&b=fdfdfd)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a47db45040244ccbb25aa6a1d0f02e86~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=774&h=453&s=42359&e=png&b=fbf6f5)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/82e62b1b6a1f4947a1fb5b6f0181b3de~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=843&h=460&s=49058&e=png&b=fbf8f7)

## 浏览器是如何渲染页面的？
当浏览器的网络线程收到 HTML 文档后，会产生一个**渲染任务**，并将其传递给**渲染主线程的消息队列**。

在事件循环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。

整个渲染流程分为多个阶段，分别是:HTML 解析、样式计算、布局、分层、绘制、分块、光棚化、画

每个阶段都有明确的输入输出，上一个阶段的输出会成为下一个阶段的输入。

这样，整个渲染流程就形成了一套组织严密的生产流水线。

### 1、*解析 HTML（Parse HTML）*

解析过程中遇到 CSS 解析 CSS，遇到 JS 执行 JS。为了提高解析效率，浏览器在开始解析前，会启动一个预解析的线程，**率先下载HTML中的外部CSS 文件和 外部的JS 文件**。

**如果主线程解析到 `link `位置，此时外部的 CSS 文件还没有下载解析好，主线程不会等待，继续解析后续的HTML。这是因为下载和解析 CSS 的工作是在预解析线程中进行的。这就是CSS 不会阻塞 HTML 解析的根本原因。**

如果主线程解析到 `script` 位置，会停止解析 HTML，转而等待 JS 文件下载好，并将全局代码解析执行完成后，才能继续解析 HTML。这是**因为JS 代码的执行过程可能会修改当前的 DOM 树，所以 DOM 树的生成必须暂停**。这就是 JS 会阻塞 HTML解析的根本原因。

第一步完成后，会得到 DOM 树和CSSOM 树，浏览器的默认样式、内部样式、外部样式、行内样式均会包含在CSSOM 树中。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2009151292eb43329fba1bdc91b1c313~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=520&h=323&s=41428&e=png&b=fdfbfb)
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5f60d4c8cea4923b804b5b913cf8057~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=598&h=275&s=36562&e=png&b=fefefe)
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c23a701610b941969a99d96f1cebfab1~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=594&h=278&s=28781&e=png&b=fffefe)
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d2922b7176c4e058fd20ce600525d79~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1256&h=794&s=243020&e=png&b=2b2b2b)
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/deb8a8ce9be047f18ff8b40209b1d912~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1920&h=915&s=307837&e=png&b=fdfcfc)

#### 常见问题：HTML 解析过程中遇到 CSS 代码怎么办？
为了提⾼解析效率，浏览器会启动⼀个预解析器率先下载和解析 CSS

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/acb83847704547c9a2342e7f0106b1a3~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=473&h=249&s=19880&e=png&b=fefafa)
#### 常见问题：HTML 解析过程中遇到 JS 代码怎么办？
渲染主线程遇到 JS 时必须暂停⼀切⾏为，等待下载执⾏完后才能继续 预解析线程可以分担⼀点下载 JS 的任务

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/efac87a6d975433da4bd6647252563d1~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=471&h=257&s=25805&e=png&b=fdf9f9)
最终

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7631e4c8fec4d048e04c95c4fa08dde~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=515&h=310&s=41039&e=png&b=fdfbfb)
### 2、*样式计算（Recalculate Style）*

主线程会遍历得到的DOM树，依次为树中的每个节点计算出它最终的样式，称之为Computed Style。

在这一过程中，很多预设值会变成绝对值，比如`red`会变成`rgb(255,0,0)`;相对单位会变成绝对单位，比如`em`变成`px`。

这一步完成后，会得到一颗带有样式的DOM树。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d79361f10be4e6caf8fe460952cc415~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=553&h=320&s=24854&e=png&b=fefcfc)
### 3、*布局（Layout）*，布局完成后会得到布局树
布局阶段会依次遍历 DOM 树的每一个节点，计算每个节点的几何信息。例如节点的宽高、相对包含块的位置。

**大部分时候，DOM 树和布局树并非一一对应**

比如` display:none` 的节点没有几何信息，因此不会生成到布局树;又比如使用了`伪元素选择器`（例如`::before`、`::after`、`::first-child`），虽然 DOM树中不存在这些伪元素节点，但它们拥有几何信息，所以会生成到布局树中。还有匿名行盒、匿名块盒等等都会导致 DOM 树和布局树无法一一对应。
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8848246088854477ab070333d6f5191e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=537&h=240&s=15460&e=png&b=fefefe)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/373f69bf2d5b46bc966a33368df74663~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=549&h=253&s=20739&e=png&b=fefbfb)


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee7d108f460741f39e2c7317737ef039~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=526&h=293&s=23235&e=png&b=fefdfd)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d60106e89ee4657a194d92b0ffac951~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=561&h=334&s=34808&e=png&b=fefcfc)



### 4、*分层（Layer）* 

主线程会使用一套复杂的策略对整个布局树中进行分层。

分层的好处在于，将来某一个层改变后，仅会对该层进行后续处理，从而提升效率。

`滚动条、堆叠上下文、transform、opacity` 等样式都会或多或少的影响分层结果，也可以通过 `will-change` 属性更大程度的影响分层结果。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c1c93c3032549f8a72ce85e4b2a43d4~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=538&h=253&s=27121&e=png&b=fdfcfc)


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/889071f06b334791adb47dec77cc221b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1657&h=610&s=104154&e=png&b=fefefe)
### 5、*绘制（Paint）*

主线程会为每个层单独产生绘制指令集，用于描述这一层的内容该如何画出来。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b194a0cd1404282b3c0013a038e0af8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=539&h=293&s=37781&e=png&b=fdfafa)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4dcb204503054f3bb54515f47ee733bd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=506&h=240&s=25884&e=png&b=fdfaf9)

> 完成绘制后，主线程将每个图层的绘制信息提交给合成线程，剩余工作将由合成线程完成。
> 
> 合成线程首先对每个图层进行分块，将其划分为更多的小区域。
> 
> 它会从线程池中拿取多个线程来完成分块工作。
> 
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7b3276f7ec7442c8f5f56e60ed4a2a9~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=445&h=260&s=25115&e=png&b=fcf7f6)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb11884063c6426f8a7c7dc9e140cb87~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=517&h=274&s=28184&e=png&b=fdf9f8)

### 6、*光栅化阶段（Raster）*。

合成线程会将块信息交给 GPU 进程，以极高的速度完成光化。

GPU 进程会开启多个线程来完成光栅化，并且**优先处理靠近视口区域的块**，

光栅化的结果，就是一块一块的位图

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b45c59282b14afe9a7e4d0382bbba34~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=453&h=248&s=27388&e=png&b=fefafa)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e5042e8aba44cc38c1d304c1b1276fe~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=489&h=228&s=16759&e=png&b=fffbfb)

### 7、*画（Draw）*

合成线程拿到每个层、每个块的位图后，生成一个个「指引(quad)」信息。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/215b703bc0a249208220171b717537a1~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=607&h=290&s=34058&e=png&b=fefbfb)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f1f5bf9cd954cab86c3555059463297~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=589&h=268&s=25695&e=png&b=fdfbfb)

**指引会标识出每个位图应该画到屏幕的哪个位置，以及会考虑到旋转、缩放等变形。

变形发生在合成线程，与渲染主线程无关，这就是 transform 效率高的本质原因。

合成线程会把 quad 提交给 GPU进程，由 GPU 进程产生系统调用，提交给 GPU 硬件，完成最终的屏幕成像**



# 补充问题：
## 什么是reflow？

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5469b0efc8248ebbcb279f6e423f88e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=536&h=196&s=16539&e=png&b=fefcfc)

reflow 的本质就是**重新计算 layout 树**。

当进行了会影响布局树的操作后，需要重新计算布局树，会引发 layout。

为了避免连续的多次操作导致布局树反复计算，浏览器会合并这些操作，当 JS 代码全部完成后再进行统一计算。所以，改动属性造成的 reflow 是异步完成的。

也同样因为如此，当 JS 获取布局属性时，就可能造成无法获取到最新的布局信息。

浏览器在反复权衡下，最终决定获取属性立即reflow。

## 什么是 repaint?

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0221d4b851a743af9562f5f2bbd3d4bc~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=548&h=199&s=15719&e=png&b=fefefe)

repaint 的本质就是**重新根据分层信息计算了绘制指令**。

当改动了可见样式后，就需要重新计算，会引发repaint。

由于元素的布局信息也属于可见样式，所以**reflow 一定会引起repaint**。

## 为什么 transform 的效率高?

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8029bcee915d4478896f7c0d091c7f76~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=546&h=199&s=17600&e=png&b=fefcfc)

因为 transform 既不会影响布局也不会影响绘制指令，它**影响的只是渲染流程的最后一个「draw」阶段**

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d98b16cacd974f7594095471a7a01d94~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=544&h=236&s=19118&e=png&b=fdfcfc)

由于 draw 阶段在合成线程中，所以 transform 的变化几乎不会影响演染主线程。反之，渲染主线程无论如何忙碌，也不会影响 transform 的变化。