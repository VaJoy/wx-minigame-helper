---
title: "StoreGift"
type: api
category: api/open/store-gift
api: "StoreGift"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/store-gift/StoreGift.html
---

# StoreGift

> 基础库 3.8.12 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

可通过 [wx.createStoreGift](<wx.createStoreGift.md>) 创建。

小游戏蓝包组件，可以打开蓝包。

## 方法

### [boolean StoreGift.isSupported()](<StoreGift.isSupported.md>)

获取当前环境是否支持礼物组件

### [Promise StoreGift.getOrderInfo()](<StoreGift.getOrderInfo.md>)

查询订单状态

### [Promise StoreGift.open()](<StoreGift.open.md>)

打开礼物，请注意，这里的回调仅仅是打开礼物界面的回调，并不是收下礼物的回调
