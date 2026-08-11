---
title: "获取小程序码"
type: guide
category: guide/open-ability/growth
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/qr-code.html
---

## 获取小程序码

通过后台接口可以获取小程序任意页面的小程序码，扫描该小程序码可以直接进入小程序对应的页面，所有生成的小程序码永久有效，可放心使用。 我们推荐生成并使用小程序码，它具有更好的辨识度，且拥有展示[“公众号关注组件”](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html>)等高级能力。 生成的小程序码如下所示：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/a5006e77-d3cc-47e7-9203-9ce8725ff0ff.png)

可以使用开发工具 1.02.1803130 及以后版本通过二维码编译功能调试所获得的二维码

![](https://res8.wxqcloud.qq.com.cn/wxdoc/81717b23-6c9c-4eb4-a734-7b58a7ac7178.png)

为满足不同需求和场景，这里提供了两个接口，开发者可挑选适合自己的接口。

  * [接口 A: 适用于需要的码数量较少的业务场景](<https://developers.weixin.qq.com/minigame/dev/api-backend/qr-code/api_getqrcode>)
    * 生成小程序码，可接受 path 参数较长，生成个数受限，数量限制见 注意事项，请谨慎使用。
  * [接口 B：适用于需要的码数量极多的业务场景](<https://developers.weixin.qq.com/minigame/dev/api-backend/qr-code/api_getunlimitedqrcode>)
    * 生成小程序码，可接受页面参数较短，生成个数不受限。

## 获取小程序二维码（不推荐使用）

通过后台接口可以获取小程序任意页面的小程序二维码，生成的小程序二维码如下所示：

![](https://res8.wxqcloud.qq.com.cn/wxdoc/21c6e93a-405d-4b33-b8b5-a7fe33df4d16.png)

  * [接口 C：适用于需要的码数量较少的业务场景](<https://developers.weixin.qq.com/doc/service/api/qrcode/qrcodes/api_createqrcode>)
    * 生成二维码，可接受 path 参数较长，生成个数受限，数量限制见注意事项。

### 注意事项

  1. 接口只能生成已发布的小程序的二维码
  2. 接口 A 加上接口 C，总共生成的码数量限制为 100,000，请谨慎调用。
  3. 接口 B 调用分钟频率受限(5000次/分钟)，如需大量小程序码，建议预生成。
