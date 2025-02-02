---
title: Java笔记
date: 2025-01-20
categories:
  - 后端
tags:
  - Java
  - 后端
---
>本文根据韩顺平老师的java课程整理而来。

重点：
接口，内部类
String , StringBuffer , StringBuilder
输出流输入流
java8 ,java11特性

java基础 => javaSE
## JDK,JRE,JVM的关系


1. JDK = JRE + java开发工具
2. JRE = JVM + 核心类库


## 环境path配置及其作用

1. 环境变量的作用是为了在dos的任意目录，可以去使用java和javac命令
2. 先配置JAVA_HOME = 指向jdk安装的主目录
3. 编辑path环境变量，增加 %JAVA_HOME%\bin


javac 对java文件进行编译，生成.class文件
通过java命令 对生成的 class文件进行运行

## 编码格式设置

dos命令的默认编码格式是GBK,所以此时源码文件编码格式设置为GBK(本来是utf-8)，否则会乱码

可以选择在`javac Hello.java`后增添 -encoding UTF-8

在cmd中输入java -version  会报错
Error:could not open `D:\Java\jre7\lib\amd64\jvm.cfg'
把Path系统环境变量中，把%JAVA_HOME%\bin调整到最前面

在package control中安装GBK插件后，要重启才能设置生效。

![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250130234112.png)

.java文件是源文件
.class文件是字节码文件

## 开发注意事项
1. **一个源文件最多只能有一个public类**，其他类个数不限
2. 如果源文件包含一个public类，则文件名必须按该类名命名
3. 也可以将main方法写在非public类中，然后指定运行非public类，这样入口就是非public的main方法


## 文档注释
javadoc -d 文件夹名 -xx -yy Demo.java

javadoc标签有@author、@version等

示例：
```
/**
 *   @author  easton
 *   @version 1.0
 */
```

在控制台输入命令：
`javadoc -d d:\\tmp -author -version ChangeChar.java`

可以得到文档注释，在tmp文件夹中打开index.html，可以得到

![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250130234320.png)

## 相对路径和绝对路径

相对路径：从当前目录开始定位，形成的路径

绝对路径：从顶级目录d，开始定位，形成的路径

![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250130234543.png)

## DOS命令（了解）


![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131102558.png)


## 转义字符


`\t`  一个制表位，表示对齐的功能


`\r`  一个回车

```
System.out.println("韩顺平教育\r北京");
输出：北京平教育
```



#### 字符串拼接

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250130235201.png)


如图，输出的是：6string456

#### 字符串相等判断

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250130235225.png)



注意点：
小的数据类型可以转换为大的，
反之不行。

float的数据加 f 或 F
long数据加 L 或 l

```java
double num1 = 2.7;
double num2 = 8.1 / 3;
System.out.println(num1);
System.out.println(num2);

输出：
2.7
2.6999999999999997
```

注意：
当我们对运算结果是小数的进行相等判断时，要小心！
应该是以两个数的差值的绝对值，在某个精度范围内判断
```java
	if(Math.abs(num1 - num2) < 0.000001){
		System.out.println("到规定精度，认为相等");
	}
```


### 基本数据类型转换

#### 自动类型转换



![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250130235301.png)


![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250130235317.png)


#### 强制类型转换

自动类型转换的逆过程，将容量大的数据类型转换为容量小的数据类型。使用时要加上
强制转换符（），但可能造成精度降低或溢出。

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250130235340.png)


```java
short s1 = 20;  
short s2 = 30;  
short s = (short)(s1+s2);//同样的short相加也会变成int类型，也要强转成short
```

## Java文档
在线查询：www.matools.com

类的组织形式

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250130235405.png)



## 第四章

### 算术运算符

#### 取模公式

`a % b = a - a / b * b`

当a为小数时，
``a % b = a - (int)a / b * b``

小数参与运算，得到结果是近似值！！

易错点：
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131102749.png)

### 逻辑运算符

短路与 &&
逻辑与 &

都是两个条件都为真，结果才为真。
短路与：如果第一个为false，则第二个条件不会判断，最终结果为false，效率高
逻辑与：如果第一个为false，则第二个条件仍然会判断，效率低

短路或 ||：如果第一个为true，则第二个条件不会判断，最终结果为true
逻辑或 |：如果第一个为true，则第二个条件仍然会判断

都是两个条件其中一个为真，结果就为真。


a^b:叫逻辑异或，当a和b不同时，则结果为true,否则为false


### 赋值运算符
复合赋值运算符会进行类型转换


### 三元运算符
表达式1和表达式2要为可以赋给接收变量的类型（或可以自动转换/或者强制转换）


### 进制
对于整数，有四种表示方式：
二进制：0,1，满2进1.以0b或0B开头。
十进制：0-9，满10进1。
八进制：0-7，满8进1.以数字0开头表示。
十六进制：0-9及A(10)-F(15)，满16进1.以0x或0X开头表示。此处的A-F不区分大小写。

### 原码、反码、补码


![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131102808.png)


### 位移运算


![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131102839.png)


示例：
```java
class Tiger{  
    public static void main(String[] arg){  
        int a = 8>>3;  
        int b= -1<<3;  
        System.out.println(a);//1  
        System.out.println(b);//-8  
        System.out.println(~5);//-6  
        System.out.println(-5<<1);//-10  
        System.out.println(-5>>1);//-3  
    }  
}
```

## 第五章

### switch表达式

表达式与case后的常量值数据类型要一致，或者是可以自动转换成可以相互比较的类型，
比如输入的是字符，而常量是int

switch（表达式）中表达式的返回值必须是：
（byt，short，int，char，enum，String）

case子句中的值必须是常量表达式，而不能是变量

*穿透
```java
switch (mon){  
    case 3:  
    case 4:  
    case 5:  
        System.out.println("春季");  
        break;  
    case 6:  
    case 7:  
    case 8:  
        System.out.println("夏季");  
        break;  
    default:  
        System.out.println("错误");  
}
```

### 字符串内容比较equals

string.equals("xxxxx")

"xxxxx".equals(string)第二种更好，避免空指针


### break细节


![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103012.png)

### 跳转控制语句-return

return 使用在方法，表示跳出所在的方法。
注意：如果return 写在main方法，退出程序



## 第六章

### 数组

数组声明（静态初始化）
`double[] hens = {3.1,23,10};`

【】可以再数据类型后，也可以在数组名后。

数组长度：
`hens.length`

第一种动态分配方式：
`double scores[] = new double[5];`

第二种动态分配方式：
`double scores[];//先声明`
`scores = new double[5];//再分配内存空间`

数组创建后的默认值：
```
int：0,
float: 0.0,
char: \u0000,
boolean: false,
String: null
```


#### 值传递/值拷贝

基本数据类型


#### 引用传递/地址拷贝
数组在默认情况下是引用传递，赋的值是地址。
引用数据类型

![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103120.png)

### 二位数组

二维数组的列数不一定相等。

#### 举例
```java

public class TwoArray{
	public static void main(String[] args) {
		
		int[][] a = new int[3][];
		//创建 二维数组 ，一共3个一维数组，但每个一维数组还没开数据空间
		for(int i=0;i<a.length;i++){
			//给每个一维数组开空间 new
			//如果没有给一维数组 new ，那么a[i]就是null
			a[i] = new int[i+1];
			for(int j=0;j<i+1;j++){
				a[i][j]=i+1;
			}

		}
		for(int i=0 ;i<a.length;i++){
			for(int j=0;j<a[i].length;j++){
				System.out.print(a[i][j]+"\t");
			}
			System.out.println();
		}
	}
}
```

#### 注意事项
1. 一维数组声明方式有：
	`int[] x`
	`int x[]`
2. 二维数组声明方式有：
	`int[][] y`
	`int[] y[]`
	`int y[][]`
3. 存在列数不等的二维数组：即各个一维数组长度不相同。


## 第七章


### 类和对象

类和对象的区别和联系：
类是抽象的，概念的，代表一类事物,比如人类,猫类.., 即它是数据类型.
对象是具体的，实际的，代表一个具体事物, 即是实例.
类是对象的模板，对象是类的一个个体，对应一个实例

对象在内存中存在形式(重要的)必须搞清楚。


![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103157.png)

### 属性
从概念或叫法上看： 成员变量 = 属性 = field(字段) （即 成员变量是用来表示属性的）

包含：**访问修饰符，属性类型，属性名**

有四种访问修饰符 ：public,  protected , 默认 ,  private

属性的定义类型可以是基本类型或引用类型
属性如果不赋值，有默认值，规则和数组一致。具体说: int 0，short 0, byte 0, long 0, float 0.0,double 0.0，char \\u0000，
boolean false，String null

如何 创建对象：

1、先声明再创建。

2、直接创建。

### 类和对象的内存分配机制（重难点）

1）栈： 一般存放基本数据类型(局部变量) 
1）堆： 存放对象(Cat cat , 数组等) 
3）方法区：常量池(常量，比如字符串)， 类加载信息

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103219.png)


练习题：

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103249.png)


### 方法调用机制


方法使用细节：

一个方法最多返回一个结果，如果要多个值，可以返回数组。
返回类型可以为任意类型，包含基本类型或引用类型(数组，对象)

遵循驼峰命名法。

方法定义时的参数称为形参；方法调用时的参数成为实参，实参和形参的类型要一致或兼容，个数、顺序必须一致。
方法不能嵌套定义。

### 成员方法传参机制

基本数据类型的传参机制：
基本数据类型，传递的是值（值拷贝），形参的任何改变不影响实参

引用数据类型的传参机制：
引用类型传递的是地址（传递也是值，但是值是地址），可以通过形参影响实参

***pdf第214页 p=null 和 p=new Person() !


### 方法重载(overload)

#### 注意事项
1. 方法名：必须相同
2. 形参列表：必须不同（形参类型或个数或顺序，至少有一样不同，参数名无要求）
3. 返回类型：无要求

### 可变参数使用

```java
public class VarParameter01{
	public static void main(String[] args) {
		M m = new M();
		System.out.println(m.sum(1,2,3,4,5));
		int[] arr = {11,22,33};
		System.out.println(m.sum(arr));
	}
	
}

class M{

	public int sum(int... nums){
		int res = 0;
		for(int i = 0 ; i < nums.length ; i++){
			res += nums[i];
		}
		return res;
	}

}
```

1.  int... 表示接受的是可变参数，类型是int,可以接受0到多个
2. 使用可变参数，可以当作数组使用，nums可以当作数组，nums.length表示个数
3. 可变参数的实参可以为数组。
4. 可变参数可以和普通类型的参数一起放在形参，但必须保证可变参数在最后
5. 一个形参列表只能出现一个可变参数


### 作用域

**全局变量**
	  全局变量：也就是属性，作用域为整个类体
	（属性）可以不赋值，直接使用，因为有默认值。

**局部变量**
	局部变量一般是指在成员方法中定义的变量（当然还有其他情况），
	作用域为定义它的代码块。
	必须赋值，才能使用，因为没有默认值。

注：main方法内同理。

但是如果是new 一个int数组，数组中元素的默认值为0

**细节使用：**
>1. 属性和局部变量可以重名，访问时遵循就近原则。
>2. 同一个作用域，比如同一个成员方法内，两个局部变量不能重名。
>3. 属性生命周期较长。局部生命周期较短。
>4. 作用域范围不同：
	全局变量/属性：可以在其他类使用
	局部变量：只能在本类中对应的方法中使用。
>5. 修饰符不同：
	全局变量/属性可以加修饰符
	局部变量不可以加修饰符


### 构造器/构造方法

入门案例：
```java
public class Constructor01{

	public static void main(String[] args) {
		
		Person p = new Person("Tom",24);
		System.out.println(p.name);
		System.out.println(p.age);
	}
}

class Person{
	String name;
	int age;
	public Person(String pName , int pAge){
		name = pName;
		age = pAge;
		System.out.println("constructor is used..");
	}
}
```


#### 注意事项和使用细节

1、一个类可以定义多个不同的构造器，即构造器重载。

2、构造器没有返回值，也不能写void。

3、构造器的名称和类名一样。

4、构造器是完成对象的初始化，并不是创建对象。

5、在创建对象时，系统自动调用该类的构造方法。

6、如果没有定义构造器，系统会自动给类生成一个默认无参构造器（）也叫默认构造器
，比如 dog(){}，使用**javap指令**反编译看看。

7、一旦定义自己的构造器，默认的构造器就覆盖了。
除非显式的定义以下，即：dog(){}  （~~ 这点很重要）


#### javap的使用

javap时JDK提供的一个命令行工具，能对给定的class文件提供的字节代码进行反编译。

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103330.png)


### this

**this 的注意事项和使用细节：**

this 关键字可以用来访问本类的属性、方法、构造器
this 用于区分当前类的属性和局部变量
访问成员方法的语法：this.方法名(参数列表);
访问构造器语法：this(参数列表); 注意只能在构造器中使用(即只能在构造器中访问另外一个构造器, 必须放在第一 条语句)
		注意不能递归调用自身构造器
this 不能在类定义的外部使用，只能在类定义的方法中使用。

## 第八章

### 包的快速入门

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103353.png)


