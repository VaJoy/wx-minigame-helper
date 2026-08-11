---
title: "基础库更新日志"
type: guide
category: guide/getting-started
source: https://developers.weixin.qq.com/minigame/dev/guide/framework/release/index.html
---

# 基础库更新日志

[查看开发者工具更新日志](<https://developers.weixin.qq.com/miniprogram/dev/devtools/uplog>)

[查看云开发更新日志](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/reference/changelog>)

## v3.17.0 (2026-06-17)

  1. `A` 新增 API 跳转到表情艺术家主页接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/sticker/wx.openDesignerProfile.html>)
  2. `U` 更新 组件 editor-portal 支持 glass-easel [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/editor-portal.html>)
  3. `U` 更新 组件 ScrollViewContext 支持鸿蒙 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.html>)
  4. `F` 修复 框架 animate 解析带 alpha 的 hex color
  5. `F` 修复 框架 skyline touch 事件阻止默认行为后应不响应 tap [详情](<https://developers.weixin.qq.com/community/minihome/doc/000ea4cc7acb783494054bee76b400>)
  6. `F` 修复 框架 skyline 页面跳转到 webview 的 tab 页时，tabbar 会意外出现的 bug
  7. `F` 修复 组件 安卓地图组件有时不显示 marker 的问题
  8. `F` 修复 组件 iOS input 在 scroll-view 中被键盘单独推起 [详情](<https://developers.weixin.qq.com/community/develop/doc/000282f15d4388b209057fb1e66c00>)

## v3.16.2 (2026-05-15)

  1. `U` 更新 框架 小游戏支持游戏互动关系链 [详情](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getRelationFriendList.html>)
  2. `U` 更新 框架 鸿蒙对齐 android ，位置授权弹耦合弹框
  3. `U` 更新 组件 放开 holdKeyboard 时 touchmove 会收起键盘的限制
  4. `U` 更新 组件 live-player 和 live-pusher 新增 mute-on-audio-conflict 参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>)
  5. `F` 修复 框架 skyline radio 布局问题 [详情](<https://developers.weixin.qq.com/community/minihome/doc/000ac808fb4280ae82f4679d166800>)
  6. `F` 修复 组件 editor 组件微信输入法英文输入 bug 修复

## v3.16.1 (2026-04-15)

  1. `U` 更新 框架 游戏新增语音房 [详情](<https://developers.weixin.qq.com/minigame/dev/api/game-server-manager/GameServerManager.getJoinVoIPChatSignature.html>)
  2. `U` 更新 组件 official-account-publish path 和 recommend-link 参数已调整下线。推荐使用recommend-path 和 recommend-title 参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account-publish.html>)
  3. `U` 更新 API shareToOfficialAccount path 和 recommendLink 参数已调整下线。推荐使用 recommendPath 和 recommendTitle 参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.shareToOfficialAccount.html>)
  4. `F` 修复 框架 小游戏福利分组礼包领取后，展开礼包重复问题

## v3.16.0 (2026-04-03)

  1. `A` 新增 框架 小游戏支持离线模式 [详情](<https://developers.weixin.qq.com/minigame/dev/api/offline-mode/wx.enableOfflineModeDebug.html>)
  2. `A` 新增 API 安卓交通卡 NFC 相关接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.issueTransitCard.html>)
  3. `U` 更新 框架 小游戏擂台赛体验优化
  4. `U` 更新 组件 live-player & live-pusher 状态码 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html#%E7%8A%B6%E6%80%81%E7%A0%81>)
  5. `U` 更新 API wx.batchGetStorageSync 接口支持插件调用 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorageSync.html>)
  6. `U` 更新 API wx.onCopyUrl 支持 promise 回调 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.onCopyUrl.html>)
  7. `F` 修复 框架 小游戏窗口尺寸异常以及出现黑边
  8. `F` 修复 组件 安卓 textarea 通过 wx:if 打开异常高度
  9. `F` 修复 组件 input 和 textarea 的 maxLength emoji 截断

## v3.15.2 (2026-03-25)

  1. `U` 更新 框架 skyline 支持 selection [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectionContext.html>)
  2. `U` 更新 框架 glass-easel 链式调用支持 Behavior.trait, staticData 和 extraThisFieldsType
  3. `U` 更新 组件 小程序贴图组件优化（小尾巴自定义）
  4. `F` 修复 框架 onLanguageChange 触发以后获取 language 会被 Object 包裹 [详情](<https://developers.weixin.qq.com/community/develop/doc/0008cc242ac1a05645d4f0b1769c00>)
  5. `F` 修复 框架 IOS 内存压力过大时，wxs 响应函数可能无法执行的 bug
  6. `F` 修复 框架 skyline 页面跳转 webview 页面，快速点击会多次跳转
  7. `F` 修复 组件 wx-text Android 反向选择截取文本错误

## v3.15.1 (2026-03-13)

  1. `U` 更新 框架 小程序复制链接增加「自定义标题」 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.onCopyUrl.html>)
  2. `U` 更新 框架 小游戏 vconsole 支持日志导出和复制
  3. `U` 更新 组件 video / live-player 组件支持 ios 系统画中画 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>)
  4. `U` 更新 组件 微信小店 store-product 增加送礼物下单半屏 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html>)
  5. `U` 更新 组件 贴图组件去掉 limit 限制 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account-publish.html>)
  6. `U` 更新 API wx.openOfficialAccountArticle 接口支持插件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openOfficialAccountArticle.html>)
  7. `F` 修复 框架 小游戏鸿蒙分享带 query 无法获取 query 值
  8. `F` 修复 框架 小游戏擂台赛现网问题修复
  9. `F` 修复 框架 小游戏内弹出充值中心面板后微信支付失败
  10. `F` 修复 组件 editor 中微信输入法删除键会连续删除两次
  11. `F` 修复 组件 textarea 设置 max-height 时最后一行被截断
  12. `F` 修复 组件 textarea auto-height 有时计算不准确
  13. `F` 修复 组件 支付功能页按钮防抖

## v3.15.0 (2026-02-26)

  1. `U` 更新 组件 camera 组件拍照接口返回相机参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.takePhoto.html>)

## v3.14.3 (2026-01-29)

  1. `A` 新增 API wx.onUserOffTranslation 监听用户关闭翻译事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.onUserOffTranslation.html>)
  2. `U` 更新 框架 skyline picker-view column 支持单独设置 indicator-style [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html>)

## v3.14.2 (2026-01-22)

  1. `U` 更新 框架 skyline 支持 ScrollViewContext.scrollTo({velocity}) [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.scrollTo.html>)
  2. `U` 更新 框架 PC 小程序在硬件支持时采用 GPS 定位 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html>)
  3. `U` 更新 组件 微信小店打开礼物蓝包组件支持鸿蒙 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/store-gift.html>)
  4. `U` 更新 API TCPSocket 支持设置 TCP_NODELAY [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.connect.html>)
  5. `F` 修复 框架 小游戏高性能+模式修复 VideoDecoder seek 失败问题
  6. `F` 修复 框架 使用异步组件作为 app.json 中配置的插件页面根组件的 genericsImpl 时无法替换
  7. `F` 修复 组件 editor 组件输入时停止 setEventInterceptor 拦截删除事件

## v3.14.1 (2026-01-09)

  1. `U` 更新 框架 PC 小游戏键鼠模拟适配 displayMode 为 desktop 的场景 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/pc-game>)
  2. `F` 修复 框架 微信小店商品卡片 skyline 样式修复

## v3.14.0 (2025-12-31)

  1. `A` 新增 API 小程序支持跳转至问一问话题 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openInquiriesTopic.html>)
  2. `U` 更新 框架 小游戏福利组件礼包领取事件、获取奖励信息 [详情](<https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.onOfficialComponentsInfoChange.html>)
  3. `U` 更新 框架 聊天工具开放能力支持参数控制单选 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/chatToolOpenMode>)
  4. `U` 更新 框架 优化 vConsole 创建
  5. `U` 更新 组件 安卓 scroll-view 中横向滚动应该不显示 scrollbar [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  6. `U` 更新 API getAppBaseInfo 补充 pcKernelVersion 字段 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppBaseInfo.html>)
  7. `U` 更新 API getLocalIPAddress 支持蜂窝网络 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getLocalIPAddress.html>)
  8. `F` 修复 框架 skyline input 报错
  9. `F` 修复 框架 skyline scroll-view max-height 不生效
  10. `F` 修复 组件 修复 iOS input 切换焦点问题

## v3.13.2 (2025-12-19)

  1. `U` 更新 框架 优化 scroll-view 设置 scrollTop
  2. `U` 更新 组件 map showLocation 主动申请授权 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)

## v3.13.1 (2025-12-12)

  1. `U` 更新 框架 小游戏镜像系统优化
  2. `U` 更新 API shareToOfficialAccount 支持开发者自定义小程序 path [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.shareToOfficialAccount.html>)
  3. `F` 修复 框架 安卓 input 重复触发事件 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a20d721c9e8307e54bfdd461800>)
  4. `F` 修复 框架 非按需注入模式下 glass-easel webview 的页面使用插件可能样式异常
  5. `F` 修复 框架 云托管修复 SSE 粘包
  6. `F` 修复 框架 skyline map marker 时序问题修复

## v3.13.0 (2025-12-03)

  1. `U` 更新 框架 httpdns 支持插件发起 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/ability/HTTPDNS>)
  2. `U` 更新 框架 小游戏福利组件折叠、礼包进度刷新优化
  3. `U` 更新 框架 PC 小游戏键鼠模拟功能优化
  4. `U` 更新 框架 glass-easel webview 支持初始渲染缓存
  5. `U` 更新 API getSystemInfo / getDeviceInfo platform 平台新增 ohos_pc [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getDeviceInfo.html>)
  6. `U` 更新 API 小程序支持拉起直播预约半屏幕 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsLiveNoticeInfo.html>)
  7. `F` 修复 框架 exparser 中自定义组件 property 的 optionalTypes 包含 Object 或 Array 时，传入 undefined 作为值会引起预期外的异常
  8. `F` 修复 框架 PC 小程序 picker 组件样式修复 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a0867f200e0ce5d242583e66800>)
  9. `F` 修复 组件 Editor 组件 setEventInterceptor 方法
  10. `F` 修复 API editor 拦截删除 block 失败

## v3.12.1 (2025-11-21)

  1. `U` 更新 框架 skyline 允许开发者指定 navigateTo 动画使用的 OpenContainer [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html>)

  2. `U` 更新 API MapContext.openMapApp 允许指定优先地图 App 和 poiId 参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.openMapApp.html>)

  3. `F` 修复 框架 跳插件页出现非预期 tabbar

  4. `F` 修复 框架 修复 ohos skyline video 无法全屏

  5. `F` 修复 框架 root-portal 脱离页面时，需要屏蔽 portal 组件

## v3.12.0 (2025-11-13)

  1. `A` 新增 API 小程序接入截图/生成图自定义转发 wx.onGeneratePoster [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onGeneratePoster.html>)
  2. `U` 更新 框架 PC 小游戏最小窗口尺寸统一
  3. `U` 更新 框架 分享朋友圈支持 Promise 获取，与分享给好友对齐 [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page#onShareTimeline>)
  4. `U` 更新 框架 优化手机号扣费
  5. `U` 更新 框架 聊天工具开放能力 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/chatTool>)
  6. `F` 修复 框架 skyline input 函数未定义报错
  7. `F` 修复 框架 skyline video组件中 setLayoutCallback 找不到的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/0000c83f75824890b9049f2cd6b000>)

## v3.11.3 (2025-11-06)

修复了一些已知问题

## v3.11.2 (2025-10-31)

  1. `A` 新增 API 小游戏开放数据域支持给朋友送道具 [详情](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.sendGiftToFriend.html>)
  2. `U` 更新 框架 performance 支持 skyline 监听卡顿数据
  3. `U` 更新 框架 插件支持调用 wx.openOfficialAccountProfile [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openOfficialAccountProfile.html>)
  4. `U` 更新 框架 PC 小程序 showShareImageMenu
  5. `U` 更新 框架 PC 小程序「设置」体验优化

## v3.11.1 (2025-10-21)

  1. `U` 更新 框架 ohos 支持 voip-room [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html>)
  2. `U` 更新 框架 ohos 支持调用 nfc 相关接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.startDiscovery.html>)
  3. `U` 更新 框架 提供 requestIdleCallback 注册空闲时机回调方法 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.requestIdleCallback.html>)
  4. `U` 更新 框架 PC 小程序 request 接口及相关网络接口提供 timeout 参数支持 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  5. `U` 更新 框架 PC 端推荐评分组件& cps 推荐组件兼容
  6. `U` 更新 框架 优化异步分包下载机制
  7. `U` 更新 框架 小程序非前台的状态下媒体内容播放与暂停逻辑优化
  8. `U` 更新 框架 生成 codecache 策略优化
  9. `U` 更新 组件 图文发表与展示组件跳转小程序 path [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account-publish.html>)
  10. `U` 更新 组件 scroll-view scroll-anchoring 支持选择自定义组件为锚点 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  11. `U` 更新 组件 skyline rich-text webstatic 模式 优化渲染性能
  12. `F` 修复 框架 performance 路由开始时间异常问题
  13. `F` 修复 框架 聊天工具模式分享接口不触发失败回调函数
  14. `F` 修复 组件 skyline 下 input type=nickname 不触发 input 事件
  15. `F` 修复 API 小程序分享到图片接口添加保存到相册无授权 toast

## v3.11.0 (2025-10-14)

  1. `U` 更新 框架 PC 小程序 picker 组件样式优化
  2. `U` 更新 框架 PC 小游戏横竖屏切换支持 [详情](<https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.setDeviceOrientation.html>)
  3. `U` 更新 框架 globalpay 全球收银新增跳端支付
  4. `U` 更新 组件 小游戏擂台赛 [详情](<https://developers.weixin.qq.com/minigame/introduction/commercialization/social-contact/group-interaction#%E7%BE%A4%E6%93%82%E5%8F%B0>)
  5. `F` 修复 框架 wx.setStorageSync(key undefined) 设置 data 值为 undefined 时会错误的转为空字符串
  6. `F` 修复 框架 开发者工具 InnerAudioContext 连续多次调用 play ，再调用 stop 时音频还在播放

## v3.10.3 (2025-09-23)

  1. `U` 更新 框架 PC 小程序菜单新增静音入口
  2. `U` 更新 框架 PC 小程序菜单新增设置入口
  3. `U` 更新 组件 图文发表与展示组件 limit 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account-publish.html#:~:text=3.9.3-,limit,-number>)
  4. `F` 修复 框架 小游戏推荐组件在游戏名超长情况下显示 bug

## v3.10.2 (2025-09-11)

  1. `A` 新增 组件 图文发表与展示组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account-publish.html>)
  2. `U` 更新 框架 skyline 模式下输入框先获得焦点再点击数据填充后 setData 和输入框内容不一致
  3. `U` 更新 框架 PC 小程序/小游戏 Vconsole 体验优化
  4. `F` 修复 框架 PC / 平板 frameset 分栏模式下遇到的多个问题
  5. `F` 修复 组件 slider 无法滑动到上次的值 [详情](<https://developers.weixin.qq.com/community/develop/doc/000066aa6f4fb88f0dc376a1766c00>)

## v3.10.1 (2025-09-04)

  1. `U` 更新 组件 picker-view-column 无障碍提示语优化
  2. `U` 更新 API wx.getEnterOptionsSync 和 wx.getLaunchOptionsSync 每次调用时都返回一个新的对象
  3. `F` 修复 框架 飞行模式下 wx.request timeout 不符预期的问题
  4. `F` 修复 框架 没有 hoverClass 时，stopPropagation 不生效
  5. `F` 修复 框架 PC 小程序 picker 组件设置 level 后不生效 [详情](<https://developers.weixin.qq.com/community/develop/doc/000e0251b2400020ef93c57ea6bc00>)
  6. `F` 修复 框架 vConsole 按钮特定场景下消失
  7. `F` 修复 组件 skyline map 内存泄露

## v3.10.0 (2025-08-26)

  1. `A` 新增 框架 小程序用工关系功能相关接口 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/laboruse/intro>)
  2. `A` 新增 API 小程序支持跳转公众号会话 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openOfficialAccountChat.html>)
  3. `U` 更新 API openEmbeddedMiniProgram 接口打开半屏小程序上限提升到100，allowFullScreen 参数强制为 true [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openEmbeddedMiniProgram.html>)
  4. `U` 更新 组件 map 组件 show-location 新增用户定位授权检查 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)
  5. `F` 修复 组件 channel-video skyline 下交互可能不生效

## v3.9.3 (2025-08-14)

  1. `U` 更新 框架 editor customBlock 支持 redo/undo、获取 historyState [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getHistoryState.html>)

## v3.9.2 (2025-08-07)

  1. `A` 新增 API 小程序内容同步至图文 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.shareToOfficialAccount.html>)
  2. `U` 更新 组件 root-portal 支持 externalClass [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html>)
  3. `U` 更新 组件 skyline 支持 functional-page-navigator 跳转插件功能页 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html>)
  4. `U` 更新 API 小游戏 getGameClubData 新增 type 11 [详情](<https://developers.weixin.qq.com/minigame/dev/api/open-api/game-club/wx.getGameClubData.html>)
  5. `U` 更新 API 小游戏 Camera 新增 setZoom 方法 [详情](<https://developers.weixin.qq.com/minigame/dev/api/media/camera/Camera.setZoom.html>)
  6. `F` 修复 框架 鸿蒙 disableScroll 不生效 [详情](<https://developers.weixin.qq.com/community/develop/doc/00086844e3c9f08389b3f33ef60800>)
  7. `F` 修复 框架 鸿蒙 legacy canvas 插件内不生效
  8. `F` 修复 组件 selection 某些情况下没有触发 selectionchange

## v3.9.1 (2025-07-29)

  1. `U` 更新 框架 安卓 websocket 网络组件升级
  2. `U` 更新 框架 【微信小店】商品卡片支持skyline [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html>)
  3. `U` 更新 框架 skyline vConsole wechat 面板功能补全
  4. `U` 更新 组件 image 新增 forceHttps 属性，自动将 http 链接替换为 https [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html>)
  5. `U` 更新 API 小程序分享图片新增发表到公众号
  6. `U` 更新 API 云托管支持 SSE / Chunked
  7. `U` 更新 API visionkit 增加瞳孔周围点信息返回 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectFace.html>)
  8. `F` 修复 框架 [worker] wkworker 下 postMessage 报错
  9. `F` 修复 组件 picker-view 增强无障碍支持
  10. `F` 修复 API getGroupCloudStorage 在聊天工具模式下返回“当前小程序不是从群分享卡片打开”的 bug

## v3.9.0 (2025-07-17)

  1. `U` 更新 框架 小店优惠券组件放开《社交分享券》 限制
  2. `U` 更新 框架 MapContext.MoveToLocation 当开发者传入经纬度时无需授权 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.moveToLocation.html>)
  3. `U` 更新 框架 iOS 网络组件升级
  4. `F` 修复 组件 鸿蒙 video 调用 playbackRate 不生效
  5. `F` 修复 API onPageNotFound 事件中缺少 isEntryPage 字段

## v3.8.12 (2025-07-03)

  1. `A` 新增 组件 小游戏支持打开礼物蓝包组件能力 [详情](<https://developers.weixin.qq.com/minigame/dev/api/open-api/store-gift/StoreGift.html>)
  2. `U` 更新 框架 小程序分享图片接口优化
  3. `F` 修复 框架 修复 wxml 调试填写 rpx 单位
  4. `F` 修复 框架 skyline rich-text web-static 模式下 br 多了一个换行

## v3.8.11 (2025-06-24)

  1. `U` 更新 框架 小店优惠券组件和接口支持【机构券】推客染色 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/store-coupon.html>)
  2. `U` 更新 组件 swiper 新增滑动方向限制属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>)
  3. `U` 更新 API 插件允许调用 wx.checkDeviceSupportHevc [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.checkDeviceSupportHevc.html>)
  4. `U` 更新 API 优化 getSystemInfoSync 接口性能
  5. `F` 修复 框架 修复部分 glass-easel webview 问题

## v3.8.10 (2025-06-17)

  1. `A` 新增 组件 微信小店打开礼物蓝包组件能力 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/store-gift.html>)
  2. `U` 更新 框架 小游戏 PC 端键鼠功能优化
  3. `U` 更新 框架 request/downloadFile/uploadFile 的 res.profile 增加开发者调用时间戳、排队时间戳、出队时间戳
  4. `U` 更新 框架 开启网络代理导致 httpdns 失效时，在 exception 返回失效原因
  5. `U` 更新 组件 开发版/体验版下 image 未指定协议时缺省改成 https
  6. `U` 更新 组件 优化 video 组件创建性能
  7. `F` 修复 组件 skyline 下 channel-video 封面展示问题
  8. `F` 修复 组件 web-view 可能不触发 bind:load 事件

## v3.8.9 (2025-06-10)

  1. `U` 更新 框架 request profile 里增加 httpdns 耗时 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  2. `U` 更新 框架 httpdns 支持设置超时时间 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  3. `U` 更新 框架 微信小店商品卡片标签样式优化
  4. `U` 更新 框架 插件允许调用 wx.hideKeyboard [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.hideKeyboard.html>)
  5. `F` 修复 框架 特定情况下鸿蒙跳转插件页面后可能无法返回
  6. `F` 修复 框架 input aria-placeholder 不生效
  7. `F` 修复 框架 IOS 下 pageReRender 导致 video 多次 update 问题
  8. `F` 修复 框架 skyline 下 tabBar 有概率在 reLaunch 后样式错误
  9. `F` 修复 框架 skyline rich-text 安卓端渲染不全
  10. `F` 修复 组件 textarea 支持设置 hold-keyboard 的同时使用 focus 控制键盘弹出和收起

## v3.8.8 (2025-06-03)

  1. `A` 新增 API onWindowStateChange 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowStateChange.html>)
  2. `U` 更新 组件 cover-view 支持 scroll-x [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html>)
  3. `U` 更新 API 小游戏 getGroupCloudStorage 支持 groupid 查询 [详情](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupCloudStorage.html>)
  4. `F` 修复 框架 visionKit 绘制频率过高

## v3.8.7 (2025-05-27)

  1. `U` 更新 框架 handleWebviewPreload idle 改为 requestIdleCallback 并且延迟到首屏后
  2. `U` 更新 组件 image 组件在开发版和体验版不支持加载 HTTP 协议的图片
  3. `F` 修复 框架 小游戏高性能+模式 texImage2d 、texSubImage2d 渲染异常问题
  4. `F` 修复 框架 真机调试2.0 network request 请求无效
  5. `F` 修复 框架 input blur 多触发了一次 input
  6. `F` 修复 框架 offscreenCanvas 字体加载不一致
  7. `F` 修复 框架 wxss 调试使用 :root 报错

## v3.8.6 (2025-05-20)

  1. `U` 更新 组件 小游戏 CPS 推荐组件 [详情](<https://developers.weixin.qq.com/minigame/introduction/commercialization/cps-api>)
  2. `U` 更新 API Editor.insertCustomBlock 支持 nowrap [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertCustomBlock.html>)
  3. `F` 修复 框架 skyline rich-text web-static 模式 iOS 端渲染问题
  4. `F` 修复 组件 Editor 聚焦时点击编辑区，键盘反复落下弹起

## v3.8.5 (2025-05-13)

  1. `A` 新增 API 微信小店优惠券领券 api [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/store/wx.openStoreCouponDetail.html>)
  2. `U` 更新 框架 路由 PerformanceEntry 增加代码包下载情况数据
  3. `U` 更新 框架 wx.getSystemSetting & wx.getAppAuthorizeSetting 性能优化
  4. `F` 修复 框架 小游戏 showShareImageMenu 在平板设备显示异常

## v3.8.4 (2025-05-07)

  1. `U` 更新 框架 skyline 真机调试支持 wxss 编辑
  2. `U` 更新 组件 skyline 支持旧版 canvas & xr-frame
  3. `F` 修复 框架 优惠券组件 bug 修复

## v3.8.3 (2025-04-23)

  1. `A` 新增 组件 微信小店优惠券组件能力 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/store-coupon.html>)
  2. `F` 修复 组件 swiper 内存泄漏

## v3.8.2 (2025-04-15)

  1. `A` 新增 框架 小程序图片分享朋友圈 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareImageMenu.html>)
  2. `U` 更新 框架 升级内置 core-js 版本
  3. `F` 修复 框架 wxml 调试在 wx:for 内显示问题
  4. `F` 修复 框架 skyline picker-view onChange 值非法
  5. `F` 修复 组件 iOS 返回手势与 swiper 冲突
  6. `F` 修复 组件 swiper animation finish current 参数延迟

## v3.8.1 (2025-04-02)

  1. `U` 更新 框架 小游戏高性能+模式重构渲染纹理处理异常
  2. `U` 更新 框架 云开发拓展能力支持 FunctionTool 工具调用 [详情](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/guide/extensions/extend/ai>)
  3. `U` 更新 框架 小程序支持鼠标右键点击事件 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/view/pointer>)
  4. `U` 更新 框架 video 组件右下角增加视频时长
  5. `U` 更新 框架 优化 getDeviceInfo、getNetworkType、getWindowInfo、getAppBaseInfo 接口性能
  6. `F` 修复 框架 真机调试 network 面板不更新
  7. `F` 修复 框架 自定义组件占位替换应该包裹在独立的同步流中处理
  8. `F` 修复 框架 skyline rich-text web-static 表现异常
  9. `F` 修复 框架 reLaunch / autoReLaunch 时在 onBeforeAppRoute 中调用 getEnterOptionsSync 的结果可能有误
  10. `F` 修复 组件 textarea 行高设置后导致光标与 placeholder 不对齐

## v3.8.0 (2025-03-25)

  1. `A` 新增 组件 小游戏评分推荐组件 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/game-evaluate>)
  2. `A` 新增 API 支持路由重写 wx.rewriteRoute [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/app-service/route-rewrite>)
  3. `U` 更新 框架 skyline 支持 @keyframes 规则可选择全局共享或按 styleIsolation 隔离 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/runtime/skyline/wxss>)
  4. `U` 更新 框架 小程序启动性能优化
  5. `F` 修复 组件 video 小窗播放后会自动退出 [详情](<https://developers.weixin.qq.com/community/develop/doc/00020e77a847f835d00386f166b000>)

## v3.7.12 (2025-03-18)

  1. `A` 新增 API 小游戏新增返回通知组件+胶囊安全区域的接口 [详情](<https://developers.weixin.qq.com/minigame/dev/api/ui/menu/wx.getOfficialComponentsInfo.html>)
  2. `U` 更新 组件 skyline `list-builder` 组件新增 `initialChildCount` 属性，用于优化首次渲染速度 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html>)
  3. `F` 修复 框架 样式调试解析报错
  4. `F` 修复 框架 真机调试录制防止循环引用报错
  5. `F` 修复 框架 异步分包组件批量下载分包但部分成功时，失败分包所属组件小概率样式错乱
  6. `F` 修复 组件 修复 loadFontFace 没有引号报错 [详情](<https://developers.weixin.qq.com/community/develop/doc/0008a6f3c6cd603c0c0387f8d6b000>)
  7. `F` 修复 组件 swiper 在当前展示子项变化后，设置与上次设置的 current 相同的值不生效的问题

## v3.7.11 (2025-03-07)

  1. `U` 更新 框架 CacheManager request 事件提供更新缓存模式 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.on.html>)
  2. `U` 更新 框架 云开发拓展能力支持调整超时时间和取消请求
  3. `U` 更新 框架 map 组件 callout 支持 shadow [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html#marker-%E4%B8%8A%E7%9A%84%E6%B0%94%E6%B3%A1-callout>)
  4. `U` 更新 组件 editor 支持插入自定义块 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/editor-portal.html>)
  5. `U` 更新 组件 skyline sticky-header 增加属性 allow-overlapping [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html>)
  6. `U` 更新 组件 skyline open-data 组件支持 groupName [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html>)
  7. `U` 更新 API 插件支持 wx.openChannelsEvent [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsEvent.html>)
  8. `F` 修复 框架 Skyline 下 page-container 不同页面只能有一个实例 [详情](<https://developers.weixin.qq.com/community/develop/doc/00028462c18028b53f52bda9b61000>)
  9. `F` 修复 组件 修复安卓插入 web-view 后 page-meta 不更新

## v3.7.10 (2025-02-25)

  1. `A` 新增 API 小程序支持打开公众号 wx.OpenOfficialAccountProfile [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openOfficialAccountProfile.html>)
  2. `F` 修复 框架 glass-easel 下，插件在分包中时插件样式有可能不能正确加载
  3. `F` 修复 框架 修复 wxml 调试可能丢失节点
  4. `F` 修复 组件 开发者工具 wx.createVideo 无法播放

## v3.7.9 (2025-02-18)

  1. `A` 新增 API 小程序翻译事件监听 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.onUserTriggerTranslation.html>)
  2. `A` 新增 API 支持加载微信内置字体 wx.loadBuiltInFontFace [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadBuiltInFontFace.html>)
  3. `U` 更新 框架 检测到组件发生递归更新时将给出控制台警告
  4. `F` 修复 框架 小游戏高性能+ image.onload 回调修复
  5. `F` 修复 框架 音频浮窗事件参数
  6. `F` 修复 框架 真机调试性能工具录制问题
  7. `F` 修复 框架 skyline EventTarget 报错
  8. `F` 修复 框架 skyline sticky-header 组件报错
  9. `F` 修复 框架 未及时销毁的占位组件可能导致内存泄露
  10. `F` 修复 框架 skyline button 组件 box-sizing 默认值未对齐 webview

## v3.7.8 (2025-02-11)

  1. `A` 新增 框架 支持小程序封面广告展示状态获取 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/release/wx.getShowSplashAdStatus.html>)
  2. `F` 修复 框架 小游戏高性能+ canvas.toTempFilePath 调用报错
  3. `F` 修复 框架 云开发拓展能力部分场景下流无法正常结束的问题
  4. `F` 修复 框架 组件 this.animate 中 right 等样式属性失效

