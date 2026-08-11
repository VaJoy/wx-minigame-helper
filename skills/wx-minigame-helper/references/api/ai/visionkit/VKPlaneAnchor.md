---
title: "VKPlaneAnchor"
type: api
category: api/ai/visionkit
api: "VKPlaneAnchor"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKPlaneAnchor.html
---

# VKPlaneAnchor

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

平面 anchor，只有 v2 版本支持

## 属性

### number id

唯一标识

### number type

类型

**type 的合法值**

值 | 说明 | 最低版本  
---|---|---  
0 | 平面 |   
  
### Float32Array transform

包含位置、旋转、放缩信息的矩阵，以列为主序

### Object size

尺寸

属性 | 类型 | 说明  
---|---|---  
width | number | 宽度  
height | number | 高度  
  
### number alignment

方向

## 示例代码

**plane-ar**

```js
import getBehavior from './behavior'
import yuvBehavior from './yuvBehavior'

const NEAR = 0.001
const FAR = 1000

Component({
  behaviors: [getBehavior(), yuvBehavior],
  data: {
    theme: 'light',
  },
  lifetimes: {
    /**
        * 生命周期函数--监听页面加载
        */
    detached() {
      console.log('页面detached')
      if (wx.offThemeChange) {
        wx.offThemeChange()
      }
    },
    ready() {
      console.log('页面准备完全')
      this.setData({
        theme: getApp().globalData.theme || 'light'
      })

      if (wx.onThemeChange) {
        wx.onThemeChange(({ theme }) => {
          this.setData({ theme })
        })
      }
    },
  },
  methods: {
    init() {
      this.initGL()
    },
    render(frame) {
      this.renderGL(frame)

      const camera = frame.camera

      // 修改光标位置
      const reticle = this.reticle
      if (reticle) {
        const hitTestRes = this.session.hitTest(0.5, 0.5)
        if (hitTestRes.length) {
          reticle.matrixAutoUpdate = false
          reticle.matrix.fromArray(hitTestRes[0].transform)
          reticle.matrix.decompose(reticle.position, reticle.quaternion, reticle.scale)
          reticle.visible = true
        } else {
          reticle.visible = false
        }
      }

      // 更新动画
      this.updateAnimation()

      // 相机
      if (camera) {
        this.camera.matrixAutoUpdate = false
        this.camera.matrixWorldInverse.fromArray(camera.viewMatrix)
        this.camera.matrixWorld.getInverse(this.camera.matrixWorldInverse)

        const projectionMatrix = camera.getProjectionMatrix(NEAR, FAR)
        this.camera.projectionMatrix.fromArray(projectionMatrix)
        this.camera.projectionMatrixInverse.getInverse(this.camera.projectionMatrix)
      }

      this.renderer.autoClearColor = false
      this.renderer.render(this.scene, this.camera)
      this.renderer.state.setCullFace(this.THREE.CullFaceNone)
    },
  },
})
```

**plane-ar-v2**

```js
import getBehavior from './behavior'
import yuvBehavior from './yuvBehavior'

const NEAR = 0.001
const FAR = 1000

let time = 0
const countNumber = 20
let count = 0

Component({
  behaviors: [getBehavior(), yuvBehavior],
  data: {
    theme: 'light',
  },
  lifetimes: {
    /**
        * 生命周期函数--监听页面加载
        */
    detached() {
      console.log('页面detached')
      if (wx.offThemeChange) {
        wx.offThemeChange()
      }
    },
    ready() {
      console.log('页面准备完全')
      this.setData({
        theme: getApp().globalData.theme || 'light'
      })

      if (wx.onThemeChange) {
        wx.onThemeChange(({ theme }) => {
          this.setData({ theme })
        })
      }
    },
  },
  methods: {
    init() {
      this.initGL()
    },
    render(frame) {
      const start = Date.now()

      this.renderGL(frame)
      const camera = frame.camera

      // 修改光标位置
      const reticle = this.reticle
      if (reticle) {
        const hitTestRes = this.session.hitTest(0.5, 0.5)
        if (hitTestRes.length) {
          reticle.matrixAutoUpdate = false
          reticle.matrix.fromArray(hitTestRes[0].transform)
          reticle.matrix.decompose(reticle.position, reticle.quaternion, reticle.scale)
          if (reticle.position.z != 0) reticle.visible = true
        } else {
          reticle.visible = false
        }
      }

      // 更新动画
      this.updateAnimation()

      // 相机
      if (camera) {
        this.camera.matrixAutoUpdate = false
        this.camera.matrixWorldInverse.fromArray(camera.viewMatrix)
        this.camera.matrixWorld.getInverse(this.camera.matrixWorldInverse)

        const projectionMatrix = camera.getProjectionMatrix(NEAR, FAR)
        this.camera.projectionMatrix.fromArray(projectionMatrix)
        this.camera.projectionMatrixInverse.getInverse(this.camera.projectionMatrix)
      }

      this.renderer.autoClearColor = false
      this.renderer.render(this.scene, this.camera)
      this.renderer.state.setCullFace(this.THREE.CullFaceNone)

      const end = Date.now()

      time += end - start
      count++
      // if(count >= countNumber){
      //   console.log(`${count}次平均耗时统计为${time/count}ms`)
      //   count = 0
      //   time = 0
      // }
    },
  },
})
```