案例入门：
```java
package com.use;  
  
import com.xiaoming.Dog;  
  
public class Test {  
    public static void main(String[] args) {  
        Dog dog = new Dog();  
        System.out.println(dog);  
        com.xiaoqiang.Dog dog1 = new com.xiaoqiang.Dog();  
        System.out.println(dog1);  
    }  
}
```

### 包命名
一般是小写字母+小圆点
com.公司名.项目名.业务模块名

### 常用的包
```
java.lang. *  //基本包，不需要引入
java.util. *  //系统提供的工具包，使用Scanner
java.net. *   //网络包，网络开发
java.awt. *   //做java界面开发,GUI
```



### 包的使用
#### 注意事项
1、package的作用是声明当前类所在的包，需要放在类的上面。
	一个类中最多只有一句package
2、import指令 位置在package下面，在类定义的前面，可以有多句且没有顺序要求。



### 访问修饰符

java 提供四种访问控制修饰符号，用于控制方法和属性(成员变量)的访问权限（范围）:

1) 公开级别:用 public 修饰,对外公开

2) 受保护级别:用 protected 修饰,对子类和同一个包中的类公开

3) 默认级别:没有修饰符号,向同一个包的类公开. 

4) 私有级别:用 private 修饰,只有类本身可以访问,不对外公开

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103410.png)


注意哈，如果父子同一个包，那么子类可以访问到父类的public ,protected ,默认
如果父类和子类不同包，那么子类只能访问到public , protected

### 封装

封装和构造器结合

```java
package com.hspedu.encap;  
  
public class Encapsulation01 {  
    public static void main(String[] args) {  
        Person person = new Person();  
        person.name = "jack";  
        person.setAge(400);  
        person.setSalary(20000);  
        System.out.println(person.info());  
  
        Person smith = new Person("Smith123", 200, 30000);  
        System.out.println(smith.info());  
    }  
}  
  
class Person{  
    public String name;  
    private int age;  
    private double salary;  
  
    public Person() {  
    }  
  
    public Person(String name, int age, double salary) {  
        setName(name);  
        setAge(age);  
        setSalary(salary);  
//        this.name = name;  
//        this.age = age;  
//        this.salary = salary;  
    }  
  
    public String getName() {  
        return name;  
    }  
  
    public void setName(String name) {  
        if(name.length()>=2 && name.length()<=6){  
            this.name = name;  
        }else{  
            System.out.println("名字长度須在2到6之间");  
            this.name = "无名氏";  
        }  
  
    }  
  
    public int getAge() {  
        return age;  
    }  
  
    public void setAge(int age) {  
        if(age>=1&&age<=120){  
            this.age = age;  
        }else{  
            System.out.println("年龄须在1到120之间");  
            this.age = 18;  
        }  
  
    }  
  
    public double getSalary() {  
        return salary;  
    }  
  
    public void setSalary(double salary) {  
        this.salary = salary;  
    }  
    public String info(){  
        return "姓名:"+this.name+" 年龄:"+this.age+" 薪资:"+this.salary;  
    }  
}
```



### 继承
基本语法

class 子类 extends 父类{
}

1. 子类会自动拥有父类定义的属性和方法
2. 父类又叫超类，基类
3. 子类又叫派生类

在父类中定义相同的属性和方法

#### 细节问题

1、子类继承了所有的属性和方法，非私有的属性和方法可以在子类中之间访问，但是私有属性和方法不能在子类直接访问，要通过父类提供的公共方法去访问

2、子类必须调用父类的构造器，完成父类初始化

3、当创建子类对象时，不管使用子类的哪个构造器，默认总会去调用父类的无参构造器，如果父类没有提供无参构造器，则必须在子类的构造器中用super去指定使用父类的哪个构造器完成对父类的初始化，否则，编译不会通过。

4、如果希望指定去调用父类的某个构造器，则显式的调用一下：super(参数列表)

5、super在使用时，必须放在构造器第一行
（super只能在构造器）

6、super()和this()都只能放在构造器第一行，因此两个方法不能共存在一个构造器

7、java所有类都是object的子类

8、父类构造器的调用不限于直接父类，将一直往上追溯直到Object类（顶级父类）

9、子类最多只能继承一个父类（指直接继承），即java是单继承机制。

10、不能滥用继承，子类和父类之间必须满足 is - a 的逻辑关系



#### 方法重写/覆盖 (override)

子类方法的返回类型和父类方法返回类型一样，
或者是父类返回类型的子类

子类方法不能缩小父类方法的访问权限

对方法的重写和重载做一个比较
### 多态

#### 方法的多态
重写和重载就体现多态

#### 对象的多态

（1）一个对象的编译类型和运行类型可以不一致
（2）编译类型在定义对象时，就确定了，不能改变
（3）运行类型是可以变化的
（4）编译类型看定义时 = 号 的左边，运行类型看 = 号 的右边


多态的前提是：两个对象(类)存在继承关系
#### 多态向上转型

向上转型：父类的引用指向了子类的对象

语法：父类类型引用名 = new 子类类型（）

+ 可以调用父类中的所有成员（需遵守访问权限）
+ ==但是不能调用子类的特有的成员
+ 因为在编译阶段，能调用哪些成员，是有**编译类型**来决定的
+ 最终运行效果看子类的具体实现，即==调用方法时，按照从子类开始查找方法

#### 多态的向下转型

语法：子类类型 引用名 = （子类类型）父类引用

- 只能强转父类的引用，不能强转父类的对象
- 要求父类的引用必须指向的是当前目标类型的对象
- 当向下转型后，可以调用子类类型中所有的成员

示例：
```java
package com.hspedu.poly.polyDetail;  
public class poly02 {  
    public static void main(String[] args) {  
        Animal animal = new Cat();  
        animal.eat();  
        animal.run();  
        animal.sleep();  
        //animal不能调用子类Cat类的专有方法：catchMouse()  
        //强转为Cat类后可以调用  
        //1.((Cat)animal).catchMouse();  
        //2.        Cat cat = (Cat)animal;  
        cat.catchMouse();  
    }  
}
```


#### 属性重写类型?

+ 属性没有重写之说！==属性的值看编译类型。
+ 
+ instanceOf比较操作符，用于==判断对象的运行类型==是否为XX类型或 XX类型的子类型。

```java
package com.hspedu.poly.polyDetail02;  
  
public class poly03 {  
    public static void main(String[] args) {  
        AA aa = new BB();  
        System.out.println(aa.num+" "+aa.val);//aa.num和bb.num不同  
        BB bb = new BB();  
        System.out.println(bb.num+" "+bb.val+" "+bb.count);  
  
        System.out.println(bb instanceof AA);  
        System.out.println(bb instanceof BB);  
        System.out.println(aa instanceof BB);  
        System.out.println(aa instanceof AA);  
		String str = "asd";  
		System.out.println(str instanceof Object);
    }  
}  
  
class AA{  
    int num = 10;  
    int val = 100;  
}  
class BB extends AA{  
    int num = 20;  
    int count = 200;  
}
输出：
10 100
20 100 200
true
true
true
true
true
```

多态练习题：

注意：
*int不能直接强转为bool类型。

boolean 类型不能转化为 其他类型  
其他类型 也不能转化为 boolean 类型

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103456.png)

注意：
==属性看编译类型 ，方法看运行类型
（属性不能重写）


#### java动态绑定机制（重要）

1. 当调用对象方法的时候，该方法会和该对象的内存地址/运行类型绑定
2. 当调用对象属性时，没有动态绑定机制，哪里声明，哪里使用

#### 多态的应用

##### 多态数组

定义一个数组，该数组类型为person,又细分为子类Teacher和Student.

Teacher和Student都有自带的方法，teach()和study(),但是需要用instanceof来判断数组元素类型，之后再强转，才能调用独有的方法。

```java
package com.hspedu.poly.polyArray;  
  
public class poly04 {  
    public static void main(String[] args) {  
        Person[] persons = new Person[5];  
        //向上转型
        persons[0] = new Person("as",19);  
        persons[1] = new Student("lik",19,80);  
        persons[2] = new Student("pet",19,90);  
        persons[3] = new Teacher("Jk",29,8000);  
        persons[4] = new Teacher("Ty",39,9000);  
        for (int i = 0; i < persons.length; i++) {  
            System.out.println(persons[i].say());  
            if(persons[i] instanceof Student){  
	            //向下转型
                ((Student)persons[i]).study();  
            }  
            if(persons[i] instanceof Teacher){  
                ((Teacher)persons[i]).teach();  
            }  
        }  
    }  
}
```


##### 多态参数


```JAVA
package com.hspedu.poly.polyParameter;  
  
public class PolyParameter {  
    public static void main(String[] args) {  
        Worker tmom = new Worker("tmom", 3000);  
        Manager mil = new Manager("mil", 7000, 2000);  
        //tmom.getAnnual();  
        PolyParameter polyParameter = new PolyParameter();  
        polyParameter.showAnnual(tmom);  
        polyParameter.showAnnual(mil);  
        polyParameter.test(tmom);
        polyParameter.test(mil);
    }  
    public void showAnnual(Employee e){  
        System.out.println(e.getAnnual());  
    }  
    public void test(Employee e){  
        if(e instanceof Worker){  
            ((Worker) e).work();//向下转型  
        }  
        if(e instanceof Manager){  
            ((Manager) e).manage();  
        }  
    }  
}
```

==这个 instanceof　的运用最关键。
对于不同的子类，要调用其特有的方法，需要先判断一番。==

### 等号与equals方法
== 与 equals的对比

 == 是一个比较运算符
1. 就可以判断基本类型，也可以判断引用类型
2. 如果判断基本类型，判断的是值是否相等
3. 判断引用类型，判断的是地址是否相等，即判定是不是同一个对象

equals方法
1. Object的equals方法默认就是比较引用类型。
2. 默认判断地址是否相等，子类中往往重写该方法，用于判断内容是否相等。
比如Interger , String

```java
int c = 10;  
int d = 10;  
System.out.println(c == d);//true  
Integer e = new Integer(20);  
Integer f = new Integer(20);  
System.out.println(e == f);//false  
System.out.println(e.equals(f));//true  
String s1 = new String("abc");  
String s2 = new String("abc");  
System.out.println(s1 == s2);//false  
System.out.println(s1.equals(s2));//true
```


### hashCode方法

>返回该对象的哈希码值，支持此方法是为了提高哈希表的性能

6个结论：
1. 提高具有哈希结构的容器的效率
2. 两个引用，如果指向的是同一个对象，则哈希值是一样的。
3. 两个引用，如果指向的是不同对象，则哈希值是不一样的
4. 哈希值主要根据地址来确定，不能将哈希值完全等价于地址
5. 在集合中hashCode会重写

### toString方法

> 默认返回：全类名+@+哈希值的十六进制

```java
public String toString() {  
    return getClass().getName() + "@" + Integer.toHexString(hashCode());  
}
```

>getClass().getName()  类的全类名（包名+类名）
>Integer.toHexString(hashCode())将对象的hashCode值转成16进制字符串

子类往往重写toString方法，用于返回对象的属性信息

当直接输出一个对象时，toString方法会被默认的调用。

### finalize方法

1. 当对象被回收时，系统自动调用该对象的finalize方法。子类可以重写该方法。

3. 垃圾回收机制的调用，是由系统来决定的（有自己的GC算法），
4. 也可以通过System.gc()主动调用



## 第九章 房屋出租项目

分层模式：界面层，业务层，数据层


## 第十章

### 类变量

#### 类变量内存位置

在jdk8以前 ， 在方法区

jdk8以后，在堆里，类对应的class对象的尾部

关键：：被同一个类所有对象共享，在类加载的时候生成

#### 类变量使用细节

加上static称为类变量或静态变量，否则为实例变量/普通变量/非静态变量。

静态变量是类加载的时候，就创建了,所以我们没有创建对象实例，也可以通过类名.类变量名来访问


### 类方法
类方法只能访问静态变量或静态方法。

#### 类方法使用细节
类方法中无this的参数和super
类方法可以通过类名或对象名调用（需要遵守权限）

普通成员方法，既可以访问非静态成员，可以访问静态成员。

### main方法说明

#### 语法说明
1. main方法是java虚拟机调用的
2. java虚拟机调用类的main()方法，所以该方法访问权限为public
3. java虚拟机在执行main()方法时不必创建对象，所以该方法必须是static
4. 该方法接收String类型的数组参数，该数组中保存执行java命令时传递给所运行的类的参数。
5. java 执行的程序 参数1 参数2 参数3
#### 特别提示
1. 在main方法中，可以直接调用main方法所在类的静态方法或静态属性。
2. 不能直接访问该类中的非静态成员，必须创建该类的一个实例对象，间接访问非静态成员。

#### main动态传值

找到idea的参数设置

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103629.png)


```java
public static void main(String[] args) {  
//        say();  
        hi();  
        new Main01().say();  
        for (int i=0 ;i< args.length;i++){  
            System.out.println(args[i]);  
        }  
    }
```


### 代码块(难点)

#### 快速入门

基本语法:

	[修饰符]{
		代码
	};
说明注意：
（1）修饰符可以写static，也可以不写。

（2）使用static修饰，静态代码块；不使用static，普通代码块/非静态代码块。

理解：
（1）对构造器的补充机制，可以做初始化操作。
（2）场景：如果多个构造器中都有重复的语句，可以抽取到初始化块中，提高代码的重用性。
（3）代码块调用的顺序优先于构造器。（即使代码块写在后面）

