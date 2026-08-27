---
title: "wx.cloud.downloadFile(Object object)"
type: api
category: api/cloud
api: "wx.cloud.downloadFile"
source: https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/storage/miniapp/download.html
---

# wx.cloud.downloadFile(Object object)

> **调用风格**：支持两种
> - 传入 `success` / `fail` / `complete` 任一回调 → 返回 **`downloadTask`**（可用 `onProgressUpdate` 监听下载进度、`abort` 取消任务）
> - 不传任何回调 → 返回 **Promise**（resolve 出 `{ tempFilePath, statusCode, errMsg }`）
>
> **基础库要求**：属于微信云托管「对象存储」能力，随云托管能力开放（无独立最低版本硬性要求；当前云托管调用链路建议基础库 2.21.1+，以对齐云能力）

## 功能描述

从云托管对象存储空间下载文件到小游戏本地临时路径（替代 `wx.downloadFile`，走云托管通道）。返回的 `tempFilePath` 是本地临时文件，需用 `wx.saveFile` 才能持久化到本地用户目录。

- `fileID` 必填，即对象存储文件 ID（从上传接口或控制台获取，形如 `cloud://test.png`）；
- `config.env` 可覆盖 `wx.cloud.init` 指定的环境；
- 资源复用形态（new `wx.cloud.Cloud`）同样提供此方法，env 已绑定在 `resourceEnv`。

> 文档改编自官方**小程序**云托管文档，但 `wx.cloud` 在小游戏中的用法与小程序完全一致；仅初始化位置不同（小游戏无 `App.onLaunch`，在 `game.js` 入口执行 `wx.cloud.init()` 即可）。

使用前需已调用 [wx.cloud.init](wx.cloud.init.md)（全局一次，env 可不填；或在调用时通过 `config.env` 指定环境）。

## 请求参数

| 字段 | 说明 | 数据类型 | 默认值 | 必填 |
|---|---|---|---|---|
| fileID | 云文件 ID | String | | 是 |
| config | 配置 | Object | | 否 |
| success | 成功回调 | | | 否 |
| fail | 失败回调 | | | 否 |
| complete | 结束回调 | | | 否 |

### config 对象定义

| 字段 | 说明 | 数据类型 |
|---|---|---|
| env | 使用的环境 ID，填写后忽略 init 指定的环境 | String |

## 返回值

**若传入任一回调**：返回一个 `downloadTask` 对象（与 [wx.downloadFile](../../api/network/download/wx.downloadFile.md) 返回类型一致），可监听下载进度变化事件、取消下载任务：

| downloadTask 方法 | 说明 |
|---|---|
| `onProgressUpdate(callback)` | 监听下载进度变化（`res.progress` / `res.totalBytesWritten` / `res.totalBytesExpectedToWrite`） |
| `offProgressUpdate(callback)` | 取消监听 |
| `onHeadersReceived(callback)` | 监听响应头（配合 `redirect: 'manual'` 可拦截 3xx 重定向） |
| `offHeadersReceived(callback)` | 取消监听 |
| `abort()` | 中断下载任务 |

> 官方文档在描述 `downloadTask` 时写的是「上传进度变化事件」，属于笔误；下载场景实际是**下载进度**，对应 `onProgressUpdate` 回调中的 `progress` 字段。

**若未传回调（Promise 风格）**：resolve 出以下 success 结果。

### success 返回参数（Promise resolve / success 回调）

| 字段 | 说明 | 数据类型 |
|---|---|---|
| tempFilePath | 临时文件路径（下载到本地的文件，可用 `wx.saveFile` 持久化） | String |
| statusCode | 服务器返回的 HTTP 状态码 | Number |
| errMsg | 成功为 `downloadFile:ok`，失败为失败原因 | String |

### fail 返回参数

| 字段 | 说明 | 数据类型 |
|---|---|---|
| errCode | 错误码 | Number |
| errMsg | 错误信息，格式 `downloadFile:fail msg` | String |

## 基本使用

### 1. Promise 风格

```js
// 小游戏入口 game.js 已执行过 wx.cloud.init()
const res = await wx.cloud.downloadFile({
  fileID: 'cloud://test.png' // 对象存储文件ID，从上传文件接口或控制台获取
})
console.log(res.tempFilePath) // 本地临时路径
// 如需持久化：wx.saveFile({ tempFilePath: res.tempFilePath })
```

### 2. Callback 风格

