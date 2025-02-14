---
title: Git使用问题与解决
createTime: 2025/02/09
tags: null
categories: null
permalink: /article/dqe565hw/
outline: deep
---
>Linux环境：Ubuntu 22.04.2 LTS
### 1、linux下连不上Git

#### 临时解决方案-修改修改hosts文件：
尝试在系统的hosts文件中添加以下条目来映射GitHub的IP地址：

`sudo vim /etc/hosts`

在文件的末尾添加以下内容：

`140.82.113.4 github.com 140.82.114.4 gist.github.com`

保存文件并尝试重新连接到GitHub。(:wq!)
#### 其他方案：
+ 安装clash等vpn
+ 使用SSH

#### 使用校园网时git被屏蔽

ping github.com 能ping通
telnet github.com 443 失败，说明 443 端口被拦截（学校的网络可能屏蔽了 GitHub），
通过切换DNS解决：
`sudo vim /etc/resolv.conf`
添加：
`nameserver 8.8.8.8`
`nameserver 8.8.4.4`

然后运行：`sudo systemctl restart NetworkManager`

然后git push 成功！


### 2、获取最新的Git版本
Ubuntu 官方软件源的 Git 版本通常较旧，因此推荐使用 Git 官方维护的 **PPA 源** 来安装最新版本：
```
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt update
sudo apt install git -y
git --version
```


### 3、Git初始化时

#### 初始化本地仓库时，一般命令行

```
# 初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "Initial commit"

# 将当前分支重命名为 main
git branch -M main

# 添加远程仓库
git remote add origin https://github.com/yourusername/yourrepository.git

# 推送本地分支到远程仓库，并设置默认上游分支
git push -u origin main
```

##### 1. `git init` 后的分支命名问题

设定默认分支为 `main`
`git config --global init.defaultBranch main`

##### 2、detected dubious ownership in repository

Git 发现仓库目录的所有者与当前用户不匹配，通常是因为仓库是在 root 用户或其他用户下创建的。
**手动添加该目录为安全目录**：
`git config --global --add safe.directory "/home/user/project"`


##### 3、`fatal: refusing to merge unrelated histories`

**本地仓库和远程仓库是两个完全独立的历史**，通常是：

- 远程仓库已有 `README.md` 或 `.gitignore` 文件，而本地是空仓库。
- 本地已有提交，但远程是空仓库。

允许合并不相关的历史：
`git pull --allow-unrelated-histories origin main`



##### 4、 `git pull` 时提示 `divergent branches`

本地和远程 `main` 分支的提交历史不同步，Git 需要你选择如何合并。
**使用 `merge`（默认方式）**：
```
git config pull.rebase false
git pull origin main
```

**使用 `rebase`（保持线性历史）**：
```
git config pull.rebase true
git pull --rebase origin main
```


由3 和 4 联合起来可以使用：
远程仓库已有提交但本地也有代码：
`git pull --no-rebase --allow-unrelated-histories origin main`
**拉取远程 `main` 分支的代码，并合并到本地仓库**，即使本地和远程仓库**没有共同的历史**，Git 也会允许合并。