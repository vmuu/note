[toc]

# 一、基础知识

## 1.1AJAX简介

AJAX 全称为 Asynchronous JavaScript And XML，就是异步的 JS 和 XML。 

通过 AJAX 可以在浏览器中向服务器发送异步请求，最大的优势：`无刷新获取数据`。 

AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。 

## 1.2 AJAX的特点

### 1.2.1 AJAX 的优点

1) 可以无需刷新页面而与服务器端进行通信。 

2) 允许你根据用户事件来更新部分页面内容。

### 1.2.2 AJAX 的缺点

1) 没有浏览历史，不能回退 

2) 存在跨域问题(同源) 

3) SEO 不友好

## 1.3 XML简介

XML 可扩展标记语言。 

XML 被设计用来传输和存储数据。 

XML 和 HTML 类似，不同的是 HTML 中都是预定义标签，而 XML 中没有预定义标签， 

全都是自定义标签，用来表示一些数据。

比如： 

> name = "孙悟空" ; age = 18 ; gender = "男" ; 

用 XML 表示：

```xml
<?xml version="1.0" encoding="utf-8"?>

<student> 
  <name>孙悟空</name>  
  <age>18</age>  
  <gender>男</gender> 
</student>
```

现在开发中多数已经被 JSON 取代了。

用 JSON 表示：

```json
{"name":"孙悟空","age":18,"gender":"男"} 
```

## 1.4 HTTP简介

HTTP（hypertext transport protocol）协议『超文本传输协议』，协议详细规定了浏览器和万维网服务器之间互相通信的约定，规则。

### 1.4.1 请求报文

重点是格式与参数

```
行    POST  /s?ie=utf-8  HTTP/1.1 
头    Host: atguigu.com
​    Cookie: name=guigu
​    Content-type: application/x-www-form-urlencoded
​    User-Agent: chrome 83
空行
体    username=admin&password=admin

```

### 1.4.2 响应报文

```
TTP/1.1  200  OK
行    HTTP/1.1  200  OK
头    Content-Type: text/html;charset=utf-8
​    Content-length: 2048
​    Content-encoding: gzip
空行   
体    <html>
​      <head>
​      </head>
​      <body>
​        <h1>一级标题</h1>
​      </body>
​    </html>
​```

常用的状态码及含义：
404（未找到） 服务器找不到请求的网页。
403（禁止） 服务器拒绝请求。
401（未授权） 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
500（服务器内部错误） 服务器遇到错误，无法完成请求。
200（成功） 服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页。
```

常用的状态码及含义：https://www.jianshu.com/p/c8c756c49f7f

# 二、express框架

后面我们使用express框架模拟后端响应操作。

Node.js中文网：[http://nodejs.cn/](http://nodejs.cn/)

Express中文网：[https://www.expressjs.com.cn/](https://www.expressjs.com.cn/)

## 2.1 AJAX-express框架介绍与基本使用

初始化命令：

```bash
npm init --yes
```

```json
{
  "name": "administrator",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "antd": "^4.16.5",
    "hexo-generator-search": "^2.4.3",
    "hexo-generator-searchdb": "^1.4.0"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

安装express命令：

```bash
npm i express
```

启动服务：

```javascript
// 引入express
const express = require('express')
// 创建应用对象
const app = express()

// 创建路由规则
app.get('/',(request , response)=>{
    response.send('hello world');
});
//  监听端口启用服务
app.listen(8000,()=>{
    console.log("服务已启动")
})
```

## 2.2 使用nodemon工具

> 用来监控你 node.js 源代码的任何变化和自动重启你的服务器。
>
> 以前，我们开发一个node后端服务时，每次更改文件，均需重启一下，服务才能生效。这使我们的开发效率降低了很多。nodemon的出现，可以随时监听文件的变更，自动重启服务，我们开发时只需关注代码即可，不再需要手动重启服务。

官方地址：[https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)

安装命令：

```bash
npm install -g nodemon
```

使用命令：

```
nodemon
```



# 三、原生AJAX请求的基本操作

**AJAX请求状态**

xhr.readyState 可以用来查看请求当前的状态 

[https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState)

> 0: 表示 XMLHttpRequest 实例已经生成，但是 open()方法还没有被调用。 
>
> 1: 表示 send()方法还没有被调用，仍然可以使用 setRequestHeader()，设定 HTTP请求的头信息。
>
> 2: 表示 send()方法已经执行，并且头信息和状态码已经收到。 
>
> 3: 表示正在接收服务器传来的 body 部分的数据。 
>
> 4: 表示服务器数据已经完全接收，或者本次接收已经失败了 

## 3.1 get 请求方式的使用

在这里实现一个，点击发送请求按钮，前端向服务器发送一个请求，然后服务器响应数据在DIV中显示出来。

前端代码：

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX GET 请求</title>
    <style>
        #result {
            width: 200px;
            height: 100px;
            border: solid 1px #90b;
        }
    </style>
