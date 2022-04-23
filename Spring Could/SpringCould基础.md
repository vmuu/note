Spring 框架非常优秀，然而它最大的问题在于 “配置过多” 。基于Spring 的企业级开发项目，需要大量的配置文件，Spring Boot 的出现就是为了解决 Spring 框架存在的问题。

Spring Boot是由Pivotal团队提供的全新框架，其设计目的是用来简化Spring应用的创建、运行、调试和部署等。使用Spring Boot可以做到专注于Spring应用的开发，而无需过多关注XML的配置Spring Boot使用 “约定优先于配置(Convention Over Confuguration, COC)” 的理念，简单来说Spring Boot提供了针对企业应用开发各种场景的自动配置依赖模块，这些模块都基于“开箱即用”的原则，使得企业开发各种场景的Spring应用更加快速和高效。

本文主要介绍Spring Boot概述，同时讲解创建Spring Boot项目的两种方式、Spring Boot配置和Spring Boot 中常用的注解、Spring Boot的多环境配置以及 Spring Boot 的日志配置。

# 一、Sping Boot概述

## 1.1 Spring Boot简介

**Java开发存在的问题：**

(1）Java项目开发复杂度高。

(2）Java项目的维护非常困难。

(3）Java项目的部署和启动效率低。

(4）即使使用大量的框架，开发工作量也十分巨大。



**Spring Boot的优点如下：**

(1）能够快速创建独立运行的 Spring项目以及与主流框架的集成。

(2）使用嵌入式的Servlet容器，应用无需打成 War包。

(3）存在很多starters启动器可以帮助项目自动依赖和实现版本控制。

(4）大量的自动配置，简化开发。

(5）开箱即用，无需配置XML文件。

(6）准生产环境的运行时应用监控。

(7）能够与云计算天然集成。

## 1.2 微服务介绍

微服务架构是一种架构概念，旨在通过将功能分解到各个离散的服务中以实现对解决方案的解耦，并提供更加灵活的服务支持。

传统的Web开发方式开发的程序一般被称为单体应用，所有的功能打包在一个War包中，基本没有外部依赖，应用部署在一个Java EE 容器中，它包含了Dao、Service、Ul等所有逻辑。

**单体应用的优点如下：**
(1）开发简单，集中式管理。
(2）基本不会重复开发。
(3）功能都在本地，没有分布式的管理和调用消耗。

**单体应用的缺点如下：**
(1）效率低。开发都在同一个项目中，改代码时冲突不断。
(2）维护难。代码功能耦合在一起，新手不知如何下手。
(3）不灵活。构建时间长，任何小修改都要重构整个项目。
(4）稳定性差。一个微小的问题，都可能导致整个应用崩溃。
(5）扩展性不够。无法满足高并发下的业务需求。

微服务可以把一个大型的单个应用程序和服务拆分为数个甚至数十个支持的微服务，它可扩展单个组件而不是整个应用程序堆栈，从而满足服务等级协议。

**微服务的优点如下:**

(1）易于开发和维护。一个微服务只会关注一个特定的业务功能，所以业务清晰，代码量少。
(2）单个微服务启动较快。
(3）局部修改容易部署。
(4）技术栈不受限。在微服务架构中，可以结合项目业务及团队的特点，合理选择技术栈。
(5）按需收缩。可根据需求，实现细粒度的扩展。

![image-20220406105438590](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406105438590.png)

## 1.3 手动创建 spring could 应用

打开eclipse开发工具，菜单栏选择【File】-【New】-【other】-：

![image-20220406111439267](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406111439267.png)

在里面找到【Maven Project】进行创建

![image-20220406111624138](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406111624138.png)

勾选上【Create a simple project】，其他使用默认的

![image-20220406111800940](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406111800940.png)

这里填写好下图圈出来的几个必填的项目信息，然后点击【finish】即可

![image-20220406111959195](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406111959195.png)

这样就创建好了

![image-20220406112319311](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406112319311.png)

在pom.xml中添加项目的相关依赖

```xml
  <parent>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-parent</artifactId>
	<version>2.2.5.RELEASE</version>
	<relativePath/>
</parent>
<dependencies>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>
</dependencies>
```

![image-20220406113629986](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406113629986.png)

这里可能会报错，注意看出现的问题是什么，我的是提示更新项目

![image-20220406115241565](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406115241565.png)

这里我更新一下项目

![image-20220406113731872](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406113731872.png)

![image-20220406113722025](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406113722025.png)

还有一个版本冲突的问题，但是不影响使用，

![image-20220406113913031](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406113913031.png)

把他删除

![image-20220406113933812](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406113933812.png)

接下来就可以写代码了

![image-20220406114822881](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406114822881.png)

```java
package com.zn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloworldMainApplicayion {
	
	public static void main(String[] args) {
		SpringApplication.run(HollewordMainApplicayion.class, args);
	}
}
```

```java
package com.zn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloworldController {
	
	@RequestMapping("/hello")
	@ResponseBody
	public String  HelloworldController() {
		return "hello world!!";
	}

}
```
然后在HollewordMainApplicayion中运行，控制台会输出如下内容：

![image-20220406114725541](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406114725541.png)

然后打开浏览器就会显示我们刚刚的内容，这样就手动搭建spring boot测试成功

![image-20220406115029689](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406115029689.png)

## 1.4 使用 Spring Initializer 快速搭建项目

在STS工具中，可以手动搭建一个简单的Spring Boot开发环境，但是当需要加载的模块较多时，手动搭建Spring Boot开发环境就比较麻烦

**我们Spring Initializer快速创建Spring Boot应用，具体步骤如下：**

首先我们要使用到STS工具：

Spring Tools Suite官网：https://spring.io/tools

百度搜索Spring Tools Suite官网，进入下载，向下拉动滚动条，选择与自己操作系统对应的安装版本

![image-20220406120150717](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406120150717.png)

将下载后的压缩文件解压，在解压后的sts-bundle下的sts-4.0.0RELEASE目录中SpringToolSuite4.exe便是可执行程序，用于启动STS，将该文件发送到桌面快捷方式，当我们想使用STS时可以快速的找到。

![image-20220406120321748](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406120321748.png)

打开STM工具在菜单栏点击Windows-->Perference-->General-->Workspace，将编码方式设置为Other，然后在下拉框中选择UTF-8

![image-20220406120639855](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406120639855.png)

然后现在来创建SpringBoot应用，在菜单栏点击【File】-【New】-【Spring Starter Project】

![image-20220406120758820](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406120758820.png)

主要就设置name、group、package几项

![image-20220406121033841](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406121033841.png)

然后在这个地方我们需要选择一下版本号

![image-20220406121134611](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406121134611.png)

勾选Spring Web，选择加载Spring Web模块

![image-20220406121225243](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406121225243.png)

![image-20220406121250271](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406121250271.png)

项目创建成功后，在目录结构中可看到主程序类，在pom.xml文件中可看到相关依赖已经引入到项目中。右下角可以看见在自动下载jar包了

![image-20220406121356792](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406121356792.png)

在pom.xml中可以看到这里已经默认导入了一些依赖

![image-20220406121516578](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406121516578.png)

然后就可以创建类，编写代码了，我这里创建了一个测试类

```java
package com.zf.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	
	@RequestMapping("/test")
	public String test() {
		return "hello，欢迎来到 Spring Boot 的世界！";
		
	}
}
```

然后我们在主程序类进行启动

![image-20220406122612009](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406122612009.png)

然后通过浏览器进行访问可以查看

![image-20220406122652916](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406122652916.png)

可以看到已经创建并测试成功！ 



# 二、Spring Boot配置

Spring Boot不仅支持常规的properties配置文件，还支持YAML语言的配置文件。Spring Boot使用一个全局的配置文件来对一些默认配置值进行修改，全局配置文件名称为application.properties 或application.yml，全局配置文件通常放在src/main/resources目录下或者类路径 /config 下。

## 2.1 yml 配置文件

后缀为.yml的文件是YAML语言的文件，YAML语言以数据作为中心，比Json、XML等更适合做配置文件。它和其他高级语言类似，并且可以简单表达清单、散列表、标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构和各种配置文件。

**YAML语言基本语法注意点如下：**
(1）大小写敏感。
(2）使用缩进表示层级关系。
(3）缩进不允许使用Tab，只允许空格。
(4）缩进的空格数不重要，只要相同层级的元素左对齐即可。
(5）“#” 表示注释。

**YAML语言支持3种数据结构：**
(1）字面量：普通的值。
(2）数组：一组按次序排列的值。
(3）对象：键值对的集合。

YAML语言中字面量、对象和数组常用的写法介绍如下：

**1.字面量**（数字、字符串和布尔值等)

在YAML语言中，字面量的写法最简单，语法为 “`key: value`” (冒号后面需要跟一个空格）。简单示例如下：

```yaml
username: zhangsan
```

> 当字面量值为字符串时、需要注意的足字符串默认不使用引号﹒当字符串使永单引号或者双引号时、单引号中的字符串会转义特殊字符

**2.对象**

在YAML语言中，对象使用一组键值对来表示，对象的属性和值在对象名的下一行，需要注意缩进。简单示例如下：    

```yaml
friends:
    username: zhangsan
    age: 20
```

在YAMI语言中，对象行内写法示例如下：

friends: {lastName: zhangsan,age: 20}

**3.数组**

在YAML语言中，使用 “`- 值`” 表示数组中的一个元素，“-” 与值之间有个空格。简单示例如下:

```yaml
pets:
    - cat
    - dog
    - pig
```

在YAMI.语言中，数组行内写法示例如下：

```yaml
pets: [cat,dog,pig]
```



示例：

通过yml配置文件修改服务的端口号为8900，访问请求地址时获取服务端口号，将服务端号输出在页面中

```yaml
server :
    port: 8900
```

![image-20220406170143436](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406170143436.png)

如果没有代码提示，可以尝试在pom.xml当中添加依赖：

```xml
<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-configuration-processor</artifactId>
		<optional>true</optional>
</dependency>
```

然后启动服务，访问刚刚更改的端口号，可以看到已经更改成功

![image-20220406181422773](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406181422773.png)

## 2.2 @ConfigurationProperties注解

在编写项目代码时，开发者追求更灵活的配置和更好的模块化整合，为满足上述要求，开发者需要将大量的参数配置在`application.properties`或`application.yml`配置文件中，通过`@ConfigurationProperties`注解将配置信息自动封装到实体类中使用。

**示例：**

（1）创建一个 spring boot 项目在com.zn.bean包下新建Dog类，添加name和age两个属性，并重写toString()方法，代码如下:

```java
package com.zf.bean;

public class Dog {
	private String name;
	private int age;
	@Override
	public String toString() {
		return "Dog [name=" + name + ", age=" + age + "]";
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
}

```

（2）在com.zn.bean包下新建Person类，添加 lastName、age、boss、birth、maps、list和dog 7个属性，并重写toString(〉方法，代码如下:

```java
package com.zf.bean;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

public class Person {
	private String lastName;
	private int age;
	private Boolean boss;
	private Date birth;
	private Map<String,Object> maps;
	private List<Object> list;
	private Dog dog;
	@Override
	public String toString() {
		return "Person [lastName=" + lastName + ", age=" + age + ", boss=" + boss + ", birth=" + birth + ", maps="
				+ maps + ", list=" + list + ", dog=" + dog + "]";
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Boolean getBoss() {
		return boss;
	}
	public void setBoss(Boolean boss) {
		this.boss = boss;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public Map<String, Object> getMaps() {
		return maps;
	}
	public void setMaps(Map<String, Object> maps) {
		this.maps = maps;
	}
	public List<Object> getList() {
		return list;
	}
	public void setList(List<Object> list) {
		this.list = list;
	}
	public Dog getDog() {
		return dog;
	}
	public void setDog(Dog dog) {
		this.dog = dog;
	}
	
}

```

(3）在`application.yml`配置文件中添加Person类对应的属性值，代码如下:

```yml
server:
    port: 8900
    
person:
    last-name: zhangsan
    age: 22
    boss: true
    birth: 2017-10-25
    dog: 
        name: 小狗
        age: 2
    list:
        - list
        - wangwu
        - zhouliu
    maps: {k1: v1,k2: v2}

```

(4）在Person类上添加`@Component`注解和`@ConfigurationProperties`注解，代码如下：

```java
@Component
@ConfigurationProperties(prefix="person")
```

![image-20220406185219458](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406185219458.png)

> @ConfigurationProperties 注解支持松散绑定，lastName属性名在配置文件中可以写成last-name或者 lastName

（5）在com.zn.controller包下新建PersonController类并添加到容器中，添加Person类型属性，声明`getPerson()`方法，代码如下：

```java
package com.zf.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zf.bean.Person;

@Controller
public class PersonController {
	@Resource
	private Person person;
	
	@RequestMapping("/person")
	@ResponseBody
	public String getPerson() {
		return person.toString(); 
	}
}

```

运行主程序：

![image-20220406185340784](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406185340784.png)

在浏览器中输入网址，我们可以看到显示成功！

![image-20220406185432513](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406185432513.png)

## 2.3 PorpertySource注解

`@ConfigurationProperties`注解与`@Value`注解可以从全局配置文件中取值，然后为需要的属性赋值
但是如果应用比较大时，所有的配置信息都在一个配置文件中就会显得比较冗杂，同时也不太好维护，这时可以将配置信息添加到自定义的`properties`配置文件中，然后使用`@PropertySource`注解加载指定的配置文件。

**示例：**

在全局配置文件中配置服务的端口号为8090，新建Car类并添加carBrand、carType和carColor3个属性，然后新建car.properties配置文件，在自定义的配置文件中添加Car类的属性映射值最后使用PropertySource注解获取值。

（1）使用Spring Initializer 创建一个Spring Boot应用，在 application.properties配置文件中设置服务的端口号，代码如下:

```xml
server.port=8090
```

![image-20220406192417031](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406192417031.png)

（2）在src/main/resources目录下新建car.properties配置文件，代码如下:

```xml
car.carBrand=奔驰
car.carType=越野车
car.carColor=黑色
```

（3）在com.zn.bean包下新建Car类，添加carBrand、carType和carColor 3个属性，重写toString()方法，代码如下：

```java
package com.zf.bean;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource(value= {"classpath:car.properties"})
@ConfigurationProperties(prefix="car")
public class Car {
	private String carBrand;
	private String carType;
	private String carColor;
	@Override
	public String toString() {
		return "Car [carBrand=" + carBrand + ", carType=" + carType + ", carColor=" + carColor + "]";
	}
	public String getCarBrand() {
		return carBrand;
	}
	public void setCarBrand(String carBrand) {
		this.carBrand = carBrand;
	}
	public String getCarType() {
		return carType;
	}
	public void setCarType(String carType) {
		this.carType = carType;
	}
	public String getCarColor() {
		return carColor;
	}
	public void setCarColor(String carColor) {
		this.carColor = carColor;
	}
	
}

```

（4）在src/test/java目录下的测试类中添加Car类型属性，声明test01()方法，代码如下：

```java
package com.zf;

import javax.annotation.Resource;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.zf.bean.Car;

@SpringBootTest
class Lesson223ApplicationTests {
	@Resource Car car;
	
	@Test
	public void test01() {
		System.out.println(car);
	}
	
}

```

![image-20220406192651529](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406192651529.png)

（5）执行test01()方法，运行成功便可看到数据

## 2.4 lmportResource 注解

在Spring框架中，用到最多的就是XML配置文件，而在Spring Boot里面是没有XML配置文件的，开发者自己编写的XML配置文件也不能自动识别，如果需要在Spring Boot中识别XML配置文件，可以使用`@lmportResource`注解来导入一个传统的XML配置文件，让配置文件中的内容生效。

（1）在com.zn.service 包下新建HelloService类，代码如下：

```java
package com.zf.service;

public class HelloService {
	
}

```

（2）在类路径下创建beans.xml配置文件，将HelloService类注册到容器，代码如下:

```xml
<bean id="helloService" class="com.zf.service.HelloService"></bean>	
```

![image-20220406200354838](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406200354838.png)

（3）在主程序类上添加@lmportResource注解,注解内容如下:

```java
@ImportResource(locations= {"classpath:beans.xml"})
```

![image-20220406200440442](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406200440442.png)

（4）在`src/test/java`目录下的测试类中添加`ApplicationContext`类型属性，声明`test02()`方法代码如下:

```java
package com.zf;

import javax.annotation.Resource;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

@SpringBootTest
class Lesson223ApplicationTests {
	
	@Resource
	private ApplicationContext ac;
	
	@Test
	public void test02() {
		boolean flag = ac.containsBean("helloService");
		if (flag) {
			System.out.println("容器中包含HelloService类");
		} else {
			System.out.println("容器中不包含HelloService类");
		}
	}
	
	
}

```

![image-20220406200711592](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406200711592.png)

（4）test02()方法显示如下：

![image-20220406200722517](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406200722517.png)

## 2.5 使用@Configuration注解和@Bean注解添加组件

使用@ImportResource注解可以导入原始的XML配置文件，但是在Spring Boot中不提倡使用XML配置文件

为容器添加组件，Spring Boot推荐使用全注解方式来为容器添加组件。



**示例：**

在项目中创建一个配置类，使用`@Configuration`注解和`@Bean`注解来为容器添加组件

（1）在前面的代码中，在主程序类上将@lmportResource注解注释或者删除。

![image-20220406201828169](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406201828169.png)

（2）在`com.zn.config`包下新建AppConfig 配置类，声明`helloService()`方法，代码如下:

```java
package com.zf.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.zf.service.HelloService;

@Configuration
public class Appconfig {
	@Bean
	public HelloService hello0Service() {
		System.out.println("配置类通过@bean注解向容器中添加组件！");
		return new HelloService();
	}
}

```

> `@Configuration`注解用于定义配置类，添加了`@Configuration`注解的配置类相当于Spring框架中的XMI.配置文件。(@Bean注解是一个方法级别上的注解，主要用在(@C.onfiguration注解的类中，它相当于XMI.配置文件中的`<bean>`标签，它将方法的返回值添加到容器中，容器中添加的组件默认的id为方法名。

（3）在测试类中执行test02()方法，结果如下：

![image-20220406202245115](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406202245115.png)

# 三、Spring Boot 多环境配置

## 3.1 配置文件占位符

在Spring Boot配置文件中，开发者可以使用Spring Boot提供的一些随机数函数，列举如下:

```yml
${random.value}、${random.int}、$(random.long)、$(random.int(10))、$(random.int[ 100,200])、${random.uuid}
```

也可以使用配置文件中前面已经定义的值，列举如下:

```yml
person.last-name=zhangsan
person.dog.name=${person.last-name}小狗
```

还可以为不存在的属性提供默认值，列举如下:

```yml
${app.name:金毛}
```



**示例：**

新建一个Spring Boot项目，首先新建Customer类并添加4个属性，然后在配置文件中使用占位符自定义属性值，并将结果输出到控制台中，具体实现步骤见示例：

(1）新建一个Spring Boot项目，然后在com.zn.bean包下新建Customer类，添加 customerld、customerName、customerAge 和 description 4个属性，重写toString()方法，代码如下:

```java
package com.zf.bean;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="customer")
public class Customer {
	private String customerId;
	private String customerName;
	private int custemAge;
	private String description;
	
	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", customerName=" + customerName + ", custemAge=" + custemAge
				+ ", description=" + description + "]";
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public int getCustemAge() {
		return custemAge;
	}
	public void setCustemAge(int custemAge) {
		this.custemAge = custemAge;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

}

```

(2）在类路径下新建application.yml配置文件，添加 Customer类的属性映射值，代码如下:

```yml
customer:
    customer-id: ${random.uuid}
    customer-name: xiaoming
    customer-age: ${random.int[10,30]}
    description: ${customer.hello:hello},${customer.cumtomer-name}'s, ID is ${customer.custoemer-id}
```

(3）在测试类中添加Customer类型属性，声明test01()方法，代码如下:

```java
package com.zf;

import javax.annotation.Resource;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.zf.bean.Customer;

@SpringBootTest
class Lesson231ApplicationTests {
	@Resource
	private Customer customer;

	@Test
	public void Test01() {
		System.out.println(customer);
	}
}

```

![image-20220406204606205](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406204606205.png)

(4）运行test01()方法，结果如图所示。

![image-20220406204509846](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406204509846.png)

## 3.2 配置文件优先级

Spring Boot启动时会扫描application.properties 或者application.yml作为默认的配置文件，默认配置文件一般会保存在以下位置:

> 工程根目录：./config/
>
> 工程根目录：./
>
> classpath： /config/
>
> classpath： /

以上路径是按照优先级从高到低的顺序进行排列，所有位置的配置文件都会被加载，高优先级配置内容会覆盖低优先级配置内容。

示例：

使用之前的项目，分别在项目中的类路径下、类路径/config/下、工程根目录下和工程根目录/config/下新建application.properties配置文件，在4个配置文件中分别设置不同的服务端口号，通过此实验来了解配置文件的优先级：

（1）在类路径下的application.properties配置文件中设置服务端口号为8000和项目的上下文路径，代码如下

```xml
server.port=800
server.servlet.context-path=/boot
```

（2）在com.zn.controller包下新建TestController类，声明test()方法，代码如下:

```java
package com.zf.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {
	
	@RequestMapping("/test")
	@ResponseBody
	public String test(HttpServletRequest requst) {
		return "Now , The Server's Port is "+ requst.getServerPort();
	}
}

```

（3）运行主程序，在浏览器中输入请求地址，结果如图

![image-20220406210820979](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406210820979.png)

（4）在`src/main/resources`目录下新建config目录，将`application.properties`配置文件复制到config目录下，然后修改配置文件中的服务端口号为8100，代码如下:

```xml
server.port=8100
```
（5）重新启动主程序，在浏览器中输入请求地址

![image-20220406211157156](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406211157156.png)

（6）将application.properties配置文件复制到项目根目录下，然后修改配置文件中的服务端口号为8200，代码如下:

```xml
server.port=8200
```
（7）重新运行主程序，在浏览器中输入请求地址，如图：

![image-20220406223137731](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406223137731.png)

（8）在项目根目录下新建config目录，将application.properties配置文件复制到config目录下，然后修改配置文件中的服务端口号为8300，代码如下:

```xml
server.port=8200
```

（9）重新运行主程序，在浏览器中输入请求地址，如图：

![image-20220406223410930](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406223410930.png)

优先级示意：

![image-20220406223620283](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406223620283.png)

## 3.3 多环境配置

在实际企业开发中，应用程序开发完成后的测试会经过多套测试环境测试，开发者首先会在本地开发环境中进行开发和测试，测试完成后开发者会将程序打包部署到多套测试环境中进行测试，经过多套测试环境的测试后，开发者会将应用程序打包部署到准生产环境中进行测试，最后才将应用程序部署到生产环境中给业务人员使用。在此过程中，项目的一些配置信息会经常变更，导致开发者维护项目变得比较烦琐。

Spring Boot对不同环境提供不同配置功能的支持，可以通过激活和指定参数等方式来快速切换开发和测试环境。

**1、多配置文件方式**

Spring Boot项目支持多配置文件的形式来支持不同环境的引用，但是配置文件的名称格式必须符合如下格式：

```xml
application-xxx.properties
```

如：`application-dev.properties`



**示例：**

在Spring Boot项目的类路径下分别新建`application-dev.properties`、`application-test.properties`和`application-prod.properties`这3个配置文件作为`开发环境`、`测试环境`和`生产环境`的配置文件。

在各环境的配置文件中分别配置各个环境的服务端口号，然后在默认配置文件中使用配置文件的激活方式激活所需要的环境配置

（1）新建Spring Boot项目，在`application.properties`配置文件中设置默认的服务端口号为 8900，代码如下：

```xml
server.port=8900
```

（2）在路径下新建`application-dev.properties`配置文件作为开发环境，设置开发环境的服务端口号为 8901，代码如下：

```xml
server.port=8901
```

（3）在路径下新建`application-test.properties`配置文件作为测试环境，设置测试环境的服务端口号为 8902，代码如下：

```xml
server.port=8902
```

（4）在路径下新建`application-prod.properties`配置文件作为测试环境，设置测试环境的服务端口号为 8903，代码如下：

```xml
server.port=8903
```

（5）运行主程序，结果如图可知，Spring Boot默认使用全局配置文件中的配置信息。

![image-20220406225833877](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406225833877.png)

（6）在`application.properties`配置文件中使用`spring.profiles.active`激活测试环境的配置信息，代码如下:

```xml
spring.profiles.active=test
```

![image-20220406230704588](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406230704588.png)

（7）运行主程序，结果如下：

![image-20220406230644364](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406230644364.png)



**2、多文档块方式**

在Spring Boot项目中，yml配置文件实现多环境的配置更加简单。在yml配置文件中使用`多文档块`的方式实现多环境配置，在`application.yml`配置文件中使用3个横杠“`---`”来区别文档块。

**示例：**

在application.yml配置文件中，通过多文档块实现开发环境、测试环境和生产环境的不同配置信息：

（1）将4个properties配置文件中的代码全部注释或者删除，然后在类路径下新建application.yml配置文件，设置默认环境、开发环境、测试环境和生产环境的服务端口号，代码如下:

```yml
server:
    prot: 8000
---
server:
    prot: 8001
spring:
    profiles: dev
---
server:
    prot: 8002
spring:
    profiles: test
---
server:
    prot: 8003
spring:
    profiles: prod
```

（2）运行主程序，结果如下：

![image-20220406231521071](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406231521071.png)

（3）在application.yml配置文件中使用spring.profiles.active激活生产环境的配置信息，代码如下

```yml
spring:
    profiles:
        active: prod
```

![image-20220406231718350](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406231718350.png)

（4）运行结果如下，生产环境的端口为8003，设置成功！

![image-20220406231752251](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406231752251.png)

# 四、SpringBoot日志

## 4.1 Spring Boot日志框架介绍

在项目开发中，日志是必不可少的一个记录事件的组件，所以开发者会相应地在项目中实现和构建日志框架。

**1、日志框架的分类和选择**

现如今市面上常见的日志框架很多，具体分类见下表。

| 日志抽象层                   | 日志实现层 |
| ---------------------------- | ---------- |
| SLF4J                        | Logback    |
| JCL(Jakarta Commons Logging) | Log4j      |
| jboss-logging                | Log4j2     |
|                              | JUL        |

通常情况下，项目中的日志是由一个日志抽象层和日志实现层组合搭建的。

Spring Boot的底层是Spring框架，Spring 框架默认的日志框架是`JCL`，在Spring项目中必须要导入`commons-logging`的jar包，否则程序会报错。而 Spring Boot对 Spring 框架进行了封装，它默认选用`SLF4J+Logback`的组合。
Spring Boot能自动适配所有的日志框架，而且底层使用`SLF4J+Logback`的方式记录日志，为了统一日志记录方式，在项目中引入其他框架的时候，只需要把这个框架依赖的日志框架排除掉即可，在Spring Boot项目中，Spring 框架依赖的日志框架被排除，排除依赖代码如下:

```xml
	<dependency>
		<groupId>org.springframework</groupId>
		<artifactId>spring-core</artifactId>
		<exclusions>
			<exclusion>
				<groupId>commons-logging</groupId>
				<artifactId>commons-logging</artifactId>
			</exclusion>
		</exclusions>
	</dependency>
```

**2、Spring Boot日志配置**

Spring Boot已经自动配置了日志框架，开发者直接使用即可，但是在某些情况下，默认的日志配置不能满足业务需求，这时需要开发者手动修改配置信息来满足业务上的需求。

**示例：**

在新建的Spring Boot项目中使用日志框架，在全局配置文件中修改配置信息，调整控制台日志输出的格式，将日志输出到磁盘文件中：

（1）运行项目的主程序，控制台输出的部分日志如下：

```log
2022-04-06 23:16:49.209  INFO 31632 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1330 ms
2022-04-06 23:16:49.671  INFO 31632 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8003 (http) with context path ''
2022-04-06 23:16:49.680  INFO 31632 --- [           main] com.zf.Lesson233Application              : Started Lesson233Application in 2.483 seconds (JVM running for 2.983)
```

（2）在测试类中，使用`LoggerFactory`获取日志记录器，然后声明test01()方法，代码如下：

```java
package com.zf;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class Lesson241ApplicationTests {
	//日志记录器
	Logger logger = LoggerFactory.getLogger(getClass());
	
	@Test
	void test01() {
		//日志的级别：
		logger.trace("这是trace日志```");
		logger.debug("这是debug日志```");
		logger.info("这是info日志```");
		logger.warn("这是warn日志```");
		logger.error("这是error日志```");
	}

}

```

![image-20220406233846804](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406233846804.png)

（3）运行test01方法，结果如图，可知Spring Boot默认的日志级别为INFO。

![image-20220406233947487](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406233947487.png)

（4）在全局配置文件中设置com.zn包下的日志输出级别为debug，代码如下:

```xml
logging.level.com.zf=debug
```

（5）结果如图：

![image-20220406234422797](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220406234422797.png)

（6）在全局配置文件中设置日志输出路径和日志文件名称，代码如下:

```xml
logging.file.name=D:/springboot.log
```

> 如果logging.file.name的值为xxx.log，则生成的日志文件在项目的根目录下

（7）运行test01()方法，在D盘中可查找到springboot.log日志文件。

（8）在全局配置文件中将`logging.file.name`相关代码进行注释，然后使用`logging.file.path`指定日志文件生成的路径，代码如下：

```xml
logging.file.path=D:/
```

（9）运行test01()方法，在D盘中可查找到spring.log日志文件。

> 使用`logging.lilc.path`指定日志文件生成的所在路径后，默认生成的日志文件名称为spring.logo

（10）在全局配置文件中设置控制台输出的日志格式，代码如下:

logging.pattern.console= % d{yyvy-MM-dd} [%thread] % -5level %logger(50) - % msg%n

（11）运行test01()方法，输出日志格式结果如下:

```xml
2022-04-06 23:44:05.216 DEBUG 34748 --- [           main] com.zf.Lesson241ApplicationTests         : 这是debug日志```
2022-04-06 23:44:05.216  INFO 34748 --- [           main] com.zf.Lesson241ApplicationTests         : 这是info日志```
2022-04-06 23:44:05.216  WARN 34748 --- [           main] com.zf.Lesson241ApplicationTests         : 这是warn日志```
2022-04-06 23:44:05.216 ERROR 34748 --- [           main] com.zf.Lesson241ApplicationTests         : 这是error日志```
```

> 使用logging.pattern.file可以指定日志文件输出的日志格式

## 4.2 自定义日志配置文件

在Spring Boot项目中，默认的日志配置文件是`spring-boot-2.2.5.RELEASE.jar`中的`org.springframework.boot.logging.logback`包下的`defaults.xml`配置文件，如果开发者需要Spring Boot使用自定义的日志配置文件，只需要将自定义的日志配置文件放在类路径下即可，但是自定义的日志配置文件的名称有要求，命名要求具体介绍如下表：

| 日志框架 | 自定义文件名称                    |
| -------- | --------------------------------- |
| Logback  | logback-spring.xml or logback.xml |
| Log4f2   | log4j2-spring.xml or log4j2.xml   |
| JUL      | logging.properties                |

在Logback日志框架中，Spring Boot官方推荐使用`logback-spring.xml`作为自定义日志文件的名称，这样在`logback-spring.xml`配置文件中可以使用Spring Boot中的高级标签`<springProfile>o
<springProfile>`标签可以设置多环境配置，即可以指定某段配置在某个环境下生效。

**示例：**

中的内容自定义日志配置文件，在开发环境、测试环境和生产环境中配置不同的日志输出格式

（1）将`application.properties`配置文件中的内容全部注释或者删除，然后将`logback-spring.xml`配置文件放在类路径下，请在资源共享包中下载`logback-spring.xml`配置文件。

（2）打开logback-spring.xml配置文件，在第1个<layout>标签下配置不同环境的日志输出格式，代码如下:

```xml
<springProfile name="dev">
	<pattern>
		%diyvvy-MM-dd} ----> [%thread] ---> %-5level %logger{50} - %msg%n
	</pattern>
</springProfile>
<springProfile name="!dev">
	<pattern>
		%d{yvvy-MM--dd} === [%thread] === %-5level %logger{50} - %msg%n
	</pattern>
</springProfile>

```

（3）运行测试类中的test01()方法,输出结果如下：

（4）在application.properties配置文件中设置spring.profiles.active 的值为dev，代码如下

```xml
spring.profiles.active=dev
```

（5）运行测试类中的test01()方法，输出结果如下: