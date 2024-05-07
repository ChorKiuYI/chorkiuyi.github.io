---
title: 5. 鉴权，单点登陆，JWT和Token等
icon: object-group
order: 5
category:
  - Guide
tag:
  - 鉴权，单点登陆，JWT和Token等
---

# 鉴权
## 什么是鉴权？
1. 鉴权（authentication）：是指验证用户是否拥有访问系统的权利。
## 为什么要鉴权？
1. 用户鉴权，网络对用户进行鉴权，**防止非法用户占用网络资源**。
2. 网络鉴权，用户对网络进行鉴权，**防止用户接入了非法的网络，被骗取关键信息**。

## 常用的鉴权方式
1. HTTP Basic Authentication
2. sessio
3. n-cookie
4. Token 验证
5. OAuth(开放授权)

## Token
Token在计算机身份认证中是令牌（临时）的意思，简单来说就是**访问资源的凭据**。

## Refresh Token
Refresh Token是在OAuth2协议中用来刷新Access Token的，它是通过客户端持有的Refresh Token来获取新的Access Token。Refresh Token具有一定的有效期，在有效期内可以多次使用。当Access Token失效或者过期时，客户端可以使用Refresh Token来请求新的Access Token，从而不用重新请求用户授权。

OAuth2协议中的OAuth2是一段长期有效的Token，用于刷新Access Token。认证服务器在发放Access Token时，同时也发放一个Refresh Token。当请求中的Access Token过期时，客户端携带Refresh Token向认证服务器发起请求，认证服务器会根据该Refresh Token发放新的Access Token。

## JWT（Json Web Token）
详细看下面的参考文章，简单来说就是你登录之后，服务器会返回一个token给你作为访问凭证，一般把这个token放到HTTP 请求的头信息`Authorization`字段里面


# SSO(Single Sign On 单点登录)

## 什么是单点登录？
1.单点登录（Single Sign On）：简称为 SSO，是比较流行的*企业业务整合的解决方案*之一。SSO的定义是**在企业内部多个应用系统中（如考勤系统，人事系统，财务系统等）场景下，用户只需要登录一次就可以访问所有相互信任的应用系统，同样只需注销一次就能在多个系统退出登录**。 一次登录，全部登录，一次退出，全部退出。

## 为什么要单点登录？
以往用户需要分别对接各个应用系统进行登录/注销，现在用户只需要单独对接认证系统进行登录/注销。登录状态在各个应用系统间共享，体现了把简单留给用户，把复杂留给后台系统的设计理念。极大节省了用户时间，提高了用户体验。

### 单点登录优点

**1）提高用户的效率。**
用户不再被多次登录困扰，也不需要记住多个 ID 和密码。另外，用户忘记密码并求助于支持人员的情况也会减少。

**2）提高开发人员的效率。** SSO 为开发人员提供了一个通用的**身份验证**框架。实际上，如果 SSO 机制是独立的，那么开发人员就完全不需要为身份验证操心。他们可以假设，只要对应用程序的请求附带一个用户名，身份验证就已经完成了。

**3）简化管理。** 如果应用程序加入了单点登录协议，管理用户帐号的负担就会减轻。简化的程度取决于应用程序，因为 SSO 只处理身份验证。所以，应用程序可能仍然需要设置用户的属性（比如访问特权
**
### 单点登录缺点
**1）不利于重构** 因为涉及到的系统很多，要重构必须要兼容所有的系统，可能很耗时。

**2） 无人看守桌面** 因为只需要登录一次，所有的授权的应用系统都可以访问，可能导致一些很重要的信息泄露


# 问：
## 1.token有什么用？
主要的作用就是为了安全，用户登陆时，服务器会随机生成一个有时效性的token,用户的每一次请求都需要携带上token，证明其请求的合法性，服务器会验证token，只有通过验证才会返回请求结果。

## 2.Access token与refesh token区别？

|  | token | refesh token |
| --- | --- | --- |
| 含义 | 访问令牌, 它是一个用来访问受保护资源的凭证 | 刷新令牌, 它是一个用来获取access token的凭证 |
|时效|时效短|时效长|
|过期后|access_token 过期后, 可以使用 refresh_token 重新获取|refresh_token 过期后就只能重新授权了, 也没有 refresh_refresh_token|

## 3. 如果 refesh token 也过期了怎么办？

这就需要用户重新登陆授权了

## 4. 为什么要区分 refresh token 和 access token ？

这样的处理是为了职责的分离：refresh token 负责身份认证，access token 负责请求资源。虽然 refresh token 和 access token 都由 IdP 发出，但是 access token 还要和 SP 进行数据交换，如果公用的话这样就会有身份泄露的可能。并且 IdP 和 SP 可能是完全不同的服务提供的。

IdP 是 Identity Provider 的缩写，指认证中心，在认证过程中 IdP 持有用户信息，并与用户建立会话。（负责身份验证和凭据管理的中心身份服务）

SP 是 Service Provider 的缩写，指服务提供者，当用户访问 SP 提供的服务时，如果 SP 无法识别用户，会请求 IdP 对用户进行认证。（提供需要身份验证的应用程序或系统）

# 5.那么为什么不只是 access_token 并将其过期时间设置得更长呢？/如果合并成一个 token 然后把过期时间调整的更长，并且每次失效之后用户重新登陆授权就好了？
Oauth2 规范不推荐使用不可过期的令牌。标记词本身意味着一个可过期的东西。如果它没有过期，我们可以使用密码。
通常当令牌过期时，会强制登录。但是有一些要求，用户不想每 3600 毫秒再次登录和登录。因此，**refresh_token** 有助于不打扰我们的用户并**无需人工登录即可获得新的 access_token**。




[一分钟了解单点登录](https://mp.weixin.qq.com/s?__biz=MjM5MTQ0MTQ2Mg==&mid=2650877508&idx=1&sn=4d365272d097e405552fa422d6a9f715&chksm=bd40f91d8a37700bd598e6f176b8013fdbf4240608fd703e148865c496778218c8b6b8130efe&scene=27)

[10 分钟带你了解鉴权那些事](https://blog.csdn.net/ningmengban/article/details/117364407)

[不要用JWT替代session管理（上）：全面了解Token,JWT,OAuth,SAML,SSO](https://zhuanlan.zhihu.com/p/38942172)

[用户登录后过期自动刷新token操作](https://www.jiangweishan.com/article/js202001013a1.html)

[如何以及为什么使用 refresh_token 处理 jwt 令牌过期，还有另一种选择吗？ [关闭]](https://www.likecs.com/ask-574792.html )

[关于 Token 过期问题的两种解决方案](https://blog.csdn.net/m0_65812066/article/details/128577183)

