---
title: Hexo butterfly主题博客搭建
# date: 2024-03-10 13:53:25
createTime: 2024/03/10
tags:
  - Hexo
categories:
  - 工作流搭建
  - 博客
---





### Why Hexo?

高中时使用的是博客园，

后面上大学使用了本地markdown + 语雀 来记录知识，

但其他的线上平台终究不如github令人心安，语雀更是众所周知包含隐患。

只不过 Hexo 的主题我始终找不到简洁而又好看的，譬如 Tree ，3-Hexo等主题虽简洁但不太如我所想，不方便定制。

最终还是尝试butterfly，毕竟网上的资料很多，有发挥的空间。



### How To Build My Blog?

Hexo的搭建不再赘述，仅仅粘贴下我个人对于butterfly的修改。

##### 字体参考：

[hexo butterfly主题下更换字体 | ZHI'S BLOG (jingzhi1208.github.io)](https://jingzhi1208.github.io/2021/11/26/hexo-butterfly主题下更换字体/)

使用了HarmonyOS_Sans_SC_Regular.ttf 和 JetBrainsMono-Regular.ttf，感觉这两个挺不错的。

整体部分：

``````yml
# Global font settings
# Don't modify the following settings unless you know how they work (非必要不要修改)
font:
  global-font-size:
  code-font-size:
  font-family: 'HarmonyOS Sans SC'
  code-font-family:

# Font settings for the site title and site subtitle
# 左上角網站名字 主頁居中網站名字
blog_title_font:
  font_link:
  font-family: 'HarmonyOS Sans SC'
``````

文章部分：

````yml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    # - <link rel="stylesheet" href="/xxx.css">
    - <link rel="stylesheet" href="/css/font.css">
  bottom:
    # - <script src="xxxx"></script>
````