#### 使用细节
1. static代码块也叫静态代码块，作用是对类进行初始化，而且它随着「类的加载」而执行，而且**只会执行一次**。如果是普通代码块，每创建一个对象，就执行。

2. 类什么时候被加载「重要！」
	+ 创建对象实例时（new）
	+ 创建子类对象实例，父类也会被加载（而且父类先被加载）
	+ 使用类的静态成员时（静态属性，静态方法）

3.  普通的代码块，在创建对象实例时，会被隐式的调用。被创建一次，就会被调用一次。
	如果只是使用类的静态成员时，普通代码块并不会执行。

4. 创建一个对象时，在一个类的调用顺序是：（重点，难点）
	+ 1. 调用静态代码块和静态属性初始化 
	+ 2. 调用普通代码块和普通属性的初始化
	+ 3. 调用构造器

5. 构造器的最前面其实隐含了super()和调用普通代码块，

6. 创建一个子类对象时（有继承关系），他们的静态代码块，静态属性初始化，普通代码块，普通属性初始化，构造方法的调用属于如下
	:

	1. 父类的静态代码块和静态属性（优先级一样，按定义顺序执行）
	2. 子类的静态代码块和静态属性（优先级一样，按定义顺序执行）
	3. 父类的普通代码块和普通属性初始化（优先级样，按定义顺序执行）
	4. 父类的构造方法
	5. 子类的普通代码块和普通属性初始化（优先一级一样，按定义顺序执行）
	6. 子类的构造方法

```java
public class demo {  
    static int n = 10;  
    public static void main(String[] args) {  
        Child child = new Child();  
  
    }  
}  
  
class Person{  
    static{  
        System.out.println("Person类的static构造器");  
    }  
    {  
        System.out.println("Person类普通代码块");  
    }  
    public Person(){  
        System.out.println("person构造器");  
    }  
}  
class Child extends Person{  
    static {  
        System.out.println("Child类的static构造器");  
    }  
    {  
        System.out.println("普通代码块1");  
    }  
    public Child(){  
        System.out.println("child构造器....");  
    }  
}
/*
Person类的static构造器
Child类的static构造器
Person类普通代码块
person构造器
普通代码块1
child构造器....
*/
```

7. 静态代码块只能调用静态成员（静态属性和静态方法），普通代码块可以调用任意成员


### 单例设计模式

什么是设计模式？
1. 静态方法和属性的经典使用。
2. 在大量的实践中总结和理论化之后优选的代码结构、编程风格、以及解决问题的思考方式。


什么是单例模式？
单例(单个的实例) 
>1. 所谓类的单例设计模式,就是采取一定的方法保证在整个的软件系统中,对某 个类只能存在一个对象实例,并且该类只提供一个取得其对象实例的方法 
>2. 单例模式有两种方式 : 1) 饿汉式 2)懒汉式

#### 单例模式饿汉式
步骤：
1. 将构造器私有化 => 防止直接new
2. 在类的内部直接创建对象（该对象是static）
3. 提供一个公共的static方法，返回实例对象。

（在你还没用到实例的时候，只是类加载的时候就已经创建好实例对象了）

```java
class SingleTon01{
	private SingleTon01(){}
	private Static SingleTon01 instance = new SingleTon01();
	public static SingleTon01 getInstance(){
		return instance;
	}
}
```

#### 单例模式懒汉式
```java
class SingleTon02{
	private SingleTon02(){}
	private Static SingleTon02 instance;
	public static SingleTon02 getInstance(){
		if(instance == null){
			instance = new SingleTon02();
		}
		return instance;
	}
	
}
```

#### ● 饿汉式VS懒汉式 
1. 二者最主要的区别在于创建对象的时机不同 : 饿汉式是在类加载就创建了对象实例, 而懒汉式是在使用时才创建。 
2. 饿汉式不存在线程安全问题,懒汉式存在线程安全问题。(后面学习线程后,会完善 一把) 
3. 饿汉式存在浪费资源的可能。因为如果程序员一个对象实例都没有使用,那么饿汉 式创建的对象就浪费了,懒汉式是使用时才创建,就不存在这个问题。 
4. 在我们javaSE标准类中,java.lang.Runtime就是经典的单例模式。

### final

#### 基本使用
final 可以修饰类、属性、方法和局部变量. 
在某些情况下,程序员可能有以下需求,就会使用到final : 
1) 当不希望类被继承时,可以用final修饰. 【案例演示】 
2) 当不希望父类的某个方法被子类覆盖/重写(override)时,可以用final关键字 修饰。 Base Sub 类 【案例演示 : 访问修饰符 final 返回类型 方法名】 
3) 当不希望类的的某个属性的值被修改,可以用final修饰. 【案例演示 : public final double TAX RATE=0.08】 
4) 当不希望某个局部变量被修改,可以使用final修饰【案例演示 : final double TAX RATE=0.08】


#### 使用细节
1) final修饰的属性又叫常量,一般用XX_XX_XX 来命名 
2) final修饰的属性定义时,必须赋初值,并且以后不能再修改,赋值可以在如 下位置之一【选择一个位置赋初值即可】 :  
	1. 定义时 : 如 public final double TAX_RATE=0.08;
	2. 在构造器中
	3. 在代码块中
3) 如果final修饰的属性时静态的，则初始化的位置是只能是
	1. 定义时
	2. 在静态代码块中。 不能在构造器中赋值（构造器没有static修饰）
4) final类不能继承,但是可以实例化对象。
5) 如果类不是final类,但是含有final方法,则该方法虽然不能重写,但是可 以被继承。

6) 一般来说，如果一个类已经是final类了，就没有必要再将方法修饰为final方法。
7) ==final不能修饰构造器==
8) final和static往往搭配使用，效率更高 ，如果使用一个final staitc属性不会导致类的加载 ,底层编译器做了优化处理。

```java
class Demo{
	public final static int i=16;
	static{
		System.out.println("static代码块");
	}
}
在调用Demo类的i属性时，就不会执行static代码块了。。。
```

9) 包装类Integer , Double , Float , Boolean等都是final类，String也是final类
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103715.png)


*注意：final可以修饰形参。



### 抽象类

当父类的一些方法不能确定时,可以用abstract关键字来修饰该方法,这个方法 就是抽象方法,用abstract 来修饰该类就是抽象类。

#### 使用细节
1) 抽象类不能被实例化 
2) 抽象类不一定要包含abstract方法。也就是说,抽象类可以没有abstract方法
3) 一旦类包含了abstract方法,则这个类必须声明为abstract 
4) abstract 只能修饰类和方法,不能修饰属性和其它的。

5) 抽象类可以有任意成员【抽象类本质还是类】,比如 : 非抽象方法、构造器、静态属性等等
6) 抽象方法不能有主体,即不能实现.
7) ==如果一个类继承了抽象类,则它必须实现抽象类的所有抽象方法,除非它自己也声明为 abstract类。

![[Pasted image 20221002191711.png]]

8) 抽象方法不能使用**private、final 和 static**来修饰,因为==这些关键字都是和重写相违背的==。

#### 抽象模板模式

```java
abstract public class Template { //抽象类-模板设计模式

	public abstract void job();//抽象方法
	
	public void calculateTime() {//实现方法，调用 job 方法
		//得到开始的时间
		long start = System.currentTimeMillis();
		job(); //动态绑定机制
		//得的结束的时间
		long end = System.currentTimeMillis(); System.out.println("任务执行时间 " + (end - start)); 
	} 
}

/*
AA和BB 各自重写了job 方法
*/

public class TestTemplate { 
	public static void main(String[] args) {
		AA aa = new AA(); aa.calculateTime(); //这里还是需要有良好的 OOP 基础，对多态
		BB bb = new BB(); bb.calculateTime(); 
	} 
}
```

### 接口

#### 接口介绍

感觉跟向上转型有点像

```
interface 接口名{
		//属性
		//方法(1、抽象方法。2、默认实现方法 3、静态方法)
	}
class 类名 implements 接口{
	自己属性；
	自己方法；
	必须实现的接口的抽象方法
}
```

1、在jdk7.0接口里的所有方法都没有方法体，都是抽象方法
2、jdk8.0后接口可以有静态方法，默认方法，即接口中可以有方法的具体实现
```java
package com.hspedu.interface_.Interface02;  
  
public interface AInterface {  
    public int n1= 10;  
    //在接口中，抽象方法可以省略abstract关键字  
    public void start();  
    //default修饰的默认实现  
    public default void hi(){  
        System.out.println("hi()...");  
    }  
    //static 修饰的静态方法  
    public static void say(){  
        System.out.println("say()...");  
    }  
}
```


#### 接口细节与注意事项
1. 接口不能被实例化
2. 接口中所有的方法是Public方法，接口中抽象方法，可以不用abstract修饰
```
void aa()
实际上是abstract void aa();
```
3. 一个普通类实现接口，就必须将该接口的所有方法都实现，可以用alt+enter来解决
4. **抽象类**去实现接口时，可以不实现接口的抽象方法。
5. 一个类同时可以实现多个接口
6. 接口中的属性只能是**final** 的,而且是 `public static final`修饰符。比如：
`int a= 1`
实际上是`public static final int a= 1;`
7. 接口中属性的访问形式：接口名.属性名
8. 一个接口不能继承其他的类，但是可以继承多个别的接口。
`interface A extends B,C{}`
9. 接口的修饰符只能是**public和默认**，**这点和类的修饰符是一样的。**

#### 接口的多态特性

1 多态参数
2 多态数组
3 接口存在多态传递现象 

```java
/** * 演示多态传递现象

*/ 
public class InterfacePolyPass { 
	public static void main(String[] args) { //接口类型的变量可以指向，实现了该接口的类的对象实例
	IG ig = new Teacher(); //如果 IG 继承了 IH 接口，而 Teacher 类实现了 IG 接口
	//那么，实际上就相当于 Teacher 类也实现了 IH 接口. 
	//这就是所谓的 接口多态传递现象. 
	IH ih = new Teacher(); 
	} 
} 
interface IH { 
	void hi(); 
} 
interface IG extends IH{ } 
class Teacher implements IG {
	@Override public void hi() { } 
}

```


### 内部类

**类的五大成员：
属性、方法、构造器、代码块、内部类**

基本介绍：
一个类的内部又完整的嵌套了另一个类结构。

基本语法：
```java
class Outer{//外部类
	class Inner{//内部类
	}
}
class Other{//外部其他类

}
```

内部类最大特点是可以直接访问私有属性。

***

#### 内部类的分类

**定义在外部类局部位置上（比如方法内）：**
1) 局部内部类(有类名)
2) 匿名内部类(没有类名，重点!!!!!)

**定义在外部类的成员位置上：**
1) 成员内部类
2) 静态内部类


#### 局部内部类
说明 : 局部内部类是定义在外部类的局部位置,比如方法中,并且有类名。 
1. 可以直接访问外部类的所有成员,包含私有的 
2. 不能添加访问修饰符,因为它的地位就是一个局部变量。==局部变量是不能使用访问修饰符的==。但是可以使用final 修饰,因为==局部变量也可以使用final ==
3. 作用域 : 仅仅在定义它的方法或代码块中。 
4. 局部内部类---访问---->外部类的成员 [ 访问方式 : 直接访问 ] 
5. 外部类---访问---->局部内部类的成员 [访问方式 : 创建对象,再访问(注意 : 必须在作用域内)]

记住：（1）局部内部类定义在方法中/代码块
（2）作用域在方法体或代码块中
（3）本质仍然是一个类

6. 外部其他类---不能访问----->局部内部类(因为局部内部类地位是一个局部变量) 
7. 如果外部类和局部内部类的成员重名时，默认遵循**就近原则**,如果想访问外部类的成员，则可以使用 (**外部类名.this.成员**)去访问 

`System.out.println("外部类的n2=" + 外部类名.this.n2);


#### 匿名内部类
//(1) 本质是类(2) 内部类(3) 该类没有名字 (4)同时还是一个对象 

说明 :
匿名内部类是定义在外部类的局部位置，比如方法中，并且没有类名 
1. 匿名内部类的基本语法 

		new 类或接口(参数列表){
			 类体 
		 };

getClass() : 获取运行类型

基于接口 的 匿名内部类
基于类 的 匿名内部类
基于抽象类 的 匿名内部类 

使用细节：
如果外部类和匿名内部类的成员重名，匿名内部类访问的话默认遵循就近原则，如果想访问外部类的成员，则可以使用（**外部类名.this.成员**）去访问

外部类名.this 是什么 ：就是调用该方法的对象
可以根据输出其hashcode值 进行验证，如下：
```java

