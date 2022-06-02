//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');

  //设置响应体
  response.send('HELLO AJAX GET');
});

// 可以接收任意类型的请求 
app.all('/server', (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  //响应头
  response.setHeader('Access-Control-Allow-Headers', '*');// 允许任何响应头
  //设置响应体
  response.send('HELLO AJAX POST');
});

// 可以接收任意类型的请求 
app.all('/json-server', (request, response) => {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  //响应头
  response.setHeader('Access-Control-Allow-Headers', '*')
  //响应一个数据
  const data = {
    name: 'vmu'
  }
  // send里面只能接收字符串和，所以对对象进行字符串转换
  let str = JSON.stringify(data)
  //设置响应体
  response.send(str);
});

//  监听端口启用服务
app.listen(8000, () => {
  console.log("服务已启动")
})