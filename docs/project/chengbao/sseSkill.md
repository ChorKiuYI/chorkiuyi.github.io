---
title: 非车险承保
icon: circle-info
---

情景：非车险承保




<!-- ---
title: 服务器发送事件(Server-Sent Events)
icon: circle-info
---

情景：首页工作台的数据信息需要每隔1分钟更新一次最新的数据

## 服务端向客户端推送数据的实现方案
我们常规实现这些需求的方案有以下三种：
1. 轮询： setinterval +客户端访问服务器 
2. websocket：全双工通道，可以双向通信，功能更强
3. SSE：单向通道，只能服务器向浏览器端发送

因为这里的需求不用双向通信，并且所在项目并不要求兼容IE，所以考虑SSE作为解决方案


## SSE有哪些主要的API?

>建立一个SSE链接 ：var source = new EventSource(url);

### SSE连接状态
source.readyState
- 0，相当于常量EventSource.CONNECTING，表示连接还未建立，或者连接断线。
- 1，相当于常量EventSource.OPEN，表示连接已经建立，可以接受数据。
- 2，相当于常量EventSource.CLOSED，表示连接已断，且不会重连。

### SSE相关事件
- open事件(连接一旦建立，就会触发open事件，可以定义相应的回调函数)
- message事件(收到数据就会触发message事件)
- error事件(如果发生通信错误（比如连接中断），就会触发error事件)

数据格式
```js
Content-Type: text/event-stream //文本返回格式
Cache-Control: no-cache  //不要缓存
Connection: keep-alive //长链接标识
```

SSE：相关文档，文档入口文档入口文档入口文档入口

显然，如果直接看api介绍不论是看这里还是看官网，大部分同学都是比较懵圈的状态，那么我们写个demo来看一下?
demo请看下方

我更建议您先把Demo跑起来，然后在看看上面这个w3cschool的SSE文档。两个配合一起看，会更方便理解些。

https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247493492&idx=1&sn=9ac1e7229e42963e92fc892bcc6eada9&chksm=c31aa6b4f46d2fa2ee2e2be418b6ded6e57c3c55daea7c25a726d1b46ed7d8372fbaa6c8bb8c&mpshare=1&scene=1&srcid=0507ly8BuunooCktRGYzReM6&sharer_shareinfo=576d23b3fb96b6d2cc6c4c9299bf4261&sharer_shareinfo_first=576d23b3fb96b6d2cc6c4c9299bf4261&exportkey=n_ChQIAhIQ5scBING6XcRxFw8MFIKUGRLkAQIE97dBBAEAAAAAADw7OaR8z1AAAAAOpnltbLcz9gKNyK89dVj07HrwYKaxF58lD7e7DyBuYWqRj4XRgfzE7Cmak3JE6g%2Bn11MpDDtfhzS1xKe7LBbJfeCcvuw2neGddgx1P8cnDZK8ZfPIZEymhwNAZ%2FxmqZUSxoLzrEBwHBm6yQRxqGiV9UPqwqgpNrwYNsgPj9zpSNx76TnGKvcvASeDTIKk6H%2FPBt6x%2F67Td1RLUFIrrz%2FU5mojtEc8vMNGz27Wq9XCpYGDOBwtH9%2BbwF3KFghomyTl5CqYqDYIzCmetiNdfw%3D%3D&acctmode=0&pass_ticket=8bVB3VqkAC9W4PaLk5RDA5AzyLdUGuInENi%2FYXk3nl0ADbuxgA%2Firk5OkKzT1n1cf12NFr%2BlaisT9GPGYBJzGg%3D%3D&wx_header=0#rd -->