## v3.7.7 (2025-01-16)

  1. `A` 新增 组件 skyline rich-text 支持 mode=web-static 模式 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html#Skyline-%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7>)
  2. `F` 修复 框架 PC 小程序页面加载阶段调用 wx.hideHomeButton 隐藏不生效 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideHomeButton.html>)
  3. `F` 修复 框架 通过 `wx.getAccountInfoSync` 获取的 `latest` 插件的实际版本号有概率错误
  4. `F` 修复 组件 地址和日期类型的 picker 调用失败时派发 error 事件
  5. `F` 修复 组件 rich-text text 节点 children 不生效
  6. `F` 修复 组件 skyline swiper-item item-id 属性报错

## v3.7.6 (2025-01-07)

  1. `U` 更新 API 添加日历事件支持传递跳转 path [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/calendar/wx.addPhoneCalendar.html>)
  2. `F` 修复 框架 Map 组件 callouttap 兼容 PC
  3. `F` 修复 框架 skyline video 样式和 swiper 冲突问题

## v3.7.5 (2024-12-31)

  1. `U` 更新 框架 性能诊断工具增加启动时序图 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/performance/perf_diagnostic_tool>)
  2. `U` 更新 框架 skyline 内置组件性能优化
  3. `U` 更新 组件 安卓系统 video 支持3倍速和4倍速播放 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.playbackRate.html>)
  4. `U` 更新 API HarmonyOS 支持 VideoDecoder [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.html>)

## v3.7.4 (2024-12-24)

  1. `U` 更新 框架 小游戏安卓真机调试支持 Tracing 和网络
  2. `U` 更新 框架 小游戏 wx.getGameLogManager 修改API设计 [详情](<https://developers.weixin.qq.com/minigame/dev/api/data-analysis/GameLogManager.html>)
  3. `U` 更新 框架 Android 上提高 request、downloadFile、uploadFile 并行请求数量上限
  4. `U` 更新 框架 渲染缓存新增 capture 模式 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/view/initial-rendering-cache>)
  5. `U` 更新 框架 鸿蒙支持 worker
  6. `U` 更新 框架 小游戏支持KHR_parallel_shader_compile 拓展
  7. `F` 修复 框架 iOS request enableChunked onChunkReceived 回调丢失 [详情](<https://developers.weixin.qq.com/community/develop/doc/0006ac0ddf4c38a66a720b5ad66400>)

## v3.7.3 (2024-12-17)

  1. `U` 更新 框架 wx.openStoreOrderDetail 文档修复错误码枚举信息

  2. `U` 更新 框架 工具 caniuse 额外判断工具模拟的平台信息

  3. `F` 修复 框架 button 组件 crash

  4. `F` 修复 框架 skyline input 无法更新 value

  5. `F` 修复 框架 工具提示 Cannot read property of 'gdc' of undefined

  6. `F` 修复 框架 wx.showActionSheet 在 PC 端点取消后不触发fail 回调 [详情](<https://developers.weixin.qq.com/community/develop/doc/0004c245a9422067c772a748161400?_at=1734406837654>)

  7. `F` 修复 框架 修复 WXML 调试面板闪烁问题

  8. `F` 修复 框架 skyline reLaunch 时自定义 tabbar 样式问题

  9. `F` 修复 组件 修复 textarea linechange 事件拿不到 lineCount

  10. `F` 修复 组件 修复鸿蒙 Legacy Canvas DPR 错误

## v3.7.2 (2024-12-03)

  1. `U` 更新 框架 skyline rendererOptions 支持 enableScrollViewAutoSize [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app#rendererOptions>)
  2. `U` 更新 框架 开发工具真机调试 2.0 支持 BigInt
  3. `F` 修复 框架 云开发数据库实时数据推送部分场景下会返回 -402022 的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/000822c9380e30cb842d1c56f51c00>)
  4. `F` 修复 框架 修复 exparser external class 没有应用 extraStyleScope

## v3.7.1 (2024-11-26)

  1. `A` 新增 API 支持小程序跳转小店订单 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/store/wx.openStoreOrderDetail.html>)
  2. `U` 更新 框架 微信小店支持商品卡片样式自定义能力 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html>)
  3. `U` 更新 框架 PC 小程序 chooseLocation 坐标系修正
  4. `U` 更新 框架 skyline 小程序支持全局翻译
  5. `U` 更新 框架 硬件 VoIP 新增 join、updateConfig 等 jsapi
  6. `F` 修复 组件 修复鸿蒙 input 偶现大小错乱
  7. `F` 修复 API wx.canvasToTempFilePath 在 PC 端无返回的问题 [详情](<https://developers.weixin.qq.com/community/minihome/doc/0000caeac2c5682085528691c61800>)

## v3.7.0 (2024-11-19)

  1. `A` 新增 框架 基础库 HarmonyOS 适配 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/ability/ohos>)
  2. `A` 新增 框架 小程序性能检测工具 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/performance/perf_diagnostic_tool>)
  3. `U` 更新 框架 安卓 request 、downloadFile 、uploadFile 对开启 enableQuic 的尝试切到 h3 协议
  4. `U` 更新 框架 PC 小游戏全屏时隐藏导航栏
  5. `U` 更新 框架 移除 cloud-sdk 引入的 lodash
  6. `U` 更新 API 单页模式支持 wx.getSystemSetting / wx.getAppAuthorizeSetting / wx.getDeviceInfo / wx.getWindowInfo / wx.getAppBaseInfo [详情](<https://developers.weixin.qq.com/community/develop/doc/000c26c51d0c8875a9028266361000>)
  7. `F` 修复 框架 安卓真机调试下开发工具中 network 面板缺失网络数据 [详情](<https://developers.weixin.qq.com/community/develop/doc/00088a5a020708c43e52e6ac56bc00>)
  8. `F` 修复 组件 修复 skyline label 不会作用到 button

## v3.6.6 (2024-11-12)

  1. `U` 更新 框架 调整 input 事件触发
  2. `U` 更新 框架 优化 skyline wxml 调试问题
  3. `U` 更新 框架 小游戏 iOS 高性能+模式也支持 ScreenCanvas 版的 sharedCanvas [详情](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getSharedCanvas.html>)
  4. `U` 更新 组件 scroll-view 返回触顶速度及设置初速度 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  5. `F` 修复 框架 小游戏通知组件修复轮询逻辑 bug
  6. `F` 修复 框架 skyline android video 组件内存泄漏
  7. `F` 修复 框架 swiper 在 hidden 时可能无法响应
  8. `F` 修复 组件 ios skyline rich-text 组件 mode=web 最高高度限制问题
  9. `F` 修复 组件 skyline video 组件 ios 系统没有触发 fullscreenchange 事件
  10. `F` 修复 组件 skyline webview rich-text 出现滚动条
  11. `F` 修复 组件 skyline 下 channel-video 封面图不能适配 [详情](<https://developers.weixin.qq.com/community/develop/doc/0008c6499604688e0e2189b5761800>)
  12. `F` 修复 组件 Windows 端小程序 Canvas 组件不响应 wx.loadFontFace [详情](<https://developers.weixin.qq.com/community/develop/doc/000ca4c3f549b0d3e7520eeb661800>)

## v3.6.5 (2024-10-29)

  1. `U` 更新 框架 使用 cloud-sdk 引入的 lodash 时将抛出警告，从 v3.7.0 开始移除
  2. `F` 修复 框架 PC 小程序 fs.open 获得的 fd 可能失效的问题 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html>)

## v3.6.4 (2024-10-23)

  1. `A` 新增 组件 selection 组件，用于获取选区状态、自定义选区菜单 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectionContext.html>)
  2. `U` 更新 框架 PC 小游戏支持游戏手柄接口 [详情](<https://developers.weixin.qq.com/minigame/dev/api/device/gamepad/wx.getGamepads.html>)
  3. `F` 修复 框架 完善 Skyline WXS 特性，修复若干问题
  4. `F` 修复 框架 webview 非 tab 页不会触发自定义 tabbar detached 问题
  5. `F` 修复 框架 scroll-view 横向滚动自动高度不正确
  6. `F` 修复 框架 vConsole 按钮响应问题
  7. `F` 修复 组件 修复 swiper 在 hidden 时可能造成无法响应
  8. `F` 修复 组件 button hoverClass 无法生效问题

## v3.6.3 (2024-10-15)

  1. `U` 更新 框架 visionKit 提供平面识别V2的强制开启的模式 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/wx.createVKSession.html>)
  2. `U` 更新 框架 Skyline 支持在 JS 中通过 options 配置 styleIsolation
  3. `F` 修复 框架 showShareImageMenu 横屏显示问题
  4. `F` 修复 框架 intersectionObserver 内存泄漏
  5. `F` 修复 框架 小游戏修复高性能+模式渲染异常问题
  6. `F` 修复 框架 安卓无障碍点击 [详情](<https://developers.weixin.qq.com/community/develop/doc/0006c82b6b806088ec1265ec062800>)
  7. `F` 修复 组件 防止 scroll-view 偶现无法滚动
  8. `F` 修复 组件 swiper 在页面 hide 时停止 autoplay
  9. `F` 修复 API Skyline loadFontFace 第二次开始不生效的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/000828132d0ee00f20322edfb6bc00>)

## v3.6.2 (2024-10-09)

  1. `U` 更新 组件 sticky-header支持吸顶与否的状态回调 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html>)
  2. `U` 更新 组件 scroll view 滚动位置保持 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  3. `U` 更新 组件 nested-scroll-body 支持 offset-top 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-body.html>)
  4. `F` 修复 框架 工具录制回放真机回放失败
  5. `F` 修复 框架 地图闪烁

## v3.6.1 (2024-09-25)

  1. `U` 更新 框架 PC 小程序支持 wx.onKeyDown、wx. onKeyUp 事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.onKeyUp.html>)
  2. `U` 更新 API skyline 渲染模式下 ScrollViewContext 支持 scrollTo [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.scrollTo.html>)
  3. `F` 修复 框架 XRFrame 触摸事件修复 [详情](<https://developers.weixin.qq.com/community/develop/doc/0008ae8f744e8046fb12a764f66000>)

## v3.6.0 (2024-09-20)

  1. `A` 新增 API wx.checkDeviceSupportHevc 查询设备是否支持 H.265 编码 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.checkDeviceSupportHevc.html>)
  2. `U` 更新 组件 微信小店卡片组件样式升级 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html>)
  3. `U` 更新 组件 skyline 渲染模式下 rich-text 组件支持 mode = web 选项完全对齐 webview 渲染 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html>)
  4. `U` 更新 组件 video 后台音频播放模式优化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestBackgroundPlayback.html>)
  5. `U` 更新 组件 liveplayer 后台音频播放模式优化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.requestBackgroundPlayback.html>)
  6. `U` 更新 组件 video 样式更新
  7. `U` 更新 组件 webview 渲染模式下 scroll-view 组件支持 scroll-into-view-offset [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html#%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7>)
  8. `U` 更新 组件 list-view / grid-builder / list-builder 支持 background-color [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/list-view.html>)
  9. `F` 修复 框架 skyline 节点超出页面没有截断
  10. `F` 修复 组件 skyline 渲染模式下 video 组件配置 show-screen-lock-button、title 失效 [详情](<https://developers.weixin.qq.com/community/develop/doc/0004668ac6c82887f202efebb6b400?highLine=show-screen-lock-button>)

## v3.5.8 (2024-09-13)

  1. `U` 更新 框架 小游戏 shareAppMessage，onShareTimeline，onShareAppMessage 接口改动支持只传入 imageUrlId [详情](<https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePath.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9>)
  2. `U` 更新 框架 支持打印 BigInt
  3. `U` 更新 框架 glass-easel 组件框架支持 WXS 事件响应 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/custom-component/glass-easel/migration>)
  4. `F` 修复 框架 skyline autoRelaunch 后自定义 tabbar 不显示
  5. `F` 修复 框架 列表 diff 实现错误导致节点移除时产生内存泄漏
  6. `F` 修复 框架 小游戏高性能+模式可能出现的文字渲染不齐问题

## v3.5.7 (2024-09-10)

  1. `U` 更新 框架 skyline 下 vConsole 中可以获取 getter 的具体值
  2. `U` 更新 框架 intersectionObserver 增加 native 模式 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html>)
  3. `U` 更新 API onHide 暴露触发 hide 原因
  4. `F` 修复 框架 skyline 下双指触摸导致 longTap 异常问题
  5. `F` 修复 框架 skyline swiper bindanimationfinish 无法获取 current

## v3.5.6 (2024-08-27)

  1. `U` 更新 框架 小游戏支持 navigateBackMiniProgram [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateBackMiniProgram.html>)
  2. `U` 更新 框架 WebAudioContext.createPeriodicWave 缺少报错信息 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/WebAudioContext.createPeriodicWave.html>)
  3. `F` 修复 框架 真机调试修改 style
  4. `F` 修复 框架 安卓小游戏从下拉任务栏打开时需要清空 query
  5. `F` 修复 框架 PC 小程序 input disabled 的情况下，无法触发 tap 事件的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a28a7768b60fd8f810176961400>)
  6. `F` 修复 框架 GL 地图初始化设置 boundary 导致无法拖拽
  7. `F` 修复 组件 scroll-view 修复过多 reflow

## v3.5.5 (2024-08-20)

  1. `A` 新增 框架 一组路由事件监听 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/app-service/route-event-listener>)
  2. `U` 更新 API 小程序插件支持录屏监听等相关接口 [wx.onScreenRecordingStateChanged](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onScreenRecordingStateChanged.html>) /[wx.offScreenRecordingStateChanged](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.offScreenRecordingStateChanged.html>) /[wx.getScreenRecordingState](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenRecordingState.html>)
  3. `F` 修复 框架 部分异步组件相关问题
  4. `F` 修复 框架 自定义 TabBar 内存泄漏

## v3.5.4 (2024-08-12)

  1. `A` 新增 框架 Android 小程序支持全局翻译
  2. `U` 更新 框架 小游戏在开发版和体验版提供高精度时间 [详情](<https://developers.weixin.qq.com/minigame/dev/api/base/performance/Performance.now.html>)
  3. `F` 修复 框架 moveToLocation 授权弹窗上没有隐私协议勾选
  4. `F` 修复 组件 movable-view 嵌套 ad 组件无法拖动

## v3.5.3 (2024-07-30)

  1. `A` 新增 API 小游戏新增 wx.offShareMessageToFriend [详情](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.offShareMessageToFriend.html>)
  2. `U` 更新 框架 小游戏真正用到开放数据域再禁用主屏 readPixels
  3. `U` 更新 框架 安卓 downloadFile 、uploadFile 接口性能优化
  4. `U` 更新 框架 skyline swiper 支持 snap-to-edge 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html#%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7>)
  5. `U` 更新 框架 glass-easel 支持 wx.createIntersectionObserver 和 wx.createMediaQueryObserver
  6. `U` 更新 API getAppAuthorizeSetting 增加安卓蓝牙的设置信息 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppAuthorizeSetting.html>)
  7. `U` 更新 API wx.getNetworkType 新增弱网判断 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html>)
  8. `F` 修复 框架 罗盘重复关闭会报错
  9. `F` 修复 框架 小游戏 LoadSubpackageTask.progressUpdate 没有回调
  10. `F` 修复 API 区分 onUserCaptureScreen 方法在插件和小程序内的行为

## v3.5.2 (2024-07-23)

  1. `U` 更新 框架 小游戏真正用到开放数据域再禁用主屏 toTempFilePath、toDataURL、getImageData
  2. `F` 修复 框架 修复部分异步组件相关问题
  3. `F` 修复 组件 修复 skyline 下 label 无法触发 input [详情](<https://developers.weixin.qq.com/community/minihome/doc/000aa4dc7a8ba8a926c1bfb676e400>)
  4. `F` 修复 组件 修复 textarea autoHeight 计算
  5. `F` 修复 组件 修复 rich-text 大写 tagName [详情](<https://developers.weixin.qq.com/community/develop/doc/000c0c102982f84c2ed16846a61400>)

## v3.5.1 (2024-07-16)

  1. `U` 更新 组件 skyline swiper 支持 next-margin 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>)

  2. `F` 修复 框架 iOS wx.request 开启 forceCellularNetwork 时，无蜂窝网络下 fail 回调漏了错误码

  3. `F` 修复 组件 修复安卓同层 input 展示错位 [详情](<https://developers.weixin.qq.com/community/develop/doc/00042424d14978a76fa0b4dac61c00>)

  4. `F` 修复 组件 swiper 切换时出现白屏

## v3.5.0 (2024-07-09)

  1. `A` 新增 框架 live-pusher 支持低分辨率 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)
  2. `A` 新增 API 监听电池信息变化支持安卓 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.onBatteryInfoChange.html>)
  3. `U` 更新 框架 小程序胶囊增加摄像头提示
  4. `F` 修复 框架 开发工具小游戏 canvas webgl 截屏当前屏幕内容为空

## v3.4.10 (2024-07-03)

  1. `U` 更新 框架 插件页面支持 wx.openChannelsUserProfile 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsUserProfile.html>)
  2. `U` 更新 组件 rich-text 兼容非法 space [详情](<https://developers.weixin.qq.com/community/develop/doc/000c04a98280108ae8b123c0166800>)
  3. `U` 更新 API request 开启 enableHttpDNS 时 success 回调增加 useHttpDNS 字段 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  4. `F` 修复 框架 小游戏半屏分享query丢失
  5. `F` 修复 Skyline 渲染引擎下 `definitionFilter` 特性对使用 Page 注册的页面不生效的问题
  6. `F` 修复 Skyline 渲染引擎下自定义组件 setData 的回调固定以组件实例为 `this` 触发

## v3.4.9 (2024-06-26)

  1. `U` 更新 框架 小游戏 preDownloadSubpackage 支持普通分包 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/subpackage/wx.preDownloadSubpackage.html>)
  2. `U` 更新 框架 修复 iOS longtap 跳转 [详情](<https://developers.weixin.qq.com/community/develop/doc/000ca835e40bf0b1c0a12a59361800>)
  3. `U` 更新 组件 修复工具 canvasToTempFile jpg 格式不正确
  4. `F` 修复 组件 skyline rich-text 未正确处理 classname apply-shared

## v3.4.8 (2024-06-19)

  1. `A` 新增 API 新增小程序支持跳转公众号文章接口 wx.openOfficialAccountArticle [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openOfficialAccountArticle.html>)
  2. `U` 更新 框架 优化小游戏部分接口，保证高频调用性能
  3. `U` 更新 框架 skyline grid-view 支持设置背景色 [详情](<../runtime/skyline/wxss#:~:text=%E5%B1%9E%E6%80%A7%E4%B8%BA%E5%87%86-,background%2Dcolor,-%3Ccolor%3E>)
  4. `U` 更新 框架 PC 小程序支持 wx.chooseAddress [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html>)
  5. `U` 更新 API 安卓 BackgroundAudio 支持设置跳转路径 referrerPath 、音频类型 audioType [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html>)
  6. `U` 更新 API wx.getDeviceBenchmarkInfo api 性能优化
  7. `F` 修复 框架 修复 video 重复事件
  8. `F` 修复 框架 BufferSourceNode.stop 没触发 onended 回调 [详情](<https://developers.weixin.qq.com/community/develop/doc/0006040cfe05803c06a19c2f061c00>)
  9. `F` 修复 框架 工具地图 movealong 自动旋转不生效
  10. `F` 修复 框架 工具中非按需注入情况下加载分包代码出现 register multiple Pages 错误
  11. `F` 修复 组件 修复 live-pusher 自定义采集 crash
  12. `F` 修复 组件 skyline input value 双向绑定不生效
  13. `F` 修复 组件 skyline official-account 数据解析错误
  14. `F` 修复 API videoContext 同时调用 play 和 pause 执行顺序错误

## v3.4.7 (2024-06-07)

  1. `U` 更新 框架 开发工具 createInnerAudioContext 全切 useWebAudioImplement 实现
  2. `U` 更新 框架 useWebAudioImplement 支持 base64 的音频 url

## v3.4.6 (2024-05-29)

  1. `U` 更新 框架 修复 iOS Canvas 黑色背景

  2. `U` 更新 框架 skyline scroll-view 支持默认 type [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)

  3. `F` 修复 框架 request 接口 useHighPerformanceMode 模式下 onHeadersReceived 回调参数漏了 statusCode

  4. `F` 修复 组件 修复 skyline 地图事件额外参数

  5. `F` 修复 API request 接口 useHighPerformanceMode 模式下 开启重定向拦截没触发 onHeadersReceived 回调

  6. `F` 修复 API 小程序中同时使用 useHighPerformanceMode 模式的 request 和非 useHighPerformanceMode 模式的 request 时会出错

## v3.4.5 (2024-05-23)

  1. `A` 新增 API 支持获取设备性能等级及机型档位信息 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getDeviceBenchmarkInfo.html>)

  2. `U` 更新 框架 半屏小程序video组件全屏退出后需要静音

  3. `U` 更新 框架 支持 Chaining API init 写法绑定 worklet 回调 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/runtime/skyline/gesture>)

  4. `F` 修复 框架 iOS cover-image load 事件导致页面卡顿

  5. `F` 修复 框架 Skyline 下地图 regionchange 事件不触发

  6. `F` 修复 框架 Skyline 下页面跳转后 page-container 拦截能力失效

  7. `F` 修复 框架 修复开发者不调用 InnerAudioContext.destroy() 时产生的内存泄漏

## v3.4.4 (2024-05-11)

  1. `A` 新增 API 新增支持打开 WeChat Pay HK 付款码接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.openHKOfflinePayView.html>)
  2. `U` 更新 框架 skyline 支持 official-account 组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html>)
  3. `U` 更新 框架 skyline swiper bindanimationfinish 返回数据与 webview 不一致
  4. `U` 更新 框架 visionKit 提供相机的原始 Pose transform [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKCamera.html>)
  5. `U` 更新 框架 visionKit 提供获取 jpgBuffer 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getCameraJpgBuffer.html>)
  6. `U` 更新 框架 PC 小程序支持复制短链
  7. `U` 更新 组件 优化小尺寸 channel-video 展示逻辑
  8. `F` 修复 框架 异步分包下载失败问题
  9. `F` 修复 组件 map 组件 scale 传 null 会使视野变大

## v3.4.3 (2024-04-24)

  1. `A` 新增 API 支持监听菜单按钮（右上角胶囊按钮）布局位置信息变化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.onMenuButtonBoundingClientRectWeightChange.html>)
  2. `U` 更新 框架 requestPayment , requestOrderPayment , showModal , showActionSheet 的失败回调不再有点击态
  3. `U` 更新 框架 地图 marker 碰撞机制 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html#marker-%E7%A2%B0%E6%92%9E%E5%85%B3%E7%B3%BB>)
  4. `U` 更新 框架 createGameClubButton 新增对 type text 的支持
  5. `U` 更新 组件 地图 scale 越界多端不统一
  6. `U` 更新 API 支持获取省电模式信息 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.onBatteryInfoChange.html>)
  7. `F` 修复 框架 【小游戏】iOS14高性能+模式点击卡顿问题修复
  8. `F` 修复 框架 【小游戏】高性能+模式部分游戏出现的微信闪退问题
  9. `F` 修复 框架 observers 监听路径时，遇到 null 值会报错
  10. `F` 修复 框架 webview 无法获取自定义路由 CustomRouteContext

## v3.4.2 (2024-04-11)

  1. `U` 更新 API getFileInfo 接口文件摘要算法新增支持 sha256 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.getFileInfo.html>)
  2. `U` 更新 API 有授权弹窗的隐私接口（例如 wx.getLocation），将不会再弹官方隐私弹窗，而是在授权弹窗上增加“隐私勾选”；无授权弹窗的隐私接口（如 wx.getClipboardData），将继续保留原来的官方隐私弹窗 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/user-privacy/PrivacyAuthorize#%E5%85%AD%E3%80%81%E5%AE%98%E6%96%B9%E9%9A%90%E7%A7%81%E5%BC%B9%E7%AA%97%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E>)
  3. `F` 修复 框架 修复 URI malformed
  4. `F` 修复 框架 setData 导致 draggable-sheet snapSizes 频繁触发
  5. `F` 修复 API MapContext 重复调用接口

## v3.4.1 (2024-04-02)

  1. `U` 更新 框架 getSystemInfo 接口不再维护，建议开发者使用 getSystemSetting / getAppAuthorizeSetting / getDeviceInfo / getWindowInfo / getAppBaseInfo [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>)
  2. `U` 更新 框架 xr-frame 点击事件迁移
  3. `U` 更新 框架 wx.downloadFile、wx.uploadFile 接口新增 useHighPerformanceMode 参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html>)
  4. `U` 更新 框架 授权弹窗上耦合隐私勾选 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/user-privacy/PrivacyAuthorize#%E5%85%AD%E3%80%81%E5%AE%98%E6%96%B9%E9%9A%90%E7%A7%81%E5%BC%B9%E7%AA%97%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E>)
  5. `U` 更新 组件 skyline canvas 触摸事件支持 x，y [详情](<https://developers.weixin.qq.com/community/develop/doc/00068692e542f801935138cdb6b800>)
  6. `U` 更新 API 支持插件代宿主调用订阅消息接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html>)
  7. `U` 更新 API TCP接口 onConnect 和 onMessage 回调参数增加 remoteInfo 和 localInfo [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onConnect.html>)
  8. `F` 修复 组件 修复 canvas 默认滚动
  9. `F` 修复 组件 修复安卓同层 input

## v3.4.0 (2024-03-21)

  1. `A` 新增 框架 Skyline 支持容器转场动画 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html>)
  2. `A` 新增 组件 支持 grid-builder 组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html>)
  3. `U` 更新 框架 页面返回手势封装 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/runtime/skyline/pop-gesture>)
  4. `U` 更新 框架 skyline wxml 支持 真机调试
  5. `U` 更新 API TCP 接口支持 httpdns [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.connect.html>)
  6. `F` 修复 框架 小游戏 iOS 高性能模式 wx.onUnhandledRejection 不生效

