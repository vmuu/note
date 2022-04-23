# 学习目标

- 能够知道什么是Node.js能够知道Node.js可以做什么
- 能够说出Node.js中的JavaScript的组成部分
- 能够使用fs模块读写操作文件
- 能够使用path模块处理路径
- 能够使用http模块写一个基本的 web服务器



## 一、初识node.js

### 1.1 初识node

#### 1.1.1 浏览器中的 JavaScript 的组成部分：

![image-20220328023043257](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407050.png)



#### 1.1.2 为什么 JavaScript 可以在浏览器中被执行

![image-20220328023513845](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407051.png)

不同的浏览器使用不同的 JavaScript 解析引擎：

- Chrome 浏览器  =>  V8
- Firefox 浏览器    =>  OdinMonkey（奥丁猴）
- Safri 浏览器        =>  JSCore
- IE 浏览器            =>  Chakra（查克拉）
- etc...

**其中，Chrome 浏览器的 V8 解析引擎性能最好！**



#### 1.1.4 为什么JavaScript可以操作DOM和BOM？

![image-20220328023747893](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407052.png)

每个浏览器都内置了DOM、BOM这样的API函数，因此，浏览器中的JavaScript才可以调用它们。



#### 1.1.5 **浏览器中的JavaScript运行环境：** 

运行环境是指代码正常运行所需的必要环境。

![image-20220328023851984](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407053.png)

- V8 引擎负责解析和执行 JavaScript 代码。
- 内置 API 是由运行环境提供的特殊接口，只能在所属的运行环境中被调用。





#### 1.1.6 **JavaScript能否做后端开发？**

![image-20220321141052341](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407054.png)



### 1.2 Node.js简介

#### 1.2.1 什么是node.js

官方的定义为：

> Node.jsis a `JavaScript runtime` built on Chrome's V8 JavaScript engine.
>
> `Node.js`是一个基于`Chrome V8`引擎的 `JavaScript运行环境`。

Node.js 的官网地址： [https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)



#### 1.2.2 node.js中JavaScript的运行环境

![image-20220321142133027](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407055.png)

注意：

- `浏览器`是JavaScript的`前端运行环境`。
- `Node.js`是JavaScript的`后端运行环境`。
- Node.js 中`无法调用DOM和BOM等`浏览器内置API。




#### 1.2.3  Node.js可以做什么

Nodejs 作为一个JavaScript 的运行环境，仅仅提供了基础的功能和API。然而，基于Node,js 提供的这些基础能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了Node.js，可以让前端程序员胜任更多的工作和岗位:

