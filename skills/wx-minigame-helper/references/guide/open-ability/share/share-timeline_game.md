---
title: "分享到朋友圈"
type: guide
category: guide/open-ability/share
source: https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share-timeline_game.html
---

# 分享到朋友圈

> 从基础库 [2.12.0](<https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility>) 开始支持 此功能为beta版，暂仅在Android平台支持

可将小游戏当前游戏界面 或 对局回放 分享到朋友圈。

## 设置当前界面分享状态

小游戏默认不可被分享到朋友圈，开发者需主动设置“分享到朋友圈” 。

  1. 调用 [wx.showShareMenu](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareMenu.html>)设置当前游戏可分享朋友圈
  2. 调用 [wx.onShareTimeline](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.onShareTimeline.html>) 设置分享图片、标题，若不设置，则会以小游戏名称作为分享标题，以小游戏logo作为分享图片。

![](https://res.wx.qq.com/op_res/op7xu8_He0GzGGbNGVql7YQZAd9jmeVv1fvTL840KxsBHF_NakAs_VYm3Pvwapt-)

## 设置对局回放

参考 [对局回放功能接口文档](<../gameplay/game-recorder.md>)

## 预览模式

用户在朋友圈打开分享的小程序页面，并不会真正打开小程序，而是进入“小游戏预览模式”。“预览模式”下，页面顶部固定有导航栏，标题显示为分享时的标题。底部固定有操作栏，点击操作栏的“前往小程序”可打小游戏开发者指定的query路径。”预览模式“ 仅支持显示 用户分享的游戏界面 或 对局回放视频。开发者可通过判断[场景值](<https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list>)等于 1155 的方法来进行游戏内适配。

![](https://res.wx.qq.com/op_res/-LwF7zPiUy_DztG_lv4ZJC7WKzO2Ann0Z6Jv2lwh9e5hVCHeIitxd6sdEzYQsExf)

## 运营须知

分享朋友圈能力是为了满足纯内容场景的分享诉求，滥用于营销、诱导等行为将会被打击。小程序提供的服务中，不得存在滥用分享违规行为。如强制用户分享行为；分享立即获得利益的诱导行为；以及通过明示或暗示的样式来达到诱导分享目的的行为等。详见[《微信小程序平台运营规范》](<https://developers.weixin.qq.com/miniprogram/product/#_5-1-%E6%BB%A5%E7%94%A8%E5%88%86%E4%BA%AB%E8%A1%8C%E4%B8%BA >)

## Tips

  1. 低版本微信客户端打开时，会进入一个升级提示页面
  2. 不支持在小游戏内直接发起分享
  3. 支持打开开发版、体验版，无权限人员进入时页面会提示无权限
