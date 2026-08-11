# 专题：多人实时对战

> 任务：实现房间匹配、实时对战（帧同步/状态同步）、对战语音。

## 能力地图

```
匹配 (gamematch) → 建房/加房 (roomservice / GameServerManager)
→ 对局通信（帧同步 lock-step / 状态同步 / 自建 WebSocket）
→ 语音 (voip) → 结算与回放 (game-recorder) → 赛事 (tournament)
```

## 关键文档

### 指南（guide/open-ability/gameplay/）
- [房间服务 roomservice](../guide/open-ability/gameplay/roomservice.md) — 房间生命周期、邀请、加入
- [帧同步 lock-step](../guide/open-ability/gameplay/lock-step.md) — 帧同步对战原理与接入
- [匹配 gamematch](../guide/open-ability/gameplay/gamematch.md) — 官方匹配服务
- [对局服务器 game-server](../guide/open-ability/gameplay/game-server.md) — 自建对局服务方案
- [实时语音 voip-chat](../guide/open-ability/gameplay/voip-chat.md) — 对局内语音
- [锦标赛 tournament](../guide/open-ability/gameplay/tournament.md)
- [游戏录屏](../guide/open-ability/gameplay/game-recorder.md) — 对局回放/精彩时刻

### API
- **对局服务器（54 篇）**：[api/game-server-manager/](../api/game-server-manager/README.md) — `GameServerManager`：登录、房间管理、消息广播、状态同步全套
- **实时语音**：[api/media/voip/](../api/media/voip/README.md) — [wx.joinVoIPChat](../api/media/voip/wx.joinVoIPChat.md) 等
- **游戏录屏**：[api/game-recorder/](../api/game-recorder/README.md) — [wx.getGameRecorder](../api/game-recorder/wx.getGameRecorder.md)
- **聊天工具**：[api/chattool/](../api/chattool/README.md)

## 方案选型

| 需求 | 推荐 |
|---|---|
| 轻量回合/帧同步对战 | roomservice + lock-step（微信提供通道） |
| 复杂实时对战（MOBA/FPS 级） | 自建服务器 + WebSocket（[api/network/websocket/](../api/network/websocket/README.md)）或 UDP（[api/network/udp/](../api/network/udp/README.md)） |
| 观战/回放 | game-recorder + 帧数据录存 |

## 常见坑

1. 帧同步要求客户端逻辑确定性（定点数/锁随机种子），见 lock-step 文档。
2. WebSocket 有并发连接数限制，且域名需配置 request 合法域名（见[网络](../guide/base-ability/network.md)）。
3. 语音房需要用户授权麦克风 scope，见[授权](../guide/base-ability/authorize.md)。
