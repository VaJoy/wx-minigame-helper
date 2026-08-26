---
title: "云开发 wx.cloud"
type: api
category: api/cloud
api: "wx.cloud"
source: https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/call/mini.html
---

# 云开发 wx.cloud

> **基础库要求**：调用云托管服务（`callContainer`）需 **2.23.0** 及以上；WebSocket（`connectContainer`）需 **2.21.1** 及以上。
> 
> **微信 Windows 版** / **微信 Mac 版** / **微信鸿蒙 OS 版**：支持

## 功能描述

`wx.cloud` 是基础库内置的云开发/云托管能力入口对象，操作微信云托管服务时**无需引入额外的 SDK**。

> 本文档改编自官方小程序文档；小游戏中的 API 用法与小程序完全一致，仅初始化位置不同（小游戏无 `App.onLaunch`，在 `game.js` 入口执行即可）。

## 成员列表

| 成员 | 类型 | 说明 |
|---|---|---|
| [init](wx.cloud.init.md) | 方法 | 初始化云能力（使用其他 `wx.cloud.*` 接口前，全局执行一次） |
| [callContainer](wx.cloud.callContainer.md) | 方法 | 调用云托管 HTTP 服务（替代 [wx.request](../network/request/wx.request.md)，免域名配置） |
| [connectContainer](wx.cloud.connectContainer.md) | 方法 | 与云托管服务建立 WebSocket 连接（替代 wx.connectSocket，免 socket 域名配置） |
| [Cloud](wx.cloud.Cloud.md) | 构造函数 | 资源复用形态：跨账号访问授权方的云托管环境 |

## 使用优势（对比 wx.request / wx.connectSocket）

1. 不耗费任何公网流量，前后端通信走内网；
2. 天然免疫 DDoS 攻击，仅授权小程序/小游戏/公众号可访问后端，其他人即便拿到环境 id 和服务名也无法访问；
3. 通过微信就近接入节点加速，无视后端服务地域影响，没有跨地域延迟，后端无需多地部署；
4. **无需在管理后台配置「服务器域名」**（request 与 socket 均免配置）；
5. 后端可直接获取用户信息，无需调接口即可以获取 openid 等（详见 [callContainer](wx.cloud.callContainer.md#后端直接获取用户信息)）。

因此，如果云托管服务只有本小程序/小游戏/公众号会调用，建议**在服务设置中关闭公网访问**。

## 使用前提

最简单的情况：「小游戏」对「直属微信云托管环境」的服务进行访问，也就是登录[微信云托管控制台](https://cloud.weixin.qq.com/cloudrun)时选择本小游戏进入的环境。

如果希望另外一个 `B` 小程序/小游戏/公众号也可以访问 `A` 的云托管环境：

1. `A` 和 `B` **同主体**：需要配置[资源复用](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/guide/reuse/index)（前端用法见 [wx.cloud.Cloud](wx.cloud.Cloud.md)）；
2. `A` 和 `B` **不同主体**：推荐使用「[微信开放平台-第三方平台](https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/Third_party_platform_appid)」方式；
3. `A` 和 `B` **不同主体**且不走上述方式：将 `B` 视为「其他客户端」，通过公网访问（参考[其他客户端-访问云托管服务](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/call/client)）。此方式下 `B` 无法使用云调用/微信令牌，且需要配置「服务器域名」。

## 快速上手

```js
// game.js（小游戏入口）—— 全局执行一次
wx.cloud.init() // 仅使用云托管时，env 可不填或填任意环境

// 业务代码任意位置（async 函数内）
const res = await wx.cloud.callContainer({
  config: {
    env: '填入云环境ID' // 微信云托管的环境ID
  },
  path: '/xxx', // 业务自定义路径和参数，根目录就是 /
  method: 'POST',
  header: {
    'X-WX-SERVICE': 'xxx' // 服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称）
  }
})
console.log(res)
```

## 使用限制

- 请求大小限制 **100KiB**（对象类型限制 20 MiB，请求中不建议包含图片，可通过对象存储处理）；
- 返回包大小限制 **1000KiB**；
- 超时时间最大不能超过 **15 秒**，否则无效。

## 关联与说明

- HTTP 调用详见 [wx.cloud.callContainer](wx.cloud.callContainer.md)；WebSocket 详见 [wx.cloud.connectContainer](wx.cloud.connectContainer.md)
- 资源复用（跨账号）详见 [wx.cloud.Cloud](wx.cloud.Cloud.md)
- 官方示例工程：[wxcloud-http-express](../../topics/examples/wxcloud-http-express/README.md)、[wxcloud-websocket-express](../../topics/examples/wxcloud-websocket-express/readme.md)
- 经典云开发（云函数 `callFunction` / 云数据库 `database` / 云存储 `uploadFile` 等）不在本知识库收录范围，见[微信云开发官方文档](https://developers.weixin.qq.com/minigame/dev/wxcloudservice/wxcloud/reference/client-api/)