</head>

<body>
    <button>点击发送请求</button>
    <div id="result"></div>

    <script>
        //获取button元素
        const btn = document.getElementsByTagName('button')[0];
        const result = document.getElementById("result");
        //绑定事件
        btn.onclick = function () {
            //1. 创建HTTP请求对象
            const xhr = new XMLHttpRequest();
            //2. 初始化 设置请求方法和 url
            xhr.open('GET', 'http://127.0.0.1:8000/server');
            // xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300');
            //3. 发送请求
            xhr.send();
            //4. 事件绑定 处理服务端返回的结果
            // on  when 当....时候
            // readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
            // change  改变
            xhr.onreadystatechange = function () {
                //判断 (服务端返回了所有的结果)
                if (xhr.readyState === 4) {
                    //判断响应状态码 200  404  403  401 500
                    // 2xx 成功
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // 处理结果  行 头 空行 体
                        // 输出响应体
                        console.log(xhr.status);//状态码
                        console.log(xhr.statusText);//状态字符串
                        console.log(xhr.getAllResponseHeaders());//所有响应头
                        console.log(xhr.response);//响应体
                        //设置 result 的文本
                        result.innerHTML = xhr.response;
                    }
                }
            }
        }
    </script>
</body>

</html>
```

express模拟后端：

```javascript
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

app.get('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX GET');
});

//  监听端口启用服务
app.listen(8000, () => {
    console.log("服务已启动")
})
```

使用参数的话在直接在链接后面跟上参数，如：

```javascript
xhr.open('GET', 'http://127.0.0.1:8000/server');
```

改为

```javascript
xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300');
```

## 3.2 post 请求方式的使用

在这里实现一个，当鼠标移入到页面上的div元素时，页面发送请求到服务器，前端向服务器发送一个请求，然后服务器响应数据在DIV中显示出来。

前端代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX POST 请求</title>
    <style>
        #result {
            width: 200px;
            height: 100px;
            border: solid 1px #90b;
        }
    </style>
</head>

<body>
    <div id="result"></div>
    <script>
        //获取元素
        const result = document.getElementById("result");
        //绑定事件
        result.addEventListener("mouseover", function () {
            //1. 创建HTTP请求对象
            const xhr = new XMLHttpRequest();
            //2. 初始化 设置请求方法和 url
            xhr.open('POST', 'http://127.0.0.1:8000/server');
            // xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300');
            //3. 发送请求
            xhr.send();
            //4. 事件绑定 处理服务端返回的结果
            // on  when 当....时候
            // readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
            // change  改变
            xhr.onreadystatechange = function () {
                //判断 (服务端返回了所有的结果)
                if (xhr.readyState === 4) {
                    //判断响应状态码 200  404  403  401 500
                    // 2xx 成功
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // 处理结果  行 头 空行 体
                        // 输出响应体
                        console.log(xhr.status);//状态码
                        console.log(xhr.statusText);//状态字符串
                        console.log(xhr.getAllResponseHeaders());//所有响应头
                        console.log(xhr.response);//响应体
                        //设置 result 的文本
                        result.innerHTML = xhr.response;
                    }
                }
            }
        })
    </script>
</body>

</html>
```

express模拟后端：

```javascript
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// 创建post路由规则
app.post('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
	
    //设置响应体
    response.send('HELLO AJAX POST');
});
//  监听端口启用服务
app.listen(8000, () => {
    console.log("服务已启动")
})
```

与get请求方式不同的是这里使用的是post请求，设置post请求的反应请求

```javascript
// 创建路由规则
app.post('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('hello ajax');
});
```

使用参数方法例如：

```javascript
// 设置请求头
xhr.send('a=100&b=200&c=300');
// xhr.send('a:100&b:200&c:300');// 其他形式
// xhr.send('1233211234567');// 可以是任意格式数据
```

