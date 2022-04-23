# 一、环境安装/搭建

## 1. 安装 Git

为了后面把本地的hexo上传到`github`或者`码云`上去实现无服务器访问，我们需要安装一个git工具[[下载地址]](https://git-scm.com/download)。

## 2. 安装 node.js

node.js安装完成以后检查一下环境是否全部安装无异常了。

使用快捷键`win+R`打开电脑的“命令提示符“工具输入命令进行检测

![image-20211204195249234](https://gitee.com/vmu/cimg/raw/master/img/image-20211204195249234.png)

检查node.js版本：

```bash
node -v
```
检查npm版本：

```bash
npm -v
```
检查git版本：

```bash
git --version
```

![image-20211205141509058](https://gitee.com/vmu/cimg/raw/master/img/image-20211205141509058.png)

安装完成以后到GitHub中创建一个仓库，`注意仓库的名字要与自己的用户名一致`

![image-20211225141956556](https://gitee.com/vmu/cimg/raw/master/img/image-20211225141956556.png)

创建仓库：https://github.com/new

比如我的用户名是vmuu，Repository name就是：

`vmuu.github.io`

![image-20211204211520219](https://gitee.com/vmu/cimg/raw/master/img/image-20211204211520219.png)

按照上图中箭头的选项进行创建



接着在命令里面输入ssh生成本地ssh秘钥

![image-20211204220404997](https://gitee.com/vmu/cimg/raw/master/img/image-20211204220404997.png)



生成SSH：

```css
ssh-keygen -t rsa -C "你注册时的邮箱地址"
```



![image-20211204214246322](https://gitee.com/vmu/cimg/raw/master/img/image-20211204214246322.png)





![image-20211204214356669](https://gitee.com/vmu/cimg/raw/master/img/image-20211204214356669.png)





id_rsa.pub



![image-20211204214547640](https://gitee.com/vmu/cimg/raw/master/img/image-20211204214547640.png)





ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCi31BPqL1uVt2ole/OmE1uiKvuSpINBojQXJy3sEdxKnluFRsNFRMzd+F9PtpjnF4BidfICLznQxKSktygPPtyzS7T/c6FSAXItJaXG6E1b++1XvlUVYFIe3qeZi8bHjYF0yxZBViq+8uBkjRcjJk7iyugqpUVy1zvyRd6bEXaCjNoPaR+rn3Wc5PQZqfHGRR6xoMZZFGOGzxXP6ppEW1+QaLkaL8IZy8BCC9iln3rfLwn/4ehhtllVSy4xoXYS/eoG7whOFNckRIELg0tO98qBqXxCAnnifNrI4FfQXSLrLbp0ORduMMjp4Bbpy28fWQvgyVavu/XGuihxxonOMTo6eRd8hNMo6EwJ16s+V3Ry4C2gyozkv1iGt0TQ/kWtj9iK0BziEZsMFgu2j5KQCn7iuQsI6dMS2iIRZXyu9H6BsXNYIn+LEO0PamymZuvU1crxiJ+626joPIiWiFIabYaC5abPx9u31V+r2jrZJE4ssetbmszJaOgZd8StkRdNoE= 68872185@qq.com



![image-20211204220206349](https://gitee.com/vmu/cimg/raw/master/img/image-20211204220206349.png)





![image-20211204220547385](https://gitee.com/vmu/cimg/raw/master/img/image-20211204220547385.png)



![image-20211204220646314](https://gitee.com/vmu/cimg/raw/master/img/image-20211204220646314.png)





![image-20211204220731008](https://gitee.com/vmu/cimg/raw/master/img/image-20211204220731008.png)

测试SSH是否绑定成功：
```bash
ssh -T git@github.com
```

![image-20211204221315841](https://gitee.com/vmu/cimg/raw/master/img/image-20211204221315841.png)



> Hi vmuu! You've successfully authenticated, but GitHub does not provide shell access.
>
> 嗨，vmuu！您已成功通过身份验证，但GitHub不提供shell访问。



这里会有一个提示，不用管他，github的用户名出来即可



##  **添加国内镜像源**

可以使用阿里的国内镜像进行加速。

```bash
npm config set registry https://registry.npm.taobao.org
```

输入命令手动修改也可以

```bash
npm config edit
```

使用淘宝镜像的命令：

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

## 3. 安装Hexo

在你要安装的目录新建一个

前面`git`和`nodejs`安装好后，就可以安装`hexo`了，你可以先创建一个文件夹`MyBlog`，用来存放自己的博客文件，然后`cd`到这个文件夹下（或者在这个文件夹下直接右键`git bash`打开）。

比如我的博客文件都存放在`D:\Study\MyBlog`目录下。

在该目录下右键点击`Git Bash Here`，打开`git`的控制台窗口，以后我们所有的操作都在`git`控制台进行，就不用`Windows`自带的`cmd`了。

定位到该目录下，输入`npm install -g hexo-cli`安装`Hexo`。可能会有几个报错，无视它就行。

如果都能正常显示版本号环境正常。

接着我们继续输入命令，使用 npm 安装 Hexo

```bash
npm install hexo-cil -g 
```

![image-20211205141725228](https://gitee.com/vmu/cimg/raw/master/img/image-20211205141725228.png)

如果已经安装过了再输入安装命令的话就是升级：

![image-20211204225254632](https://gitee.com/vmu/cimg/raw/master/img/image-20211204225254632.png)

安装完后输入`hexo -v`验证是否安装成功。

至此`hexo`就安装完了。

![image-20211204225453643](https://gitee.com/vmu/cimg/raw/master/img/image-20211204225453643.png)

接下来初始化一下`hexo`,即初始化我们的网站，输入`hexo init`初始化文件夹

```bash
hexo init  # 初始化hexo
```

![image-20211204225750072](https://gitee.com/vmu/cimg/raw/master/img/image-20211204225750072.png)

```bash
hexo g # 生成
```


```bash
hexo s # 启动服务
```

![image-20211204230055962](https://gitee.com/vmu/cimg/raw/master/img/image-20211204230055962.png)

可以看到这里有了网址了，然后浏览器打开http://localhost:4000/，就可以看到我们的博客啦，效果如下：按`ctrl+c`关闭本地服务器。

![image-20211204230158411](https://gitee.com/vmu/cimg/raw/master/img/image-20211204230158411.png)

按`ctrl+c`关闭本地服务器。

## 4. 注册GitHub账号，登录创建个人仓库

## 5. 生产SSH并添加到GitHub

## 6. 将hexo部署到GitHub
这一步，我们就可以将`hexo`和`GitHub`关联起来，也就是将`hexo`生成的文章部署到`GitHub`上，打开博客根目录下的`_config.ym`l文件，这是博客的配置文件，在这里你可以修改与博客配置相关的各种信息。

修改最后一行的配置：

```yml
deploy:
  type: git
  repository: https://github.com/vmuu/vmuu.github.io
  branch: main
```

> ```yml
> branch: master
> 改为
> branch: main
> ```

```bash
接着输入命令：
npm install hexo-deployer-git --save
```

![image-20211225145412797](https://gitee.com/vmu/cimg/raw/master/img/image-20211225145412797.png)

```bash
hexo clean
hexo generate
hexo deploy
```

```bash
hexo g
```

![image-20211225145656249](https://gitee.com/vmu/cimg/raw/master/img/image-20211225145656249.png)



hexo o

![image-20211225145906494](https://gitee.com/vmu/cimg/raw/master/img/image-20211225145906494.png)

重新输入一次

![image-20211225150003735](https://gitee.com/vmu/cimg/raw/master/img/image-20211225150003735.png)



























参考内容：

[【2021最新版】保姆级Hexo+github搭建个人博客 - B站 [视频搬运崽啊]](https://www.bilibili.com/video/BV1mU4y1j72n)

 [Node.js安装及环境配置之Windows篇 - 博客园 [刘奇云] ](https://www.cnblogs.com/liuqiyun/p/8133904.html)

[(全网最详细)Node.js下载安装和配置教程(看了必成功) - B站 [幸运鸭儿朵]](https://www.bilibili.com/video/av884054875)