## v3.3.5 (2024-03-07)

  1. `U` 更新 框架 skyline picker-view 支持 indicator-style
  2. `U` 更新 框架 skyline input 组件支持 placeholder-style 解析
  3. `U` 更新 框架 小游戏 iOS 高性能模式下 worker 支持 br 压缩的 wasm 文件
  4. `U` 更新 框架 小游戏 iOS 高性能模式调试模式下错误栈还原问题修复
  5. `U` 更新 API showActionSheet、showModal、requestPayment、requestOrderPayement 接口的 fail 与 complete 回调不再触发 tap 事件 [详情](<https://developers.weixin.qq.com/community/develop/doc/000826d9aa8f50988d313c90a65400>)
  6. `F` 修复 框架 PC 端分栏模式下 type=nickname 的 input 昵称填写框不展示 [详情](<https://developers.weixin.qq.com/community/develop/doc/00080a0a5040a8404e2119ddd66400>)
  7. `F` 修复 框架 工具端 xr-frame 基础图形拖动镜头失败
  8. `F` 修复 框架 converRpxToVw 单位转换错误 [详情](<https://developers.weixin.qq.com/community/develop/doc/000aea7197cec85701e0a827066400>)
  9. `F` 修复 框架 skyline switch 默认样式不生效 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a46ac6941907a20e0e118761800>)
  10. `F` 修复 框架 skyline input 内存泄漏
  11. `F` 修复 组件 skyline rich-text 绝对定位节点布局不正确
  12. `F` 修复 组件 修复 map indoorchange 事件
  13. `F` 修复 API 修复小游戏分享海报报错

## v3.3.4 (2024-01-30)

  1. `U` 更新 框架 wx.request profile 中新增加 usingHighPerformanceMode 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html#:~:text=2.10.0-,profile,-Object>)
  2. `F` 修复 组件 PC 和 mac 下 input 的 value 与 placeholder 重叠 [详情](<https://developers.weixin.qq.com/community/minihome/doc/00064ccb130570e496f0938f56b000>)
  3. `F` 修复 组件 scroll-view 的 refresher-background 默认值不生效 [详情](<https://developers.weixin.qq.com/community/develop/doc/000c6cb4a0cbd0e749c0dcba36d800>)

## v3.3.3 (2024-01-19)

  1. `U` 更新 框架 visionKit 平面识别模式同时支持 Marker 识别与深度遮挡
  2. `U` 更新 框架 XR-FRAME 支持3D body、3D hand、3D Face、试鞋能力 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  3. `U` 更新 框架 云托管/微信网关数据管道安全能力优化
  4. `U` 更新 API wx.request 接口新增 useHighPerformanceMode 参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html#%E5%8F%82%E6%95%B0:~:text=%E6%95%B0%E6%8D%AE%E4%B8%BA%20ArrayBuffer-,useHighPerformanceMode,-boolean>)
  5. `U` 更新 API 小游戏平台币支付
  6. `F` 修复 框架 XR-FRAME 文本组件动态更新问题修复
  7. `F` 修复 框架 ScrollViewContext.scrollTo 在 PC 端小程序上不生效 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a22e6db0fc01802e0c190068c00>)
  8. `F` 修复 框架 多个异步分包以一定频率加载时概率出现异步组件替换失败的问题
  9. `F` 修复 框架 云托管/网关 referer 携带版本号兼容真机小写 appversion
  10. `F` 修复 组件 skyline video vslide-gesture 不生效

## v3.3.2 (2024-01-15)

  1. `U` 更新 框架 skyline 支持 wx.loadFontFace 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html>)
  2. `U` 更新 框架 小游戏支持高性能+模式 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-high-performance-plus>)
  3. `U` 更新 组件 skyline 渲染模式支持 live-player 和 live-pusher 组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html>)
  4. `F` 修复 框架 修复 Windows/Mac 端，小程序首页的高度受 tabbar 影响的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/0004080a388340141ae02ccfa61400>)
  5. `F` 修复 组件 skyline rich-text 无法隐藏列表元素前的圆点
  6. `F` 修复 组件 video、live-pusher、live-player 从半屏进入全屏时没有取消静音限制
  7. `F` 修复 组件 skyline textarea autoheight 高度不对
  8. `F` 修复 组件 安卓侧 skyline video 在设置 hidden 为 true 之后不会暂停播放

## v3.3.1 (2024-01-03)

  1. `A` 新增 组件 支持全局跨页面组件 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/runtime/skyline/appbar>)
  2. `U` 更新 框架 PC shareAppMessage 支持 webviewUrl 参数 [详情](<https://developers.weixin.qq.com/community/develop/doc/000ae44d5309d8f839c06250b68c00>)
  3. `U` 更新 框架 batch storage 文档 fix [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchSetStorage.html>)
  4. `F` 修复 框架 PC 端小游戏 wx.createvideo 不展示下载菜单

## v3.3.0 (2023-12-25)

  1. `A` 新增 API 小程序支持 wx.requestMerchantTransfer 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestMerchantTransfer.html>)
  2. `U` 更新 框架 visionKit 支持身份证识别能力 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/visionkit/idcard>)
  3. `U` 更新 框架 worklet 支持 scrollTo [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.scrollViewContext.scrollTo.html>)
  4. `U` 更新 框架 PC 端 wx.showModal 支持 editable 属性 [详情](<https://developers.weixin.qq.com/community/develop/doc/000e049d78814883000ffb83f51800>)
  5. `U` 更新 框架 PC 端 wx.showActionSheet 交互样式优化
  6. `U` 更新 组件 skyline scroll-view 支持列表构造器 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html>)
  7. `U` 更新 组件 skyline video 支持全屏能力
  8. `U` 更新 组件 video/live-player 支持设置小窗初始位置 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>)
  9. `U` 更新 API iOS 下 systemInfo model 适配 iPhone 15 系列机型 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a82ed57c0907ceb4bea2785b409?highLine=%25E6%2596%25B0%25E6%259C%25BA%25E5%259E%258B>)
  10. `U` 更新 API 支持开发者自定义截屏图片打开小程序的 query [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html>)
  11. `U` 更新 API iOS 侧支持 wx.setVisualEffectOnCapture [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setVisualEffectOnCapture.html>)
  12. `F` 修复 框架 修复 PC setClipboardData 时 toast 展示时长的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/0006a8916e0b4832d8b02403e68400>)
  13. `F` 修复 框架 修复 rpx 精度问题 [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app#:~:text=%E7%9B%B8%E5%85%B3%E6%96%87%E6%A1%A3-,convertRpxToVw,-boolean>)
  14. `F` 修复 框架 iOS 半屏聊天框热启动打开小游戏 query 丢失
  15. `F` 修复 框架 开启按需注入时，使用占位组件的插件组件无法触发二次渲染
  16. `F` 修复 组件 skyline textarea 补上 linechange 事件

## v3.2.5 (2023-12-18)

  1. `U` 更新 组件 插件支持使用小程序客服组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html#:~:text=%E6%9C%80%E4%BD%8E%E7%89%88%E6%9C%AC-,contact,-%E6%89%93%E5%BC%80%E5%AE%A2%E6%9C%8D>)
  2. `F` 修复 框架 插件 genericsImplementation 使用到的自定义组件的 usingComponents 无效
  3. `F` 修复 框架 开发者工具下 skyline button 样式与真机不一致
  4. `F` 修复 组件 skyline video 不应拉伸竖屏视频

## v3.2.4 (2023-12-01)

  1. `U` 更新 框架 skyline 支持 component-export
  2. `U` 更新 框架 skyline 增加键盘状态监听 worklet 函数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/Tensors.html>)
  3. `U` 更新 组件 web-view 横屏打开允许自定义导航栏 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>)
  4. `U` 更新 API 废弃 requestVirtualPayment 文档中的 platform 参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestVirtualPayment.html>)
  5. `F` 修复 框架 修复 PC 同步调用 showToast/hideToast 时弹窗不消失的问题
  6. `F` 修复 框架 修复 AudioBufferSource 内存泄漏
  7. `F` 修复 框架 skyline root-portal 里的蒙层会点击穿透
  8. `F` 修复 组件 skyline camera 在创建时会出现 _initNativeView 报错的问题
  9. `F` 修复 组件 skyline 在 iOS 下 enable-back-to-top 默认行为未生效

## v3.2.3 (2023-11-22)

  1. `U` 更新 框架 PC 小游戏支持TCP通信接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/wx.createTCPSocket.html>)
  2. `F` 修复 框架 xr-frame 相机跟随抖动修复
  3. `F` 修复 框架 修复 video src 某些格式不触发 error 事件
  4. `F` 修复 框架 修复 movable-area 缩放后无法滑动 [详情](<https://developers.weixin.qq.com/community/develop/doc/0008682f62c848a4238044ae76b400>)
  5. `F` 修复 组件 video 组件 bind:ended 事件连续触发两次
  6. `F` 修复 组件 skyline scroll-view 在 iOS 下 enable-back-to-top 默认行为未生效
  7. `F` 修复 组件 skyline rich-text 中图片不会撑开的问题

## v3.2.2 (2023-11-15)

  1. `U` 更新 组件 editor 组件支持 enable-formats 参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>)
  2. `U` 更新 API wx.request 支持拦截3xx重定向 [详情](<https://developers.weixin.qq.com/community/develop/doc/000c021f128580501b68ca5945b400>)
  3. `U` 更新 API 小游戏 shareMessageToFriend 接口的 imageUrl 不允许使用网络图片 [详情](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.setMessageToFriendQuery.html>)
  4. `F` 修复 框架 skyline vConsole 偶现 Observer 报错
  5. `F` 修复 框架 skyline slider 拖动时 bind:change 不触发
  6. `F` 修复 组件 camera 在 iOS 下使用 frame-size 时避免自动降低分辨率
  7. `F` 修复 API 修复wx.createInnerAudioContext接口开启useWebAudioImplement时播放超大音频文件报错的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/0002c451454100904a90fc1e466800>)

## v3.2.1 (2023-11-09)

  1. `A` 新增 框架 visionKit 支持试鞋能力 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/visionkit/shoe>)
  2. `A` 新增 API wx.requestCommonPayment [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestCommonPayment.html>)
  3. `A` 新增 API 小程序 wx.postMessageToReferrerMiniProgram 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.postMessageToReferrerMiniProgram.html>)
  4. `U` 更新 框架 xr-frame gltf 点击修复
  5. `U` 更新 框架 小程序虚拟支付接口性能优化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestVirtualPayment.html>)
  6. `F` 修复 框架 修复 PC 上 image 设置 base64 src 时报错的问题
  7. `F` 修复 框架 skyline 下 wx:if 导致组件事件监听器失效
  8. `F` 修复 框架 skyline root-portal 里的蒙层会点击穿透
  9. `F` 修复 框架 开发者工具开启按需注入特性时偶现启动报错并白屏
  10. `F` 修复 框架 glass-easel 下 movable-view 同时更新 style 和 x/y 值会失效
  11. `F` 修复 组件 scroll-view 直接子节点使用 css sticky 超出一屏无法吸顶 [详情](< scroll-view#:~:text=2.12.0-,using%2Dsticky,-boolean>)

## v3.2.0 (2023-11-03)

  1. `A` 新增 组件 skyline 新增 draggable-sheet 滚动容器 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/skyline/DraggableSheetContext.scrollTo.html>)
  2. `U` 更新 组件 skyline input / textarea 支持 selection / composition 事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/Tensors.html#:~:text=bind%3Akeyboardcompositionstart>)
  3. `U` 更新 框架 PC 小游戏鼠标锁定接口支持 [详情](<https://developers.weixin.qq.com/minigame/dev/api/render/cursor/wx.isPointerLocked.html>)
  4. `U` 更新 组件 skyline input 支持自定义光标颜色 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/Tensors.html>)
  5. `U` 更新 组件 skyline scroll-view 支持 nested 嵌套模式 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html#Skyline-%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7>)
  6. `U` 更新 组件 skyline 下 swiper 增强，提供多种交互动画 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>)
  7. `U` 更新 API skyline 自定义路由右滑返回支持全屏范围 [详情](<../runtime/skyline/custom-route#:~:text=%3A%20any%7D-,%E9%BB%98%E8%AE%A4%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE,-const%20defaultCustomRouteConfig%20%3D>)
  8. `U` 更新 API skyline 支持 wx.preloadAssets 接口
  9. `F` 修复 框架 修复 PC 端 Date Picker fields 在 UI 上没有生效的问题
  10. `F` 修复 组件 修复工具 Canvas 混用

## v3.1.5 (2023-10-25)

  1. `U` 更新 框架 粒子系统需要支持子发射器 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  2. `U` 更新 框架 官方隐私弹窗弹出时，需要阻止对页面背景进行滑动操作
  3. `F` 修复 框架 skyline 下 openEmbededMiniProgram 首次调用失败
  4. `F` 修复 框架 live-pusher 组件 enableMic 导致 muted 失效
  5. `F` 修复 框架 skyline 下 input 组件 nickname 输入后聚焦光标位置不正确
  6. `F` 修复 组件 web-view 组件存在 iframe 时不触发 bindload
  7. `F` 修复 组件 iOS 下 scroll-view 组件 scroll-into-view 属性有概率白屏 [详情](<https://developers.weixin.qq.com/community/develop/doc/000ca4c926cd788b4faf9424d57800>)

## v3.1.4 (2023-10-18)

  1. `U` 更新 框架 XR-FRAME 修复开关 ar 模式时的 target 问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a8a3bc6c4e0655860ce2a96b800?highLine=xr-frame>)

  2. `U` 更新 框架 小游戏支持录屏检测接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenRecordingState.html>)

  3. `F` 修复 框架 input 组件 type 为 nickname 时使用异常

  4. `F` 修复 框架 glass-essal 下 applyAnimatedStyle 找不到节点提示

  5. `F` 修复 框架 boundingClientRect 无返回时给个提示在 webview 也出现

## v3.1.3 (2023-10-13)

  1. `U` 更新 框架 小游戏wk支持TCP通信接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/wx.createTCPSocket.html>)
  2. `F` 修复 框架 skyline 下 image 节点 longpress 无法触发 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a8a182d8460216120e3c6d61000>)
  3. `F` 修复 框架 web-view 组件下收藏和分享朋友圈 bug [详情](<https://developers.weixin.qq.com/community/develop/doc/000400f5648120d55f006156d6b400>)
  4. `F` 修复 框架 解决 BufferSource 被GC后音频中断的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/000448040585b81873ffd9b9a51400?jumpto=reply&parent_commentid=000ecc2602c570ce59102e3dc668&commentid=00028a387944302a9a1050ed869c>)
  5. `F` 修复 组件 skyline input 清空内容并再次聚焦后无法输入
  6. `F` 修复 组件 skyline input 设置 font-size 无法自动撑开
  7. `F` 修复 组件 skyline textarea auto-height 不生效
  8. `F` 修复 API 微信表情相关接口部分 url 无法使用的问题

## v3.1.1 (2023-09-21)

  1. `A` 新增 API 小游戏支持 TCP 通信接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/wx.createTCPSocket.html>)
  2. `U` 更新 框架 部分 IOS 用户切换网络状态后 request 请求超时 [详情](<https://developers.weixin.qq.com/community/develop/doc/000e08712541008c145f451845b000>)
  3. `U` 更新 框架 XR-FRAME ShareSystem 新增了录屏功能，受限于设备性能，录屏时请选择适当的录制帧率和分辨率 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  4. `U` 更新 框架 Skyline 部分未支持的组件加个错误提示
  5. `F` 修复 框架 CameraContext.onCameraFrame callback 的报错应为第三方错误
  6. `F` 修复 框架 touchmove / longtap 导致节点被删除时， touch 事件内部状态错误 [详情](<https://developers.weixin.qq.com/community/develop/doc/000aa4024bce20754c404117063c00>)
  7. `F` 修复 组件 iOS scroll-view 组件开启 refresher 滚动区域多出一块 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a60bb2f89c026abcfd743951400>)

## v3.1.0 (2023-09-14)

  1. `U` 更新 框架 优化 worklet function 执行耗时
  2. `U` 更新 框架 优化 transform scale 动画性能 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.snapshot.html#:~:text=%E6%B2%A1%E6%9C%89%E5%B0%BA%E5%AF%B8%E9%99%90%E5%88%B6-,%E6%B8%B2%E6%9F%93%E6%A8%A1%E5%BC%8F,-Skyline%20%E4%B8%8B%E5%AF%B9>)
  3. `U` 更新 框架 支持 SelectorQuery scrollOffset [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  4. `U` 更新 框架 支持 scroll-into-view-offset [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html#Skyline-%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7:~:text=scroll%2Dinto%2Dview%2Doffset>)
  5. `U` 更新 框架 基础库预设自定义路由动画 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/runtime/skyline/preset-route>)
  6. `U` 更新 框架 支持页面配置 rendererOptions [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page>)
  7. `U` 更新 组件 map 组件新增 polylinetap 事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html#polyline:~:text=2.3.0-,bindpolylinetap,-eventhandle>)
  8. `U` 更新 组件 map 组件新增 moveAlong() 动画插值 interpolatepoint 事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html#polyline:~:text=bindinterpolatepoint>)
  9. `U` 更新 API CameraContext的takePhoto方法支持返回原图 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.takePhoto.html#:~:text=%E4%BD%8E%E8%B4%A8%E9%87%8F-,original,-%E5%8E%9F%E5%9B%BE>)
  10. `U` 更新 API 优化异步分包组件数量较多时容易引起下载失败的问题
  11. `F` 修复 组件 skyline switch checkbox 组件选中后 icon 没有居中

## v3.0.2 (2023-09-05)

  1. `U` 更新 框架 webview 渲染后端中，保证在页面首屏渲染完成后再进行占位组件替换
  2. `U` 更新 框架 体验分析更新优化
  3. `U` 更新 框架 Skyline 下 boundingClientRect 无返回时给个提示
  4. `U` 更新 框架 Skyline 内置组件支持 darkmode、v2 样式
  5. `U` 更新 框架 scroll-into-view 跳转到 sticky-header 位置错误
  6. `U` 更新 组件 Canvas 添加混合调用报错
  7. `U` 更新 组件 修复安卓同层 input 数字键盘限制 [详情](<https://developers.weixin.qq.com/community/develop/doc/00086a4ea989d0c5bff71ee0951000?highLine=type%253Dnumber%25E6%2597%25A0%25E6%25B3%2595%25E6%25AD%25A3%25E5%25B8%25B8%25E8%25A1%25A5%25E5%2585%2585%25E7%25A9%25BA%25E6%25A0%25BC>)
  8. `F` 修复 框架 在 glass-easel 组件 detached 生命周期中进行 setData 不应导致异常
  9. `F` 修复 框架 glass-easel 中 relations 失效
  10. `F` 修复 框架 修复 mediaRecorder destroy
  11. `F` 修复 框架 XR-FRAME 修复了分享系统截图在华为鸿蒙的问题，请使用新的异步接口`captureToDataURLAsync`/`captureToArrayBufferAsync`，`captureToLocalPath`和`captureToFriends`变更为异步接口，调用不受影响
  12. `F` 修复 框架 Skyline 下 root-portal 创建后立马销毁有报错
  13. `F` 修复 框架 Skyline 下 picker-view 在某些情况下出现报错
  14. `F` 修复 框架 Skyline 渲染下存在潜在的内存泄漏
  15. `F` 修复 框架 Skyline 下 rich-text 组件 nodes 属性传入节点列表无效
  16. `F` 修复 框架 Skyline 下 map 组件 tap 事件重复触发
  17. `F` 修复 框架 Skyline 下 iOS 平台 多个 canvas 闪退
  18. `F` 修复 组件 Skyline input / textarea 修复
  19. `F` 修复 组件 Skyline 渲染中 image 组件的 show-menu-by-long-press 参数失效 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a8a182d8460216120e3c6d61000>)
  20. `F` 修复 API chooseMedia count 非数字时统一各端报错

## v3.0.1 (2023-08-17)

  1. `A` 新增 组件 Skyline 支持 snapshot 截图组件，用于将组件内的 WXML 内容导出图片 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.snapshot.html>)
  2. `A` 新增 API 小程序跳转单个表情、表情专辑、表情IP页 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/sticker/wx.openStickerSetView.html>)
  3. `A` 新增 API 小程序提供 wx.restartMiniProgram 重启小程序接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.restartMiniProgram.html>)
  4. `U` 更新 框架 XR-FRAME 支持压缩纹理，配合下面提到的TOOLKIT使用
  5. `U` 更新 框架 XR-FRAME 可视化TOOLKIT发布，取代CLI，支持环境数据生成，glTF优化，新增压缩纹理功能 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  6. `U` 更新 框架 XR-FRAME 视频纹理支持pause/resume方法，暴露了播放状态`EVideoState`，增加配置`autoPause`，小程序压后台时自动暂停/恢复时自动播放 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  7. `U` 更新 框架 修复 image lazy-load 可能不显示问题
  8. `U` 更新 组件 弱网下授权逻辑优化
  9. `U` 更新 组件 Skyline 支持 channel-live 和 channel-video 组件
  10. `U` 更新 组件 Skyline 支持 rich-text 组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html>)
  11. `U` 更新 API 安卓小游戏 wx.decode/wx.encode 性能优化
  12. `U` 更新 API UserCryptoManager.getLatestUserKey 去掉缓存提升安全性
  13. `U` 更新 API 小游戏提供 wx.compressImage 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html>)
  14. `U` 更新 API 小游戏支持数据预拉取&数据周期性更新 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchData.html>)
  15. `F` 修复 框架 自定义 tabbar 中无法使用 applyAnimatedStyle
  16. `F` 修复 框架 Skyline 下 vConsole 旋转屏幕后尺寸未填满屏幕
  17. `F` 修复 框架 Skyline 下 vConsole 界面点击区域被系统导航条遮挡
  18. `F` 修复 框架 小游戏高性能模式下webgl2模式直播黑屏的问题
  19. `F` 修复 框架 修复部份小游戏插件错误上报到了宿主小游戏的mp的问题
  20. `F` 修复 组件 页面有选区时避免触发下拉刷新
  21. `F` 修复 API 私密消息分享给个人聊天时调整 scene 和 wx.getShareInfo 返回值
  22. `F` 修复 API 小游戏createMediaAudioPlayer.addSource不播放声音
  23. `F` 修复 API 修复 showShareImageMenu 小屏展示问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/0006486b36c7c00dfbdfba1b351400>)
  24. `F` 修复 API 修复wx 接口以 promise 方式调用时，错误没上报给开发者的问题
  25. `F` 修复 API 修改工具本地路径判断

## v3.0.0 (2023-07-05)

  1. `A` 新增 框架 新增wx.getCommonConfig接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.getCommonConfig.html>)
  2. `A` 新增 组件 scroll-view 支持下拉二楼交互 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html#:~:text=refresher%2Dtwo%2Dlevel%2Denabled>)
  3. `U` 更新 框架 glass-easel 在兼容模式下运行时使用 wxs 事件响应函数的 `ComponentDescriptor#getState` 方法
  4. `U` 更新 框架 scroll-view 支持 min-drag-distance 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html#:~:text=2.29.0-,min%2Ddrag%2Ddistance,-number>)
  5. `U` 更新 框架 video 组件遮罩逻辑导致全屏投屏按钮无法点击 [详情](<https://developers.weixin.qq.com/community/develop/doc/000600d8ae82484eacdfb4ec556800>)
  6. `U` 更新 框架 sticky-header 支持 top 偏移 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html>)
  7. `U` 更新 框架 skyline 支持 css animation 事件
  8. `U` 更新 框架 启动页无法绑定自定义路由 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/runtime/skyline/custom-route#%E5%A4%9A%E7%B1%BB%E5%9E%8B%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC>)
  9. `U` 更新 框架 更新 scroll-view / grid-view / list-view / sticky-header / sticky-section 组件支持 padding 属性，设置组件内部的内边距 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/list-view.html>)
  10. `U` 更新 框架 XR-FRAME VideoTexture 发布正式版 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  11. `U` 更新 框架 Skyline 渲染引擎下，组件框架切换为 glass-easel [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/custom-component/glass-easel/migration>)
  12. `U` 更新 组件 skyline button 组件 loading 属性添加动画
  13. `U` 更新 API 基础库支持 visionkit depth 功能 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectDepth.html>)
  14. `F` 修复 框架 scroll-view 封装成组件时 scroll-into-view 无法跳转
  15. `F` 修复 框架 skyline 内存泄漏问题
  16. `F` 修复 框架 skyline input/textarea 组件获取焦点相关问题
  17. `F` 修复 框架 skyline 下部分组件事件无法使用 wxs 函数响应的问题
  18. `F` 修复 组件 video 视频遮罩报错修复

## v2.33.0 (2023-06-29)

  1. `U` 更新 框架 request 回调函数新增异常信息返回 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  2. `U` 更新 框架 隐私接口隐私协议弹窗特性支持 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.getPrivacySetting.html>)
  3. `U` 更新 API openEmbeddedMiniProgram 打开的半屏小程序支持展开成全屏 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openEmbeddedMiniProgram.html#:~:text=2.24.0-,allowFullScreen,-boolean>)

## v2.32.3 (2023-06-15)

  1. `U` 更新 框架 增加地图能力事件 abilitysuccess 和 abilityfailed [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)
  2. `U` 更新 框架 小游戏使用开放数据域时 canvas.toTempFilePath 生成的图片路径允许用于 wx.showShareImageMenu
  3. `U` 更新 框架 scroll-view 点击状态栏返回顶部加上滚动动画
  4. `U` 更新 组件 canvas 支持动态 disableScroll
  5. `F` 修复 框架 cloud.callContainer 传 ArrayBuffer 时没有携带 method
  6. `F` 修复 框架 Skyline 渲染引擎下，`app.wxss` 中的样式不应影响到 `styleIsolation` 配置为 `isolated` 的自定义组件
  7. `F` 修复 框架 修复 Canvas 隐藏行为
  8. `F` 修复 框架 修复横屏跳转时 rpx 计算错误
  9. `F` 修复 框架 修复开发者工具下 wx.canvasGetlmageData 返回值错误
  10. `F` 修复 组件 Skyline root-portal 子节点绝对定位问题
  11. `F` 修复 组件 修复安卓插入 web-view 后 cover-view 不更新
  12. `F` 修复 API 修复 selector 选中虚拟节点报错
  13. `F` 修复 API 修复安卓 setTimeout 延迟过大的问题

## v2.32.2 (2023-06-08)

  1. `F` 修复 框架 skyline externalClass 继承逻辑有误

## v2.32.1 (2023-05-24)

  1. `A` 新增 小程序账号迁移能力 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/migrateMiniprogram>)
  2. `U` 更新 框架 XR-FRAME 物理系统大幅升级，支持物理模拟/碰撞检测 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  3. `U` 更新 框架 XR-FRAME glTF 支持 KHR_draco_mesh_compression 模型压缩扩展 [详情](<https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md>)
  4. `U` 更新 框架 XR-FRAME glTF 支持 KHR_lights_punctual 灯光扩展 [详情](<https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_lights_punctual/README.md>)
  5. `u` 更新 框架 XR-FRAME ar-system 允许指定支持 V2 的设备的平面识别模式，使用参数`planeMode`配置，1为水平面，2为垂直面，3为二者
  6. `U` 更新 框架 支持 httpdns 在额度不足等异常情况下使用 local dns 兜底 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/ability/HTTPDNS>)
  7. `U` 更新 框架 自定义路由同时改变 background & backdrop-filter 卡死
  8. `U` 更新 框架 android connectSocket 性能优化
  9. `U` 更新 框架 小游戏 vksession 相关接口开放 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/wx.createVKSession.html>)
  10. `U` 更新 框架 小游戏互推组件下线
  11. `U` 更新 框架 wx.request 接口性能优化
  12. `U` 更新 组件 skyline picker-view 组件 glass-easel 框架适配
  13. `U` 更新 组件 swiper 通过 intersectionObserver 优化 autoplay 动画
  14. `U` 更新 API 基础库支持 visionkit depth 功能 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKDepthAnchor.html>)
  15. `F` 修复 框架 XR-FRAME glTF 动画播放
  16. `F` 修复 框架 修复真机调试 1.0 无法正常使用
  17. `F` 修复 组件 skyline picker-view 组件 value 越界没显示最后一个元素

## v2.32.0 (2023-05-10)

  1. `U` 更新 框架 XR-FRAME 发布正式版
  2. `U` 更新 框架 小游戏增加 wx.openCustomerServiceChat 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/service-chat/wx.openCustomerServiceChat.html>)
  3. `U` 更新 组件 live-player 增加投屏接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.startCasting.html>)
  4. `U` 更新 组件 video 增加投屏接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.startCasting.html>)
  5. `U` 更新 组件 channel-video 开放主体限制 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/channels-activity#feed-token>)
  6. `F` 修复 XR-FRAME 视频纹理的声音无法播放的问题

## v2.31.1 (2023-04-24)

  1. `U` 更新 框架 XR-FRAME ar-system 支持了 threedof 模式 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  2. `U` 更新 框架 XR-FRAME glTF 扩展 textureTransform 和 clearcoat 支持/ gltf 加载可以忽略某条规则，用于处理`normalized`之类的情况
  3. `U` 更新 框架 XR-FRAME 支持材质的`states`修改`colorWrite`，一个4 bits 的 mask ，由高到低为`ABGR`四个通道，比如`0b1001`表示只开启`R`和`A`通道写入
  4. `U` 更新 框架 XR-FRAME 支持不同材质使用不同环境数据
  5. `U` 更新 框架 skyline scroll-view 组件支持 clip 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  6. `U` 更新 框架 在 vConsole 按钮上显示当前页面的渲染引擎
  7. `U` 更新 组件 skyline 下 scroll-view 接近全屏尺寸时默认开启 enable-back-to-top 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  8. `U` 更新 组件 skyline 支持 picker-view 组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html>)
  9. `F` 修复 框架 允许 web-view 组件在 onCopyUrl 回调前向小程序 postMessage [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>)
  10. `F` 修复 框架 skyline 内置 behaviors 在 skyline 下不可用 [详情](<https://developers.weixin.qq.com/community/develop/doc/000aa03c568d48d15c8f9dcf456400>)
  11. `F` 修复 框架 在开发者工具 Skyline 模式下 WXML 无法选中节点或聚集状态丢失
  12. `F` 修复 框架 XR-FRAME 节点系统更新的一些问题，分享系统`captureToArrayBuffer`的问题
  13. `F` 修复 组件 video 滑动进度手势算法导致瞬间回到视频起始位置并显示为 NaN
  14. `F` 修复 组件 video 组件音量手势不够灵敏
  15. `F` 修复 组件 开发者工具上 video 组件 pause 后，会继续拉取 hls 流
  16. `F` 修复 组件 修复多个在屏 Canvas 内存泄漏
  17. `F` 修复 组件 skyline 下 input/button 组件支持头像昵称填写
  18. `F` 修复 组件 skyline 下 video 组件 vslide-gesture 无法关闭
  19. `F` 修复 组件 skyline input 和 textarea 若干问题
  20. `F` 修复 API 修复半屏小程序横屏判断

## v2.31.0 (2023-04-10)

  1. `U` 更新 组件 live-pusher 支持 fps 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)
  2. `U` 更新 组件 live-pusher 支持 voice-changer-type 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)
  3. `U` 更新 API LivePusherContext 支持 setZoom/getMaxZoom 方法，LivePusherContext.playBGM 方法支持指定时间 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)

