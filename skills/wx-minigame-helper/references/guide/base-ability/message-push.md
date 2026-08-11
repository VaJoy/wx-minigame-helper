---
title: "消息推送"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/message-push.html
---

# 消息推送

消息推送是开放平台推出的一种主动推送服务，基于该推送服务，开发者及时获取开放平台相关信息，无需调用API。 目前提供两种方式接入：

  * 开发者服务器接收消息推送
  * 云函数接收消息推送

## 开发者服务器接收消息推送

总数据链路如图所示：![](https://res.wx.qq.com/op_res/CyXI7cGX7jxeP-vdY2Hkm9s2cMZlsxeY23fkgw44pPOtTwMbZQq-iM-3Lv4054rfJtUFVOwyac0E9I3vFclKqw
)

### 消息推送服务器配置

消息推送服务于小程序、公众号、小游戏、视频号小店、第三方平台，这里介绍小程序平台的配置。

#### 填写相关信息

登陆[小程序管理后台](<https://mp.weixin.qq.com/>)，在「管理」-「开发管理」-「消息推送配置」中，需填写以下信息：

  1. URL服务器地址：开发者用来接收微信消息和事件的接口 URL，必须以 http:// 或 https:// 开头，分别支持 80 端口和 443 端口。
  2. Token令牌：用于签名处理，下文会介绍相关流程。
  3. EncodingAESKey：将用作消息体加解密密钥。
  4. 消息加解密方式： 
     * 明文模式：不使用消息加解密，明文发送，安全系数较低，不建议使用。
     * 兼容模式：明文、密文共存，不建议使用。
     * 安全模式：使用消息加解密，纯密文，安全系数高，强烈推荐使用。
  5. 数据格式：消息体的格式，可选XML或JSON。 ![](https://res.wx.qq.com/op_res/CyXI7cGX7jxeP-vdY2HkmzkwiwWyyWSlOTfHFQQaDu_sgJtBKLYMmUo2O0vdu7IzWmZlJ6a-sMAzoEwZPCcs7A)

#### 发起验证

点击“提交”后，微信服务器会对开发者服务器发起验证，请在提交前按以下方式开发： 微信服务器将发送GET请求到填写的服务器地址URL上， GET请求携带参数如下表所示：

参数 | 描述  
---|---  
signature | 签名  
timestamp | 时间戳  
nonce | 随机数  
echostr | 随机字符串  
  
其中，signature签名的生成方式是：

  1. 将Token、timestamp、nonce三个参数进行字典序排序。
  2. 将三个参数字符串拼接成一个字符串进行sha1计算签名，即可获得signature。 开发者需要校验signature是否正确，以判断请求是否来自微信服务器，验签通过后，请原样返回echostr字符串。

举例：假设填写的URL="https://www.qq.com/revice"， Token="AAAAA"。

  1. 推送的URL链接：https://www.qq.com/revice?signature=f464b24fc39322e44b38aa78f5edd27bd1441696&echostr=4375120948345356249&timestamp=1714036504&nonce=1514711492
  2. 将token、timestamp、nonce三个参数进行字典序排序，排序后结果为:["1514711492","1714036504","AAAAA"]。
  3. 将三个参数字符串拼接成一个字符串："15147114921714036504AAAAA"
  4. 进行sha1计算签名：f464b24fc39322e44b38aa78f5edd27bd1441696
  5. 与URL链接中的signature参数进行对比，相等说明请求来自微信服务器，合法。
  6. 构造回包返回微信，回包消息体内容为URL链接中的echostr参数4375120948345356249。

为了便于开发者调试，我们提供了[URL验证工具](<https://developers.weixin.qq.com/apiExplorer?type=messagePush>)供开发者使用。![](https://res.wx.qq.com/op_res/CyXI7cGX7jxeP-vdY2Hkm9kdbt1XFpcK-5W3xMW-rUdMFepPUAjXfDxv7v-V28ytPPMMydovWViBMEO4PKXFug
) 开发者需填写[AccessToken](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)、URL地址、Token，点击“检查参数并发起验证”后，调试工具会发送GET请求到URL所指的服务器，并返回相关调试信息。

### 接收消息推送

当特定消息或事件触发时，微信服务器会将消息（或事件）的数据包以 POST 请求发送到开发者配置的 URL，下面以“debug_demo”事件为例，详细介绍整个过程：

#### 消息解密方式为明文模式

  1. 假设URL配置为https://www.qq.com/revice， 数据格式为JSON，Token="AAAAA"。
  2. 推送的URL链接：https://www.qq.com/recive?signature=899cf89e464efb63f54ddac96b0a0a235f53aa78&timestamp=1714037059&nonce=486452656
  3. 推送的包体：

    
    
    {
        "ToUserName": "gh_97417a04a28d",
        "FromUserName": "o9AgO5Kd5ggOC-bXrbNODIiE3bGY",
        "CreateTime": 1714037059,
        "MsgType": "event",
        "Event": "debug_demo",
        "debug_str": "hello world"
    }
    

  4. 校验signature签名是否正确，以判断请求是否来自微信服务器。 
     1. 将token、timestamp（URL参数中的）、nonce（URL参数中的）三个参数进行字典序排序，排序后结果为:["1714037059","486452656","AAAAA"]
     2. 将三个参数字符串拼接成一个字符串："1714037059486452656AAAAA"
     3. 进行sha1计算签名：899cf89e464efb63f54ddac96b0a0a235f53aa78
     4. 与URL链接中的signature参数进行对比，相等说明请求来自微信服务器，合法。
  5. 回包给微信，具体回包内容取决于特定接口文档要求，如无特定要求，回复空串或者success即可。

#### 消息解密方式为安全模式

  1. 假设URL配置为https://www.qq.com/revice， 数据格式为JSON，Token="AAAAA"，EncodingAESKey="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"，小程序Appid="wxba5fad812f8e6fb9"。
  2. 推送的URL链接：：https://www.qq.com/recive?signature=6c5c811b55cc85e0e1b54100749188c20beb3f5d&timestamp=1714112445&nonce=415670741&openid=o9AgO5Kd5ggOC-bXrbNODIiE3bGY&encrypt_type=aes&msg_signature=046e02f8204d34f8ba5fa3b1db94908f3df2e9b3
  3. 推送的包体：

    
    
    {
        "ToUserName": "gh_97417a04a28d",
        "Encrypt": "+qdx1OKCy+5JPCBFWw70tm0fJGb2Jmeia4FCB7kao+/Q5c/ohsOzQHi8khUOb05JCpj0JB4RvQMkUyus8TPxLKJGQqcvZqzDpVzazhZv6JsXUnnR8XGT740XgXZUXQ7vJVnAG+tE8NUd4yFyjPy7GgiaviNrlCTj+l5kdfMuFUPpRSrfMZuMcp3Fn2Pede2IuQrKEYwKSqFIZoNqJ4M8EajAsjLY2km32IIjdf8YL/P50F7mStwntrA2cPDrM1kb6mOcfBgRtWygb3VIYnSeOBrebufAlr7F9mFUPAJGj04="
    }
    

  4. 校验msg_signature签名是否正确，以判断请求是否来自微信服务器。注意：不要使用signature验证！ 
     * 将token、timestamp（URL参数中的）、nonce（URL参数中的）、Encrypt（包体内的字段）四个参数进行字典序排序，排序后结果为: ["+qdx1OKCy+5JPCBFWw70tm0fJGb2Jmeia4FCB7kao+/Q5c/ohsOzQHi8khUOb05JCpj0JB4RvQMkUyus8TPxLKJGQqcvZqzDpVzazhZv6JsXUnnR8XGT740XgXZUXQ7vJVnAG+tE8NUd4yFyjPy7GgiaviNrlCTj+l5kdfMuFUPpRSrfMZuMcp3Fn2Pede2IuQrKEYwKSqFIZoNqJ4M8EajAsjLY2km32IIjdf8YL/P50F7mStwntrA2cPDrM1kb6mOcfBgRtWygb3VIYnSeOBrebufAlr7F9mFUPAJGj04=", "1714112445", "415670741", "AAAAA"]。
     * 将四个参数字符串拼接成一个字符串，然后进行sha1计算签名：046e02f8204d34f8ba5fa3b1db94908f3df2e9b3
     * 与URL参数中的msg_signature参数进行对比，相等说明请求来自微信服务器，合法。
  5. 解密消息体"Encrypt"密文。 
     1. AESKey = Base64_Decode( EncodingAESKey + "=" )，EncodingAESKey 尾部填充一个字符的 "=", 用 Base64_Decode 生成 32 个字节的 AESKey；
     2. 将Encrypt密文进行Base64解码，得到TmpMsg， 字节长度为224
     3. 将TmpMsg使用AESKey进行AES解密，得到FullStr，字节长度为205。AES 采用 CBC 模式，秘钥长度为 32 个字节（256 位），数据采用 PKCS#7 填充； PKCS#7：K 为秘钥字节数（采用 32），Buf 为待加密的内容，N 为其字节数。Buf 需要被填充为 K 的整数倍。在 Buf 的尾部填充(K - N%K)个字节，每个字节的内容 是(K - N%K)。微信团队提供了多种语言的示例代码（包括 PHP、Java、C++、Python、C#），请开发者尽量使用示例代码，仔细阅读技术文档、示例代码及其注释后，再进行编码调试。[示例下载](<https://wximg.gtimg.com/shake_tv/mpwiki/cryptoDemo.zip>)
     4. FullStr=random(16B) + msg_len(4B) + msg + appid，其中： 
        * random(16B)为 16 字节的随机字符串；
        * msg_len 为 msg 长度，占 4 个字节(网络字节序)；
        * msg为解密后的明文；
        * appid为小程序Appid，开发者需验证此Appid是否与自身小程序相符。
     5. 在此示例中： 
        * random(16B)="a8eedb185eb2fecf"
        * msg_len=167（注意：需按网络字节序，占4个字节）
        * msg="{"ToUserName":"gh_97417a04a28d","FromUserName":"o9AgO5Kd5ggOC-bXrbNODIiE3bGY","CreateTime":1714112445,"MsgType":"event","Event":"debug_demo","debug_str":"hello world"}"
        * appid="wxba5fad812f8e6fb9"
  6. 回包给微信服务器，首先需确定回包包体的明文内容，具体取决于特定接口文档要求，如无特定要求，回复空串或者success（无需加密）即可，其他回包内容需加密处理。这里假设回包包体的明文内容为"{"demo_resp":"good luck"}"，数据格式为JSON，下面介绍如何对回包进行加密：
  7. 回包格式如下，具体取决于你配置的数据格式（JSON或XML）,其中： 
     * Encrypt：加密后的内容；
     * MsgSignature：签名，微信服务器会验证签名；
     * TimeStamp：时间戳；
     * Nonce：随机数
    
    {
        "Encrypt": "${msg_encrypt}$",
        "MsgSignature": "${msg_signature}$",
        "TimeStamp": ${timestamp}$,
        "Nonce": ${nonce}$
    }
    
    
    <xml>
        <Encrypt><![CDATA[${msg_encrypt}$]]></Encrypt>
        <MsgSignature><![CDATA[${msg_signature}$]]></MsgSignature>
        <TimeStamp>${timestamp}$</TimeStamp>
        <Nonce><![CDATA[${nonce}$]]></Nonce>
    </xml>
    

  8. Encrypt的生成方法： 
     1. AESKey = Base64_Decode( EncodingAESKey + "=" )，EncodingAESKey 尾部填充一个字符的 "=", 用 Base64_Decode 生成 32 个字节的 AESKey；
     2. 构造FullStr=random(16B) + msg_len(4B) + msg + appid，其中 
        * random(16B)为 16 字节的随机字符串；
        * msg_len 为 msg 长度，占 4 个字节(网络字节序)；
        * msg为明文；
        * appid为小程序Appid。
     3. 在此示例中： 
        * random(16B)="707722b803182950"
        * msg_len=25（注意：需按网络字节序，占4个字节）
        * msg="{"demo_resp":"good luck"}"
        * appid="wxba5fad812f8e6fb9"
        * FullStr的字节大小为63
     4. 将FullStr用AESKey进行加密，得到TmpMsg，字节大小为64。AES 采用 CBC 模式，秘钥长度为 32 个字节（256 位），数据采用 PKCS#7 填充； PKCS#7：K 为秘钥字节数（采用 32），Buf 为待加密的内容，N 为其字节数。Buf 需要被填充为 K 的整数倍。在 Buf 的尾部填充(K - N%K)个字节，每个字节的内容 是(K - N%K)。微信团队提供了多种语言的示例代码（包括 PHP、Java、C++、Python、C#），请开发者尽量使用示例代码，仔细阅读技术文档、示例代码及其注释后，再进行编码调试。[示例下载](<https://wximg.gtimg.com/shake_tv/mpwiki/cryptoDemo.zip>)
     5. 对TmpMsg进行Base64编码，得到Encrypt="ELGduP2YcVatjqIS+eZbp80MNLoAUWvzzyJxgGzxZO/5sAvd070Bs6qrLARC9nVHm48Y4hyRbtzve1L32tmxSQ=="。
  9. TimeStamp由开发者生成，使用当前时间戳即可，示例使用1713424427。
  10. Nonce回填URL参数中的nonce参数即可，示例使用415670741。
  11. MsgSignature的生成方法： 
     1. 将token、TimeStamp（回包中的）、Nonce（回包中的）、Encrypt（回包中的）四个参数进行字典序排序，排序后结果为: ["1713424427", "415670741", "AAAAA", "ELGduP2YcVatjqIS+eZbp80MNLoAUWvzzyJxgGzxZO/5sAvd070Bs6qrLARC9nVHm48Y4hyRbtzve1L32tmxSQ=="]
     2. 将四个参数字符串拼接成一个字符串，并进行sha1计算签名：1b9339964ed2e271e7c7b6ff2b0ef902fc94dea1
  12. 最终回包为：

    
    
    {
        "Encrypt": "ELGduP2YcVatjqIS+eZbp80MNLoAUWvzzyJxgGzxZO/5sAvd070Bs6qrLARC9nVHm48Y4hyRbtzve1L32tmxSQ==",
        "MsgSignature": "1b9339964ed2e271e7c7b6ff2b0ef902fc94dea1",
        "TimeStamp": 1713424427,
        "Nonce": "415670741"
    }
    

为了便于开发者调试，我们提供了相关的调试工具（[请求构造](<https://developers.weixin.qq.com/apiExplorer?type=messagePush>)、[调试工具](<https://developers.weixin.qq.com/apiExplorer?type=messagePush>)）供开发者使用。

  * “请求构造”允许开发者填写相关参数后，生成debug_demo事件发包或回包的相关调试信息，供开发者使用。![](https://res.wx.qq.com/op_res/CyXI7cGX7jxeP-vdY2HkmzPAxYtOmSK_jSvQsQKLjBlK9LTCJjQY14AmHwQmPIcyQWFYPWpn8lqzVjfQKB9y1w
)
  * “调试工具”允许开发者填写[AccessToken](<https://developers.weixin.qq.com/minigame/dev/api-backend/access-token/api_getaccesstoken>)、Body后，微信服务器会拉取你在小程序后台配置的消息推送配置，实际推送一条debug_demo事件供开发者调试。![](https://res.wx.qq.com/op_res/CyXI7cGX7jxeP-vdY2Hkm-hEi9O6s8jFZI7ewGAoi8bUp6X86EpNxCM2wn_rnHrhQ7ByOfhYVmrN-TLJVR69HQ
)

## 云函数接收消息推送

> 需开发者工具版本至少 `1.02.1906252`

开通了[云开发](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/basis/getting-started>)的小程序可以使用云函数接收消息推送，目前仅支持客服消息推送。

接入步骤如下：

  1. 云开发控制台中填写配置并上传
  2. 云函数中处理消息

### 第一步：开发者工具云开发控制台中增加配置

前往路径“「云开发」-「设置」-「其他设置」-「消息推送」”，选择推送模式为云函数； ![](https://res.wx.qq.com/op_res/_mTlTvkYwgSJDQq3yEXGWj-IownxxYbDq3-UzqnfW0-wMSNK67JcHiAhcNsdP0W7Cu8sx_o_MFCH-0R6OWZ8tw) 添加消息推送配置。消息类型对应收包的 `MsgType`，事件类型对应收包的 `Event`，同一个 `<消息类型, 事件类型>` 二元组只能推到一个环境的一个云函数。例如客服消息文本消息对应的就是消息类型为 `text`，事件类型为空。具体值请查看各个消息的消息格式。 ![](https://res.wx.qq.com/op_res/qqj08GfodZw3VUmDSD56OKhZ1Xv5mg1P92C4rtchP0hWzvqX6Po7DTYznm-WP_knXQRHiY8hbLabeBXt0bclOg) 多个消息类型、事件类型多次添加消息推送配置即可。

**注意** ：如在云函数中配置了某个类型的消息，该类型消息将不再推送至“微信公众平台-开发设置-消息推送”中配置的域名中。

### 第二步：云函数中处理消息

云函数被触发时，其 `event` 参数即是接口所定义的 JSON 结构的对象（统一 `JSON` 格式，不支持 `XML` 格式）。

以客服消息为例，接收到客服消息推送时，`event` 结构如下：
    
    
    {
      "FromUserName": "ohl4L0Rnhq7vmmbT_DaNQa4ePaz0",
      "ToUserName": "wx3d289323f5900f8e",
      "Content": "测试",
      "CreateTime": 1555684067,
      "MsgId": "49d72d67b16d115e7935ac386f2f0fa41535298877_1555684067",
      "MsgType": "text"
    }
    

此时可调用客服消息[发送](<https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_sendcustommessage>)接口回复消息，一个简单的接收到消息后统一回复 “收到” 的示例如下：
    
    
    // 云函数入口文件
    const cloud = require('wx-server-sdk')
    
    cloud.init()
    
    // 云函数入口函数
    exports.main = async (event, context) => {
      const wxContext = cloud.getWXContext()
      
      await cloud.openapi.customerServiceMessage.send({
        touser: wxContext.OPENID,
        msgtype: 'text',
        text: {
          content: '收到',
        },
      })
    
      return 'success'
    }
