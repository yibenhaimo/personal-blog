---
translationId: terminal-powershell-cmd-for-beginners
locale: zh
title: 终端入门：CMD 和 PowerShell 到底有什么区别？
description: 面向零基础新生，学会打开终端、切换文件夹、查看文件，并分清 CMD 与 PowerShell。
pubDate: 2026-10-11
tags:
  - 计算机基础
  - Windows
  - PowerShell
  - CMD
draft: false
---

刚开始学编程时，很多人看到黑色窗口和闪烁光标就紧张：这是不是“黑客界面”？输错命令会不会把电脑弄坏？

不用怕。**终端只是用文字操作电脑的一种方式。** 平时你用鼠标点文件夹、打开软件；在终端里，你把这些操作写成命令。

本文只讲 Windows 上最常见的两个终端：**CMD** 和 **PowerShell**。看完后，你可以自己在终端里找到文件、创建文件夹、运行 Git 命令，并知道哪些命令要谨慎。

## 1. 什么是终端？

终端也常被叫作命令行、控制台。它让你通过输入命令和电脑交流。

例如，在资源管理器里查看当前文件夹，你会双击打开它；在终端中，可以输入：

```powershell
dir
```

然后按回车，终端会列出这个文件夹里的内容。

终端并不比鼠标操作“更高级”，只是更适合重复操作、开发工作和批量处理文件。

## 2. CMD 和 PowerShell 是什么关系？

Windows 上常见的命令行工具主要有这两个：

| 工具 | 全名 | 特点 | 适合谁 |
| --- | --- | --- | --- |
| CMD | Command Prompt（命令提示符） | 历史很久、命令简单、兼容旧教程 | 初学者能看懂很多旧命令 |
| PowerShell | Windows PowerShell / PowerShell | 功能更强、能处理对象、自动化能力更好 | 现在更推荐学习和使用 |

你可以把 CMD 看成一把基础螺丝刀，把 PowerShell 看成一套工具箱。

二者有不少相同或相似的命令，例如 `cd`、`mkdir`、`cls`。但也有许多命令的写法不同。**跟着教程输入命令时，先看清它是给 CMD、PowerShell 还是 Git Bash 写的。**

## 3. 怎样打开终端？

最简单的方法：

1. 按键盘上的 `Win` 键；
2. 输入 `PowerShell` 或 `cmd`；
3. 按回车。

如果你在使用 VS Code，可以按：

