# 专题：发布上线与版本更新

> 任务：从开发完成到发布上线，以及后续的版本更新、灰度与回滚。

## 流程总览

```
开发 → 体验版（内测 code-beta）→ 提审 → 发布 → 灰度 → 全量
        ↑ 发布后新版本通过「更新机制」触达用户
```

## 关键文档

### 指南
- [发布流程](../guide/getting-started/release.md) — 发布相关说明（含版本更新日志）
- [游戏内测指引](../guide/base-ability/code-beta.md) — 体验版/内测能力
- [更新机制](../guide/runtime/update-mechanism.md) — 客户端如何拿到新版本（启动时检查、异步下载、下次生效）
- [基础库版本](../guide/runtime/client-lib/version.md) 与 [兼容性](../guide/runtime/client-lib/compatibility.md)
- [小游戏配置](../guide/getting-started/configuration.md) — game.json 全字段
- 审核前置：小游戏接入指引（官网，见 [intro](../guide/getting-started/intro.md) 中的链接）

### API
- 更新（[api/base/update/](../api/base/update/README.md)）：
  - [wx.getUpdateManager](../api/base/update/wx.getUpdateManager.md) → UpdateManager
  - `UpdateManager.onCheckForUpdate / onUpdateReady / onUpdateFailed`、`applyUpdate()`（重启应用新版本）
- 调试开关：[wx.setEnableDebug](../api/base/debug/wx.setEnableDebug.md)

## 更新机制要点

1. 小游戏**启动时**检查新版本，有则异步下载；下载完成后**默认下次启动生效**。
2. 想立即生效：监听 `onUpdateReady` → 弹窗提示 → `applyUpdate()` 重启。
3. 版本兼容：新代码用了新基础库 API 时，用 `wx.canIUse` 或版本比较做兼容（见兼容性文档）。
4. 灰度发布在 mp 后台操作，客户端无感知。

## 运营配套

- 版本更新公告触达：[订阅更新提醒](../guide/open-ability/message/subscribe-update-notification-message.md)
- 数据分析：[api/data-analysis/](../api/data-analysis/README.md)（自定义上报、游戏日志 [wx.getGameLogManager](../api/data-analysis/wx.getGameLogManager.md)）
