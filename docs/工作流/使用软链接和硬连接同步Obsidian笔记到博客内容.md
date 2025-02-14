---
title: 使用软链接和硬链接同步Obsidian笔记到博客内容
createTime: 2024/11/31
tags:
  - Obsidian
categories:
  - 工作流搭建
  - 博客
permalink: /article/yxz5z1ts/
---


## 介绍
当我使用 **Obsidian** 作为知识管理工具，并希望自动同步笔记到博客文件夹下时，
如果手动复制粘贴文件，容易出现内容不同步的问题。

而使用 **软链接（Symbolic Link）** 和 **硬链接（Hard Link）** 能实现Obsidian 笔记与博客内容保持实时同步。

| **方式**                 | **特点**                     | **适用场景**                 |
| ---------------------- | -------------------------- | ------------------------ |
| **软链接（Symbolic Link）** | 只是指向原文件的“快捷方式”，删除原文件后，链接失效 | Obsidian 笔记和博客在不同目录      |
| **硬链接（Hard Link）**     | 创建多个指向相同数据的文件，删除原文件后仍然有效   | 需要保证 Obsidian 笔记和博客在同一分区 |

## 软链接使用

假设博客目录和 Obsidian 笔记存放路径如下：
- 博客目录：`D:\users\Blog\source\_posts`
- Obsidian 笔记路径：`C:\Users\Easton\Desktop\Obsidian\存档\0.x后端\0、1java入门学习\java笔记.md`

```
mklink "D:\users\Blog\source\_posts\java笔记.md" "C:\Users\Easton\Desktop\Obsidian\存档\0.x后端\0、1java入门学习\java笔记.md"
```

- `mklink "目标路径" "源文件路径"`：创建指向源文件的软链接。

如果希望链接整个目录，而不仅仅是单个文件，可以使用 `/D` 参数：
```
mklink /D "D:\users\Blog\source\_posts\后端笔记" "C:\Users\Easton\Desktop\Obsidian\存档\0.x后端"
```

## 硬链接使用

适用于**文件**，必须在**同一磁盘分区**，删除任意一个都不影响数据。

硬链接单个笔记：
想让 Obsidian 中的 `my-note.md` 自动同步到博客：
```
mklink /H "D:\users\vuepress\my-project\docs\后端\cpp\手写mysql连接池.md" "D:\Documents\Obsidian\0.3C&C++学习\手写连接池\mysql连接池.md"
```

+ `mklink /H "目标地址" "源文件地址"`
