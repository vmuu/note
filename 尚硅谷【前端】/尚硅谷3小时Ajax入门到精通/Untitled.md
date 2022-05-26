![image-20220526103055675](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220526103055675.png)



## 08.尚硅谷_AJAX-express框架介绍与基本使用

初始化

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



安装express

```bash
npm i express
```

启动服务

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

