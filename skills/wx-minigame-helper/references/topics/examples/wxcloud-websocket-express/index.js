const express = require('express')
const app = express()
require('express-ws')(app)

const connect = {}

app.get('/', function (req, res) {
  res.send('微信云托管WEBSOCKET服务')
})

app.post('/query', function (req, res) {
  res.send(connect)
})

app.ws('/ws', function (ws, req) {
  let openid = req.headers['x-wx-openid'] // 从header中获取用户openid信息
  if (openid == null) { // 如果不存在则不是微信侧发起的
    openid = new Date().getTime() // 使用时间戳代替
  }
  if (connect[openid] != null) { // 判断用户是否有连接
    ws.send('当前用户已经在其他设备连接过，无法重复连接') // 发送重复连接信息
    ws.close() // 关闭连接
  } else {
    connect[openid] = { // 记录用户信息
      openid: openid, // 用户openid
      source: req.headers['x-wx-source'] || '非微信', // 用户微信来源
      unionid: req.headers['x-wx-unionid'] || '-', // 用户unionid
      ip: req.headers['x-forwarded-for'] || '未知' // 用户所在ip地址
    }
    console.log('链接请求头信息', req.headers)
    ws.on('message', function (msg) {
      console.log('收到消息：', msg)
      ws.send(`收到-${msg}`)
    })
    ws.on('close', function () {
      console.log('链接断开：', openid)
      delete connect[openid]
    })
  }
})

app.listen(80, function () {
  console.log('微信云托管WEBSOCKET服务启动成功！')
})
