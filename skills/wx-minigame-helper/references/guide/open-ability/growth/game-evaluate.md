---
title: "评价与推荐"
type: guide
category: guide/open-ability/growth
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-evaluate.html
---

# 评价与推荐

## 功能说明

小游戏体验评价是小游戏官方提供的真实公正的评价系统，使用过小游戏的用户可针对小游戏的使用体验进行评价打分、发表建议和感受。帮助开发者了解用户需求、改进产品功能，为用户选择小程序提供有效的参考。

## 用户主动评价

用户在搜索结果，小游戏更多面板，都可以访问“评分主页”，访问后可以主动对游戏进行评价

![](https://mmgame.qpic.cn/image/f13794ad175dc0d0da44d861a055ef34d1ba9b59f36f6fa482b342c132a53778/0)

## 游戏邀请用户推荐

除了官方评价外，我们观察到「朋友的推荐」也是用户选择小游戏的重要原因，如果一个游戏被「朋友推荐过」，那么用户持续玩的意愿会更大；就像在「视频号、公众号」场景中，用户更乐意消费「朋友喜欢」的内容

因此，开发者可通过下面的方法，在小游戏内拉起小游戏推荐组件，鼓励用户推荐、分享小游戏，推荐信息会在下方场景固定展示。

![](https://mmgame.qpic.cn/image/96dc00cac530373a327d2ae6ce2320b396b59982c420212935ba823160f0092a/0)

推荐数据将在微信内的各个场景展示（如启动小游戏时、搜索结果、发现-小程序等），帮助游戏吸引更多用户，并影响评分分值，帮助游戏进行推广

开发者可参考下方方法，让热爱游戏的玩家做游戏的推荐。

### 1、策划游戏内入口

建议在玩家对游戏认同感较高的时刻出发，如「高光时刻、达成等级、抽到稀有卡、获得高分」等，或游戏内植入固定入口，触发后展示如下：

![](https://mmgame.qpic.cn/image/1e70b49415800c97073a0732643aac81084d2e05e8bdcdedad57294abe97d764/0)

**注意** ：官方不提倡使用道具奖励刺激用户推荐，鼓励出于对游戏热爱的自发推荐

### 2、开发接入实现

  * **获取PageManager实例：**

    
    
    const pageManager = wx.createPageManager();
    

  * **预加载：**

    
    
    pageManager.load({
        // 推荐组件OPENLINK常量，直接复制即可，无需理解含义
        openlink: 'TWFRCqV5WeM2AkMXhKwJ03MhfPOieJfAsvXKUbWvQFQtLyyA5etMPabBehga950uzfZcH3Vi3QeEh41xRGEVFw',
      });
    

  * **展示（若未进行预加载会首先预加载）：**

    
    
    pageManager.show({
      // 推荐组件OPENLINK常量，直接复制即可，无需理解含义
        openlink: 'TWFRCqV5WeM2AkMXhKwJ03MhfPOieJfAsvXKUbWvQFQtLyyA5etMPabBehga950uzfZcH3Vi3QeEh41xRGEVFw', 
      });
    

  * **销毁：**

    
    
    pageManager.destroy();
    

  * **监听事件**

    
    
    pageManager.on(
        'show', // show | destroy | error
        () => {
            console.log('recommend component show.');
        },
    )
    pageManager.on(
        'destroy', // show | destroy | error
        (res) => {
            console.log('recommend component destroy：', res.isRecommended);
        },
    )
    
    

  * **最佳实践（复制下面的代码即可）：**

    
    
    /**
     *  推荐组件参考代码
     *  核心由 pageManager实例 + openlink值 决定活动，开发者可根据下方代码自行适配
     */
     let recommendPageManager;
    /**
     *  游戏内提前加载推荐组件数据
     */
    async function loadRecommend() {
      if (!wx.createPageManager) {
        throw '当前基础库版本暂不支持。';
      }
      recommendPageManager = wx.createPageManager();
      await recommendPageManager.load({
        openlink: 'TWFRCqV5WeM2AkMXhKwJ03MhfPOieJfAsvXKUbWvQFQtLyyA5etMPabBehga950uzfZcH3Vi3QeEh41xRGEVFw', // 推荐组件OPENLINK常量，直接复制即可，无需理解含义
      });
    }
    
    /**
     *  拉起推荐组件
     */
    async function showRecommend() {
      if (!recommendPageManager) {
        await loadRecommend();
      }
      return await recommendPageManager.show();
    }
    
    // 游戏场景load时
    loadRecommend();
    
    // 需要展示时
    showRecommend();
    

### 3.pageManager.on 监听事件回调

> 基础库 3.8.6 开始支持，低版本需做[兼容处理](<../../runtime/client-lib/compatibility.md>)

回调类型 | 回调时机 | 返回  
---|---|---  
ready | 组件加载完毕时触发 | -  
show | 用户侧展示组件时触发 | -  
destroy | 用户关闭组件时触发 | Object  
error | 组件发生错误时触发 | Object  
  
**destroy callback回调返回** ：

返回参数 | 类型 | 说明 | 备注  
---|---|---|---  
Object.isRecommended | bool | 表示玩家关闭组件时的推荐状态 | 需3.8.6及以上基础库版本支持  
  
**error callback 回调返回** ：

返回参数 | 类型 | 说明  
---|---|---  
Object.errCode | number | 错误码  
Object.errMsg | string | 调用时返回的错误消息  
  
后续，官方会基于「用户推荐」构建更多样化的，基于社交关系的分发场景，帮助好游戏被更多人发现。
