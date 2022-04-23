> 前几天一个朋友让我帮忙写的，随手记录一下，感觉难度也不大，就是写的时候遇到一些问题。优化方便做得不太好。有好的优化方法欢迎分享！（数据库在文章结尾）



# 要求

1）查询所有时间内，所有产品销售金额占比，按占比大小降序排序，筛选累计占比在前80%的产品，结果输出排名产品名称销售金额占比累计占比。

2）查询所有时间内，各个国家的销售情况，销售合计金额大于10000视为业绩合格,
否则为不合格，结果输出国家销售金额业绩情况。

3）查询中国、英国每个月份的销售情况，2020年8月份销售合计金额大于10000视为业绩合格，否则为不合格，2020年9月份销售合计金额大于12000视为业绩合格，否则为不合格，结果输出月份中国销售业绩、英国销售业绩。



# 实现代码

1）

```sql
SELECT a.productID 产品ID,(a.sale_amount * b.price) 销售金额,CONCAT((a.sale_amount * b.price / (select SUM(aa.sale_amount * bb.price) m from 2002a aa left join 2002b bb on aa.productID = bb.productID)) * 100,"%") percent 
FROM (select @rownum:=0) r,2002a a,2002b b 
WHERE (@rownum:=@rownum+1)<=(select round(count(distinct a.productid)*0.8) from 2002a a, 2002b b where a.productID = b.productID) 
AND a.productID = b.productID GROUP BY a.productID ORDER BY (a.sale_amount * b.price) DESC;
```

