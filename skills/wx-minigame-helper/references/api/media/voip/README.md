# 媒体 / 实时语音通话

> 路径：`api/media/voip/`　|　本目录 11 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [wx.exitVoIPChat(Object object)](wx.exitVoIPChat.md) | 退出（销毁）实时语音通话 |
| [wx.joinVoIPChat(Object object)](wx.joinVoIPChat.md) | 加入 (创建) 实时语音通话，更多信息可见 实时语音指南。调用前需要用户授权 `scope.record`，若房间类型为视频房间需要用户授权 `scope.camera`。 |
| [wx.offVoIPChatInterrupted(function listener)](wx.offVoIPChatInterrupted.md) | 移除被动断开实时语音通话事件的监听函数 |
| [wx.offVoIPChatMembersChanged(function listener)](wx.offVoIPChatMembersChanged.md) | 移除实时语音通话成员在线状态变化事件的监听函数 |
| [wx.offVoIPChatSpeakersChanged(function listener)](wx.offVoIPChatSpeakersChanged.md) | 移除实时语音通话成员通话状态变化事件的监听函数 |
| [wx.offVoIPChatStateChanged(function listener)](wx.offVoIPChatStateChanged.md) | 移除房间状态变化事件的监听函数 |
| [wx.onVoIPChatInterrupted(function listener)](wx.onVoIPChatInterrupted.md) | 监听被动断开实时语音通话事件。包括小游戏切入后端时断开 |
| [wx.onVoIPChatMembersChanged(function listener)](wx.onVoIPChatMembersChanged.md) | 监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调 |
| [wx.onVoIPChatSpeakersChanged(function listener)](wx.onVoIPChatSpeakersChanged.md) | 监听实时语音通话成员通话状态变化事件。有成员开始/停止说话时触发回调 |
| [wx.onVoIPChatStateChanged(function listener)](wx.onVoIPChatStateChanged.md) | 监听房间状态变化事件。 |
| [wx.updateVoIPChatMuteConfig(Object object)](wx.updateVoIPChatMuteConfig.md) | 更新实时语音静音设置 |
