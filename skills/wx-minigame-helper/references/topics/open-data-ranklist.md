# 专题：开放数据域与好友排行榜

> 任务：实现"微信好友排行榜""群排行榜"等涉及好友关系链数据的功能。

## 核心概念

关系链数据（好友列表、群数据）**不能**在主域直接获取。必须在**开放数据域**（一个独立的、无网络能力的封闭 JS 环境）中拉取并绘制到共享 Canvas 上，主域通过 `sharedCanvas` 把它贴到游戏画面中。

```
主域 ──postMessage──> 开放数据域（拉取好友数据 → 绘制 sharedCanvas）
主域 <──sharedCanvas（只能作为纹理上屏，读不到数据）
```

## 实施步骤

1. 在 `game.json` 配置 `openDataContext` 指向开放数据域目录（见[配置](../guide/getting-started/configuration.md)）。
2. 用 `wx.setUserCloudStorage` 上报玩家分数（托管数据）。
3. 开放数据域内用 `wx.getFriendCloudStorage` / `wx.getGroupCloudStorage` 拉取排行数据并绘制。
4. 群排行需要 shareTicket：分享时带 `withShareTicket: true`，再用 `wx.getShareInfo` 换取。

## 关键文档

### 指南
- [关系链数据/开放数据](../guide/open-ability/data/open-data.md) — 概念入口
- [开放数据域](../guide/open-ability/data/opendata/) — 开放数据域的工程结构
- [排行榜](../guide/open-ability/data/ranklist.md) — 排行榜完整方案（含互动提醒）
- [互动型托管数据](../guide/open-ability/data/interactive-data.md) — 好友点赞、送礼物
- [数据签名](../guide/open-ability/data/signature.md) — 托管数据防篡改校验

### API（api/open/data/，共 24 篇）
- [wx.getOpenDataContext](../api/open/context/wx.getOpenDataContext.md) → OpenDataContext.postMessage
- [wx.setUserCloudStorage](../api/open/data/wx.setUserCloudStorage.md) / [wx.removeUserCloudStorage](../api/open/data/wx.removeUserCloudStorage.md)
- [wx.getFriendCloudStorage](../api/open/data/wx.getFriendCloudStorage.md)、[wx.getGroupCloudStorage](../api/open/data/wx.getGroupCloudStorage.md)、[wx.getGroupInfo](../api/open/data/wx.getGroupInfo.md)
- [wx.shareMessageToFriend](../api/open/data/wx.shareMessageToFriend.md) — 互动型数据分享
- [wx.getShareInfo](../api/share/wx.getShareInfo.md) — shareTicket 解密换取群信息

## 常见坑

1. 开放数据域**不能发网络请求**、不能调用 wx.login，只能通过 postMessage 与主域通信。
2. `setUserCloudStorage` 的 KV 数据有数量和长度限制，见 API 文档。
3. 获取群数据要求该分享确实带上了 shareTicket 且用户在该群中。

## 在 Cocos 中的应用

在 Cocos Creator 3.8 里做微信好友排行榜，链路是：**开放数据域负责"画"，Cocos 主域负责"显示"**。主域看不到子域的节点，只能看到它渲染到 sharedCanvas 的像素——由 `SubContextView` 组件把像素搬到 UI 上。

