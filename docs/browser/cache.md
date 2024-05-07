---
title: 3. 解决浏览器缓存问题
icon: object-group
order: 3
category:
  - Guide
tag:
  - 解决浏览器缓存问题
---


# 设置请求头
## 方法1：If-Modified-Since设置成0
`If-Modified-Since`请求的HTTP标头发出请求的条件：只有当它已经给定的日期之后被最后修改，服务器才会返回所请求的资源，状态为200。如果资源此后没有被改过，则相应是一个没有任何正文的304返回。当设置为0的时候，相当于**绕过浏览器的缓存，不直接读取缓存数据**。

## 方法2：Cache-Control，Pragma设置
请求头将`Cache-Control`的值设置 `no-cache` 和 `Pragma `的值设置为`no-cache`。高速浏览器不要缓存请求内容。

- **`Cache-Control`** 通用消息头字段，被用于在 http 请求和响应中，通过指定指令来实现缓存机制。缓存指令是单向的，这意味着在请求中设置的指令，不一定被包含在响应中。
- `Pragma` 是 HTTP 1.0 中的头部字段，用于指定缓存的行为，与 Cache-Control 类似。

# URL后面添加时间戳或随机数

URL后面添加时间戳或者随机数原理其实差不多，就是确保每次发送的请求 URL 都是不同的，因此浏览器不会从缓存中获取相同的 URL。

## 方法3：在URL后面加上一个随机数

```js
var randomNumber = Math.random(); // 生成随机数
var url = "example.com/api/data?rand=" + randomNumber;

// 发送请求

```
## 方法4：在URL后面加上时间戳

```js
var timestamp = new Date().getTime(); // 获取当前时间戳
var url = "example.com/api/data?timestamp=" + timestamp;

 // 发送请求...

```