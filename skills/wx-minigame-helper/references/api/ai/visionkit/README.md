# AI 能力 / VisionKit 视觉套件

> 路径：`api/ai/visionkit/`　|　本目录 44 篇

## 文档列表

| 文档 | 说明 |
|---|---|
| [VKBodyAnchor](VKBodyAnchor.md) |  |
| [Float32Array VKCamera.getProjectionMatrix(number near, number far)](VKCamera.getProjectionMatrix.md) | 获取投影矩阵 |
| [VKCamera](VKCamera.md) |  |
| [VKDepthAnchor](VKDepthAnchor.md) |  |
| [VKFaceAnchor](VKFaceAnchor.md) |  |
| [ArrayBuffer VKFrame.getCameraBuffer(number width, number height)](VKFrame.getCameraBuffer.md) | 获取当前帧 rgba buffer。iOS 端微信在 v8.0.20 开始支持，安卓端微信在 v8.0.30 开始支持。按 aspect-fill 规则裁剪，此接口要求在创建 VKSession 对象 |
| [ArrayBuffer VKFrame.getCameraJpgBuffer(number width, number height, number quality)](VKFrame.getCameraJpgBuffer.md) | 获取当前帧的 jpg 信息Buffer。安卓微信 8.0.49 开始支持，iOS微信 8.0.49 开始支持。 |
| [Object VKFrame.getCameraTexture(WebGLRenderingContext gl)](VKFrame.getCameraTexture.md) | 获取当前帧纹理，目前只支持 YUV 纹理。 |
| [Object VKFrame.getDepthBuffer()](VKFrame.getDepthBuffer.md) | 获取每帧的深度图信息Buffer。安卓微信 8.0.38 开始支持，iOS微信 8.0.39 开始支持。 |
| [Float32Array VKFrame.getDisplayTransform()](VKFrame.getDisplayTransform.md) | 获取纹理调整矩阵。默认获取到的纹理是未经裁剪调整的纹理，此矩阵可用于在着色器中根据帧对象尺寸对纹理进行裁剪。 |
| [Object VKFrame.getLegSegmentBuffer()](VKFrame.getLegSegmentBuffer.md) | 获取每帧的腿部分割信息Buffer，安卓微信 8.0.43，iOS微信 8.0.43 开始支持。 |
| [VKFrame](VKFrame.md) |  |
| [VKHandAnchor](VKHandAnchor.md) |  |
| [VKMarkerAnchor](VKMarkerAnchor.md) |  |
| [VKOCRAnchor](VKOCRAnchor.md) |  |
| [VKOSDAnchor](VKOSDAnchor.md) |  |
| [VKPlaneAnchor](VKPlaneAnchor.md) |  |
| [number VKSession.addMarker(string path)](VKSession.addMarker.md) | 添加一个 marker，要求调 wx.createVKSession 时传入的 track.marker 为 true |
| [number VKSession.addOSDMarker(string path)](VKSession.addOSDMarker.md) | 添加一个 OSD marker（one-shot detection marker），要求调 wx.createVKSession 时传入的 track.OSD 为 true |
| [VKSession.cancelAnimationFrame(number requestID)](VKSession.cancelAnimationFrame.md) | 取消由 requestAnimationFrame 添加到计划中的动画帧请求。 |
| [VKSession.destroy()](VKSession.destroy.md) | 销毁会话。 |
| [VKSession.detectBody(Object object)](VKSession.detectBody.md) | 静态图像人体关键点检测。当 wx.createVKSession 参数传入 {track: {body: {mode: 2} } } 时可用。用法详情指南文档。 |
| [VKSession.detectDepth(Object object)](VKSession.detectDepth.md) | 深度识别。当 wx.createVKSession 参数传入 {track: {depth: {mode: 2} } } 时可用。用法详情指南文档。 |
| [VKSession.detectFace(Object object)](VKSession.detectFace.md) | 静态图像人脸关键点检测。当 wx.createVKSession 参数传入 {track: {face: {mode: 2} } } 时可用。用法详情指南文档。安卓微信8.0.25开始支持，iOS微信 |
| [VKSession.detectHand(Object object)](VKSession.detectHand.md) | 静态图像手势关键点检测。当 wx.createVKSession 参数传入 {track: {hand: {mode: 2} } } 时可用。用法详情指南文档。 |
| [Array.<Object> VKSession.getAllMarker()](VKSession.getAllMarker.md) | 获取所有 marker，要求调 wx.createVKSession 时传入的 track.marker 为 true |
| [Array.<Object> VKSession.getAllOSDMarker()](VKSession.getAllOSDMarker.md) | 获取所有 OSD marker，要求调 wx.createVKSession 时传入的 track.OSD 为 true |
| [VKFrame VKSession.getVKFrame(number width, number height)](VKSession.getVKFrame.md) | 获取帧对象，每调用一次都会触发一次帧分析过程。目前 VKSession 相机的最大帧数是 30 fps，因此调用 getVKFrame 的频率也可以限制在 30 fps，以减少渲染开销。 |
| [Array.<Object> VKSession.hitTest(number x, number y, Object reset)](VKSession.hitTest.md) | 触摸检测，v1 版本只支持单平面（即 hitTest 生成一次平面后，后续 hitTest 均不会再生成平面，而是以之前生成的平面为基础进行检测）。如果需要重新识别其他平面，可以在调用此方法时将 re |
| [VKSession](VKSession.md) |  |
| [VKSession.off(string eventName, function fn)](VKSession.off.md) | 取消监听会话事件。 |
| [VKSession.on(string eventName, function fn)](VKSession.on.md) | 监听会话事件。 |
| [VKSession.removeMarker(number markerId)](VKSession.removeMarker.md) | 删除一个 marker，要求调 wx.createVKSession 时传入的 track.marker 为 true |
| [VKSession.removeOSDMarker(number markerId)](VKSession.removeOSDMarker.md) | 删除一个 OSD marker，要求调 wx.createVKSession 时传入的 track.OSD 为 true |
| [number VKSession.requestAnimationFrame(function callback)](VKSession.requestAnimationFrame.md) | 在下次进行重绘时执行。 |
| [VKSession.runOCR(Object object)](VKSession.runOCR.md) | 静态图像OCR检测。当 wx.createVKSession 参数传入 {track: {OCR: {mode: 2} } } 时可用。用法详情指南文档。 |
| [VKSession.setDepthOccRange(number threshold)](VKSession.setDepthOccRange.md) | 更新 深度遮挡 Occ范围，要求调 wx.createVKSession 时传入 {track: {depth: {mode: 2} } } |
| [VKSession.start(function callback)](VKSession.start.md) | 开启会话。 |
| [VKSession.stop()](VKSession.stop.md) | 停止会话。 |
| [VKSession.update3DMode(Object object)](VKSession.update3DMode.md) | 更新三维识别相关配置，要求调 wx.createVKSession 时使用 face / hand / body。 |
| [VKSession.updateMaskMode(Object object)](VKSession.updateMaskMode.md) | 设置裁剪相关配置，要求调 wx.createVKSession 时使用 shoe。 |
| [VKSession.updateOSDThreshold(number threshold)](VKSession.updateOSDThreshold.md) | 更新 OSD 识别精确度，要求调 wx.createVKSession 时传入的 track.OSD 为 true |
| [VKSession wx.createVKSession(Object object)](wx.createVKSession.md) | 创建 vision kit 会话对象。详见指南 |
| [boolean wx.isVKSupport(string version)](wx.isVKSupport.md) | 判断支持版本 |
