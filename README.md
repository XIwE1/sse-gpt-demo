# sse-gpt-demo
学习、使用SSE，模仿GPT的交互效果

```nodemon sse-server.js```

[**SSE**（Server-Sent Events）](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events)，即服务器发送事件，是一种**基于 HTTP 协议、用于服务端向客户端推送实时数据的技术**。

在不需要请求服务端的情况下，相对于繁重的 ws，SSE 无疑是一种简单、高效的轻量级代替方案。

**`SSE`通信的数据类型为事件流**，每个事件由以下字段组成`{ event?, id?, data, retry? }`。

**服务端实现**：设置对应的响应头，封装数据为事件，控制发送频率，合理断开连接

**客户端实现**：`EventSource`使用简单 但不够灵活，`fetch`使用灵活 但需要手动解析数据

欢迎关注[我的掘金主页](https://juejin.cn/user/1372654389433496/posts)，一起学习更多前端知识
