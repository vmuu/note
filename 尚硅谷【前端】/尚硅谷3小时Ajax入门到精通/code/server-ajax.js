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
    name: 'HELLO THIS JSON'
  }
  // send里面只能接收字符串和，所以对对象进行字符串转换
  let str = JSON.stringify(data)
  //设置响应体
  response.send(str);
});

// 针对IE缓存问题
app.get('/ie', (request, response) => {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  //设置响应体
  response.send('HELLO IE');
});

// 针对网络问题
app.get('/delay', (request, response) => {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置延时响应
  setTimeout(() => {
    //设置响应体
    response.send('响应超时');
  }, 3000)
});

// juery ajax请求处理
app.all('/jQuery-server', (request, response) => {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*')
  //创建一个返回的数据
  const data = { name: 'ymj' }
  let str = JSON.stringify(data)
  response.send(str);
  // response.send('Hello jQuery AJAX');
});

// axios 请求处理
app.all('/axios-server', (request, response) => {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*')
  //创建一个返回的数据
  const data = { name: 'ymj' }
  let str = JSON.stringify(data)
  response.send(str);
  // response.send('Hello axios AJAX');
});

// fetch 请求处理
app.all('/fetch-server', (request, response) => {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*')
  //创建一个返回的数据
  const data = { name: 'ymj' }
  let str = JSON.stringify(data)
  response.send(str);
  // response.send('Hello axios AJAX');
});

//  监听端口启用服务
app.listen(8000, () => {
  console.log("服务已启动")
})