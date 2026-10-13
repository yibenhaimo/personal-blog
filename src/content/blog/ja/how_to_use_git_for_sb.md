---
translationId: git-beginner-guide
locale: ja
title: Git 超入門：最初の変更から GitHub への Push まで
description: バージョン管理を初めて使う学生向けに、Git と GitHub の基本をやさしく説明します。
pubDate: 2026-10-13
tags:
  - Git
  - チュートリアル
  - 初心者向け
draft: false
---

Git はファイルの変更履歴を記録する道具です。GitHub はその履歴をオンラインに保存し、他の人と共有するためのサービスです。

学生プロジェクトでは、まず次の流れを覚えれば十分です。

```text
ファイルを編集 → git add → git commit → git push
```

## 重要な四つの言葉

| 言葉 | 意味 |
| --- | --- |
| repository | Git で管理するプロジェクトフォルダー |
| change | まだ Git の履歴として保存していない変更 |
| commit | パソコンに保存する、説明付きのスナップショット |
| push | ローカルの commit を GitHub にアップロードすること |

`commit` はアップロードではありません。GitHub に送る操作は `push` です。

## 最初の設定

Git を入れたら、名前とメールアドレスを一度だけ設定します。

```bash
git config --global user.name "あなたの名前"
git config --global user.email "GitHub に登録したメールアドレス"
```

## 既存プロジェクトを始める

GitHub の **Code** ボタンから HTTPS の URL をコピーし、次を実行します。

```bash
git clone https://github.com/user/project.git
cd project
```

`clone` は、プロジェクト本体と履歴をパソコンにダウンロードする操作です。

## 基本の提出手順

ファイルを編集したら、順番に実行します。

```bash
git status
git add .
git commit -m "変更内容を書く"
git push
```

`git status` は現在の状態を確認するだけで、ファイルを変更しません。commit メッセージは `Add login form` や `Fix calculation error` のように、何をしたかが分かる言葉にしましょう。

## チーム開発では最初に Pull

作業を始める前に、他の人の最新変更を取得します。

```bash
git pull
```

毎日の流れは次の形が安全です。

```text
git pull → 作業 → git status → git add → git commit → git push
```

## 安全な戻し方とよくある表示

間違えて add したファイルを staging area から外すには、次を使います。編集内容は消えません。

```bash
git restore --staged ファイル名
```

- `nothing to commit`：保存する新しい変更がありません。
- `failed to push some refs`：まず `git pull` を行い、必要なら競合を解決してから push します。
- `Authentication failed`：GitHub のログインまたは権限を確認します。
- `Failed to connect to github.com port 443`：コードではなく、ネットワークやプロキシの問題です。

意味を理解する前に `git reset --hard` や `git push --force` を実行しないでください。これらは他人や自分の変更を上書きする可能性があります。
