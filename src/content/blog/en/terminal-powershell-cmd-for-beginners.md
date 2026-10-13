---
translationId: terminal-powershell-cmd-for-beginners
locale: en
title: "Terminal Basics: What Is the Difference Between CMD and PowerShell?"
description: A beginner's guide to Windows terminals, file navigation, useful commands, and safe command-line habits.
pubDate: 2026-10-13
tags:
  - Computing Basics
  - Windows
  - PowerShell
  - CMD
draft: false
---

A terminal is simply a text-based way to control a computer. Instead of clicking folders with a mouse, you type commands that list files, move between folders, or run programs.

Windows users usually meet two terminals: CMD and PowerShell.

| Tool | What it is | Best use |
| --- | --- | --- |
| CMD | Command Prompt, the older Windows command line | Following older tutorials and simple commands |
| PowerShell | A more capable Windows shell and scripting environment | Modern development and automation |

For new Windows users, PowerShell is a good default. Many basic commands work in both tools.

## Know where you are

A PowerShell prompt may look like this:

```text
PS C:\Users\Alice>
```

It means your current folder is `C:\Users\Alice`. A path is just a file address.

## Five commands to learn first

```powershell
dir            # list files in the current folder
cd folder-name # enter a folder
cd ..          # go to the parent folder
mkdir demo     # create a folder called demo
cls            # clear the terminal screen
```

In PowerShell, `ls` also lists files. If a folder name contains spaces, use quotation marks:

```powershell
cd "My Project"
```

` . ` means the current folder and `..` means its parent. For example, `cd .\src` enters a `src` folder inside the current location.

## CMD and PowerShell command names

| Task | CMD | PowerShell |
| --- | --- | --- |
| List files | `dir` | `dir`, `ls`, `Get-ChildItem` |
| Read a text file | `type file.txt` | `Get-Content file.txt`, `cat file.txt` |
| Copy a file | `copy source target` | `Copy-Item source target` |
| Clear the screen | `cls` | `cls`, `Clear-Host` |

In PowerShell, short names such as `ls` and `cat` are convenient aliases for longer commands.

## A first practice session

Open PowerShell and run:

```powershell
cd Desktop
mkdir terminal-demo
cd terminal-demo
New-Item hello.txt -ItemType File
dir
```

You have now created and entered a project folder, created a file, and listed its contents.

## Using Git in a terminal

Git works in both CMD and PowerShell:

```powershell
git status
git add .
git commit -m "Complete first exercise"
git push
```

Useful shortcuts: press `Tab` to complete paths and press the up arrow to reuse the previous command.

## Use caution with destructive commands

Do not paste unknown commands into a terminal. Be especially careful with commands containing:

```text
del, Remove-Item, rm, format, diskpart, shutdown
```

Options such as `-Recurse`, `-Force`, `/s`, and `/q` can make an operation delete many files without asking. First check the path, ask if you are unsure, and do not run the terminal as administrator without a clear reason.

The terminal is not a hacker screen. It is a precise, useful tool. Learn `dir` and `cd` first, always confirm your current folder, and the rest becomes much easier.