也可以设置头信息

```javascript
// 设置请求头
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('name', 'atguigu'); // 可以自定义请求头，非预定的
```

如果自定义请求头信息，服务端也需要相应的响应

```javascript
// 设置响应头信息 
response.setHeader('Access-Control-Allow-Headers', '*') // 允许任何响应头
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/7a22eb82ee564185b193fa4decea955a.png#pic_center)

express模拟后端：

```javascript
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// all可以接收任意类型的请求 
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');// 允许任何响应头
    //设置响应体
    response.send('HELLO AJAX POST');
});
//  监听端口启用服务
app.listen(8000, () => {
    console.log("服务已启动")
})
```

前端代码：
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX POST 请求</title>
    <style>
        #result {
            width: 200px;
            height: 100px;
            border: solid 1px #90b;
        }
    </style>
</head>

<body>
    <div id="result"></div>
    <script>
        //获取元素
        const result = document.getElementById("result");
        //绑定事件
        result.addEventListener("mouseover", function () {
            //1. 创建HTTP请求对象
            const xhr = new XMLHttpRequest();
            //2. 初始化 设置请求方法和 url
            xhr.open('POST', 'http://127.0.0.1:8000/server');
            //设置请求头
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('name', 'atguigu');

            //3. 发送请求
            xhr.send('a=100&b=200&c=300');
            //4. 事件绑定 处理服务端返回的结果
            // on  when 当....时候
            // readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
            // change  改变
            xhr.onreadystatechange = function () {
                //判断 (服务端返回了所有的结果)
                if (xhr.readyState === 4) {
                    //判断响应状态码 200  404  403  401 500
                    // 2xx 成功
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // 处理结果  行 头 空行 体
                        // 输出响应体
                        console.log(xhr.status);//状态码
                        console.log(xhr.statusText);//状态字符串
                        console.log(xhr.getAllResponseHeaders());//所有响应头
                        console.log(xhr.response);//响应体
                        //设置 result 的文本
                        result.innerHTML = xhr.response;
                    }
                }
            }
        })
    </script>
</body>

</html>
```

## 3.3 服务器响应 JSON 数据

设置一个键盘事件，当在网页中按下任意键盘，网页向服务器发送数据，然后服务端响应，反馈一组JSON数据，页面接收到后在div中显示

前端代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JSON响应</title>
  <style>
    #result {
      width: 200px;
      height: 100px;
      border: 1px solid red;
    }
  </style>
</head>

<body>
  <div id="result"></div>
  <script>
    const result = document.getElementById('result')
    // 绑定按键按下事件
    window.onkeydown = function () {
      // 创建对象
      const xhr = new XMLHttpRequest();
      // 设置响应体数据类型，自动对数据进行转化
      // xhr.responseType = 'json';
      // 初始化
      xhr.open('GET', 'http://127.0.0.1:8000/json-server')
      // 发送请求
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            // 查看返回的数据
            // console.log(xhr.response)
            // result.innerHTML = xhr.response;
            // 1、手动对数据进行转化
            let data = JSON.parse(xhr.response)
            console.log(data)
            result.innerHTML = data.name
            ///2、自动对数据进行转化
            // console.log(xhr.response)
            // result.innerHTML = xhr.response.name;
          }
        }
      }
    }
  </script>
</body>

</html>
```
要把数据在div中显示，有两种转换的方式：

1、手动对数据进行转化

```javascript
let data = JSON.parse(xhr.response)// 转换数据
result.innerHTML = data.name// 输出到页面
```

2、自动对数据进行转化

```javascript
xhr.responseType = 'json';//设置响应体数据类型
result.innerHTML = xhr.response.name;// 转换数据
result.innerHTML = data.name// 输出到页面
```

express模拟后端：

```java
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// 设置all可以接收任意类型的请求 
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

//  监听端口启用服务
app.listen(8000, () => {
  console.log("服务已启动")
})
```

## 3.4 IE浏览器缓存问题解决

前端代码：

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IE浏览器缓存</title>
  <style>
    #result {
      width: 200px;
      height: 100px;
      border: 1px solid red;
    }
  </style>
</head>

<body>
  <button id="butt">点击</button>
  <div id="result"></div>
  <script>
    const result = document.querySelector('#result');
    const butt = document.getElementsByTagName('button')[0];
    butt.addEventListener('click', function () {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', 'http://127.0.0.1:8000/ie?t=' + Date.now())
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            result.innerHTML = xhr.response;
            console.log('发送请求成功！')
          }
        }
      }
    })
  </script>
</body>

</html>
```

