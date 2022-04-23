> 文中介绍了**Windows**中**Redis**的安装包mis和压缩包zip的安装教程，还有几个Redis常用的可视化插件，如treeNMS、RedisStudio、Redis Desktop Manager等请选择性观看。



@[toc]



# Redis下载地址：

windows版本readis下载（GitHub）：

[https://github.com/tporadowski/redis/releases ](https://github.com/tporadowski/redis/releases )（推荐使用）

[https://github.com/MicrosoftArchive/redis/releases](https://github.com/MicrosoftArchive/redis/releases)


**发行说明：**

[https://raw.githubusercontent.com/redis/redis/5.0/00-RELEASENOTES](https://raw.githubusercontent.com/redis/redis/5.0/00-RELEASENOTES)



> Redis 支持 32 位和 64 位。根据你所使用的系统和实际情况进行选择，这里我下载 **Redis-x64-xxx.zip**压缩包到磁盘，解压后，将文件夹重新命名为 **redis**。


# 一、zip压缩包方式下载安装

## 1、下载Redis压缩包

这里我在GitHub中下载window用的 5.0 版本Redis-x64-5.0.14.1.zip。

[https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases)


![image-20220222192232158](https://gitee.com/vmu/cimg/raw/master/img/image-20220222192232158.png)

![image-20220222193742807](https://gitee.com/vmu/cimg/raw/master/img/image-20220222193742807.png)

## 2、解压到文件夹

将下载的压缩包解压到指定的文件夹中，如：**D:\Redis**，内容如下：
![image-20220222193650737](https://gitee.com/vmu/cimg/raw/master/img/image-20220222193650737.png)

## 3、启动Redis服务

在Redis的安装目录下打开cmd窗口，然后执行命令来启动服务：

```bash
redis-server.exe redis.windows.conf
```

**切换到redis目录：**

> 可以打开CMD使用 CD 命令切换到Redis所在的目录：`cd /d d:\redis`

![image-20220222194625942](https://gitee.com/vmu/cimg/raw/master/img/image-20220222194625942.png)
直接在Redis目录路径处输入cmd回车也可以进入命令窗口
![image-20220222194658399](https://gitee.com/vmu/cimg/raw/master/img/image-20220222194658399.png)

> **CD 切换目录命令示例：**
>
> 例：`cd //` 显示当前目录
>
> 例：`cd .. //` 进入父目录
>
> 例：`cd /d d: //` 进入上次d盘所在的目录（或直接输入：d:）
>
> 例：`cd /d d:\ //` 进入d盘根目录
>
> 例：`cd d: //` 显示上次d盘所在的目录
>
> 例：`cd /d d:\src //` 进入d:\src目录

随后使用`redis-server.exe redis.windows.conf`命令来启动redis服务：
![image-20220222195029989](https://gitee.com/vmu/cimg/raw/master/img/image-20220222195029989.png)

>  默认端口为6379，出现图上的图标说明redis服务启动成功。命令里面的 `redis.windows.conf` 可以省略，省略后，使用`redis-server.exe`命令会使用默认的配置。

为了方便，建议把Redis路径配置到系统变量Path值中，这样就省得再输路径了。
![image-20220222200324333](https://gitee.com/vmu/cimg/raw/master/img/image-20220222200324333.png)

## 4、打开Redis客户端进行连接

我们使用`redis-cli.exe`命令来打开Redis客户端：

```bash
redis-cli.exe -h 127.0.0.1 -p 6379
```

![image-20220222201138167](https://gitee.com/vmu/cimg/raw/master/img/image-20220222201138167.png)

在命令中输入ping命令来检测redis服务器与redis客户端的连通性，返回PONG则说明连接成功了。
![image-20220222200941270](https://gitee.com/vmu/cimg/raw/master/img/image-20220222200941270.png)

如果出现连接不成功，注意服务打开以后，另启一个 cmd 窗口到Redis所在的目录执行命令，原来的Redis启动窗口不要关闭，不然就无法访问服务端了。
![image-20220222200048603](https://gitee.com/vmu/cimg/raw/master/img/image-20220222200048603.png)

如果连接成功，到此Redis的安装和部署也就完成了。

## 5、使用一些基础操作来测试

**下面我们可以来进行一些基础操作来进行测试**

Redis默认拥有16个数据库，初始默认使用0号库，在命令行中通过select命令将数据库切换到8号数据库：

```bash
select 8 
```

![image-20220222201909816](https://gitee.com/vmu/cimg/raw/master/img/image-20220222201909816.png)

在命令中通过`set`命令设置键值，通过`get`命令取出键值：
![image-20220222203508802](https://gitee.com/vmu/cimg/raw/master/img/image-20220222203508802.png)

在命令中通过`shutdown`命令来关闭redis服务：
![image-20220222202441339](https://gitee.com/vmu/cimg/raw/master/img/image-20220222202441339.png)

在Redis服务启动的cmd窗口中会出现服务关闭的提醒，如下图：
![image-20220222202546165](https://gitee.com/vmu/cimg/raw/master/img/image-20220222202546165.png)



**Redis常用的服务指令**

卸载服务： `redis-server --service-uninstall`

开启服务：`redis-server --service-start`

停止服务： `redis-server --service-stop`


# 二、msi安装包方式下载安装

## 1、下载Redis安装包

这里我在GitHub中下载window用的 5.0 版本Redis-x64-5.0.14.1.msi

这里选择.msi格式的安装版本(另外一种.zip为本文中的第一种安装方式安装)

[https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases)

![image-20220222205151207](https://gitee.com/vmu/cimg/raw/master/img/image-20220222205151207.png)

![image-20220222205946825](https://gitee.com/vmu/cimg/raw/master/img/image-20220222205946825.png)



## 2、进行安装

![image-20220222210248437](https://gitee.com/vmu/cimg/raw/master/img/image-20220222210248437.png)

![image-20220222210257485](https://gitee.com/vmu/cimg/raw/master/img/image-20220222210257485.png)

①直接运行.msi的安装包，一直next，直到下面界面,勾选上再next
![image-20220222210620908](https://gitee.com/vmu/cimg/raw/master/img/image-20220222210620908.png)

②这一步选择端口，然后next（默认6379，后面可以通过配置文件修改的）
![image-20220222210913854](https://gitee.com/vmu/cimg/raw/master/img/image-20220222210913854.png)

③选择最大缓存容量，点击next（后面可以通过配置文件修改的）
![image-20220222211111509](https://gitee.com/vmu/cimg/raw/master/img/image-20220222211111509.png)
![image-20220222211211025](https://gitee.com/vmu/cimg/raw/master/img/image-20220222211211025.png)

接下来可以点击install进行安装了，如果安装有杀毒软件可以会权限提示，全部允许即可，不要点错了。

![image-20220222211155310](https://gitee.com/vmu/cimg/raw/master/img/image-20220222211155310.png)
![image-20220222211136670](https://gitee.com/vmu/cimg/raw/master/img/image-20220222211136670.png)

## 3、进行配置

①安装完毕后，进入redis安装目录找到配置文件**redis.windows-service.conf**

注意是**redis.windows-service.conf**不是**redis.windows.conf**

后者是以非系统服务方式启动程序使用的配置文件.
![image-20220222212829164](https://gitee.com/vmu/cimg/raw/master/img/image-20220222212829164.png)

②在配置文件中,找到**requirepass foobared**字样，在其后面追加一行，输入`requirepass 123456`设置访问Redis时所需的密码。

一般测试情况下可以不用设定密码。我这里设置123456做演示。

![image-20220222213254994](https://gitee.com/vmu/cimg/raw/master/img/image-20220222213254994.png)


## 4、启动服务

进入计算机服务中 **(右键计算机 → 管理 → 服务和应用程序 → 服务)**

再在右侧找到Redis名称的服务，查看启动情况。

如未启动，则手动启动。

正常情况下，服务应该正常启动并运行了，**但是因为前面修改过配置文件，需要重启服务**
![image-20220222213612544](https://gitee.com/vmu/cimg/raw/master/img/image-20220222213612544.png)

另外在【任务管理器】→【服务】中也可以启动
![image-20220222213732936](https://gitee.com/vmu/cimg/raw/master/img/image-20220222213732936.png)

## 5、测试能否正常工作

测试一下redis能否正常工作。

用命令进入redis安装路径

```bash
cd c:\redis
```

![image-20220222214152078](https://gitee.com/vmu/cimg/raw/master/img/image-20220222214152078.png)

输入`redis-cli`并回车（redis-cli是客户端程序）如图正常提示进入，并显示正确端口号，则表示服务已经启动。

```bash
redis-cli
```

![image-20220222214315337](https://gitee.com/vmu/cimg/raw/master/img/image-20220222214315337.png)

由于刚刚配置了密码，使用服务前需要先通过密码验证。

输入“`auth 123456`”并回车（123456是之前设定的密码）。

返回提示OK表示验证通过。

![image-20220222214500309](https://gitee.com/vmu/cimg/raw/master/img/image-20220222214500309.png)

然后再验证set和get命令，如果一切正常便安装部署成功

![image-20220222214542031](https://gitee.com/vmu/cimg/raw/master/img/image-20220222214542031.png)

# 三、使用可视化工具

## 1、Redis Desktop Manager

需要安装使用，0.9.4以上是要收费的

下载地址：[https://github.com/uglide/RedisDesktopManager/releases/download/0.9.3/redis-desktop-manager-0.9.3.817.exe](https://github.com/uglide/RedisDesktopManager/releases/download/0.9.3/redis-desktop-manager-0.9.3.817.exe)

详情：[https://blog.csdn.net/u012688704/article/details/82251338](https://blog.csdn.net/u012688704/article/details/82251338)

下载完成之后直接点击安装，无需任何配置直接连接。
![image-20220222220951840](https://gitee.com/vmu/cimg/raw/master/img/image-20220222220951840.png)

界面如下：
![image-20220222221011889](https://gitee.com/vmu/cimg/raw/master/img/image-20220222221011889.png)

## 2、RedisStudio

下载地址：[https://github.com/cinience/RedisStudio/releases](https://github.com/cinience/RedisStudio/releases)

打开即可使用，
![image-20220222223446676](https://gitee.com/vmu/cimg/raw/master/img/image-20220222223446676.png)

界面如下：
![image-20220222223538470](https://gitee.com/vmu/cimg/raw/master/img/image-20220222223538470.png)

## 3、treeNMS

treeNMS管理工具

官网下载地址：[http://www.treesoft.cn/dms.html](http://www.treesoft.cn/dms.html)

是用JAVA开发的，基于WEB方式对Redis管理，windows环境下载解压即可使用，里面有部署说明

![image-20220222224120796](https://gitee.com/vmu/cimg/raw/master/img/image-20220222224120796.png)

界面如下：
![image-20220222224027914](https://gitee.com/vmu/cimg/raw/master/img/image-20220222224027914.png)
![image-20220222224408383](https://gitee.com/vmu/cimg/raw/master/img/image-20220222224408383.png)
![image-20220222224436538](https://gitee.com/vmu/cimg/raw/master/img/image-20220222224436538.png)