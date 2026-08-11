---
title: "console"
type: api
category: api/base/debug
api: "console"
source: https://developers.weixin.qq.com/minigame/dev/api/base/debug/console.html
---

# console

向调试面板中打印日志。console 是一个全局对象，可以直接访问。在微信客户端中，向 vConsole 中输出日志。

## 方法

### [console.debug()](<console.debug.md>)

向调试面板中打印 debug 日志

### [console.log()](<console.log.md>)

向调试面板中打印 log 日志

### [console.info()](<console.info.md>)

向调试面板中打印 info 日志

### [console.warn()](<console.warn.md>)

向调试面板中打印 warn 日志

### [console.error()](<console.error.md>)

向调试面板中打印 error 日志

### [console.group(string label)](<console.group.md>)

在调试面板中创建一个新的分组。随后输出的内容都会被添加一个缩进，表示该内容属于当前分组。调用 [console.groupEnd](<console.groupEnd.md>)之后分组结束。

### [console.groupEnd()](<console.groupEnd.md>)

结束由 [console.group](<console.group.md>) 创建的分组

## 注意

  * 由于 vConsole 功能有限，以及不同客户端对 console 方法的支持情况有差异，建议开发者在小程序中只使用本文档中提供的方法。
  * 部分内容展示的限制请参见[调试](<https://developers.weixin.qq.com/miniprogram/dev/framework/usability/debug.html>)
