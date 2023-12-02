const express = require("express");
const app = express();
const port = 3001;
//允许跨域
app.all("*", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/sse", (req, res) => {
  const str =
    "Server-Sent Events是一种用于实现服务器向客户端实时推送数据的技术。它基于HTTP协议，使用长连接来保持服务器与客户端之间的通信。与传统的轮询或基于WebSocket的实时通信相比，SSE具有简单易用、轻量级的特点。";
  // 设置 SSE 相关的响应头
  res.setHeader("Content-Type", "text/event-stream;charset=utf-8");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  let index = 0;
  const timer = setInterval(() => {
    if (index < str.length) {
      // res.write("data: " + JSON.stringify(str[index]) + "\n");
      // //   res.write("data: " + JSON.stringify({ content: str[index] }) + "\n");
      // index++;

      // 每次仅推送一个字符
      const data = `data: ${JSON.stringify(str[index])}\n`;
      // 此处省略了event id 等属性 . . .
      // const chunk = `${event}${id}${data}\n`;
      const chunk = `${data}\n`;
      // 分割为块进行推送
      res.write(chunk);
      index++;
    } else {
      // 当所有数据都发送完毕时，结束响应
      clearInterval(timer); // 停止定时器
      res.end();
    }
  }, 30);

  // 监听客户端断开连接事件
  req.on("close", () => {
    console.log("Client closed connection.");
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
