---
title: "排行榜"
type: guide
category: guide/open-ability/data
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/ranklist.html
---

# 排行榜

## 开发

开发排行榜功能，主要是通过[关系链数据](<open-data.md>)相关的 API 进行实现。

以分数为排行榜数据为例，可以通过 [wx.setUserCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.setUserCloudStorage.html>) 上传当前用户的分数，然后在开放数据域中，通过 [wx.getFriendCloudStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html>) 获取当前用户也玩该小游戏的好友的用户的分数，然后根据数据，自行绘制排行榜界面

由于开放数据域的逻辑是独立的，所以绘制排行榜界面建议使用[Layout](<https://github.com/wechat-miniprogram/minigame-canvas-engine>)等轻量级的渲染引擎

## 配置定义

此处配置的排行榜是指：由开发者按标准格式要求数据上报后，在【搜索、社交组件】等微信场景下，可以展现同玩好友的排行榜。

注：该配置只影响【搜索、社交组件】中的排行榜展现。并不影响利用托管数据、主域和开放数据域的方式实现的游戏内好友排行榜。并且【搜索】中展示的条件比较严格，缺少数据不会展示。

## 配置展示场景

该配置影响的场景目前有：

  * 微信搜索（需要正式版同时有3个以上好友有上传数据）

  * [社交组件](<../community/game-chat.md>)

  * 服务通知：如果用户已通过 [wx.requestSubscribeSystemMessage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/subscribe-message/wx.requestSubscribeSystemMessage.html>) 订阅 [排行互动提醒](<../message/subscribe-system-message.md>)，则当用户被排行超越时，会自动触发用户会通过 服务通知收到互动提醒

![search](https://res8.wxqcloud.qq.com.cn/wxdoc/e0e74484-80f9-4c3d-8660-8b68331c3259.png)

## 配置步骤与相关字段说明

### 1\. 完成规范格式的后台数据上报

上报接口文档地址：[wx.setUserCloudStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.setUserCloudStorage.html>) (前端接口)、[storage.setUserStorage](<https://developers.weixin.qq.com/minigame/dev/api-backend/data/api_storage.setuserstorage>) (后台接口)

### 2\. 登录 MP 管理后台后，在「游戏能力地图-社交能力-微信排行榜配置」中完成配置

![RanklistConfig](https://res8.wxqcloud.qq.com.cn/wxdoc/3b75b558-9e7e-4338-a3a0-d7731243a767.png)

字段 | 说明  
---|---  
排行榜唯一标识 | 指在后台上报时设置的 key 值，用于识别上报分数  
排行榜名称 | 如分数排行榜，会在小游戏中心上展示  
更新周期 | 按照一定周期过滤上报数据。  
即每周一过滤刷新用户分数  
排行榜数据类型 | 用于配置排行榜显示数据类型  
整数型：按实际上报的数值显示，如 100，99，98  
枚举值：按照上报数值转义后的文本内容显示，如钻石级，黄金级  
排行榜顺序 | 升序：自小而大，数值小的排行靠前  
降序：自大而小，数值大的排行靠前  
数据单位后缀 | 支持个性化单位，如分、秒、等级等  
  
### 3\. 完成提交后，需经微信审核通过，才可生效。

![ConfigApperance](https://res8.wxqcloud.qq.com.cn/wxdoc/5611b845-2cf3-4048-82d6-5ab5e0a1b59e.png)
