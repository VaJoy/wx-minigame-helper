---
title: "wx.cloud.callContainer(Object object)"
type: api
category: api/cloud
api: "wx.cloud.callContainer"
source: https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/call/mini.html
---

# wx.cloud.callContainer(Object object)

> **以 Promise 风格调用**：支持（不传 `success` / `fail` / `complete` 时返回 Promise）
> 
> **基础库要求**：**2.23.0** 及以上；请配套在「管理后台」-「设置」-「功能设置」-「基础库最低版本设置」中设定为 2.23.0 及以上

## 功能描述

调用微信云托管服务（容器内运行的 HTTP 服务），取代原有 [wx.request](../network/request/wx.request.md) 用法，**无需在管理后台配置 request 合法域名**。

使用前需已调用 [wx.cloud.init](wx.cloud.init.md)（全局一次，env 可不填）。

## 使用优势（对比 wx.request）

1. 不耗费任何公网流量，前后端通信走内网；
2. 天然免疫 DDoS 攻击，仅授权小程序/小游戏/公众号可访问后端，其他人即便拿到环境 id 和服务名也无法访问；
3. 通过微信就近接入节点加速，无视后端服务地域影响，没有跨地域延迟，后端无需多地部署；
4. 无需配置「服务器域名」；
5. 后端可直接获取用户信息，无需调接口即可以获取 openid 等（见下方[后端直接获取用户信息](#后端直接获取用户信息)）。

因此，如果云托管服务只有本小程序/小游戏/公众号会调用，建议**在服务设置中关闭公网访问**。

## 基本使用

```js
// 确认已经在 game.js 入口调用过 wx.cloud.init 初始化环境（任意环境均可，可以填空）
const res = await wx.cloud.callContainer({
  config: {
    env: '填入云环境ID' // 微信云托管的环境ID
  },
  path: '/xxx', // 填入业务自定义路径和参数，根目录，就是 /
  method: 'POST', // 按照自己的业务开发，选择对应的方法
  header: {
    'X-WX-SERVICE': 'xxx' // xxx中填入服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称）
    // 其他header参数
  }
  // dataType:'text', // 默认不填是以JSON形式解析返回结果，若不想让SDK自己解析，可以填text
  // 其余参数同 wx.request
})

console.log(res)
```

完整流程（小游戏入口）：

```js
// game.js —— 小游戏入口
wx.cloud.init() // 使用 callContainer 前一定要 init 一下，全局执行一次即可

// 业务代码中（async 函数内）
async function bootstrap() {
  const result = await wx.cloud.callContainer({
    config: {
      env: 'prod-01' // 微信云托管的环境ID
    },
    path: '/',
    method: 'GET',
    header: {
      'X-WX-SERVICE': 'xxx' // 服务名称
    }
  })
  console.log(result)
}
```

如果想深入了解 `callContainer` 的链路原理、身份凭证与最佳实践，见下方[技术原理与使用指南（实践）](#技术原理与使用指南实践)（整理自[微信官方指南](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/practice/call.html)）。

## 请求参数

### Object object

其余参数直接参考 [wx.request](../network/request/wx.request.md)，在此列举常用参数：

| 属性 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| config.env | string |  | 是 | 微信云托管环境 ID |
| path | string |  | 是 | 后端服务接口地址 |
| data | string/object/ArrayBuffer |  | 否 | 请求的参数 |
| header | Object |  | 是 | 设置请求的 header，header 中不能设置 Referer。**必须包含 `X-WX-SERVICE`（服务名）**；`content-type` 默认为 `application/json`。可选 `X-WX-EXCLUDE-CREDENTIALS` 排除链路携带的身份凭证（见[裁剪身份信息](#裁剪身份信息x-wx-exclude-credentials)） |
| timeout | number |  | 否 | 超时时间，单位为毫秒。**最大值不能超过 15 秒，否则无效** |
| method | string | GET | 否 | HTTP 请求方法 |
| dataType | string | json | 否 | 返回的数据格式 |
| responseType | string | text | 否 | 响应的数据类型 |
| success | function |  | 否 | 接口调用成功的回调函数 |
| fail | function |  | 否 | 接口调用失败的回调函数 |
| complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

> 如果希望 `wx.cloud.callContainer` 返回 Promise，请勿传 `success`、`fail` 和 `complete`。

#### object.method 的合法值

| 值 | 说明 |
|---|---|
| OPTIONS | HTTP 请求 OPTIONS |
| GET | HTTP 请求 GET |
| HEAD | HTTP 请求 HEAD |
| POST | HTTP 请求 POST |
| PUT | HTTP 请求 PUT |
| DELETE | HTTP 请求 DELETE |
| TRACE | HTTP 请求 TRACE |
| CONNECT | HTTP 请求 CONNECT |

#### object.dataType 的合法值

| 值 | 说明 |
|---|---|
| json | 返回的数据为 JSON，返回后会对返回的数据进行一次 `JSON.parse` |
| 其他 | 不对返回的内容进行 `JSON.parse` |

#### object.responseType 的合法值

| 值 | 说明 |
|---|---|
| text | 响应的数据为文本 |
| arraybuffer | 响应的数据为 ArrayBuffer |

## 裁剪身份信息（X-WX-EXCLUDE-CREDENTIALS）

`callContainer` 默认会在请求链路中携带微信身份凭证（openid、unionid、cloudbase-access-token 等），后端在 header 中即可读到。如果你的业务**不需要用户身份**，可以通过 `X-WX-EXCLUDE-CREDENTIALS` 显式排除，节省链路附带这些信息带来的约 **10ms~50ms** 开销：

```js
const res = await wx.cloud.callContainer({
  config: { env: '填入云环境ID' },
  path: '/postapi',
  method: 'GET',
  header: {
    'X-WX-SERVICE': 'xxx', // 服务名称
    // 排除链路携带的微信身份凭证（逗号分隔，可选值：openid、unionid、cloudbase-access-token）
    'X-WX-EXCLUDE-CREDENTIALS': 'unionid, cloudbase-access-token, openid'
  }
})
console.log(res)
```

> 不填该 header 则默认附带全部凭证；填写后对应项不会被携带。格式为逗号分隔的字符串。
> **未登录模式**下本身就没有用户信息，建议加上此 header 起到加速作用（未登录模式仍保留链路安全与效率）。

## 返回值

Promise resolve 的结果 / success 回调的结果（其余字段同 [wx.request](../network/request/wx.request.md) 返回值）：

| 属性 | 类型 | 说明 |
|---|---|---|
| data | string/Object/ArrayBuffer | 开发者服务器返回的数据（业务数据在 `data` 中） |
| statusCode | number | 开发者服务器返回的 HTTP 状态码 |
| header | Object | 开发者服务器返回的 HTTP Response Header |
| errMsg | string | 调用结果信息 |
| callID | string | 本次调用 id，可用于问题排查 |

## 后端直接获取用户信息

向云托管服务发起 `callContainer` 调用时，服务请求 header 中会自动带有[用户信息](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/weixin/index)，包括 openid、unionid、ip 地址、可信来源等等，无需再通过 `wx.login` 登录然后调接口置换，大幅简化了流程。

> 注意，资源复用情况下，获取 openid 的字段和普通获取不一致。

## 使用限制

1. 请求大小限制 **100KiB**（对象类型限制 20 MiB，请求中不建议包含图片，可通过对象存储处理）；
2. 返回包大小限制 **1000KiB**。

## 使用须知与常见问题排查

- **公网访问正常、但小游戏访问报错**：优先检查后端处理微信 `header` / `openid` 相关逻辑（取错字段、大小写、误改 `Referer` 等），而非网络本身。
- **云托管对公网域名无安全防护能力**（默认公网域名与自定义域名均如此），谨慎使用；**默认公网域名性能有限、仅接口测试用，不能上生产**，且无法在小游戏后台配置。正式环境请走 `callContainer` 私有链路（免域名、带微信身份、等效 WAF+DDoS 防护）。
- 仅自有小程序/小游戏/公众号调用时，建议[关闭公网访问](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/guide/debug/know.html)以收缩暴露面。
- 更多服务端/运维侧常识（冷启动、容器无持久化存储、单端口、无固定公网出口 IP、扩缩容按 HTTP 流量判等）见[微信云托管开发常识](../../topics/wxcloud-common-sense.md)。

## 技术原理与使用指南（实践）

> 本节整理自微信官方《[callContainer 技术原理和使用指南](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/practice/call.html)》。原理同样适用于小游戏。

### 为什么推荐 callContainer 而非 wx.request

`wx.request` 是标准公网请求，链路上有**两个不稳定变量**：

1. **DNS 解析**：域名先发到网络内的 DNS 服务器换 IP，若 DNS 被劫持，请求会发往错误 IP（DNS 劫持）。微信虽有付费的 HttpDNS 服务可规避，但需额外成本。
2. **公网跨地域转发**：请求包经公网沿途各运营商交换中心路由节点到达服务器，距离越远变数越大（用户广州、服务器北京时尤其明显）。

`callContainer` 最终也是经 `wx.request` 发出，但**走的是微信私有路径**，上述两个问题在入口处就被解决：

- **不发起 DNS 解析**：请求包直接发往微信固定服务器，包内含 `env`（环境 ID）、`service`（服务名）、`path`、`data`；
- **走微信全国专线网络**：经就近节点进入微信内网，由微信识别环境所在地域与地址后转发，无视后端服务地域、无跨地域延迟；
- **端到端加密**：请求包全程加密，用户手机被抓包也只是一堆无意义密文；
- **入口风控**：网络攻击、恶意请求、刷接口等行为在进入链路时即被过滤，到达云托管服务的都是经微信验证的正常请求；
- **免配置域名**：无需在管理后台配置 request 合法域名。

### 身份凭证如何到达后端

请求包进入微信链路时会被验证用户身份，并带上 openid 等身份信息；到达云托管服务后，header 中即可看到 `x-wx` 开头的微信认证信息（业务数据与正常 `wx.request` 收到的完全一致）。

**首请求会探测「用户端 → 云托管服务」之间的最佳路径，并缓存加密的身份令牌**；后续请求直接按此最优路径发送，身份令牌在链路网关被解析后以明文形式注入服务 header。这也是首次调用略慢、后续调用更快的原因。

### 成本与适用

- 微信链路的过滤效果**相当于 WAF + DDoS 高防叠加**，在云托管中是标准配置，**无需额外付费**；
- 云开发 `callFunction`（云函数）的原理与 `callContainer` 基本类似（本知识库不收录经典云开发接口，详见[wx.cloud](../wx.cloud.md)说明）；
- 如自有 CVM 也需要同类链路优化，需联系微信官方。

### 最佳实践与踩坑

| 场景 | 建议 |
|---|---|
| 业务不需要用户身份 | 加 `X-WX-EXCLUDE-CREDENTIALS` 排除凭证，节省约 10~50ms（见[裁剪身份信息](#裁剪身份信息x-wx-exclude-credentials)） |
| 未登录模式 | 本身无用户信息，仍建议加 `X-WX-EXCLUDE-CREDENTIALS` 加速；未登录模式保留链路安全与效率 |
| 云托管仅自有小程序/小游戏/公众号调用 | 在服务设置中**关闭公网访问**，进一步收缩暴露面 |
| 追求链路安全/抗攻击 | 优先用 `callContainer`，免费获得 WAF + DDoS 高防级过滤 |

## 万能封装（官方改编）

官方提供了一个万能的封装方法，无论是自己的环境还是资源复用形态，均可以正常使用。以下为小游戏模块版（官方为小程序 `App` 方法，逻辑一致）：

```js
// utils/cloud.js —— 微信云托管调用封装
let cloud = null

/**
 * 封装的微信云托管调用方法
 * @param {*} obj 业务请求信息，可按照需要扩展
 * @param {*} number 请求等待，默认不用传，用于初始化等待
 */
async function call(obj, number = 0) {
  if (cloud == null) {
    cloud = new wx.cloud.Cloud({
      resourceAppid: 'WXAAA', // 微信云托管环境所属账号，appid（自有环境填自己的）
      resourceEnv: 'prod-001' // 微信云托管的环境ID
    })
    await cloud.init() // init 过程是异步的，需要等待 init 完成才可以发起调用
  }
  try {
    const result = await cloud.callContainer({
      path: obj.path, // 填入业务自定义路径和参数，根目录，就是 /
      method: obj.method || 'GET',
      // dataType:'text', // 如果返回的不是json格式，需要添加此项
      header: {
        'X-WX-SERVICE': 'xxx' // xxx中填入服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称）
        // 其他header参数
      }
      // 其余参数同 wx.request
    })
    console.log(`微信云托管调用结果 ${result.errMsg} | callid:${result.callID}`)
    return result.data // 业务数据在data中
  } catch (e) {
    const error = e.toString()
    // 如果错误信息为未初始化，则等待300ms再次尝试，因为init过程是异步的
    if (error.indexOf("Cloud API isn't enabled") != -1 && number < 3) {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(call(obj, number + 1))
        }, 300)
      })
    } else {
      throw new Error(`微信云托管调用失败 ${error}`)
    }
  }
}

module.exports = { call }
```

在业务代码中使用：

```js
const { call } = require('./utils/cloud')

async function loadCount() {
  const res = await call({
    path: '/',
    method: 'GET'
  })
  console.log('业务返回结果', res)
}
```

## 关联与说明

- 初始化：[wx.cloud.init](wx.cloud.init.md)；资源复用实例：[wx.cloud.Cloud](wx.cloud.Cloud.md)
- WebSocket 版本（对战/实时推送）：[wx.cloud.connectContainer](wx.cloud.connectContainer.md)
- 请求参数与返回值的完整定义：[wx.request](../network/request/wx.request.md)（其余参数同 wx.request）
- 完整官方示例工程：[wxcloud-http-express](../../topics/examples/wxcloud-http-express/README.md)（Node + Express + MySQL 计数器，含小游戏端调用方式）
- 后端侧（容器内获取 header 用户信息、云托管部署等）：[微信云托管文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/)
