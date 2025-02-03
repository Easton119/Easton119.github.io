---
title: 使用软链接自动同步 Obsidian 笔记到 Hexo 博客
createTime: 2024/11/31
tags:
  - Obsidian
  - Hexo
categories:
  - 工作流搭建
  - 博客
permalink: /article/yxz5z1ts/
---
在日常学习和工作中，许多人使用 **Obsidian** 记录笔记，同时用 **Hexo + GitHub Pages** 搭建个人博客。如果希望将 Obsidian 中的部分笔记同步到 Hexo，而不想手动复制文件，可以使用 **软链接（Symbolic Link）** 进行自动管理。

---

## **一、软链接的作用**

软链接类似于 Windows 的快捷方式，它指向目标文件或目录，而不会实际复制文件。这样做有以下优点：

- **节省存储空间**：避免重复存储相同的笔记文件。
- **自动同步**：修改 Obsidian 笔记后，Hexo 博客内容也会随之更新。
- **管理简便**：不影响 Obsidian 的笔记存储结构，同时 Hexo 能正常读取文件。

---

## **二、需求场景**

假设你的博客目录和 Obsidian 笔记存放路径如下：

- **Hexo 博客目录**：`D:\users\Blog\source\_posts`
- **Obsidian 笔记路径**：`C:\Users\Easton\Desktop\Obsidian\存档\0.x后端\0、1java入门学习\java笔记.md`

目标是让 `java笔记.md` **自动出现在 Hexo 博客的 `_posts` 目录下**，无需手动复制。

---

## **三、在 Windows 上创建软链接**

### **1. 以管理员身份打开命令提示符**

在 Windows 搜索栏输入 `cmd`，右键点击 **命令提示符**，选择 **"以管理员身份运行"**。

### **2. 创建软链接**

在命令行中输入：
```
mklink "D:\users\Blog\source\_posts\java笔记.md" "C:\Users\Easton\Desktop\Obsidian\存档\0.x后端\0、1java入门学习\java笔记.md"
```

#### **命令说明**

- `mklink "目标路径" "源文件路径"`：创建指向源文件的软链接。
- `"D:\users\Blog\source\_posts\java笔记.md"` 是 Hexo 需要的博客文件路径。
- `"C:\Users\Easton\Desktop\Obsidian\存档\0.x后端\0、1java入门学习\java笔记.md"` 是 Obsidian 笔记的真实存储位置。

如果希望链接整个目录，而不仅仅是单个文件，可以使用 `/D` 参数：

```
mklink /D "D:\users\Blog\source\_posts\后端笔记" "C:\Users\Easton\Desktop\Obsidian\存档\0.x后端"
```
这样，`0.x后端` 目录中的所有笔记都会同步到博客的 `_posts` 目录。


## **四、验证软链接是否成功**

可以运行以下命令：
```
dir D:\users\Blog\source\_posts
```
如果创建成功，会看到类似的输出：
```
2024/01/31  10:00    <SYMLINK>      java笔记.md [C:\Users\Easton\Desktop\Obsidian\存档\0.x后端\0、1java入门学习\java笔记.md]
```
其中 `<SYMLINK>` 说明 `java笔记.md` 是一个软链接，而不是实际文件。

## **五、运行 Hexo 生成博客**

软链接创建成功后，可以像往常一样运行 Hexo：
```
hexo clean
hexo g -d
```

这样，Hexo 会自动读取 Obsidian 笔记，并将其部署到博客中。

---

## **六、删除软链接**

如果想删除软链接，但保留原始笔记：
```
del "D:\users\Blog\source\_posts\java笔记.md"
```

如果是删除 **文件夹软链接**：
```
rmdir "D:\users\Blog\source\_posts\后端笔记"
```

## **七、软链接与复制文件的对比**

|方式|优点|缺点|
|---|---|---|
|**软链接**|自动同步，节省空间，不占用额外存储|需要手动创建链接|
|**复制文件**|操作简单，不影响原文件|需要定期手动更新笔记|

如果希望博客内容能够随着 Obsidian 笔记的更新而自动同步，使用 **软链接** 是更高效的选择。

---

## **八、总结**

- 软链接可以 **让 Obsidian 笔记自动同步到 Hexo 博客**，避免手动复制。
- 可以选择**单个文件**或者**整个文件夹**进行软链接，操作灵活。
- 创建后，Hexo 可以像处理普通 Markdown 文件一样解析笔记内容。
- 适用于希望长期维护 Hexo 博客，同时使用 Obsidian 记录学习笔记的用户。

这种方法能有效减少手动操作，提高笔记管理的效率。