在发送请求时加上时间：

```javascript
xhr.open('GET', 'http://127.0.0.1:8000/ie?t=' + Date.now())
```

```javascript
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// 针对IE缓存问题
app.get('/ie', (request, response) => {
  //设置响应头  设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  //设置响应体
  response.send('HELLO IE');
});

//  监听端口启用服务
app.listen(8000, () => {
  console.log("服务已启动")
})
```

## 3.5 请求超时与网络异常处理

前端代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>请求超时与网络异常</title>
  <style>
    #result {
      width: 200px;
      height: 100px;
      border: solid 1px #90b;
    }
  </style>
</head>

<body>
  <button>点击发送请求</button>
  <div id="result"></div>
  <script>
    const btn = document.getElementsByTagName('button')[0];
    const result = document.querySelector('#result');

    btn.addEventListener('click', function () {
      const xhr = new XMLHttpRequest()
      xhr.open('get', 'http://127.0.0.1:8000/delay')
      xhr.send()
      // 超时 2s 设置
      xhr.timeout = 2000
      // 超时回调
      xhr.ontimeout = function () {
        alert("网络异常，请稍后重试！")
      }
      // 网络异常回调
      xhr.onerror = function () {
        alert("您的网络似乎出现了一些问题！")
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            result.innerHTML = xhr.response
          }
        }
      }
    })
  </script>
</body>

</html>
```

主要代码：

```javascript
// 超时 2s 设置
xhr.timeout = 2000
// 超时回调
xhr.ontimeout = function () {
    alert("网络异常，请稍后重试！")
}
// 网络异常回调
xhr.onerror = function () {
    alert("您的网络似乎出现了一些问题！")
}
```

express模拟后端：

```javascript
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

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
//  监听端口启用服务
app.listen(8000, () => {
  console.log("服务已启动")
})
```

## 3.6 AJAX请求取消操作

使用abort进行取消：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>取消请求</title>
</head>

<body>
    <button>点击发送</button>
    <button>点击取消</button>
    <script>
        //获取元素对象
        const btns = document.querySelectorAll('button');
        let x = null;

        btns[0].onclick = function () {
            x = new XMLHttpRequest();
            x.open("GET", 'http://127.0.0.1:8000/delay');
            x.send();
        }

        // 使用abort进行取消
        btns[1].onclick = function () {
            x.abort();
        }
    </script>
</body>

</html>
```

## 3.7 重复请求问题

创建一个变量，用于状态判断

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>取消重复请求</title>
</head>

<body>
  <button>点击请求</button>
  <button>点击取消</button>
  <script>
    // 获取元素对象
    const buttons = document.querySelectorAll('button')
    let x = null;
    // 设置变量标识
    let isSending = false;// 添加变量用于判断是否在发送AJAX请求，false为未发送
    buttons[0].onclick = function () {
      if (isSending) x.abort() //判断如果状态为 “正在发送” 则取消发送
      x = new XMLHttpRequest()
      isSending = true; // 设置状态为正在发送
      x.open('GET', 'http://127.0.0.1:8000/delay')
      x.send()
      x.onreadystatechange = function () {
        if (x.readyState == 4) {
          // 修改标识变量
          isSending = false; // 发送完毕设置状态为 “未发送”
        }
      }
    }
    // 使用abort取消
    buttons[1].onclick = function () {
      x.abort();
    }
  </script>
</body>