## v2.30.4 (2023-03-22)

  1. `U` 更新 框架 XR-FRAME 支持画布透明 [画布透明配置](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  2. `U` 更新 组件 grid-view webview 兼容实现 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html>)
  3. `F` 修复 框架 Skyline 下地图 polyline 未显示
  4. `F` 修复 组件 开发者工具下 canvas hidden 失效的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a6ea21e8ab09c604fa0ecc51c00>)
  5. `F` 修复 框架 XR-FRAME物理稳定性，部分渲染效果

## v2.30.3 (2023-03-06)

  1. `U` 更新 框架 小游戏暴露 checkIsAddedToMyMiniProgram 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/my-miniprogram/wx.checkIsAddedToMyMiniProgram.html>)
  2. `U` 更新 组件 支持为嵌套 text 组件绑定事件
  3. `F` 修复 框架 view 组件添加 hover-* 报错
  4. `F` 修复 组件 skyline video 报错修复
  5. `F` 修复 组件 skyline refresher refresher-triggered 改成可以重复设置值
  6. `F` 修复 组件 iOS input always-embed 不支持 nickname [详情](<https://developers.weixin.qq.com/community/develop/issue/397>)
  7. `F` 修复 组件 XR-FRAME 的 ARTracker 支持 3DMarker 后，路径中有 query 参数的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/00028a024c41a868655fc4aa25b000>)
  8. `F` 修复 组件 XR-FRAME 相机控制器偶尔卡死的问题，父节点和子节点的同步问题

## v2.30.2 (2023-02-22)

  1. `A` 新增 API 小程序通用 AI 推理接口 wx.createInferenceSession [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/wx.createInferenceSession.html>)

  2. `A` 新增 API 小程序获取通用 AI 推理引擎版本接口 wx.getInferenceEnvInfo [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/wx.getInferenceEnvInfo.html>)

  3. `U` 更新 组件 Android 同层 input 问题修复

  4. `F` 修复 框架 小程序使用按需注入时，为插件提供的 genericsImplementation 无法正常渲染的问题

  5. `F` 修复 框架 XR-FRAME CameraOrbitControl 第一次缩放后无效问题

  6. `F` 修复 框架 XR-FRAME iOS 的 OOM 问题，配合客户端 Patch 已完全修复

  7. `F` 修复 框架 XR-FRAME 碰撞体无法响应节点`visible`属性的问题

  8. `F` 修复 组件 skyline 下 video 组件滑动手势引起页面跟随滑动

## v2.30.1 (2023-02-09)

  1. `A` 新增 框架 skyline 下 clearAnimatedStyle 接口，与 applyAnimatedStyle 配套使用 [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component#clearAnimatedStyle-%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89>)
  2. `U` 更新 框架 skyline 下 applyAnimatedStyle 接口增加刷新时机选项 [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component#applyAnimatedStyle-%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89>)
  3. `U` 更新 框架 升级小程序内置的 vConsole [详情](<https://developers.weixin.qq.com/community/develop/doc/0008c870a4c680a1817eba9165b800>)
  4. `U` 更新 组件 share-element 根据子节点自动撑高
  5. `U` 更新 API 插件新增API exitMiniProgram [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.exitMiniProgram.html>)
  6. `F` 修复 框架 request多链路问题
  7. `F` 修复 框架 工具 WXML 面板 compData 动态更新
  8. `F` 修复 组件 多指触摸时取消 tap 事件
  9. `F` 修复 组件 skyline 下 back-to-top 属性失败问题
  10. `F` 修复 API httpdns支持非443端口
  11. `F` 修复了XR-FRAME中事件系统只有一个事件时的移除问题，修复了灯光作为子节点无法随父节点移动的问题。

## v2.30.0 (2023-01-12)

修复了一些已知问题

## v2.29.2 (2023-01-09)

  1. `U` 更新 组件 调整输入框的 input/change 事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/Tensors.html>)
  2. `U` 更新 API 提供获取小窗状态的接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.checkIsPictureInPictureActive.html>)
  3. `U` 更新 API setMessageToFriendQuery 支持 query 参数 [详情](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.setMessageToFriendQuery.html>)
  4. `F` 修复 框架 skyline 下 input 组件 focus 属性引起页面上推高度
  5. `F` 修复 框架 ios 同层渲染相关问题
  6. `F` 修复 框架 skyline 调试模式下 vConsole 按钮点击和拖动逻辑
  7. `F` 修复 API skyline intersectionObserver res 补全
  8. `F` 修复 API 修复 texSubImage2D

## v2.29.1 (2022-12-27)

  1. `A` 新增 API 新增 查询是否被添加到「我的小程序」状态接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/my-miniprogram/wx.checkIsAddedToMyMiniProgram.html>)
  2. `U` 更新 框架 voip-room object-fit 支持 cover 模式 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html>)
  3. `U` 更新 框架 XR-FRAME ARTracker 新增识别状态 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/>)
  4. `U` 更新 框架 eventChannel 可获取时机晚于根组件 attached
  5. `U` 更新 框架 文件系统同步接口补充错误码 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.accessSync.html>)
  6. `U` 更新 框架 skyline 支持 vConsole 调试
  7. `U` 更新 组件 movable-view 组件 scale-min 默认值调整为0.1 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html>)
  8. `U` 更新 组件 昵称填写 input 增加安全检测完成回调 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/Tensors.html>)
  9. `U` 更新 组件 live-pusher 支持自定义滤镜 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)
  10. `F` 修复 框架 【exparser】 reassignSlots 可能导致无关节点被移除插入使其内部状态丢失 [详情](<https://developers.weixin.qq.com/community/develop/doc/00080e0e8f8380d221feac1355fc00>)
  11. `F` 修复 框架 iOS 上 video 位于 scrollView 内部时，全屏后返回，scrollView 自动滚动到顶部 [详情](<https://developers.weixin.qq.com/community/develop/issue/342>)
  12. `F` 修复 框架 skyline 下部分事件无法触发
  13. `F` 修复 组件 修复 slider 在某些场景初始值显示不正确的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a4e880ec620f843fe87fae54c00>)
  14. `F` 修复 组件 地图上的圆无法删除 [详情](<https://developers.weixin.qq.com/community/develop/doc/0000a284bfcd4882c45d8478c56800>)
  15. `F` 修复 API 修复小游戏音频命中缓存时 onCanplay 回调不触发的问题
  16. `F` 修复 API join1v1Chat roomType 为 video 时改为免提接听
  17. `F` 修复 API wx.getSkylineInfo 的 complete 回调参数与文档描述不一致

## v2.29.0 (2022-12-15)

  1. `A` 新增 框架 skyline 共享元素动画新特性 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/runtime/skyline/share-element>)
  2. `A` 新增 框架 skyline 支持网格容器组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html>)
  3. `A` 新增 框架 skyline 支持吸顶容器组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html>)
  4. `A` 新增 组件 视频号直播组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/channel-live.html>)
  5. `U` 更新 框架 skyline scroll-view 新特性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  6. `U` 更新 框架 swiper 支持 scrollWithAnimation & cacheExtent [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>)
  7. `U` 更新 API 支持获取设备CPU/GPU 硬件信息 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getDeviceInfo.html>)
  8. `U` 更新 API getChannelsLiveInfo接口增加展示历史直播信息 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsLiveInfo.html>)
  9. `U` 更新 API 开放网络多链路的能力 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  10. `U` 更新 API live-pusher开放自定义渲染 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)
  11. `F` 修复 框架 XR-FRAME AR系统在部分安卓机黑屏修复

## v2.28.1 (2022-12-05)

  1. `U` 更新 框架 XR-FRAME [AR系统新增人手、人脸、肢体识别和前置相机](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/ar/tracker.html#Face>)/[SLOT支持](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/core/slot.html>)/[粒子系统](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/particles/index.html>)/[GLTF相关能力](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/gltf/specification.html#%E4%BD%BF%E7%94%A8-TS-%E8%84%9A%E6%9C%AC%E6%9D%A5%E4%BF%AE%E6%94%B9GLTF>)/[内置资源进度监听](<https://developers.weixin.qq.com/miniprogram/dev/component/xr-frame/assets/elements.html>)
  2. `U` 更新 框架 skyline 支持 page-meta 组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html>)
  3. `U` 更新 框架 工具上的 camera 组件不会触发 bindinitdone 和 binderror
  4. `U` 更新 框架 更新全局自定义tabbar [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/release/1003676.html>)
  5. `U` 更新 组件 头像组件对相册中选择/拍照上传增加图片压缩与裁剪
  6. `U` 更新 API openEmbeddedMiniProgram增加tap事件限制
  7. `U` 更新 API 半屏小程序调用openEmbeddedMiniProgram时降级为navigateToMiniProgram
  8. `U` 更新 API 游戏圈按钮支持红点
  9. `F` 修复 框架 XR-FRAME 一些BUG修复
  10. `F` 修复 框架 修复iOS小游戏高性能模式冷启动 query 丢失
  11. `F` 修复 框架 skyline 组件补全单页模式相关逻辑
  12. `F` 修复 组件 skyline map 组件 getcenterlocation 方法补充
  13. `F` 修复 组件 scroll-view 未声明 enableBackToTop 时错误触发 listenTapStatusBar 导致页面回到顶部失效
  14. `F` 修复 组件 修复 swiper 无法自定义 ariaRole
  15. `F` 修复 组件 修复 video 重复发送 loadedmetadata
  16. `F` 修复 组件 skyline 下的 video 组件没有 play、timeupdate 等事件
  17. `F` 修复 组件 video 缺少 seekcomplete
  18. `F` 修复 组件 video 在点击静音后手势调节音量无法恢复非静音状态
  19. `F` 修复 API webaudio 无法closeContext [详情](<https://developers.weixin.qq.com/community/develop/doc/000a4ed6fb4748bb73de88ca851000?from_wecom=1>)
  20. `F` 修复 API 工具上 compressImage 不支持压缩本地图片

## v2.28.0 (2022-11-21)

  1. `U` 更新 API 音频接口优化

  2. `U` 更新 API visionkit支持人体关键点检测&人手关键点检测 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getCameraBuffer.html>)

  3. `F` 修复 框架 安卓小游戏从录屏分享卡片进入游戏，使用关系链功能会crash

  4. `F` 修复 框架 修复 new Error instanceof TypeError === true [详情](<https://developers.weixin.qq.com/community/develop/doc/000ee86c1c4f20ca81ce6527156800>)

## v2.27.3 (2022-11-14)

  1. `U` 更新 框架 设备 VoIP 能力授权
  2. `U` 更新 框架 支持worker代码打包到小程序&小游戏分包 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/subpackage/wx.preDownloadSubpackage.html>)
  3. `U` 更新 组件 scroll-view 接近全屏尺寸时默认开启点击回到顶部
  4. `U` 更新 API createVKSession 在不需要用到摄像头的时候不再发起摄像头授权 [详情](<https://developers.weixin.qq.com/community/develop/doc/000e8afc7684989bd8be3f06056400>)
  5. `F` 修复 框架 [BUG] batchGetStorage客户端返回值无errno 0处理
  6. `F` 修复 组件 skyline 下的 map 组件收不到 native 事件 [详情](<https://developers.weixin.qq.com/community/develop/doc/00022e1b7ec838f955beebd8151c00>)

## v2.27.2 (2022-11-08)

  1. `U` 更新 API 更新 skyline 支持 intersection Observer [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html>)
  2. `F` 修复 框架 skyline 工具端异步分包样式注入失败问题
  3. `F` 修复 框架 skyline input 事件修复

## v2.27.1 (2022-10-31)

  1. `A` 新增 框架 新增xr-fame能力，kanata更新 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/xr-frame/index>)
  2. `A` 新增 组件 map 组件新增 bindrendersuccess 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html#%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E>)
  3. `A` 新增 API 新增 wx.getRendererUserAgent [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getRendererUserAgent.html>)
  4. `U` 更新 框架 加密分享小程序
  5. `U` 更新 框架 开发版与体验版小程序&插件提前下线获取用户头像昵称能力 [详情](<https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01>)
  6. `U` 更新 API worker 新增 worker.testOnProcessKilled 接口用于模拟 worker 被系统回收事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.testOnProcessKilled.html>)
  7. `U` 更新 API 对本地短音频默认切换至WebAudio实现，以提升稳定性和性能
  8. `F` 修复 框架 bug 2.26.1 及 2.26.2 报错 Uncaught (in promise) undefined [详情](<https://developers.weixin.qq.com/community/minihome/doc/000406892fc328fbcf9e7d3e356800>)
  9. `F` 修复 框架 修复小游戏高性能模式下首次wx.onShow不起效
  10. `F` 修复 框架 增强 scroll-view 部分场景下失效
  11. `F` 修复 框架 修复小游戏Camera.onAuthCancel不触发
  12. `F` 修复 框架 如果 generics 缺失自定义组件实现， iOS 平台上某些特殊情况下可能渲染出错 [详情](<https://developers.weixin.qq.com/community/develop/doc/000406540941201d756e719ec5bc00>)
  13. `F` 修复 组件 修复 aria-disabled 没有正常作用
  14. `F` 修复 组件 修复 input cursor 同步错误 [详情](<https://developers.weixin.qq.com/community/develop/doc/00026cb76bcc68db7b6b6b9d45c800>)
  15. `F` 修复 组件 修复 video 在工具没有正确销毁 [详情](<https://developers.weixin.qq.com/community/develop/doc/0008c0d42940d83a7b5e2b18e51800>)
  16. `F` 修复 API 修复useWebAudioImplement模式下，pause/stop之后音频会继续播放的bug
  17. `F` 修复 API OffscreenCanvas 无法调用 createPath2D

## v2.27.0 (2022-09-27)

  1. `A` 新增 API 新增图片提取文字接口 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/visionkit/ocr>)

## v2.26.2 (2022-09-26)

  1. `A` 新增 API 新增 wx.getSkylineInfo [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSkylineInfo.html>)
  2. `U` 更新 框架 插件支持打开半屏小程序接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openEmbeddedMiniProgram.html>)
  3. `U` 更新 API InnerAudioContext 支持可写 currentTime [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.onCanplay.html#number-currentTime>)
  4. `F` 修复 框架 小程序自动化测试在真机调试时无法使用的问题
  5. `F` 修复 框架 IOS 下 skyline load 分包失败
  6. `F` 修复 框架 skyline input placeholder-style 不设置 fontSize 时会消失
  7. `F` 修复 框架 skyline 异步分包组件样式问题
  8. `F` 修复 框架 skyline 工具侧异步分包组件渲染失败
  9. `F` 修复 框架 开启按需注入时，iOS 在恢复内存不足导致的页面白屏时可能恢复失败
  10. `F` 修复 框架 在极端情况下 animate 调用队列可能出现时序竞争

## v2.26.1 (2022-09-09)

  1. `U` 更新 框架 root-portal 支持 fixed 和 relative 切换 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html>)
  2. `F` 修复 框架 分包异步化中，高频率加载同一分包可能导致加载失败
  3. `F` 修复 框架 分包异步化占位组件替换失败
  4. `F` 修复 框架 Skyline 下 map 组件无法更新宽高
  5. `F` 修复 框架 getLocation开发版&体验版频繁调用不报错

## v2.26.0 (2022-08-26)

  1. `A` 新增 API 支持图片裁剪接口 wx.cropImage [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.cropImage.html>)

  2. `U` 更新 组件 video 组件支持 preferredPeakBitRate 属性 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>)

  3. `U` 更新 API wx.compressImage 支持按尺寸压缩 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html>)

  4. `U` 更新 API 小游戏支持动态设置横竖屏接口 wx.setDeviceOrientation [详情](<https://developers.weixin.qq.com/minigame/dev/api/device/orientation/wx.setDeviceOrientation.html>)

  5. `F` 修复 API get/setStorage 开启加密后 emoji 字符会处理出错

## v2.25.4 (2022-08-16)

  1. `U` 更新 API insertImage接口增加是否换行参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertImage.html>)
  2. `F` 修复 框架 修复部分iOS Unity小游戏切后台再切前台音频不能再播放的问题
  3. `F` 修复 框架 修复分包插件页样式丢失问题
  4. `F` 修复 框架 修复分包插件组件按需注入失败问题
  5. `F` 修复 组件 input placeholder-style 默认值应从 input 自身继承

## v2.25.3 (2022-08-02)

  1. `U` 更新 框架 小游戏开放getWindowInfo、getSystemSetting、getDeviceInfo等system相关接口 [详情](<https://developers.weixin.qq.com/minigame/dev/api/#系统>)
  2. `U` 更新 框架 修复 Canvas 修改宽高时没有重置画布状态
  3. `U` 更新 框架 Canvas 事件偶现没有 changedTouches
  4. `U` 更新 组件 给 skyline 提供 root-portal 组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html>)
  5. `U` 更新 组件 scroll-view 支持配置 passive [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html#%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E>)
  6. `F` 修复 框架 Skyline 后端支持 selectorQuery getComputedStyle，兼容 scrollOffset
  7. `F` 修复 组件 image 设置 webp 属性为 true 时，加载图片失败返回的 src 不是原始图片 src
  8. `F` 修复 API 安卓WXWebAssembly.instantiate接口不传imports对象会crash

## v2.25.2 (2022-07-25)

  1. `U` 更新 框架 移除关于 slot not found 的警告

  2. `U` 更新 框架 更新小程序内置的 vConsole 到3.14.6，支持复制日志 [详情](<https://github.com/Tencent/vConsole/releases>)

  3. `U` 更新 框架 提供 root-portal 组件，支持将一个节点树子树脱离文档树 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html>)

  4. `F` 修复 组件 page-container多页跳转返回失效 [详情](<https://developers.weixin.qq.com/community/develop/issue/385>)

  5. `F` 修复 组件 工具 canvas 丢失 tap 事件 [详情](<https://developers.weixin.qq.com/community/develop/doc/000aae0794c948beb40e5654056800>)

  6. `F` 修复 API moveToLocation接口传入固定经纬度信息无需授权弹窗

## v2.25.1 (2022-07-12)

  1. `U` 更新 框架 wx.decode 和 wx.encode 统一默认编码为 utf8 [详情](<https://developers.weixin.qq.com/minigame/dev/api/util/wx.encode.html>)
  2. `U` 更新 框架 真机调试2.0自动化支持 App.callFunction 以及 App.addBinding 方法
  3. `U` 更新 API 去除 errMsg 多余空格
  4. `U` 更新 API 支持运行时切换当前页面 Passive 配置 [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app#enablePassiveEvent>)
  5. `U` 更新 API 支持iOS小程序在ExperimentalWorker内获取摄像头帧数据 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.getCameraFrameData.html>)
  6. `F` 修复 框架 小游戏wx.onDeviceOrientationChange回调只触发一次的bug
  7. `F` 修复 组件 canvas 加载图片对 url 重复 encode 的问题
  8. `F` 修复 组件 loadFontFace 在 canvas 上屏之前不生效 [详情](<https://developers.weixin.qq.com/community/develop/doc/000e26672f8cf85a400e76b5156000>)
  9. `F` 修复 组件 插件支付接口问题修复
  10. `F` 修复 API 修复 canvas findElementById 报错 [详情](<https://developers.weixin.qq.com/community/develop/doc/0000c4c99f472075be0efaf8b51000>)

## v2.25.0 (2022-06-29)

  1. `A` 新增 API 新增批量获取/设置storage缓存的接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchSetStorage.html>)
  2. `A` 新增 API 新增 wx.getFuzzyLocation 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getFuzzyLocation.html>)
  3. `A` 新增 API 新增 wx.sendSms 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/sms/wx.sendSms.html>)
  4. `U` 更新 组件 live-pusher 支持小窗推流 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html#%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E>)
  5. `U` 更新 组件 live-player 和 live-pusher 截图功能支持截取渲染画面 [LivePlayerContext.snapshot](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.snapshot.html>) / [LivePusherContext.snapshot](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.snapshot.html>)
  6. `U` 更新 API 地理位置相关接口要求调用前进行准入申请 [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app#permission>)

## v2.24.7 (2022-06-23)

  1. `U` 更新 组件 web-view 加载失败时支持返回完整 url [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81-3>)

  2. `F` 修复 框架 开启 enablePassiveEvent 后出现的异常问题

  3. `F` 修复 框架 部分情况下开发版堆栈无法根据sourceMap还原的情况

## v2.24.6 (2022-06-10)

  1. `U` 更新 框架 wx.getChannelsShareKey 支持 1208 场景 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsShareKey.html>)

  2. `U` 更新 框架 优化 request 接口 DNS 域名解析

  3. `U` 更新 组件 头像昵称填写支持工具

  4. `U` 更新 组件 安卓 input 支持同层

  5. `U` 更新 API 支持返回多条视频号预告信息 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsLiveNoticeInfo.html>)

  6. `F` 修复 框架 异步 require JS 文件异常没有触发回调函数问题

  7. `F` 修复 框架 开发版小程序禁用初始渲染缓存时，已存在的缓存有时未被清除 [详情](<https://developers.weixin.qq.com/community/develop/doc/0002a697aac990fc4c9d7e1b056000>)

## v2.24.5 (2022-05-31)

  1. `U` 更新 框架 小游戏插件支持 [wx.connectSocket](<https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html>) / [wx.uploadFile](<https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html>) / [wx.downloadFile](<https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html>)

  2. `F` 修复 组件 安卓 input 框会偶现输入字与 placeholder 字重叠 bug [详情](<https://developers.weixin.qq.com/community/develop/doc/00026c486e0e58b2679d0959a5b800>)

## v2.24.4 (2022-05-26)

  1. `U` 更新 框架 小游戏插件支持 getAccountInfoSync [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html>)

  2. `U` 更新 组件 navigator支持返回上一个小程序 [详情](<https://developers.weixin.qq.com/community/develop/issue/380>)

  3. `U` 更新 组件 Canvas 优化

  4. `F` 修复 框架 按需注入下 ios 独立分包跳普通分包页面白屏

  5. `F` 修复 组件 修复 ios textarea 偶现自动聚焦失效

## v2.24.3 (2022-05-16)

  1. `A` 新增 框架 异步分包下载失败的回调事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onLazyLoadError.html>)

  2. `U` 更新 框架 WebAudio 接口请求音频URL时去掉 content-type: application/json 请求头

  3. `F` 修复 组件 修复部分 Canvas 接口缺失

  4. `F` 修复 框架 异步分包插件加载问题

  5. `F` 修复 框架 storageAPI 在工具上手动修改缓存值后js读取错误的bug

  6. `F` 修复 组件 修复 iOS 15 input 点击穿透 [详情](<https://developers.weixin.qq.com/community/develop/doc/0006c65b6b03f0e47ffc8ef6856800>)

## v2.24.2 (2022-05-05)

  1. `U` 更新 框架 小游戏插件错误上报到mp

  2. `U` 更新 框架 支持小游戏插件 request 域名独立配置

  3. `F` 修复 框架 无法精准转换 rpx 单位的问题

  4. `F` 修复 框架 分包中的插件无法正确获取 getEnterOptionsSync 的部分字段

  5. `F` 修复 组件 scroll-view 动态设置 refresher-background 会引发渲染错位 [详情](<https://developers.weixin.qq.com/community/develop/doc/00084e1a5b8028835deb5900f51400>)

## v2.24.1 (2022-04-24)

  1. `U` 更新 框架 支持页面配置 enablePassiveEvent [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page>)
  2. `F` 修复 框架 独立分包异步加载 JS 文件
  3. `F` 修复 框架 getPerformance 接口 resourceTiming 指标部分时间字段未转换 UNIX 时间戳
  4. `F` 修复 组件 修复 live-pusher 报错 10004

## v2.24.0 (2022-04-12)

  1. `U` 更新 框架 真机调试2.0 支持 Storage 面板数据展示 [详情](<https://developers.weixin.qq.com/miniprogram/dev/devtools/debug#Storage-panel>)
  2. `U` 更新 框架 map 自定义 callout 保护
  3. `U` 更新 组件 rich-text 支持选中复制 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html>)
  4. `U` 更新 API wx.createCacheManager 接口支持在安卓端使用 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/wx.createCacheManager.html>)
  5. `U` 更新 API iOS 端支持监听录屏状态 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onScreenRecordingStateChanged.html>)
  6. `U` 更新 API request 错误码规范化
  7. `U` 更新 API getPerformance 支持获取主包和静态资源的加载耗时 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.getPerformance.html>)
  8. `F` 修复 框架 UDP setBroadcast 兼容旧版本
  9. `F` 修复 框架 在工具上按需注入多次进入同一页面可能导致渲染异常
  10. `F` 修复 组件 cover-image 误报 binderror 事件

## v2.23.4 (2022-04-02)

  1. `U` 更新 组件 map 的 gl 实现支持 enable3D 参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html#%E5%9C%B0%E5%9B%BE%E5%9F%BA%E7%A1%80%E5%B1%9E%E6%80%A7>)
  2. `F` 修复 API udp ipv6 下 setTTL 报错

## v2.23.3 (2022-03-28)

  1. `U` 更新 框架 【cloud sdk】wx.cloud.callContainer 支持使用 cacheManager 缓存请求 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/performance/weak-network>)

  2. `U` 更新 框架 【小游戏】小游戏直播面板 bugfix

  3. `U` 更新 框架 UDPSocket.send 接口新增任意地址广播功能。 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.send.html>)

  4. `U` 更新 框架 wx.getLocalIPAddress 接口返回新增子网掩码 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getLocalIPAddress.html>)

  5. `F` 修复 组件 修复昵称填写 input 事件

  6. `F` 修复 API 某些情况下 appLaunch PerformanceEntey 在 iOS 上 startTime 不准确 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a8e968b80f84bb0ad89b9e5b800>)

## v2.23.2 (2022-03-21)

  1. `F` 修复 框架 offAppHide 失效问题
  2. `F` 修复 框架 page-container 进入动画有时不会触发 [详情](<https://developers.weixin.qq.com/community/develop/doc/0006eae18b4cb86e4a0c36c8d50800>)

## v2.23.1 (2022-03-14)

  1. `U` 更新 框架 open-data 组件 groupName 弹框不正确
  2. `U` 更新 框架 rpx单位转换性能优化
  3. `U` 更新 组件 省市区picker优化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>)
  4. `U` 更新 组件 优化 picker-view 首屏加载
  5. `U` 更新 API getPerformance 新增 LCP 指标，navigation/render指标增加部分新字段 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceEntry.html#string-entryType>)
  6. `U` 更新 API wx.pageScrollTo 支持 offsetTop [详情](<https://developers.weixin.qq.com/community/develop/doc/000a20714e0b78f1db8df893e56800>)
  7. `F` 修复 组件 iOS 端 video 组件在进入全屏退出全屏后，原本覆盖在控制栏的 view 会被控制栏覆盖
  8. `F` 修复 组件 昵称填写在页面跳转时没有消失 [详情](<https://developers.weixin.qq.com/community/develop/doc/000c4ad37b05f8354a8d7b4c356c00>)
  9. `F` 修复 组件 getUserProfile 弹窗会出现样式错误
  10. `F` 修复 API wx.serviceMarket.CDN 在插件上无法上传文件到 CDN

## v2.23.0 (2022-03-02)

  1. `A` 新增 API 小程序新增 wx.createCacheManager 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/wx.createCacheManager.html>)
  2. `U` 更新 框架 小游戏支持弱引用 WXWeakRef
  3. `U` 更新 API 小游戏支持 wx.chooseMessageFile wx.chooseMedia 接口 [wx.chooseMessageFile](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html>) / [wx.chooseMedia](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html>)
  4. `F` 修复 框架 optionalTypes 定义未被正确同步导致有时在视图层无效
  5. `F` 修复 组件 scroll-view 在非整数 dpr 下滚动不冒泡
  6. `F` 修复 API iOS 端 wx.getUserProfile 接口在弱网时连续点击，网络恢复后触发多次弹窗的问题
  7. `F` 修复 API getPerformance 启动和页面切换耗时在部分场景下数据异常

## v2.22.1 (2022-02-21)

  1. `A` 新增 框架 小程序 FPS 面板 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/performance/fps_panel>)
  2. `A` 新增 插件支付 API [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestPluginPayment.html>)
  3. `A` 新增 API “重新进入小程序” API [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.restartMiniProgram.html>)
  4. `U` 更新 框架 真机调试2.0支持真机自动化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/devtools/auto/remote>)
  5. `U` 更新 框架 wifi 相关接口支持返回不完整的 WifiInfo 对象 - 插件支持 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onWifiConnectedWithPartialInfo.html>)
  6. `U` 更新 API 插件增加蓝牙从机接口 [wx.createBLEPeripheralServer](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.createBLEPeripheralServer.html>) / [wx.onBLEPeripheralConnectionStateChanged](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.onBLEPeripheralConnectionStateChanged.html>) / [wx.offBLEPeripheralConnectionStateChanged](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.offBLEPeripheralConnectionStateChanged.html>)
  7. `U` 更新 API showToast / hideLoading，showLoading / hideToast 提供互斥机制 [详情](<https://developers.weixin.qq.com/community/develop/doc/00080a846ac150f2d24dc1c8456400>)
  8. `U` 更新 API getNetworkType 支持查询用户是否使用了网络代理 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html>)
  9. `F` 修复 框架 worker开启 useExperimentalWorker 后，service 中 request 无法正常触发回调
  10. `F` 修复 API 用户开启网络代理时 httpdns 回退到普通 http 请求

