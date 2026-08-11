---
title: "wx.requestFacialRecognition(Object object)"
type: api
category: api/open/account-info
api: "wx.requestFacialRecognition"
source: https://developers.weixin.qq.com/minigame/dev/api/open-api/account-info/wx.requestFacialRecognition.html
---

# wx.requestFacialRecognition(Object object)

> 基础库 3.11.2 开始支持，低版本需做[兼容处理](<../../../guide/runtime/client-lib/compatibility.md>)。

> **以[Promise 风格](<https://developers.weixin.qq.com/minigame/dev/game-engine/worker/api.html#%E5%BC%82%E6%AD%A5-API-%E8%BF%94%E5%9B%9E-Promise>) 调用**：不支持
> 
> **微信 Windows 版** ：支持
> 
> **微信 Mac 版** ：支持

## 功能描述

腾讯游戏人脸识别验证功能是基于健康系统防沉迷体系，用于识别疑似未成年人冒用成年人账号游玩游戏的行为，是防止未成年人沉迷网络游戏的一项重要措施。本接口是为开通虚拟支付功能的小游戏开发者提供的，此接口是基于人脸识别的未成年人身份核验接口。本次识别是根据用户在腾讯健康系统中留存的实名信息进行验证，结果将直接返回至开发者。

## 参数

### Object object

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
complete | function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）  
  
## 错误

错误码 | 错误信息 | 说明  
---|---|---  
0 | 人脸识别成功 |   
2002004 | 人脸识别失败 |   
2002006 | 用户取消/超时/不同意，导致未完成人脸识别 |   
2002007 | 本用户7天内人脸识别已通过，通过日期为XX |   
2002008 | 本日已调起过人脸识别或者本月调用次数已达上限 |   
2002009 | 无权限发起人脸识别 |   
  
## 接口限额

  * 超出限额后将返回错误码 2002008（频率控制）
  * 1天内全部游戏对一个用户只能调起1次人脸识别
  * 若用户人脸识别通过：7天内不能再被弹出人脸识别
  * 根据小游戏评级每个月限制使用次数，一旦发现恶意滥用接口，会取消使用资格。具体使用次数如下： 
    * S级：300次/月
    * A级：100次/月
    * B级：30次/月

## 处理流程

![人脸识别流程图](https://mmgame.qpic.cn/image/2034b86e1e8f3541629d4b4d16cf41ff84fd99efe25f4fac181603edd8a29e14/0)

## 示例代码
    
    
    // 实际业务场景：防沉迷身份验证
    function checkUserIdentity() {
      wx.requestFacialRecognition({
        success(res) {
          // 场景 1：本次人脸识别通过
          // res = { errCode: 0, errMsg: 'ok', iv: 'xxx', encryptedData: 'xxx' }
          console.log('人脸识别成功:', res)
          // 如果需要服务端二次校验，可将 iv 和 encryptedData 发送到开发者服务端
          // 服务端使用 session_key 解密 encryptedData 来验证结果真实性
    
          // 允许继续游戏
          startGame()
        },
        fail(err) {
          console.error('人脸识别失败:', err)
    
          let tipMessage = ''
          let shouldBlock = false  // 是否需要阻断游戏
    
          // 根据错误码进行不同处理
          switch (err.errCode) {
            case 2002004:
              // 人脸识别失败（需要阻断）
              // err = { errCode: 2002004, errMsg: '人脸识别失败' }
              tipMessage = '识别失败，请稍后重试'
              shouldBlock = true
              break
    
            case 2002006:
              // 用户取消/超时/不同意，导致未完成人脸识别（需要阻断）
              // err = { errCode: 2002006, errMsg: '用户取消' }
              tipMessage = '您已取消验证，无法继续游戏'
              shouldBlock = true
              break
    
            case 2002007:
              // 本用户7天内人脸识别已通过（可以继续游戏）
              // err = { errCode: 2002007, errMsg: '本用户7天内人脸识别已通过，通过日期为2024-01-15', iv: 'xxx', encryptedData: 'xxx' }
              tipMessage = '您已完成验证'
              shouldBlock = false
              break
    
            case 2002008:
              // 频率控制：本日已调起过人脸识别 or 本月调用次数已达上限（可以继续游戏）
              // err = { errCode: 2002008, errMsg: '本日已调起过人脸识别' }
              // 或 err = { errCode: 2002008, errMsg: '本月调用次数已达上限' }
              tipMessage = '今日验证次数已达上限'
              shouldBlock = false
              break
    
            case 2002009:
              // 无权限发起人脸识别（可以继续游戏）
              // err = { errCode: 2002009, errMsg: '无权限发起人脸识别' }
              tipMessage = '暂无权限使用此功能'
              shouldBlock = false
              break
    
            default:
              // 系统异常等其他错误（可以继续游戏，避免影响正常用户）
              tipMessage = '系统异常，请稍后重试'
              shouldBlock = false
          }
    
          if (tipMessage) {
            wx.showModal({
              title: '提示',
              content: tipMessage,
              showCancel: false
            })
          }
    
          if (shouldBlock) {
            // 仅对识别失败(2002004)和用户取消(2002006)阻断游戏
            restrictGameFeatures()
          } else {
            // 其他情况允许继续游戏
            startGame()
          }
        },
        complete(res) {
          // 无论成功失败均会触发
          console.log('人脸识别流程结束:', res)
        }
      })
    }
    

对于敏感操作，不建议仅依赖客户端返回的明文结果。建议将 iv 和 encryptedData 发送到开发者服务端，使用 session_key 进行解密校验，确保数据未被篡改。 数据校验与解密详见： https://developers.weixin.qq.com/minigame/dev/guide/open-ability/signature.html
