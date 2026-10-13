---
translationId: git-beginner-guide
locale: zh
title: Git 傻瓜式教程：新生从零入门
description: 用一篇文章搞懂 Git 和 GitHub，并完成第一次提交与推送。
pubDate: 2026-08-09
tags:
  - Git
  - 教程
  - 新生指南
draft: false
---

第一次接触 Git 时，很多人都会被一串英文命令劝退：`add`、`commit`、`push` 到底是什么？

先说结论：**Git 是记录文件修改历史的工具；GitHub 是把这些记录放到网上、方便备份和协作的网站。**

你不需要一次学完 Git。先学会下面这条流程，就足够完成绝大多数作业和小组项目：

```text
改文件 → git add → git commit → git push
```

## 1. Git 和 GitHub 有什么区别？

把它们想成写作业：

| 名字 | 可以理解成 | 做什么用 |
| --- | --- | --- |
| Git | 电脑里的“存档系统” | 记录每次修改，可以回到旧版本 |
| GitHub | 网上存放代码的地方 | 备份项目、和同学协作、提交作业 |
| 仓库（repository） | 一个项目文件夹 | 放代码、文档、图片等项目文件 |
| 提交（commit） | 一次带说明的存档 | 保存一个阶段性的修改 |

Git 可以不联网使用；只有把内容上传到 GitHub 时才需要网络。

## 2. 第一次使用前，要准备什么？

你需要准备三样东西：

1. 安装 Git。
2. 注册并登录 GitHub 账号。
3. 安装一个编辑器，推荐 VS Code。

安装 Git 后，打开 VS Code 的终端，输入：

```bash
git --version
```

如果能看到类似 `git version 2.x.x` 的内容，说明 Git 已经安装好了。

接着只需要设置一次你的名字和邮箱：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的 GitHub 邮箱"
```

这两项会显示在提交记录中。邮箱最好和 GitHub 账号使用的邮箱一致。

## 3. 先记住这个“文件流动图”

Git 最容易让人困惑的地方，是它把“保存”拆成了几步：

```text
工作区 ──git add──> 暂存区 ──git commit──> 本地仓库 ──git push──> GitHub
```

- **工作区**：你正在修改的文件。
- **暂存区**：你挑出来、准备这次提交的文件。
- **本地仓库**：已经保存在你电脑里的版本历史。
- **GitHub**：已经上传到网上的版本。

所以：`commit` 不等于上传，`push` 才是上传。

## 4. 场景一：把老师或同学的项目下载到电脑

大多数新生第一次使用 Git，都是加入一个已经存在的项目。

### 第一步：复制仓库地址

进入项目的 GitHub 页面，点击绿色的 **Code** 按钮，复制 HTTPS 地址。它通常长这样：

```text
https://github.com/用户名/项目名.git
```

### 第二步：克隆项目

在你想存放项目的文件夹里打开终端，输入：

```bash
git clone https://github.com/用户名/项目名.git
```

然后进入项目文件夹：

```bash
cd 项目名
```

`clone` 的意思是：把 GitHub 上的项目完整下载到电脑，同时保留它的历史记录和远程连接。

## 5. 场景二：完成一次标准提交

假设你已经修改了一个文件，例如 `README.md`。

### 第一步：查看当前状态

```bash
git status
```

它会告诉你哪些文件被修改了、哪些文件准备提交。刚开始时，不懂就先运行这条命令，它不会修改任何东西。

### 第二步：把要提交的文件加入暂存区

只提交一个文件：

```bash
git add README.md
```

提交当前文件夹内的全部改动：

```bash
git add .
```

新手建议：提交前先运行一次 `git status`，确认没有把不该上传的文件一起加进去。

### 第三步：创建一次提交

```bash
git commit -m "完成 README 自我介绍"
```

引号里的内容叫“提交说明”。它应该描述你做了什么，而不是只写“改了一下”或“111”。

好的例子：

```text
新增登录页面
修复计算器除零错误
补充第一周实验报告
```

### 第四步：上传到 GitHub

```bash
git push
```

第一次推送时，如果 Git 提示需要认证，按提示登录 GitHub 即可。现在 GitHub 通常不再支持直接用账号密码操作 Git；需要在浏览器完成授权，或使用 Personal Access Token（个人访问令牌）。

完成后刷新 GitHub 项目页面，就应该能看到你的修改。

## 6. 每天写代码前，先做这一件事

如果项目是多人协作的，开始前先获取同学已经上传的修改：

```bash
git pull
```

最简单的习惯是：

```text
开始写之前：git pull
写完以后：git add → git commit → git push
```

这样能大幅减少和同学修改冲突的概率。

## 7. 第一次自己创建项目

如果你是从零开始写一个项目，可以这样做：

```bash
mkdir my-project
cd my-project
git init
```

`git init` 会让这个普通文件夹变成 Git 仓库。

创建几个文件后，完成第一次本地提交：

```bash
git add .
git commit -m "初始化项目"
```

然后在 GitHub 新建一个空仓库，再把本地项目连接到它：

```bash
git branch -M main
git remote add origin https://github.com/用户名/项目名.git
git push -u origin main
```

这段命令只需要在第一次连接 GitHub 时运行一次。以后在这个项目中，只需要 `git push` 就行。

## 8. 两个安全的“后悔药”

### 不想提交某个文件了

如果你刚刚运行过 `git add`，但又不想提交某个文件：

```bash
git restore --staged 文件名
```

例如：

```bash
git restore --staged README.md
```

它只会把文件从暂存区拿出来，**不会删除你写的内容**。

### 想看看自己改了什么

```bash
git diff
```

它会显示还没有提交的修改内容。

## 9. 常见报错翻译

### `nothing to commit`

意思是“没有可以提交的修改”。可能是你还没改文件，也可能是刚刚已经提交过了。运行 `git status` 看看即可。

### `failed to push some refs`

通常说明 GitHub 上有新内容，而你的电脑还没有下载。先运行：

```bash
git pull
```

如果没有冲突，再运行：

```bash
git push
```

### `Authentication failed`

说明 GitHub 登录或权限有问题。确认你登录的是正确账号，并确认你拥有该仓库的写入权限。

### `Failed to connect to github.com port 443`

说明当前网络无法连接 GitHub，不是你的代码写错了。检查网络、代理或 VPN 后再试。

## 10. 新生最常用命令速查表

```bash
git status                 # 查看现在的状态
git pull                   # 下载远程最新修改
git add .                  # 暂存所有当前修改
git add 文件名             # 暂存一个文件
git commit -m "说明"       # 创建本地提交
git push                   # 上传提交到 GitHub
git log --oneline          # 查看提交历史
git diff                   # 查看尚未提交的改动
```

## 最后提醒

Git 不是考试题，也不需要靠死记硬背。刚开始只要坚持下面这个流程：

```text
git pull → 写代码 → git status → git add → git commit → git push
```

遇到报错时，先复制报错内容，再运行 `git status`。不要在不了解作用时随便执行网上找到的 `git reset --hard`、`git push --force` 等命令；它们可能覆盖你或同学的改动。

多用几次，你会发现 Git 只是一个认真帮你存档、同步和协作的工具。
