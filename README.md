# 微信小游戏开发助手（wx-minigame-helper）

面向 AI Agent 的微信小游戏开发 SKILL：内置 1217 篇微信小游戏官方文档的本地知识库，以及微信小游戏 API 的 TypeScript 类型声明文件。

SKILL 存放于 `./skills/wx-minigame-helper/`。

## 它能做什么

- **API 查询**：`wx.*` 任意接口的用法、参数、返回值、错误码、最低基础库版本
- **开放能力接入**：登录与用户体系、分享裂变、好友排行榜（开放数据域）、广告变现、虚拟支付、订阅消息、视频号、游戏圈等
- **工程问题**：包体与启动优化、分包策略、性能排查（卡顿/内存/发热/弱网）、Worker 多线程、网络与本地存储
- **引擎转化**：Unity WebGL → 小游戏全流程（63 篇专题文档）、Cocos/Laya/Egret 适配
- **发布运营**：提审发布、灰度、版本更新机制、PC/鸿蒙多平台适配
- **服务端接口**：access_token、code2Session、内容安全、虚拟支付（米大师）、对战匹配、帧同步等 44 个后端开放接口
- **类型支持**：为小游戏 TypeScript 项目提供完整的 `wx` 全局类型声明

## 内容组成

```
.
├── SKILL.md             技能入口：检索工作流、文档约定、作答规范
├── references/          本地知识库（1217 篇，链接已全部本地化）
│   ├── INDEX.md         全量层级索引树（165 个分类节点）
│   ├── CONCEPTS.md      概念关系图谱（10 大概念簇 + Mermaid 依赖图）
│   ├── api/             前端 API 参考（917 篇，23 个功能域，文件名即 API 名）
│   ├── guide/           开发指南（256 篇，8 大主题）
│   ├── topics/          任务专题（12 个高频任务的导航页，含步骤与常见坑）
│   └── backend-api/     服务端开放接口（44 篇，仅开发者服务器可调用）
└── scripts/types/       自动生成的 TypeScript 类型声明
    ├── *.d.ts           前端 wx.* 类型（380 个函数/属性、86 个类、451 个类成员）
    └── backend/         服务端接口请求/返回参数类型（44 个接口，160 接口 + 14 枚举）
```

知识库特色：

- **文件名即 API 名**：`references/api/open/login/wx.login.md`、`references/backend-api/login/code2session.md`，可精确定位
- **每个目录有 README**：含全部文档的一句话简介，适合作为浏览入口
- **topics/ 任务专题**：面向"我要做 X"的导航页，把散落的指南与 API 串成可执行路径
- **文档元信息完整**：每篇含 YAML frontmatter（`title` / `type` / `category` / `source` 官网原文链接），版本约束（"基础库 x.x.x 起支持"）全部保留

## 安装使用

本仓库整体就是一个 Skill，将完整目录安装到支持 Agent Skills 规范的 AI 编码工具（如 Qoder）的技能目录即可。安装后无需手动触发，当你咨询微信小游戏开发相关问题时，助手会自动加载本技能并从知识库检索作答。

示例提问：

- "wx.login 的完整流程和 session_key 怎么处理？"
- "怎么做一个好友排行榜？开放数据域工程怎么建？"
- "激励视频广告怎么接入？关闭回调里怎么判断是否发奖？"
- "主包超 4M 了，怎么分包和预下载？"
- "服务端怎么用 code2Session 换 openid？"
- "给我的小游戏项目接入 wx 的 TypeScript 类型"

## 类型声明快速接入

在小游戏 TypeScript 项目中引用 `scripts/types/`（详见 [scripts/types/README.md](scripts/types/README.md)）：

```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["es2020"],
    "strict": true
  },
  "include": ["game/**/*.ts", "scripts/types/**/*.d.ts"]
}
```

> ⚠️ `lib` 中**不要加 `dom`**：小游戏没有 DOM/BOM，且部分类名（Touch、Stats 等）与 DOM lib 全局类型冲突。

## 适用范围与限制

- 仅覆盖**微信小游戏（minigame）**，不适用于微信小程序（miniprogram）：两者大量 `wx.*` API 重名，但页面路由、WXML/WXSS、组件体系等小程序专有能力不在本知识库内
- 知识库为 **2026-08 抓取的官方文档快照**；此后的官方变更以 [微信开放文档](https://developers.weixin.qq.com/minigame/dev/) 官网为准
- `backend-api/` 中的接口**只能在开发者服务器调用**，前端不可直接调用
- 文档中的图片仍引用微信官方 CDN 地址，需联网查看

## 溯源

知识库内容抓取自微信开放文档官网：

- [前端 API 文档](https://developers.weixin.qq.com/minigame/dev/api/)
- [服务端 API 文档](https://developers.weixin.qq.com/minigame/dev/api-backend/)

另外 `references/` 下每篇文档 frontmatter 的 `source` 字段保留官网原文链接。