> 更多详情见 [Cocos 官方文档 - 开放数据域](https://docs.cocos.com/creator/3.8/manual/zh/editor/publish/build-open-data-context.html)。

### 总体架构

```
主域（Cocos 场景）
  ├─ 节点挂 SubContextView（显示区域 = 节点尺寸）
  ├─ wx.getOpenDataContext().postMessage(...) → 通知子域（视口/数据/渲染命令）
  └─ SubContextView 每帧把 sharedCanvas 上传为纹理显示
开放数据域（game.json 配置 openDataContext 指向的独立目录）
  ├─ wx.onMessage() 接收主域消息
  ├─ wx.getFriendCloudStorage() 拉好友托管数据
  └─ wx.getSharedCanvas().getContext('2d') 绘制排行榜
```

### ① 开放数据域代码（子域入口 index.js）

在 `game.json` 配置 `openDataContext` 指向的独立目录：

```js
{ "deviceOrientation": "portrait", "openDataContext": "myOpenDataContext" }
```

接在对应的开放数据域入口文件 `myOpenDataContext/index.js` 中监听数据和绘制内容到 `sharedCanvas`：

```js
const sharedCanvas = wx.getSharedCanvas();   // 只能开放数据域调用
const ctx = sharedCanvas.getContext('2d');   // 子域 canvas（即离屏的 sharedCanvas）

wx.onMessage((msg) => {                       // 监听来自主域的数据
  if (msg.command === 'render') render();     // 宽高重设后内容被清空，必须重绘
  if (msg.type === 'rank') drawRank(msg.list);
});

wx.getFriendCloudStorage({
  keyList: ['score'],
  success (res) { drawRank(res.data); },      // [{ openId, avatarUrl, nickName, data }]
});

function drawRank (list) {
  ctx.clearRect(0, 0, sharedCanvas.width, sharedCanvas.height);
  list.forEach((item, i) => {
    ctx.fillStyle = '#fff';
    ctx.font = '18px sans-serif';
    ctx.fillText(`${i + 1}. ${item.nickName}  ${item.data.score}`, 20, 30 + i * 30);
  });
}
```

### ② 主域 Cocos 侧

场景里给显示排行榜的节点挂 `cc.SubContextView` 组件（菜单 Miscellaneous/SubContextView，源码 `cocos/ui/sub-context-view.ts`），配置 `designResolutionSize`（运行时可读、编辑器配置）。需要发数据时：

```ts
const odc = wx.getOpenDataContext();
odc.postMessage({ type: 'rank', list: myRankList });  // 向子域发送数据
```

### SubContextView 组件要点

| 机制 | 源码 | 说明 |
|---|---|---|
| 取开放数据域实例 | `onLoad`（`:125`） | 非微信平台自动禁用组件 |
| 设置 sharedCanvas 尺寸 | `_initSharedCanvas`（`:146`） | 用 `designResolutionSize`；**微信有 513px 最小值限制**（过小不渲染，`:151-162`） |
| sharedCanvas → 纹理 | `_initContentNode`（`:168`） | 包成 Sprite 显示 |
| 每帧上传纹理 | `_updateSubContextTexture`（`:233`） | 受 `fps` 控制（默认 60） |
| 视口通知子域 | `_updateSubContextView`（`:194`） | 节点尺寸/变换变化时 postMessage 视口 |
| 自动监听 | `_registerNodeEvent`（`:252`） | 监听 TRANSFORM/SIZE_CHANGED 自动更新 |

### 必须记住的坑（Cocos 场景同样适用）

1. **sharedCanvas 宽高只能在主域设置**（`odc.canvas.width = ...`）；重设会清空内容，设完必须 `postMessage({command:'render'})` 让子域重绘。
2. **通信单向**：主域 → 子域（postMessage），子域不能反向发。
3. **`wx.getSharedCanvas()` 只有开放数据域能调用**；主域用 `wx.getOpenDataContext()`（基础库 1.9.92+）拿实例。
4. 子域 API 受限：rAF/Timer/触摸/2d 画布/开放数据 API；图片只能用本地或微信 CDN（远程图需主域 `wx.downloadFile` 后传路径给子域）。
5. 子域 canvas 不能 `toDataURL` / `toTempFilePath`。
6. **screenCanvas 模式**（基础库 3.6.6+，`getOpenDataContext({sharedCanvasMode:'screenCanvas'})`）：sharedCanvas 变为在屏 canvas，**不再需要 SubContextView 这种纹理上传方式**；一旦选定模式不可切换。
7. 复杂的排行榜 UI 建议用 `minigame-canvas-engine`（Layout）等轻量渲染引擎，纯手写 ctx 成本高。

### 与微信原生方式的关系

不依赖 Cocos 时（纯微信），主域用 `wx.createCanvas()` + `context.drawImage(sharedCanvas, 0, 0)` 手动上屏（offscreenCanvas 模式）；Cocos 里这一步由 SubContextView 替你完成（sharedCanvas → Texture2D → Sprite）。两者底层是同一套 sharedCanvas 机制。
