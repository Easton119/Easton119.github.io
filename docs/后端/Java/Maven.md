---
title: Maven
createTime: 2023/12/02
tags:
  - Maven
categories:
  - 后端
  - Java
permalink: /article/ky3tf11a/
---

仓库：本地仓库，远程仓库（私服），中央仓库

## 依赖管理
坐标：
组织名，模块名，版本

```xml
<groupId>org.example</groupId>  
<artifactId>MavenDemo01</artifactId>  
<version>1.0-SNAPSHOT</version>
```

maven仓库：
https://mvnrepository.com/


**依赖传递**
排除依赖：指主动断开依赖。exclusions ,exclusion。排除依赖时不需要版本

**依赖范围**
通过scope设置范围:
默认compile，还有test，provided，runtime


**生命周期**

有三套独立的生命周期：clean，default，site

生命周期的执行实际是由插件完成的。



![](https://web-tlias1137.oss-cn-beijing.aliyuncs.com/document/Pasted%20image%2020230906214956.png)