</html>
```

# 四、使用jQuery发送AJAX请求

## 4.1 get请求

$.get(url, [data], [callback], [type]) 

url:请求的 URL 地址。 

data:请求携带的参数。 

callback:载入成功时回调函数。 

type:设置返回内容格式，xml, html, script, json, text, _default。

## 4.2 post请求

$.post(url, [data], [callback], [type]) 

url:请求的 URL 地址。 

data:请求携带的参数。 

callback:载入成功时回调函数。 

type:设置返回内容格式，xml, html, script, json, text, _default。

**示例代码：**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery 发送 AJAX 请求</title>
    <link crossorigin="anonymous" href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
        rel="stylesheet">
    <script crossorigin="anonymous" src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
    <div class="container">
        <h2 class="page-header">jQuery发送AJAX请求 </h2>
        <button class="btn btn-primary">GET</button>
        <button class="btn btn-danger">POST</button>
        <button class="btn btn-info">通用型方法ajax</button>
    </div>
    <script>
        $('button').eq(0).click(function () {
            $.get('http://127.0.0.1:8000/jquery-server', { a: 100, b: 200 }, function (data) {
                console.log(data);
            }, 'json');
        });

        $('button').eq(1).click(function () {
            $.post('http://127.0.0.1:8000/jquery-server', { a: 100, b: 200 }, function (data) {
                console.log(data);
            });
        });

        $('button').eq(2).click(function () {
            $.ajax({
                //url
                url: 'http://127.0.0.1:8000/jquery-server',
                //参数
                data: { a: 100, b: 200 },
                //请求类型
                type: 'GET',
                //响应体结果
                dataType: 'json',
                //成功的回调
                success: function (data) {
                    console.log(data);
                },
                //超时时间
                timeout: 2000,
                //失败的回调
                error: function () {
                    console.log('出错啦!!');
                },
                //头信息
                headers: {
                    c: 300,
                    d: 400
                }
            });
        });

    </script>
</body>

</html>
```

express模拟后端：

```javascript
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

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

//4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});
```

使用JSON格式关键代码示例：

```javascript
$('button').eq(0).click(function () {
      $.get('http://127.0.0.1:8000/jquery-server', { a: 100, b: 200, C: 300 }, function (data) {
        console.log(data)
      }, 'json')
    })
    $('button').eq(1).click(function () {
      $.post('http://127.0.0.1:8000/jquery-server', { a: 100, b: 200, C: 300 }, function (data) {
        console.log(data)
      }, 'json')
    })
```

使用通用方法关键代码示例：

```javascript
$('button').eq(2).click(function () {
    $.ajax({
        //url
        url: 'http://127.0.0.1:8000/jquery-server',
        //参数
        data: { a: 100, b: 200 },
        //请求类型
        type: 'GET',
        //响应体结果
        dataType: 'json',
        //成功的回调
        success: function (data) {
            console.log(data);
        },
        //超时时间
        timeout: 2000,
        //失败的回调
        error: function () {
            console.log('出错啦!!');
        },
        //头信息
        headers: {
            c: 300,
            d: 400
        }
    });
});
```

# 五、使用axios发送AJAX请求

> `axios`是目前前端热门的AJAX工具包

前端示例代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script crossorigin="anonymous" src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.js"></script>
  <!-- crossorigin="anonymous" -->
  <title>axios 发送 AJAX请求</title>
</head>

<body>
  <button>GET</button>
  <button>POST</button>
  <button>AJAX</button>
  <script>
    // https://github.com/axios/axios
    const butt = document.querySelectorAll('button')
    // 配置 baseURL
    axios.defaults.baseURL = 'http://127.0.0.1:8000'

    butt[0].onclick = function () {
      // GET 请求
      axios.get('/axios-server', {
        // url参数
        params: {
          id: 100,
          vip: 7
        },
        // 请求头信息
        headers: {
          name: 'ymj',
          age: 20
        }
      }).then(value => {
        console.log(value)
      })
    }
    butt[1].onclick = function () {
      // POST 请求
      axios.post('/axios-server', {
        username: 'ymj',
        password: '123456'
      }, {
        // url参数
        params: {
          id: 200,
          vip: 8
        },
        // 请求头参数
        headers: {
          weight: 200,
          height: 200
        }
      })
    }
    butt[2].onclick = function () {
      axios({
        // 请求方法
        method: 'POST',
        // 请求链接
        url: '/axios-server',
        // url 参数
        params: {
          vip: 33,
          level: 39
        },
        // 请求体参数
        data: {
          username: 'admin',
          password: 'admin'
        },
        // 请求头信息
        headers: {
          a: 100,
          b: 200
        }
      }).then(response => {
        // 响应状态码
        console.log(response.status);
        // 响应状态字符串
        console.log(response.statusText);
        // 响应头信息
        console.log(response.headers);
        // 响应体
        console.log(response.data);
      })
    }
  </script>
</body>

</html>
```

express模拟后端：

```javascript
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

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