public class AnonymousInnerClassDetail {
	public static void main(String[] args) { 
		Outer05 outer05 = new Outer05();
		outer05.f1(); 
		//外部其他类---不能访问----->匿名内部类
		System.out.println("main outer05 hashcode=" + outer05); 
	} 
}
class Outer05 { 
	private int n1 = 99;
	public void f1() { //创建一个基于类的匿名内部类
		//不能添加访问修饰符,因为它的地位就是一个局部变量
		//作用域 : 仅仅在定义它的方法或代码块中
		Person p = new Person(){ 
			private int n1 = 88; 
			@Override 
			public void hi() {
			//可以直接访问外部类的所有成员，包含私有的
			//如果外部类和匿名内部类的成员重名时，匿名内部类访问的话，
			//默认遵循就近原则，如果想访问外部类的成员，则可以使用 （外部类名.this.成员）去访问
				System.out.println("匿名内部类重写了 hi 方法 n1=" + n1 + " 外部内的 n1=" + Outer05.this.n1 ); 
			//Outer05.this 就是调用 f1 的 对象
				System.out.println("Outer05.this hashcode=" + Outer05.this);
			} 
		}; 
		p.hi();
		//动态绑定, 运行类型是 Outer05$1 //也可以直接调用, 匿名内部类本身也是返回对象
	} 
}
```


匿名内部类的好处：
	当作实参传递，简洁高效
```java
public class demo {  
    public static void main(String[] args) {  
        Car car = new Car();  
        car.say(new A(){  
            @Override  
            public void ring() {  
                System.out.println("响铃。。。");  
            }  
        });  
    }  
}  
  
interface A{  
    void ring();  
}  
class Car{  
    public void say(A a){  
        a.ring();  
    }   
}
```
匿名内部 涉及到知识点：继承，多态，动态绑定，内部类


#### 成员内部类

定义在外部的成员位置，不能加static,
可以加任意访问修饰符
作用域：为整个类体

#### 静态内部类
放在外部类的成员位置，static修饰
可以直接访问外部的静态成员，
作用域：为整个类体

访问外部的静态成员 ：（==外部类名.成员==）


## 第十一章 枚举和注解

### 枚举
枚举是一种特殊的类，里面只包含一组有限的特定的对象

#### 自定义枚举类
1. 将构造器私有化，防止直接new
2. 去掉set方法，防止属性被修改，只保留get
3. 在内部，直接创建固定的对象
4. 对外暴露对象（通过为对象添加 public final static 修饰符）
#### enum关键字
使用enum来实现枚举类
1. 使用关键字 enum 替代 class
2. 常数名（实参列表）
3. 如果有多个常量（对象），使用逗号间隔
4. 如果使用enum ，要求将定义常量对象写在最前面

5. 如果使用 无参构造器 创建枚举对象，则实参列表和小括号都可以省略

```java
public static final Season SPRING = new Season("春天", "温暖") 
直接使用
SPRING("春天", "温暖")
```

课堂练习：

![](../pictures/Pasted%20image%2020230804145347.png)

#### Enum方法
使用enum 关键字时，会隐式的继承Enum类，这样我们就可以使用Enum类相关的方法

toString( )
name( )
ordinal( )
values( )  返回当前枚举类中所有的常量
valueOf( )
compareTo( )  枚举对象的编号的比较


增强的for循环
![](../pictures/Pasted%20image%2020230804163540.png)


#### Enum接口细节

enum类不能再继承其他类，因为它会隐式继承Enum，而Java是单继承机制。
枚举类和普通类一样，可以实现接口：
	enum 类目 implements 接口1，接口2{ }

### 注解
注解 Annotation 也被称为元数据 Metadata

@Override
![](../pictures/Pasted%20image%2020230804173431.png)


@Deprecated
表示已废弃，
可以做版本过度
```java
@Documented  
@Retention(RetentionPolicy.RUNTIME)  
@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})  
public @interface Deprecated {  
}
```

@SuppressWarings
抑制警告信息
```java
public class demo01 {  
    @SuppressWarnings({"unchecked","rawtypes","unused"})  
    public static void main(String[] args) {  
        List lst = new ArrayList();  
        lst.add("asd");  
        lst.add("bnm");  
        System.out.println(lst.get(0));  
    }  
}
```


元注解


## 第十二章

### 异常

选中代码块，ctrl + alt + t 后选择try - catch

#### 基本概念 
Java语言中,将程序执行中发生的不正常情况称为“异常”。(开发过程中的语法 错误和逻辑错误不是异常) 
● 执行过程中所发生的异常事件可分为两大类 
1) Error(错误) : Java虚拟机无法解决的严重问题。
	如 : JVM系统内部错误、资源 耗尽等严重情况。比如 : StackOverflowError[栈溢出]和OOM(out of memory),Error 是严重错误,程序会崩溃。
	
2) Exception : 其它因编程错误或偶然的外在因素导致的一般性问题,可以使用针对性的代码进行处理。
	例如空指针访问,试图读取不存在的文件,网络连接中断等等,Exception 分为两大类 : ==运行时异常==[程序运行时，发生的异常]和==编译时异常==[编译时，编译器检查出的异常]。


#### 异常体系图

1. 异常分为两大类,运行时异常和编译时异常. 
2. 运行时异常,编译器检查不出来。一般是指编程时的逻辑错误,是程序员应该 避免其出现的异常。java.lang.RuntimeException类及它的子类都是运行时 异常 
3. **对于运行时异常,可以不作处理**,因为这类异常很普遍,若全处理可能会对程 序的可读性和运行效率产生影响 
4. **编译时异常,是编译器要求必须处置的异常**。

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103821.png)


#### 常见的运行时异常

1）NullPointerException 空指针异常

2）ArithmeticException 数学运算异常

3）ArrayIndexOutOfBoundsException 数组下标越界异常

4）ClassCastException 类型转换异常
```
A b = new B();//向上转型
B b2 = (B)b;//向下转型
C c2 = (C)b;//抛出异常
class A(){}
class B extends A(){}
class C extends A(){}
```

5）NumberFormatException 数字格式不正确异常


#### 编译异常
SQLException //操作数据库时,查询表可能发生异常 
IOException //操作文件时,发生的异常 
FileNotFoundException //当操作一个不存在的文件时,发生异常 ClassNotFoundException //加载类,而该类不存在时,异常
EOFException // 操作文件,到文件末尾,发生异常 IllegalArguementException //参数异常

#### 异常处理

● 异常处理的方式
1) try-cach-finally 程序员在代码中捕获发生的异常,自行处理 
2) throws 将发生的异常抛出,交给调用者(方法)来处理,最顶级的处理者就是JVM
```java
try{
	代码/可能有异常
}catch(Exception e){
	//捕获到异常
	1、当异常发生时
	2、系统将异常封装成Exception对象 e,传递给catch
	3、得到异常对象后，程序员自己处理
	4、注意，如果没有发生异常catch代码块不执行
}finally{
	1、不管try代码块是否异常都要执行
	2、通常将释放资源的代码，放在finally
}
```

#### try - catch
1) 如果异常发生了,则异常发生后面的代码不会执行,直接进入到catch块. 
2) 如果异常没有发生,则顺序执行try的代码块,不会进入到catch. 
3) 如果希望不管是否发生异常,都执行某段代码(比如关闭连接,释放资源等) 则使用如下代码- finally { }


如果try代码块有多个异常，
可以使用多个catch分别捕获，相应处理
要求子类异常写在前面，父类异常写在后面

```java
try {  
	int n1 = 10;  
	int n2 = 0;  
	System.out.println(n1/n2);  
	Person person = new Person();  
	person = null;  
	System.out.println(person.getName());  

} catch (ArithmeticException e){  
	System.out.println(e.getMessage());  
}catch (NullPointerException e) {  
//            e.printStackTrace();  
	System.out.println(e.getMessage());  
}  
System.out.println("123");
```


try - finally 
	相当于没有捕获异常，因此程序会直接崩掉。
不会指向finally之后的程序
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103902.png)

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103915.png)


#### throws

##### ● 基本介绍 
1) 如果一个方法(中的语句执行时)可能生成某种异常,但是并不能确定如何 处理这种异常,则此方法应显示地声明抛出异常,表明该方法将不对这些 异常进行处理,而由该方法的调用者负责处理。 
2) 在方法声明中用throws语句可以声明抛出异常的列表,throws后面的异常类型可以是方法中产生的异常类型,也可以是它的父类。


#####  ● 使用细节
1) 对于==编译异常,程序中必须处理==,比如 try-catch 或者 throws 
2) 对于==运行时异常==,程序中如果没有处理,==默认是throws的方式==处理
3) 子类重写父类的方法时,对抛出异常的规定 : ==子类重写的方法==,所抛出的异常类型要么和父类抛出的异常==一致==,要么为父类抛出的异常的类型的==子类型==
4) 在throws 过程中,如果有方法 try-catch,就相当于处理异常,就可以不必 throws


#### 自定义异常
● 自定义异常的步骤 
1) 定义类 : 自定义异常类名(程序员自己写) 继承Exception或RuntimeException 
2) 如果继承Exception,属于编译异常 
3) 如果继承RuntimeException,属于运行异常(一般来说,继承RuntimeException)


```java
package com.hspedu.customexception;  
  
public class CustomException01 {  
    public static void main(String[] args) {  
        int age = 10;  
        if(!(age>=18&&age<=60)){  
            //这里我们可以通过构造器，设置信息  
            throw new AgeException("年龄不合适");  
        }  
        System.out.println("年龄正确");  
    }  
}  
//自定义一个异常  
//1、一般情况，自定义异常是继承RuntimeException  
//2、好处是我们可以使用默认的处理机制  
class AgeException extends RuntimeException{  
    public AgeException(String message) {  
        super(message);  
    }  
}
//如果是继承Exception，那么在main方法还要throws Excetion
```

,

**测试题**

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131103932.png)


注意：第三句"制造异常"是在catch部分里面输出的。是在methodA()的finally之后执行


throws 异常处理的一种方式，在方法声明处 ，后面跟异常类型
throw 手动生成异常对象的关键字，在方法体中，后面跟异常对象


练习题：
1. 编程题 Homeworko1.java 
a) 编写应用程序EcmDefjava,接收命令行的两个参数(整数),计算两数相除。 ·
b) 计算两个数相除,要求使用方法 cal(int n1, int n2) 
c) 对数据格式不正确、缺少命令行参数、除0进行异常处理。

分别对应 NumberFormatException，ArrayIndexOutOfBoundsException，ArithmeticException
```java
package com.hspedu.exception_exercise;  
  
public class Exercise01 {  
    public static void main(String[] args) {  
  
        try {  
            if(args.length!=2){  
                throw new ArrayIndexOutOfBoundsException("参数个数不对哦");  
            }  
            int n1 = Integer.parseInt(args[0]);  
            int n2 = Integer.parseInt(args[1]);  
            double res = cal(n1,n2);  
            System.out.println("计算结果="+res);  
        } catch (ArrayIndexOutOfBoundsException e) {  
            e.printStackTrace();  
        } catch (NumberFormatException e){  
            System.out.println("参数格式不正确噢，需要整数");  
        } catch (ArithmeticException e){  
            System.out.println("出现了除以0的异常");  
        }  
  
    }  
  
    public static double cal(int n1,int n2){  
        return n1/n2;  
    }  
}
```

细节问题：如果cal方法里面是double类型的形参，那么最终“出现除以0的异常”会变成“计算结果=infinity”
原因是：
java的double支持这两个值，那么除以0在double中就不是异常:
	**0d / 0d 结果为 NaN 非0 / 0d 结果为 Infinity** (可能为 Infinity 或 -Infinity)

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131104002.png)

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131104016.png)


注意：try部分如果抛出异常，则try中后面的代码不执行

![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131104038.png)

## 第十三章 常用类

### 包装类
针对八种基本数据类型相应的引用类型—包装类

Serializable  序列化
Comparable  可排序

手动装箱：int  ->Integer
Integer integer = new Integer(n1);
Integer integer2 = Integer.valueOf(n1);

手动拆箱：Integer ->int
int i  = integer.intValue();

jdk5后，
自动装箱：int->Integer
Integer  integer2 = n2;   //底层使用的是 Integer.valueOf(n2)
自动拆箱：Integer->int
int n3 = integer2;  //底层仍然使用的是 intValue()方法


```java
public static void main(String[] args) {  
    Object obj1 = true?new Integer(1):new Double(2.0);  
    System.out.println(obj1);  
    // 1.0
}
```
1、三目运算符只能使用基本数据类型，所以编译自动拆箱为int、double
2、三目运算符要求数据类型一致，所以编译int自动提升为double
3、装箱成Double
4、多态：父类的对象，指向子类的引用，即Object类型的对象obj1指向Double对象的引用，Double重写了Object的toString()方法，调用了Double重写后的toString()方法

#### 包装类型和 String 类型的相互转换

以 Integer 和 String 转换为例，其它类似
```java
//包装类(Integer)->String 
Integer i = 100;//自动装箱
//方式 1 
String str1 = i + ""; 
//方式 2 
String str2 = i.toString(); 
//方式 3 
String str3 = String.valueOf(i);

