---
title: gin框架基础
tags:
  - Go
categories:
  - 后端
  - Go
createTime: 2024/06/02 11:18:20
permalink: /article/uibw1szt/
---



[Gin框架介绍及使用 - 李文周的博客](https://www.liwenzhou.com/posts/Go/gin/)

### 安装使用

1. 首先 go mod init project名称 创建go.mod
2. 下载安装gin
```go
go get -u github.com/gin-gonic/gin
```

## Gin渲染
### JSON渲染
示例：
注意，在golang中定义结构体时，如果字段名的首字母大写，那么这个字段就是可导出的，即可以在包外访问并修改的，而如果字段名的首字母小写，这个字段就是**不可导出的**。
灵活使用 tag 来对结构体字段定制化操作
```go
package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)
func sayHello(c *gin.Context){
	// 结构体 ，灵活使用 tag 来对字段定制化操作
	var data struct{
		Name string `json:"name"`
		Age int
		Message string
	}
	data.Age=18
	data.Name="aaa"
	data.Message="123k1j3"
	/* data:=map[string]interface{}{
		"name":"小王子",
		"age":18,
		"message":"hello,golang",
	} */
	/* c.JSON(200,gin.H{
		"message":"hello,gin !!",
	}) */
	c.JSON(http.StatusOK,data)
}

func main() {
	r:=gin.Default()
	r.GET("/hello",sayHello)
	r.Run()
}
```
gin.H 等同于使用 map的方式

## 获取参数
### 参数绑定
c.ShouldBind(&loginInfo)
```go
type userInfo struct{
	User		string `form:"user" json:"user" binding:"required"`
	Password	string `form:"password" json:"password" binding:"required"`
}
func getUserinfo(c *gin.Context){
	var loginInfo userInfo
	err:=c.ShouldBind(&loginInfo)
	if err!=nil {
		c.JSON(http.StatusBadRequest,gin.H{
			"err":err,
		})
	}else{
		c.JSON(http.StatusOK,loginInfo)
	}
}
func main() {
	r:=gin.Default()
	r.GET("/hello/:username/:address",sayHello)
	r.GET("/login",getUserinfo)
	r.Run()
}
```

# gorm使用
下列使用了mysql数据库，
首先要先
go get gorm.io/driver/mysql
go get gorm.io/gorm
```go
package main

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
type UserInfo struct{
	ID int
	Name string
	Address string
}
func main() {
	dsn := "root:123456@tcp(127.0.0.1:3306)/db01?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn),&gorm.Config{})
	// db,err:=sql.Open("mysql",dsn)
	if err != nil {
		panic(err)
	}
	//自动迁移
	db.AutoMigrate(&UserInfo{})
	//创建数据行
	// u1:=UserInfo{2,"xig","beijing"}
	// db.Create(&u1)
	//查询	
	var u UserInfo
	db.First(&u)//表中的第一条数据保存到u中
	fmt.Printf("u: %#v\n", u)
	//更新
	db.Model(&u).Update("Address","shanghai")
	//删除
	db.Delete(&u)
}
```

#### gorm创建记录及字段默认值
如果是零值，数据库会默认忽略。
可以使用指针或 Scanner/Value接口
```go
// 使用指针
type User struct {
  ID   int64
  Name *string `gorm:"default:'小王子'"`
  Age  int64
}
user := User{Name: new(string), Age: 18))}
db.Create(&user)  // 此时数据库中该条记录name字段的值就是''
```

```go
// 使用 Scanner/Valuer
type User struct {
	ID int64
	Name sql.NullString `gorm:"default:'小王子'"` // sql.NullString 实现了Scanner/Valuer接口
	Age  int64
}
user := User{Name: sql.NullString{"", true}, Age:18}
db.Create(&user)  // 此时数据库中该条记录name字段的值就是''
```

tips：在操作前加上 .Debug()可以打印出sql语句
