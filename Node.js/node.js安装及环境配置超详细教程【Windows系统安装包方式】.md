# 目录

**Step1：下载安装包**
**Step2：安装程序**
**Step3：查看**
**Step4：环境配置**
**最后补充：**


# **Step1：下载安装包**

[https://nodejs.org/zh-cn/download/](https://nodejs.org/zh-cn/download/)

根据自己电脑系统及位数选择，我的电脑是Windows系统、64位、想下载稳定版的.msi（LTS为长期稳定版）这里选择`windows64位.msi`格式安装包。

> `.msi`和`.zip`格式区别：
>
> *   `.msi`是Windows installer开发出来的程序安装文件，它可以让你安装，修改，卸载你所安装的程序。说白了.msi就是Windows installer的数据包，把所有和安装文件相关的内容封装在一个包里。*此外：它还包含有关安装过程自己的信息。例如：安装序列、目标文件夹路径、安装选项和控制安装过程的属性。*
>
>
> *   `.zip`是一个压缩包，解压之后即可，不需要安装

下载方式1：[官网下载页进行下载](https://nodejs.org/zh-cn/download/)

![image-20211205143943323](https://gitee.com/vmu/cimg/raw/master/img/17292848-90c084798f11f981.png) 

下载方式2：[官网首页直接下载](https://nodejs.org/zh-cn/)

![image-20211205152143418](https://gitee.com/vmu/cimg/raw/master/img/17292848-ff3b882a058322c8.png) 

# **Step2：安装程序**

①下载完成后，双击安装包，开始安装，使用默认配置安装一直点`next`即可，安装路径默认在`C:\Program Files`下，也可以自定义修改

![image-20211205144124764](https://gitee.com/vmu/cimg/raw/master/img/17292848-71478642e9da184e.png) 

![image-20211205144140410](https://gitee.com/vmu/cimg/raw/master/img/17292848-3863129cc65440e8.png) 

②安装路径默认在C:\Program Files下面，也能够自定义修改，而后点击next（我这里设置我的安装目录为`E:\KF\node.js\` 根据自己的需要进行更改。）

![image-20211205144242370](https://gitee.com/vmu/cimg/raw/master/img/17292848-a892e5ca48fcd4ff.png) 

③下图根据本身的需要进行，我选择了默认`Node.js runtime`，而后`Next`

*   `Node.js runtime` ：表示运行环境

*   `npm package manager`：表示npm包管理器

*   `online documentation shortcuts` ：在线文档快捷方式

*   `Add to PATH`：添加到环境变量

![image-20211205144308306](https://gitee.com/vmu/cimg/raw/master/img/17292848-24b8da16c2e94525.png) 

④以下图框中所示，我没有选中，而是直接next

![image-20211205144522793](https://gitee.com/vmu/cimg/raw/master/img/17292848-090b171f10af678a.png) 

⑤点击Install，进行安装

![image-20211205162322641](https://gitee.com/vmu/cimg/raw/master/img/17292848-55410341ddaf7ac7.png) 

⑥点击finish，完成安装

![image-20211205144615274](https://gitee.com/vmu/cimg/raw/master/img/17292848-dc030ecf42451b11.png) 

⑦安装完成后，.msi格式的安装包已经将node启动程序添加到系统环境变量path中,咱们能够查看系统变量进行验证：在【个人电脑】右键→【属性】→【高级系统设置】

![image-20211205151040971](https://gitee.com/vmu/cimg/raw/master/img/17292848-1ad96cd46c3e9732.png) 

⑧点击【高级】→【环境变量】

![image-20211205151118122](https://gitee.com/vmu/cimg/raw/master/img/17292848-373be32ac42d0f52.png) 

⑨在系统变量中查看【path】，点击【编辑】

![image-20211205151309756](https://gitee.com/vmu/cimg/raw/master/img/17292848-f55a12fa0f3002d1.png) 

⑩会发现.msi格式的安装包已经将node启动程序添加到系统环境变量path中

![image-20211205151333499](https://gitee.com/vmu/cimg/raw/master/img/17292848-24427afdaa5f5377.png) 

# **Step3：查看**

① 既然已经将node程序添加到全局系统变量中，把咱们能够直接在CMD窗口中任意位置执行node，打开CMD窗口，执行命令`node -v`查看node版本

【注意：此时是打开CMD窗口，并非在C:\Program Files\nodejs目录下执行node.exe】

![image-20211205151433530](https://gitee.com/vmu/cimg/raw/master/img/17292848-63fd447a39652d8f.png) 

② 最新版的node在安装时同时也安装了npm,执行`npm -v`查看npm版本

![image-20211205151527701](https://gitee.com/vmu/cimg/raw/master/img/17292848-3d502641b4aec801.png) 

③ 默认状况下，咱们在执行npm install -g XXXX时，下载了一个全局包，这个包的默认存放路径C:\Users\Administrator\AppData\Roaming\npm\node_modules下，能够经过CMD指令`npm root -g`查看

![image-20211205151608070](https://gitee.com/vmu/cimg/raw/master/17292848-af289528c2924505.png) 

⑤ 一部分经常使用的命令，以下：

> *   npm -v：查看npm安装的版本。
>
>
> *   npm init：会引导你建立一个package.json文件，包括名称、版本、作者等信息。
>
>
> *   npm list：查看当前目录下已安装的node包。
>
>
> *   npm ls：查看当前目录下已安装的node包。
>
>
> *   npm install moduleNames：安装Node模块到本地目录node_modules下。
>
>
> *   npm install < name > -g：将包安装到全局环境中。
>
>
> *   npm install < name > --save：安装的同时，将信息写入package.json中，项目路径中若是有package.json文件时，直接使用npm install方法就能够根据dependencies配置安装全部的依赖包，这样代码提交到git时，就不用提交node_modules这个文件夹了。
>
>
> *   npm install < name> --save-dev：安装的同时，将信息写入package.json中项目路径中若是有package.json文件时，直接使用npm install方法就能够根据devDependencies配置安装全部的依赖包，这样代码提交到git时，就不用提交node_modules这个文件夹了。
>
>
> *   npm uninstall moudleName：卸载node模块。

# **Step4：环境配置**

① 打开安装的目录（默认安装情况下在C:\Program Files\nodejs）

② 在安装目录下新建两个文件夹【node_global】和【node_cache】

![image-20211205152744552](https://gitee.com/vmu/cimg/raw/master/img/17292848-77c78a0bec8ecc15.png) 

③ 再次打开cmd命令窗口，输入npm config set prefix “你的路径\node_global”（`“你的路径”默认安装的状况下为 C:\Program Files\nodejs`）

```
npm config set prefix "E:\KF\nodejs\node_global"
```

④ npm config set cache “你的路径\node_cache” 可直接复制刚刚新建的空文件夹目录

```
npm config set cache "E:\KF\nodejs\node_cache"
```

执行的时候建议使用管理员权限打开CMD，否则有可能会提示权限不够报错

![image-20211205153156873](https://gitee.com/vmu/cimg/raw/master/img/17292848-9733abcc36ee708d.png) 

⑤设置环境变量，打开【系统属性】-【高级】-【环境变量】，在`系统变量`中新建

变量名：`NODE_PATH`

变量值：`C:\Program Files\nodejs\node_global\node_modules`

（ 用来告诉系统， 下载的模块或者包都在这里了）

![image-20211205154153173](https://gitee.com/vmu/cimg/raw/master/img/17292848-a4a5af3f681aff7e.png) 

⑥ 编辑`用户变量（环境变量）`的 path，将默认的 C 盘下 `APPData\Roaming\npm` 修改成 `C:\Program Files\nodejs\node_global`，点击确定

![image-20211205154422135](https://gitee.com/vmu/cimg/raw/master/img/17292848-857496d1ffa32fd0.png) 

最后别忘了在`Path`里面添加`NODE_PATH`

![image-20211205162518300](https://gitee.com/vmu/cimg/raw/master/img/17292848-508a278859597b6f.png) 

⑦ 测试，配置完成后，安装个module测试下，咱们就安装最经常使用的express模块，打开cmd窗口，输入以下命令进行模块的全局安装：

```
npm install express -g   // -g是全局安装的意思
```

![image-20211205163055719](https://gitee.com/vmu/cimg/raw/master/img/17292848-20ef62539b381fff.png) 

# **最后补充：**

经过npm安装模块时都是去国外的镜像下载的，可是有的时候因为网络等缘由致使安装模块失败，好在阿里有团队维护国内镜像 [淘宝 NPM 镜像](https://npmmirror.com/) ，上面有使用说明，你们可自行查看

**添加国内镜像源：**如果没有梯子的话，可以使用阿里的国内镜像进行加速。

```
npm config set registry https://registry.npm.taobao.org
```

![image-20211205153715642](https://gitee.com/vmu/cimg/raw/master/img/17292848-174a70f9ca833b3e.png) 

![image-20211205153855532](https://gitee.com/vmu/cimg/raw/master/img/17292848-899d6229f9c1fd54.png) 

使用定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

```
npm install -g cnpm --registry=https://registry.npmmirror.com
```