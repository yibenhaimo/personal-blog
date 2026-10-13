---
translationId: terminal-powershell-cmd-for-beginners
locale: ja
title: ターミナル入門：CMD と PowerShell の違いは？
description: Windows のターミナル、フォルダー操作、基本コマンド、安全な使い方を初心者向けに解説します。
pubDate: 2026-10-13
tags:
  - コンピュータ基礎
  - Windows
  - PowerShell
  - CMD
draft: false
---

ターミナルは、マウスではなく文字でコンピューターを操作する方法です。フォルダーを開く、ファイルを確認する、プログラムを動かす、といった操作をコマンドとして入力します。

Windows でよく使うのは CMD と PowerShell です。

| ツール | 特徴 |
| --- | --- |
| CMD | 昔からある Windows のコマンドプロンプト。古い教材でもよく使われる。 |
| PowerShell | より高機能な Windows のシェル。開発や自動化に向いている。 |

初心者には PowerShell を標準として使うことをおすすめします。基本操作の多くは CMD でも使えます。

## まず覚える五つのコマンド

```powershell
dir            # 現在のフォルダーの中身を見る
cd folder-name # フォルダーに入る
cd ..          # 一つ上のフォルダーへ戻る
mkdir demo     # demo というフォルダーを作る
cls            # 画面表示を消す
```

PowerShell では `ls` でも一覧を表示できます。空白を含むフォルダー名は引用符で囲みます。

```powershell
cd "My Project"
```

`.` は現在のフォルダー、`..` は親フォルダーです。`cd .\src` は現在の場所にある `src` へ移動します。

## CMD と PowerShell の対照表

| 作業 | CMD | PowerShell |
| --- | --- | --- |
| 一覧表示 | `dir` | `dir`、`ls`、`Get-ChildItem` |
| テキスト表示 | `type file.txt` | `Get-Content file.txt`、`cat file.txt` |
| コピー | `copy source target` | `Copy-Item source target` |
| 画面を消す | `cls` | `cls`、`Clear-Host` |

PowerShell の `ls` や `cat` は、長いコマンドの短い別名です。

## Git もターミナルで使える

```powershell
git status
git add .
git commit -m "first exercise"
git push
```

`Tab` キーでパスを補完し、上矢印キーで前のコマンドを呼び出せます。

## 注意が必要なコマンド

意味の分からないコマンドをそのまま貼り付けないでください。特に次の言葉を含むものは慎重に確認します。

```text
del, Remove-Item, rm, format, diskpart, shutdown
```

`-Recurse`、`-Force`、`/s`、`/q` のような指定は、多数のファイルを強制的に処理することがあります。実行前に対象パスを確認し、分からなければ先生や詳しい人に聞きましょう。

ターミナルは怖いものではありません。最初は `dir` と `cd` で「今どこにいるか」を確認する習慣を付けるだけで十分です。
