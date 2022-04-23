Redis是一个远程内存数据库，它不仅性能强劲，而且还具有复制特性以及为解决问题而生的独一无二的数据模型。Redis 提供了5种不同类型的数据结构，各式各样的问题都可以很自然地映射到这些数据结构上，Redis的数据结构致力于帮助用户解决问题，通过复制、持久化和客户端分片等特性，用户可以很方便地将Redis扩展成一个能包含数百GB数据、每秒处理上百万次请求的系统，可以将存储在内存的键值对数据持久化到硬盘，可以通过它的复制特性来扩展读性能，还可以通过客户端分片特性来扩展写性能。本文章主要介绍Redis安装以及Redis 的基本使用，同时讲解Redis常用的五大数据类型、Jedis 客户端的使用，以及 Redis事务和持久化。

# 一、Redis基础

Redis是一个开源的**Key-Value存储系统**。它支持存储的value类型相对较多，包括**String(字符串)**、**List(链表)**、**Set(集合)**、**Zset (Sorted Set，有序集合）**和 **Hash(哈希类型)**。

这些数据类型都支持`push/pop.add/remove`以及取交集、并集和差集等更丰富的操作，而且这些操作都是原子性的。在此基础上，Redis支持各种不同方式的排序。为了保证效率，数据都缓存在内存中。同时Redis 会周期性地把更新的数据写入磁盘或者把修改操作写入追加的记录文件中。

#### Redis的优势:
**(1）性能极高：**Redis读取数据的速度可达到110000次/s，写的速度可达到81000次/s，
**(2）丰富的数据类型：**Redis支持String、List、Zset、Set和Hash 五大数据类型。
**(3）原子性：**Redis 的所有操作都是原子性的。
**(4）丰富的特性：**Redis还有支持`publish/subscribe`、通知Key过期等特性。

## 1、Redis的安装

官网地址：[https://redis.io/download/](https://redis.io/download/)

Windows 下安装：

**下载地址：**[https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases)

Redis 支持 32 位和 64 位。这个需要根据你系统平台的实际情况选择，这里我们下载 **Redis-x64-xxx.zip**压缩包到 D 盘，解压后，将文件夹重新命名为 **redis**。

![image-20220406100640065](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406100640065.png)

解压后内容如下：

![image-20220406100725366](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406100725366.png)

我打开一个 cmd 窗口 使用 cd 命令切换目录到 D:\redis 运行：

```bash
redis-server.exe redis.windows.conf
```

为了方便，可以把 redis 的路径加到系统的环境变量里，这样就省得再输路径了，后面的那个 `redis.windows.conf` 可以省略，如果省略，会启用默认的。输入之后，会显示如下界面：

![image-20220406095455919](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406095455919.png)

这时候另启一个 cmd 窗口，原来的不要关闭，不然就无法访问服务端了。

切换到 redis 目录下运行：