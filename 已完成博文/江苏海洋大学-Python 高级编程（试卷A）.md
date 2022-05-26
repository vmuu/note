## 一、程序分析题（本大题共 30 分，每空 3 分） 

1. Python 中，已知 a=3，b=5，运行下列程序段后，

```python
a = a * b
b = a // b
a = a // b
```

a 和 b 的值分别为________`5`_________和________`3`__________

2. 下列 Python 程序运行后

```python
s=0
for i in range(1,5):
	s=s+i
print("s=",s)
```

输出结果是_______`s=10`______

3. 如下 Python 程序段,

```python
x = 0
while x < 50:
x = (x + 2) *(x + 3)
print(x)
```

运行后，x 的值为_______`72`_______

4. 字符串 s="hello world"，用______`replace(' ','')`_______可将中间空格去掉。

5. 以下代码段

```
for str in "mypython":
	if str=='y' or str=='t':
	continue
print(str,end='')
```

输出结果是______`__mphon`____________

6. 以下代码段运行后

```
ls=["北京","上海","广州","重庆","武汉"]
x="上海"
print(ls.index(x))
```

输出结果是_______`1`_________

7. 已知列表 list1=[10，66，27，33，23]，则 python 表达式 max(list1) 的值为______`___66___`____

8. 某品牌手机第一年销量为 20000 台，假设平均每年的销量比上一年增加 68%，请问几年后能使总销量达到 60000 台。下面的程序能实现上述的功能，请将缺失的代码补充完整。

```python
total=every_year=20000
year=1
while 【total<600000】:
every_year + = 【every_year*0.68】
total + = every_year
year + = 1
print(year)
```

## 二、逻辑设计题（本大题共 40 分）

1. “水仙花数”是指一个三位数，其各位数字立方和等于该数本身。例如：153 是一个“水仙花数”,因为 153=13+53+33，请计算并输出所有三位数的水仙花数。（8 分）

```python
for n in range(100, 1000):
    i = n // 100
    j = n // 10 % 10
    k = n % 10
    if n == i ** 3 + j ** 3 + k ** 3:
        print(n)
```

2. Python 面向对象编程，简述_ _init_ _方法()特点和作用以及方法中的"self"代表什么？（8 分）

> __init__()方法：初始化创建好的对象，初始化指的是："给实例属性赋值"
> 特点：
> 1、名称固定，必须为__init__()
> 2、第一个参数固定，必须为self。self指的就是刚刚创建好的示例对象。
> 作用：
> 1、__init__()方法可以用来初始化对象: 给对象添加属性并赋值
> 2、某个对象调用其方法时，python解释器会把这个对象作为第一个参数传递给self，开发者只需要传递后面的参数.

3. 描述列表，元组，集合，字典各自特点?（8 分）

> 列表使用[]标识，列表内的值可以进行修改，可以用于一些需要经常改变的数值；
>
> 元组使用圆括号标识，其内部的值是无法进行修改的，所以可以用于一些无法进行修改的数值，但是如果元组内部有列表的子序列，那么列表内就可以进行修改；字典使用
>
> 大括号{}标识，其中的元素是键值对（key : value），它的key值不能够修，所以对于一些用户名或者不可更改的值，可以用这个类型，密码可以随时修改，即value值；
>
> 集合是一组key的集合，但是不存储value，和字典一样用大括号进行标识。

4. 编写猜数字游戏。系统随机生成一个 1~10 之间的数，通过编程，从键盘输入数字，判断输入值与随机生成值之间关系（大，小，相等）。直到猜到正确数字为止。如果输入 0，则程序退出（16 分）

```python
import random
my_number = random.randint(0, 10)
while True:
    user_number = input("请输入一个数字：")
    if user_number.isdigit():
        user_number = int(user_number)
        if 0 == user_number:
            print("检测到输入0，游戏结束！")
            break
        if user_number > my_number:
            print("你猜的数字大了，请继续猜！")
            continue
        if user_number < my_number:
            print("你猜的数字小了，请继续猜！")
            continue
        if user_number == my_number:
            print(f"恭喜你猜对了，随机生成的数字是：{my_number} ！")
            break
    else:
        print("输入非法！请重新输入！")
```

## 三、编程题（本大题共 30 分）

1. 用户输入字符串统计其中英文字母、空格、数字和其它字符的个数并且输出; (14 分)

```python
user_input = input("请输入一串字符:")
english = 0
space = 0
num = 0
other = 0
for i in user_input:
    if i.isalpha():  # 字母
        english += 1
    elif i == ' ':  # 空格
        space += 1
    elif i.isdigit():  # 数字
        num += 1
    else:
        other += 1
print('英文字母：%d' % english)
print('空格：%d' % space)
print('数字：%d' % num)
print('其它字符：%d' % other)
```

2. 设计药品 Medicine 类(16 分)

要求：引入时间模块 datetime

1) Medicine 类属性如下：

| 编号 | 属性     | 属性名 |
| ---- | -------- | ------ |
| 1    | 药名     | name   |
| 2    | 价格     | price  |
| 3    | 生产日期 | PD     |
| 4    | 失效日期 | Exp    |

2) Medicine 类方法如下：

| 编号 | 方法         | 方法名    | 返回类型 |
| ---- | ------------ | --------- | -------- |
| 1    | 获取药品名称 | get_name( | str      |
| 2    | 计算保质期   | get_GP()  | str      |

3) 创建 Medicine 类对象，并打印输出药品名称和保质期。

对象属性值如下: 

> name 为格列宁，price=2000，PD 为 2022-2-22，Exp=2023-2-21

```python
from datetime import datetime
class Medicine:
    name = ''
    price = 0
    PD = ''
    Exp = ''
    def __init__(self, name, price, PD, Exp):
        self.name = name
        self.price = price
        self.PD = PD
        self.Exp = Exp
    def get_name(self):
        return self.name
    def get_GP(self):
        start = datetime.strptime(self.PD, '%Y-%m-%d')
        end = datetime.strptime(self.Exp, '%Y-%m-%d')
        return (end - start).days
medicine = Medicine(name='格列宁', price=2000, PD='2022-2-22', Exp='2023-2-21')
name = medicine.get_name()
GP = medicine.get_GP()
print('药品名称:{}'.format(name))
print('药品保质期:{}天'.format(GP))
```

