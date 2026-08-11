---
title: "错误调试与异常排查"
type: guide
category: guide/engine/unity/profiling
source: https://developers.weixin.qq.com/minigame/dev/guide/game-engine/unity-webgl-transform/Design/DebugAndException.html
---

# 错误调试与异常排查

本文阐述开发者在遇到转换后的游戏在开发者工具或真机遇到异常时，如何找到对应堆栈并解决问题。

## 如何排查程序中出现的异常

### 如何查看日志

小游戏出现异常或错误时，通过以下方式打开 console：

  * 开发者工具：调试器->Console

  * 真机：

步骤1(打开调试模式)：右上角菜单->打开调试->出现vconsole 或者 game.js增加代码"wx.setEnableDebug({enableDebug: true})"

步骤2(打开vconsole)：点击vconsole打开日志面板（启动阶段点三次封面视频下方Unity Logo出现 vconsole)

![](https://res8.wxqcloud.qq.com.cn/wxdoc/fe88589c-746f-42cf-8eaf-712d6034aeb9.png)

_**注意：在WASM代码分包情况下，应该使用jxxx的数字作为函数id**_

默认情况下，函数堆栈是不可读的函数id，那么可通过以下两种方法之一来获得可读函数名

### 如何通过错误堆栈查找源代码问题

#### 使用Profiling-funcs

转换面板勾选profiling-funcs, 导出的代码包中将包含可读函数名。 正式上线版本请务必关闭profiling-funcs，或使用代码分包(可自动剔除函数名）。

#### 使用symbols文件可读函数名

以文本方式打开导出目录/webgl/Build/xxx.symbols 文件

![](https://res8.wxqcloud.qq.com.cn/wxdoc/ed07797a-6970-44a0-a4a8-02a3542e884c.png) 通过日志的函数id找到对应的原始函数名，分析调用堆栈。 

这里有个[小工具](<https://developers.weixin.qq.com/minigame/dev/guide/game-engine/unity-webgl-transform/Design/Symbol.html>)可以帮助替换日志(在WASM代码分包情况下，需要自行稍做修改)

## 影响异常错误的导出选项

推荐配置(转换插件默认设置)

  * Enable Exceptions: Explicitly Thrown Exceptions Only
  * Debug Symbols: Yes
  * Development Build: No

### Enable Exceptions

BuildSettings->Player Settings->Publish Settings->Enable Exceptions 选项表示 Unity 引擎捕捉哪种级别的异常 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/0558dae7-cb97-4791-9054-afeb47fe39b4.png)

**什么是异常级别？ 简单来说，就是确定哪些异常由引擎捕捉，未被捕捉的异常将抛给 WASM 虚拟机，最终会导致 VM 结束。**

以代码为例
    
    
            // 程序捕捉异常
            try
            {
                GameObject go = null;
                Debug.Log(go.name);
            }
            catch (Exception ex)
            {
                Debug.Log(ex);
            }
    
            // 程序未捕捉异常
            GameObject go2 = null;
            Debug.Log(go2.name);
    

这段代码有两处异常： 1. 程序捕捉的异常， 2.程序未捕捉异常(通常是问题所在)

**None** ：

异常捕捉：不捕捉任何异常，引擎或业务代码导致的异常都会抛出到 WASM，并导致程序 Crash。 该选项性能最高，但必须保证游戏不使用任何异常，**try catch 也无法捕捉任何异常** 。从下图看到程序在第 1 个 Exception 产生时已终止，代码是无法 catch 该异常的。

异常信息：取决于虚拟机，在开发者工具有出现详细堆栈函数 ID，在真机环境则无。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/70cf770a-6d3e-49f0-9fbe-ca131d8a8230.png)

**Explicitly Thrown Exceptions Only** ：

异常捕捉： 游戏代码的异常将被捕捉，如果非致命异常(不在关键路径上)，逻辑代码可以继续。try catch 有效。

异常信息：Debug.Log 等函数等与程序未捕捉异常可输出简要的异常信息，无堆栈信息。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/b0645a7b-346d-4133-ace7-b4ad667ed378.png)

**Full Without Stacktrace** ：

异常捕捉： 同"Explicitly Thrown Exceptions Only", 且引擎还会增加额外的底层异常检查，比如”Null References Out of Bounds Array accesses“。

异常信息： Debug.Log 等函数与程序未捕捉异常都只有输出简要的异常信息，无堆栈信息。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/1d3cac01-194a-4826-9679-b2a2b88c02f9.png)

**Full With Stacktrace** ：

异常捕捉： 同"Full Without Stacktrace"

异常信息： Debug.Log 等函数得到完整的堆栈，程序未捕捉异常有最浅层堆栈函数名。 ![](https://res8.wxqcloud.qq.com.cn/wxdoc/b1bb6865-692a-4126-bd10-2a0f20415a0a.png)

注意：

> None 性能最高，但此模式必须保证游戏代码(包括第三方插件)不使用异常，一旦命中异常即使 catch 也无效，会直接导致程序终止。Explicitly Thrown Exceptions Only 是几种选择中鲁棒性和信息提示较为均衡的，推荐发布使用。Full With Stacktrace 会严重影响性能，切忌在发布版本中使用。

### Debug Symbols

BuildSettings->Player Settings->Publish Settings->DebugSymbols

![](https://res8.wxqcloud.qq.com.cn/wxdoc/c4abf0f1-db0e-4db7-8761-47015fe7f360.png) Debug Symbols将产生函数id与函数名之间的映射关系，使用文本方式打开即可。 通常我们从异常log中找到函数id，此时可通过该文件找到C#源代码中的函数名。 

### Development Build

![](https://res8.wxqcloud.qq.com.cn/wxdoc/f76c891e-ff5d-4675-8bff-c22620249626.png) Development Build会在异常产生时直接附带完整的函数名，与"Full With Stacktrace"类似，且程序未捕捉异常也有详细堆栈。该选项产生的代码体积较大，且对性能有较大影响。