//String -> 包装类(Integer) 
String str4 = "12345"; 
Integer i2 = Integer.parseInt(str4);//使用到自动装箱
Integer i3 = new Integer(str4);//构造器
```

#### Integer 类和 Character 类的常用方法
```java
System.out.println(Integer.MIN_VALUE); //返回最小值
System.out.println(Integer.MAX_VALUE);//返回最大值
System.out.println(Character.isDigit('a'));//判断是不是数字
System.out.println(Character.isLetter('a'));//判断是不是字母
System.out.println(Character.isUpperCase('a'));//判断是不是大写
System.out.println(Character.isLowerCase('a'));//判断是不是小写
System.out.println(Character.isWhitespace('a'));//判断是不是空格
System.out.println(Character.toUpperCase('a'));//转成大写
System.out.println(Character.toLowerCase('A'));//转成小写
```


#### Integer类面试题

注意 Integer.valueOf 的源码：
low = -128 , 
high = 127,
如果在 范围中直接返回，否则new Integer()
```java
public static Integer valueOf(int i) {  
    if (i >= IntegerCache.low && i <= IntegerCache.high)  
        return IntegerCache.cache[i + (-IntegerCache.low)];  
    return new Integer(i);  
}
```

因此：
```java
Integer m = 1;
Integer n = 1;
System.out.println(m==n) // true
```



### String类

字符串的字符使用 Unicode 字符编码，一个字符(不区分字母还是汉字)占两个字节

String 类实现了接口 Serializable【String 可以串行化:可以在网络传输】

接口 Comparable 【 String 对象可以比较大小 】

String 是 final 类，不能被其他的类继承

String 有属性 private final char value[]; 用于存放字符串内容

	一定要注意：value 是一个 final 类型， 不可以修改(需要功力)：即 value 不能指向新的地址，但是单个字符内容是可以变化


#### String 方法

format
1. %s , %d , %.2f %c 称为占位符
2. 这些占位符由后面变量来替换
3. %s 表示后面由 字符串来替换
4. %d 是整数来替换
5. %.2f 表示使用小数来替换，替换后，只会保留小数点两位, 并且进行四舍五入的处理
6. %c 使用 char 类型来替换

String formatStr = "我的姓名是%s 年龄是%d，成绩是%.2f 性别是%c.希望大家喜欢我！"; 
String info2 = String.format(formatStr, name, age, score, gender);

### StringBuffer 类

StringBuffer 的直接父类是 AbstractStringBuilder
StringBuffer 实现了Serializable ，即StringBuffer的对象可以串行化
在父类中 AbstractStringBuilder 有属性 char[] value ，不是final
	该 value数组存放字符串内容，因此存放在堆中
StringBuffer 是一个final 类，不能被继承
因为StringBuffer 字符内容存在 char []  value ,所以变化时不用每次都更换地址，所以效率高于 String


注意看底层源码


### StringBuilder
一个可变的字符序列
不保证同步（StringBuilder不是线程安全），字符串缓冲区被单线程使用时，优先使用。
append,insert

#### String,StringBuffer,StringBuilder比较


### Math类常见方法

ceil  向上取整
floor 向下取整  
round 四舍五入 Math.floor(该参数+0.5)
sqrt  求开方
random 返回的是 0 <= x < 1 之间的一个随机小数

获取 a-b 之间的一个随机整数,a,b 均为整数
==(int)(a) <= x <= (int)(a + Math.random() * (b-a +1) )==


### Arrays

#### 定制排序
```java
Book[] books = new Book[4];  
books[0] = new Book("红楼梦222",100);  
books[1] = new Book("西游记",80);  
books[2] = new Book("三国演义2333",90);  
books[3] = new Book("水浒传11",70);  
// 价格从大到小  
Arrays.sort(books, new Comparator<Book>() {  
    @Override  
    public int compare(Book o1, Book o2) {  
        if(o1.getPrice()>o2.getPrice()){  
            return -1;  
        }else{  
            return 1;  
        }  
    }  
});  
for(int i=0;i< books.length;i++){  
    System.out.println(books[i].toString());  
}
```

**很有启发性的一段代码
//结合冒泡 + 定制**
```java
public static void bubble02(int[] arr, Comparator c) { 
	int temp = 0; 
	for (int i = 0; i < arr.length - 1; i++) { 
		for (int j = 0; j < arr.length - 1 - i; j++) { 
		//数组排序由 c.compare(arr[j], arr[j + 1])返回的值决定
			if (c.compare(arr[j], arr[j + 1]) > 0) { 
				temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp; 
			} 
		} 
	} 
}
在main方法中使用
bubble02(arr, new Comparator() { 
	@Override 
	public int compare(Object o1, Object o2) { 
		int i1 = (Integer) o1; 
		int i2 = (Integer) o2; 
		return i2 - i1;
		// return i2 - i1; 
	} 
});
```


Arrays.asList 
	编译类型 List（接口）
	得到的运行类型是Arrays的静态内部类ArrayList 

### System类

System 类常见方法和案例


System.arraycopy(src, 0, dest, 0, src.length)\
五个参数分别为：
源数组
从源数组的哪个索引位置开始拷贝
目标数组，即把源数组的数据拷贝到哪个数组
把源数组的数据拷贝到 目标数组的哪个索引
从源数组拷贝多少个数据到目标数组



### BigInteger 和 BigDecimal 类


如果对 BigDecimal 进行运算，比如加减乘除，需要使用对应的方法

```java
System.out.println(bigDecimal.divide(bigDecimal2));//可能抛出异常 ArithmeticException //在调用 divide 方法时，指定精度即可. BigDecimal.ROUND_CEILING 
//如果有无限循环小数，就会保留 分子 的精度

System.out.println(bigDecimal.divide(bigDecimal2, BigDecimal.ROUND_CEILING));
```

### 日期类

#### 第一代

#### 第二代

Calendar

Calendar 是一个抽象类，并且构造器是private(?protected)
可以通过getInstance() 来获取实例

#### 第三代

前两代：线程不安全；不能处理闰秒（每隔2天，多出1s）

LocalDate 
LocalTime
LocalDateTime

Instant 获取时间戳

## 第十四章 集合
动态保存任意多个对象。

### 集合框架体系
1. 集合主要是两组（单列集合，双列集合）
2. Collection 接口有两个重要的子接口 List Set，他们的实现子类都是单列集合
3. Map 接口 ，双列集合，存放的K-V

```java
public static void main(String[] args) {  
    ArrayList arrayList = new ArrayList();  
    arrayList.add("北京");  
    arrayList.add("上海");  
    System.out.println(arrayList);  
    HashMap hashMap = new HashMap();  
    hashMap.put("No1","aaa");  
    hashMap.put("No2","bbb");  
}
```


```java
public static void main(String[] args) { 
	List list = new ArrayList(); // add:添加单个元素
	
	list.add("jack"); list.add(10);//list.add(new Integer(10)) list.add(true); System.out.println("list=" + list); // remove:删除指定元素
	
	//list.remove(0);//删除第一个元素
	
	list.remove(true);//指定删除某个元素
	
	System.out.println("list=" + list); // contains:查找元素是否存在
	
	System.out.println(list.contains("jack"));//T // size:获取元素个数
	
	System.out.println(list.size());//2
	
	
	// isEmpty:判断是否为空
	
	System.out.println(list.isEmpty());//F // clear:清空
	
	list.clear(); System.out.println("list=" + list); // addAll:添加多个元素
	
	ArrayList list2 = new ArrayList(); list2.add("红楼梦"); list2.add("三国演义"); list.addAll(list2); System.out.println("list=" + list); // containsAll:查找多个元素是否都存在
	
	System.out.println(list.containsAll(list2));//T // removeAll：删除多个元素
	
	list.add("聊斋"); list.removeAll(list2); System.out.println("list=" + list);//[聊斋] // 说明：以 ArrayList 实现类来演示.
}
```

### Collection 接口遍历对象方式
#### 1.迭代器

```java
public static void main(String[] args) { 
	Collection col = new ArrayList(); 
	col.add(new Book("三国演义", "罗贯中", 10.1)); 
	col.add(new Book("小李飞刀", "古龙", 5.1)); 
	col.add(new Book("红楼梦", "曹雪芹", 34.6)); //System.out.println("col=" + col);     //现在老师希望能够遍历 col 集合
	
	//1. 先得到 col 对应的 迭代器
	Iterator iterator = col.iterator(); //2. 使用 while 循环遍历
	
	// while (iterator.hasNext()) {//判断是否还有数据
	
	// //返回下一个元素，类型是 Object 
	// Object obj = iterator.next(); 
	// System.out.println("obj=" + obj); 
	// } 
	//老师教大家一个快捷键，快速生成 while => itit 
	//显示所有的快捷键的的快捷键 ctrl + j 
	while (iterator.hasNext()) { 
		Object obj = iterator.next(); 
		System.out.println("obj=" + obj);
	} 
	//3. 当退出 while 循环后 , 这时 iterator 迭代器，指向最后的元素
	// iterator.next();
	//NoSuchElementException 
	//4. 如果希望再次遍历，需要重置我们的迭代器
	iterator = col.iterator(); 
	System.out.println("===第二次遍历==="); 
	while (iterator.hasNext()) { 
		Object obj = iterator.next(); 
		System.out.println("obj=" + obj); 
	} 
}
```


#### 2.for 循环增强



### List 接口和常用方法


常用方法

void add(int index, Object ele):在 index 位置插入 ele 元素

boolean addAll(int index, Collection eles):从 index 位置开始将 eles 中的所有元素添加进来

Object get(int index):获取指定 index 位置的元素

int indexOf(Object obj):返回 obj 在集合中首次出现的位置

int lastIndexOf(Object obj):返回 obj 在当前集合中末次出现的位置

Object remove(int index):移除指定 index 位置的元素，并返回此元素

Object set(int index, Object ele):设置指定 index 位置的元素为 ele , 相当于是替换

List subList(int fromIndex, int toIndex):返回从 fromIndex 到 toIndex 位置的子集合
// 注意返回的子集合 fromIndex <= subList < toIndex

#### List 的三种遍历方式 [ArrayList, LinkedList,Vector]


#### ArrayList 底层结构和源码分析

#### vector

#### Vector 和 ArrayList 的比较

### LinkedList底层结构

底层操作机制

ArrayList 和 LinkedList 的比较

### Set接口和常用方法

1.无序，没有索引
2.不允许重复元素，所以最多包含一个null
3.JDK API中Set接口的实现类：
	HashSet,  TreeSet

Set接口的遍历方式：
1.可以使用迭代器
2.增强for
3.不能使用索引的方式来获取

	 set 接口对象存放数据是无序(即添加的顺序和取出的顺序不一致) 
	 注意：取出的顺序的顺序虽然不是添加的顺序，但是他的固定


```java
public static void main(String[] args) {  
    Set set = new HashSet();  
    set.add("john");  
    set.add("lucy");  
    set.add("john");//重复  
  
    set.add("jack");  
    set.add("hsp");  
    set.add("mary");  
    set.add(null);//  
    set.add(null);//再次添加 null    System.out.println("set=" + set);  
    Iterator iterator = set.iterator();  
    while(iterator.hasNext()){  
        Object obj = iterator.next();  
        System.out.println("obj="+obj);  
    }  
}
```


### Set 接口实现类-HashSet


```java
public static void main(String[] args) {  
    HashSet set = new HashSet();  
    //说明  
    //1. 在执行 add 方法后，会返回一个 boolean 值  
    //2. 如果添加成功，返回 true, 否则返回 false    //3. 可以通过 remove 指定删除哪个对象  
    System.out.println(set.add("john"));//T  
    System.out.println(set.add("lucy"));//T  
    System.out.println(set.add("john"));//F  
    System.out.println(set.add("jack"));//T  
    System.out.println(set.add("Rose"));//T  
    set.remove("john");  
    System.out.println("set=" + set);//3 个  
  
    set = new HashSet();  
    System.out.println("set=" + set);//0  
  
    //4 Hashset 不能添加相同的元素/数据?  
    set.add("lucy");//添加成功  
  
    set.add("lucy");//加入不了  
  
    set.add(new Dog("tom"));//OK  
    set.add(new Dog("tom"));//Ok  
    System.out.println("set=" + set);  
  
    //在加深一下. 非常经典的面试题.  
    //去看他的源码，即 add 到底发生了什么?=> 底层机制.  
    set.add(new String("hsp"));//ok  
    set.add(new String("hsp"));//加入不了.  
     System.out.println("set=" + set);  
}
```


HashSet底层机制说明
底层是 HashMap,  HashMap底层是 数组+链表+红黑树


扩容 和 转成红黑树机制

如果往一条链上添加到个数为8时，且table大小还未到64时，就会table乘以2进行扩容


### Set接口实现类 - LinkedHashSet


往往需要重写 equals  和 hashCode

### Map 接口特点

Map 与 Collection 并列存在，用于保存具有映射关系的数据：key - value

Map 中的key 和value 可以是任何引用类型的数据， 会被封装到HashMap$Node对象中

Map中的key不允许重复，原因和hashSet一样。当相同时，就替换
Map中的value可以重复
Map中的key可以为null ,value也可以为null, 注意Key为null 只能有一个。

常用String类作为Map的key
key和value存在单向一对一关系，即通过指定的key总能找到对应的value

`put()`
`get()`

Map 接口和常用方法：
put 添加
remove 根据键删除映射关系
get  根据键获取值
size 获取元素个数
isEmpty 判断个数是否为0
clear 清除
containsKey  查找键是否存在

Map 六大遍历方式：
keySet
values
entrySet
增强for 
迭代器

```java
public static void main(String[] args) {  
    HashMap hashMap = new HashMap();  
    hashMap.put("AA",11);  
    hashMap.put("BB",12);  
    hashMap.put(true,123);  
    System.out.println(hashMap.keySet());  
    System.out.println(hashMap.values());  
    Set set = hashMap.entrySet();  
    for(Object obj:set){  
        Map.Entry m = (Map.Entry) obj;  
        System.out.println(m.getKey()+"---"+m.getValue());  
    }  
}
```

Map.entry 有重要的两个方法 `getKey()`和 `getValue()`




----
## 多线程

1. 单线程 : 同一个时刻,只允许执行一个线程 

2. 多线程 : 同一个时刻,可以执行多个线程,比如 : 一个qq进程,可以同时打 开多个聊天窗口,一个迅雷进程,可以同时下载多个文件

3. 并发 : 同一个时刻,多个任务交替执行,造成一种“貌似同时”的错觉,简 单的说,单核cpu实现的多任务就是并发。

4. 并行 : 同一个是刻,多个任务同时执行。多核cpu可以实现并行。


获取当前电脑的cpu数目
```java
public class CpuNum {  
    public static void main(String[] args) {  
        Runtime runtime = Runtime.getRuntime();  
        int n = runtime.availableProcessors();  
        System.out.println(n);  
    }  
}
```


#### 创建线程的两种方式

1、继承Thread类，重写run方法
2、实现Runnable接口，重写run方法

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131104419.png)


#### 继承thread类
```java
package com.hspedu.threaduse;  
  