## v2.22.0 (2022-01-24)

  1. `A` 新增 框架 长期订阅消息新增提醒功能 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/subscribe-message#%E8%AE%A2%E9%98%85%E6%B6%88%E6%81%AF%E6%B7%BB%E5%8A%A0%E6%8F%90%E9%86%92>)
  2. `A` 新增 组件 map组件新增绘制圆弧、限制地图显示范围、polyline展示文字接口
  3. `A` 新增 API 图片编辑接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.editImage.html>)
  4. `U` 更新 框架 wifi 相关接口支持返回不完整的 WifiInfo 对象 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/WifiInfo.html#%E6%B3%A8%E6%84%8F>)
  5. `U` 更新 组件 camera 支持镜像模式和录像时长参数 [selfieMirror](<https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.takePhoto.html>) / [timeout](<https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.startRecord.html>)
  6. `U` 更新 组件 map组件多边形支持设置虚线
  7. `U` 更新 API iOS 端 VKsession 支持 v2 版本 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/wx.isVKSupport.html>)
  8. `U` 更新 API 优化 VKsession 的系统摄像头权限提示
  9. `U` 更新 API 蓝牙getBLEDeviceCharacteristics区分回复写和无回复写 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html#Object-object>)
  10. `U` 更新 API 蓝牙writeBLECharacteristicValue增加写模式控制 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html#%E5%8F%82%E6%95%B0>)
  11. `U` 更新 API onBluetoothDeviceFound / getBluetoothDevices 新增 connectable 属性 [onBluetoothDeviceFound](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html#%E5%8F%82%E6%95%B0>) / [getBluetoothDevices](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html#%E5%8F%82%E6%95%B0>)

## v2.21.4 (2022-01-13)

  1. `U` 更新 组件 安卓 input 无障碍优化
  2. `U` 更新 API 插件新增弱网事件 onNetworkWeakChange
  3. `F` 修复 框架 优化 Component Warning 提示需要附带组件的路径信息
  4. `F` 修复 组件 修复cover-view 的 transform 样式计算错误
  5. `F` 修复 组件 movable-view 在某些场景放缩后无法移动的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/000e2eabb08f9856edbb7f65951400>)
  6. `F` 修复 组件 page-container 内 textarea 的 placeholder-style 不生效的问题 [详情](<https://developers.weixin.qq.com/community/develop/doc/000c8a2e7fc62095992c41e145b800>)
  7. `F` 修复 组件 修复 keyboard-accessory 样式与 cover-view 不对齐
  8. `F` 修复 组件 优化 swiper 加载速度
  9. `F` 修复 PC 小程序 web-view 组件 bind 系列接口问题
  10. `F` 修复 API 修复 iOS 跳转小程序弹窗无法二次唤起 [详情](<https://developers.weixin.qq.com/community/develop/doc/000a4af188c5b8bf451d88fd65b800>)

## v2.21.3 (2021-12-22)

  1. `U` 更新 API 插件补充自 2.20.0 以来新增接口 [wx.getLocalIPAddress](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getLocalIPAddress.html>) / [wx.openSystemBluetoothSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openSystemBluetoothSetting.html>)/[wx.openAppAuthorizeSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html>)/[wx.getSystemSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemSetting.html>)/[wx.getAppAuthorizeSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppAuthorizeSetting.html>)/[wx.getDeviceInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getDeviceInfo.html>)/[wx.getWindowInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getWindowInfo.html>)/[wx.getAppBaseInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppBaseInfo.html>)/[wx.setVisualEffectOnCapture](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setVisualEffectOnCapture.html>)
  2. `U` 更新 API 小游戏新增监听键盘高度变化事件 wx.onKeyboardHeightChange [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.onKeyboardHeightChange.html>)
  3. `U` 更新 API storage存储提供加密存储接口 [wx.setStorage](<https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html>) /[wx.getStorage](<https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html>)
  4. `U` 更新 API 插件支持人脸识别系列接口 [wx.faceDetect](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/face/wx.faceDetect.html>) /[wx.initFaceDetect](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/face/wx.initFaceDetect.html>)/[wx.stopFaceDetect](<https://developers.weixin.qq.com/miniprogram/dev/api/ai/face/wx.stopFaceDetect.html>)
  5. `U` 更新 组件 icon size 增加 rem 支持 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/icon.html>)
  6. `U` 更新 组件 scroll-view 接近全屏尺寸时默认开启点击回到顶部
  7. `U` 更新 组件 使用 ResizeObserver 优化 image 组件尺寸变化检查
  8. `U` 更新 框架 真机调试2.0 iOS 编译速度优化
  9. `F` 修复 组件 iOS 端图片长按出菜单会触发 tap 事件
  10. `F` 修复 组件 优化swiper多个手指滑动
  11. `F` 修复 组件 表单提交事件处理函数中无法订阅消息 [详情](<https://developers.weixin.qq.com/community/develop/doc/000eea077dced895ec9c5f9e351000>)
  12. `F` 修复 框架 滚动驱动的动画 keyframe 不能使用rpx单位 [详情](<https://developers.weixin.qq.com/community/develop/doc/000c88bffa03208d581dfee0b5b000>)
  13. `F` 修复 框架 getSystemInfo 返回的 model 字段支持 iPhone13 系列机型

## v2.21.2 (2021-12-13)

  1. `A` 新增 API 打开视频号主页 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsUserProfile.html>)
  2. `A` 新增 组件 头像昵称填写 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) /[button](<https://developers.weixin.qq.com/miniprogram/dev/component/button.html>)
  3. `U` 更新 API wx.getPerformance 增加渲染和代码注入相关的指标维度 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceEntry.html>)
  4. `U` 更新 组件 getPhoneNumber安全升级 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/getPhoneNumber>)

## v2.21.1 (2021-11-23)

  1. `A` 新增 API 文件系统新增readCompressedFile 接口支持读取指定类型压缩文件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readCompressedFile.html>)
  2. `U` 更新 框架 云托管支持 websocket 连接 [详情](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloudrun/src/development/websocket/miniprogram>)
  3. `U` 更新 组件 优化 picker-view bindchange 事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/3f3bc236a945d0bf3205515b601e960f>)
  4. `U` 更新 组件 无障碍优化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/aria-component.html>)
  5. `U` 更新 组件 优化 image lazy-load 的性能
  6. `U` 更新 组件/API apiCategory对应API限制调整开 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html>)
  7. `F` 修复 框架 WXS callMethod 在内置组件上调用时，错误调用了页面上对应的方法
  8. `F` 修复 框架 wkworker下不指定onMessage无法运行
  9. `F` 修复 API openVideoEditor 返回 size 没对齐 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008c4a5948118cfa6bcbf4f45b000>)
  10. `F` 修复 API mediaRecorder 无法重复创建

## v2.21.0 (2021-11-10)

  1. `A` 新增 API 打开视频号活动接口 [wx.openChannelsEvent](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsEvent.html>)
  2. `U` 更新 框架 小游戏基础库启动优化
  3. `U` 更新 框架 worker里添加USER_DATA_PATH [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.html>)
  4. `U` 更新 框架 开发者工具上，跨分包 require 不再抛出
  5. `U` 更新 API 新增弱网事件 [wx.onNetworkWeakChange](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkWeakChange.html>) / [wx.offNetworkWeakChange](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.offNetworkWeakChange.html>)
  6. `F` 修复 框架 小程序分包内使用插件WASM出错
  7. `F` 修复 框架 小游戏插件 shouldMakeCanvasSecure 权限错误
  8. `F` 修复 框架 捕获 setTimeout 延时执行的函数报错时会抛出异常错误
  9. `F` 修复 框架 切换 tabbar 时可能导致内存泄漏 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006a2d6d809607f336be5f9851000>)

## v2.20.2 (2021-10-28)

  1. `U` 更新 框架 小游戏基础库启动优化
  2. `U` 更新 API worker postMessage 允许开发者传入基础类型数据 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.postMessage.html>)
  3. `U` 更新 API request 支持分块传输 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  4. `F` 修复 API wx.createVKSession 不传参数报错问题

## v2.20.1 (2021-10-18)

  1. `A` 新增 API 小程序安卓端支持启停截屏/录屏接口 wx.setVisualEffectOnCapture [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setVisualEffectOnCapture.html>)
  2. `A` 新增 API 小程序半屏小程序能力 wx.openEmbeddedMiniProgram [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openEmbeddedMiniProgram.html>)
  3. `A` 新增 API getSystemInfo拆分为 [wx.getSystemSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemSetting.html>) / [wx.getAppAuthorizeSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html>) / [wx.getDeviceInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getDeviceInfo.html>) / [wx.getWindowInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getWindowInfo.html>) / [wx.getAppBaseInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppBaseInfo.html>)
  4. `A` 新增 API 支持跳转系统设置 [wx.openSystemBluetoothSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openSystemBluetoothSetting.html>) / [wx.openAppAuthorizeSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openAppAuthorizeSetting.html>)
  5. `A` 新增 API 蓝牙主机模式支持获取 MTU [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEMTU.html>)
  6. `A` 新增 API 支持获取局域网IP地址 wx.getLocalIPAddress [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getLocalIPAddress.html>)
  7. `A` 新增 API 查询蓝牙是否配对 wx.isBluetoothDevicePaired [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.isBluetoothDevicePaired.html>)
  8. `U` 更新 API 服务市场 invokeService 新增代扣参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/service-market/api>)
  9. `U` 更新 API 蓝牙从机模式支持以 Beacon 模式广播 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.startAdvertising.html>)
  10. `U` 更新 API 地图组件叠加热力图、航线图、蜂窝图效果 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.addVisualLayer.html>)
  11. `U` 更新 API 剪切板为空时，小程序粘贴不弹提示
  12. `F` 修复 框架 现网小游戏插件里wasm无法instantiate初始化
  13. `F` 修复 框架 工具上wx.onShow接口不在启动时触发
  14. `F` 修复 框架 工具地图 view 节点无法响应事件
  15. `F` 修复 组件 iOS 上增强 scroll-view scrollTo 部分机型失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004aa2e5ecfc0ffe2bc1e0da51800>)
  16. `F` 修复 框架 工具上 scrollTo 不生效

## v2.20.0 (2021-10-08)

  1. `U` 更新 getLaunchOptions / getEnterOptions 增加 apiCategory 参数

## v2.19.6 (2021-09-24)

  1. `U` 更新 框架 小游戏基础库启动优化
  2. `U` 更新 组件 开发者工具地图支持点聚合

## v2.19.5 (2021-09-13)

  1. `U` 更新 框架 优化小游戏启动性能
  2. `U` 更新 框架 优化iOS11内存占用的问题

## v2.19.4 (2021-09-06)

  1. `U` 更新 API 实时日志支持 [RealtimeLogManager.getCurrentState](<https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.getCurrentState.html>) 获取当前日志体积限制
  2. `F` 修复 组件 安卓 video 切换 src 时不展示播放键

## v2.19.3 (2021-08-26)

  1. `A` 新增 组件 video 播放器增加 DRM 解密 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>)
  2. `U` 更新 框架 小游戏基础库启动优化
  3. `F` 修复 框架 ios小游戏调用跳转接口，返回时触发两次onshow
  4. `F` 修复 框架 工具里 text 组件 user-select 提示 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c2425298908728b9cf69f15e400>)
  5. `F` 修复 组件 auto-fill 高度过高
  6. `F` 修复 API 工具上 tcp 接口无法收到 error 事件

## v2.19.2 (2021-08-10)

  1. `U` 更新 API 视频号开放打开视频详情页接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsActivity.html>)
  2. `U` 更新 插件 支持文件系统 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.access.html>)
  3. `F` 修复 框架 virtualHost 的组件节点无法被 selectComponent 和 getRelationNodes 选中
  4. `F` 修复 框架 wx.getLocation 总是获取缓存值
  5. `F` 修复 框架 修改 js 热重载 data 重置为初始值

## v2.19.1 (2021-08-03)

  1. `A` 新增 API 支持http-dns能力 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/ability/HTTPDNS>)
  2. `U` 更新 API chooseAddress 四级地址选择 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html>)
  3. `U` 更新 API 插件中使用 TCP 接口时按插件的域名白名单校验 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/wx.createTCPSocket.html>)
  4. `F` 修复 组件 小程序跳小程序防止重复弹窗

## v2.19.0 (2021-07-23)

  1. `A` 新增 API 预约视频号直播、查询视频号预告信息接口 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/channels-live>)
  2. `A` 新增 API 车牌接口 wx.chooseLicensePlate [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/license-plate/wx.chooseLicensePlate.html>)
  3. `A` 新增 API 支持小程序打开微信客服 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/service-chat/wx.openCustomerServiceChat.html>)
  4. `F` 修复 组件 input value/placeholder 在工具端某些场景不显示的问题

## v2.18.1 (2021-07-15)

  1. `A` 新增 框架 小程序/小游戏插件支持WXWebAssembly [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/performance/wasm>)
  2. `U` 更新 组件 小程序跳转小程序支持 short-link [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html>)
  3. `U` 更新 组件 关注公众号组件场景值逻辑修改
  4. `U` 更新 API 云托管 api 支持传服务名作为参数
  5. `U` 更新 插件 小程序/小游戏插件支持Worker [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.html>)
  6. `U` 更新 插件 支持 navigateToMiniprogram [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html>)
  7. `F` 修复 框架 在 Behavior 中使用 observers 时可能导致 vdSync 错误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00022e818c0b10b6fe5c5030c5b000>)
  8. `F` 修复 框架 开发版小程序webview组件能力限制对齐正式版
  9. `F` 修复 框架 从独立分包启动并进入主包，退后台后 App.onShow 不触发
  10. `F` 修复 组件 video 全屏下转屏问题修复
  11. `F` 修复 组件 page-container z-index 设置无效
  12. `F` 修复 组件 page-container 打开时所在页面会回到顶部 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ca0ca3c496803b7db22fa85bc00>)

## v2.18.0 (2021-06-23)

  1. `A` 新增 API 支持 [TCP socket](<https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/wx.createTCPSocket.html>) 接口
  2. `U` 更新 API [wx.getGroupEnterInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/group/wx.getGroupEnterInfo.html>) 新增支持在群聊小程序消息卡片、群待办小程序启动时使用
  3. `U` 更新 API getLaunchOptionsSync & getEnterOptionsSync 新增 chatType 字段用于聊天场景打开小程序区分聊天类型
  4. `U` 更新 API 支持订阅消息语音提醒 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/subscribe-message>)
  5. `U` 更新 API 扩展 UDP 接口，增加 [setTTL](<https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.setTTL.html>) 接口
  6. `U` 更新 API [wx.createInnerAudioContext](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html>) 支持使用 WebAudio 作为底层音频驱动
  7. `F` 修复 框架 暗黑模式下，input 样式会被 color 属性值覆盖
  8. `F` 修复 框架 修复 App.onShow 的参数 encode 问题

## v2.17.3 (2021-06-02)

  1. `A` 新增 框架 小程序支持异步分包 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/subpackages/async>)
  2. `A` 新增 API 文件系统新增 [readZipEntry](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readZipEntry.html>) 接口
  3. `U` 更新 框架 自定义组件用时注入 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/ability/lazyload>)
  4. `U` 更新 框架 小程序支持安全网络通道 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/wx.getUserCryptoManager.html>)
  5. `U` 更新 API getSystemInfo 优化
  6. `U` 更新 API [showModal](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html>) 支持带输入框
  7. `U` 更新 插件 插件中调用服务市场接口时改成使用插件方资源而不是宿主方
  8. `F` 修复 框架 发生过路由后 App.onShow 参数被 decode
  9. `F` 修复 框架 修复 GeneratorFunction [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00080c83528300fe011a6ed2051400>)
  10. `F` 修复 组件 map bindmarkertap返回的结构对齐 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a602bec0fd04892cbf195056800>)
  11. `F` 修复 组件 工具端有时候 video 不会自动暂停
  12. `F` 修复 组件 开发工具 Webview 加载出错后所有页面加载均触发 error 事件
  13. `F` 修复 组件 iOS video组件播放m3u8视频会过度曝光
  14. `F` 修复 组件 iOS小程序输入组件键盘消失 依然可以继续输入

## v2.17.0 (2021-04-28)

  1. `U` 更新 框架 频繁调用 [getLocation](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html>) 提示
  2. `U` 更新 组件 对 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 的截屏按钮、后台播放按钮 等添加无障碍支持
  3. `F` 修复 框架 canvasToTempFilePath在canvas不可见时导出失败

## v2.16.1 (2021-04-06)

  1. `A` 新增 API 小游戏新增接口 [wx.getUserCloudStorageKeys](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorageKeys.html>)

  2. `U` 更新 框架 小游戏开放扫描二维码接口 [wx.scanCode](<https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html>)

  3. `U` 更新 框架 插件调用收货地址、发票抬头、发票无需功能页确认

  4. `U` 更新 组件 [picker-view](<https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html>) 临界时没触发 change

  5. `U` 更新 组件 [navigator](<https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html>) 跳转失败时抛出 fail 事件

  6. `U` 更新 组件 部分弹窗增加返回拦截

  7. `U` 更新 API 地图设置定位点图标

  8. `U` 更新 API decoder & recorder 抛出错误

  9. `U` 更新 API [getOpenerEventChannel](<https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page>) 返回错误

  10. `U` 更新 API [OffscreenCanvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.html>) 支持 2d context

  11. `U` 更新 API 文件系统新增FD相关接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.open.html>)

  12. `U` 更新 API 音频文件支持通过听筒播放 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html>)

  13. `U` 更新 API [chooseMedia](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html>) 支持混选图片视频

  14. `U` 更新 API 提供 WiFi/4G 等信号强弱的接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html>)

  15. `U` 更新 框架 支持 Promise.finally [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/runtime/js-support>)

  16. `F` 修复 框架 在横屏下弹出 PC 微信登录界面后状态栏错位 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004a26567cc50e41368c378e56c00>)

  17. `F` 修复 组件 特定条件下 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) safe-area 失效

  18. `F` 修复 组件 输入框在某些场景没有触发 input 事件

  19. `F` 修复 组件 安卓同层 textarea hold keyboard 键盘收起问题

## v2.16.0 (2021-03-03)

  1. `A` 新增 API ugc 选择地理位置 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.choosePoi.html>)
  2. `A` 新增 API [wx.getUserProfile](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html>) 接口
  3. `A` 新增 组件 页面容器组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html>)
  4. `U` 更新 API [wx.login](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html>)默认可获取unionID
  5. `U` 更新 API 后台地理位置授权优化
  6. `U` 更新 API 开放 [wx.chooseContact](<https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.chooseContact.html>)
  7. `U` 更新 API [wx.shareToWeRun](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.shareToWeRun.html>) 分享数据到微信运动
  8. `U` 更新 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 支持 confirm-hold
  9. `U` 更新 插件 支持实时日志 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.tag.html>)
  10. `F` 修复 框架 vConsole 在自定义 tabBar 下被遮挡
  11. `F` 修复 API getOpenerEventChannel 返回错误
  12. `F` 修复 组件 camera onCameraInitDone 事件偶现丢失问题

## v2.15.0 (2021-02-05)

  1. `U` 更新 框架 群待办打开参数增加shareTicket

  2. `U` 更新 组件 滚动驱动动画支持选中自定义组件里的 scroll-view [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00008e64470158f34a7b89c2651c00>)

  3. `U` 更新 组件 live-pusher 支持 sendMessage 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.sendMessage.html>)

  4. `U` 更新 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 同层补齐 hold-keyboard 属性

  5. `U` 更新 组件 input&textarea 同步focus状态

  6. `U` 更新 组件 webview 组件切后台静音

  7. `U` 更新 组件 安卓 [voip-room](<https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html>) 组件支持同层渲染

  8. `U` 更新 组件 video decoder 增加 wait 方法

  9. `U` 更新 组件 input / textarea 支持自定义键盘工具栏

  10. `U` 更新 API 支持添加日程到系统日历接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/calendar/wx.addPhoneCalendar.html>)

  11. `U` 更新 API video decoder start 接口新增参数忽略音视频轨道

  12. `U` 更新 API [wx.getSystemInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>) 提供是否打开调试的状态位

  13. `U` 更新 API 支持加解密接口 getRandomValues [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/crypto/wx.getRandomValues.html>)

  14. `U` 更新 插件 支持 getMenuButtonBoundingClientRect [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html>)

  15. `U` 更新 插件 支持一批接口

     * [wx.startLocalServiceDiscovery](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.startLocalServiceDiscovery.html>)
     * [wx.stopLocalServiceDiscovery](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.stopLocalServiceDiscovery.html>)
     * [wx.onLocalServiceFound](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceFound.html>)
     * [wx.offLocalServiceFound](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceFound.html>)
     * [wx.onLocalServiceLost](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceLost.html>)
     * [wx.offLocalServiceLost](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceLost.html>)
     * [wx.onLocalServiceDiscoveryStop](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceDiscoveryStop.html>)
     * [wx.offLocalServiceDiscoveryStop](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceDiscoveryStop.html>)
     * [wx.onLocalServiceResolveFail](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceResolveFail.html>)
     * [wx.offLocalServiceResolveFail](<https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceResolveFail.html>)
     * [wx.loadFontFace](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html>)
     * [wx.getBatteryInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html>)
     * [wx.getBatteryInfoSync](<https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html>)
     * [wx.getAvailableAudioSources](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html>)
     * [wx.onAudioInterruptionBegin](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html>)
     * [wx.offAudioInterruptionBegin](<https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html>)
     * [wx.onAudioInterruptionEnd](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html>)
     * [wx.offAudioInterruptionEnd](<https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html>)
     * [wx.previewMedia](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html>)
     * [wx.openVideoEditor](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.openVideoEditor.html>)
     * [wx.saveFileToDisk](<https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFileToDisk.html>)
     * [wx.openDocument](<https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html>)
     * [wx.getMenuButtonBoundingClientRect](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html>)
  16. `F` 修复 组件 同层失败优化

  17. `F` 修复 组件 iOS canvas 2d 偶现不渲染的问题

  18. `F` 修复 插件 wx.getAccountInfoSync 缺失 envVersion

## v2.14.4 (2021-01-11)

  1. `A` 新增 插件 支持 `wx.authorizeForMiniProgram`((wx.authorizeForMiniProgram))
  2. `U` 更新 插件 网络接口支持局域网 IP
  3. `U` 更新 框架 小游戏支持实时日志 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getRealtimeLogManager.html>)
  4. `U` 更新 框架 小游戏跳转能力封禁需要增加提示
  5. `U` 更新 框架 【插件】功能页暗黑模式
  6. `U` 更新 组件 open-data 在插件可用
  7. `U` 更新 组件 如果多个 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) mode 都为 RTC，退后台应该均可浮窗播放
  8. `U` 更新 组件 通话场景下多个 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 均可出浮窗播放
  9. `U` 更新 API OffscreenCanvas 支持 2d context
  10. `F` 修复 框架 安卓小游戏App转发消息卡片热启动缺少query参数
  11. `F` 修复 组件 PC/MAC 下 CanvasContext.drawImage 失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004e68e6d0948adee5bed9c656000>)
  12. `F` 修复 组件 picker-view 直接点击不触发 pickend 事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00048840ea0368bb4d2a94dc351800>)
  13. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 在 update 之后无法自动转屏
  14. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) muted 状态错误
  15. `F` 修复 组件 安卓 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 组件 blur 时输出了多余 input 事件
  16. `F` 修复 组件 movable-view 部分机型缩放后无法拖动
  17. `F` 修复 组件 安卓 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 点击收起键盘按钮没有 blur
  18. `F` 修复 组件 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) 横向滑动问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c04298507489a094b042c956400>)
  19. `F` 修复 组件 安卓同层多个 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 之间切换未触发 focus 事件

## v2.14.3 (2021-01-05)

  1. `U` 更新 框架 支持直接分享图片给好友或收藏 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareImageMenu.html>)
  2. `U` 更新 框架 素材打开小程序 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/material/support_material>)
  3. `U` 更新 API 开放复制链接 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.onCopyUrl.html>)

## v2.14.1 (2020-12-05)

  1. `U` 更新 框架 工具地图优化
  2. `U` 更新 框架 小程序跳小程序弹窗优化
  3. `U` 更新 插件 插件新增发票抬头功能页、发票功能页 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html>)
  4. `U` 更新 插件 插件模式下 [地图](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 支持 subkey
  5. `U` 更新 插件 支持局域网 ip 网络请求
  6. `U` 更新 API [MediaContainer](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaTrack.html>) 补充接口
  7. `U` 更新 API [getSystemInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>) 增加locationReducedAccuracy参数
  8. `U` 更新 API [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) & [live-pusher](<https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html>) bindnetstatus 暴露缓冲区数据
  9. `U` 更新 API [showToast](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html>) 支持error
  10. `U` 更新 API 提供异步getSystemInfo接口
  11. `U` 更新 API PC 小程序接力
  12. `U` 更新 组件 iOS 同层 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 特定情况下未正确显示
  13. `U` 更新 组件 视频/直播组件支持后台播放音频UI优化
  14. `F` 修复 框架 【按需加载】iOS 白屏后无法恢复
  15. `F` 修复 组件 android video 播放结束拖动滚动条会自动播放且播放进度未更新
  16. `F` 修复 组件 iOS 14 下 scrollIntoView 偶现不可滚动
  17. `F` 修复 组件 PC. editor 组件中插入的图片无法拖动修改大小

## v2.14.0 (2020-10-23)

  1. `U` 更新 框架 requirePlugin 支持以 AppId 作为参数 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/plugin/using>)
  2. `U` 更新 框架 iOS 移除最大网络超时时间限制：wx.request/wx.downloadFile/wx.uploadFile/wx.connectSocket
  3. `U` 更新 API 地图能力优化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)
  4. `U` 更新 API 部分安卓系统（如MIUI）读取剪切板会有系统提示的兼容
  5. `U` 更新 API 小游戏新增接口 [wx.getUserCloudStorageKeys](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getUserCloudStorageKeys.html>)
  6. `U` 更新 API PC 小程序接力
  7. `U` 更新 API 插件中 getSetting 支持返回小程序的授权信息 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeDeviceMessage.html>)
  8. `U` 更新 API 在支持的客户端上 getSystemInfo 变为异步返回 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>)
  9. `F` 修复 组件 安卓 keyboard height 事件未正确触发
  10. `F` 修复 组件 iOS 小窗 pop 模式下未触发 leavepictureinpicture 事件
  11. `F` 修复 API iOS 下 onTabItemTap 改为点击后触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000646fbf9c3b0d660bae531e56800>)
  12. `F` 修复 API addPhoneContact在安卓上的保存和取消保存返回值一样 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004cae98e049881a668afd2051c00>)
  13. `F` 修复 API iOS 12.2 系统调用 wx.openDocument 打开 pdf 无反应 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000eea3ae8f80b78f58c38cf51800>)
  14. `F` 修复 API iOS上openDocument预览xls显示错误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00002e13244bf86b7b0876f4a56000>)

