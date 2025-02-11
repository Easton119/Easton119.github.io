---
title: Obsidian构建(持续更新)
createTime: 2025/01/17
tags:
  - 博客
categories:
  - 工作流搭建
  - Obsidian
permalink: /article/uk1p59hi/
outline: deep
---
### 自定义css设置

>Q: 想要设置行间距和代码块间距

找到 选项->外观->css代码片段
打开文件夹，新建文件例如：line-hight.css
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250207220234.png)


```
/* 编辑模式下的行间距 */
.cm-s-obsidian .cm-line {
    line-height: 1.6; /* 行间距 */
}
.markdown-source-view.is-live-preview .HyperMD-codeblock,
.markdown-reading-view pre > code {
    line-height: 1.4em;
}
```

编辑完成后，回到设置界面，
然后启用 line-height


### 元数据模板插入

在博客中需要用到的yaml front matter , 可以通过模板进行插入。
在某个文件夹下面创建一个template.md,输入内容：

```
---
title: <% tp.file.title %>
createTime: <% tp.date.now("YYYY/MM/DD") %>
tags:
categories:
permalink:
outline: deep
---
```

其中 title 初始化为文件名 ， createTime 初始化为当前日期

![](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250208103133.png)