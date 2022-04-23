***\0*目录\****

[Java 项目在腾讯云上部署教程	1](#_bookmark0)

[一、白嫖服务器	1](#_bookmark1)

[二、 配置服务器并远程连接	5](#_bookmark2)

[三、 安装宝塔面板并开放端口	11](#_bookmark3)

[四、 安装搭建环境	17](#_bookmark4)

[五、部署项目	24](#_bookmark5)

 

# 前言

 

> 我们一直都在本地开发运行 Java 的项目，从未在云端部署，此教程可以教你将本地项目上云，让别人通过网址进行 访问你的项目。那么，就让我们开始吧~
>



# 一、白嫖服务器

1、进入腾讯云，如果有账号就直接登录，没有的话就注册一个新账户

![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191435893.png)

2、注册好之后对账号进行实名，实名成功后点击“领取免费产品” 找不到这一页可以直接链接访问

![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191438491.png)

3、往下滑
![img_01-1647670176506](https://gitee.com/vmu/cimg/raw/master/img/202203191514046.png)

4、“CVM 服务器”和“轻量应用服务器”都可以，在这里我用“轻量级服务器”做教学， 都是一样的东西，CVM 的话如法炮制即可

![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191440669.png)

5、点击“**0** **元试用**”，进入**产品详细配置页面**，地区按照自己的喜好选择，这里选的上海。我用 **Centos7.6（Linux）系统**，也可以用 windows；都一样，我们使用面板搭建，装上面板之后什么系统都一样

![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191441746.png)

6、点击“确认领取”进入确认订单，然后点击“立即支付即可”

![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191442947.png)

7、选用“余额支付”-- 确认支付

![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191442253.png)

8、购买成功，点击“进入控制台”，我们对服务器进行操作

![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191442418.png)



# 二、配置服务器并远程连接

 1、进入到控制台，我们看到服务器的状态还在![img_03](https://gitee.com/vmu/cimg/raw/master/img/202203191442434.png)“ 创建中”，我们等他一会儿~
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191442023.png)

2、好了之后 点击“更多”--“管理”
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191442906.png)

3、进来之后，看到“远程登录”我们点击
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191442273.png)

4、一开始创建好之后是没有密码的，我们需要自己重置一下密码，点击“重置密码”
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191442651.png)

5、重置的密码有硬性要求，必须包含大小写、必须包含数字、必须包含特殊符号、必须 12位以上；设置好之后点击“下一步”
![img_03](https://gitee.com/vmu/cimg/raw/master/img/202203191442572.png)

6、勾选“统一强制关机”-- “重置密码”
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191443595.png)

7、复制一下 IP，我们开始连接服务器
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191443601.png)

8、打开我们的连接软件，添加我们要连接的服务器，按照图示进行选择**(推荐)**；

不用软件也行，使用 CMD，CMD 命令为： ssh root@ip	例：ssh [root@1.117.99.148](mailto:root@1.117.99.148)

![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191443913.png)

9、选择 SSH 连接
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191443217.png)

10、新建连接（Linux 连接端口为 22、Windows 连接端口为 3389）
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191443345.png)

11、添加完成，双击连接
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191443928.png)

12、第一次连接，它询问你是否记住密钥，我们一般选择“接受并保存”
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191443553.png)

13、连接成功
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191443668.png)


# 三、安装宝塔面板并开放端口

1、打开百度搜索“宝塔”字眼，第一个就是
![img_03](https://gitee.com/vmu/cimg/raw/master/img/202203191443208.png)

2、选择 Linux 版本，点击“立即安装”
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191443323.png)

3、找到 Linux 安装命令，Centos 系统的安装命令，点击“复制代码”
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191443635.png)

4、两种方式把粘贴板的内容输入在命令板上

①粘贴在底部命令框内
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191443171.png)

②右键粘贴 或 快捷键 Ctrl+Shift+V
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191444177.png)

5、回车提交命令
他问你现在是否想安装 Bt-Panel 到/www 目录，输入 y 代表同意、n 为不同意。我们这里输入 y

6、等待安装


7、出现这个为安装成功

8、安装成功后会给出访问地址、用户名和密码。

这个时候我们还进不去，我们需要查看服务器是否开放了面板的 8888 端口

![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191444684.png)

9、回到控制台 点击“防火墙”查看是否有我们想要的 8888 端口，没有的话 点击“添加规则”进行添加
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191444433.png)

10、我们需要创建新的规则，在端口出输入想要开放的端口，我们这里输入 8888，建议添加上备注，方便以后阅读
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191445455.png)

11、添加成功
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191445519.png)

![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191445769.png)

 

# 四、安装搭建环境

1、找到宝塔刚才给我们的**网址**、**用户名**和**密码**
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191445377.png)

2、在浏览器上输入宝塔给的网址，输入用户名密码登录
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191445528.png)
3、阅读协议，勾选阅读并同意后进入面板
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191445282.png)

