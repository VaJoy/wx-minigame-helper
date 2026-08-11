---
title: "VKBodyAnchor"
type: api
category: api/ai/visionkit
api: "VKBodyAnchor"
source: https://developers.weixin.qq.com/minigame/dev/api/ai/visionkit/VKBodyAnchor.html
---

# VKBodyAnchor

> 基础库 2.32.1 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

人体 anchor

## 属性

### number id

唯一标识

### number type

类型

**type 的合法值**

值 | 说明 | 最低版本  
---|---|---  
5 | 人体 |   
  
### number detectId

识别序号

### Object size

相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘

属性 | 类型 | 说明  
---|---|---  
width | number | 宽度  
height | number | 高度  
  
### Object origin

相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘

属性 | 类型 | 说明  
---|---|---  
x | number | 横坐标  
y | number | 纵坐标  
  
### Array.<number> confidence

关键点的置信度

### Array.<Object> points

关键点

属性 | 类型 | 说明  
---|---|---  
x | number | 横坐标  
y | number | 纵坐标  
  
### number score

总体置信值

## 示例代码

**photo-body-detect**

```js
import getBehavior from './behavior'
import yuvBehavior from './yuvBehavior'

const NEAR = 0.001
const FAR = 1000

Component({
  behaviors: [getBehavior(), yuvBehavior],
  data: {
    bodyImgUrl: '',
    bodyImgWidth: 0,
    bodyImgHeight: 0,
    bodyImgOriginWidth: 0,
    bodyImgOriginHeight: 0,
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
    chooseMedia() {
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        success: res => {
          console.log('chooseMedia res', res)
          const imgUrl = res.tempFiles[0].tempFilePath
          wx.getImageInfo({
            src: imgUrl,
            success: res => {
              const fixWidth = 300
              const {
                width,
                height
              } = res
              console.log('getImageInfo res', res)
              this.setData({
                bodyImgUrl: imgUrl,
                bodyImgWidth: fixWidth,
                bodyImgHeight: (fixWidth / width) * height,
                bodyImgOriginWidth: width,
                bodyImgOriginHeight: height
              })
            },
            fail: res => {
              console.error(res)
            }
          })
        },
        fail: res => {
          console.error(res)
        }
      })
    },
    init() {
      this.initGL()
    },
    render(frame) {
      return
      this.renderGL(frame)

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
      this.renderer.state.setCullbody(this.THREE.CullbodyNone)
    },
    async detectbody() {
      if (this.data.bodyImgUrl) {
        const canvas = wx.createOffscreenCanvas({
          type: '2d',
          width: this.data.bodyImgOriginWidth,
          height: this.data.bodyImgOriginHeight,
        })
        const context = canvas.getContext('2d')
        const img = canvas.createImage()
        await new Promise(resolve => {
          img.onload = resolve
          img.src = this.data.bodyImgUrl
        })

        context.clearRect(0, 0, this.data.bodyImgOriginWidth, this.data.bodyImgOriginHeight)
        context.drawImage(img, 0, 0, this.data.bodyImgOriginWidth, this.data.bodyImgOriginHeight)

        this.imgData = context.getImageData(0, 0, this.data.bodyImgOriginWidth, this.data.bodyImgOriginHeight)

        console.log('[frameBuffer] --> ', this.imgData.data.buffer)
        console.log('this.session.detectbody', this.session.detectbody)
        console.log('width', this.data.bodyImgOriginWidth)
        console.log('height', this.data.bodyImgOriginHeight)
        this.session.detectBody({
          frameBuffer: this.imgData.data.buffer,
          width: this.data.bodyImgOriginWidth,
          height: this.data.bodyImgOriginHeight,
          scoreThreshold: 0.5, // 评分阈值
          sourceType: 1
        })
      }
    },
  },
})
```

**body-detect**

