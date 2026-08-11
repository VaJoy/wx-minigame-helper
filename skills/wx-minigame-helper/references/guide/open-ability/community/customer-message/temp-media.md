---
title: "在客服消息中使用临时素材"
type: guide
category: guide/open-ability/community/customer-message
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/customer-message/temp-media.html
---

# 在客服消息中使用临时素材

开发者可在接收和发送客服消息的过程中获取或上传临时素材。

## 获取客服消息内的临时素材

接收到用户消息之后，可通过 [获取临时素材接口](<https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_getmedia>) 获取消息中的临时素材

## 新增图片素材

通过 [新增素材接口](<https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_uploadtempmedia>) 可以上传临时素材，并在 [发送消息接口](<https://developers.weixin.qq.com/miniprogram/dev/server/API/kf-mgnt/kf-message/api_sendcustommessage>) 中使用。