public class Thread01 {  
    public static void main(String[] args) {  
        Cat cat = new Cat();  
        cat.run();  
        for (int i=0;i<20;i++){  
            System.out.println("主线程i"+i);  
        }  
    }  
}  
class Cat extends Thread{  
    @Override  
    public void run() {  
        int t=0;  
        while (true){  
            t++;  
            System.out.println("cat"+currentThread().getName()+" "+t);  
            try{  
                Thread.sleep(500);  
            }catch (InterruptedException e){  
                e.printStackTrace();  
            }  
            if(t==30)break;  
        }  
    }  
}
```


#### 多线程机制

可以在终端输入 Jconsole来观测线程的执行。

![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131104446.png)

主线程结束了，但子线程还可能继续。



#### 为什么是start

为什么不用 run方法而是start方法？

如果是直接调用run方法，那就是主线程来调用的，并没有新开一个线程。

如果调用run方法，那run方法就是一个普通的方法，就会把run方法执行完毕再执行后面的程序，那就不是真正的多线程了。

start源码中的关键代码
```java
public synchronized void start(){
	start0();
}
```
start0()方法是本地方法，是JVM调用的，底层是c/c++实现

真正实现多线程的效果，是start0(),而不是run
`private native void start0()`



#### 实现Runnable接口

java是单继承，某些时候一个类可能已经继承了父类，这时就不能继承Thread类。


#### 线程常用方法

1. setName
2. getName
3. start
4. run
5. setPriority
6. getPriority
7. sleep
8. interrupt


优先级：10，1，5

interrupt 中断线程，但没有终止线程，一般用于中断正在休眠的线程


yield:  线程的礼让，让出cpu。但不一定礼让成功，因为cpu资源足够。自身调用

join:  线程的插队。线程一旦插队成功，则先执行完插入的线程所有。对方调用


#### 守护线程
用户线程：也叫工程线程，当线程的任务执行完或通知方式结束
守护线程：一般是为工作线程服务的，当所有用户线程结束，守护线程自动结束
常见的守护线程：垃圾回收机制

设置守护线程：setDaemon(true)c



#### 线程状态

![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131104521.png)

Runnable还可以分为Ready 和Running

线程状态转换图

![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250131104551.png)

#### 线程同步
1. 在多线程编程,一些敏感数据不允许被多个线程同时访问,此时就使用同步访问技术,保证数据在任何同一时刻,最多有一个线程访问,以保证数据的完整性。 
2. 也可以这里理解 : 线程同步,即当有一个线程在对内存进行操作时,其他线程都不可以对这个内存地址进行操作,直到该线程完成操作, 其他线程才能对该内存地 址进行操作.

synchronized

1. 同步代码块
`synchronized(对象){}`
得到对象的锁，才能操作同步代码


2. 还可以放在方法声明中，便是方法为同步方法

`public synchronized void m(String name){}`




1. Java语言中,引入了对象互斥锁的概念,来保证共享数据操作的完整性。 
2. 每个对象都对应于一个可称为“互斥锁”的标记,这个标记用来保证在任一时刻, 能有一个线程访问该对象。 
3. 关键字synchronized 来与对象的互斥锁联系。当某个对象用synchronized修饰时 表明该对象在任一时刻只能由一个线程访问 
4. 同步的局限性 : 导致程序的执行效率要降低 
5. 同步方法(非静态的)的锁可以是this, 也可以是其他对象(要求是同一个对象) 
6. 同步方法(静态的)的锁为当前类本身。不能是this。


注意事项：

1. 同步方法如果没有使用static修饰：默认锁对象为this

2. 如果方法使用static修饰，默认锁对象：当前类.class

3. 实现的落地步骤 : 
	需要先分析上锁的代码 
	选择同步代码块或同步方法 
	要求多个线程的锁对象为同一个即可!


-------------

## 第十九章 IO流

三种创建文件方式

获取文件的相关信息

```java
public static void main(String[] args) {  
    String filePath = "F:\\demo1.txt";  
    File file = new File(filePath);  
    //调用相应的方法，得到对应信息  
    System.out.println("文件名字=" + file.getName());  
    //getName、getAbsolutePath、getParent、length、exists、isFile、isDirectory  
    System.out.println("文件绝对路径=" + file.getAbsolutePath());  
    System.out.println("文件父级目录=" + file.getParent());  
    System.out.println("文件大小(字节)=" + file.length());  
    System.out.println("文件是否存在=" + file.exists());//T  
    System.out.println("是不是一个文件=" + file.isFile());//T  
    System.out.println("是不是一个目录=" + file.isDirectory());//F  
}
```

创建一级目录：
	mkdir()
创建多级目录：
	mkdirs()

删除空目录 或 文件
	delete()

### 流的分类

字节流输入 demo1.txt中的内容
### FileInputStream

```java
static void readFile(){  
    String filePath = "F:\\demo1.txt";  
    FileInputStream fileInputStream =null;  
    int readdata = 0;  
    try{  
        fileInputStream = new FileInputStream(filePath);  
        while((readdata=fileInputStream.read())!=-1){  
            System.out.print((char)readdata);  
        }  
    }catch (IOException e){  
        System.out.println(e);  
    }finally {  
        try{  
            fileInputStream.close();  
        }catch (IOException e){  
            System.out.println(e);  
        }  
    }  
}
```

注意：在UTF-8中，一个汉字有3个字节，所以不能用字节流

**一次性读入多个**
```java
// read(byte[] buf)  
static void readFile02(){  
    int readLen=0;  
    byte[] buf = new byte[8];  
    String filePath = "F:\\demo1.txt";  
    FileInputStream fileInputStream =null;  
    try {  
        fileInputStream = new FileInputStream(filePath);  
        while((readLen=fileInputStream.read(buf))!=-1){  
            System.out.print(new String(buf,0,readLen));  
        }  
    }catch (IOException e){  
  
    }finally {  
        try{  
            fileInputStream.close();  
        }catch (IOException e){  
            System.out.println(e);  
        }  
    }  
}
```

### FileOutputStream

**getBytes()** : 将字符串转换成 字节数组

```java
static void writeFile(){  
	String filePath = "F:\\demo1.txt";  
	String str = "hello,java";  
	FileOutputStream fileOutputStream = null;  
	try {  
		fileOutputStream = new FileOutputStream(filePath,true);  
		//设为true表示追加  
		//fileOutputStream.write('c');  
		//fileOutputStream.write(str.getBytes());  
		fileOutputStream.write(str.getBytes(),1,2);  
	}catch (IOException e){  
		System.out.println(e);  
	}  
}
```

write(byte[ ], int off, int len)

### 文件拷贝


```java
public static void main(String[] args) {  
    String path1 = "F:\\cat.jpg";  
    String path2 = "F:\\cat2.jpg";  
    FileInputStream fileInputStream = null;  
    FileOutputStream fileOutputStream = null;  
    try {  
        fileInputStream = new FileInputStream(path1);  
        fileOutputStream = new FileOutputStream(path2,true);  
        int readLen = 0;  
        byte[] buf =new byte[1024];  
        while((readLen = fileInputStream.read(buf))!=-1){  
            fileOutputStream.write(buf,0,readLen);  
        }  
  
    }catch (IOException e){  
        System.out.println(e);  
    }  
}
```


### FileReader和FileWriter

read:每次读取单个字符
read(char [ ])批量读取多个字符到数组
new String(char [ ]) 将char [ ] 转成String
new String(char [ ],off,len)

new FileWriter(File/String)   覆盖模式
new FileWriter(File/String,true) 追加模式
write(int)  写入单个字符
write(char [ ])写入指定数组
write(char [ ],off,len)
write(string) 写入字符串
write(string ,off,len)

toCharArray :将String转成char[ ]

>注意
FileWriter使用后，必须要关闭（close）或刷新(flush) ，否则写入不到指定文件



### 节点流处理流


节点流，从一个特定的数据源读写数据

处理流（包装流）


BufferedReader 和 BufferedWriter  **处理字符，不能处理二进制文件**

BufferedReader 读取文本文件
只需要关闭BufferedReader，因为底层会自动关闭节点流

```java
String filePath = "e:\\a.java"; //创建 bufferedReader 
BufferedReader bufferedReader = new BufferedReader(new FileReader(filePath));
String line; //按行读取, 效率高
//说明
//1. bufferedReader.readLine() 是按行读取文件
//2. 当返回 null 时，表示文件读取完毕
while ((line = bufferedReader.readLine()) != null) { 
	System.out.println(line); 
} 
//关闭流, 这里注意，只需要关闭 BufferedReader ，因为底层会自动的去关闭 节点流
bufferedReader.close();
```


BufferedWriter  输出文本文件
```java
String filePath = "e:\\ok.txt"; //创建 BufferedWriter 
//说明: 
//1. new FileWriter(filePath, true) 表示以追加的方式写入
//2. new FileWriter(filePath) , 表示以覆盖的方式写入

BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(filePath)); bufferedWriter.write("hello, 韩顺平教育!"); bufferedWriter.newLine();//插入一个和系统相关的换行
bufferedWriter.write("hello2, 韩顺平教育!"); bufferedWriter.newLine(); bufferedWriter.write("hello3, 韩顺平教育!"); bufferedWriter.newLine(); 
//说明：关闭外层流即可 ， 传入的 new FileWriter(filePath) ,会在底层关闭
bufferedWriter.close();
```



BufferedInputStream 和 BufferedOutputStream



### 对象处理流

提供了对基本类型或对象类型的序列化和反序列化的方法
ObjectOutputStream 提供序列化
ObjectInputStream 提供反序列化

#### 序列化 和 反序列化

序列化：在保存数据时，保存数据的值和数据类型
反序列化：恢复数据时，恢复数据的值和数据类型

需要类是可序列化，必须实现下面两个接口之一：
Serializable    //这是一个标记接口，没有方法
Externalizable
因此一般实现第一个


`readObject()`
调用此方法，有些重要的细节：
	如果希望调用Dog的方法，需要向下转型
	需要将Dog类的定义，放在可以引用的位置


seriaVersionUID  序列化的版本号，可以提高兼容性。

序列化对象时，static或transient修饰的成员不会被序列化。

序列化具有继承性，某类实现序列化，其子类也默认实现了。


### 标准输入输出流

System.in 和System.out 分别的编译类型与运行类型

getClass() 获得其运行类型

```java
Scanner sc = new Scanner(System.in);
String next = sc.next();
```


### 转换流

InputStreamReader

OutputStreamReader


## 第二十一章 网络编程（待学习）


### 网络相关概念

ipv4 地址

域名和端口号

网络通信协议

TCP 和 UDP

InetAddress类

### TCP字节流编程

最简单的客户端想服务器端发送一次消息(字节流)：
服务器端
```java
package Socket;  
import java.io.IOException;  
import java.io.InputStream;  
import java.net.ServerSocket;  
import java.net.Socket;  
  
public class SocketTCPServer {  
    public static void main(String[] args) throws IOException {  
        //1.在本机的9999端口监听。要求9999端口未被占用  
        ServerSocket serverSocket = new ServerSocket(9999);  
        // 2. 没有客户端连接 ，会阻塞。  
        //    有客户端，返回socket对象  
        Socket socket = serverSocket.accept();  
  
        InputStream inputStream = socket.getInputStream();  
  
        byte[] buf = new byte[1024];  
        int len=0;  
        while((len = inputStream.read(buf))!=-1){  
            System.out.println(new String(buf,0,len));  
        }  
        //  
        inputStream.close();  
        socket.close();  
        serverSocket.close();
    }  
}
```

ServerSocket可以创建多个socket

客户端
```java
package Socket;  
  
import java.io.IOException;  
import java.io.OutputStream;  
import java.net.InetAddress;  
import java.net.Socket;  
import java.net.UnknownHostException;  
  