```text
Ctrl + `
```

打开内置终端。右上角的下拉菜单可以切换 PowerShell、CMD 或 Git Bash。

对刚开始学习的 Windows 用户，建议默认使用 **PowerShell**。后面看到 CMD 命令也不要慌，很多基础操作只是名字不同。

## 4. 先看懂终端里的“当前位置”

打开 PowerShell 后，你通常会看到类似：

```text
PS C:\Users\Alice>
```

它的意思是：你现在正在 `C:\Users\Alice` 这个文件夹里操作。

路径可以理解成文件的地址：

```text
C:\Users\Alice\Desktop\my-project
```

从左到右分别表示：磁盘、用户文件夹、桌面和项目文件夹。

## 5. 最常用的五个操作

### 5.1 查看当前文件夹里有什么

在 CMD 和 PowerShell 中都可以输入：

```text
dir
```

在 PowerShell 中也可以用：

```powershell
ls
```

它们都会列出当前文件夹的文件和子文件夹。

### 5.2 进入一个文件夹：`cd`

假设当前目录下有一个 `my-project` 文件夹：

```powershell
cd my-project
```

如果文件夹名字有空格，要加引号：

```powershell
cd "My Project"
```

也可以直接输入完整路径：

```powershell
cd "C:\Users\Alice\Desktop\my-project"
```

### 5.3 返回上一级：`cd ..`

```powershell
cd ..
```

这里的 `..` 表示“上一级文件夹”。

常用的两个符号是：

| 写法 | 含义 |
| --- | --- |
| `.` | 当前文件夹 |
| `..` | 上一级文件夹 |

例如 `cd .\src` 的意思就是“进入当前文件夹下的 src”。

### 5.4 创建文件夹：`mkdir`

```powershell
mkdir demo
```

这会在当前位置创建一个叫 `demo` 的文件夹。

### 5.5 清空屏幕：`cls`

```text
cls
```

它只会清掉终端显示的历史文字，不会删除任何文件。

## 6. PowerShell 和 CMD 常用命令对照

下面这张表不需要死记。用到时回来查就行：

| 要做什么 | CMD | PowerShell |
| --- | --- | --- |
| 查看文件 | `dir` | `dir`、`ls`、`Get-ChildItem` |
| 进入文件夹 | `cd 文件夹名` | `cd 文件夹名`、`Set-Location 文件夹名` |
| 创建文件夹 | `mkdir 文件夹名` | `mkdir 文件夹名`、`New-Item -ItemType Directory 文件夹名` |
| 查看文本文件 | `type 文件名` | `Get-Content 文件名`、`cat 文件名` |
| 复制文件 | `copy 来源 目标` | `Copy-Item 来源 目标` |
| 清屏 | `cls` | `cls`、`Clear-Host` |

PowerShell 中的 `ls`、`cat`、`mkdir` 等很多短命令，其实是方便输入的别名。看到长命令不用害怕，它们做的事情通常和短命令一样。

## 7. 一个完整练习：在终端创建你的第一个项目文件夹

假设你想在桌面创建一个练习项目。打开 PowerShell 后，按顺序输入：

```powershell
cd Desktop
mkdir terminal-demo
cd terminal-demo
dir
```

执行完后，你已经进入了：

```text
桌面\terminal-demo
```

如果你想在里面创建一个空文本文件，PowerShell 可以输入：

```powershell
New-Item hello.txt -ItemType File
```

再输入：

```powershell
dir
```

就能看到 `hello.txt`。

## 8. 在终端里运行 Git

Git 命令可以在 CMD 和 PowerShell 中运行，写法基本一样。

例如进入项目目录后：

```powershell
git status
git add .
git commit -m "完成第一次练习"
git push
```

这几条命令的含义是：

```text
git status                 查看哪些文件变了
git add .                  把当前修改加入暂存区
git commit -m "说明"       在本地保存一次提交
git push                   上传提交到 GitHub
```

如果命令提示 `git 不是内部或外部命令`，通常表示 Git 没有安装，或者安装后还没有重启终端。

## 9. 终端里最有用的三个小技巧

### 用 Tab 自动补全

输入一部分文件夹名后按 `Tab`，终端通常会自动补全路径。例如输入：

```text
cd Des
```

再按 `Tab`，可能会补成：

```text
cd Desktop
```

这能减少拼写错误。

### 用上下方向键找回历史命令

按键盘的 `↑`，可以找回刚才输入过的命令。输错一长串命令时特别有用。

### 复制路径到终端

在 Windows 资源管理器中，可以点击地址栏复制路径；也可以把文件夹直接拖到终端窗口，路径通常会自动填进去。

## 10. 哪些命令不要随便执行？

终端本身不可怕，但它可以直接操作文件。所以看到陌生命令时，不要复制后立刻回车，尤其是包含下面关键词的命令：

```text
del
Remove-Item
rm
format
diskpart
shutdown
```

它们不一定都是坏命令，但可能删除文件、格式化磁盘或关闭电脑。特别是带有 `-Recurse`、`/s`、`/q`、`-Force` 等参数时，通常意味着会批量或强制执行操作。

安全习惯是：

1. 先看命令作用于哪个路径；
2. 不理解就先搜索或问老师；
3. 不要为了“解决报错”直接复制来路不明的整段命令；
4. 不要随便用“以管理员身份运行”。

## 11. 常见问题

### 输入命令后提示“不是内部或外部命令”

通常是命令对应的软件没有安装，或软件没有加入环境变量。最常见的例子是刚安装 Git 或 Node.js 后没有重新打开终端。

### `cd` 进不去文件夹

先运行 `dir`，确认文件夹名字是否拼写正确。路径中有空格时，记得加双引号：

```powershell
cd "My Project"
```

### 为什么我在 PowerShell 中输入 Linux 教程的命令会报错？

因为 Linux 常用 Bash，Windows 常用 CMD 或 PowerShell，它们不是同一种命令行。先确认教程使用的终端类型，再找对应的命令写法。

## 最后记住这几句就够了

```text
dir        看当前文件夹有什么
cd 文件夹   进入文件夹
cd ..      返回上一级
mkdir 名字  创建文件夹
cls        清屏
```

终端不是用来炫技的，而是让你更直接地操作电脑。刚开始时多用 `dir` 和 `cd` 观察位置，先确认自己在哪个文件夹，再进行下一步操作。熟悉以后，它会成为你写代码、管理文件和使用 Git 时最顺手的工具之一。
