# 微信小游戏开发知识库

基于微信小游戏官方文档（[微信开放文档](https://developers.weixin.qq.com/minigame/dev/)）重新组织的本地知识库，共收录 **1217 篇**文档（917 篇前端 API 参考 + 256 篇开发指南 + 44 篇服务端 API 参考），面向 Agent 检索与人工阅读做了结构化优化。

## 目录结构

```
references/
├── README.md        ← 本文件：知识库入口与使用说明
├── INDEX.md         ← 全量分类索引（按层级组织的完整目录树）
├── CONCEPTS.md      ← 概念关系图谱（核心概念、依赖关系、能力地图）
├── api/             ← 前端 API 参考（917 篇，按功能域分组，文件名即 API 名）
├── guide/           ← 开发指南（256 篇，按主题分组）
├── topics/          ← 任务专题（面向高频开发任务的导航页，串联指南与 API）
└── backend-api/     ← 服务端 API 参考（44 篇，仅开发者服务器可调用）
```

## 信息架构

### api/ — API 参考

按功能域分为 22 个一级分类，每篇文档对应一个 API（类、方法、事件或属性），**文件名即 API 名**：

| 分类 | 内容 |
|---|---|
| `base/` | 生命周期、应用事件、系统信息、更新、调试、性能、分包、加密 |
| `render/` | Canvas、字体、帧控制、图像、GPU |
| `media/` | 音频、视频、相机、录音、图片、视频解码、实时语音 |
| `network/` | 请求、上传下载、WebSocket、TCP/UDP |
| `storage/`、`file/` | 本地缓存、周期性拉取、文件系统 |
| `device/` | 传感器、蓝牙、屏幕、键盘、触摸、振动等 21 类设备能力 |
| `ui/` | 交互反馈、菜单、窗口、状态栏 |
| `open/` | 登录、用户信息、授权、开放数据、订阅消息、游戏圈、视频号等开放接口 |
| `share/`、`ad/`、`midas-payment/` | 分享、广告、支付 |
| `worker/`、`game-server-manager/`、`chattool/` 等 | 多线程、对局服务器、聊天工具等 |

### guide/ — 开发指南

| 分类 | 内容 |
|---|---|
| `getting-started/` | 小游戏介绍、新手教程、进阶指南、配置（game.json）、发布 |
| `base-ability/` | 网络、存储、文件系统、音频、视频、渲染、Worker、模块化、权限等基础能力 |
| `runtime/` | 运行环境、适配层、JS 支持、运行机制、更新机制、基础库、调试 |
| `engine/` | 游戏引擎适配：Unity WebGL 转化（63 篇，按入门/启动/资源/性能/分析/渲染/平台细分）、Cocos/Laya/Egret 等通用适配 |
| `open-ability/` | 开放能力指南，细分为：账号与用户、分享传播、视频号、社区互动、对战与玩法、增长与商业化、消息订阅、数据与排行、虚拟支付、广告、试玩广告、多平台适配 |
| `performance/` | 性能优化，细分为：总览与标准、启动、内存、运行时、渲染、网络、工具 |
| `security/` | 内容安全、反作弊、安全风控 |
| `cocos-packaging/` | Cocos Creator 视角的微信分包/远程包知识（包体限制/bundle 配置/分包/远程包/缓存/实践）|

### topics/ — 任务专题

面向"我要做 X"的入口页，把散落在 guide 和 api 中的相关文档串成一条路径。适合作为 Agent 回答复杂问题时的第一跳。

### backend-api/ — 服务端 API 参考

微信小游戏**服务端（后端）**开放接口，只能在开发者服务器调用。**文件名即后端接口英文名**，每篇文末附「关联与说明」串联对应的前端 `wx.*` 接口与 `access_token` 依赖。

| 分类 | 内容 |
|---|---|
| `access-token/`、`login/` | 接口调用凭据、code2Session、登录态校验/重置 |
| `wxa-sec-check/`、`safety-control-capability/`、`internet/` | 内容安全审核、安全风控、用户加密密钥 |
| `data/`、`data-analysis/` | 用户云端数据存储、数据分析 |
| `subscribe-message/`、`updatable-message/`、`qr-code/`、`url-scheme/`、`url-link/` | 订阅消息、动态消息、小程序码/二维码、scheme、URL Link |
| `midas-payment/` | 米大师游戏币余额/扣除/赠送与订单查询 |
| `cloudbase/`、`gamematch/`、`lock-step/` | 云开发、对局匹配、帧同步对战 |

## Agent 检索指南

1. **按 API 名精确查找**：文件名即 API 全名，如查找 `wx.login`：
   ```bash
   find references/api -name "wx.login.md"
   ```
   类的方法/属性/事件以 `类名.成员名.md` 命名，如 `FileSystemManager.readSync.md`。

2. **按主题浏览**：从 [INDEX.md](INDEX.md) 或对应目录的 `README.md` 进入，每个目录的 README 含全部文档的一句话简介。

3. **按任务查找**：先看 [topics/](topics/README.md) 是否覆盖该任务，专题页会列出相关的指南与 API 清单。

4. **理解概念关系**：查 [CONCEPTS.md](CONCEPTS.md)，了解概念之间的依赖（如"登录 → session_key → 开放数据"）。

5. **文档元信息**：每篇文档头部有 YAML frontmatter：
   ```yaml
   title: 文档标题
   type: api | guide | backend-api
   category: 所属分类路径
   api: API 名（仅 API 文档）
   source: 官方原文 URL
   ```

6. **服务端接口**：后端接口位于 `backend-api/`，文件名即后端接口英文名；文末「关联与说明」指向对应的前端 `references/api/...` 文档与 `access_token` 依赖。这类接口只能在开发者服务器调用，前端不可直接调用。

## 约定与说明

- 文档内部链接已全部改写为本地相对链接（指向本知识库内文件）；本地未收录的内容改写为官网绝对链接。
- 图片等资源仍引用微信官方 CDN 地址，需联网查看。
- 原文档中的版本信息（如"基础库 2.13.2 开始支持"）均已保留，使用时注意[兼容性处理](guide/runtime/client-lib/compatibility.md)。
- 原始官方抓取文档来源见各文件 frontmatter 的 `source` 字段（前端来自 `minigame/dev/`、服务端来自 `minigame/dev/api-backend/`）；工作区未随知识库保留原始抓取目录。
