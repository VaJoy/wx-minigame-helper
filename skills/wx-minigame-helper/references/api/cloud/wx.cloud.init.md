---
title: "wx.cloud.init(Object object)"
type: api
category: api/cloud
api: "wx.cloud.init"
source: https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/call/mini.html
---

# wx.cloud.init(Object object)

## 功能描述

初始化云能力。**使用 `wx.cloud.callContainer` / `wx.cloud.connectContainer` 前一定要先 init 一下，全局执行一次即可**。

小游戏没有 `App.onLaunch`，在 `game.js` 入口文件最顶部执行即可。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| env | string |  | 否 | 环境名称。**仅使用云托管（callContainer/connectContainer）时可不填或填任意环境**，真正的环境在每次调用的 `config.env` 中指定 |
| traceUser | boolean | false | 否 | 是否在将用户访问记录到用户管理中（方便在控制台看到用户访问记录） |

## 示例代码

```js
// game.js（小游戏入口）—— 全局执行一次
wx.cloud.init()
// 或带配置
wx.cloud.init({
  traceUser: true
})
```

## 注意事项

1. `init` 只需执行一次，重复调用无意义；
2. 资源复用（跨账号访问授权方环境）时不要用 `wx.cloud.init`，改用 [new wx.cloud.Cloud()](wx.cloud.Cloud.md)；
3. `Cloud` 实例的 `init()` 是**异步**的，需要 `await` 完成（或按 [callContainer](wx.cloud.callContainer.md) 万能封装中的重试逻辑处理）后才可发起调用。