- ①基于Express框架([http://www.expressjs.com.cn/](http://www.expressjs.com.cn/))，可以快速构建Web应用

- ②基于Electron框架([https://electronjs.org/](https://electronjs.org/))，可以构建跨平台的桌面应用

- ③基于restify框架([http://restify.com/](http://restify.com/))，可以快速构建API接口项目

- ④读写和操作数据库、创建实用的命令行工具辅助前端开发、etc...


总之: Nodejs是大前端时代的“大宝剑”，有了Nodejs 这个超级buff的加持，前端程序员的行业竞争力会越来越强!



####  1.2.4 Node.js怎么学

**浏览器中的JavaScript学习路径：**
JavaScript 基础语法＋浏览器内置API(DOM+ BOM)+第三方库 (jQuery、art-template等)

**Node.js 的学习路径：**
JavaScript 基础语法＋Node.js 内置API模块（fs、path、http等)＋第三方API模块（(express、mysql等)



### 1.3 Node.js环境的安装

如果希望通过Node.js来运行Javascript 代码，则必须在计算机上安装Node.js环境才行。

安装包可以从 Node.js 的官网首页直接下载，进入到Node.js 的官网首页([https://nodejs.org/en/](https://nodejs.org/en/))，点陆绿色的按钮，下载所需的版本后，双击直接安装即可。

![image-20220328024411296](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407056.png)



#### 1.3.1 区分`LTS`版本和`Current`版本的不同

①`LTS`为长期稳定版，对于`追求稳定性`的`企业级项目`来说，推荐安装LTS版本的Node.js。

②`Current`为新特性尝鲜版，对`热衷于尝试新特性`的用户来说，推荐安装Current版本的Node,js。但是，Current版本可
能存在隐藏的Bug 或安全性漏洞，因此不推荐在企业级项目中使用Current版本的 Node.js。



#### 1.3.2 查看已安装的Node.js的版本号

打开终端，在终端输入命令`node -v`后，按下回车键，即可查看已安装的Node.js的版本。

Windows 系统快速打开终端的方式：
使用快捷键`(Windows徽标键＋R)`打开运行面板，输入`cmd`后直接回车，即可打开终端。

![image-20220328024733619](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407057.png)

#### 1.3.3 什么是终端

终端（英文：Terminal）是专门为开发人员设计的，`用于实现人机交互`的一种方式。

作为一名合格的程序员，我们有必要识记一些`常用的终端命令`，来辅助我们更好的操作与使用计算机。



### 1.4 在Node.js中执行JavaScript代码

①打开终端
②输入node要执行的js文件的路径

`console.log("hello word")`

按住shift+鼠标右键可以打开powershell窗口



#### 1.4.1 终端中的快捷键
在Windows的powershell或cmd终端中，我们可以通过如下快捷键，来提高终端的操作效率:

①使用`↑`键，可以快速定位到上一次执行的命令

②使用`tab`键，能够快速补全路径

③使用`esc`键，能够快速清空当前已输入的命令

④输入`cls`命令，可以清空终端



## 二、fs文件系统模块

### 2.1 什么是fs 文件系统模块

fs模块是Node.js 官方提供的、用来操作文件的模块。它提供了一系列的万法和属性，用来满足用尸对又件的操作需求。

**例如:**
`fs.readFile()`方法，用来读取指定文件中的内容

`fs.writeFile()`方法，用来向指定的文件中写入内容

如果要在JavaScript 代码中，使用fs模块来操作文件，则需要使用如下的方式先导入它：

```javascript
const fs = require（"fs"）
```



### 2.2 读取指定文件中的内容

#### 2.2.1 fs.redeFile() 的语法格式

使用fs.readFile()方法，可以读取指定文件中的内容，语法格式如下:

```javascript
fs.readFile(path[, options],callback)
```

**参数解读：**

- 参数1：必选参数，字符串，表示文件的路径。

- 参数2：可选参数，表示以什么编码格式来读取文件。

- 参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。


```javascript
const fs = require('fs')

fs.readFile('D:/node学习/files/1.txt','utf8',function(err,dataStr){
    if (err){
        return console.log('读取文件失败！'+err.message)
    }
    console.log('读取文件成功'+dataStr)
})
```

以`utf8`的编码格式，读取指定文件的内容，并打印`err`和`dataStr·`的值:

![image-20220321151208723](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407058.png)

```javascript
//1、导入fs模块 ,来操作文件
const fs = require('fs')

//2、读取文件存放的路径
// 参数1:读取文件的存放路径
// 参数2:读取文件时候采用的编码格式，一般默认指定utf8
// 参数3:回调函数，拿到读取失败和成功的结果err dataStr

fs.readFile('.\files\1.txt','utf8',function(srr,dataStr){
    //2.1 打印失败的结果
    //如果读取成功，则err的值为null
    //如果读取失败，则err的值为错误对象，dataStr的值为undefined
    console.log(srr)   
    console.log('——————————————————————')
    //2.2 打印成功的结果 
    console.log(dataStr)  
})
```



#### 2.2.2 fs.readFile()的示例代码

向指定的文件路径中，写入文件内容：

![image-20220328025443385](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407059.png)

```javascript
//1、导入fs模块 ,来操作文件
const fs = require('fs')

//2、读取文件存放的路径
// 参数1:读取文件的存放路径
// 参数2:读取文件时候采用的编码格式，一般默认指定utf8
// 参数3:回调函数，拿到读取失败和成功的结果err dataStr

fs.readFile('.\files\1.txt','utf8',function(srr,dataStr){
    //2.1 打印失败的结果
    //如果读取成功，则err的值为null
    //如果读取失败，则err的值为错误对象，dataStr的值为undefined
    console.log(srr)   
    console.log('——————————————————————')
    //2.2 打印成功的结果 
    console.log(dataStr)  
})
```

#### 2.2.3 判断文件是否读取成功

可以判断err对象是否为null，从而知晓文件读取的结果:

![image-20220328025453007](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407061.png)

```javascript
const fs = require('fs')

fs.readFile('D:/node学习/files/1.txt','utf8',function(err,dataStr){
    if (err){
        return console.log('读取文件失败！'+err.message)
    }
    console.log('读取文件成功'+dataStr)
})
```

![image-20220321160829439](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407062.png)



### 2.3 向指定的文件中写入文件

#### 2.3.1 fs.writeFile()的语法格式

使用fs.writeFile(方法，可以向指定的文件中写入内容，语法格式如下:

```javascript
fs.writeFile(file, data[, options], callback)
```

![image-20220328025522694](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407063.png)

**参数解读：**

- 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
- 参数2：必选参数，表示要写入的内容。
- 参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
- 参数4：必选参数，文件写入完成后的回调函数。



#### 2.3.2 fs.writeFile()的示例代码

向指定的文件路径中写入文件内容：

![image-20220328025612092](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407064.png)

```javascript
// 1．导入fs文件系统模块
const fs = require('fs')

// 2．调用fs.writeFile()方法，写入文件的内容l l
    //参数1:表示文件的存放路径
    //参数2:表示要写入的内容
    //参数3:回调函数
fs.writeFile('./files/1.txt','1231',function(err){
    //2.1如果文件写入成功，则err的值等于null
    //2.2如果文件写入失败，则err的值等于一个错误对象Ⅰ
    console.log(err)
})
```



#### 2.3.3 判断文件是否写入成功

可以判断err 对象是否为null，从而知晓文件写入的结果:

![image-20220328025623940](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407065.png)

```javascript
// 1．导入fs文件系统模块
const fs = require('fs')

// 2．调用fs.writeFile()方法，写入文件的内容l l
  //参数1:表示文件的存放路径
  //参数2:表示要写入的内容
  //参数3:回调函数
fs.writeFile('./files/1.txt','1231',function(err){
  //2.1如果文件写入成功，则err的值等于null
  //2.2如果文件写入失败，则err的值等于一个错误对象Ⅰ
  console.log(err)
})
```



### 2.4 练习–考试成绩整理

使用fs文件系统模块，将素材目录下`成绩.txt`文件中的考试数据，整理到`成绩-ok.txt`文件中.

整理前，`成绩.txt`文件中的数据格式如下：

![image-20220328025708573](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407066.png)

> 小红=99 小白=100 小黄=70 小黑=66 小绿=88

整理完成之后，希望得到的`成绩-ok.txt`文件中的数据格式如下：

![image-20220328025717704](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407067.png)

> 小红:99
>
> 小白:100
>
> 小黄:70
>
> 小黑:66
>
> 小绿:88



核心实现步骤：

①导入需要的fs文件系统模块

②使用`fs.readFile()`方法，读取素材目录下的`成绩.txt`文件

③判断文件是否读取失败

④文件读取成功后，处理成绩数据

⑤将处理完成的成绩数据，调用`fs.writeFile()`方法，写入到新文件`成绩-ok.txt`中

 

```javascript
// 1．导入fs模块
const fs = require('fs')

// 2．调用fs.readFile()读取文件的内容
fs.readFile('./成绩.txt','utf8',function(err,dataStr){
    //3、判断是否读取成功
    if (err) {
        return console.log('读取失败：'+err.message)
    }
    console.log('读取成功！数据为：\n'+dataStr)
    //4.1先把成绩的数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
    console.log(arrOld)
    const arrNew = []

    arrOld.forEach(item => {
        //4.2循环分割后的数组，对每一项数据，进行字符串的替换操作
        arrNew.push(item.replace('=','：'))
    })
    //4.3把新数组中的每一项，进行合并，得到一个新的字符串
    const arrStr = arrNew.join('\n')
    //5 调用fs.writeFile()方法，把处理完毕的数据，写入到新文件中。
    fs.writeFile('./成绩-new.txt',arrStr,function(err){
        if (err) {
            return console.log('写入成绩失败！'+err.message)
        }
        console.log('写入文件成功！文件内容为：')
        console.log(arrStr)
    })  
})
```



### 2.5 fs模块–路径动态拼接的问题

在使用fs模块操作文件时，如果提供的操作路径是以`./`或`../`开头的`相对路径`时，很容易出现路径动态拼接错误的问题。
原因：代码在运行的时候，`会以执行node命令时所处的目录`，动态拼接出被操作文件的完整路径。

![image-20220328025831227](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407068.png)

```javascript
const fs = require('fs')
//出现路径拼接错误的问题，是因为提供了 ﹒/或../开头的相对路径
//如果要解决这个问题，可以直接提供一个完整的文件存放路径就行

/* fs.readFile('../demo1/files/1.txt','utf8',function(err,dataStr){
    if (err) {
        return console.log('文件读取失败'+err.message)
    }
    console.log('文件读取成功！内容为：'+dataStr)
})*/

fs.readFile('`D:\\node学习\\demo1\\files\\1.txt`','utf8',function(err,dataStr){
    if (err) {
        return console.log('文件读取失败'+err.message)
    }
    console.log('文件读取成功！内容为：'+dataStr)
})
```

一般路仅位：`D:\node学习\demo1\files\1.txt`

要经过转义：`D:\\node学习\\demo1\\files\\1.txt`

**解决方案**：在使用fs模块操作文件时，直接提供完整的路径，不要提供`.`或`../`开头的`相对路径`，从而防止路径动态拼接的问题。

```javascript
//__dirname 表示当前文件所处的目录
console.log("当前目录为："+__dirname)
```

```javascript
// 示例
fs.readFile(__dirname+'/../demo1/files/1.txt','utf8',function(err,dataStr){
    if (err) {
        return console.log('文件读取失败'+err.message)
    }
    console.log('文件读取成功！内容为：'+dataStr)
})

```



## 三、path路径模块

### 3.1 什么是path文件路径模块

path模块是Node.js官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

**例如：**

`path.join()`方法，用来将多个路径片段拼接成一个完整的路径字符串

`path.basename()`方法，用来从路径字符串中，将文件名解析出来



如果要在JavaScript 代码中，使用path模块来处理路径，则需要使用如下的方式先导入

```javascript
const path = require('path')
```



### 3.2 路径拼接

#### 3.2.1 path.join()的语法格式

使用path.join()方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下:

```javascript
path.join([ . . .paths])
```

**参数解读：**

- `..paths <string>`路径片段的序列
- 返回值: `<string>`




#### 3.2.2 path.join()的代码示例

使用path.join()方法，可以把多个路径片段拼接为完整的路径字符串：

![image-20220328030053355](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407069.png)

```javascript
const path = require('path')

// 注意：../会抵消前面的路径
const pathStr = path.join('/a','/b/c','../','/d')

console.log(pathStr)
```



### 3.3 获取路径中的文件名

#### 3.3.1 path.basename()的语法格式

使用`path.basename()`方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：

```javascript
path.basename(path[ext])
```

**参数解读：**

- `path <string>`必选参数，表示一个路径的字符串
- `ext <string>`可选参数，表示文件扩展名

- 返回：`<string>`表示路径中的最后一部分




#### 3.3.2 path.basename()的代码示例

使用`path.basename()`方法，可以从一个文件路径中，获取到文件的名称部分:

![image-20220328030129934](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407070.png)

```javascript
const path = require('path')

const fpath = '/a/b/c/index.html'

const fullname = path.basename(fpath)
console.log('获取到路径的文件名是：'+fullname)
```



### 3.4 获取路径中的文件扩展名

#### 3.4.1 path.extname()的语法格式

使用`path.extname()`方法，可以获取路径中的扩展名部分，语法格式如下：

```javascript
path.extname(path)
```

**参数解读：**

- `path <string>`必选参数，表示一个路径的字符串
- 返回：`<string>`返回得到的扩展名字符串


```javascript
const path = require('path')

// 这是文件的扩展路径
const fpath = '/a/b/c/index.html'

const fullname = path.basename(fpath,'.html')
console.log('获取到路径的文件名是：'+fullname)

const aname = path.extname(fpath)
console.log('获取到的扩展名为：'+aname)
```



### 3.5 综合案例–时钟案例

#### 3.5.1  案例要实现的功能

![image-20220328030243095](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407071.png)

将素材目录下的index.html页面，拆分成三个文件，分别是：

- index.css
- index.js
- index.html

并且将拆分出来的3个文件，存放到clock目录中。



#### 3.5.2 案例的实现步骤

①创建两个正则表达式，分别用来匹配 <style> 和 <script> 标签

②使用 fs 模块，读取需要被处理的 HTML 文件

③自定义 `resolveCSS` 方法，来写入 `index.css` 样式文件

④自定义 `resolveJS` 方法，来写入 `index.js` 脚本文件

⑤自定义 `resolveHTML` 方法，来写入 `index.html` 文件



#### 3.5.3 步骤1 - 导入需要的模块并创建正则表达式

![image-20220328030526177](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407072.png)

```javascript
//导入fs模块
const fs = require('fs')
//导入path模块
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/
```

#### 3.5.3 步骤2 - 使用 fs 模块读取需要被处理的 html 文件

![image-20220328030626328](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407073.png)

```javascript
fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(err,dataStr){
    if (err) return console.log('读取文件失败！错误信息为：'+err.message)
    console.log('读取文件成功！')
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})
```



#### 3.5.3 步骤3 – 自定义 resolveCSS 方法 

![image-20220328030657771](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407074.png)

```javascript
function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const cssNew = r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./clock/index.css'),cssNew,function(err){
        if(err) return console.log('写入css失败！错误信息为：'+err.message)
        console.log('写入css成功！')
    })
}
```

#### 3.5.3 步骤4 – 自定义 resolveJS 方法 

![image-20220328030812698](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407075.png)

```javascript
function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const jsNew = r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./clock/index.js'),jsNew,function(err){
        if(err) return console.log('写入script失败！错误信息为：'+err.message)
        console.log('写入script成功！')
    })
}
```

#### 3.5.3 步骤5 – 自定义 resolveHTML 方法 

![image-20220328030910014](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407076.png)

```javascript
function resolveHTML(htmlStr) {
    const htmlNew = htmlStr
    .replace(regStyle,'<link rel="stylesheet" href="./index.css"></link>')
    .replace(regScript,'<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname,'./clock/index.html'),htmlNew,function(err){
       if(err) return console.log('写入HTML失败！错误信息为：'+err.message)
        console.log('写入HTML成功！')
    })
}
```

#### 3.5.4 案例的两个注意点

- fs.writeFile() 方法只能用来创建文件，不能用来创建路径
- 重复调用 fs.writeFile() 写入同一个文件，新写入的内容会覆盖之前的旧内容



### 综合案例HTML代码：

![image-20220328030243095](http://r9f5jj6aw.hn-bkt.clouddn.com/blog/202203280407071.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>index首页</title>
  <style>
    html,
    body {
      margin: 0;
      padding: 0;
      height: 100%;
      background-image: linear-gradient(to bottom right, red, gold);
    }

    .box {
      width: 400px;
      height: 250px;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 6px;
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      box-shadow: 1px 1px 10px #fff;
      text-shadow: 0px 1px 30px white;

      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 70px;
      user-select: none;
      padding: 0 20px;

      /* 盒子投影 */
      -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent), to(rgba(250, 250, 250, .2)));
    }
  </style>
</head>

<body>
  <div class="box">
    <div id="HH">00</div>
    <div>:</div>
    <div id="mm">00</div>
    <div>:</div>
    <div id="ss">00</div>
  </div>

  <script>
    window.onload = function () {
      // 定时器，每隔 1 秒执行 1 次
      setInterval(() => {
        var dt = new Date()
        var HH = dt.getHours()
        var mm = dt.getMinutes()
        var ss = dt.getSeconds()

        // 为页面上的元素赋值
        document.querySelector('#HH').innerHTML = padZero(HH)
        document.querySelector('#mm').innerHTML = padZero(mm)
        document.querySelector('#ss').innerHTML = padZero(ss)
      }, 1000)
    }

    // 补零函数
    function padZero(n) {
      return n > 9 ? n : '0' + n
    }
  </script>
</body>

</html>
```

#### 实现代码：

```javascript
// 1.1 导入 fs 模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf8', function(err, dataStr) {
  // 2.2 读取 HTML 文件失败
  if (err) return console.log('读取HTML文件失败！' + err.message)
  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
    if (err) return console.log('写入 CSS 样式失败！' + err.message)
    console.log('写入样式文件成功！')
  })
}

// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
  // 4.2 通过正则，提取对应的 <script></script> 标签内容
  const r2 = regScript.exec(htmlStr)
  // 4.3 将提取出来的内容，做进一步的处理
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
    if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
    console.log('写入 JS 脚本成功！')
  })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
  // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
  // 5.3 写入 index.html 这个文件
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
    if (err) return console.log('写入 HTML 文件失败！' + err.message)
    console.log('写入 HTML 页面成功！')
  })
}

```