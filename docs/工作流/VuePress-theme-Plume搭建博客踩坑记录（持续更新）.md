---
title: VuePress-theme-Plume搭建博客踩坑记录（持续更新）
date: 2025-01-31
tags:
  - VuePress
categories:
  - 工作流搭建
  - 博客
---
>之前博客是基于Hexo搭建，这篇是基于VuePress搭建

关于Hexo和VuePress的比较

|            | VuePress  | Hexo    |
| ---------- | --------- | ------- |
| 适用场景       | 技术文档      | 个人博客    |
| 学习曲线       | 略高（需要Vue） | 低（简单易用） |
| 主题丰富度      | 较少        | 超级丰富    |
| Markdown扩展 | 强大（Vue组件） | 普通      |
| SEO友好      | 需要额外优化    | 默认良好    |
| 构建速度       | 慢（Vue运行时） | 快（纯静态）  |
|            |           |         |

>[!important]
   参考文档：[安装/使用 | Plume 主题](https://theme-plume.vuejs.press/guide/quick-start/)
>Action构建失败原因： [Action failed with "The process '/usr/bin/git' failed with exit code 128" - Stack Overflow](https://stackoverflow.com/questions/76023778/action-failed-with-the-process-usr-bin-git-failed-with-exit-code-128)



命令行`npm run docs:dev` 运行

以下记录从新手角度通过命令行安装plume后的调整过程与注意点~~（踩坑过程）~~

1.环境配置
注意node，npm的版本。
个人使用node v22.13.1 , npm 10.9.2

2.在navbar.ts中

``````
items: [
  { text: '示例', link: '/demo/README.md' },
  { text: '学习2', link: '/study/README.md' },
]
``````
去掉示例中link中的`notes`~~（因为感觉没有什么用）~~


3.设置
在navbar.ts , notes.ts 中
dir 是 物理路径名字
link 是 链接名字


4.部署

通过Github Pages进行部署，
首先我的博客网址是在 `https://<username>.github.io/<reponame>`
所以在 config.ts 的base 中 加上了`/<repo-name>/`

然后是创建 `/github/workflows/docs.yml` 
注意文件夹名字别写错了，
然后docs.yml直接照搬文档里面的，不用将`pnpm` 改成`npm`

Settings > Action > General > Workflow Permissions
把权限勾选成 `Read and Write permissions`
然后 Action构建成功了！

前往 GitHub 仓库的设置页面，选择 `Deploy from a branch` 而不是`GitHub Actions`,再选择 `gh-pages` 作为 GitHub Pages 的源。
然后就能直接进入网址了

![image.png](https://fastly.jsdelivr.net/gh/easton119/oss/test111/20250201130830.png)