4、登录宝塔账号，如果没有账号，点击注册
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191445882.png)

5、输入相关内容进行注册
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191445935.png)

6、输入账号密码 点击登录
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191523537.png)

7、推荐安装 LNPM 环境（Linux+Nginx+PHP+MySql）
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191445344.png)

8、选择“软件商店”
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191445082.png)

9、搜索栏搜索“java”-- 找到“**Java** **项目管理器**”

`这里注意，不是项目一键部署！一键部署是针对SpringCloud使用的`

点击安装 Java 项目管理器（适用于 Spring MVC 和 纯 Servlet 项目）

![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191445017.png)

点击确定
![img_03](https://gitee.com/vmu/cimg/raw/master/img/202203191445538.png)

10、核查一下安装的东西是否完整，我们需要安装这些东西
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191446504.png)

11、安装完成之后 点击“设置”
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191446743.png)

12、点击“版本管理”-- 下拉选择“tomcat8”（根据生产环境来选择）
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191446048.png)

等待安装...
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191446354.png)

安装完成！

 ![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191504594.png)

 

# 五、部署项目

1、选择“项目管理”-- “添加项目”
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191446488.png)

2、项目域名（cxyax.com 是域名），**没有域名的话填** **ip** **也是可以的**

想要用域名访问的话需要自己去买、买完之后经过实名、ICP 备案、等待审核（腾讯云一个月）。审核完之后就可以使用了。

由于没有域名，只有一个 ip，一个项目的话建议使用 8080，多个项目的话建议避开默认端口，
被占用的默认端口：Tomcat7 (8081) Tomcat8 (8082)	Tomcat9 (8083)

我这边随便写了一个 8900
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191446882.png)

添加成功
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191448643.png)

3、在服务器上添加一个数据库
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191449555.png)
输入内容
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191449787.png)
创建完成
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191449234.png)

4、导出我们电脑的数据库 结构和数据一起打包
![img_03](https://gitee.com/vmu/cimg/raw/master/img/202203191449507.png)
选择另存为路径
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191449844.png)

导出成功，点击“关闭”
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191449626.png)

5、导入数据库，点击“导入”
![img_03](https://gitee.com/vmu/cimg/raw/master/img/202203191449930.png)

从本地上传 sql 文件
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191450241.png)

选择文件后 点击“开始上传”
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191450496.png)

出现上传完成，关闭此窗口
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191450560.png)

在对应的数据库文件处，点击“导入”
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191450880.png)

导入前验证，做一道 1 年级数学题
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191450040.png)

导入成功
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191450345.png)

6、不要忘记更改项目中连接 MySQL 数据库的配置，在左侧栏目“数据库”里面可以看到自己创建在服务器的数据库，复制用户名密码
![img_03](https://gitee.com/vmu/cimg/raw/master/img/202203191450680.png)

替换掉配置文件的生产环境的用户名密码
![img_01](https://gitee.com/vmu/cimg/raw/master/img/202203191450897.png)

改好后，点击 **右键** **--** **Export** **--** **WAR** **file** 导出 War 包
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191450328.png)

选择一下导出路径，我这里导出在桌面（方便找）
![img](https://gitee.com/vmu/cimg/raw/master/img/202203191450418.png) 

导出成功后，可以看到桌面上多了一个 war 包
![img](https://gitee.com/vmu/cimg/raw/master/img/202203191450024.png) 

7、找到项目目录，点击进去
![img](https://gitee.com/vmu/cimg/raw/master/img/202203191450327.png)
![img](C:/Users/ADMINI~1/AppData/Local/Temp/ksohtml/wps806B.tmp.png) 

![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191451139.png)

8、把刚才生成的 war 包上传到根目录
![img](https://gitee.com/vmu/cimg/raw/master/img/202203191451840.png) 

9、点击“解压”-- 确定，将 war 包解压到根目录
![img_02](https://gitee.com/vmu/cimg/raw/master/img/202203191451801.png)

解压完毕
![img](https://gitee.com/vmu/cimg/raw/master/img/202203191451735.png) 

解压完毕，在 java 项目管理器中点击“映射”，将项目映射在公网上
![img](https://gitee.com/vmu/cimg/raw/master/img/202203191451032.png) 

再次进入项目目录，删除自动生成的 index.html 文件。它的访问权重比较高，它存在的话会默认进入 index.html

![img](https://gitee.com/vmu/cimg/raw/master/img/202203191451402.png) 

我们还没有对 8900 项目端口进行开放，在“服务器控制台” -- “防火墙” -- “添加规则” 对项目端口进行放行
![img](https://gitee.com/vmu/cimg/raw/master/img/202203191451082.png) 

输入网址+端口即可访问我们的项目
![img](https://gitee.com/vmu/cimg/raw/master/img/202203191452954.png) 

**操作文档结束，感谢观看！**