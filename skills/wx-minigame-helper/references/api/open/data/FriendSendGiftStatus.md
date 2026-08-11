---
title: "FriendSendGiftStatus"
type: api
category: api/open/data
api: "FriendSendGiftStatus"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/data/FriendSendGiftStatus.html
---

# FriendSendGiftStatus

用户送礼状态信息

## 属性

### string openid

用户的 openid

### boolean blockSend

是否禁止送礼，false 代表当前可以发起赠送

### number blockCode

禁止送礼原因枚举，该字段在 blockSend 为 false 的时候不会返回

### string blockReason

禁止送礼原因描述，该字段在 blockSend 为 false 的时候不会返回

### blockCode 枚举

值 | 含义  
---|---  
151066168 | 当前时间周期已经赠送，目前支持一天赠送一次  
151066169 | 注册天数不足 首次注册时间必须大于 24 小时才能赠礼
