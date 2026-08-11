# 服务端 API（backend-api）

> 微信小游戏**服务端（后端）**开放接口文档，由官方 `minigame/dev/api-backend/` 页面抓取整理，按 references 知识库规范重构。
>
> ⚠️ 这些接口只能在**开发者服务器**调用，禁止在小游戏前端 / 网页 / App 直接调用。

共 **44 篇**文档，覆盖 **16 个功能域**。每篇文档：
- 头部含 YAML frontmatter（`title` / `type` / `category` / `api` / `source`），文件名即后端接口英文名；
- 正文保留官方请求/返回参数表、代码示例与错误码；
- 文末「关联与说明」串联对应的前端 `wx.*` 接口与 `access_token` 依赖。

## 分类导航

| 分类 | 说明 | 文档数 |
|---|---|---|
| [access-token](access-token/README.md) | 获取/刷新接口调用凭据 access_token | 2 |
| [cloudbase](cloudbase/README.md) | 云开发短信、上报与统计 | 5 |
| [data](data/README.md) | 用户关系链与托管 KV 数据存储 | 3 |
| [data-analysis](data-analysis/README.md) | 小游戏数据分析接口 | 1 |
| [gamematch](gamematch/README.md) | 对局匹配规则管理 | 5 |
| [internet](internet/README.md) | 网络加速与用户加密密钥 | 1 |
| [lock-step](lock-step/README.md) | 帧同步游戏房间管理 | 4 |
| [login](login/README.md) | code2Session、登录态校验与重置 | 3 |
| [midas-payment](midas-payment/README.md) | 游戏币余额、扣除、赠送与订单查询 | 5 |
| [qr-code](qr-code/README.md) | 小程序码与二维码生成 | 3 |
| [safety-control-capability](safety-control-capability/README.md) | 用户安全等级与外挂数据 | 2 |
| [subscribe-message](subscribe-message/README.md) | 服务端发送订阅消息 | 1 |
| [updatable-message](updatable-message/README.md) | 动态消息 activity_id 与状态更新 | 2 |
| [url-link](url-link/README.md) | 加密 URL Link 生成与查询 | 2 |
| [url-scheme](url-scheme/README.md) | 加密 scheme 码生成与查询 | 2 |
| [wxa-sec-check](wxa-sec-check/README.md) | 文本 / 图片 / 多媒体内容安全识别 | 3 |

## Agent 检索

- 按接口名精确查找：
  ```bash
  find references/backend-api -name "code2session.md"
  ```
- 按主题浏览：从本页或各分类 `README.md` 进入；
- 跨端关联：每篇文末「关联与说明」指向对应的前端 `references/api/...` 文档；
- 完整索引见 [INDEX.md](INDEX.md)。
