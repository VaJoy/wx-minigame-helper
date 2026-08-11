---
title: "VKDepthAnchor"
type: api
category: api/ai/visionkit
api: "VKDepthAnchor"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKDepthAnchor.html
---

# VKDepthAnchor

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

depth anchor

## 属性

### number id

唯一标识

### number type

类型

**type 的合法值**

值 | 说明 | 最低版本  
---|---|---  
8 | DEPTH |   
  
### Object size

相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘

属性 | 类型 | 说明  
---|---|---  
width | number | 宽度  
height | number | 高度  
  
### Array.<number> depthArray

包含深度信息的数组

## 示例代码

**depth-detect**

```js
import getBehavior from './behavior'
import yuvBehavior from './yuvBehavior'
import depthBehavior from './depthBehavior'

const NEAR = 0.001
const FAR = 1000

// 初始化着色器函数
let initShadersDone = false

Component({
  behaviors: [getBehavior(), yuvBehavior, depthBehavior],
  data: {
    theme: 'light',
    cameraPosition: 0,
    buttonDisable: true,
  },
  lifetimes: {
    /**
     * 生命周期函数--监听页面加载
     */
    detached() {
      initShadersDone = false
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
        wx.onThemeChange(({
          theme
        }) => {
          this.setData({
            theme
          })
        })
      }
    },
  },
  methods: {
    init() {
      this.initGL()
      this.initDepthGL()
      initShadersDone = true
    },
    render(frame) {
      if (!initShadersDone) return
      const gl = this.gl

      this.renderGL(frame)
      this.renderDepthGL(frame)

      const camera = frame.camera

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
