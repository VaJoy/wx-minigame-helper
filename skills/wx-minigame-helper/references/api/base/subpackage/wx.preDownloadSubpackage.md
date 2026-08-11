---
title: "PreDownloadSubpackageTask wx.preDownloadSubpackage(Object object)"
type: api
category: api/base/subpackage
api: "wx.preDownloadSubpackage"
source: https://developers.weixin.qq.com/minigame/dev/api/base/subpackage/wx.preDownloadSubpackage.html
---

# [PreDownloadSubpackageTask](<PreDownloadSubpackageTask.md>) wx.preDownloadSubpackage(Object object)

> 基础库 2.27.3 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持
> 
> **微信 鸿蒙 OS 版** ：支持

## 功能描述

触发分包预下载。

## 参数

### Object object

| 属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---|---  
|  packageType | string | 'normal' | 否 | 分包的类型  
| |  合法值 | 说明  
---|---  
workers | worker 分包  
normal | 普通分包, [3.4.9](<../../../guide/runtime/client-lib/compatibility.md>)及以上版本支持。下载普通分包，必须再传入 name 参数。  
|  name | string |  | 是 | 分包的名字，可以填分包配置中的 name 或者 root 字段的值。仅在 packageType="normal" 时生效。在独立分包内，填 __GAME__ 表示加载主包，详见 [小游戏独立分包指南](<../../../guide/base-ability/independent-sub-packages.md>), [3.4.9](<../../../guide/runtime/client-lib/compatibility.md>)及以上版本支持  
|  success | function |  | 是 | 分包加载成功回调事件  
|  fail | function |  | 是 | 分包加载失败回调事件  
|  complete | function |  | 是 | 分包加载结束回调事件(加载成功、失败都会执行）  
  
## 返回值

### [PreDownloadSubpackageTask](<PreDownloadSubpackageTask.md>)

预下载分包任务实例，用于获取分包预下载状态

## 注意事项

  * wx.preDownloadSubpackage 与 wx.loadSubpackage 的区别： wx.preDownloadSubpackage 只下载代码包，不自动执行代码；wx.loadSubpackage 下载完代码包后会自动执行代码。

## worker 分包示例代码
    
    
    // 首先要在 app.json / game.json 中配置workers作为分包
    {
      "workers": {
        "path": "myWorkersFolder",
        "isSubpackage": true  // true 表示把 worker 打包为分包。默认 false。填 false 时等同于 { "workers": "myWorkersFolder" }
      }
    }
    
    
    
    // 然后调用 wx.preDownloadSubpackage 下载 worker 分包，下载成功后才可以创建 worker
    var task = wx.preDownloadSubpackage({
      packageType: "workers",
      success(res) {
        console.log("load worker success", res)
        wx.createWorker("myWorkersFolder/request/index.js")   // 创建 worker。 如果 worker 分包没下载完就调 createWorker 的话将报错
      },
      fail(res) {
        console.log("load worker fail", res)
      }
    })
    
    task.onProgressUpdate(res => {
      console.log(res.progress) // 可通过 onProgressUpdate 接口监听下载进度
      console.log(res.totalBytesWritten)
      console.log(res.totalBytesExpectedToWrite)
    })
    

## 普通分包示例代码
    
    
    // 首先要在 app.json / game.json 中配置分包
    {
        "subPackages": [
          {
            "name": "ModuleA",
            "root": "/ModuleA/"
          }
        ]
    }
    
    
    
    var task = wx.preDownloadSubpackage({
      name: "ModuleA",
      success(res) {
        console.log("load subpackage success", res)
        // 执行分包代码
        wx.loadSubpackage({
          name: "ModuleA",
          success(res) {
            console.log(res)
          },
        })
      },
      fail(res) {
        console.log("load subpackage fail", res)
      }
    })
    
    task.onProgressUpdate(res => {
      console.log(res.progress) // 可通过 onProgressUpdate 接口监听下载进度
      console.log(res.totalBytesWritten)
      console.log(res.totalBytesExpectedToWrite)
    })
