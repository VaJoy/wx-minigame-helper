---
title: "wx.cloud.Cloud(Object object)"
type: api
category: api/cloud
api: "wx.cloud.Cloud"
source: https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/call/mini.html
---

# wx.cloud.Cloud(Object object)

## 功能描述

创建一个跨账号的云能力调用实例，用于**资源复用**形态：访问**其他账号**（小程序/小游戏/公众号）授权的云托管环境。

典型场景：小游戏 A（appid：`WXAAA`）的环境 `prod_001` 授权给小游戏 B（appid：`WXBBB`）使用，则 B 侧通过 `new wx.cloud.Cloud()` 创建实例后调用。

> 访问**自己直属的环境**不需要本构造函数：直接 `wx.cloud.init()` 后用 [wx.cloud.callContainer](wx.cloud.callContainer.md)。

## 参数

### Object object

| 属性 | 类型 | 必填 | 说明 |
|---|---|---|---|
| resourceAppid | string | 是 | 环境所属的账号 appid（授权方的小程序/小游戏/公众号 appid） |
| resourceEnv | string | 是 | 微信云托管的环境 ID |

## 实例方法

| 方法 | 说明 |
|---|---|
| init() | 初始化实例。**异步**，需 await 完成后才可发起调用 |
| callContainer(object) | 调用云托管服务，参数与 [wx.cloud.callContainer](wx.cloud.callContainer.md) 一致；因环境已在 `resourceEnv` 中绑定，`config` 可省略 |

## 示例代码

```js
// 资源复用：在 wx.cloud.init 中填写环境来源的账号 appid
// 例如小游戏 A（appid：WXAAA）的环境 prod_001 授权给小游戏 B（appid：WXBBB）使用
const c1 = new wx.cloud.Cloud({
  resourceAppid: 'WXAAA', // 环境所属的账号 appid
  resourceEnv: 'prod-001' // 微信云托管的环境 ID
})
await c1.init()
await c1.callContainer({
  config: {
    env: 'prod-001' // 微信云托管的环境 ID
  },
  path: '/xxx',
  method: 'POST',
  header: {
    'X-WX-SERVICE': 'xxx' // 服务名称
  }
})
```

## 注意事项

1. `init()` 过程是异步的，需要等待 init 完成才可以发起调用；未初始化完成时调用会报错 `Cloud API isn't enabled`，可等待后重试（见 [callContainer 万能封装](wx.cloud.callContainer.md#万能封装官方改编)）；
2. 资源复用情况下，后端获取 openid 的字段和普通获取**不一致**，详见[后端获取用户信息](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/weixin/index)；
3. 同主体资源复用需先在云托管控制台配置[资源复用授权](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/guide/reuse/index)。

## 关联与说明

- 通用调用入口（自有环境）：[wx.cloud.callContainer](wx.cloud.callContainer.md)
- 一步到位的「万能封装」（自有环境与资源复用通吃）：[callContainer 万能封装](wx.cloud.callContainer.md#万能封装官方改编)