```js
wx.cloud.downloadFile({
  fileID: 'cloud://test.png',
  success: res => {
    console.log(res.tempFilePath)
  },
  fail: err => {
    console.error(err)
  }
})
```

### 3. 完整示例（封装 + 进度回调 + 可中断）

```js
// 小游戏某个模块内
/**
 * 下载微信云托管对象存储文件到本地
 * @param {string} fileID 对象存储文件 ID
 * @param {(res)=>void|boolean} onCall 进度回调；返回 false 时中断下载
 */
function downloadFile(fileID, onCall = () => {}) {
  return new Promise((resolve, reject) => {
    const task = wx.cloud.downloadFile({
      fileID,
      success: res => resolve(res),
      fail: e => {
        const info = e.toString()
        if (info.indexOf('abort') !== -1) {
          reject(new Error('【文件下载失败】中断下载'))
        } else {
          reject(new Error('【文件下载失败】网络或其他错误'))
        }
      }
    })
    task.onProgressUpdate((res) => {
      console.log(`下载进度：${res.progress}%，已下载${res.totalBytesWritten}B，共${res.totalBytesExpectedToWrite}B`)
      // 例如下载过半即终止：if (res.progress > 50) return false
      if (onCall(res) === false) {
        task.abort()
      }
    })
  })
}

// 用法
async function onLoad() {
  const result = await downloadFile('cloud://test.png', (res) => {
    if (res.progress > 50) return false // 测试：下载一半就终止
  })
  wx.saveFile({ tempFilePath: result.tempFilePath }).then(console.log)
}
```

## 资源复用（跨账号访问）

若访问的是授权方的云托管环境（资源复用），需先创建并初始化 `Cloud` 实例（异步），再在其上调用 `downloadFile`：

```js
// game.js —— 小游戏入口
const c1 = new wx.cloud.Cloud({
  resourceAppid: 'wx886699112233', // 环境所属的账号 appid
  resourceEnv: 'prod-weruntest'     // 微信云托管的环境 ID
})

async function onLaunch() {
  await c1.init() // 初始化是异步的，需 await 完成后再调用
  c1.downloadFile({
    fileID: 'cloud://test.png',
    success: res => {
      console.log(res.tempFilePath)
    },
    fail: err => {
      console.error(err)
    }
  })
}
```

## 注意事项

- **回调决定返回值**：传入任一回调 → 返回 `downloadTask`（可 `abort` / `onProgressUpdate`）；不传回调 → 返回 Promise。两种风格**不要混用**（传了回调再用 `await` 拿到的不是结果对象）；
- **临时文件需持久化**：`tempFilePath` 是临时路径，重启或缓存清理后失效；需长期保存用 `wx.saveFile`；
- **进度监听**：用 `downloadTask.onProgressUpdate` 拿实时进度，在回调里 `return false` 并不能中断（官方示例里通过 `task.abort()` 主动中断）——本库示例已修正；
- **环境**：`config.env` 可覆盖 `init` 指定的环境；资源复用形态下 env 已绑定在 `resourceEnv`；
- **与 `getTempFileURL` 的区别**：`getTempFileURL` 返回的是**可公网访问的 URL 字符串**（适合直接塞给 `<img>`/`cc.assetManager`）；`downloadFile` 直接把文件落到**本地临时路径**（适合需要读文件内容/持久化的场景）；
- **类型声明**：配套 TS 类型在 `scripts/types/cloud.d.ts`（`WxCloudDownloadFileOption` / `WxCloudDownloadFileSuccessCallbackResult` 等），`downloadFile` 已挂载到 `WxCloudApi` 与 `WxCloudInstance`，并用函数重载精确区分「回调 → DownloadTask / 无回调 → Promise」。

## 相关接口

- 初始化：[wx.cloud.init](wx.cloud.init.md)
- 资源复用：[wx.cloud.Cloud](wx.cloud.Cloud.md)
- 换临时链接（不落本地）：[wx.cloud.getTempFileURL](wx.cloud.getTempFileURL.md)
- 底层网络下载：[wx.downloadFile](../../api/network/download/wx.downloadFile.md)
- 云托管 HTTP 调用：[wx.cloud.callContainer](wx.cloud.callContainer.md)
- 云托管 WebSocket：[wx.cloud.connectContainer](wx.cloud.connectContainer.md)
- 能力入口总览：[wx.cloud](wx.cloud.md)
