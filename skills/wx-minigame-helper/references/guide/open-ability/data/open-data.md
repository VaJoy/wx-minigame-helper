---
title: "关系链数据"
type: guide
category: guide/open-ability/data
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/open-data.html
---

# 关系链数据

为了丰富游戏的社交玩法，我们为开发者提供 关系链数据 能力。通过关系链数据能力，可满足游戏内 排行榜、好友超越等使用场景。

我们始终坚持尊重和保护用户隐私，以下数据的使用应符合《个人信息保护法》等相关法律法规的要求，包括但不限于取得用户的明确同意等。

每一个微信用户的关系链数据包括 3 部分：

  * 该用户好友的用户数据
  * 该用户所在的某个群的群成员的用户数据
  * 该用户的可能对该游戏感兴趣的好友列表（基础库 2.9.0 开始支持）

获取关系链数据的 API：

  * [wx.getFriendCloudStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html>) 获取当前用户也玩该小游戏的好友的用户数据
  * [wx.getGroupCloudStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html>) 从群聊分享卡片进入时，可获取当前群聊的群名、群内同玩成员的用户数据
  * [wx.getPotentialFriendList](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getPotentialFriendList.html>) 获取当前用户对游戏感兴趣的未注册的好友名单

这三个 API 的返回结果都是一个对象数组，数组的每一个元素都是一个表示用户数据的对象，其结构如下：

属性 | 类型 | 说明  
---|---|---  
openId | string | 用户的 openId  
avatarUrl | string | 用户的微信头像 url  
nickName | string | 用户的微信昵称  
data | Object | 用户的游戏数据  
  
用户的 `游戏数据` 指的是用户的段位、战绩等游戏业务特有的数据，通过调用 [wx.setUserCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.setUserCloudStorage.html>) 可以将当前用户的游戏数据托管在微信后台。只有被托管过数据的用户，才会被视为 `玩过` 该小游戏的用户，才会出现在 [wx.getFriendCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html>) 和 [wx.getGroupCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html>) 返回的对象数组中。

除此之外，我们还提供了以下 API：

  * [wx.removeUserCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.removeUserCloudStorage.html>) 删除用户托管数据中指定字段的数据
  * [wx.getUserCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorage.html>) 获取当前用户的托管数据

[wx.getUserCloudStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorage.html>)、[wx.getFriendCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getFriendCloudStorage.html>) 和 [wx.getGroupCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html>) 只能在 `开放数据域` 中调用。 [wx.setUserCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.setUserCloudStorage.html>) 和 [wx.removeUserCloudStorage()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.removeUserCloudStorage.html>) 可以同时在`主域`和`开放数据域`中调用。
