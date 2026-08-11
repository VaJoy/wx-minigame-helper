---
title: "wx"
type: api
category: api/base
api: "wx"
source: https://developers.weixin.qq.com/minigame/dev/api/base/wx.html
---

Object 类型。

小游戏内置的 API 全局对象，用于承载小游戏能力相关 API。

示例：

```js
wx.getSystemInfo({      // 通过 wx 全局对象调用小游戏 API
  success (res) {
    console.log(res.model) 
  }
})
```