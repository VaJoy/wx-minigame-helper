---
title: "StoreGift wx.createStoreGift(Object object)"
type: api
category: api/open/store-gift
api: "wx.createStoreGift"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/store-gift/wx.createStoreGift.html
---

# [StoreGift](<StoreGift.md>) wx.createStoreGift(Object object)

> 基础库 3.8.12 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 鸿蒙 OS 版** ：支持

## 功能描述

创建蓝包组件

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
presentOrderId | boolean |  | 否 | 礼物订单id，调用“创建并发送礼物”或通过“查询礼物订单列表”open api拿到，open api文档[链接](<https://doc.weixin.qq.com/doc/w3_AecACAZVAPMCNRyNF8Tq1Ts0zKrGq>)。  
openid | string |  | 否 | 用户 openid  
  
## 返回值

### [StoreGift](<StoreGift.md>)

## 示例代码
    
    
    // 创建礼物
    const gift = wx.createStoreGift({
      presentOrderId: '42xxxxxxxxxxxx', // 订单号为42开头的字符串
      openid: 'xxxxxxxx', // 请填入真实的 openid
    });
    
    // 为了方便调试，getOrderInfo 在不支持打开礼物组件的环境也能调用
    gift.getOrderInfo().then((res) => {
      // 订单加载成功
      console.log('礼物状态: ' + res.orderStatus);
      console.log('礼物祝福语: ' + res.wishMessage);
    }).catch((err) => {
      // 订单加载失败的异常处理
      console.log(err.errCode);
      console.log(err.errMsg);
    });
    
    // 打开礼物
    if (gift.isSupported()) {
      gift.open();
    }
    

## Bug & Tip

  1. `tip`：暂不支持在微信 Windows 版和微信 Mac 版的小程序上使用本接口。
  2. `tip`：组件要求微信iOS版本>=8.0.60，微信Android版本>=8.0.60。
