---
title: "激励广告服务端验证接入指引"
type: guide
category: guide/security
source: https://developers.weixin.qq.com/minigame/dev/guide/security/antiadcheat.html
---

# 激励广告服务端验证接入指引

激励广告是用户通过观看广告内容获取奖励的广告，广告时长一般为6~30s，用户观看足够广告时长后即可获取奖励，常见奖励如游戏复活、领取代币等。目前开发者通过广告组件的onClose 回调函数判断用户是否已经看完广告，满足奖励下发条件（参考[激励视频广告开发文档](<../open-ability/ad/rewarded-video-ad.md>)）。

服务端验证是一种可选的验证方式。满足奖励条件时，微信广告服务端将请求发送到开发者服务器，通知该用户已满足奖励条件，可下发奖励。开发者收到请求后，可在服务端进行校验。为奖励下发提供额外的保护机制，以规避客户端的作弊行为。

## 服务端验证

![](https://res8.wxqcloud.qq.com.cn/wxdoc/cad50e50-87e4-44f5-a4c9-df384d8cb33a.png)

整体流程如下：

  1. 开发者在流量主后台开启激励视频服务端验证，填写回调url、密钥、token等信息；

  2. 开发者创建广告组件，填写对应的参数；

  3. 用户观看激励广告，满足奖励条件时，会有两次回调：

a. 前端回调，即广告组件的onClose回调；

b. 服务端回调，微信广告组件将用户满足奖励下发条件事件上报到微信广告服务端。微信广告服务端再将请求转发到开发者配置的服务端接口了。

  4. 开发者依据回调结果，给用户下发奖励。

**相比于前端回调，服务端回调可能存在延迟。基于用户体验考虑，可以在收到前端回调时下发奖励，在收到服务端回调时进行验证，作为保障手段。如果奖励本身比较重要，可能影响游戏整体进程，那么也可以等收到服务端回调后再下发奖励。**

### 开启服务端验证

  1. 在流量主后台-广告管理-激励广告下找到「服务端奖励回调入口」

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f16e7dec-acdd-484c-83ca-5d31851d9fe9.png)

  2. 点击开启

