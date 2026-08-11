---
title: "温控模式"
type: guide
category: guide/performance/runtime
source: https://developers.weixin.qq.com/minigame/dev/guide/performance/power-saving-mode.html
---

## 温控模式

> 当前能力仅支持 iOS（iPhone XR 及以上设备）。

温控模式是小游戏针对 iOS 设备发烫、掉电过快等场景提供的解决方案。原理是通过调整底层系统资源调度，在降低部分算力的前提下，大幅降低小游戏功耗。

### 1 模式说明

  * **数据表现** ：开启后设备算力降至原有的约 60%，功耗优化约 10~20%（取决于具体项目），帧率 Jank 率会有一定上升。
  * **适配场景** ： 算力溢出的高端设备（如 iPhone 16 Pro Max）；
  * **生效规则** ： 
    1. 用户首次游玩默认使用 **普通模式** ；
    2. 切换模式后**需在下次启动时生效** （可结合 `wx.restartMiniProgram` 引导重启）；

### 2 前置准备

温控模式需要通过小游戏官方插件来进行启用，具体启用方法可以参考 [小游戏官方插件](<https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxaed5ace05d92b218&token=1401507866&lang=zh_CN>)。

### 3 PowerModeManager 获取

完成小游戏官方插件的初始化后，通过 `getPowerModeManager` 获取模式管理器：
    
    
    import './getPlugin';
    
    const powerModeManager = GameGlobal.miniGameCommon && GameGlobal.miniGameCommon.getPowerModeManager
      ? GameGlobal.miniGameCommon.getPowerModeManager()
      : null;
    
    if (!powerModeManager) {
      // 可能原因：
      // 1. MiniGameCommon 插件未正确加载
      // 2. 微信版本过低，不支持温控模式管理功能
      // 3. game.json 中插件配置有误
      console.warn('[温控模式] 当前环境不支持 PowerModeManager');
    }
    

### 4 设置本地模式 setLocalMode

设置玩家下次启动时使用的模式，本次启动不会立刻切换。
    
    
    // mode: 0-普通模式, 1-温控模式
    powerModeManager.setLocalMode({
      mode: 1,
      success(res) {
        console.log('[温控模式] 已切换为温控模式', res);
      },
      fail(res) {
        // 当前环境不支持
        console.error('[温控模式] 切换失败', res);
      },
    });
    

### 4 查询本地模式 getLocalMode

查询当前**本地配置的模式** （即下次启动将使用的模式）。
    
    
    powerModeManager.getLocalMode({
      success(res) {
        // res.mode: 0-普通模式, 1-温控模式
        console.log('[温控模式] 本地设置的模式:', res.mode);
      },
      fail(res) {
        console.error('[温控模式] 获取本地模式失败', res);
      },
    });
    

### 5 查询当前生效模式 getCurrentMode

查询本次启动**实际生效** 的模式。
    
    
    powerModeManager.getCurrentMode({
      success(res) {
        // res.mode: 当前实际使用的模式
        console.log('[温控模式] 当前生效的模式:', res.mode);
      },
      fail(res) {
        console.error('[温控模式] 获取当前模式失败', res);
      },
    });
    

### 6 最佳实践

**1）默认模式设置**

如果开发者希望直接控制玩家游玩的模式，可以在游戏启动时调用 `setLocalMode`，使玩家**下次启动** 以预期的模式进入。

**2）结合游戏内设置面板**

将温控模式作为设置项暴露给玩家，并配合 `wx.restartMiniProgram` 引导重启即时生效：
    
    
    // 用户在设置面板切换温控模式后
    powerModeManager.setLocalMode({
      mode: 1,
      success() {
        wx.showModal({
          title: '提示',
          content: '温控模式的修改需重启后生效，现在重启吗？',
          success(res) {
            if (res.confirm) {
              wx.restartMiniProgram();
            }
          },
        });
      },
      fail(err) {
        console.error('[温控模式] 切换失败', err);
      },
    });
    

![](https://res8.wxqcloud.qq.com.cn/wxdoc/56617deb-b17d-4cf1-bccd-71d2c41ccc76.svg)文档变更日志（1条）

2026 年 06 月 12 日

文档描述优化
