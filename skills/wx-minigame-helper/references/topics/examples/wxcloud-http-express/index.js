const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { init: initDB, Counter } = require("./db");

const logger = morgan("tiny");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

// 首页
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 更新计数
app.post("/api/count", async (req, res) => {
  const { action } = req.body;
  if (action === "inc") {
    await Counter.create();
  } else if (action === "clear") {
    await Counter.destroy({
      truncate: true,
    });
  }
  res.send({
    code: 0,
    data: await Counter.count(),
  });
});

// 获取计数
app.get("/api/count", async (req, res) => {
  const result = await Counter.count();
  res.send({
    code: 0,
    data: result,
  });
});

/**
 * /api/count 回包格式
{
  "data": {
    "code": 0,
    "data": 7
  },
  "statusCode": 200,
  "header": {
    "Access-Control-Allow-Origin": "*",
    "Content-Length": "19",
    "Content-Type": "application/json; charset=utf-8",
    "Date": "Mon, 24 Aug 2026 15:30:23 GMT",
    "Etag": "W/\"13-gADV/bzer8DoA22t9zpVvAxBCbU\"",
    "Last-Modified": "Mon, 24 Aug 2026 15:30:23 GMT",
    "Server": "Tencent-CloudBase",
    "X-Cloudbase-Request-Id": "b969aee2-9fd0-11f1-b100-5254006937e9",
    "X-Cloudbase-Session-Id": "b969aee2-9fd0-11f1-b100-5254006937e9",
    "X-Cloudbase-Upstream-Status-Code": "200",
    "X-Cloudbase-Upstream-Timecost": "17",
    "X-Cloudbase-Upstream-Type": "Tencent-CloudBaseRun",
    "X-Powered-By": "Express",
    "X-Request-Id": "b969aee2-9fd0-11f1-b100-5254006937e9",
    "X-Upstream-Status-Code": "200"
  },
  "callID": "1787585423470-0.739930458274392"
}
 */


// 小程序调用，获取微信 Open ID
app.get("/api/wx_openid", async (req, res) => {
  if (req.headers["x-wx-source"]) {
    res.send(req.headers["x-wx-openid"]);
  }
});

/*** /api/wx_openid 回包格式
{
  "data": "ouaC269o5G0xo7liG06ocBkqg2Ew",          // 用户的 openid
  "statusCode": 200,
  "header": {
    "Access-Control-Allow-Origin": "*",
    "Content-Length": "28",
    "Content-Type": "text/html; charset=utf-8",
    "Date": "Mon, 24 Aug 2026 15:27:18 GMT",
    "Etag": "W/\"1c-RIv+x6KXjEp35SpnCIGXsEAvXJw\"",
    "Last-Modified": "Mon, 24 Aug 2026 15:27:18 GMT",
    "Server": "Tencent-CloudBase",
    "X-Cloudbase-Request-Id": "4aea3db5-9fd0-11f1-adbf-52540098b74f",
    "X-Cloudbase-Session-Id": "4aea3db5-9fd0-11f1-adbf-52540098b74f",
    "X-Cloudbase-Upstream-Status-Code": "200",
    "X-Cloudbase-Upstream-Timecost": "9",
    "X-Cloudbase-Upstream-Type": "Tencent-CloudBaseRun",
    "X-Powered-By": "Express",
    "X-Request-Id": "4aea3db5-9fd0-11f1-adbf-52540098b74f",
    "X-Upstream-Status-Code": "200"
  },
  "callID": "1787585238076-0.1492173097274223"
}
 */

const port = process.env.PORT || 80;

async function bootstrap() {
  await initDB();
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}

bootstrap();