![](https://res8.wxqcloud.qq.com.cn/wxdoc/3158fd4c-a694-4a8d-ae94-4bf05db6e27a.png)

  3. 填写相关配置

![](https://res8.wxqcloud.qq.com.cn/wxdoc/a6a34fe3-6092-4ad2-9381-752157046671.png)

#### 填写回调参数

  1. **URL** : 开发者提供的接收服务端奖励验证回调接口url地址。必须以http:// 或 https:// 开头，需要保证回调 URL 是官方域名，不能使用IP地址；

  2. **Token** :一串字符串，用来生成签名和核验签名使用；

3.**EncodingAESKey** ，消息体加解密密钥。

#### 回调URL校验

填写回调参数点击确认时，微信广告服务端会立刻调用开发者填写的回调接口进行验证。验证成功才后，参数才会生效。

验证时，微信广告服务端会发送GET请求到填写的回调接口，携带以下参数：

**字段名称** | **字段定义** | **字段类型**  
---|---|---  
signature | 签名 | string  
timestamp | 时间戳 | uint64  
nonce | 随机数 | uint64  
echostr | 随机字符串 | string  
  
其中，signature签名的生成方式是：

  1. 将token、timestamp、nonce三个参数进行字典序排序。
  2. 将三个参数字符串拼接成一个字符串
  3. 对以上字符串进行sha256计算签名，即可获得signature

开发者的回调接口需要校验signature是否正确，以判断请求是否来自微信广告服务器，验签通过后，原样返回echostr字符串。回调接口需要返回Json格式: `{"echostr": "XXXXX"}`。

例如，假设填写的URL="https://www.qq.com/revice"， Token="AAAAA"。

  1. 将token、timestamp、nonce三个参数进行字典序排序，排序后结果为:["1514711492","1714036504","AAAAA"]
  2. 将三个参数字符串拼接成一个字符串："15147114921714036504AAAAA"
  3. 进行sha256计算签名：fc2099429a41d55634cd6e24e8a610b44c404bc189921f8368343381b0b612c3。

调用开发者服务端的验证URL链接为：https://www.qq.com/revice?signature=fc2099429a41d55634cd6e24e8a610b44c404bc189921f8368343381b0b612c3&echostr=4375120948345356249&timestamp=1714036504&nonce=1514711492

开发者服务端收到请求后，将计算的签名与URL链接中的signature参数进行对比，相等说明请求来自微信广告服务端。构造回包返回微信，回包内容为URL链接中的echostr参数：`{"echostr": "4375120948345356249"}`。

## 创建广告组件

服务端验证能力，基础库最低版本要求为v3.10.3，请开发者做好兼容判断。

激励视频广告组件的创建与展示逻辑请参考官方文档，与原始流程没有差异。

小程序文档： [激励视频广告 | 微信开放文档](<https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/ad/rewarded-video-ad>)

小游戏文档：[激励视频广告 | 微信开放文档](<../open-ability/ad/rewarded-video-ad.md>)

对于自定义校验字段的透传，在激励视频实例下新增接口，需要在展示show之前完成调用。

方法名：`setServerSideVerificationData`

参数：customSSVData

参数类型：Object

customSSVData内参数释义

**key** | **类型** | **释义**  
---|---|---  
userId | string | 用户id  
rewardItem | string | 奖励品类  
rewardAmount | number | 奖励个数  
customData | string | 自定义数据  
      
    
    const videoAd = wx.createRewardedVideoAd({
        adUnitId: 'XXX'
    })
    if (videoAd.setServerSideVerificationData) {
        videoAd.setServerSideVerificationData({
            userId: 'XXX',
            rewardItem: '金币',
            rewardAmount: 10,
            customData: 'XXX'
        })
    }
    videoAd.show()
    

## 服务端回调协议

### 协议

调用开发者回调接口时，会携带以下字段。

**字段名称** | **字段定义** | **字段类型** | **备注**  
---|---|---|---  
signature | 签名 | string | 签名，生成方式：（1）将Token、timestamp、nonce、encrypt四个参数进行字典序排序（2）将四个参数字符串拼接成一个字符串str（3）用sha256计算得到二进制哈希值（4）将二进制哈希值转换为64个字符的十六进制字符串表示（对于值小于16的字节，用 '0' 填充左侧）  
timestamp | 时间戳 | uint64 | 用户获得奖励时间戳（单位为毫秒）  
nonce | 随机数 | uint64 | 随机数  
encrypt | 加密串 | string | 详细信息的加密串，密钥为EncodingAESKey，使用AES加密算法的CBC 模式进行加密  
echostr | 随机字符串 | string | 用于构建回包消息体内，仅用于服务器地址验证，真实回调不用带该字段  
  
encrypt的具体信息（json格式）：

**字段名称** | **字段定义** | **字段类型** | **备注**  
---|---|---|---  
transaction_id | 交易id | string | 每个奖励授予事件生成的唯一标识符  
user_id | 用户标识 | string |   
reward_item | 奖励的类型 | string |   
reward_amount | 奖励的个数 | uint64 |   
custom_data | 开发者自定义数据 | string | 自定义数据字符串。若未提供自定义数据字符串，此查询参数值将不会出现在 SSV 回调中  
extra | 其它数据 | string | 备用字段  
  
回调返回：

**字段名称** | **字段定义** | **字段类型** | **备注**  
---|---|---|---  
is_valid | 校验结果 | bool | 判定结果，是否发放奖励  
echostr | 请求中的echostr | string | 如果请求不带可不传  
  
### 解密

开发者服务器收到微信广告服务器发起的调用时，一般如下进行解密校验：

  1. 使用下列方法来计算签名，和调用请求字段中的 signature 进行比对：

1.1. 将 token、timestamp（调用请求中）、nonce（调用请求中）、encrypt（调用请求中）进行字典序排序，拼接成一个字符串；

1.2. 将 1.1. 中产生的字符串进行 sha256 计算二进制哈希值；

1.3. 将二进制哈希值转换为64个字符的十六进制字符串表示（对于值小于16的字节，用 '0' 填充左侧）；

1.4. 与调用请求中的 signature 参数进行对比，相等则说明请求来自微信服务器，合法。

  2. 解密 encrypt 密文：

2.1 EncodingAESKey 尾部填充一个字符的 "=", 用 Base64_Decode 生成 32 个字节的 AESKey：AESKey = Base64_Decode( EncodingAESKey + "=" )；

2.2. 将 encrypt 字段进行URL解码后得到密文 DecodedEncrypt, 其构成为 ”前十六字节IV + 真实密文”。提取 IV 和真实密文后，密文使用 AESKey 进行 AES 解密，得到 encrypt_info（json格式），解密模式为 AES256CBC(pkcs7填充)。

  3. 回包给微信广告服务器，包体如上节的回调返回所示，使用 JSON 字符串格式返回。如无特定要求，返回 is_valid 字段为 true 即可完成回调流程。

## 回调重试机制

广告后台回调开发者后台设置超时为1s，若开发者回调在超时时间内未返回，触发重试，重试3次，间隔为15s、22.5s和33.75s。

## Q&A

Q1. 服务端验证能力是否是必须使用的？适用于什么情况？ A. 该能力设计初衷是帮助开发者应对可能存在的外挂作弊情况，如直接跳过广告获取奖励等；若开发者判断游戏当前外挂作弊风险较小，则无需接入。

Q2. 接入该能力是否有风险/注意事项？ A. 通过服务端回调可能存在延迟情况，基于用户体验考虑，建议开发者在收到前端回调时下发奖励，再在收到服务端回调时进行验证，作为保障手段。如果奖励本身比较重要，可能影响游戏整体进程，那么也可以等收到服务端回调后再下发奖励。
