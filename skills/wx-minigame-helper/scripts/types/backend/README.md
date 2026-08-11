# 微信小游戏服务端 API TypeScript 类型声明

依据本地知识库 `references/backend-api/`（44 篇官方服务端接口文档，16 个功能域）自动生成的 `.d.ts` 类型声明，覆盖**请求参数**与**返回参数**类型：

- 共 **160 个接口 + 14 个枚举联合类型**，字段带 JSDoc 中文注释
- 每个接口生成 `<ApiName>Query`（查询参数）、`<ApiName>Request`（请求体）、`<ApiName>Response`（返回体）
- 嵌套对象（`Body.*` / `Res.*` 子表）生成独立接口并正确引用（数组 → `Interface[]`）
- 枚举字段生成字面量联合类型（如 `type PayV2PayEnvEnum = 0 | 1`）并在字段处引用

> ⚠️ 这些是**服务端（后端）HTTPS 接口**类型，只能在开发者服务器调用，与前端 `wx.*` 类型（`../index.d.ts`）相互独立。

## 目录结构

```
backend/
├── index.d.ts            总入口：/// <reference path> 聚合 16 个域
├── access-token.d.ts     接口调用凭据（getAccessToken / getStableAccessToken）
├── login.d.ts            登录与 Session（code2Session / checkSessionKey / resetUserSessionKey）
├── midas-payment.d.ts    米大师虚拟支付（pay_v2.pay / getbalance / queryorder ...）
├── lock-step.d.ts        帧同步对战（createGameRoom / getGameFrame ...）
├── gamematch.d.ts        对局匹配（createMatchRule / getAllMatchRule ...）
├── wxa-sec-check.d.ts    内容安全审核（gameMsgSecCheck / mediaCheckAsync ...）
├── ...                   共 16 个域文件，与 references/backend-api/ 一一对应
└── README.md
```

## 命名规则

| 文档概念 | 生成类型（以 `code2Session` 为例） |
|---|---|
| `### 查询参数` 表 | `Code2SessionQuery`（按"必填"列决定 `?`） |
| `### 请求体` 表 | `Code2SessionRequest`（按"必填"列决定 `?`） |
| `### 返回体` 表 | `Code2SessionResponse`（字段一律可选，成功/错误返回字段不同） |
| `### Body.template_info` 子表 | `SetUpdatableMsgTemplateInfo`（被 `Request.template_info` 引用） |
| `### Res.data.frame_list(Array)` 子表 | `...DataFrameList`（数组元素类型，字段处为 `...DataFrameList[]`） |
| `### Body.env` 枚举子表 | `type PayV2PayEnvEnum = 0 \| 1` |

接口名 = 接口英文名的 PascalCase（`pay_v2.pay` → `PayV2Pay`、`lock-step.createGameRoom` → `LockStepCreateGameRoom`）。

## 使用方法

方式一：tsconfig 包含本目录（推荐）

```json
{
  "compilerOptions": { "target": "es2020", "lib": ["es2020"], "strict": true },
  "include": ["server/**/*.ts", "scripts/types/backend/**/*.d.ts"]
}
```

方式二：入口文件顶部三斜线引用

```ts
/// <reference path="./scripts/types/backend/index.d.ts" />
```

引用后即可作为全局类型使用（无需 import）：

```ts
async function login(code: string): Promise<Code2SessionResponse> {
  const q: Code2SessionQuery = { appid, secret, js_code: code, grant_type: 'authorization_code' }
  // ...HTTPS GET https://api.weixin.qq.com/sns/jscode2session
}
```

## 类型约定与取舍

- **请求侧**（Query/Request）：必填性按文档"必填"列，`是` → 必填，`否` → 可选 `?`。
- **返回侧**（Response 及 `Res.*` 嵌套）：字段一律可选 `?`（成功返回与错误返回字段不同，如 `errcode` 仅在失败时返回）。
- 每个接口的 JSDoc 含 `@endpoint <METHOD> <URL模板>`（如 `POST https://api.weixin.qq.com/wxa/game/pay?...`）。
- `a / b` 形式的备选字段名（如 `access_token / cloudbase_access_token`）拆为多个可选字段并标注"二选一"。
- 少数无法解析为具体结构的字段退化为 `Record<string, any>` / `any[]`。
- 类型以官方文档抓取版本（2026-08）为准；接口细节请回查 `references/backend-api/` 对应文档。
