---
title: "PageManager wx.createPageManager()"
type: api
category: api/open/openlink
api: "wx.createPageManager"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/wx.createPageManager.html
---

# [PageManager](<PageManager.md>) wx.createPageManager()  
  
> 基础库 3.6.7 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

## 功能描述

小游戏开放页面管理器，用于启动微信内置的各种小游戏活动、功能页面。具体OPENLINK值由不同的能力渠道获得。

## 返回值

### [PageManager](<PageManager.md>)

开放页面管理器

## 示例代码
    
    
    const pageManager = wx.createPageManager();
    
    pageManager.load({
      openlink: 'xxxxxxx-xxxxxx', // 由不同渠道获得的OPENLINK值
    }).then((res) => {
      // 加载成功，res 可能携带不同活动、功能返回的特殊回包信息（具体请参阅渠道说明）
      console.log(res);
    
      // 加载成功后按需显示
      pageManager.show();
    
    }).catch((err) => {
      // 加载失败，请查阅 err 给出的错误信息
      console.error(err);
    })
    
    

## 错误码信息

如需了解各种错误原因可参阅下表。

代码 | 原因 | 解决方案  
---|---|---  
0 | 无异常 | -  
-1 | openlink异常 | 请确认openlink填写完整且正确。  
-2 | 基础库版本不支持 | 基础库版本较低引起，受平台灰度等策略影响。  
-3 | 当前设备暂不支持 | 通常受活动、能力本身对平台限制引起。  
-4 | 业务渠道方报错 | 由openlink业务方提供的错误信息，具体错误信息请详见 errInfo 字段。  
-5 | 其他错误 | 其他原因引发的错误，具体错误信息请详见 errInfo 字段。  
-6 | 网络错误 | 网络异常引发的错误，检查网络环境。  
-7 | 频繁错误 | 请勿高频发起load请求。  
-8 | 小游戏版本错误 | 小游戏版本与openlink不匹配，需正确使用openlink对应生效的 开发版、体验版、正式版。
