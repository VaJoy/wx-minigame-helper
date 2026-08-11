---
title: "Object wx.getOfficialComponentsInfo()"
type: api
category: api/ui/menu
api: "wx.getOfficialComponentsInfo"
source: https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.getOfficialComponentsInfo.html
---

# Object wx.getOfficialComponentsInfo()

> 基础库 3.7.12 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

获取所有官方组件的相关信息

## 返回值

### Object

全部组件的信息

| 属性 | 类型 | 说明  
---|---|---|---  
|  notificationComponentInfo | Object | 通知组件信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  name | string | 组件的名称  
|  isVisible | boolean | 组件是否显示  
|  boundingClientRect | Object | 组件的布局位置信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  width | number | 宽度，单位：px  
|  height | number | 高度，单位：px  
|  top | number | 上边界坐标，单位：px  
|  right | number | 右边界坐标，单位：px  
|  bottom | number | 下边界坐标，单位：px  
|  left | number | 左边界坐标，单位：px  
  
|  rewardsComponentInfo | Object | 福利组件信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  name | string | 组件的名称  
|  canReceiveGiftCount | number | 可领取的礼包数量  
|  canReceiveFriendGiftCount | number | 可领取的好友礼包数量  
|  receiveDetail | Object | 领取事件详情（只在onOfficialComponentsInfoChange回调中返回）  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  type | string | gift: 礼包, friendGift: 好友礼包  
|  name | string | 礼包名称，只有 gift 类型才有  
|  desc | string | 礼包描述，只有 gift 类型才有  
|  icon | string | 礼包图标，只有 gift 类型才有  
  
|  challengeRewardsComponentInfo | Object | 擂台赛组件领奖信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  name | string | 组件的名称  
|  receiveDetail | Object | 领取事件详情（只在onOfficialComponentsInfoChange回调中返回）  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  userSourceList | Array.<Object> | 用户领取的奖励列表  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  source | Object | 奖励来源信息  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  propList | Array.<Object> | 道具列表  
| |  | 结构属性 | 类型 | 说明  
---|---|---|---  
|  propName | string | 道具名称  
|  propNum | number | 道具数量  
  
|  sourceName | string | 礼包名称  
|  type | number | 奖励类型：1-普通奖励, 2-稀有奖励  
  
|  sourceNum | number | 获取的奖励数量  
|  sourceType | number | 奖励类型：0-道具礼包, 1-微信蓝包, 2-h5商家券, 3-现金红包, 4-小程序券, 5-盲盒  
  
|  awardResult | number | 奖励领取结果：1-全部成功, 2-部分成功（礼物达到领取上限）, 3-领奖失败  
|  receivedRareReward | boolean | 是否收到了稀有奖励  
  
## 示例代码
    
    
    const componentsInfo = wx.getOfficialComponentsInfo();
    const { notificationComponentInfo } = componentsInfo;
    if (notificationComponentInfo.isShow) {
      console.log(notificationComponentInfo.boundingClientRect.width);
      console.log(notificationComponentInfo.boundingClientRect.height);
      console.log(notificationComponentInfo.boundingClientRect.top);
      console.log(notificationComponentInfo.boundingClientRect.left);
      console.log(notificationComponentInfo.boundingClientRect.bottom);
      console.log(notificationComponentInfo.boundingClientRect.right);
    }
