---
title: Golong语言基础
tags:
  - Go
categories:
  - 后端
  - Go
createTime: 2024/03/11 11:18:20
permalink: /article/9wf3gbjg/
---



## 引入

#### go语言特点

1. 内置runtime，支持垃圾回收 是什么意思？

   > 运行时环境是指一种在程序运行过程中提供支持的软件层，它负责管理程序的执行和资源分配。内置runtime表示该运行时环境作为编程语言或开发平台的一部分直接提供，无需额外安装或配置。
   >
   > 垃圾回收是一种自动内存管理的技术，用于检测和释放不再使用的内存资源，从而减少程序中的内存泄漏和内存溢出问题。当一个对象或变量不再需要时，垃圾回收机制会自动将其标记为垃圾，并在适当的时候回收和释放相关的内存资源，以便其他对象可以利用这些资源。

2. 跨平台编译（交叉编译）是什么意思？

   > 传统的开发方式中，开发人员需要在目标平台上进行编译，以生成可在该平台上运行的可执行文件。然而，对于不同的平台，可能存在不同的硬件架构、操作系统、编译器等差异，这就需要在每个平台上分别进行编译。
   >
   > 而跨平台编译则允许开发人员在一个平台上进行开发和编译，但生成的可执行文件可以在其他目标平台上运行。


#### env环境设置
goroot : go下载的地方
gopath : go项目所在的地方
goproxy 设置国内代理：例如七牛云 `go env -w GOPROXY=https://goproxy.cn,direct`  
`go env GO111MODULE=on` 打开模块支持
使用 go mod 管理项目

#### go命令
go build 构建
go clean 移除对象文件 ？
go env 打印go环境
go mod init 项目名  初始化mod
go get 下载并安装包和依赖
go install 编译并安装包和依赖

#### 部分命名规则
变量命名
开头小写字母，表示私有
开头大写字母，表示对外可用

```c
var name string
var age int
```

## 变量
#### 变量
```go
//格式
var identifier type
/*
 *var：声明变量关键字
 *identifier：变量名称
 *type：变量类型
 */
*1.批量声明
    var(
        name string
        age int
        isOk bool
    )
    fmt.Printf("name: %v\n",name)
    fmt.Printf("age: %v\n",age)  //0
    fmt.Printf("isOk: %v\n",isOk)//false

2.类型推断
    var name2 = "tom"
	fmt.Printf("name2: %v\n",name2)
3.批量初始化
	var name3,age3 = "tom",18
	fmt.Printf("name3: %v\n",name3)
	fmt.Printf("age3: %v\n",age3)
```
注意声明后必须使用，否则会报错
#### 短变量
在函数内部，使用  `:=` 对变量进行声明和初始化。
注意：只能在函数内使用！
```go
func main(){
	name:="ABC"
	age:=20
}
```

#### 匿名变量
匿名变量,接收多个变量时
如果不需要某个值，可以使用下划线 _ 表示变量名称，该变量称为匿名变量。

```go
name4,_:="tom233",344
fmt.Printf("name4: %v\n",name4)
```

## 常量
同样可以类型推断，批量赋值
#### iota
iota 比较特殊，可以被认为是一个**可被编译器修改的常量**，它默认开始值是 `0` ，每调用一次加`1`，遇到`const`关键字时被重置为`0`
```go
const(
    a=iota
    b
    c
)
fmt.Printf("a: %v\n", a) //0
fmt.Printf("b: %v\n", b) //1
fmt.Printf("c: %v\n", c) //2
```

**使用 _ 可以跳过某些值**
```go
const(
    a1=iota   //0
    _         //1
    a2        //2
)
fmt.Printf("a1 is: %v\n", a1) //0
fmt.Printf("a2 is: %v\n", a2) //2
```

**iota 声明 中间插队，效果与 _ 一样**
```go
const(
    a3=iota
    a4=100
    a5=iota
)
fmt.Printf("a3 is: %v\n", a3) // 0
fmt.Printf("a4 is: %v\n", a4) // 100
fmt.Printf("a5 is: %v\n", a5) // 2
```


## 数据类型
数字类型，字符串类型，布尔类型，切片类型 ？

**布尔类型**
不能以0，1表示真假
**数字类型**
Go 也有基于架构的类型，例如：int、uint 和 uintptr。
这些类型的长度都是根据运行程序所在的操作系统类型所决定的：
int 和 uint 在 32 位操作系统上，它们均使用 32 位（4 个字节），在 64 位操作系统上，它们均使用 64 位（8 个字节）。
uintptr 的长度被设定为足够存放一个指针即可。
Go 语言中没有 float 类型。（Go 语言中只有 float32 和 float64）没有 double 类型。


## 执行顺序
### switch
switch中没有了break，而增添了 fallthrough实现穿透效果。

### for
没有了while循环
永真循环：
```go
for{
    fmt.Println("run...")
}
```