public class SocketTCPClient {  
    public static void main(String[] args) throws IOException {  
        //1.连接服务器 (ip,端口)，如果连接成功，返回Socket对象  
//        System.out.println(InetAddress.getLocalHost());  
        Socket socket = new Socket(InetAddress.getLocalHost(), 9999);  
  
        // 2.得到和socket关联的输出流对象  
        OutputStream outputStream = socket.getOutputStream();  
  
        //3. 通过输出流写数据  
        outputStream.write("hello,server".getBytes());  
  
        //4. 关闭流对象和socket  
        outputStream.close();  
        socket.close();  
    }  
}
```

**升级：客户端发送一次消息，服务器端收到消息后回复一条消息。（字节流）**

**设置写入结束标记
	socket.shutdownOutput**

服务器端：
```java
package Socket;  
  
import java.io.IOException;  
import java.io.InputStream;  
import java.io.OutputStream;  
import java.net.InetAddress;  
import java.net.ServerSocket;  
import java.net.Socket;  
import java.net.UnknownHostException;  
  
public class SocketTCP02Server {  
    public static void main(String[] args) throws IOException {  
        ServerSocket serverSocket = new ServerSocket( 9999);  
        Socket socket = serverSocket.accept();  
  
        InputStream inputStream = socket.getInputStream();  
        byte[] buf = new byte[1024];  
        int len =0;  
        System.out.println("收到来自客户端的消息：");  
        while((len=inputStream.read(buf))!=-1){  
            System.out.println(new String(buf,0,len));  
        }  
        OutputStream outputStream = socket.getOutputStream();  
        System.out.println("发送消息：");  
        outputStream.write("hello,client".getBytes());  
        socket.shutdownOutput();  
        System.out.println("完毕");  
        outputStream.close();  
        inputStream.close();  
        socket.close();  
        serverSocket.close();  
    }  
}
```

客户端：
```java
package Socket;  
  
import java.io.IOException;  
import java.io.InputStream;  
import java.io.OutputStream;  
import java.net.InetAddress;  
import java.net.Socket;  
import java.net.UnknownHostException;  
  
public class SocketTCP02Client {  
    public static void main(String[] args) throws IOException {  
        Socket socket = new Socket(InetAddress.getLocalHost(), 9999);  
        OutputStream outputStream = socket.getOutputStream();  
        System.out.println("发送消息：");  
        outputStream.write("hello,server".getBytes());  
        socket.shutdownOutput();  
  
        InputStream inputStream = socket.getInputStream();  
        int len =0;  
        byte[] buf = new byte[1024];  
        System.out.println("收到服务器端消息：");  
        while((len=inputStream.read(buf))!=-1){  
            System.out.println(new String(buf,0,len));  
        }  
        System.out.println("完毕");  
        inputStream.close();  
        outputStream.close();  
        socket.close();  
  
    }  
}
```


### TCP字符流

将字节流转换成字符流（需要通过转换流）
	OutputStreamWriter(字节流)
	InputStreamReader(字节流)

如果使用writer.newLine 设置写入结束标记：
	注意，需要使用readLine来读取

服务器端：
```java
package Socket;  
  
import java.io.*;  
import java.net.InetAddress;  
import java.net.ServerSocket;  
import java.net.Socket;  
import java.net.UnknownHostException;  
  
public class SocketTCP02Server {  
    public static void main(String[] args) throws IOException {  
        ServerSocket serverSocket = new ServerSocket( 9999);  
        Socket socket = serverSocket.accept();  
  
        InputStream inputStream = socket.getInputStream();  
//        byte[] buf = new byte[1024];  
//        int len =0;  
//        System.out.println("收到来自客户端的消息：");  
//        while((len=inputStream.read(buf))!=-1){  
//            System.out.println(new String(buf,0,len));  
//        }  
  
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));  
        String s = bufferedReader.readLine();  
        System.out.println("收到来自客户端的消息（字符流）：");  
        System.out.println(s);  
  
        OutputStream outputStream = socket.getOutputStream();  
//        System.out.println("发送消息：");  
//        outputStream.write("hello,client".getBytes());  
//        socket.shutdownOutput();  
        System.out.println("发送消息（字符流）");  
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream));  
        bufferedWriter.write("hello,client23333");  
        bufferedWriter.newLine();  
        bufferedWriter.flush();  
  
        System.out.println("完毕");  
        bufferedWriter.close();  
        bufferedReader.close();  
        socket.close();  
        serverSocket.close();  
    }  
}
```

客户端：
```java
package Socket;  
  
import java.io.*;  
import java.net.InetAddress;  
import java.net.Socket;  
import java.net.UnknownHostException;  
  
public class SocketTCP02Client {  
    public static void main(String[] args) throws IOException {  
        Socket socket = new Socket(InetAddress.getLocalHost(), 9999);  
        OutputStream outputStream = socket.getOutputStream();  
//        System.out.println("发送消息：");  
//        outputStream.write("hello,server".getBytes());  
//        socket.shutdownOutput();  
        System.out.println("发送消息（字符流）");  
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream));  
        bufferedWriter.write("hello,server2333");  
        bufferedWriter.newLine();  
        bufferedWriter.flush();//使用字符流，需要手动刷新，否则数据不会写入数据通道  
  
        InputStream inputStream = socket.getInputStream();  
//        int len =0;  
//        byte[] buf = new byte[1024];  
//        System.out.println("收到服务器端消息：");  
//        while((len=inputStream.read(buf))!=-1){  
//            System.out.println(new String(buf,0,len));  
//        }  
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));  
        String s = bufferedReader.readLine();  
        System.out.println("收到来自服务器端消息（字符流）：");  
        System.out.println(s);  
  
        System.out.println("完毕");  
        bufferedReader.close();  
        bufferedWriter.close();  
        socket.close();  
  
    }  
}
```

### netstat


## 第25章 JDBC和连接池


参考文档 jdk
java.sql
javax.sql

程序步骤：
注册驱动——加载Driver类
获得连接——得到Connection
执行增删改查——发送SQL给mysql执行
释放资源——关闭相关连接


### 数据库连接方式

**第一种：**

```java
package jdbc;  
  
import com.mysql.jdbc.Driver;  
  
import java.sql.Connection;  
import java.sql.SQLException;  
import java.sql.Statement;  
import java.util.Properties;  
  
public class Jdbc01 {  
    public static void main(String[] args) throws SQLException {  
        /*前置  
        *创建libs,将mysql.jar拷贝到该目录，点击add as library  
        */        
        //1.注册驱动  
        Driver driver = new Driver();  
        //2.得到连接  
        //jdbc:mysql://  表示协议，通过jdbc连接到mysql  
        //localhost  主机，也可以是ip地址  
        //3306 表示mysql监听的端口  
        // mysql连接本质就是 socket连接  
        String url = "jdbc:mysql://localhost:3306/db02?characterEncoding=utf8";  
        Properties properties = new Properties();  
        properties.setProperty("user","root");  
        properties.setProperty("password","123456");  
  
        Connection connect = driver.connect(url, properties);  
  
        //3.执行语句  
        String sql = "insert into actor values(null,'小满','男','1970-11-11','110')";  
        Statement statement = connect.createStatement();  
        int i = statement.executeUpdate(sql);//对于dml语句，返回的是影响行数  
        System.out.println(i);  
        //4.关闭语句  
        statement.close();  
        connect.close();  
    }  
}
```

包含中文时注意编码格式问题


**第二种：**

使用反射加载Driver类。动态加载，更加灵活，减少依赖性。

```java
public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InstantiationException, SQLException {  

    Class<?> aClass = Class.forName("com.mysql.jdbc.Driver");  
    Driver driver = (Driver)aClass.newInstance();  
    
    String url = "jdbc:mysql://localhost:3306/db02?characterEncoding=utf8";  
    Properties properties = new Properties();  
    properties.setProperty("user","root");  
    properties.setProperty("password","123456");  
    Connection connect = driver.connect(url, properties);  
    System.out.println("方式2："+connect);  
}
```


**第三种：DriverManager**

使用DriverManager替换Driver 进行统一管理

不必创建properties对象
```java
public void conne3() throws ClassNotFoundException, IllegalAccessException, InstantiationException, SQLException {  
    Class<?> aClass = Class.forName("com.mysql.jdbc.Driver");  
    Driver driver = (Driver)aClass.newInstance();  
  
    String url = "jdbc:mysql://localhost:3306/db02?characterEncoding=utf8";  
    String user = "root";  
    String password = "123456";  
    DriverManager.registerDriver(driver);  
    Connection connection = DriverManager.getConnection(url, user, password);  
    System.out.println("方式3："+connection);  
}
```


**第四种：使用Class.forName 自动完成注册驱动，简化代码**

Class.forName("com.mysql.jdbc.Driver"); 底层已经完成了注册驱动

```java
public void conne4() throws ClassNotFoundException, IllegalAccessException, InstantiationException, SQLException {  
    //使用反射加载了 Driver类  
    Class.forName("com.mysql.jdbc.Driver");  
    String url = "jdbc:mysql://localhost:3306/db02?characterEncoding=utf8";  
    String user = "root";  
    String password = "123456";  
    Connection connection = DriverManager.getConnection(url, user, password);  
    System.out.println("方式4："+connection);  
}
```



**第五种：增加配置文件**

在src下创建一个mysql.properties
```properties
driver=com.mysql.jdbc.Driver  
password=123456  
user=root  
url=jdbc:mysql://localhost:3306/db02?characterEncoding=utf8
```

```java
public void conne5() throws ClassNotFoundException, IllegalAccessException, InstantiationException, SQLException, IOException {  
    Properties properties = new Properties();  
    properties.load(new FileInputStream("src\\mysql.properties"));  
    String url = properties.getProperty("url");  
    String user = properties.getProperty("user");  
    String password = properties.getProperty("password");  
    String driver = properties.getProperty("driver");  
    Class.forName(driver);  
    Connection connection = DriverManager.getConnection(url, user, password);  
    System.out.println("方式5："+connection);  
}
```



### ResultSet 结果集

ResultSet 对象保持一个光标指向当前的数据行，**最初在第一行之前**
next将光标移到下一行

初始，resultSet.next() 才是第一行。

```java
String sql="select * from actor";  
Statement statement = connection.createStatement();  
ResultSet resultSet = statement.executeQuery(sql);  
while(resultSet.next()){  
    int id = resultSet.getInt(1);  
    String name = resultSet.getString(2);  
    System.out.println(id+"\t"+name);  
}  
resultSet.close();  
statement.close();  
connection.close();
```


### SQL注入

Statement :存在SQL注入风险
PreparedStatement :预处理
CallableStatement   :存储过程

scanner().next() 遇到空格或单引号会结束
scanner().nextLine() 换行结束






```java
public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {  
        Scanner scanner = new Scanner(System.in);  
  
        System.out.println("输入用户：");  
        String name = scanner.nextLine();  
        System.out.println("输入密码：");  
        String pwd = scanner.nextLine();  
  
        Properties properties = new Properties();  
        properties.load(new FileInputStream("src\\mysql.properties"));  
  
        String user= properties.getProperty("user");  
        String password= properties.getProperty("password");  
        String driver= properties.getProperty("driver");  
        String url= properties.getProperty("url");  
  
        Class.forName(driver);  
  
        Connection connection = DriverManager.getConnection(url, user, password);  
  
//        String sql = "insert into admin values(?,?)";  
        String sql = "delete from admin where name=?";  
        PreparedStatement preparedStatement = connection.prepareStatement(sql);  
        preparedStatement.setString(1,name);  
//        preparedStatement.setString(2,pwd);  
  
        int i = preparedStatement.executeUpdate();  
        System.out.println(i);  
    }
```



### JDBC API 小结


对于ResultSet 来说，getXxx 不仅可以传入 列的索引，也可以直接传入列名，这样更加方便，不用考虑顺序。


### JDBC Utils开发（待补）


### 事务处理(待补充)

当一个Connection对象创建时 ，默认是自动提交事务。

调用Connection 的setAutoCommit(false) 可取消自动提交事务。

所有sql语句成功执行后，调用commit() 提交事务

某个操作失败或异常时，调用 rollback() 回滚事务


 事务解决转账业务的例子：
```java

```


### 批处理(待补充)

addBatch();
executeBatch();
clearBatch();


### 连接池技术

传统获取Connection存在问题

数据库连接池技术：connection pool


数据库连接池使用javax.sql.DataSource 来表示，DataSource只是一个接口，该接口通常由第三方提供实现。

把jar包放在lib目录下，并add as library

#### c3p0两种方式

**c3p0 方式1：**

相关参数,在程序中指定user,url,password等

示例代码
```java
package c3p0;  
  
import com.mchange.v2.c3p0.ComboPooledDataSource;  
  
import java.beans.PropertyVetoException;  
import java.io.FileInputStream;  
import java.io.FileNotFoundException;  
import java.io.IOException;  
import java.sql.Connection;  
import java.sql.SQLException;  
import java.util.Properties;  
  
