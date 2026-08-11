---
title: "上报用户数据"
type: backend-api
category: backend-api/data
api: "storage.setUserStorage"
source: https://developers.weixin.qq.com/minigame/dev/api-backend/data/api_storage.setuserstorage.html
---

# 上报用户数据

> 接口应在服务器端调用，不可在前端（小程序、网页、APP等）直接调用，具体可参考[接口调用指南](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/guide>)。

接口英文名：storage.setUserStorage

上报用户数据后台接口。

小游戏可以通过本接口上报 key-value 数据到用户的 CloudStorage。

## 1. 调用方式

### HTTPS 调用

```bash
POST https://api.weixin.qq.com/wxa/set_user_storage?access_token=ACCESS_TOKEN&openid=OPENID&signature=SIGNATURE&sig_method=SIG_METHOD
```

### 云调用

- 调用方法：storage.setUserStorage
- 调用说明：openid（用户唯一标识符）需作为参数传入，另外 kv_list 参数改为 kvList，详情查看下文调用示例
- 出入参和 HTTPS 调用相同，调用方式可查看 [云调用](<https://developers.weixin.qq.com/doc/oplatform/developers/dev/cloudCall>) 说明文档。

### 第三方调用

- 本接口不支持第三方平台调用。

## 2. 请求参数

### 查询参数 `Query String Parameters`

参数名 | 类型 | 必填 | 示例 | 说明
---|---|---|---|---
access_token | string | 是 | ACCESS_TOKEN | 接口调用凭证，可使用 [access_token](https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken)
openid | string | 是 | - | 用户唯一标识符
signature | string | 是 | - | 用户登录态签名，签名算法请参考[用户登录态签名算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature)
sig_method | string | 是 | - | 用户登录态签名的哈希方法，如 hmac_sha256 等，请参考[用户登录态签名算法](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature)

### 请求体 `Request Payload`

参数名 | 类型 | 必填 | 说明
---|---|---|---
kv_list | [objarray](#Body__kv_list<Array>) | 是 | 要上报的数据（云调用时，该参数名为 kvList）

### Body.kv_list(Array) `Object Payload`

要上报的数据（云调用时，该参数名为 kvList）

参数名 | 类型 | 必填 | 说明
---|---|---|---
key | string | 是 | 数据的 key，目前可以为 '1' - '50'
value | number | 是 | 数据的 value

## 3. 返回参数

### 返回体 `Response Payload`

参数名 | 类型 | 说明
---|---|---
errcode | number | [错误码](#apierrcode)
errmsg | string | [错误信息](#apierrcode)

## 4. 注意事项

#### 托管数据的限制

如果在上报数据时触发这些限制，设置数据会失败并且会收到带错误码的返回包。

1. 每个 openid 所标识的微信用户，在游戏当中的托管的数据不能超过 128 个 key-value 对。
2. 上报的 key-value 列表当中每一项的 key+value 长度都不能超过 1K(1024)字节。
3. 上报的 key-value 列表当中每一个 key 长度都不能超过 128 字节。

#### 将排行榜显示在小游戏中心

若开发者希望把游戏的排行榜显示于小游戏中心，则需要把排行榜数据存储到对应的 key/value 中，一个排行榜数据对应一个 key，多个排行榜则多个 key。同时在 mp.weixin.qq.com 的小游戏管理后台“游戏能力地图-特色能力-微信排行榜配置”下配置对应的 key 以及相关排行榜属性。且 value 的内容必须是 JSON Object 格式序列化的字符串，该 JSON Object 顶层必须包含 `wxgame` 字段，定义如下：

属性名 | 类型 | 必填 | 说明
---|---|---|---
score | Int32 | 是 | 该榜单对应分数值
update_time | Int64 | 是 | 该分数最后更新时间，Unix 时间戳

注意： `wxgame`下开发者不可自定义其他字段， `wxgame`同级开发者可自由定义，比如定义一个`detail` 字段，用于存储取得该分数的中间状态。

#### 举例

比如某小游戏有一个分数排行榜，分数排行榜需要记录分数以及获得分数的耗时（游戏内的排行榜需要展示耗时），可以在`wxgame`同级别定义一个`cost_ms`字段，存储耗时的毫秒数。
分配一个不和已定义的托管数据的 key 相冲突的 key 作为分数排行榜的 key，如 "score"。

在玩家耗时 36500ms 后，获得本周最高分 16 分，则需要更新分数，假设当前时间戳为 1513080573， 则完整 value 在序列化之前的内容如下：

```json
{
  "wxgame": {
    "score": 16,
    "update_time": 1513080573
  },
  "cost_ms": 36500
}
```

最终序列化为 string 后，value 为`{\"wxgame\":{\"score\":16,\"update_time\": 1513080573},\"cost_ms\":36500}`。

## 5. 代码示例

### 5.1 HTTP示例

请求示例

```json
{
    "kv_list": [
        {
          "key":"1",
          "value":0
        }
    ]
}
```

返回示例

```json
{
    "errcode": 0,
    "errmsg": ""
}
```

### 5.2 云调用示例

请求示例

```js
// cloud = require('wx-server-sdk')
// ...
// 方法返回 Promise
cloud.openapi.storage.setUserStorage({
  openid: 'xxx',
  kvList: [
    {
      key: 'a',
      value: 1,
    },
    {
      key: 'b',
      value: 2,
    },
  ],
});
```

返回示例

```json
{
    "errcode": 0,
    "errmsg": ""
}
```

## 6. 错误码

以下是本接口的错误码列表，其他错误码可参考 [通用错误码](<https://developers.weixin.qq.com/doc/oplatform/developers/errCode/>)；调用接口遇到报错，可使用官方提供的 [API 诊断工具](<https://developers.weixin.qq.com/console/devtools/debug?utm_source=api_errcode>) 辅助定位和分析问题。

错误码 | 错误描述
---|---
-1 | 系统繁忙，此时请开发者稍候再试
0 | 请求成功
87016 | 由于某个 key-value 长度超过限制而上报失败。
87017 | 由于用户存储的数据量超过限制而上报失败。
87018 | 由于用户存储的 key-value 对数量超过限制而上报失败。
87019 | 由于某个 key 长度超过限制而上报失败。

## 7. 适用范围

本接口支持「小游戏」账号类型调用。其他账号类型如无特殊说明，均不可调用。

## 关联与说明

相关前端接口（小游戏客户端）：
- [wx.setUserCloudStorage（前端上报用户托管数据）](../../api/open/data/wx.setUserCloudStorage.md)

> 调用本接口前需先获取 `access_token`：[access-token/getaccesstoken.md](../access-token/getaccesstoken.md)

