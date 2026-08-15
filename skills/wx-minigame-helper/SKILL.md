---
name: wx-minigame-helper
description: 微信小游戏开发助手。当用户咨询微信小游戏（minigame）开发相关问题时使用。内置微信小游戏官方文档本地知识库（前端 API + 指南 + 任务专题 + 服务端接口）、Cocos Creator 视角的微信分包与远程包知识（guide/cocos-packaging/），以及配套的 TypeScript 类型声明文件。
agent_created: true
---

# 微信小游戏开发助手

## 知识库概览

所有答案的事实来源是 `references/` 下的本地知识库（2026-08 抓取的官方文档快照，共 **1217 篇**：前端 1173 + 服务端 44，链接已全部本地化）。配套 `scripts/types/` 提供自动生成的 TypeScript 类型声明。

```
references/                   微信小游戏本地知识库（前端 + 服务端）
├── README.md                知识库说明与检索方法
├── INDEX.md                 全量层级索引树（165 个分类节点）
├── CONCEPTS.md              概念关系图谱（10 大概念簇 + Mermaid 依赖图）
├── api/                     前端 API 参考（917 篇，23 个功能域，文件名即 API 名）
├── guide/                   开发指南（256 篇，8 大主题），其中 `guide/cocos-packaging/` 是 Cocos Creator 视角的微信分包/远程包知识，详见「专项」节。
├── topics/                  任务专题（12 个，登录/广告/支付/Unity 转化/性能等）
└── backend-api/             服务端开放接口（44 篇、16 功能域，仅开发者服务器可调用）
scripts/types/               自动生成的 TypeScript 类型声明（前端 wx.* + 服务端）
  backend/                   服务端接口类型声明（请求/返回参数）
```

## 适用边界

- 仅覆盖**微信小游戏（minigame）**，不适用于微信小程序（miniprogram）：两者大量 `wx.*` API 重名且行为相近，但页面路由、WXML/WXSS、组件体系等小程序专有能力不在本知识库内；用户问题明显偏向小程序时，主动提醒差异并说明本库依据是小游戏文档。
- 知识库为 2026-08 抓取的官方文档快照；文中"基础库 x.x.x 开始支持"是硬性版本约束，此后官方若变更行为，以官网为准。

## 检索工作流

按问题类型选择检索路径，**先查库再作答**：

1. **API 精确查询**（"wx.login 怎么用""RewardedVideoAd.onClose 的参数"）
   - 文件名即 API 全名，直接定位：`find references/api -name "wx.login.md"`
   - 类的成员按 `类名.成员名.md` 命名，如 `FileSystemManager.readSync.md`
   - 找不到时按关键词搜索：`grep -rl "关键词" references/api --include="*.md" | head`

2. **任务型问题**（"怎么做好友排行榜""怎么接激励视频广告"）
   - 先读 `references/topics/` 下对应专题页（12 个，含步骤、文档清单、常见坑）
   - 好友排行榜/开放数据域（含 Cocos 侧 SubContextView 应用）→ `topics/open-data-ranklist.md`
   - 再按专题页链接深入 guide/ 与 api/ 的具体文档

3. **概念/架构问题**（"开放数据域是什么""分包和独立分包的区别"）
   - 先读 `references/CONCEPTS.md` 定位概念所在簇与依赖关系，再读具体文档

4. **主题浏览**（"设备相关 API 有哪些"）
   - 打开对应目录的 `README.md`（如 `references/api/device/README.md`），含全部文档的一句话简介

5. **大范围搜索**：知识库较大，优先用 grep 带关键词，再用 Read 读命中文件，避免整目录读取
   - `grep -rn "关键词" references --include="*.md" -l`

6. **服务端（后端）接口查询**（"服务端怎么换 access_token""code2Session 怎么调""帧同步房间怎么建"）
   - 文档在 `references/backend-api/`，文件名即后端接口英文名（小写），可直接 `find references/backend-api -name "code2session.md"`
   - ⚠️ 这些接口**只能在开发者服务器端调用**，禁止在小游戏前端/小程序/网页直接调用；回答时主动提醒
   - 功能域划分、端到端关联说明详见下文「服务端 API 文档」节

## 专项：Cocos Creator 分包与远程包

当用户问"Cocos 里怎么配分包/远程包""资源放 resources 还是远程""包体超限怎么办"时，优先读 `references/guide/cocos-packaging/`（微信平台侧的分包机制见 `topics/subpackage-startup.md`，两者互补）：

| 文档 | 内容 |
|---|---|
| `01-packaging-limits.md` | 微信包体限制（主包 4M/总 30M）、首包体积构成、超限解决方向 |
| `02-bundle-basics.md` | Asset Bundle 配置面板全字段（压缩类型 5 种、Is Remote、优先级、Filter）、内置 bundle、构建产物结构 |
| `03-subpackage.md` | 小游戏分包配置/构建/加载/各平台限制，**分包与远程包互斥**的完整说明 |
| `04-remote-bundle.md` | 远程包四步流程（配置→构建→上传→删除）、URL 规则、版本管理（bundleVers/MD5 Cache）、start-scene 首场景分包 |
| `05-cache-manager.md` | 运行时下载缓存机制（三级查找、缓存目录、LRU、清理接口、cacheEnabled/autoClear） |
| `06-practical-recipes.md` | 资源布局建议、分包+远程混合方案、首包优化组合拳、常见坑速查、调试技巧 |

