# 专题：多平台适配（PC / Mac / 鸿蒙）

> 任务：让小游戏在 Windows、Mac、鸿蒙（HarmonyOS）端正常运行并发挥大屏优势。

## 平台差异速览

- **Windows / Mac（PC 端微信）**：大屏、键鼠操作、窗口可缩放；性能更好但交互范式不同。
- **鸿蒙（HarmonyOS）**：独立系统，API 支持度与各端有差异。
- 每篇 API 文档头部都标注了各端支持情况（"微信 Windows 版：支持"等），查 API 时先看这个。

## 关键文档

### 指南（guide/open-ability/platform/）
- [PC 适配总览](../guide/open-ability/platform/pc-adapter.md) — 大屏适配、分辨率、横竖屏
- [PC 小游戏](../guide/open-ability/platform/pc-game.md) — PC 端能力差异与接入
- [PC 性能](../guide/open-ability/platform/pc-performance.md)
- [鸿蒙适配](../guide/open-ability/platform/ohos.md)

### 相关配置与 API
- [配置 game.json](../guide/getting-started/configuration.md) — `desktopDeviceOrientation`、`resizable`、`displayMode` 等 PC 相关字段
- 键鼠输入：[键盘 api/device/keyboard/](../api/device/keyboard/README.md)、[鼠标事件](../api/device/mouse-event/README.md)、[滚轮事件](../api/device/wheel-event/README.md)、[手柄](../api/device/gamepad/README.md)
- 窗口与光标：[api/ui/window/](../api/ui/window/README.md)、[api/render/cursor/](../api/render/cursor/README.md)
- 系统信息判断平台：[wx.getSystemInfo / getDeviceInfo 等](../api/base/system/README.md)

## 实施要点

1. **交互**：移动端触摸（[touch-event](../api/device/touch-event/README.md)）与 PC 键鼠要双套或统一抽象。
2. **画面**：开启 `resizable` 后注意 Canvas 尺寸自适应；`displayMode` 控制分辨率策略。
3. **能力检测**：不要按 UA 硬编码，用 `wx.canIUse` / 系统信息判断。