## v2.13.2 (2020-10-19)

  1. `U` 更新 框架 小程序私密消息分享到外部群需禁用二次转发
  2. `U` 更新 框架 小游戏开放 [getEnterOptionsSync](<https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html>) 接口
  3. `U` 更新 框架 小游戏录屏分享支持传入独立分包路径
  4. `U` 更新 组件 polygon 支持调整压盖关系
  5. `U` 修复 框架 loadSubpackage 在 iOS 下不触发错误回调
  6. `U` 修复 组件 scroll-view pagingEnabled 动态修改列表后不生效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000640acab87702e89fa07b6351400>)
  7. `U` 修复 组件 安卓同层 textarea 自定义 lineHeight 后 autoHeight 表现不符合预期
  8. `U` 修复 组件 安卓同层 textarea chooseImage 后无法 focus 到 input 上
  9. `U` 修复 组件 video组件ios滑动页面播放按钮消失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008a45020c930eb1e5a051bd51400>)

## v2.13.1 (2020-09-28)

  1. `U` 更新 组件 live 组件在通话场景下退后台默认出浮窗
  2. `U` 更新 组件 weui 扩展库更新
  3. `U` 更新 框架 小游戏 wx.getLaunchOptionsSync() 增加 lanDebugInfo 字段 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html>)
  4. `F` 修复 组件 工具地图隐藏后显示无法加载
  5. `F` 修复 组件 工具地图内元素无法响应事件
  6. `F` 修复 组件 安卓同层 textarea 分享朋友圈不应可编辑
  7. `F` 修复 API getClipboardData 会触发两次 complete 回调的问题

## v2.13.0 (2020-09-07)

  1. `A` 新增 框架 小程序私密消息支持 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/share/private-message>)
  2. `A` 新增 API 检测手机开启视觉无障碍功能 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/accessibility/wx.checkIsOpenAccessibility.html>)
  3. `U` 更新 API 震动接口增加强度参数 [wx.vibrateShort](<https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html>)
  4. `U` 更新 API [地图](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) scale 支持小数
  5. `U` 更新 API translateMarker 支持同时旋转和平移
  6. `U` 更新 API [地图](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)支持点聚合 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)
  7. `U` 更新 API [地图](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)平滑动画
  8. `U` 更新 API iOS 支持保存 gif & webp 到相册
  9. `U` 更新 API iOS 蓝牙从机增加特征值订阅关系
  10. `U` 更新 框架 iOS worker 性能优化
  11. `U` 更新 框架 小游戏新增 mDNS 接口
  12. `U` 更新 框架 提供获取 deviceOrientation 的接口
  13. `U` 更新 组件 label 支持 width & height
  14. `U` 更新 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 组件增加选择键盘功能
  15. `U` 更新 组件 [地图](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)获取定位点点击事件
  16. `U` 更新 组件 [地图](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)指定最大/最小缩放级别
  17. `U` 更新 组件 canvas 2d 支持自定义字体 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html>)
  18. `U` 更新 组件 canvas 2d 新增 getTransform 接口 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e24bb650f38608d0af6b2d51800>)
  19. `U` 更新 组件 [地图](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)支持彩虹线
  20. `U` 更新 组件 [地图](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) regionChange 事件返回 scale [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000843e74c1101901f8fee825b000>)
  21. `U` 更新 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 和 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 支持后台播放
  22. `U` 更新 组件 picker内容过长时支持完整显示 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00000ab0a505f0959db83a20651800>)
  23. `U` 更新 组件 textarea右下角的按钮可以像input一样定制 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004624a0688e8c69c48592cc56400>)
  24. `F` 修复 框架 iOS小游戏销毁camera再创建时获取不到帧数据
  25. `F` 修复 框架 iOS小游戏2d渲染抗锯齿模式下toTempFilePath截屏空白
  26. `F` 修复 组件 安卓 textarea 同层下 bind:input 没触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c4e39fe41907efada5cb7851c00>)
  27. `F` 修复 组件 android video 播放结束拖动滚动条会自动播放且播放进度未更新
  28. `F` 修复 组件 从分享卡片进入小窗后 switchTab 失效
  29. `F` 修复 组件 安卓下键盘弹起后露出上一页面的内容
  30. `F` 修复 API 安卓一些特定机型调 connectWifi 接口大概率出现 12003 错误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000062e5de88c8f27458c6b335bc00>)

## v2.12.2 (2020-08-20)

  1. `U` 更新 框架 允许小程序为插件页面指定 generics 实现
  2. `U` 更新 框架 群工具栏打开小程序允许转发到其他会话
  3. `U` 更新 框架 wxs 点击事件二次转发也认为是点击回调
  4. `U` 更新 插件 插件模式下地图支持 subkey
  5. `F` 修复 组件 ios swiper组件 指示点被swiper-item覆盖 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00080425ff45509ef69a6ae705d000>)
  6. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 在 slots 内 fixed 定位失效
  7. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 组件ios滑动页面播放按钮消失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008a45020c930eb1e5a051bd51400>)
  8. `F` 修复 API canvasToTempFilePath在canvas不可见时导出失败

## v2.12.1 (2020-08-04)

  1. `U` 更新 框架 小程序调用getClipboardData时会在屏幕中间弹出toast提示用户
  2. `U` 更新 框架 开发者工具支持小游戏朋友圈预览页 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/open-ability/share-timeline_game>)
  3. `U` 更新 框架 预下载分包支持主包
  4. `U` 更新 框架 在 [page-meta](<https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html>) 中添加 root-background-color 属性
  5. `U` 更新 框架 小游戏独立分包启动
  6. `U` 更新 框架 小游戏分享朋友圈图片支持传入canvas截图本地路径
  7. `U` 更新 组件 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) 自定义下拉刷新支持动态修改 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) 高度
  8. `U` 更新 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) next-margin 处理最后一个 swiper-item 避免留白
  9. `U` 更新 组件 wxs 新增 animate 接口
  10. `U` 更新 组件 开发工具 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) / [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 的 input 事件对齐移动端事件
  11. `U` 更新 组件 iOS 下 text selectable 无法选中文字
  12. `U` 更新 组件 提供选项设置 touch 事件的 passive 值
  13. `U` 更新 组件 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) 支持传递 selector 作为 scrollIntoView 的目标节点
  14. `U` 更新 组件 pc 小程序 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 支持单击 seek
  15. `U` 更新 组件 cover-image android和ios端显示不对齐
  16. `U` 更新 API video decoder start 支持直接传入网络路径
  17. `U` 更新 API 小游戏优化网络音频中的 Promise 实现
  18. `U` 更新 API NFC 读写接口 onDiscovered 回调新增 id 属性
  19. `U` 更新 API video decoder 接口支持返回 promise
  20. `U` 更新 API wx.getPerformance 工具侧补齐若干数据
  21. `F` 修复 组件 iOS 特定机型同层组件出现错位
  22. `F` 修复 组件 安卓input组件输入丢失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000626c13d48b897daaa8b7b356800>)
  23. `F` 修复 组件 webgl 安卓同层不透明背景失效
  24. `F` 修复 组件 video 在某些情况下出现两个播放按钮
  25. `F` 修复 组件 安卓 liveplayer 修改节点自动退出全屏
  26. `F` 修复 组件 播放器小窗在插件页 switchTab 回首页无法响应路由 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004c615bf461838247ae877051c00>)
  27. `F` 修复 组件 scroll-view 侧滑返回手势冲突
  28. `F` 修复 组件 iOS scrollview 偶现不可见
  29. `F` 修复 组件 video组件ios滑动页面播放按钮消失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008a45020c930eb1e5a051bd51400>)

## v2.12.0 (2020-07-01)

  1. `A` 新增 API 更新微信接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.updateWeChatApp.html>)
  2. `A` 新增 API 安卓蓝牙配对接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.makeBluetoothPair.html>)
  3. `A` 新增 API 支持调起客户端视频编辑界面 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.openVideoEditor.html>)
  4. `A` 新增 组件 地图个性化图层 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)
  5. `A` 新增 云开发 云开发数据库 explain api [详情](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/guide/database/backup>)
  6. `U` 更新 框架 安卓小游戏video onProgress事件增加duration参数
  7. `U` 更新 框架 支持双向绑定 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/view/two-way-bindings>)
  8. `U` 更新 组件 在 page-meta 中添加横屏参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html>)
  9. `U` 更新 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) 支持双指滑动
  10. `U` 更新 组件 [live-pusher](<https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html>) 新增滤镜功能
  11. `U` 更新 组件 Camera scancode 模式返回扫描识别区域坐标
  12. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)组件利用cover-view来自定义marker
  13. `U` 更新 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 组件新增 seekcomplete 事件
  14. `U` 更新 组件 picker 组件国际化
  15. `U` 更新 框架 视频截屏 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 接口
  16. `U` 更新 组件 video组件 IOS支持AirPlay
  17. `U` 更新 组件 插件内 liveplayer 无法使用 select query 操作
  18. `U` 更新 组件 button 下的 feedback 页面应为一级页面 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html>)
  19. `U` 更新 API 分享支持 promise 返回 [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page>)
  20. `U` 更新 API 安卓 connectWifi 增加 maunal 参数，调整系统设置页 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html>)
  21. `U` 更新 API 室内高精度定位返回步数辅助判断 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html>)
  22. `U` 更新 API previewMedia 混合预览图片视频 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html>)
  23. `U` 更新 API WifiInfo 里增加 wifi 频段的信息 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ae0a6e80820a969d7235335b000>)
  24. `F` 修复 框架 自定义下拉刷新顶部锁定失效问题
  25. `F` 修复 框架 跳入不存在的插件的页面时不会报错
  26. `F` 修复 组件 快速填写输入框事件触发错误
  27. `F` 修复 组件 横向 scroll-view 在windows 无法移动 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000eeeadef8a809e347a31b5156800>)
  28. `F` 修复 组件 input placeholder的字体在`<scroll-view/>`拖动是会上下移动 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006e4d21ec9d858ee5a2dad156800>)
  29. `F` 修复 组件 开发者工具小游戏video缺少onVideoProgress事件
  30. `F` 修复 组件 liveplayer 子节点进入全屏后被 hidden
  31. `F` 修复 组件 Android 下 canvas 2d 无法加载多张图片
  32. `F` 修复 组件 textarea 修改样式失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00084ecf4b0028b14f08828c356000>)
  33. `F` 修复 组件 picker 限制问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00028266680350298398ca65451800>)
  34. `F` 修复 组件 Android WebGL 部分手机透明背景不生效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006c00d4d8320c6e4a9f352d5bc00>)
  35. `F` 修复 组件 同时使用超过50个云文件id放到img组件展示会失败 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000080e3084258df07f998b4956000>)
  36. `F` 修复 组件 video组件第一次播放结束后，播放按钮不再显示，无法重播了 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e8451dbc5e0f2430a27ad551800>)
  37. `F` 修复 组件 live-pusher 同层特定路径下黑屏 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00008eb5b6c748fdbb2ac86b756c00>)
  38. `F` 修复 API 重复监听音频事件导致的卡死问题
  39. `F` 修复 API media recorder 安卓下不触发 timeupdate 事件
  40. `F` 修复 API mac 下 showModal 取消时 cancel 为 false
  41. `F` 修复 API InnerAudio play 时会卡顿
  42. `F` 修复 API innerAudioContext startTime 设置无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000aaabd40c8280f012aa2b8251400>)
  43. `F` 修复 API FileSystemManager.accessSync 判断文件夹在模拟器上正常，真机失败 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000800564849072377903f675b400>)
  44. `F` 修复 API scanCode结束后触发onShow顺序问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00066ce2b80ec0c9bd669e75151800>)

## v2.11.2 (2020-06-08)

  1. `A` 新增 API [NFC](<https://developers.weixin.qq.com/minigame/dev/guide/framework/device/nfc>) 支持读写 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006cc66fa43e0010168ba18b5b800>)
  2. `U` 更新 框架 背景音频支持播放过程中设置 playbackRate
  3. `U` 更新 框架 为 WXS 事件添加 getComputedStyle [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000eea62404aa034412ac5c4a5b000>)
  4. `U` 更新 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 组件支持无障碍
  5. `U` 更新 组件 开发者工具下 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) m3u8 播放失败时抛出 error 事件
  6. `U` 更新 组件 [onCameraFrame](<https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.onCameraFrame.html>) iOS 下返回页面后不执行 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00002e35e0cc882e68a972def56000>)
  7. `U` 更新 组件 [picker](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>) 未指定value时 columnchange不触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a22d1e1cb180ff93a14b4751000>)
  8. `U` 更新 API 小游戏增加 wx.getAccountInfoSync 接口支持
  9. `F` 修复 框架 小游戏创建视频underGameView属性在工具上失效
  10. `F` 修复 框架 使 promise 中的错误能反馈在错误处理函数中
  11. `F` 修复 框架 小游戏 wx.onShareAppMessage 接口转发不传 title 没有默认用小游戏名称
  12. `F` 修复 组件 开发者工具下 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 无法拖动进度
  13. `F` 修复 框架 小游戏默认分享截图异常
  14. `F` 修复 插件 块互相引用 Maximum call stack size exceeded [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ecef1f483c0519799eac2956c00>)
  15. `F` 修复 组件 页面中的 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 在navigateTo下个页面还播放声音 auto-pause-if-navigate [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c68f4ef8bb8c2484a2b70d5d000>)
  16. `F` 修复 组件 iOS input 快速填写时会错误弹出键盘
  17. `F` 修复 组件 iOS 下 open-data 为 userAvatarUrl 长按触发 3d touch [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000802da3982584c794ae6e3d56000>)
  18. `F` 修复 组件 video组件第一次播放结束后，播放按钮不再显示，无法重播了 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e8451dbc5e0f2430a27ad551800>)
  19. `F` 修复 组件 swiper item 改变个数白屏 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00004479754680256999b004255400>)
  20. `F` 修复 组件 swiper 内嵌 textarea 在工具下卡在中间 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008c8001c879861f119b62265b000>)

## v2.11.1 (2020-05-21)

  1. `A` 新增 框架 新增 matchMedia 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html>)
  2. `U` 更新 API 【插件】支持 [UDPSocket](<https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/wx.createUDPSocket.html>)
  3. `U` 更新 框架 小游戏 shareToFriend 接口回调缺失问题
  4. `U` 更新 框架 开发者工具下自定义 tabBar 位置有误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006e84b5ecbf0a0683a21fe85d800>)
  5. `U` 更新 框架 插件支持 requireMiniProgram
  6. `U` 更新 框架 云开发增加 CDN 辅助方法帮助大数据云函数调用
  7. `U` 更新 框架 小程序强制更新
  8. `U` 更新 框架 使 promise 中的错误能反馈在错误处理函数中
  9. `U` 更新 框架 初始渲染缓存
  10. `U` 更新 组件 iOS 下自定义 tabBar 切换 tab 时错位 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006484c8341c8c8803a260b756400>)
  11. `U` 更新 组件 多个 scroll-view 同时下拉刷新动画冲突 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e00673183207d374a6a05256000>)
  12. `U` 更新 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 锁屏按钮优化
  13. `U` 更新 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) 容器设置 css 动画报错 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008243a6149c0ef204afcee551000>)
  14. `U` 更新 组件 优化 iOS 下 scroll-view scroll-anchoring 的性能
  15. `U` 更新 组件 插件支持 [wx.getPerformance](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.getPerformance.html>) 接口
  16. `U` 更新 框架 组件中使用云文件id时自动缓存
  17. `U` 更新 API 【插件】支持 [wx.getVideoInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.getVideoInfo.html>) 和 [wx.compressVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.compressVideo.html>)
  18. `U` 更新 框架 插件内允许服务市场调用
  19. `U` 更新 API 小游戏支持videoDecoder [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.html>)
  20. `U` 更新 API media recorder / decoder 接口时序问题
  21. `U` 更新 框架 服务市场协议更新增加 requestId
  22. `F` 修复 框架 链接中包含rpx被误转换
  23. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 在 iPad 下控件错位
  24. `F` 修复 组件 iOS [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 全屏时控件显示不全
  25. `F` 修复 组件 iOS [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) type 无法动态修改
  26. `F` 修复 组件 自定义下拉刷新在原点无法横向滑动
  27. `F` 修复 组件 iOS 11 下 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 同层偶现错位
  28. `F` 修复 框架 【自定义组件】尝试对已经删除的自定义组件调用动画接口会产生报错
  29. `F` 修复 框架 同时使用超过50个云文件id放到img组件展示会失败 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000080e3084258df07f998b4956000>)
  30. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 封装为插件后，小程序调用requestFullScreen后，安卓无法进入全屏 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00084cdf1e4108b529c9023eb55400>)
  31. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 切换回来后不能继续播放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ca24f0248383a5448c27165d000>)
  32. `F` 修复 API [wx.previewImage](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html>) 接口传入 base64 在 iOS 13.4 会 crash

## v2.11.0 (2020-04-24)

  1. `A` 新增 组件 支持获取 video 的帧数据 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/MediaRecorder.requestFrame.html>)
  2. `A` 新增 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 横屏时自动全屏
  3. `A` 新增 API 蓝牙支持从机模式 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.onBLEPeripheralConnectionStateChanged.html>)
  4. `A` 新增 API [wx.openDocument](<https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html>) 增加菜单功能
  5. `A` 新增 API [wx.setBLEMTU](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.setBLEMTU.html>)安卓蓝牙提供改变 MTU 大小的接口 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002a29ba689489d33b78f86351c00>)
  6. `A` 新增 API [wx.compressVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.compressVideo.html>) 提供压缩视频的接口 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000cccafe54710b275d803d755a400>)
  7. `A` 新增 API 蓝牙提供查询RSSI的接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceRSSI.html>)
  8. `A` 新增 API 提供performance性能对象指标 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.getPerformance.html>)
  9. `U` 更新 框架 音频和背景音频支持设置 playbackRate [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000e619a688084e86f7a95ca5b800>)
  10. `U` 更新 框架 picker支持 headerText [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>)
  11. `F` 修复 框架 iOS 小游戏录屏重影
  12. `U` 更新 框架 小游戏video层级可设置
  13. `U` 更新 框架 允许小程序根据微信字体设置来调整字体大小 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html>)
  14. `U` 更新 组件 canvas 2d canvasToTempFilePath 接口支持默认参数 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html>)
  15. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 组件callout位置需要可调整
  16. `U` 更新 组件 开发者工具下 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 组件 markertap 事件应在 detail 返回 markerId
  17. `U` 更新 组件 在 [rich-text](<https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html>) 节点中添加 addGlobalClass 支持 [详情](<>)
  18. `U` 更新 组件 [live-pusher](<https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html>) 暂停行为在 iOS, Android 下未对齐
  19. `U` 更新 组件 Canvas 2d 接口扩展
  20. `U` 更新 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) 支持接收 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 的纹理对象
  21. `U` 更新 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 和 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 支持小窗播放
  22. `F` 修复 框架 marker 删除时 translateMapMarker 回调未执行
  23. `F` 修复 组件 iOS video 同层特定路径下无法展开全屏
  24. `F` 修复 组件 iOS [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 同层下设置 autoheight 时换行高度不对
  25. `F` 修复 组件 安卓 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 在fixed在底部，上推会多一行或少一行 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00068c3b808118b3f058fbb6a5bc00>)
  26. `F` 修复 组件 iOS平台 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) 滚动时会导致动画暂停问题
  27. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 和 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 进入后台静音策略调整
  28. `F` 修复 组件 退出小程序后 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 还能继续播放
  29. `F` 修复 组件 Canvas 2d 中文和英数字不能在竖直方向对齐
  30. `F` 修复 组件 Android WebGL 运行 tensorflow.js 计算结果不正确 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000464bf7949a8a522b90844a57800>)
  31. `F` 修复 API iOS 13 蓝牙授权状态无法区分 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000a264364fe001a1195e2ea51c00>)
  32. `F` 修复 API 小程序 offscreen canvas 不应随页面销毁
  33. `F` 修复 API navigateBack 的 success 回调 getCurrentPages() 表现不一致 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00020c6c2141c8a753390b54751400>)

## v2.10.4 (2020-03-24)

  1. `U` 更新 组件 新版 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) 使用默认 destWidth / destHeight
  2. `U` 更新 框架 群待办小程序 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html>)
  3. `U` 更新 组件 windows 微信支持 [live-pusher](<https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html>)
  4. `U` 更新 框架 小程序支持 wx.setWindowSize [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.setWindowSize.html>)
  5. `U` 更新 API 小游戏开放数据域扩展，支持音频接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html>)
  6. `F` 修复 框架 eventChannel once 绑定有时失效
  7. `F` 修复 框架 【插件功能页】功能页独立分包下宿主使用自己的插件无法收到回调
  8. `F` 修复 组件 安卓 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 投屏状态没有居中显示
  9. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 暂停状态下拖动进度条 loading 不消失
  10. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 的 ended 事件触发两次 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00006205ee0ec0899ef93cf0d51800>)
  11. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 模拟小窗横屏转竖屏时失效
  12. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 封装为插件后，小程序调用requestFullScreen后，安卓无法进入全屏 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00084cdf1e4108b529c9023eb55400>)
  13. `F` 修复 组件 iOS [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 同层获取 value 及 focus 问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000e2104acb987de6f95d2ae5d800>)
  14. `F` 修复 组件 iOS [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 组件同层下 blur 之后错位
  15. `F` 修复 组件 自定义 tabBar 滚动页面时偶现上移 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00022676cc0dc044fb0a2c95054c00>)
  16. `F` 修复 组件 自定义下拉刷新卡住及事件问题修复 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c0adfff4748eb270ac44df5c000>)

## v2.10.3 (2020-03-06)

  1. `U` 更新 框架 小游戏-支付限额 [详情](<https://developers.weixin.qq.com/minigame/dev/api/midas-payment/wx.requestMidasPaymentGameItem.html>)
  2. `U` 更新 框架 使被自定义组件封装的 button 也能触发 form-submit
  3. `U` 更新 框架 【插件】在插件中全量放开 openSetting [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html>)
  4. `U` 更新 框架 云开发云函数调用增加报错辅助信息
  5. `U` 更新 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 在 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) 里不能拖动底部进度条
  6. `U` 更新 组件 [image](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html>) 标签支持 heightFix
  7. `A` 更新 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 支持小窗
  8. `U` 更新 API [getImageInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html>) 返回具体的错误信息
  9. `U` 更新 API [wx.setTabBarItem](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html>) 使用相对路径时报错提示
  10. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 在同层与非同层切换时 loading 可能消失不了
  11. `F` 修复 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) 工具 canvas 2d 更新时序问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006c4360c86a0f775f960c295b800>)
  12. `F` 修复 框架 滚动驱动动画在 2.10.1 开始失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00002ee00ec8d8988bf96fdb15fc00>)
  13. `F` 修复 API 修复 iOS/Android 两端对 readFile 接口 position 参数容错

## v2.10.2 (2020-02-20)

  1. `A` 新增 API [EditorContext.getSelectionText](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getSelectionText.html>) 支持获取选区文本 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00066037888ed80539e92b02c56400>)
  2. `U` 更新 API [wx.getAccountInfoSync](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html>) 支持获取小程序的字符串版本号
  3. `U` 更新 框架 小程序&小游戏异步API支持Promise调用 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/app-service/api>)
  4. `U` 更新 框架 支持页面级weui v2样式 [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page>)
  5. `U` 更新 组件 【自定义组件】内置组件在 addGlobalClass 的组件中时，附加全局样式类 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e8c186703504b59889c43153c00>)
  6. `U` 更新 API [EditorContext.format](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.format.html>) format 支持 word-wrap [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e4c2dcf03909c3fc96500051c00>)
  7. `U` 更新 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) Android支持DLNA
  8. `U` 更新 API 订阅消息：通过 [wx.openSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html>) 接口返回用户订阅消息的订阅状态
  9. `F` 修复 框架 小游戏开发者工具上获取不到全局 sharedCanvas
  10. `F` 修复 框架 页面退出后，未注销 IntersectionObserver 将导致内存泄漏
  11. `F` 修复 组件 安卓下 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 横屏时宽高不会自动调整 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a428881c420aa3e89ee88251400>)
  12. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) input 内部状态错误导致无法设置 value [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e8eb7ce00d8c438e9ab69356800>)
  13. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) Android textarea 同层下改变尺寸或设置光标位置未自动滚动到可视区域
  14. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 在开发者工具下报错 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e0672f84448ca8bc9cfb8458400>)
  15. `F` 修复 组件 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html>) 组件不支持touchmove事件

## v2.10.1 (2020-01-14)

  1. `U` 更新 框架 支持自定义下拉刷新 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  2. `U` 更新 框架 提供用户年龄标签数据接口
  3. `U` 更新 框架 允许在 json 文件中使用 options 定义段来配置页面和自定义组件选项 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/custom-component/wxml-wxss>)
  4. `U` 更新 API 小游戏增加获取群名称接口 [详情](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getGroupInfo.html>)
  5. `U` 更新 API 网络请求接口新增返回参数 cookies [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  6. `U` 更新 API [录音接口](<https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html>)支持 PCM 格式 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000828649308d8658da72656257800>)
  7. `U` 更新 API [wx.request](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>) 等接口支持独立设置超时时间
  8. `F` 修复 组件 同层 Input 修改 focus 属性不弹起键盘 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00046259b44b803832b9158aa56800>)
  9. `F` 修复 组件 开发工具上 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 子节点不响应事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000aee76b9ca68236b991b4d956400>)
  10. `F` 修复 框架 某些 cookie 无法被正确解析
  11. `F` 修复 组件 开发者工具地图 marker anchorX 报错 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000e8e04288186673b92969656000>)
  12. `F` 修复 组件 picker 未点击确认前 columnChange 不触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00060c728340f02ebfa9fc7d456c00>)
  13. `F` 修复 组件 [live-pusher](<https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html>) 在初始化阶段设置属性不生效
  14. `F` 修复 框架 云开发数据库 elemMatch 有可能执行失败问题
  15. `F` 修复 组件 云图不支持长按识别
  16. `F` 修复 组件 picker-view 快速点击索引越界 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002ccd1d68540f4059940c3a56800>)
  17. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 输入框切换时需要点两次才能聚焦 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008eae5abc9604dbe69751b65c000>)
  18. `F` 修复 组件 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) 滚动过程中无法点击 scroll-view 以外的区域 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006aa5627cd30bfa909577ee51400>)

