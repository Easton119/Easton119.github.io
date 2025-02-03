---
title: 使用Templater在Obsidian中进行html代码块插入与underline插件
createTime: 2024/12/24
categories:
  - 工作流搭建
  - 博客
tags:
  - Obsidian
permalink: /article/0fltmyy4/
---

### 场景

在Obsidian中需要对文字进行标注时
1. 可以用**增强编辑**插件或**highlighsrt**插件对文字背景或者文字本身进行高亮处理
2. 可以使用underline插件标记下划线
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250124221654.png)
那么如何进行有颜色的下划线标注呢？

### 实现下划线的不完全方案

使用**Templater**插件

#### 在obsidian的theme.css文件中创建一个类 
```css
.underline_1 {
  text-decoration: underline red; /*下划线*/
  text-underline-offset: 4.6px; /*下划线与文本间距*/
}
```

然后我们就可以在文本中手动插入html代码实现红色的下划线了
```html
<span class = "underline_1">文本内容</span>
```


#### 创建一个模板文件 template1.md
```html
<span class = "t6999_14"><% tp.file.selection() %></span>
```
其中`<% tp.file.selection() %>` 是 Templater 的占位符，会将当前选中的文本放入模板中。如果没有选中任何内容，则会插入空的 `<span>`。


> [!NOTE] 注意
> 如果该模板文件路径在某一个仓库目录下面，那么在其他仓库中是没法使用的



#### 将模板与热键绑定

在插件中找到该处，先设置模板文件的路径
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250124222854.png)
再点击右边加号，选择Insert行键入快捷键 ，比如Ctrl+W

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250124223017.png)
然后选中文字后ctrl+w即可
![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250124223233.png)

> 然后根据自己需要的样式修改css就行了



### 问题

然而，经过测试，很容易发现这样插入模板中的html代码会出现问题，会改变原来的html格式。

打开开发者工具（ctrl+shift+i）,可以看见会在span标签外面再套上div代码块，造成多余的换行。

![image-20250125110424336](https://fastly.jsdelivr.net/gh/easton119/oss/test111/image-20250125110424336.png)

这个是templater插件渲染的问题，修改起来太麻烦了。



### 更方便和完善的方案

使用**underline**插件，对underline插件提供的样式进行修改。

打开underline插件的main.js文件，在其中找到
```js
...
Underline.prototype.wrapper = function (editor, view, prefix, suffix) {
    if (prefix === void 0) { prefix = "<u>"; }
    if (suffix === void 0) { suffix = "</u>"; }
    ...
}
```

修改为：

``````js
if (prefix === void 0) { prefix = '<span class="underline_1">'; }
if (suffix === void 0) { suffix = "</span>"; }
``````

重启obsidian，成功