配套示例：`references/guide/cocos-packaging/examples/remote-bundle-demo.ts`（远程包加载示例）。

**关键结论速记**：
- 小游戏分包**只能本地**（微信托管），**不能配远程包**（编辑器锁死）；但一个项目可同时有分包 bundle + 远程 bundle（混合布局）
- 远程包 URL = `{资源服务器地址}/remote/{bundleName}`，运行时 `loadBundle(name)` 自动下载 + 缓存
- 微信包内资源**一次性全量加载**（非按需），大包既占体积又拖启动
- 更新服务器资源必须更新版本号，否则缓存命中旧文件

## 文档约定

- 每篇文档头部有 YAML frontmatter：`title` / `type`(api|guide|backend-api) / `category` / `api`(仅 API 文档) / `source`(官方原文 URL)
- API 文档正文结构固定：功能描述 → 参数 → 返回值 → 错误码 → 示例代码
- 文档中的"基础库 x.x.x 开始支持"是硬性版本约束；兼容处理方法统一见 `references/guide/runtime/client-lib/compatibility.md`

## 作答规范

1. **基于知识库内容作答**，引用具体文档路径（如 `references/api/open/login/wx.login.md`），方便用户溯源。
2. **标注版本约束**：涉及 API 时主动说明最低基础库版本（文档开头有标注）。
3. **主动提示平台强规则**：
   - iOS 虚拟支付受苹果规则限制（见 `references/guide/open-ability/payment/`）
   - 网络请求域名需在 mp 后台配置（见 `references/guide/base-ability/network.md`）
   - 主包 4M 限制与分包方案（见 `references/topics/subpackage-startup.md`）
4. **警惕过时接口**：用户信息获取等接口历经多次变更，以知识库文档中的最新说明为准，不使用记忆中的旧接口行为。
5. **知识库未覆盖的内容**：文档 frontmatter 的 `source` 字段是官网原文链接；本地确实没有时，明确告知并建议查阅微信开放文档官网（https://developers.weixin.qq.com/minigame/dev/），不要编造。
6. 给代码示例时优先采用文档中的官方示例，再结合用户场景改写。

## 类型声明资源（scripts/types/）

知识库配套提供自动生成的 TypeScript 类型声明，当用户需要在小游戏项目中获得 wx API 的类型支持、或询问某个 API 的参数/返回值类型时使用：

- `scripts/types/index.d.ts` — 总入口，声明全局 `wx` / `canvas` / `GameGlobal` / `console`
- 23 个域文件（`ad.d.ts`、`open.d.ts`、`network.d.ts`…）与 `references/api/` 目录一一对应
- 覆盖 380 个 wx 函数/属性、86 个类接口、451 个类成员，字段带中文 JSDoc（默认值/最低版本/@deprecated）
- 用法与约定见 `scripts/types/README.md`；提醒用户 tsconfig 的 `lib` 不要加 `dom`（小游戏无 DOM，且类名与 DOM lib 冲突）
- 回答类型相关问题时，可直接引用这些 .d.ts 中的接口定义；发现类型与文档不符时以 `references/api/` 文档为准

**服务端接口类型（scripts/types/backend/）**：基于 `references/backend-api/` 生成，覆盖 44 个服务端接口的请求/返回参数类型（160 接口 + 14 枚举）

- 每个接口生成 `<ApiName>Query`（查询参数）、`<ApiName>Request`（请求体）、`<ApiName>Response`（返回体）；嵌套对象（`Body.*`/`Res.*`）生成独立接口并引用，枚举生成字面量联合类型
- `scripts/types/backend/index.d.ts` 为总入口；与前端 `wx.*` 类型相互独立；用法见 `scripts/types/backend/README.md`
- 当用户编写服务端代码、需要某个后端接口的请求体/返回体类型时使用

## 服务端 API 文档（references/backend-api/）

微信小游戏**服务端（后端）**开放接口文档，从官方 `minigame/dev/api-backend/` 逐页抓取后，按 `references/` 知识库规范重排（frontmatter、表格/链接风格、跨端关联），共 **44 篇、16 个功能域**：

- `README.md` — 分类导航（每个分类含文件链接、中文说明与文档数）；每个功能域目录内另有 README 列出本域接口清单
- 每个接口一个 `.md`，frontmatter 为 `title` / `type: backend-api` / `category` / `api`(英文接口名) / `source`(官方原文 URL)；正文保留请求/返回参数表、调用示例、错误码、适用范围
- 文末「关联与说明」小节：有前端对应接口的（如 code2Session↔wx.login、pay_v2.pay↔wx.requestMidasPayment）会链接到 `references/api/...`，并提示调用前需先获取 `access_token`；纯服务端接口标注"服务端专用"
- 覆盖能力：access_token 获取（含稳定版）、登录态校验（code2Session / checkSessionKey / reset）、内容安全（媒体/消息异步检测）、开放数据（KV 存储上报）、动态消息、二维码/ scheme / url-link 生成、数据分析、云开发统计与短信、对战匹配（gamematch）、帧同步（lock-step）、安全风控（风险等级/作弊数据）、订阅消息、米大师虚拟支付（扣币/取消/赠送/余额/查单）
- 回答服务端问题时，引用具体路径（如 `references/backend-api/login/code2session.md`），并提醒该接口必须服务端调用
