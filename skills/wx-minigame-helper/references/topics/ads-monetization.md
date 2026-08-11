# 专题：广告变现

> 任务：在小游戏中接入广告获得收益（IAA 模式的核心）。

## 广告组件速览

| 组件 | 场景 | 创建 API | 特点 |
|---|---|---|---|
| 激励视频 RewardedVideoAd | 看广告得奖励 | [wx.createRewardedVideoAd](../api/ad/wx.createRewardedVideoAd.md) | eCPM 最高、体验最好，**首选** |
| 插屏 InterstitialAd | 关卡结束等自然停顿 | [wx.createInterstitialAd](../api/ad/wx.createInterstitialAd.md) | 注意展示频次控制 |
| Banner | 常驻底部 | [wx.createBannerAd](../api/ad/wx.createBannerAd.md) | 收益低，谨慎使用 |
| 格子 GridAd | 结算页 | [wx.createGridAd](../api/ad/wx.createGridAd.md) | |
| 原生模板 CustomAd | 自定义样式 | [wx.createCustomAd](../api/ad/wx.createCustomAd.md) | |
| 视频贴片/前贴 | 视频内容场景 | 见 [api/ad/](../api/ad/README.md) | |

每种组件的生命周期一致：`create → load → show`，事件 `onLoad/onError/onClose/onResize`；激励视频多了 `onClose(res.isEnded)` 判断是否发放奖励。

## 关键文档

### 指南
- [广告总览](../guide/open-ability/ad/ad.md)
- [激励视频广告](../guide/open-ability/ad/rewarded-video-ad.md)
- [Banner](../guide/open-ability/ad/banner-ad.md)、[插屏](../guide/open-ability/ad/interstitialAd-ad.md)、[原生模板](../guide/open-ability/ad/custom-ad.md)
- [IAA 模式](../guide/open-ability/ad/iaa.md) — 纯广告变现游戏的运营方法
- [广告数据接口](../guide/open-ability/ad/ad-data-interface.md)、[ADQ 投放](../guide/open-ability/ad/adq.md)
- [商业化运营](../guide/open-ability/growth/commercialization/) — 流量主开通与结算

### API
- 广告 API 全集（64 篇）：[api/ad/](../api/ad/README.md)
- 激励视频事件：[RewardedVideoAd.onClose](../api/ad/RewardedVideoAd.onClose.md)（`res.isEnded` 发奖依据）、[RewardedVideoAd.load](../api/ad/RewardedVideoAd.load.md)

## 实施要点

1. **激励视频奖励必须以 `onClose` 的 `isEnded === true` 为准**，服务端校验见指南。
2. 广告实例可复用但注意单例限制（同广告位多次 create 会返回同一实例）。
3. 加载失败要 `load()` 重试，见各组件的 onError 文档。
4. 广告与机型适配：Banner 宽度有最小值限制，见 BannerAd 文档。