```js
import getBehavior from './behavior'
import yuvBehavior from './yuvBehavior'

const NEAR = 0.001
const FAR = 1000

// 顶点着色器
const VSHADER_SOURCE = '' +
  'attribute vec4 a_Position;
' + // 声明attribute变量a_Position，用来存放顶点位置信息
  'void main(){
' +
  '  gl_Position = a_Position;
' + // 将顶点坐标赋值给顶点着色器内置变量gl_Position
  '  gl_PointSize = 4.0;
' + // 设置顶点大小
  '}
'

// 片元着色器
const FSHADER_SOURCE = '' +
  '#ifdef GL_ES
' +
  ' precision mediump float;
' + // 设置精度
  '#endif
' +
  'varying vec4 v_Color;
' + // 声明varying变量v_Color，用来接收顶点着色器传送的片元颜色信息
  'void main(){
' +
  '  float d = distance(gl_PointCoord, vec2(0.5, 0.5));
' + // 计算像素距离中心点的距离
  '  if(d < 0.5) {
' + // 距离大于0.5放弃片元，小于0.5保留片元
  '    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
' +
  '  } else { discard; }
' +
  '}
'

// 初始化着色器函数
let initShadersDone = false

function initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE) {
  // 创建顶点着色器对象
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, VSHADER_SOURCE)
  // 创建片元着色器对象
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, FSHADER_SOURCE)

  if (!vertexShader || !fragmentShader) {
    return null
  }

  // 创建程序对象program
  const program = gl.createProgram()
  if (!gl.createProgram()) {
    return null
  }
  // 分配顶点着色器和片元着色器到program
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  // 链接program
  gl.linkProgram(program)

  // 检查程序对象是否连接成功
  const linked = gl.getProgramParameter(program, gl.LINK_STATUS)
  if (!linked) {
    const error = gl.getProgramInfoLog(program)
    console.log('程序对象连接失败: ' + error)
    gl.deleteProgram(program)
    gl.deleteShader(fragmentShader)
    gl.deleteShader(vertexShader)
    return null
  }
  // 返回程序program对象
  initShadersDone = true
  return program
}

function loadShader(gl, type, source) {
  // 创建顶点着色器对象
  const shader = gl.createShader(type)
  if (shader == null) {
    console.log('创建着色器失败')
    return null
  }

  // 引入着色器源代码
  gl.shaderSource(shader, source)

  // 编译着色器
  gl.compileShader(shader)

  // 检查顶是否编译成功
  const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (!compiled) {
    const error = gl.getShaderInfoLog(shader)
    console.log('编译着色器失败: ' + error)
    gl.deleteShader(shader)
    return null
  }

  return shader
}

// 初始化顶点坐标和顶点颜色
function initVertexBuffers(gl, anchor2DList) {
  const flattenPoints = []
  anchor2DList.forEach(anchor => {
    anchor.points.forEach(point => {
      const {
        x,
        y
      } = point
      flattenPoints.push(x * 2 - 1, 1 - y * 2)
    })
  })

  const vertices = new Float32Array(flattenPoints)
  const n = flattenPoints.length / 2

  // 创建缓冲区对象
  const buffer = gl.createBuffer()
  // 将顶点坐标和顶点颜色信息写入缓冲区对象
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

  // 获取顶点着色器attribute变量a_Position存储地址, 分配缓存并开启
  const a_Position = gl.getAttribLocation(gl.program, 'a_Position')
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(a_Position)
  return n
}

const EDGE_VSHADER_SOURCE =
  `
  attribute vec2 aPosition; 
  varying vec2 posJudge;

  void main(void) {
    gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
    posJudge = aPosition;
  }
`

const EDGE_FSHADER_SOURCE =
  `
  precision highp float;
  uniform vec2 rightTopPoint;
  uniform vec2 centerPoint;
  varying vec2 posJudge;

  float box(float x, float y){
    float xc = x - centerPoint.x;
    float yc = y - centerPoint.y;
    vec2 point = vec2(xc, yc);
    float right = rightTopPoint.x;
    float top =  rightTopPoint.y;
    float line_width = 0.01;
    vec2 b1 = 1.0 - step(vec2(right,top), abs(point));
    float outer = b1.x * b1.y;
    vec2 b2 = 1.0 - step(vec2(right-line_width,top-line_width), abs(point));
    float inner = b2.x * b2.y;
    return outer - inner;
  }

  void main(void) {
      if(box(posJudge.x, posJudge.y) == 0.0 ) discard;

      gl_FragColor = vec4(box(posJudge.x, posJudge.y), 0.0, 0.0, 1.0);

  }
`

function initRectEdgeBuffer(gl, x, y, width, height) {
  const shaderProgram = gl.program
  const centerX = x * 2 - 1 + width
  const centerY = -1 * (y * 2 - 1) - height
  const right = width
  const top = height
  const vertices = [
    -1.0, 1.0,
    -1.0, -1.0,
    1.0, 1.0,
    1.0, -1.0
  ]

  const vertexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
  const aPosition = gl.getAttribLocation(shaderProgram, 'aPosition')
  gl.enableVertexAttribArray(aPosition)
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

  const rightTop = [
    right, top
  ]
  const rightTopLoc = gl.getUniformLocation(shaderProgram, 'rightTopPoint')
  gl.uniform2fv(rightTopLoc, rightTop)

  const centerPoint = [
    centerX, centerY
  ]
  const centerPointLoc = gl.getUniformLocation(shaderProgram, 'centerPoint')
  gl.uniform2fv(centerPointLoc, centerPoint)

  const length = vertices.length / 2

  return length
}

function onDrawRectEdge(gl, x, y, width, height) {
  width = Math.round(width * 100) / 100
  height = Math.round(height * 100) / 100
  const n = initRectEdgeBuffer(gl, x, y, width, height)
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)
}

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
    },
    switchCamera(event) {
      if (this.session.config) {
        const config = this.session.config
        const pos = Number(event.currentTarget.dataset.value)
        config.cameraPosition = pos
        this.session.config = config
        this.setData({
          cameraPosition: event.currentTarget.dataset.value
        })
      }
    },
    render(frame) {
      const gl = this.gl

      this.renderGL(frame)

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

      const anchor2DList = this.data.anchor2DList

      if (!anchor2DList || anchor2DList.length <= 0) {

      } else {
        if (!initShadersDone) {
          this.vertexProgram = initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)
          this.rectEdgeProgram = initShaders(gl, EDGE_VSHADER_SOURCE, EDGE_FSHADER_SOURCE)
          if (!this.vertexProgram || !this.rectEdgeProgram) {
            console.log('初始化着色器失败')
            return
          }
          console.log('初始化着色器成功')
        }

        gl.useProgram(this.vertexProgram)
        gl.program = this.vertexProgram
        // 初始化顶点坐标和顶点颜色
        const n = initVertexBuffers(gl, anchor2DList)

        // 绘制点
        gl.drawArrays(gl.POINTS, 0, n)

        gl.useProgram(this.rectEdgeProgram)
        gl.program = this.rectEdgeProgram

        for (let i = 0; i < anchor2DList.length; i++) {
          onDrawRectEdge(gl, anchor2DList[i].origin.x, anchor2DList[i].origin.y, anchor2DList[i].size.width, anchor2DList[i].size.height)
        }
      }
    },
  },
})
```
