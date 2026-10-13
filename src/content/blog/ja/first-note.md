---
translationId: Gin+Gorm
locale: ja
title: Gin + GORM 実践入門：整理されたブログ API を作る
description: プロジェクト構成、CRUD、入力検証、認証、よくある落とし穴をまとめた Gin + GORM 入門。
pubDate: 2026-07-11
tags:
  - Go
  - Gin
  - GORM
  - バックエンド
draft: false
---

Gin は HTTP リクエストを受け取り、GORM はデータベースを扱います。この二つを組み合わせると、小さなブログ API を素早く、かつ整理して作れます。

## まずは小さな API から始める

最初に用意したいのは、記事の基本操作です。

```text
GET    /api/v1/articles       記事一覧
GET    /api/v1/articles/:id   記事の取得
POST   /api/v1/articles       記事の作成
PATCH  /api/v1/articles/:id   記事の更新
DELETE /api/v1/articles/:id   記事の削除
```

処理の流れは次のように分けると分かりやすくなります。

```text
router → middleware → handler → model / database → response
```

ルーターは行き先を決め、handler は入力と業務処理を担当し、model はデータベースの形を表します。

## シンプルな構成

```text
blog-api/
├── main.go
├── router/
├── handler/
├── model/
├── middleware/
└── pkg/response/
```

最初からすべてのフォルダーは必要ありません。ただし、ルーティング、業務処理、SQL を一つの `main.go` に詰め込まないことが大切です。

## モデルと入力を分ける

```go
type Article struct {
    ID        uint      `gorm:"primaryKey" json:"id"`
    Title     string    `json:"title"`
    Content   string    `json:"content"`
    CreatedAt time.Time `json:"createdAt"`
    UpdatedAt time.Time `json:"updatedAt"`
    DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}
```

`DeletedAt` を使うと、通常の検索結果からは消しつつ、データをすぐには完全削除しないソフトデリートができます。

リクエスト用には別の構造体を用意します。

```go
type CreateArticleInput struct {
    Title   string `json:"title" binding:"required,max=120"`
    Content string `json:"content" binding:"required"`
}
```

`ShouldBindJSON` と validation タグを使えば、基本的な検証を簡潔に書けます。エラーを返した後は必ず `return` してください。

## 見つからないレコードを正しく扱う

GORM では記事が存在しない場合、`First` は `gorm.ErrRecordNotFound` を返します。

```go
err := db.First(&article, id).Error
if errors.Is(err, gorm.ErrRecordNotFound) {
    c.JSON(http.StatusNotFound, gin.H{"message": "article not found"})
    return
}
```

これで「記事がない」404 と「サーバーエラー」を区別できます。

## 覚えておきたい実践ポイント

- 一覧 API では `Offset`、`Limit`、最大件数を設定する。
- 関連データが必要なら `Preload("Author")` で N+1 問題を避ける。
- `Updates(構造体)` は `false`、`0`、空文字を無視することがある。ゼロ値も更新したいときは `map` や `Select` を使う。
- 複数の書き込みを一緒に成功・失敗させたい場合は `db.Transaction` を使う。
- 認証 middleware では失敗時に `AbortWithStatusJSON` と `return`、成功時に `c.Next()` を呼ぶ。

Gin + GORM の良さは、API を速く作れることだけではありません。小さな CRUD を丁寧に作ることで、後からテスト、認証、キャッシュ、デプロイを追加しやすい土台ができます。