![image-20211222191438920](https://gitee.com/vmu/cimg/raw/master/img/image-20211222191438920.png)

2）

```sql
SELECT country 国家,SUM(price*sale_amount) 销售金额,if(SUM(price*sale_amount)>10000,'合格','不合格') 业绩情况 
FROM 2002a a,2002b b,2002c c WHERE a.productID=b.productID AND a.customID=c.customID GROUP BY country;
```

![image-20211222191459517](https://gitee.com/vmu/cimg/raw/master/img/image-20211222191459517.png)

3）

```sql
SELECT date_format(zTime,'%Y-%m') 月份,SUM(price*sale_amount) 销售金额,
if((date_format(zTime,'%Y-%m')='2020-08' AND SUM(price*sale_amount)>10000) OR (date_format(zTime,'%Y-%m')='2020-09' AND SUM(price*sale_amount)>13000) AND country='中国','合格','不合格') 中国销售业绩,
if((date_format(zTime,'%Y-%m')='2020-08' OR SUM(price*sale_amount)>10000) AND (date_format(zTime,'%Y-%m')='2020-09' AND SUM(price*sale_amount)>13000) AND country='英国','合格','不合格') 英国销售业绩 
FROM 2002a a,2002b b,2002c c 
WHERE a.productID=b.productID AND a.customID=c.customID AND country IN('中国','英国') AND (date_format(zTime,'%Y-%m')='2020-09' OR date_format(zTime,'%Y-%m')='2020-08') GROUP BY date_format(zTime,'%Y-%m');
```
![image-20211222191535226](https://gitee.com/vmu/cimg/raw/master/img/image-20211222191535226.png)

<br/>

>  **①中实现查询结果显示前百分之八十的方法：**

**实现百分比显示：**

首先认识两个函数`concat()`和`left()`、`TRUNCATE(A,B)`



`CONCAT(str1,str2,...)`拼接字符串，返回来自于参数连结的字符串。如果任何参数是NULL， 返回NULL。可以拼接多个。



`LEFT(str,length)`从左开始截取字符串.说明：left(被截取字段，截取长度)



`TRUNCATE(A,B)`返回被舍去至小数点后B位的数字A。若B的值为0,则结果不带有小数点或不带有小数部分。可以将B设为负数,若要截去(归零)A小数点左起第B位开始后面所有低位的值.，所有数字的舍入方向都接近于零



结合一下（我上面的代码没使用left）：`concat ( left (数值1 / 数值2 *100,5),'%') as 投诉率`



示例：

```sql
SELECT id,CONCAT(TRUNCATE(passScore / (danScore+panScore+duoScore) *100,2),'%') as 成绩与总分比 
FROM aqsc_kaoshi_record;
```



**实现mysql查询前百分之几的数据（这里是80％）**

mysql不支持top和rowid，使用limit的方式也行不通。所以使用下面这种方式：

```sql
SELECT a.* 
FROM (SELECT @rownum:=0) r,2002a a 
WHERE (@rownum:=@rownum+1)<=(select round(count(*)*0.1) from 2002a);
```

这里的rownum只是个变量名，也可以是用其他的

将student表的grade从大到小排序后的前20%案例：

```sql
SELECT @rownum:=@rownum+1,student.* 
FROM (select @rownum:=0) row ,(select * from student order by student.grade desc) student ##排序
WHERE @rownum<(select round(count(*)/4) from student)
```



除了if外实现判断显示的示例：

```sql
select 
       sum(case when sex = '男' then 1 else 0 end)   /* 这是求男生人数 */
       sum(case when sex = '女' then 1 else 0 end)   /* 这是求女生人数 */
from student
```



# 数据库

以下是数据库完整代码：

```sql
/*
Navicat MySQL Data Transfer

Source Server         : First
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : fr_test_sql

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2021-12-18 16:06:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `2002a`
-- ----------------------------
DROP TABLE IF EXISTS `2002a`;
CREATE TABLE `2002a` (
  `orderID` varchar(255) NOT NULL,
  `zTime` date NOT NULL,
  `productID` varchar(255) NOT NULL,
  `sale_amount` int(11) NOT NULL,
  `customID` varchar(255) NOT NULL,
  PRIMARY KEY (`orderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 2002a
-- ----------------------------
INSERT INTO `2002a` VALUES ('O001', '2020-09-10', 'P010', '96', 'C008');
INSERT INTO `2002a` VALUES ('O002', '2020-08-29', 'P008', '38', 'C007');
INSERT INTO `2002a` VALUES ('O003', '2020-08-10', 'P007', '97', 'C008');
INSERT INTO `2002a` VALUES ('O004', '2020-09-27', 'P005', '62', 'C006');
INSERT INTO `2002a` VALUES ('O005', '2020-08-17', 'P007', '37', 'C009');
INSERT INTO `2002a` VALUES ('O006', '2020-09-06', 'P006', '3', 'C005');
INSERT INTO `2002a` VALUES ('O007', '2020-08-30', 'P009', '86', 'C007');
INSERT INTO `2002a` VALUES ('O008', '2020-09-04', 'P001', '34', 'C007');
INSERT INTO `2002a` VALUES ('O009', '2020-09-09', 'P003', '99', 'C004');
INSERT INTO `2002a` VALUES ('O010', '2020-09-06', 'P002', '65', 'C010');
INSERT INTO `2002a` VALUES ('O011', '2020-08-08', 'P005', '11', 'C002');
INSERT INTO `2002a` VALUES ('O012', '2020-09-20', 'P002', '3', 'C008');
INSERT INTO `2002a` VALUES ('O013', '2020-08-15', 'P004', '9', 'C004');
INSERT INTO `2002a` VALUES ('O014', '2020-08-28', 'P007', '99', 'C010');
INSERT INTO `2002a` VALUES ('O015', '2020-08-23', 'P003', '3', 'C005');
INSERT INTO `2002a` VALUES ('O016', '2020-08-08', 'P006', '51', 'C008');
INSERT INTO `2002a` VALUES ('O017', '2020-09-04', 'P009', '99', 'C002');
INSERT INTO `2002a` VALUES ('O018', '2020-08-12', 'P007', '86', 'C003');
INSERT INTO `2002a` VALUES ('O019', '2020-09-22', 'P001', '73', 'C005');
INSERT INTO `2002a` VALUES ('O020', '2020-08-03', 'P009', '22', 'C006');
INSERT INTO `2002a` VALUES ('O021', '2020-08-22', 'P007', '54', 'C006');
INSERT INTO `2002a` VALUES ('O022', '2020-09-29', 'P005', '59', 'C005');
INSERT INTO `2002a` VALUES ('O023', '2020-08-15', 'P003', '45', 'C006');
INSERT INTO `2002a` VALUES ('O024', '2020-09-12', 'P001', '10', 'C004');
INSERT INTO `2002a` VALUES ('O025', '2020-08-23', 'P004', '56', 'C008');
INSERT INTO `2002a` VALUES ('O026', '2020-09-17', 'P003', '57', 'C004');
INSERT INTO `2002a` VALUES ('O027', '2020-08-23', 'P002', '73', 'C003');
INSERT INTO `2002a` VALUES ('O028', '2020-09-22', 'P003', '50', 'C008');
INSERT INTO `2002a` VALUES ('O029', '2020-09-22', 'P003', '70', 'C007');
INSERT INTO `2002a` VALUES ('O030', '2020-08-13', 'P006', '15', 'C002');

-- ----------------------------
-- Table structure for `2002b`
-- ----------------------------
DROP TABLE IF EXISTS `2002b`;
CREATE TABLE `2002b` (
  `productID` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `productName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`productID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 2002b
-- ----------------------------
INSERT INTO `2002b` VALUES ('P001', '产品A', '29');
INSERT INTO `2002b` VALUES ('P002', '产品B', '50');
INSERT INTO `2002b` VALUES ('P003', '产品C', '42');
INSERT INTO `2002b` VALUES ('P004', '产品D', '59');
INSERT INTO `2002b` VALUES ('P005', '产品E', '49');
INSERT INTO `2002b` VALUES ('P006', '产品F', '10');
INSERT INTO `2002b` VALUES ('P007', '产品G', '23');
INSERT INTO `2002b` VALUES ('P008', '产品H', '24');
INSERT INTO `2002b` VALUES ('P009', '产品I', '50');
INSERT INTO `2002b` VALUES ('P010', '产品J', '64');

-- ----------------------------
-- Table structure for `2002c`
-- ----------------------------
DROP TABLE IF EXISTS `2002c`;
CREATE TABLE `2002c` (
  `customID` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `customName` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  PRIMARY KEY (`customID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 2002c
-- ----------------------------
INSERT INTO `2002c` VALUES ('C001', '客户A', '中国');
INSERT INTO `2002c` VALUES ('C002', '客户B', '法国');
INSERT INTO `2002c` VALUES ('C003', '客户C', '中国');
INSERT INTO `2002c` VALUES ('C004', '客户D', '英国');
INSERT INTO `2002c` VALUES ('C005', '客户E', '美国');
INSERT INTO `2002c` VALUES ('C006', '客户F', '中国');
INSERT INTO `2002c` VALUES ('C007', '客户G', '法国');
INSERT INTO `2002c` VALUES ('C008', '客户H', '英国');
INSERT INTO `2002c` VALUES ('C009', '客户I', '美国');
INSERT INTO `2002c` VALUES ('C010', '客户H', '英国');

-- ----------------------------
-- Table structure for `2003_a`
-- ----------------------------
DROP TABLE IF EXISTS `2003_a`;
CREATE TABLE `2003_a` (
  `CLASSNO` varchar(255) DEFAULT NULL,
  `STUDENTNO` varchar(255) DEFAULT NULL,
  `GRADE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 2003_a
-- ----------------------------
INSERT INTO `2003_a` VALUES ('CLASS1', '1001', '86');
INSERT INTO `2003_a` VALUES ('CLASS1', '1002', '60');
INSERT INTO `2003_a` VALUES ('CLASS1', '1003', '85');
INSERT INTO `2003_a` VALUES ('CLASS1', '1004', '73');
INSERT INTO `2003_a` VALUES ('CLASS1', '1005', '95');
INSERT INTO `2003_a` VALUES ('CLASS1', '1006', '61');
INSERT INTO `2003_a` VALUES ('CLASS1', '1007', '77');
INSERT INTO `2003_a` VALUES ('CLASS1', '1008', '71');
INSERT INTO `2003_a` VALUES ('CLASS1', '1009', '61');
INSERT INTO `2003_a` VALUES ('CLASS1', '1010', '78');
INSERT INTO `2003_a` VALUES ('CLASS2', '2001', '81');
INSERT INTO `2003_a` VALUES ('CLASS2', '2002', '54');
INSERT INTO `2003_a` VALUES ('CLASS2', '2003', '57');
INSERT INTO `2003_a` VALUES ('CLASS2', '2004', '75');
INSERT INTO `2003_a` VALUES ('CLASS2', '2005', '98');
INSERT INTO `2003_a` VALUES ('CLASS2', '2006', '75');
INSERT INTO `2003_a` VALUES ('CLASS2', '2007', '76');
INSERT INTO `2003_a` VALUES ('CLASS2', '2008', '58');
INSERT INTO `2003_a` VALUES ('CLASS2', '2009', '73');
INSERT INTO `2003_a` VALUES ('CLASS2', '2010', '55');
INSERT INTO `2003_a` VALUES ('CLASS3', '3001', '42');
INSERT INTO `2003_a` VALUES ('CLASS3', '3002', '90');
INSERT INTO `2003_a` VALUES ('CLASS3', '3003', '81');
INSERT INTO `2003_a` VALUES ('CLASS3', '3004', '97');
INSERT INTO `2003_a` VALUES ('CLASS3', '3005', '68');
INSERT INTO `2003_a` VALUES ('CLASS3', '3006', '72');
INSERT INTO `2003_a` VALUES ('CLASS3', '3007', '81');
INSERT INTO `2003_a` VALUES ('CLASS3', '3008', '79');
INSERT INTO `2003_a` VALUES ('CLASS3', '3009', '87');
INSERT INTO `2003_a` VALUES ('CLASS3', '3010', '59');

-- ----------------------------
-- Table structure for `2004_a`
-- ----------------------------
DROP TABLE IF EXISTS `2004_a`;
CREATE TABLE `2004_a` (
  `TYEAR` varchar(255) DEFAULT NULL,
  `TMONTH` varchar(255) DEFAULT NULL,
  `SALE_MONEY` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 2004_a
-- ----------------------------
INSERT INTO `2004_a` VALUES ('2019', '10', '1279');
INSERT INTO `2004_a` VALUES ('2019', '11', '2316');
INSERT INTO `2004_a` VALUES ('2019', '12', '2090');
INSERT INTO `2004_a` VALUES ('2020', '01', '1086');
INSERT INTO `2004_a` VALUES ('2020', '02', '2046');
INSERT INTO `2004_a` VALUES ('2020', '03', '0');
INSERT INTO `2004_a` VALUES ('2020', '04', '2959');
INSERT INTO `2004_a` VALUES ('2020', '05', '1314');
INSERT INTO `2004_a` VALUES ('2020', '06', '2751');
INSERT INTO `2004_a` VALUES ('2020', '07', '1492');
INSERT INTO `2004_a` VALUES ('2020', '08', '1414');
INSERT INTO `2004_a` VALUES ('2020', '09', '2895');
INSERT INTO `2004_a` VALUES ('2020', '10', '2999');
INSERT INTO `2004_a` VALUES ('2020', '11', '1982');
INSERT INTO `2004_a` VALUES ('2020', '12', '2793');
INSERT INTO `2004_a` VALUES ('2021', '01', '2156');
INSERT INTO `2004_a` VALUES ('2021', '02', '1733');
INSERT INTO `2004_a` VALUES ('2021', '03', '2184');

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_access` varchar(20) NOT NULL DEFAULT '' COMMENT '账号',
  `user_token` varchar(20) NOT NULL DEFAULT '123456' COMMENT '密码',
  `user_nick` varchar(20) NOT NULL DEFAULT '虾米' COMMENT '昵称',
  `user_gender` bit(1) NOT NULL DEFAULT b'1' COMMENT '1为男，0为女',
  `user_hobbies` varchar(20) NOT NULL COMMENT '爱好',
  `user_type` int(1) NOT NULL DEFAULT '1' COMMENT '类型',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `uk_user_access` (`user_access`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'cqswxy', '111111', '重庆商务', '', '编程,游戏', '3');
INSERT INTO `t_user` VALUES ('2', 'zjczjc', '222222', '俊采星驰', '', '编程,学习', '2');
INSERT INTO `t_user` VALUES ('3', 'cetoox', '333333', '光速为零', '', '游戏,学习', '1');
INSERT INTO `t_user` VALUES ('4', 'XXX', '23', 'XXX', '', 'XXXX', '1');
INSERT INTO `t_user` VALUES ('6', 'dasda', '123456', '虾米', '', 'asd', '5');

-- ----------------------------
-- Table structure for `t_user_type`
-- ----------------------------
DROP TABLE IF EXISTS `t_user_type`;
CREATE TABLE `t_user_type` (
  `user_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type_name` varchar(2) NOT NULL,
  PRIMARY KEY (`user_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user_type
-- ----------------------------
INSERT INTO `t_user_type` VALUES ('1', '菜鸟');
INSERT INTO `t_user_type` VALUES ('2', '高手');
INSERT INTO `t_user_type` VALUES ('3', '传说');
INSERT INTO `t_user_type` VALUES ('4', '普通');

```

![image-20211222191607599](https://gitee.com/vmu/cimg/raw/master/img/image-20211222191607599.png)



参考：

[mysql查询前百分之几的数据（以25%为例） - CSDN[我就是个弟弟i]](https://blog.csdn.net/weixin_43684328/article/details/105166203)

