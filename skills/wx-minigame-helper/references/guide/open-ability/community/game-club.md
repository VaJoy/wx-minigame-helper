---
title: "游戏圈"
type: guide
category: guide/open-ability/community
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-club.html
---

# 游戏圈

开发者通过游戏圈组件，在小游戏内为用户提供游戏交流、用户互动、反馈收集等社区能力。 同时，游戏圈内容，也会在微信各场景（例如：发现-游戏）被用户看见。

![](https://res8.wxqcloud.qq.com.cn/wxdoc/2f09de92-5d02-4f99-83c5-ee5441852124.jpg)

## 小游戏打开游戏圈

开发者可直接调用 [wx.createPageManager](<https://developers.weixin.qq.com/minigame/dev/api/open-api/openlink/wx.createPageManager.html>)，打开游戏圈首页、指定帖子、话题页面，满足游戏内不同场景。 接口调用时，需传入 指定页面的 `openlink`，`openlink` 在 **MP-游戏圈 - 基础设置** 或 **帖子/话题列表** 获取

## 小游戏与游戏圈联动

  * 开发者可以通过玩法、任务等方式，鼓励用户在社区交流、互动。
  * 游戏内发表图文内容到游戏圈 [小游戏官方插件 - shareImageToGameCenter](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxaed5ace05d92b218&token=&lang=zh_CN>)
  * 录制[对局回放视频](<../gameplay/game-recorder.md>)，并分享到游戏圈 [wx.operateGameRecorderVideo()](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.operateGameRecorderVideo.html>)
  * 查询当前用户游戏圈活跃信息[wx.getGameClubData()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.getGameClubData.html>) ，用于游戏内设计活跃任务。 该接口数据，需要获得用户授权同意。可通过接口 [wx.getSetting()](<https://developers.weixin.qq.com/minigame/dev/api/open-api/setting/wx.getSetting.html>) 查询用户是否已授权。
  * 开发者接入[小游戏礼包](<../growth/game-gift.md>)后，游戏圈服务区内页会展示对应礼包入口。

## 运营与管理

除此之外，我们为开发者提供了游戏圈社区能力的运营与管理能力，开发者可以在「MP 后台-游戏能力地图-游戏圈」，官方发表内容和管理游戏圈，维护健康的游戏圈内容与社区环境。

  * MP 管理后台入口 ![](https://res.wx.qq.com/op_res/OGzNJs4Rs6RcJcuErQe03Rws1i4rKcoJ4jN2stQlP2POA5004cpmRRGkLF-hRmoegArJymLfn9IROvwmRwpM8w)

  * 帖子管理：用官号发帖；所有帖子的管理（置顶、沉底、屏蔽、转为攻略）；个人管理（帖子、评论批量沉底、屏蔽） ![](https://res8.wxqcloud.qq.com.cn/wxdoc/d54d87d9-baf7-4785-9c8c-9046e20a4a9d.jpg)

  * 话题管理：新建话题、推荐话题、导入帖子、查看话题下的帖子、创建话题任务及奖励 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/2410279e-52af-4662-8a76-c9b43b12f1a7.jpg)

  * 配置信息：创建官方号，关联视频号；配置官方号权限管理员；添加运营管理员； ![](https://res8.wxqcloud.qq.com.cn/wxdoc/616552cd-0bee-4167-b575-a9c43aefb7ce.jpg)

  * 添加官方号权限管理员后，在手机端可以切换官方账号发帖、管理帖子 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/c5b46444-bf84-490f-a818-5336a44403a7.jpg)
