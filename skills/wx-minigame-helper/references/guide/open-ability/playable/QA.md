---
title: "Q&A"
type: guide
category: guide/open-ability/playable
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/QA.html
---

## Q&A

**Q1. 试玩和小游戏是否有通信机制？**

目前试玩环境和小游戏环境并没有通信机制，但试玩广告环境下可以调用 [wx.notifyMiniProgramPlayableStatus](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.notifyMiniProgramPlayableStatus>) 通知基础库当前试玩已经结束；

**Q2. 试玩环境是否支持小游戏引擎插件？**

暂不支持；

**Q3. 为什么真机扫码打开黑屏？**

真机环境与工具端可能稍有差异，建议使用 [wx.setEnableDebug](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/playable/api/wx.setEnableDebug>) 打开试玩环境 vConsole 调试排查原因，一般情况下都是有 js 报错。

**Q4. 游戏使用常规小游戏AppID时正常，切换为试玩AppID后黑屏？**

使用试玩AppID后会使用试玩环境展示。试玩环境相比正式环境有文件、网络等许多能力限制。可以参考以下建议： ① 参考试玩基础库 API 文档排查是否使用了不支持的 API。 ② 使用 wx.setEnableDebug 打开试玩环境 vConsole 排查报错原因。

**Q5. 为什么开发预览时弹框报错errcode=177183562？** 开发版仅支持有试玩服务商运营权限的人员扫码预览，其他人员扫码打开会弹框提示错误。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/2bd79227-d376-46dd-a399-885750c8c695.png)