public class c3p0_ {  
    public static void main(String[] args) throws IOException, PropertyVetoException, SQLException {  
  
        //1.创建一个数据源对象  
        ComboPooledDataSource comboPooledDataSource = new ComboPooledDataSource();  
        //2.通过文件获取配置  
        Properties properties = new Properties();  
        properties.load(new FileInputStream("src\\mysql.properties"));  
        String user = properties.getProperty("user");  
        String password = properties.getProperty("password");  
        String url = properties.getProperty("url");  
        String driver = properties.getProperty("driver");  
  
        // 给数据源设置相关参数  
        comboPooledDataSource.setDriverClass(driver);  
        comboPooledDataSource.setUser(user);  
        comboPooledDataSource.setPassword(password);  
        comboPooledDataSource.setJdbcUrl(url);  
  
        //设置连接数  
        comboPooledDataSource.setInitialPoolSize(10);  
        comboPooledDataSource.setMaxPoolSize(100);  
        long sta = System.currentTimeMillis();  
  
        for (int i=0;i<5000;i++){  
            Connection connection = comboPooledDataSource.getConnection(); 
            connection.close();  
        }  
  
        long end = System.currentTimeMillis();  
        System.out.println("连接5000个耗时："+(end-sta));  
    }  
}
```


**方式2**
	
使用配置文件模板

```java
//将c3p0提供的c3p0.config.xml 拷贝到src目录下
//该文件指定了连接的相关参数
public static void c3p0_2() throws SQLException {  
    ComboPooledDataSource comboPooledDataSource = new ComboPooledDataSource("hsp_edu");  
    Connection connection = comboPooledDataSource.getConnection();  
    System.out.println("连接成功");  
    connection.close();  
}
```

#### 德鲁伊Druid


```java
public static void main(String[] args) throws Exception {  
    //1. 加入 Druid jar 包  
    //2. 加入 配置文件 druid.properties , 将该文件拷贝项目的 src 目录  
    //3. 创建 Properties 对象, 读取配置文件  
    Properties properties = new Properties();  
    properties.load(new FileInputStream("src\\druid.properties"));  
  
    //4. 创建一个指定参数的数据库连接池, Druid 连接池  
    DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);  
    Connection connection = dataSource.getConnection();  
    System.out.println(connection.getClass());  
    System.out.println("连接成功!");  
    connection.close();  
}
```

DruidDataSourceFactory——德鲁伊工厂

JDBCUtilsByDruid 代码

```java
package druid;  
  
import com.alibaba.druid.pool.DruidDataSourceFactory;  
  
import javax.sql.DataSource;  
import java.io.FileInputStream;  
import java.sql.Connection;  
import java.sql.ResultSet;  
import java.sql.SQLException;  
import java.sql.Statement;  
import java.util.Properties;  
  
public class JDBCUtilsByDruid {  
    private static DataSource ds;  
    static {  
        Properties properties = new Properties();  
        try {  
            properties.load(new FileInputStream("src\\druid.properties"));  
            ds = DruidDataSourceFactory.createDataSource(properties);  
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
    }  
    public static Connection getConnection() throws SQLException {  
        return ds.getConnection();  
    }  
    public static void close(ResultSet resultSet, Statement statement, Connection connection){  
        try {  
            if(resultSet!=null){  
                resultSet.close();  
            }  
            if(statement!=null){  
                statement.close();  
            }  
            if(connection!=null){  
        //在数据库连接池技术中，close 不是真的断掉连接  
        //而是把使用的 Connection 对象放回连接池  
                connection.close();  
            }  
        } catch (SQLException throwables) {  
            throwables.printStackTrace();  
        }  
    }  
}
```

Test代码
```java
package druid;  
  
import java.sql.Connection;  
import java.sql.PreparedStatement;  
import java.sql.ResultSet;  
import java.sql.SQLException;  
  
public class utilsUse {  
    public static void main(String[] args) throws SQLException {  
        Connection connection = JDBCUtilsByDruid.getConnection();  
        String sql = "select * from actor where id=?";  
        PreparedStatement preparedStatement = connection.prepareStatement(sql);  
        preparedStatement.setInt(1,1);  
        ResultSet resultSet = preparedStatement.executeQuery();  
        while(resultSet.next()){  
            int id = resultSet.getInt("id");  
            String name = resultSet.getString("name");  
            System.out.println(id+":"+name);  
        }  
        JDBCUtilsByDruid.close(resultSet,preparedStatement,connection);  
    }  
}
```


#### Apache- DBUtils

JavaBean , PoJO , Domain 
简单java类对象 

用来处理 sql语句和ResultSet

示例代码：
查询 
```java
// 查询多行 ：BeanListHandler
public class DBUtils {  
    public static void main(String[] args) throws SQLException {  
  
        Connection connection = JDBCUtilsByDruid.getConnection();  
        QueryRunner queryRunner = new QueryRunner();  
        String sql ="select * from actor where id>=?";  
        List<actor> list = queryRunner.query(connection, sql, new BeanListHandler<>(actor.class), 1);  
        for(actor i:list){  
            System.out.println(i);  
        }  
        JDBCUtilsByDruid.close(null,null,connection);  
    }  
}

// 查询单行 ：BeanHandler
public static void querySingle() throws SQLException {  
    Connection connection = JDBCUtilsByDruid.getConnection();  
    QueryRunner queryRunner = new QueryRunner();  
    String sql ="select * from actor where id=?";  
    actor act = queryRunner.query(connection, sql, new BeanHandler<>(actor.class), 1);  
    System.out.println(act);  
    JDBCUtilsByDruid.close(null,null,connection);  
}

//单行单列 ：ScalarHandler
public static void scalar() throws SQLException {  
    Connection connection = JDBCUtilsByDruid.getConnection();  
    QueryRunner queryRunner = new QueryRunner();  
    String sql ="select name from actor where id=?";  
    Object obj= queryRunner.query(connection, sql, new ScalarHandler(), 1);  
    System.out.println(obj);  
    JDBCUtilsByDruid.close(null,null,connection);  
}

```

dml操作
```java
public static void dml() throws SQLException {  
        Connection connection = JDBCUtilsByDruid.getConnection();  
        QueryRunner queryRunner = new QueryRunner();  
        String sql ="update actor set name=? where id=?";  
//        Object obj= queryRunner.query(connection, sql, new ScalarHandler(), 1);  
        int rows = queryRunner.update(connection,sql,"李白",1);  
        //rows:受影响行数  
        System.out.println(rows);  
        JDBCUtilsByDruid.close(null,null,connection);  
    }
```

#### BasicDao（待补充）


## 第27章 正则表达式

在java正则表达式中，两个\\\\ 代表其他语言的一个\

```
匹配 . ==> \\.
匹配(  ==> \\(
```

```java
String s="abc(ababc(";  
String regStr = "\\(";  
Pattern pattern = Pattern.compile(regStr);  
Matcher matcher = pattern.matcher(s);  
  
while(matcher.find()){  
    System.out.println("找到 "+matcher.group(0));  
}
```

### 字符匹配


java默认贪婪匹配，尽量匹配多的


**元字符 - 定位符**

```
^  :指定起始字符
$  :指定结束字符
\\b:匹配目标字符串的边界
\\B:匹配目标字符串的非边界
```



![image-20230909170607734](https://web-tlias1137.oss-cn-beijing.aliyuncs.com/document/image-20230909170607734.png)




**捕获分组**

非命名分组

```java
	public static void main(String[] args) {
        String cont = "112sad12321bbb1111";
        String reg = "(\\d\\d)(\\d\\d)";
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(cont);
        while (matcher.find()){
            System.out.println("找到="+matcher.group(0));
            System.out.println("第1个="+matcher.group(1));
            System.out.println("第2个="+matcher.group(2));
        }
    }
```

命名分组

![image-20230909172603502](https://web-tlias1137.oss-cn-beijing.aliyuncs.com/document/image-20230909172603502.png)

```java
        String cont = "112sad12321bbb1111";
        String reg = "(?<g1>\\d\\d)(?<g2>\\d\\d)";
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(cont);
        while (matcher.find()){
            System.out.println("找到="+matcher.group(0));
            System.out.println("第1个="+matcher.group("g1"));
            System.out.println("第2个="+matcher.group("g2"));
        }
```



**非捕获分组**

不能使用group.matcher(1)



```
String regStr = "韩顺平(?:教育|老师|同学)"
String regStr = "韩顺平教育|韩顺平老师|韩顺平同学"
```

上面两句等价



```
String regStr = "韩顺平(?=教育|老师)"
```

找到 韩顺平 这个关键字，但是要求只是查找 韩顺平教育  和  韩顺平老师 中包含的韩顺平



```
String regStr= "韩顺平(?!教育|老师)"
```

找到 韩顺平 这个关键字，但是要求只是查找 不是 韩顺平教育  和  韩顺平老师 中包含的韩顺平



**非贪婪匹配**

``` 
String regStr = "\\d+?" 非贪婪
String regStr = "\\d+" 贪婪
```





一、校验数字的表达式

```
1 数字：^[0-9]*$
2 n位的数字：^\d{n}$
3 至少n位的数字：^\d{n,}$
4 m-n位的数字：^\d{m,n}$
5 零和非零开头的数字：^(0|[1-9][0-9]*)$
6 非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(.[0-9]{1,2})?$
7 带1-2位小数的正数或负数：^(\-)?\d+(\.\d{1,2})?$
8 正数、负数、和小数：^(\-|\+)?\d+(\.\d+)?$
9 有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
10 有1~3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
11 非零的正整数：^[1-9]\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\+?[1-9][0-9]*$
12 非零的负整数：^\-[1-9][]0-9"*$ 或 ^-[1-9]\d*$
13 非负整数：^\d+$ 或 ^[1-9]\d*|0$
14 非正整数：^-[1-9]\d*|0$ 或 ^((-\d+)|(0+))$
15 非负浮点数：^\d+(\.\d+)?$ 或 ^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$
16 非正浮点数：^((-\d+(\.\d+)?)|(0+(\.0+)?))$ 或 ^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$
17 正浮点数：^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$ 或 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
18 负浮点数：^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$ 或 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
19 浮点数：^(-?\d+)(\.\d+)?$ 或 ^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$

```





二、校验字符的表达式

```
1 汉字：^[\u4e00-\u9fa5]{0,}$
2 英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$
3 长度为3-20的所有字符：^.{3,20}$
4 由26个英文字母组成的字符串：^[A-Za-z]+$
5 由26个大写英文字母组成的字符串：^[A-Z]+$
6 由26个小写英文字母组成的字符串：^[a-z]+$
7 由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
8 由数字、26个英文字母或者下划线组成的字符串：^\w+$ 或 ^\w{3,20}$
9 中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
10 中文、英文、数字但不包括下划线等符号：^[\u4E00-\u9FA5A-Za-z0-9]+$ 或 ^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$
11 可以输入含有^%&',;=?$\"等字符：[^%&',;=?$\x22]+
12 禁止输入含有~的字符：[^~\x22]+
```



三、特殊需求表达式

```
1 Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
2 域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
3 InternetURL：[a-zA-z]+://[^\s]* 或 ^https://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$
4 手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
5 电话号码("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)：^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$ 
6 国内电话号码(0511-4405222、021-87888822)：\d{3}-\d{8}|\d{4}-\d{7}
7 身份证号：
		15或18位身份证：^\d{15}|\d{18}$
		15位身份证：^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$
		18位身份证：^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$
8 短身份证号码(数字、字母x结尾)：^([0-9]){7,18}(x|X)?$ 或 ^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$
9 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$
10 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
11 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$ 
12 日期格式：^\d{4}-\d{1,2}-\d{1,2}
13 一年的12个月(01～09和1～12)：^(0?[1-9]|1[0-2])$
14 一个月的31天(01～09和1～31)：^((0?[1-9])|((1|2)[0-9])|30|31)$ 
15 钱的输入格式：
16 1.有四种钱的表示形式我们可以接受:"10000.00" 和 "10,000.00", 和没有 "分" 的 "10000" 和 "10,000"：^[1-9][0-9]*$ 
17 2.这表示任意一个不以0开头的数字,但是,这也意味着一个字符"0"不通过,所以我们采用下面的形式：^(0|[1-9][0-9]*)$ 
18 3.一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：^(0|-?[1-9][0-9]*)$ 
19 4.这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉,因为钱总不能是负的吧.下面我们要加的是说明可能的小数部分：^[0-9]+(.[0-9]+)?$ 
20 5.必须说明的是,小数点后面至少应该有1位数,所以"10."是不通过的,但是 "10" 和 "10.2" 是通过的：^[0-9]+(.[0-9]{2})?$ 
21 6.这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样：^[0-9]+(.[0-9]{1,2})?$ 
22 7.这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样：^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$ 
23 8.1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须：^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$ 
24 备注：这就是最终结果了,别忘了"+"可以用"*"替代如果你觉得空字符串也可以接受的话(奇怪,为什么?)最后,别忘了在用函数时去掉去掉那个反斜杠,一般的错误都在这里
25 xml文件：^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$
26 中文字符的正则表达式：[\u4e00-\u9fa5]
27 双字节字符：[^\x00-\xff] (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))
28 空白行的正则表达式：\n\s*\r (可以用来删除空白行)
29 HTML标记的正则表达式：<(\S*?)[^>]*>.*?|<.*? /> (网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)
30 首尾空白字符的正则表达式：^\s*|\s*$或(^\s*)|(\s*$) (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
31 腾讯QQ号：[1-9][0-9]{4,} (腾讯QQ号从10000开始)
32 中国邮政编码：[1-9]\d{5}(?!\d) (中国邮政编码为6位数字)
33 IP地址：\d+\.\d+\.\d+\.\d+ (提取IP地址时有用)
```

