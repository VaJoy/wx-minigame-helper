---
title: "Class WXWeakRef"
type: api
category: api/base
api: "WXWeakRef"
source: https://developers.weixin.qq.com/minigame/dev/api/base/WXWeakRef.html
---

### Class WXWeakRef  
  
WXWeakRef 类似 Web 标准里的 WeakRef。允许您保留对另一个对象的弱引用，而不会阻止此对象被 GC 回收。

从基础库 v2.23.0 开始支持 WXWeakRef。

Tips：

  1. iOS：iOS 从系统版本 14.5 开始支持 Web 标准的原生 WeakRef。
  2. 安卓：安卓从微信版本 8.0.25 开始支持 Web 标准的原生 WeakRef。在支持原生 WeakRef 的环境下可以直接使用 WeakRef。

#### 构造函数

WXWeakRef()

创建一个 WXWeakRef 对象

#### 实例方法

WXWeakRef.prototype.deref()

返回当前实例的 WXWeakRef 对象所绑定的 target 对象，如果该 target 对象已被 GC 回收则返回undefined

#### 示例代码
    
    
    const obj1 = {}
    const ref = new WXWeakRef(obj1)
    
    const obj2 = ref.deref()
    
    console.log(obj2 === obj1) // true