## v2.10.0 (2019-12-24)

  1. `U` 更新 框架 wx.getSetting接口返回用户订阅消息的订阅状态 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeDeviceMessage.html>)
  2. `U` 更新 框架 loadFontFace 支持全局生效 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html>)
  3. `U` 更新 框架 【对局回放】支持快进 & 游戏音录制 [详情](<https://developers.weixin.qq.com/minigame/dev/api/game-recorder/wx.createGameRecorderShareButton.html>)
  4. `U` 更新 框架 通过小程序打开地理位置 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/location-message>)
  5. `U` 更新 框架 【自定义组件】未禁止跳转到不在 pages 列表中的页面或自定义组件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000868c0284bc83d558898f8f56800>)
  6. `U` 更新 组件 直播组件增加 AGC,ANS 及回调音量 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)
  7. `U` 更新 组件 live-pusher 增加本地预览镜像 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)
  8. `U` 更新 组件 Camera stopRecord 补充视频信息 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000aeab6488c48fe2829e4e0051c00>)
  9. `U` 更新 组件 地图动画优化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.setCenterOffset.html>)
  10. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 增加 label 点击事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c0ea57f8218452fd8794cd5b400>)
  11. `U` 更新 组件 [LivePusherContext.snapshot](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.snapshot.html>) 截得不是原图 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00088cb3dec410efeca89767151c00>)
  12. `U` 更新 框架 camera 支持接口变焦 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00024cbc2b026880d3e82fef356000>)
  13. `U` 更新 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 支持设置不同的分辨率 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000226ace7c9586ce837c95e55b000>)
  14. `U` 更新 组件 camera录制视频支持压缩 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.stopRecord.html>)
  15. `U` 更新 API 插件环境中暴露 setInnerAudioOption 接口
  16. `U` 更新 API wx.getAccountInfoSync 支持返回小程序 envVersion [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html>)
  17. `U` 更新 API 插件支持 wx.getLaunchOptionsSync [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html>)
  18. `U` 更新 API [getNetworkType](<https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html>) 未适配 5G [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a0658ab4618717ef839c8056000>)
  19. `U` 更新 API 新增 [wx.chooseMedia](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html>) 接口
  20. `U` 更新 API readFile 支持分片读 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html>)
  21. `U` 更新 API 网络请求接口新增返回参数 cookies [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  22. `U` 更新 API [录音接口](<https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html>) 支持 PCM 格式 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000828649308d8658da72656257800>)
  23. `U` 更新 API wx.request等接口支持独立设置超时时间 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html>)
  24. `F` 修复 框架 小游戏无法运行体验评分
  25. `F` 修复 框架 【Bug】跳转未下载分包页面转屏引起页面白屏
  26. `F` 修复 框架 openDataContext 配置为空字符串时，仍然初始化了 openDataContext
  27. `F` 修复 框架 统一插件支付功能页用户点击取消支付时的接口逻辑 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a66185a0db86bfff819cf857800>)
  28. `F` 修复 框架 Android 7.0.5 setTimeout 和 setInterval 接口传入第三个参数时会抛异常
  29. `F` 修复 框架 华为mate机型，微信直播页底下输入框被遮挡或异常
  30. `F` 修复 组件 iOS input 同层下改变定位导致键盘收起
  31. `F` 修复 组件 iOS label 被 marker 遮挡
  32. `F` 修复 组件 cover-view coverViewScrollEvent 监听没有正常释放
  33. `F` 修复 组件 video全屏场景下会触发swiper页面错乱
  34. `F` 修复 组件 安卓下在有 web-view 的页面中自定义 tabBar 渲染不出 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00082ae4380a7806db795da5f51c00>)
  35. `F` 修复 组件 新版 Canvas 在 iOS 上无法加载图片
  36. `F` 修复 组件 2.9.1 button嵌cover-view，cover-view点击无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00000275504640fa1b69e77a356000>)
  37. `F` 修复 组件 iOS input 组件在退到桌面回来时出现文字重叠 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e02e2f580b82c2b5982ecd5b000>)
  38. `F` 修复 组件 Camera onCameraFrame 在横屏状态下返回数据不正确
  39. `F` 修复 组件 picker-view组件picker-view-column数量变更时返回的数据的列数未变化 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006a8c6564958d890b8498425b400>)
  40. `F` 修复 组件 movable-view组件 - Bug [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c42a9af859097e3a87e85656000>)
  41. `F` 修复 组件 Android 下重复扫码 WebGL getContext 方法丢失
  42. `F` 修复 组件 安卓下 map 组件的 polyline 会被底图覆盖 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000622ac8e4cb063256883fa251c00>)
  43. `F` 修复 组件 Android textarea 移动光标不应触发 input 事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00046a93a0cd20d4d0885aed556800>)
  44. `F` 修复 组件 不同 WebGL 上下文之间 WebGL 资源共享
  45. `F` 修复 组件 iOS下切换webview时，camera画面丢失
  46. `F` 修复 组件 canvas多次调用clip，iOS端渲染结果有误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000402e99385406a7d087ac3359c00>)
  47. `F` 修复 组件 canvas的restore会改动之前创建的路径位置 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00068e129307286b7c08a88f651c00>)
  48. `F` 修复 组件 canvas 的变形操作在安卓和 iOS 表现不一致 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ce6057fc978fa98e78d5a557800>)
  49. `F` 修复 组件 iOS canvas 渐变字体设置失效
  50. `F` 修复 组件 camera的scan-area属性识别区域不准
  51. `F` 修复 组件 iOS下 textarea的padding无法置0
  52. `F` 修复 API iOS 下 showModal 超过一行就可以上下滚动
  53. `F` 修复 API iOS wx.downloadFile 没有回调 header 参数 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00064aad0e81b8370fc878c9252800>)
  54. `F` 修复 API 安卓 wx.scanCode datamatrix 类型二维码, 逗号后数据丢失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00060c3cecc6e85f0158ff27e56c00>)

## v2.9.4 (2019-11-28)

  1. `U` 更新 插件 插件中支持音视频合成接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.html>)
  2. `U` 更新 框架 UDP 去除安全域名限制 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c2cd3950d7000d6699ac9458400>)
  3. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 增加 label 点击事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c0ea57f8218452fd8794cd5b400>)

## v2.9.1 (2019-10-29)

  1. `U` 更新 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) WebGL 支持配置透明背景
  2. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 组件maker支持云存储的图片id [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000884eaca4000499f394a17e56800>)
  3. `U` 更新 插件 部分 onXxx 接口缺失了对应的 offXxx 接口 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00084abfc642080b0509a83a55bc00>)
  4. `U` 更新 插件 使支付功能页在支付成功时也返回一些自定义数据
  5. `F` 修复 框架 安卓previewImage页面没有显示分页 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ee008040fa8300d472f70151000>)
  6. `F` 修复 组件 小程序 WebGL Canvas disable-scroll 不生效
  7. `F` 修复 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) 在 switchTab 之后无法绘制
  8. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 在可滚动状态下偶现定位错误
  9. `F` 修复 插件 支付功能页点击取消时 android 上没有自动退回
  10. `F` 修复 API [](<\(\)>) scanCode 设置 scanType: ['barCode'] 仍然可以扫描二维码 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ee227524e78a711471f58356800>)

## v2.9.0 (2019-10-09)

  1. `A` 新增 框架 applyAnimation 新的动画API [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/view/animation>)

  2. `A` 新增 框架 小游戏开放数据域新增快捷分享接口 [详情](<https://developers.weixin.qq.com/minigame/dev/api/share/wx.setMessageToFriendQuery.html>)

  3. `A` 新增 API 小程序返回首页功能 [wx.hideHomeButton](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideHomeButton.html>)

  4. `A` 新增 API 新增订阅消息接口 [wx.requestSubscribeMessage](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html>)

  5. `A` 新增 API 小游戏支持摄像头组件 [wx.createCamera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.html>)

  6. `U` 更新 框架 Android 网络接口，去除 `__skipDomainCheck__` 参数关于账号类型的限制

  7. `U` 更新 框架 Android 下支持创建多个 WebGL [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html>)

  8. `U` 更新 框架 tabBar 在没有文本时可以垂直居中 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c80800004d8e8dc98f606751400>)

  9. `U` 更新 框架 UDP 支持广播 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.send.html>)

  10. `U` 更新 框架 UDP 支持 bind 指定端口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.bind.html>)

  11. `U` 更新 框架 【插件】允许直接跳入分包内的插件页面

  12. `U` 更新 框架 移除 iOS setData 1M 限制

  13. `U` 更新 框架 客户端提供类似 screenTop 的值 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>)

  14. `U` 更新 框架 新增 page 标签允许更改页面标题、根节点样式等 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html>)

  15. `U` 更新 框架 支持 scroll 驱动的动画机制 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/view/animation>)

  16. `U` 更新 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 预览视图新增居中裁剪方式

  17. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 增加 label 点击事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c0ea57f8218452fd8794cd5b400>)

  18. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 地图普通区域点击获取经纬度 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00084ef326800810e1b8722605d000>)

  19. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 地图 polyline 更新增加 diff

  20. `U` 更新 组件 [Canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html>)开发者工具上 Canvas drawImage 对齐客户端实现

  21. `U` 更新 组件 [Canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html>) Skia Canvas 支持用户指定画布宽高

  22. `U` 更新 组件 [image](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html>) iOS平台支持webP [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000481ecd45b88747c8bdcd159c00>)

  23. `U` 更新 API [wx.getLocation](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html>) 增加高精度定位 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html>)

  24. `U` 更新 API 补充设备相关接口的 off 事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000026248f0db0d78d487ac9d51400>)

  25. `U` 更新 API 支持音视频合成 [wx.createMediaContainer](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.html>)

  26. `U` 更新 API [wx.chooseLocation](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html>) 支持传入指定地点

  27. `U` 更新 API [shareAppMessage](<https://developers.weixin.qq.com/miniprogram/dev/api/chattool/wx.shareAppMessageToGroup.html>) 新增禁止二次转发的字段

  28. `U` 更新 API 小游戏拉取非同玩好友列表 [wx.getPotentialFriendList](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.getPotentialFriendList.html>)

  29. `U` 更新 API 小游戏关系链互动主域给回调 [wx.onInteractiveStorageModified](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.onInteractiveStorageModified.html>)

  30. `U` 更新 API 小游戏关系链互动样式调整 [wx.modifyFriendInteractiveStorage](<https://developers.weixin.qq.com/minigame/dev/api/open-api/data/wx.modifyFriendInteractiveStorage.html>)

  31. `F` 修复 框架 公众号菜单栏跳不同小程序页面时出现闪现 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c0a4adfc5a0000e68ec5de58400>)

  32. `F` 修复 框架 iOS 下竖屏与横屏切换导致胶囊错位

  33. `F` 修复 框架 iOS 先播放 BackgroundAudio，再播放 InnerAudio，会导致 BackgroundAudio 失效

  34. `F` 修复 框架 小游戏退后台之后会抢占其他 App 的音乐 [详情](<>)

  35. `F` 修复 框架 安卓光标移动后无法移回最后

  36. `F` 修复 框架 订阅消息requestSubscribeMessage接口JSError告警: `__appServiceEngine__ is not defined`

  37. `F` 修复 框架 安卓web-view内调用window.close会退出小程序 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00020081b607681831192df595b000>)

  38. `F` 修复 框架 iPhone 在从横屏页面跳入横屏页面时胶囊位置错误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008caced604b01e6cf8e082e56000>)

  39. `F` 修复 框架 iOS webview hide后JSAPI无回调 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00042c5423cb78845af8b8ad95c800>)

  40. `F` 修复 框架 iPhone顶部状态栏高度变化时没有触发 [wx.onWindowResize](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html>) [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ca225c38f40f1c4e84319f54400>)

  41. `F` 修复 框架 iOS小程序输入组件键盘消失 依然可以继续输入 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ccaf564c4e0bb00f83ac125d000>)

  42. `F` 修复 组件 安卓 [Canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html>) 移到画布外不触发 touchend [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c6079a68bb0f3437847e3856000>)

  43. `F` 修复 组件 [Canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html>) 安卓Canvas drawImage绘制网络图片性能差

  44. `F` 修复 组件 [Canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html>) 安卓 Canvas fillRect 不支持负值 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00026427608fc06d5798b72f756c00>)

  45. `F` 修复 组件 [CanvasContext.draw](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.draw.html>) 回调不执行 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000266e1e5899866fb78882285b400>)

  46. `F` 修复 组件 安卓 [picker](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>) 组件如果有一个空值，显示0

  47. `F` 修复 组件 安卓 [picker](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>) 组件在选项内容过长时会直接被截断 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ac4724a849842a25799d055e400>)

  48. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 地图同层点击marker导致 tap事件同时触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c88350841a8b8e00999cb351800>)

  49. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) iOS 13 下map组件不能缩放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a0012f746204ac1a803ddf5b400>)

  50. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) iOS 下 map 结合 cover-view 导致闪退

  51. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 旋转相关问题

  52. `F` 修复 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 安卓下 Camera onCameraFrame 接口在安卓下偶现左右翻转

  53. `F` 修复 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) Android 下 Camera 组件内存泄露 [详情](<>)

  54. `F` 修复 组件 iOS 横屏下 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 视图上下翻转

  55. `F` 修复 组件 微信内未授权过语音时，[camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 组件语音 授权没有入口

  56. `F` 修复 组件 camera 组件在授权弹框时设置高度会不正确 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00024ee687c7f85684e7abea256800>)

  57. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 安卓和开发工具 cover-view 无法覆盖 WebGL [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002267caf4a98c0c0b8c267651800>)

  58. `F` 修复 组件 [live-pusher](<https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html>) iOS live-pusher 在横屏下推流方向错误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000e640b2ca589f0fd85d9db5b400>)

  59. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 13 下video组件全屏问题

  60. `F` 修复 组件 页面存在多个 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 时会自动播放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004489fec87f0c39d084cf6a5b000>)

  61. `F` 修复 组件 iOS 多个 同层video 在 scrollview 下显示异常 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006e031dd0a38c8e2889d9c65b400>)

  62. `F` 修复 组件 iOS [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 字数复制了html超限后粘贴，无法完全显示文字内容 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008668f9b8ff8c30108a8a6451400>)

  63. `F` 修复 组件 [image](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html>) 组件的src属性中包含中文，android上图片无法显示

  64. `F` 修复 API wx.request, wx.downloadFile, wx.uploadFile 等接口请求数量较多并有 abort 操作时，计数器不正确导致同时发起超过 10 个请求 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006c4a1f207b0c80339970695a400>)

  65. `F` 修复 API 安卓 7.0.6 [wx.showNavigationBarLoading](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html>)失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000caefafc8fe866f429367f056800>)

  66. `F` 修复 API iOS横屏状态下获取的状态栏高度不为0 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00026a16b5cd10fcfbf8ee0bb56000>)

  67. `F` 修复 API iOS 下 [wx.hideTabBar](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html>) 在非 tabBar 页面调用没有拦掉 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ccaf564c4e0bb00f83ac125d000>)

  68. `F` 修复 API 安卓 [wx.uploadFile](<https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html>) 无法上传无后缀的文件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e6462ce8c187ec5e8f230e5d000>)

  69. `F` 修复 API [](<\(\)>) 安卓下 [wx.chooseVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html>) 压缩后较模糊 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000223a28cde05c90c83081556000>)

  70. `F` 修复 API iOS [wx.chooseVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html>) 录像预览时模糊不聚集 [详情](<>)

  71. `F` 修复 API [wx.chooseVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html>) 视频时长较长时会息屏 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002220ce68b88f64d881483651800>)

  72. `F` 修复 API [wx.chooseVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html>) 三端返回端宽高不一致 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002085ba581d81a91a79649756800>)

  73. `F` 修复 API [wx.chooseVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html>)在安卓下maxDuration参数不生效

  74. `F` 修复 API [wx.chooseVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html>)安卓不支持切换摄像头

  75. `F` 修复 API iOS 下用 [wx.scanCode](<https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html>) 扫码闪退 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ea8e607cd18f95278b8ddf57800>)

  76. `F` 修复 API [wx.chooseLocation](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html>) 直接点击确定返回时地址不完整

  77. `F` 修复 API [wx.showLoading](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html>)在真机中没有遮挡住tabbar

  78. `F` 修复 API 安卓横屏下 [wx.getSystemInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>) 获取可用窗口宽高不正确 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00026a17c70bb076b7683c83f5bc00>)

  79. `F` 修复 API 安卓端 [wx.previewImage](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html>) 黑屏

  80. `F` 修复 API 安卓下 [wx.previewImage](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html>) 接口预览gif白屏

  81. `F` 修复 API [wx.chooseImage](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html>) 拍摄照片安卓部分机型不会留存在系统相册中 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000888790a00b03088084375d51800>)

## v2.8.3 (2019-09-17)

  1. `A` 新增 接口 [wx.hideHomeButton](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideHomeButton.html>) 隐藏首页按钮 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideHomeButton.html>)
  2. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 地图组件支持同层渲染
  3. `U` 更新 框架 云开发数据库操作符二期开放 [详情](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/guide/database>)
  4. `U` 更新 组件 [eidtor](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>) 插入图片支持临时文件地址 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertImage.html>)
  5. `F` 修复 组件 [eidtor](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>) 插入内容后滚动到最后位置 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e28d7914d702c7ea8fa7ab51000>)
  6. `F` 组件 组件 [eidtor](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>) 调用接口后不失去焦点 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000ceaa71042048c5d87580151400>)
  7. `F` 修复 框架 开放数据域onTouch _之后offTouch_ 无效
  8. `F` 修复 框架 iOS 端在打开多页面后，switchTab 跳转回未打开过的 tabBar 页面会出现报错 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002ec528ccc60fa00090394f56800>)
  9. `F` 修复 框架 wx-component 里的广告组件代码将标签上的图片 src 移到 attached 的回调函数里再对 dom 节点进行 set [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000824208c88f8613f09468f151400>)
  10. `F` 修复 框架 【插件】小程序在后台时插件签名不能被及时更新
  11. `F` 修复 API BannerAd destroy 时报错

## v2.8.2 (2019-08-30)

  1. `A` 新增 框架 小游戏拉起外部app [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/open-ability/launchApp>)
  2. `A` 新增 API selectOwnerComponent 接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component>)
  3. `U` 更新 框架 自定义组件支持 mut-bind [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/custom-component/index>)
  4. `U` 更新 框架 允许一些特定模式的字段在 setData 时不被应用到界面上
  5. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 地图增加 setting 属性
  6. `U` 更新 组件 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) scroll-view 支持 scroll anchoring
  7. `U` 更新 组件 [progress](<https://developers.weixin.qq.com/miniprogram/dev/component/progress.html>) 小程序progress新增动画时间 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000c27eef83d89e1788a216056400>)
  8. `U` 更新 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 支持手动收起键盘 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.hideKeyboard.html>)
  9. `F` 修复 框架 修复 UDP send 失败没有错误事件的问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e8ea8fec2c070b909ecdb056400>)
  10. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>)和[textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>)的placeholder-style不支持rpx [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ca6d916c8b083bfd8c381256000>)
  11. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) textarea 报错 insertTextArea:fail [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a803bc047c03a9cc847bab56000>)
  12. `F` 修复 组件 [slider](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>) IOS slider滑动时value数字换行的问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006c2e7f7c758861da83f04651800>)
  13. `F` 修复 组件 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) IOS scroll-view border 间距扩大 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c4ec41c0068c113a882bf752000>)
  14. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) input 的 placeholderStyle 修改无反应 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00066298950fb0e130b6e75ca51c04>)
  15. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 开发者工具 textarea 输入行数超过高度会导致下方组件的 bindtap 失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c2475920dd0594498d71c651000>)
  16. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) cover-view 缩放位置错误
  17. `F` 修复 API wx.createGameRecorderShareButton接口时缺少share.button和share.title参数时导致点击分享无反应、也无报错
  18. `F` 修复 API [wx.notifyBLECharacteristicValueChange](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html>) iOS 下 notifyBLECharacteristicValueChange 返回参数类型不正确

## v2.8.1 (2019-08-22)

  1. `A` 新增 框架 小游戏通过 game.json 配置禁止前端托管数据写接口 [详情](<https://developers.weixin.qq.com/minigame/dev/reference/configuration/app>)
  2. `A` 新增 API 小游戏暴露 wx.onUserCaptureScreen 事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html>)
  3. `A` 新增 框架 实时数据推送 [详情](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/guide/database/realtime>)
  4. `U` 更新 框架 云开发数据库聚合支持 Network 面板展示 [详情](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/guide/debug>)
  5. `U` 更新 组件 [open-data](<https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html>) open-data 补充 error 事件和默认文案 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e2c2788cbe87d98a89f5e35b000>)
  6. `U` 更新 组件 分享图支持云文件ID [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00046af902c98809afb81da4556000>)
  7. `U` 更新 组件 mark 应当可以在 selectorQuery 中返回 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.fields.html>)
  8. `U` 更新 组件 原生组件支持 bind:eventName 写法
  9. `U` 更新 API 补充 `offCompassChange`、`offDeviceMotionChange`等接口取消事件监听 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000026248f0db0d78d487ac9d51400>)
  10. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 开发者工具 video 组件不显示中间播放按钮 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000c2531fc3c85c10b81d58b51800>)
  11. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 全屏模式下播放有前贴广告video，切换视频源时自动播放失效
  12. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 开发者工具video组件无法播放m3u8视频 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002acc608c9400dc1e86027a51800>)
  13. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) video组件播放m3u8直播视频时loading不消失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000eea864988c0bb53f8aa95f5a400>)
  14. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 开发者工具 video 组件 bindprogress 事件不触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ac401e24628b7f9a84b9865b000>)
  15. `F` 修复 组件 [live-pusher](<https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html>) 多个live-pusher来回切换后不能正常推流 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e4c664d06c80fe0d86fafa59c00>)
  16. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 安卓下 live-player 同层进全屏未能完全展开
  17. `F` 修复 组件 [movable-view](<https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html>) movable-view设置缩放再定位会错位 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e225d2a8858b7d8c814b6551000>)
  18. `F` 修复 组件 `callout` 开发者工具 callout 位置错误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c88741b856053cfc8f5dcb5b400>)
  19. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 跨自定义组件嵌套 cover-view 更新问题
  20. `F` 修复 组件 某些情况下，hidden的原生组件update时没有带hide属性，组件又出现 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000464daeccf0029a9b895ebc5b000>)
  21. `F` 修复 API [wx.getUserInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html>) 修复小游戏开放数据域下的 getUserInfo 接口 fail 回调不生效的问题

## v2.8.0 (2019-07-30)

  1. `A` 新增 API 小程序后台持续定位功能 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html>)
  2. `A` 新增 插件 支持连续定位接口 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/plugin/api-limit>)
  3. `A` 新增 框架 基础库内置组件可选 weuiv2 样式 [详情](<https://developers.weixin.qq.com/minigame/dev/reference/configuration/app>)
  4. `U` 更新 框架 更新 vConsole 至 3.3.2 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006ae2dd38e4013b7c8cc4025bc00>)
  5. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 支持显示比例尺 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)
  6. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) regionchange 事件 begin 阶段增加触发原因 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)
  7. `U` 更新 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) iOS number digit 类型键盘支持自动提取验证码 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00046c23ca0f70582668dcacb54400>)
  8. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 开发者工具支持鼠标滚轮缩放地图级别
  9. `U` 更新 组件 [editor](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>) insertImage 支持插入云图片 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a0ec89740f04ad4a877de252000>)
  10. `U` 更新 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 支持闪光灯常亮 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>)
  11. `U` 更新 API [MapContext.moveToLocation](<https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.moveToLocation.html>) 支持传入经纬度，移动到指定位置 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.moveToLocation.html>)
  12. `F` 修复 插件 允许直接跳入分包内的插件页面
  13. `F` 修复 插件 一个小程序引用自身插件时，无法跳转到插件功能页
  14. `F` 修复 框架 iOS 下自定义 tabBar 切换抖动 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00066082940f08cc55880b4385b000>)
  15. `F` 修复 框架 安卓下在 onShow 调用 switchTab 会卡住 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00082069e80df067a078b549b51000>)
  16. `F` 修复 框架 tabbar 页面下拉刷新会显示上一个 webview [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00066622ef09502d8c789e75e52800>)
  17. `F` 修复 框架 华为手机禁止右滑手势返回失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e8c973f41d0d92978f06755bc00>)
  18. `F` 修复 框架 安卓关闭微信定位授权，允许小程序定位授权时可能导致 onShow 不断触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000cac297f8ac85cb708f9b9456400>)
  19. `F` 修复 框架 安卓授权弹窗样式错误，会触发 app 的 onShow 和 onHide
  20. `F` 修复 API [wx.getLocation](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html>) 微信位置授权禁止，调用 `getLocation` 导致 `onShow` 不断触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000864b5344cb0b2ce286eeab51c00>)
  21. `F` 修复 API [wx.getLocation](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html>) iOS 调用时无用途说明导致 camera 授权弹窗不显示 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008a80387489099b0086a6e851400>)
  22. `F` 修复 API [wx.loadFontFace](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html>) 安卓字体 content-type 错误导致加载失败 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html>)
  23. `F` 修复 API [wx.loadFontFace](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html>) 回调函数执行多次 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c4c3f4d42d05ed7c79054551800>)
  24. `F` 修复 API [wx.getSystemInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>) iOS 打开蓝牙的状态下，得到 bluetoothEnabled: false [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000866633f0ac0ddfa4813e6a5bc00>)
  25. `F` 修复 API [wx.getSystemInfoSync](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoSync.html>) 安卓调整微信字体大小后，获取到的还是调整前的字体大小，并没有更新数据。 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e08ecc103a8c66b782f45c56400>)
  26. `F` 修复 API [wx.navigateBack](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateBackMiniProgram.html>) 返回导致小程序退出 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00026c1c4d0d206566780723651400>)
  27. `F` 修复 API [wx.pageScrollTo](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html>) 安卓滚动到指定位置时会抖动 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e4ed60dc6a0e31fc75c1dc58c00>)
  28. `F` 修复 API [VideoContext.seek](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.seek.html>) 红米 4 设置无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c62c5430d60edf2483ed2957000>)
  29. `F` 修复 API [wx.startBeaconDiscovery](<https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html>) iOS 和安卓错误码对齐 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/2020c6bccac395730cced32ec9782c72>)
  30. `F` 修复 API [wx.chooseVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html>) 选择视频时，小程序经常自动关闭后重启 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/e95ce96a5bc74f0819bfe2b9186e8fb1>)
  31. `F` 修复 API [wx.navigateBackMiniProgram](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateBackMiniProgram.html>) 在非小程序跳小程序情况下不应被触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008e0af20c82050b007d1b485b400>)
  32. `F` 修复 API [wx.chooseInvoice](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html>) 真机返回结果与 API 文档不符 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ecc5c6702004626280e55451400>)
  33. `F` 修复 API [FileSystemManager.readFile](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.readFile.html>) 安卓 ArrayBuffer 格式读取时在部分机型上异常
  34. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 循环播放进度条不重置 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c26aed44cd840cf88abd7256800>)
  35. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 开发者工具 `catchtap` 事件无法捕获问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c8cbf9683c82866a80fc3451000>)
  36. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 安卓切换视频源后报 removeChild 错误
  37. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 安卓进入页面 seek 无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e6e283f48b0f5b978733b451400>)
  38. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iphone X 和 iphone XS 重复打开无法播放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a6a42df4ab0161c68710db59c00>)
  39. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 播放结束会跳回第一帧，应停留在当前画面 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000cee7ae0ce202f07e75557a51c00>)
  40. `F` 修复 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) iOS onCameraFrame stop 之后再 start 会取到无效数据
  41. `F` 修复 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 全屏模式下无法铺满
  42. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 安卓 label 无法设置背景透明 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c6620974cb88e2c88e224a51000>)
  43. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) iOS polygon zIndex 无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c60a39acf0866ce289b7765b000>)
  44. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 安卓地图 label 不显示 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e009802c118838788297d051800>)
  45. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 开发者工具上 moveToLocation 没有回调 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e0662bc41a8e2ffa879d7c5b400>)
  46. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) translateMarker duration 设为 0 仍然有动画 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a00613402004eeda8bc4595bc00>)
  47. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 安卓端 map 组件里 lable 里的文字不显示 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00060eed8c00b0b57758377c451800>)
  48. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) iOS 无法 scale 到 (1, 1)
  49. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 安卓点击触摸系列事件无法触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000248480485a84c94a72909b56000>)
  50. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) oppo auto-height 无法自动增高 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00088aff73c7a8f1a6477d68152000>)
  51. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) textarea 焦点移位问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ce6a53e49002680e7c17825ac00>)
  52. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) iOS fixed 固定在底部时，输入换行符导致整个页面上滑 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c4e558402603afe48e17385bc00>)
  53. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 安卓光标问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e20860d4bb895c818db9be56c00>)
  54. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 安卓 7.0.4 value 值不能同步更新 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000268eb6c08809a2a78d5df851c00>)
  55. `F` 修复 组件 [picker](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>) 安卓下地区选择部分机型不显示第三列 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ccafe5880d8ffca88e22fe5b400>)
  56. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) input 事件会触发多次 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008cae3a70280ef0a685782551400>)
  57. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) live-player 在播放时屏幕保持常亮
  58. `F` 修复 组件 [editor](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>) 开发者工具提示 Do not have handler [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e084894c228e8ef98bbdd351800>)
  59. `F` 修复 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) 横竖屏切换样式问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ae07c3a0b78b4eba84f5c651000>)

## v2.7.3 (2019-07-02)

  1. `U` 更新 框架 新增页面间通信接口 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html>)
  2. `U` 更新 API [wx.pageScrollTo](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html>) wx.pageScrollTo 支持锚点 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html>)
  3. `U` 更新 组件 [official-account](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html>) 允许开发版模式下显示公众号关注组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html>)
  4. `U` 修复 组件 [editor](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>) insertText 位置错误、聚焦触发时触发 blur、允许自定义图片大小和添加类名 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>)
  5. `U` 更新 组件 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) 支持 flex [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>)
  6. `F` 修复 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) 动态设置高度时会不停闪烁 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004e8b0028a10d7a1b8d05c856800>)
  7. `F` 修复 组件 [button](<https://developers.weixin.qq.com/miniprogram/dev/component/button.html>) open-type 为 launchApp 时可能会多次触发事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004467452c1701baeb881c8451c00>)
  8. `F` 修复 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) 开发者工具上 longtap 事件的 offsetTop 一直为 0 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e2812878938ee7178d44c15b000>)
  9. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) polyline 缺省默认宽度
  10. `F` 修复 组件 [movable-view](<https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html>) 动态插入的 movable-view，底下的 textarea 会插入失败 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008ec942b4af81787589fea756000>)
  11. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 背景颜色聚焦之后消失
  12. `F` 修复 框架 开发者打印日志过大导致 crash（小游戏）
  13. `F` 修复 框架 自定义 tabBar 在页面滚动过程中点击无反应 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000e274ef49686f37781994859400>)
  14. `F` 修复 框架 在旧页面上未移除预渲染的自定义 tabbar [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004ce847101c0aa2078c575351000>)
  15. `F` 修复 框架 自定义 tabbar 真机的 vConsole 界面的 Clear 和 Hide 被挡住 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c8444838738ba55a8099f057800>)
  16. `F` 修复 框架 自定义组件 behavior 处理时 shallowMerge 有误导致 data 字段误共享 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00068496ba023854848844c9954c00>)
  17. `F` 修复 API [wx.getSystemInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>) 安卓/iOS getSystemInfo 返回客户端版本号不统一 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00084409e5c1c8d175e7099bd51800>)
  18. `F` 修复 API [wx.onBluetoothDeviceFound](<https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html>) 部分安卓手机下报错 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ac077f180c0e2d688f5f2f56c00>)

