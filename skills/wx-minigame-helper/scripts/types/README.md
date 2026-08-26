# 微信小游戏 API TypeScript 类型声明

依据本地知识库 `references/api/`（922 篇官方 API 文档）生成的 `.d.ts` 类型声明，覆盖：

- **381 个 `wx.*` 函数/属性**（含参数 Option、success 回调结果、同步返回值 Result）
- **87 个类接口**（BannerAd、FileSystemManager、Worker、OpenDataContext、wx.cloud.Cloud 实例等）
- **457 个类成员**（方法 / 事件监听 / 属性）
- 共 684 个接口，全部字段带 JSDoc 中文注释（含默认值、最低基础库版本、@deprecated 废弃提示）

## 目录结构

```
types/
├── index.d.ts     总入口：聚合各域，声明全局 wx / canvas / GameGlobal / console
├── ad.d.ts        广告域（WxAd 接口 + 广告组件类）
├── base.d.ts      基础域（生命周期、系统信息、更新…）
├── cloud.d.ts     云开发域（wx.cloud 云托管：init / callContainer / connectContainer / Cloud；手动补充）
├── open.d.ts      开放接口域（登录、用户信息、订阅消息…）
├── network.d.ts   网络域（request/download/websocket/tcp/udp…）
├── ...            共 24 个域文件，与 references/api/ 目录一一对应
├── backend/       服务端（后端）HTTPS 接口类型，独立子包，见 backend/README.md
└── README.md
```

每个域文件包含 `Wx<域名>` 接口（如 `WxOpen`），`index.d.ts` 中 `interface Wx extends` 所有域接口，并 `declare const wx: Wx`。

> 📦 **服务端接口类型**：`backend/` 子目录是基于 `references/backend-api/`（44 篇服务端文档）生成的后端 HTTPS 接口类型（请求参数 / 返回参数），与前端 `wx.*` 类型相互独立，详见 [backend/README.md](backend/README.md)。

## 使用方法

方式一：tsconfig 包含本目录（推荐）

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

方式二：入口文件顶部三斜线引用

```ts
/// <reference path="./scripts/types/index.d.ts" />
```

⚠️ **不要把 `dom` 加入 `lib`**：小游戏没有 DOM/BOM，且部分类名（Touch、Stats 等）与 DOM lib 全局类型冲突。如需少量浏览器风格 API（setTimeout 等），按需自行补充声明。

## 类型约定

| 文档概念 | 生成类型 |
|---|---|
| `wx.xxx(Object object)` | `xxx(object?: WxXxxOption): void` |
| option 中的 success | `success?: (res: WxXxxSuccessCallbackResult) => void`（字段来自官方 res 表） |
| option 中的 fail | `fail?: (res: ErrnoCallbackResult) => void`（errMsg + errno） |
| `## 返回值 Object` | 生成 `WxXxxResult` 接口，字段必填 |
| `Promise Xxx.yyy()` | 返回 `Promise<...>` |
| `wx.onXxx(function listener)` | `onXxx(listener: (res: WxOnXxxListenerCallbackResult) => void): void` |
| 已停止维护的接口 | JSDoc `@deprecated` 标注 |

## 已知取舍

- 文档中表格的嵌套结构（如对象内嵌对象的子表）展平为 `Record<string, any>`。
- 回调结果表未在文档中给出的，退化为 `(res: any) => void`。
- 类型以官方文档抓取版本（2026-08）为准；接口行为细节请回查 `references/api/` 对应文档（文件名即 API 名）。
