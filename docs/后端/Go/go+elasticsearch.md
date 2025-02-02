---
title: go+elasticsearch实现站内搜索(1)
tags:
  - Go
  - Elasticsearch
categories:
  - 后端
  - Elasticsearch
createTime: 2024/06/02 11:18:20
permalink: /article/tip66oko/
---





## 前言

`ElasticSearch`是一个分布式、`RESTful`风格的搜索和数据分析引擎，在国内简称为`ES`；使用`Java`开发的，底层基于`Lucene`是一种全文检索的搜索库，直接使用使用Lucene还是比较麻烦的，[Elasticsearch](https://cloud.tencent.com/product/es?from_column=20065&from=20065)在Lucene的基础上开发了一个强大的搜索引擎。前面说这么多，其实还是不知道他是干什么的。简单来说，他就是一个搜索引擎，可以快速存储、搜索和分析海量数据。我们常用的`github`、`Stack Overflow`都采用的`Es`来做的。



## 准备

首先是版本选择问题，

我一共尝试了3个版本：

1. v8版本

   去除安全限制：

   在 config/elasticsearch.yml 文件中

   ````yml
   xpack.security.enabled: false
   xpack.security.http.ssl.enabled: false
   ````

   我们把上面的两行添加到 Elasticsearch 的配置文件中。然后启动 Elasticsearch。这样启动后的 Elasticsearch 就没有安全配置了。你可以通过 http://localhost:9200 来进行访问。启动后的 Kibana 我们也不需要输入用户名及密码了。

2. v7.17.15

   该版本不能直接运行，要更改yml文化中的ip等字段

3. v7.17.18可以直接运行，不需要修改文件

注意：

​	elasticsearch 和 kibana ，分词器插件版本要一致

> 出现报错：[.kibana] Action failed with 'Request timed out'. Retrying attempt 1 in 2 seconds.
>
> 原因：因为不小心在es启动的cmd窗口中鼠标不小心选中了任何字符串都会导致es的输出受阻，进而导致kibana启动失败



## 学习

(ps:基于v7版本)

#### 一、索引库 mapping属性

常见的mapping属性包括：

+ type :字段数据类型，常见简单类型有：
  + 字符串 ：text (可分词的文本)、keyword(精确值)
  + 数值：long , integer , short , byte , double , float
  + 布尔：boolean
  + 日期：data
  + 对象：object
+ index : 是否创建索引，默认为true
+ analyzer : 使用哪种分词器
+ properties : 该字段的子字段

#### 二 、创建索引库与修改

````yml
GET /

# 测试
POST /_analyze
{
  "text": "学习elastic",
  "analyzer": "ik_max_word"
}

# 创建索引库
PUT /heima
{
  "mappings": {
    "properties": {
      "info":{
        "type": "text",
        "analyzer": "ik_smart"
      },
      "email":{
        "type":"keyword",
        "index": false
      },
      "name":{
        "type": "object", 
        "properties": {
          "firstName":{
            "type":"keyword"
          },
          "lastName":{
            "type":"keyword"
          }
        }
      }
    }
  }
}
````



修改索引库，添加新字段

````yml
#修改索引库，添加新字段
PUT /heima/_mapping
{
  "properties":{
    "age":{
      "type":"integer"
    }
  }
}
````



#### 三 、对文档的操作

````yml
# 插入文档
POST /heima/_doc/1
{
  "info":"程序员go讲师",
  "email":"zy@qq.com",
  "name":{
    "firstName":"赵",
    "lastName":"小云"
  },
  "age":20
}
# 查询文档
GET /heima/_doc/1
# 删除文档
DELETE /heima/_doc/1
````



修改文档操作



![image.png](https://web-tlias1137.oss-cn-beijing.aliyuncs.com/document/1709815945221-e0cd8ea4-9c48-4d1e-98db-4ddee161a4a4.png)
