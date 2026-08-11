---
title: "发送客服消息"
type: guide
category: guide/open-ability/community/customer-message
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/customer-message/send.html
---

# 发送客服消息  
  
当用户和小程序客服产生特定动作的交互时（具体动作列表请见下方说明），微信将会把消息数据推送给开发者，开发者可以在一段时间内（目前为 48 小时）调用客服接口，通过调用 [发送客服消息接口](<https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_sendcustommessage>) 来发送消息给普通用户。此接口主要用于客服等有人工消息处理环节的功能，方便开发者为用户提供更加优质的服务。

目前允许的动作列表如下，不同动作触发后，允许的客服接口下发消息条数和下发时限不同。

用户动作 | 允许下发条数限制 | 下发时限  
---|---|---  
用户发送消息 | 5 条 | 48 小时  
用户进入客服消息 | 2 条 | 1 分钟
