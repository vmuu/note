# 第 1 章 ECMASript 相关介绍

## 1.1 什么是 ECMA

![image-20220602101529273](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220602101529273.png)

ECMA（European Computer Manufacturers Association）中文名称为欧洲计算机制造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994 年后该组织改名为 Ecma 国际。

## 1.2 什么是 ECMAScript

ECMAScript 是由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言。

## 1.3 什么是 ECMA-262

Ecma 国际制定了许多标准，而 ECMA-262 只是其中的一个，所有标准列表查看
http://www.ecma-international.org/publications/standards/Standard.htm

## 1.4 ECMA-262 历史

ECMA-262（ECMAScript）历史版本查看网址

http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm

| 版次        | 年份               | 制定了语言的基本语法                                         |
| ----------- | ------------------ | ------------------------------------------------------------ |
| 第 1 版     | 1997 年            | 制定了语言的基本语法                                         |
| 第 2 版     | 1998 年            | 较小改动                                                     |
| 第 3 版     | 1999 年            | 引入正则、异常处理、格式化输出等。 IE 开始支持               |
| 第 4 版     | 2007 年            | 过于激进，未发布                                             |
| 第 5 版     | 2009 年            | 引入严格模式、 JSON，扩展对象、数组、原型、字符串、日期方法  |
| 第 **6** 版 | **2015** 年        | 模块化、面向对象语法、Promise、箭头函数、 let、const、数组解构赋值等等 |
| 第 7 版     | 2016 年            | 幂运算符、数组扩展、Async/await 关键字                       |
| 第 8 版     | 2017 年            | Async/await、字符串扩展                                      |
| 第 9 版     | 2018 年            | 对象解构赋值、正则扩展                                       |
| 第 10 版    | 2019 年            | 扩展对象、数组方法                                           |
| ES.next     | 动态指向下一个版本 |                                                              |

注：从 ES6 开始， 每年发布一个版本，版本号比年份最后一位大 1

## 1.5 谁在维护 ECMA-262

TC39  (Technical Committee 39) 是推进 ECMAScript  发展的委员会。其会员都是公司(其中主要是浏览器厂商，有苹果、谷歌、微软、因特尔等)。 TC39  定期召开会议，会议由会员公司的代表与特邀专家出席

## 1.6 为什么要学习 ES6

- ES6 的版本变动内容最多，具有里程碑意义
- ES6 加入许多新的语法特性，编程实现更简单、高效
- ES6 是前端发展趋势，就业必备技能

## 1.7 ES6 兼容性

http://kangax.github.io/compat-table/es6/  可查看兼容性

![image-20220602102314835](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220602102314835.png)

# 第 2 章 ECMASript 6  新特性

## 2.1 let 关键字

let 关键字用来声明变量，使用let 声明的变量有几个特点：

1)    不允许重复声明
2)    块儿级作用域
3)    不存在变量提升
4)    不影响作用域链

应用场景：以后声明变量使用 let 就对了

## 2.2 const 关键字

const  关键字用来声明常量， const 声明有以下特点

1)    声明必须赋初始值
2)    标识符一般为大写
3)    不允许重复声明
4)    值不允许修改
5)    块儿级作用域

注意:  对象属性修改和数组元素变化不会出发 const 错误

应用场景：声明对象类型使用 const，非对象类型声明选择 let

## 2.3. 变量的解构赋值

ES6 允许按照一定模式， 从数组和对象中提取值， 对变量进行赋值， 这被称为解构赋值。

```javascript
//数组的解构赋值
const arr = ['张学友', '刘德华 ', '黎明 ', '郭富城'];
let [zhang, liu, li, guo] = arr;
//对象的解构赋值
const lin = {
    name: '林志颖',
    tags: ['车手 ', '歌手', '小旋风', '演员']
};
let {name, tags} = lin;
//复杂解构
let wangfei = {
    name: '王菲 ',
    age: 18,
    songs: ['红豆 ', '流年', '暧昧', '传奇'],
    history: [
        {name: '窦唯'},
        {name: '李亚鹏'},
        {name: '谢霆锋'}
    ]
};
let {
    songs: [one, two, three], 
    history: [first, second, third]
} = wangfei;
```

注意： 频繁使用对象方法、数组元素，就可以使用解构赋值形式

## 2.4. 模板字符串

模板字符串(template string)是增强版的字符串， 用反引号(`)标识，特点：
1)    字符串中可以出现换行符
2)    可以使用 ${xxx}  形式输出变量

```javascript
// 定义字符串
let str = `<ul>
<li>沈腾</li>
<li>玛丽</li>
<li>魏翔</li>
<li>艾伦</li>
</ul>`;
// 变量拼接
let star = '王宁 ';
let result = `${star}在前几年离开了开心麻花`;
```

注意： 当遇到字符串与变量拼接的情况使用模板字符串

## 2.5. 简化对象写法

ES6  允许在大括号里面， 直接写入变量和函数， 作为对象的属性和方法。这样的书写更加简洁。

```javascript
let name = '尚硅谷';
let slogon = '永远追求行业更高标准';
let improve = function () {
    console.log('可以提高你的技能');
}
//属性和方法简写
let atguigu = {
    name,
    slogon,
    improve,
    change() {
        console.log('可以改变你')
    }
};
```

注意： 对象简写形式简化了代码，所以以后用简写就对了

## 2.6. 箭头函数

ES6  允许使用「箭头」  (=>)定义函数。

```javascript

```

箭头函数的注意点:

1)    如果形参只有一个，则小括号可以省略
2)    函数体如果只有一条语句， 则花括号可以省略， 函数的返回值为该条语句的 执行结果
3)    箭头函数 this 指向声明时所在作用域下 this  的值
4)    箭头函数不能作为构造函数实例化
5)    不能使用 arguments

```javascript
/**
* 1. 通用写法
*/
let fn = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3;
}
/**
* 2. 省略小括号的情况
*/
let fn2 = num => {
    return num * 10;
};

/**
* 3. 省略花括号的情况
*/
let fn3 = score => score * 20;

/**
* 4. this 指向声明时所在作用域中this 的值
*/
let fn4 = () => {
    console.log(this);
}

let school = {
    name: '尚硅谷',
    getName(){
        let fn5 = () => {
            console.log(this);
        }
        fn5();
    }
};
```

注意： 箭头函数不会更改 this 指向，用来指定回调函数会非常合适