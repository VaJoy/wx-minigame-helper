---
title: "模块化"
type: guide
category: guide/base-ability
source: https://developers.weixin.qq.com/minigame/dev/guide/base-ability/module.html
---

# 模块化

可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。模块只有通过 [`module.exports`](<https://developers.weixin.qq.com/minigame/dev/reference/api/module>) 或者 `exports` 才能对外暴露接口。

注意：

  * `exports` 是 [`module.exports`](<https://developers.weixin.qq.com/minigame/dev/reference/api/module>) 的一个引用，因此在模块里边随意更改 `exports` 的指向会造成未知的错误。所以更推荐开发者采用 `module.exports` 来暴露模块接口，除非你已经清晰知道这两者的关系。
  * 小程序目前不支持直接引入 `node_modules` , 开发者需要使用到 `node_modules` 时候建议拷贝出相关的代码到小程序的目录中，或者使用小程序支持的 [npm](<https://developers.weixin.qq.com/miniprogram/dev/devtools/npm>) 功能。

    
    
    // common.js
    function sayHello(name) {
      console.log(`Hello ${name} !`)
    }
    function sayGoodbye(name) {
      console.log(`Goodbye ${name} !`)
    }
    
    module.exports.sayHello = sayHello
    exports.sayGoodbye = sayGoodbye
    

## 文件作用域

在 JavaScript 文件中声明的变量和函数只在该文件中有效；不同的文件中可以声明相同名字的变量和函数，不会互相影响。

## 全局对象

类似于浏览器的 `Window` 和 NodeJS 的 `global`，小游戏也有一个全局对象 `GameGlobal`。通过 `GameGlobal` 可以在多个文件中传递变量。
    
    
    // a.js
    
    GameGlobal.globalData = 1
    
    
    
    // b.js
    
    console.log(GameGlobal.globalData) // 输出 "1"