//  监听端口启用服务
app.listen(8000, () => {
  console.log("服务已启动")
})
```

# 六、使用fetch发送AJAX请求

前端示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>fetch 发送 AJAX请求</title>
</head>
<body>
    <button>AJAX请求</button>
    <script>
        //文档地址
        //https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch
        
        const btn = document.querySelector('button');

        btn.onclick = function(){
            fetch('http://127.0.0.1:8000/fetch-server?vip=10', {
                //请求方法
                method: 'POST',
                //请求头
                headers: {
                    name:'atguigu'
                },
                //请求体
                body: 'username=admin&password=admin'
            }).then(response => {
                // return response.text();
                return response.json();
            }).then(response=>{
                console.log(response);
            });
        }
    </script>
</body>
</html>
```

express模拟后端：

```javascript
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
```

# 七、跨域问题

## 1、同源策略概念

同源策略(Same-Origin Policy)最早由 Netscape 公司提出，是浏览器的一种安全策略。

同源： 协议、域名、端口号 必须完全相同。 

违背同源策略就是`跨域`。

## 2、如何解决跨域？

### ① 使用 JSONP

### 1) JSONP 是什么

JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明 

才智开发出来，只支持 get 请求。 

### 2) JSONP 怎么工作的？

在网页有一些标签天生具有跨域能力，比如：img link iframe script。 

JSONP 就是利用 script 标签的跨域能力来发送请求的。 

### 3) JSONP 的使用

**1.动态的创建一个 script 标签**

```javascript
var script = document.createElement("script")
```

**2.设置 script 的 src，设置回调函数** 

```javascript
script.src = "http://localhost:3000/testAJAX?callback=abc";
function abc(data) {
    alert(data.name); 
};
```

**3.将 script 添加到 body 中** 

```javascript
document.body.appendChild(script);
```

**4.服务器中路由的处理**

```javascript
router.get("/testAJAX" , function (req , res) { 
    console.log("收到请求"); 
    var callback = req.query.callback; 
    var obj = { 
        name:"孙悟空", 
        age:18 
    }
    res.send(callback+"("+JSON.stringify(obj)+")"); 
}); 
```

模拟页面代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>首页</title>
</head>
<body>
    <h1>尚硅谷</h1>
    <button>点击获取用户数据</button>
    <script>
        const btn = document.querySelector('button');

        btn.onclick = function(){
            const x = new XMLHttpRequest();
            //这里因为是满足同源策略的, 所以 url 可以简写
            x.open("GET",'/data');
            //发送
            x.send();
            //
            x.onreadystatechange = function(){
                if(x.readyState === 4){
                    if(x.status >= 200 && x.status < 300){
                        console.log(x.response);
                    }
                }
            }
        }
    </script>
</body>
</html>
```

模拟后台代码：

```javascript
const express = require('express');

const app = express();

app.get('/home', (request, response)=>{
    //响应一个页面
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response)=>{
    response.send('用户数据');
});

app.listen(9000, ()=>{
    console.log("服务已经启动...");
});
```

**jQuery 中的 JSONP** 

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>

<body> <button id="btn">按钮</button>
  <ul id="list"></ul>
  <script type="text/javascript" src="./jquery-1.12.3.js"></script>
  <script type="text/javascript"> window.onload = function () {
      var btn = document.getElementById('btn') btn.onclick = function () {
        $.getJSON("http://api.douban.com/v2/movie/in_theaters?callback=?", function (data) {
          console.log(data); //获取所有的电影的条目 var subjects = data.subjects; //遍历电影条目
          for (var i = 0; i < subjects.length; i++) {
            $("#list").append("<li>" + subjects[i].title + "<br />" + "<img src=\"" + subjects[i].images.large + "\" >" + "</li>");
          }
        });
      }
    } </script>
</body>

</html>
```



### ② 使用CORS

[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

### 1) CORS 是什么？

​	CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS 是官方的跨域解决方 案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 请求。跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源 

### 2) CORS 怎么工作的？

​	CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应 以后就会对响应放行。 

### 3) CORS 的使用

主要是服务器端的设置：

```javascript
router.get("/testAJAX", function (req, res) {
    //通过 res 来设置响应头，来允许跨域请求 
    //res.set("Access-Control-Allow-Origin","http://127.0.0.1:3000"); 
    res.set("Access-Control-Allow-Origin", "*");
    res.send("testAJAX 返回的响应");
});
```