### for range
遍历一个切片：
```go
a:=[]int{1,2,3,4}
for i,v:=range a{
    fmt.Printf("i:%d,v:%d\n",i,v)
}
```
遍历一个map
```go
m:=make(map[string]string, 0)
m["name"]="tom"
m["age"]="20"
for k, v := range m {
    fmt.Printf("k:%s,v:%s\n",k,v)       
}
```
### break
break跳转到某个标签
```go
MYLABEL:
for i := 0; i < 10; i++ {
    fmt.Printf("i: %v\n", i)
    if i>=5{
        break MYLABEL
    }
}
fmt.Println("end")
```

## 数据结构
### 数组
初始化：
可以指定索引，
可以使用`...` 默认推断长度
```go
var a=[...]int{2,4,6,6:100}
fmt.Printf("a: %v\n", a)
fmt.Printf("len(a): %v\n", len(a))
//a: [2 4 6 0 0 0 100]
//len(a): 7
```
### 切片slice

**切片初始化**：
可以用数组：
```go
slice1 := arr1[:]
```

 **空(nil)切片**

**增删**
append
增加值：
```go
var a = []int{1,2,3}
fmt.Printf("a: %v\n", append(a,4,5))
```
删除索引为 index 上的值
`s1 = append(s1[:index],s1[index+1:])`
### map
map是key:value键值对的数据结构容器。内部实现是哈希表
```go
var a = make(map[string]string)
a["name"]="zhangsan"
a["age"]="20"
v,ok:=a["name1"]
fmt.Printf("v: %v\n", v)
fmt.Printf("ok: %v\n", ok)
```
如果 存在key所对应的值，则ok为true，v为对应值；否则ok为false，v为空

遍历map
range

## 函数
go语言中有3种函数：普通函数，匿名函数，方法（定义在struct上的函数。receiver）
go中不允许函数重载(overload)，但方法可以
> Go中经常会使用其中一个返回值作为函数是否执行成功、是否有错误信息的判断条件。
> 例如 `return value,exists`、`return value,ok`、`return value,err`等


### 闭包
闭包 = 函数 + 引用环境
```go
func calc(base int) (func(a int) int, func(b int) int) {
    add := func(a int) int {
        base += a
        return base
    }
    sub := func(b int) int {
        base -= b
        return base
    }
    return add, sub
}

func main() {
    fun1, fun2 := calc(20)
    r := fun1(10)
    fmt.Printf("r: %v\n", r)
    r = fun2(3)
    fmt.Printf("r: %v\n", r)
}
```

### defer
关键字defer用于注册延时调用
这些调用直到 return 才被执行。
多个defer，先进后出
defer语句中的变量，在defer声明时就决定了
用于关闭文件句柄，锁资源释放，数据库连接释放
```go
func f1(){
    fmt.Println("start")
    defer fmt.Println("step1")
    defer fmt.Println("step2")
    fmt.Println("end")
}
func main() {
    f1()
}
start
end
step2
step1
```

### init函数
先于main函数自动执行


## 类型
### 类型别名和类型定义
```go
类型定义
type NewType Type
类型别名
type NewType=Type
```

区别

1. 类型定义相当于定义了一个全新的类型，与之前的类型不同。

但是类型别名并没有定义一个新的类型，而是使用一个别名来替换之前的类型。

2. 类型别名只在代码中存在，在编译完成后并不会存在该别名。
3. 因为类型别名和原来类型一致，所以可以调用原来类型所拥有的方法。

但重新定义的类型不可以调用之前的方法

### 类型断言
type-switch方法：
下面的代码片段展示了一个类型分类函数，它有一个可变长度参数，可以是任意类型的数组，它会根据数组元素的实际类型执行不同的动作：
```go
func classifier(items ...interface{}) {
    for i, x := range items {
        switch x.(type) {
        case bool:
            fmt.Printf("Param #%d is a bool\n", i)
        case float64:
            fmt.Printf("Param #%d is a float64\n", i)
        case int, int64:
            fmt.Printf("Param #%d is a int\n", i)
        case nil:
            fmt.Printf("Param #%d is a nil\n", i)
        case string:
            fmt.Printf("Param #%d is a string\n", i)
        default:
            fmt.Printf("Param #%d is unknown\n", i)
        }
    }
}
```
可以这样调用此方法：classifier(13, -14.3, "BELGIUM", complex(1, 2), nil, false) 。
在处理来自于外部的、类型未知的数据时，比如解析诸如 JSON 或 XML 编码的数据，类型测试和转换会非常有用。


## 接口
### 接口方法集
Go 语言规范定义了接口方法集的调用规则：
类型 *T 的可调用方法集包含接受者为 *T 或 T 的所有方法集
类型 T 的可调用方法集包含接受者为 T 的所有方法
类型 T 的可调用方法集不包含接受者为 *T 的方法