## v2.7.1 (2019-06-03)

  1. `A` 新增 云开发 Network 面板（需 2.7.1 或以上的基础库）[详情](<https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/guide/debug>)
  2. `U` 更新 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 开发者工具支持
  3. `U` 更新 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 支持截图 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c26fab70fc8c43d673f3cb51800>))
  4. `U` 更新 组件 [rich-text](<https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html>) 支持更多语义化的标签 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ec2cbab0738534257748c75b800>))
  5. `U` 更新 自定义组件 开发者在 created 时能获知这个自定义组件在哪个页面下
  6. `U` 更新 自定义组件 externalClasses 支持多 class
  7. `U` 更新 插件 功能页支持配置币种符号 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ece315501401e1248ae10551400>)) [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html>)
  8. `F` 修复 API [wx.previewImage](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html>) 超过 50 个云文件地址无法预览 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000c694334538aafe585bc1e51c00>))
  9. `F` 修复 API [wx.getImageInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html>) 安卓上对 404 的资源回调不符合预期 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00008e599e43b0492c68776ea56800>)
  10. `F` 修复 API [wx.navigateBack](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateBackMiniProgram.html>) 只有一个页面时，回调函数触发问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004821e13c1e8b90f585d11851000>)
  11. `F` 修复 插件 开发插件模式下，无法在分包中使用插件
  12. `F` 更新 插件 在插件页面中使用 `wx.createXXXContext` 时无法传入第二个参数
  13. `F` 更新 插件 获取用户信息时 withCredentials 和 lang 参数失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008ccb5b101f0ebfd580355c57800>))
  14. `F` 更新 框架 部分机型 DELETE 请求出错 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a088dfc45002fa418fa5ec50000>)
  15. `F` 更新 框架 自定义 tabbar 和页面有共用组件时，安卓上该页面可能白屏 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c2a6e7ecd98dc9b687d8be51000>))
  16. `F` 更新 框架 自定义 tabBar 中的 cover-view 在无 tabBar 的页面中未被移除
  17. `F` 修复 框架 自定义 tabbar 位置错误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002ee22110f507033781aec756800>)
  18. `F` 修复 框架 自定义 tabbar 的页面上获取 windowHeight 没有对齐 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000242eb664530237258811aa5d800>))
  19. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 安卓 marker 设置 alpha 超出范围后无法显示 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006887b1b80480ff348b45c054400>)
  20. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) iOS 设置 callout 为空对象会出现白条 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000c4101a07d0f57858de4275b400>))
  21. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 横屏下全屏 cover-view 显示异常
  22. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 视频缓冲后闪一下黑屏才开始播放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000424408c8af89413789b79e53400>)
  23. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 全屏时全面屏手机状态栏展示不全
  24. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 安卓切换静音按钮失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ee2486acba8c4266844cad52800>)
  25. `F` 修复 组件 [image](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html>) 安卓上图片 // 路径无法解析 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002842798420089a648d0ba851400>)
  26. `F` 修复 组件 [image](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html>) 安卓 // 开头的图片链接没有追加 http 前缀 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e8aa6d50498c1b558ad10856800%3E>)
  27. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 滚动区域出现空白 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c4c65e504e0679248f386a56000>)
  28. `F` 修复 组件 [cover-image](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html>) 组件传入的 url 里有特殊字符时不显示
  29. `F` 修复 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) 安卓上滚动会误触发下拉刷新 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a260b7409881ac8e78ba935d800>))
  30. `F` 修复 组件 [slider](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>) 值没变化时候不应触发 change [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002ea2dd24b50abe978356a45b000>)
  31. `F` 修复 组件 [movable-view](<https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html>) 拖动问题
  32. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 工具上 foucs 返回值无 height 字段
  33. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 不会跟随 swiper 滑动 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008a06fd54cf0472468636b251c00>)
  34. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 工具 bindblur 的 detail 没有 cursor 字段
  35. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 工具 bindinput 的 detail 没有 keyCode 值 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004ce209985d8c9eca7181ff51400>)
  36. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 安卓特定机型在 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) 中调用两次 bindconfirm [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008049f3dc4388f11a7d49805d000>))
  37. `F` 修复 SDK 安卓 jssdk1.4 updateAppMessageShareData 无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000620fd264cd8274c8896bbe56400>)
  38. `F` 修复 框架 vConsole 的内容在屏幕旋转后会变大 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000602325dc250e72068c551956400>)

## v2.7.0 (2019-05-09)

  1. `A` 新增 组件 [editor](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>) 富文本编辑器组件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html>)
  2. `A` 新增 API [wx.onKeyboardHeightChange](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.onKeyboardHeightChange.html>) 全局监听键盘高度变化 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.onKeyboardHeightChange.html>)
  3. `A` 新增 UDP 通信接口 [wx.createUDPSocket](<https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/wx.createUDPSocket.html>)
  4. `U` 新增 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) 小程序支持 WebGL [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a8886d802d8472bf662f5b5c800>) [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>)
  5. `A` 新增小游戏实时语音能力 [详情](<>)
  6. `U` 更新 组件 [live-pusher](<https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html>) 直播组件支持设置镜像 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)
  7. `U` 更新 组件 [live-pusher](<https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html>) 支持在不推流时打开摄像头 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html>)
  8. `U` 更新 框架 原生组件支持 zIndex 控制层级 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ee09b78cbd0ae775790bb15b800>)
  9. `U` 更新 组件 [image](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html>) 在非预览模式下支持长按唤起图片操作菜单 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html>)
  10. `U` 更新 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 支持卫星图、实时路况 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>)
  11. `U` 更新 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 增加相机初始化完成事件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>)
  12. `U` 更新 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 增加返回逐帧数据接口 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a86bdbdc240c47d37e72ab5bc00>) [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>)
  13. `U` 更新 组件 [official-account](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html>) 公众号关注组件去除扫二维码场景 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html>)
  14. `U` 更新 API [wx.getSystemInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>) 增加属性 safeArea [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html>)
  15. `U` 更新 框架 tabBar 图片支持临时文件和网络文件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html>)
  16. `F` 修复 云开发 wx.cloud.deleteFile 参数类型检查受 Array.prototype 修改影响 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00064c129d45589929786f2bf5ec00>)
  17. `F` 修复 框架 以不同屏幕方向预加载时，进入页面时 rpx 转换不正确
  18. `F` 修复 框架 安卓自定义 tabBar 受下拉刷新影响 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c0a903407385e0658a47035b400>)
  19. `F` 修复 框架 小程序分享自定义图片 ios 不显示 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ae617d80aa8cdee2814e2256c00>)
  20. `F` 修复 框架 pageOrientation 为 auto 时，竖屏视频转到横屏情况下显示不全
  21. `F` 修复 框架 iOS 上页面栈较多时，navigateBack 返回页面生命周期函数不执行，事件不生效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000084c4c901081ba008d95f75b800>))
  22. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 全屏模式下无法更新 src [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e6c08cc4be059d0489cb7551400>)
  23. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 打开公众号文章但无法跳转阅读原文的链接 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004225e2f08209cfd585e32e56400>)
  24. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) iOS 上 animation 之后不响应事件
  25. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) iOS 上 opacity 异常 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000841fa406a032f6f7bce3356800>)
  26. `U` 更新 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 支持 zIndex 控制层级 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ee09b78cbd0ae775790bb15b800>)
  27. `F` 修复 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 通过 if 控制显示隐藏时，扫码失败 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000c07e3ec320b49e18b3ee851000>)
  28. `F` 修复 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) iOS 上设置前置摄像头无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ee4a791883832ccd79b3f15d800>))
  29. `F` 修复 组件 [picker-view](<https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html>) 更新数组后不显示 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000606a8f6c20077a208ea2bc53c00>))
  30. `F` 修复 组件 [slider](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>) step 为 0.1 时拖动闪烁
  31. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) iOS 上动态修改 password 属性无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008a09996c8d09faaa7b5dba56c00>)
  32. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 安卓刘海屏中上推会被刘海挡住
  33. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) iOS 上 textAlign 右对齐无效问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a683b6b4ae0f7981843f1c51800>)
  34. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) iOS 上设置 style 为 text-align，对 placeholder 无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00006eb4ce4e18fb3368ef0eb51c00>)
  35. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 动态设置初始时间 initial-time 无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c62c5430d60edf2483ed2957000>))
  36. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 上视频长度太小时无法播放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ceacadacd0049f097e09bf51c00>)
  37. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 拖动进度条时未触发 bindtimeupdate 事件
  38. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 调用 playbackRate 后，拖动视频进度导致倍速无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00066ac166cab82be0778957a5ac00>)
  39. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 安卓上设置的 src 有误时没有及时回调 onError
  40. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 倍速播放问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00066cbbcd8d109a9ae7fab935b000>))
  41. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 安卓上 seek 后进度条不更新
  42. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iPhone 6s 上 touch 事件没有冒泡
  43. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 上自动循环时不触发 ended 事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002a6cd7bcdd0963a2833eec5b000>)
  44. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) iOS 上 callout 的点击响应区域只有文本区域
  45. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 地图安卓 scale 与 IOS 缩放级别不统一
  46. `F` 修复 API [wx.chooseVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html>) iOS 上选择太大的视频会触发自动清理逻辑 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000aae784a09a02ddb288350d56c00>)
  47. `F` 修复 API [wx.chooseImage](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html>) 安卓上选择图片闪退 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006c4684dc568bb57d744b8251c00>)
  48. `F` 修复 API `CanvasContext.drawImage` iOS 上 drawImage 卡顿
  49. `F` 修复 API `CanvasContext.drawImage` 安卓上 drawImage 绘制不全 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002ea8b1ccdc87225e77d4425ac00>)
  50. `F` 修复 API [wx.getMenuButtonBoundingClientRect](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html>) 小游戏启动立刻获取菜单按钮布局信息接口在部分机型上获取结果不正确
  51. `F` 修复 API `<MapContext.includePoints>` iOS 上坐标点在一条线上时缩放不正确
  52. `F` 修复 API [wx.connectWifi](<https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html>) 返回密码错误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a2afd3b4d400c8338f19b654400>))

## v2.6.5 (2019.04.02)

  1. `A` 新增 框架 自定义组件增强样式隔离支持 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/custom-component/observer>)
  2. `U` 更新 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) 支持自定义过渡动画 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>)
  3. `U` 更新 组件 [picker](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>) `mode=regin` 的 value 属性能够接受区划分码 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002c8c6254000204097d3c8d56000>)
  4. `F` 修复 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) `circular` 属性衔接动画问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a2a8b4889484e31a61630653c00>)
  5. `F` 修复 组件 [movable-view](<https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html>)位置被 [movable-area](<https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html>) 属性影响 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006243cfecb60fb99a70a8bf51000>)
  6. `F` 修复 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) 安卓上 `setLineDash` 不能清空设置
  7. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 退出全屏字体变大 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ce88518ced822d8180b58f5b400>)
  8. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 工具中切换页面，原页面的 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 仍在播放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002666cd80da0abed3781a2156000>)
  9. `F` 修复 组件 [scroll-view](<https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html>) 触摸屏幕边缘的部分无法滑动 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a8c3b6f4420d59308f52a851000>)
  10. `F` 修复 API [wx.getUserInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html>) 统一用户授权拒绝 `errMsg` [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e02f2a9826071c01831a6557800>)
  11. `F` 修复 API [wx.loadSubpackage](<https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.loadSubpackage.html>) 失败的时候会有两次 `fail` 和两次 `complete` 回调
  12. `F` 修复 工具 体验评分存在短时间内发起太多的图片请求 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00020832b341d0683f28418ef56800>)
  13. `F` 修复 插件 收货地址功能页在同一个小程序引用插件时未返回 success
  14. `F` 修复 框架 安卓上使用 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 后自定义 `tabBar` 看不到
  15. `F` 修复 框架 安卓上切换页面并转屏时使用的屏幕宽度可能有误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00008a1a9d06a0250148a070751400>)

## v2.6.4 (2019.03.22)

  1. `A` 新增 插件 新增 getSetting 接口
  2. `F` 修复 组件 [checkbox](<https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html>) text-indent 导致 checkbox 样式错乱 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006222c714e488e98e7c67a451800>)
  3. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 存在 tabbar 的页面隐藏 tabbar 的时候底部留白 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00020e08d1c198dcc58784dbb5bc00>)
  4. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 高度适应虚拟键隐藏
  5. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 安卓下使用 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 后自定义 tabBar 看不到 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004220ef74e901be228c37ac55400>)
  6. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) iOS 键盘输入异常 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000aaac819ce407b8a87e0c4b51c00>)
  7. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) display:none 情况下有 padding 依然可以 focus [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ea25b390ce02d8db7133c55b400>)
  8. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) placeholder 位置会飘移 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00002ca09dca602e0677d7b4056000>)
  9. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) enable-3D 不生效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a62225c8ed01ac5b7734c756800>)
  10. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 工具上 `getCenterLocation` 页面切换后失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002ee1d634e20e33bd7c18e751800>)
  11. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 安卓 marker 旋转时不应旋转 callout [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00082ef9384f4862c9c63b44751800>)
  12. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) label 被 marker 覆盖 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008ae63690d28dbc607e9b3651400>)
  13. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 工具上设置 scale 为小数时无法显示 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006ce27c9802864a0081de385fc00>)
  14. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 安卓多次切换到有地图组件的页面，markers 随机丢失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008465e440188f68be66fc3756000>)
  15. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) 工具 moveToLocation 触发 bindregionchange 事件时与真机不一致 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00048a6360c4404378a77011a5bc00>)
  16. `F` 修复 组件 [map](<https://developers.weixin.qq.com/miniprogram/dev/component/map.html>) includePoints 回调函数不触发 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000400040b00502dd9b761efc51000>)
  17. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 支持单独给 placeholder 设置居中 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a64f8114ea8840e97282e65b000>)
  18. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>)[textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) hidden 的时候 focus 应该无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ce00fb98918c78ba7f2a3056c00>)
  19. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 安卓输入草稿模式不触发 input 事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000cc6738882c8f07cd7c9f665b000>)
  20. `F` 修复 组件 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 全屏导致的各类问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00040c53c840b8562c47dd2e258400>)
  21. `F` 修复 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) 安卓或其他低端设备下滑动会偶现[swiper-item](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>)卡在中间的问题
  22. `F` 修复 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) setData 改变内容后，内容不显示问题 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00064847b903b844d837b89ff5b800>)
  23. `F` 修复 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) 点击不应触发 animationfinish 事件 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a44916c0128b5dee76b85251400>)
  24. `F` 修复 组件 [swiper](<https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html>) display-multiple-items >= swiper-item 时显示异常 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e847c198148f308476d3cc5b000>)
  25. `F` 修复 组件 [text](<https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html>) iOS 设置 selectable 属性后无法关闭选择区域 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006ea26618fd8f91ac7c2cc751000>)
  26. `F` 修复 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 拒绝授权后重新去 setting 授权再返回小程序相机仍无权限 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a6e664cca4010c3d73a4b651000>)
  27. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 下移除 video 后页面无法滚动 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000863a678048b65f27390cd51c00>)
  28. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 安卓 play 事件里 timeStamp 为 NaN [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000ceaa30c048d778281244d56000>)
  29. `F` 修复 框架 安卓 media query 转屏时可能错乱
  30. `F` 修复 框架 disableScroll 三端行为不一致 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/d74c0370c903a6137a53d127720b78a9>)
  31. `F` 修复 插件 插件中的 live-player 在 reLaunch 时可能会报无权限错误
  32. `F` 修复 框架 收货地址功能页返回值不正确 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c6a8efbc8b05818383c5e756c00>)
  33. `F` 修复 框架 启用自定义 tabbar 之后 setData 回调错乱 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00000a750f42e0fcc738ac6ab5b800>)
  34. `F` 修复 API [wx.pageScrollTo](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html>) pageScrollTo 导致 fixed 元素闪动
  35. `F` 修复 API [wx.pageScrollTo](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html>) 安卓往上翻时直接闪现到目标位置，没有动画，疑似 duration 参数无效

## v2.6.2 (2019.02.27)

  1. `A` 新增 小程序音频中断开始和结束事件 [wx.onAudioInterruptionBegin](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html>)、[wx.onAudioInterruptionEnd](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html>)
  2. `F` 修复 安卓从公众号菜单二次进入小程序会白屏 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e8ca1784678aed9c76957556c00>)
  3. `F` 修复 框架 意见反馈断网再联网弹框 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ce2c44949a067cd873cb705bc00>)
  4. `F` 修复 框架 iOS 上 tabbar 内容未居中，文字过去靠下 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0000a22f02ced0c076a7a798e56000>)
  5. `F` 修复 框架 自定义 tabbar 下 vConsole 被遮挡
  6. `F` 修复 框架 安卓 onPageNotFound 无法正常推出错误页面
  7. `F` 修复 插件 无法直接跳转到分包中的插件页面
  8. `F` 修复 API [wx.previewImage](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html>) iOS 上微信版本 7.0.0 预览时没有总图片数和当前图片 index [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00062a2dc208c8499ee7721fa5b000>)
  9. `F` 修复 API [wx.getLocation](<https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html>) 在系统中禁止地理位置权限后，getLocation API 返回的错误信息为 fail 1 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00080cd5c44158254d9704f4e51000>)
  10. `F` 修复 API [wx.startSoterAuthentication](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html>) 部分华为手机调用报错，返回 errCode90007 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a8427d143906421e7f5dec5ac00>)
  11. `F` 修复 API [wx.openSetting](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html>) 修改授权信息后无法立刻生效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c46600780f0fa68d7eac345a400>)
  12. `F` 修复 API [wx.chooseVideo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html>) iOS 上微信版本 6.7.3 版本调起相机不会执行 onHide 和 onShow [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a2267f38a98cdbca75da5a56000>)
  13. `F` 修复 API [wx.onCompassChange](<https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html>) 返回精度值跳变 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00062256c04a281a8aa75221a5bc00>)
  14. `F` 修复 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>) iOS 上 fillText 的位置不正确 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ce65ecbc8f0d151d6ee87251c00>)
  15. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 复制 app 中带样式的文本错乱 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000020c5708b68d62247b212f5b400>)
  16. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 上全屏出现黑块
  17. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 上部分视频无法播放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000eea7d120a18b0eb87325575b000>)
  18. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 上 seek 精度应为 ms [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0006428d84c710d0b8a7cef885bc00>)
  19. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 上微信版本 7.0.3 切换 tabBar 后全屏失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e4aab6987882c0508ebd2f5ec00>)
  20. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 上播放视频无法 seek [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008a899c5ce30abcd879311956800>)
  21. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) iOS 上 fixed 属性异常 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000aea16828a2861e187848625e400>)
  22. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 设置 scrollTop 或 scrollLeft 导致滚动失效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00082a3f35c8505d97a77744951000>)
  23. `F` 修复 组件 [cover-image](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html>) iOS 上设置 css rotate 后消失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002865da4c2504319479caad53c00>)
  24. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) iOS 上 placeholder 部分被截断 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008c6257c4108c789a7c2f1b56c00>)
  25. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) iOS 上 src 包含中文则无法显示
  26. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 安卓上页面如果 title 为空，会显示该页面 url
  27. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 页面先全屏再退出，会出现白色遮挡物 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c80d44700380528e7d902351800>)

## v2.6.1 (2019.02.21)

  1. `A` 新增 框架 自定义组件支持数据监听器 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/custom-component/observer>)

## v2.6.0 (2019.02.01)

  1. `U` 更新 API [wx.chooseMessageFile](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html>) 新增 extension 参数根据扩展名过滤
  2. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>)、[textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) iOS 7.0.3 下搜狗输入法会触发多次 focus 事件
  3. `F` 修复 组件 [input](<https://developers.weixin.qq.com/miniprogram/dev/component/input.html>) 安卓部分机型获取焦点时，点击空白或非 input 区域无法失焦收起键盘 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004c6253d02e03f8f081a30c51800>)

## v2.5.2 (2019.01.29)

  1. `U` 更新 框架 功能页顶栏背景色改成浅灰色#F2F2F2
  2. `F` 修复 API [wx.pageScrollTo](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html>)在开发者工具上缺失回调
  3. `F` 修复 组件 [picker](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>)的 current 为负值时会导致 ios 客户端 crash
  4. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>)在 iOS 上出现了错误的截断 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/72b6ad7229800b1b13bc6909ca1fc26a>)
  5. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>)嵌套 [navigator](<https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html>) 失效
  6. `F` 修复 组件 [canvas](<https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html>)开发者工具上多个 canvas 同时绘制，绘制完只会触发一个 draw 的回调
  7. `F` 修复 组件 [official-account](<https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html>)增加 hidden 支持
  8. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>)里的[video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>)全屏后返回高度变小 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a2e46d4cf68de62d73231d51000>)
  9. `F` 修复 框架 自定义 tabBar 中的 cover-view 在无 tabBar 的页面中未被移除
  10. `F` 修复 框架 挂载在 slot 中的自定义组件无法触发 pageLifeTimes [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002607cb289f880b4b798d3e51400>)
  11. `F` 修复 框架 tabbar 页面销毁时，存在未触发自定义组件 detached 生命周期的 bug [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a4ed2a145f84c9df7af64c55400>)
  12. `F` 修复 框架 Component 构造器 onTabItemTap 不触发

## v2.5.1 (2019.01.22)

  1. `A` 新增 框架 小游戏 game.json 配置项 `deviceOrientation` 支持值 landscapeLeft/landscapeRight [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/config>)
  2. `U` 更新 [live-player](<https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html>) 和 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 完全退出小程序时才静音 [详情 1](<https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html>) [详情 2](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>)
  3. `U` 更新 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) userAgent 中包含 miniProgram 字样来判断小程序环境 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>)
  4. `U` 更新 API [wx.showModal](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html>) 的 confirmColor 默认值修改为#576b95 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html>)
  5. `F` 修复 插件 开发者工具上无法调用 [wx.getImageInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html>) [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a66979e4c70e18dd780c7e5b400>)
  6. `F` 修复 插件 退出功能页之后从列表进入，iOS 有时没有 reLaunch
  7. `F` 修复 API [wx.getImageInfo](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html>) 三端返回不一致
  8. `F` 修复 API `CameraContext.stopRecord` iPhone X & iPhone 8P 下 失效
  9. `F` 修复 API [wx.setTabBarItem](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html>) 导致文字消失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a885758c3a04fb4a7bc48a51000>)
  10. `F` 修复 API [wx.appendFile](<https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.appendFile.html>) 往不存在的文件追求内容，返回成功
  11. `F` 修复 API `FileSystemManager.unzip` 接口在有文件解压到上层目录的情况下，回调成功
  12. `F` 修复 API [wx.navigateTo](<https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html>) 和安卓小返键导致打开页面逻辑层无法运行 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0004c2bad4007890ab873439e5b800>)
  13. `F` 修复 API [wx.pageScrollTo](<https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html>) 安卓下，会先滚动到顶部，再滚动到指定位置
  14. `F` 修复 API [wx.getBackgroundAudioManager](<https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html>) 安卓下 currentTime 没有返回精确值
  15. `F` 修复 API [wx.redirectTo](<https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html>) 安卓下调用期间按返回按钮，会导致新开的页面事件响应丢失 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00024cacbfc290ee8687b3dd75c000>)
  16. `F` 修复 API [wx.createInnerAudioContext](<https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html>) 安卓下对于部分音频文件没有响应 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a4c2c4e802097088700af656800>)
  17. `F` 修复 API [wx.connectSocket](<https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html>) iOS 下在会添加额外的 header Authorization
  18. `F` 修复 API [wx.openLocation](<https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getCenterLocation.html>) iOS 下调用失败 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000404297743a82194d6d8b7d5b800>)
  19. `F` 修复 API [wx.chooseImage](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html>) iOS 下选择 gif 图片被转换为 jpg
  20. `F` 修复 API [wx.startRecord](<https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html>) iOS 调用时，右上角胶囊没有出现录音闪烁图标
  21. `F` 修复 API 小游戏 [wx.shareAppMessage](<https://developers.weixin.qq.com/miniprogram/dev/api/chattool/wx.shareAppMessageToGroup.html>) [wx.onShareAppMessage](<https://developers.weixin.qq.com/minigame/dev/api/render/canvas/Canvas.toTempFilePath.html>) 可以触发 cancel 回调
  22. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>)在部分机型（华为 p20）显示空白页面 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000460baed0c98fcf7a79872051400>)
  23. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) iOS 使用 `input file` 会使小程序退出 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00082e34938ef88ba64689a2850800>)
  24. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) iOS 链接#后面的部分变化后，onShareAppMessage 拿到的 webViewUrl 还是原有的链接
  25. `F` 修复 组件 [web-view](<https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html>) 安卓隐藏虚拟导航栏后内未触发 resize [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00084875408528c7e72762e0456c00>)
  26. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 微信更新到 6.7.4 版本后，默认自动播放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000e802b5243a8d619b748e4b56800>)
  27. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) iOS 返回多 tab 页引起非活动页面视频自动播放 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002666cd80da0abed3781a2156000>)
  28. `F` 修复 组件 [video](<https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html>) 全屏后下拉刷新 「…」 的位置偏移
  29. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 安卓页面存在多个时，bindfocus 事件无法准确响应目标 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0008c8e30c83b8a41907d646c5ec00>)
  30. `F` 修复 组件 [textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>) 安卓不收起键盘在多个[textarea](<https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html>)之间切换焦点，表单提交失败 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00064eeccb82307fc857731595b800>)
  31. `F` 修复 组件 [cover-view](<https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html>) 使用 rotate 之后内容被裁减 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00084a65f20210f909973a02556400>)
  32. `F` 修复 组件 [picker](<https://developers.weixin.qq.com/miniprogram/dev/component/form.html>) 安卓下不能阻止 pullDownRefresh 效果 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000a6c069b0a78f760479932c51400>)
  33. `F` 修复 组件 [camera](<https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html>) 安卓垂直扫描一维码无法识别 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/0002a202bfcdc048a2e68eda256800>)
  34. `F` 修复 框架 安卓带 shareTicket 的转发在单聊情况下打开异常
  35. `F` 修复 框架 安卓开发版小程序没有插入后台历史列表 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000ec2d1110470e383a77346451c00>)
  36. `F` 修复 框架 安卓转发截图截取的是当前位置图片，应截取最顶部位置的图片
  37. `F` 修复 框架 安卓原生音频播放器中的前往小程序无效 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000c06da9fc780bb56d7a5b195bc00>)
  38. `F` 修复 框架 安卓删除小程序后不会清空对应授权信息
  39. `F` 修复 框架 iOS 分享 withShareTicket 到单聊，安卓打开，场景值为 1044 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/000420e012098811074748c9a51400>)
  40. `F` 修复 框架 iOS 带 tabBar 的页面进入官方反馈页面，手机横屏退回小程序引起 tabBar 高度错误 [反馈详情](<https://developers.weixin.qq.com/community/develop/doc/00006a14418f804a1217355cc56400>)

## v2.5.0 (2019.01.11)

  1. `A` 新增 框架 小程序组件支持无障碍访问 [详情](<https://developers.weixin.qq.com/miniprogram/dev/component/aria-component.html>)
  2. `A` 新增 框架 支持自定义 tabbar [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/ability/custom-tabbar>)
  3. `A` 新增 API [wx.chooseMessageFile](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html>) 选择本地聊天文件 [详情](<https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html>)
  4. `A` 新增 小游戏 API 支持卡券接口[wx.addCard](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html>)、[wx.openCard](<https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.openCard.html>)

## 客户端 7.0.0 新增配置

  1. `A` 新增 框架 支持页面级自定义导航配置 `navigationStyle: custom` [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/config#页面配置>)
  2. `A` 新增 框架 支持页面禁止右滑返回手势 `disableSwipeBack: true` [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/config#页面配置>)
  3. `A` 新增 框架 如需使用位置接口，需在 `app.json` 中添加配置 `permission` 字段用于说明位置接口用途 [详情](<https://developers.weixin.qq.com/minigame/dev/guide/framework/config#全局配置>)

[历史版本](<https://developers.weixin.qq.com/minigame/dev/guide/framework/release/v2.html>)
