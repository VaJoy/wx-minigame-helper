---
title: "wx.cloud.getTempFileURL(Object object)"
type: api
category: api/cloud
api: "wx.cloud.getTempFileURL"
source: https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/storage/miniapp/gettempurl.html
---

# wx.cloud.getTempFileURL(Object object)

> **以 Promise 风格调用**：支持（不传 `success` / `fail` / `complete` 时返回 Promise）
>
> **基础库要求**：属于微信云托管「对象存储」能力，随云托管能力开放（无独立最低版本硬性要求；当前云托管调用链路建议基础库 2.21.1+，以对齐云能力）

## 功能描述

用云文件 ID 换取真实可访问的临时链接（云托管对象存储）。适用于把上传到云存储的文件（图片、音频、配置等）以可下载 URL 形式交给前端展示或下载。

- 公有读的文件，获取的链接**不会过期**；
- 私有文件，获取的链接**默认 24 小时有效期**，可用 `fileList[].maxAge` 自定义；
- 一次最多取 **50 个**。

> 文档改编自官方**小程序**云托管文档，但 `wx.cloud` 在小游戏中的用法与小程序完全一致；仅初始化位置不同（小游戏无 `App.onLaunch`，在 `game.js` 入口执行 `wx.cloud.init()` 即可）。

使用前需已调用 [wx.cloud.init](wx.cloud.init.md)（全局一次，env 可不填；或在调用时通过 `config.env` 指定环境）。

## 请求参数

| 字段 | 说明 | 数据类型 | 默认值 | 必填 |
|---|---|---|---|---|
| fileList | 云文件 ID 列表 | Object / String[] | | 是 |
| config | 配置 | Object | | 否 |
| success | 成功回调 | | | 否 |
| fail | 失败回调 | | | 否 |
| complete | 结束回调 | | | 否 |

### 请求参数 fileList 的结构

| 字段 | 说明 | 数据类型 |
|---|---|---|
| fileID | 云文件 ID | String |
| maxAge | 有效期时长，单位秒 | number |

> `fileList` 元素可为**云文件 ID 字符串**（如 `'cloud://test.png'`），或 **`{ fileID, maxAge }` 对象**；两种写法混用亦可。

### config 对象定义

| 字段 | 说明 | 数据类型 |
|---|---|---|
| env | 使用的环境 ID，填写后忽略 init 指定的环境 | String |

## 返回值（success）

| 字段 | 说明 | 数据类型 |
|---|---|---|
| fileList | 文件列表 | Object |
| errMsg | 成功为 ok，失败为失败原因 | String |

### 返回参数 fileList 的结构

| 属性 | 类型 | 说明 |
|---|---|---|
| fileID | string | 云文件 ID |
| tempFileURL | string | 临时文件路径 |
| maxAge | number | 有效期时长，单位秒 |
| status | number | 状态码，0 为成功 |
| errMsg | string | 成功为 ok，失败为失败原因 |

### fail 返回参数

| 字段 | 说明 | 数据类型 |
|---|---|---|
| errCode | 错误码 | Number |
| errMsg | 错误信息，格式 `getTempFileURL:fail msg` | String |

## 基本使用

### 1. Promise 风格

```js
// 小游戏入口 game.js 已执行过 wx.cloud.init()
const res = await wx.cloud.getTempFileURL({
  fileList: [{
    fileID: 'cloud://test.png', // 对象存储文件ID，最多50个，从上传文件接口或控制台获取
    maxAge: 86400              // 有效期时长，单位秒，默认 86400
  }]
})
console.log(res.fileList) // [{ fileID, tempFileURL, maxAge, status, errMsg }]
```

```js
// 或传字符串数组（最简）
const res = await wx.cloud.getTempFileURL({
  fileList: ['cloud://test.png']
})
console.log(res.fileList)
```

### 2. Callback 风格

```js
wx.cloud.getTempFileURL({
  fileList: [{
    fileID: 'cloud://test.png',
    maxAge: 86400
  }],
  success: res => {
    console.log(res.fileList)
  },
  fail: err => {
    console.error(err)
  },
  complete: res => {
    console.log(res)
  }
})
```

### 3. 完整示例（封装成一个方法）

```js
// 小游戏某个模块内
/**
 * 获取微信云托管对象存储文件的临时访问地址
 * @param {string | string[]} fileID 对象存储文件ID，可以是单个 fileID，也可以是 ID 列表
 * @param {number} time 有效时间，单位秒，默认 86400
 */
async function getTempFile(fileID, time = 86400) {
  const list = (typeof fileID === 'string' ? [fileID] : fileID).map(item => ({
    fileID: item,
    maxAge: time
  }))
  return await wx.cloud.getTempFileURL({ fileList: list })
}

// 用法
async function onLoad() {
  const result = await getTempFile('cloud://test.png', 500)
  console.log(result.fileList[0].tempFileURL)
}
```

## 资源复用（跨账号访问）

若访问的是授权方的云托管环境（资源复用），需先创建并初始化 `Cloud` 实例（异步），再在其上调用 `getTempFileURL`：

```js
// game.js —— 小游戏入口
const c1 = new wx.cloud.Cloud({
  resourceAppid: 'wx886699112233', // 环境所属的账号 appid
  resourceEnv: 'prod-weruntest'     // 微信云托管的环境 ID
})

async function onLaunch() {
  await c1.init() // 初始化是异步的，需 await 完成后再调用
  const res = await c1.getTempFileURL({
    fileList: ['cloud://test.png']
  })
  console.log(res.fileList)
}
```

## 注意事项

- **数量上限**：一次最多取 50 个文件；
- **有效期**：公有读链接不过期；私有文件默认 24h（`maxAge` 自定义）；
- **环境**：`config.env` 可覆盖 `init` 指定的环境；资源复用形态下 env 已绑定在 `resourceEnv`；
- **错误处理**：`res.fileList` 中每一项都有 `status`（0 为成功）与 `errMsg`，**批量请求时即使整体成功，单个文件也可能失败**，需逐条判断 `status`；
- **类型声明**：配套 TS 类型在 `scripts/types/cloud.d.ts`（`WxCloudGetTempFileURLOption` / `WxCloudGetTempFileURLSuccessCallbackResult` 等），`getTempFileURL` 已挂载到 `WxCloudApi` 与 `WxCloudInstance`。

## 相关接口

- 初始化：[wx.cloud.init](wx.cloud.init.md)
- 资源复用：[wx.cloud.Cloud](wx.cloud.Cloud.md)
- 云托管 HTTP 调用：[wx.cloud.callContainer](wx.cloud.callContainer.md)
- 云托管 WebSocket：[wx.cloud.connectContainer](wx.cloud.connectContainer.md)
- 能力入口总览：[wx.cloud](wx.cloud.md)
