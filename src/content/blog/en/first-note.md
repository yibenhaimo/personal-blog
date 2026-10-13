---
translationId: Gin+Gorm
locale: en
title: "Gin + GORM in Practice: Building a Clean Blog API"
description: A practical introduction to project structure, CRUD, validation, authentication, and common Gin + GORM pitfalls.
pubDate: 2026-07-11
tags:
  - Go
  - Gin
  - GORM
  - Backend
draft: false
---

Gin handles HTTP requests while GORM handles database access. Together, they are a productive starting point for a small blog API.

## Start with a small, useful API

Build the basics first:

```text
GET    /api/v1/articles       List articles
GET    /api/v1/articles/:id   Read one article
POST   /api/v1/articles       Create an article
PATCH  /api/v1/articles/:id   Update an article
DELETE /api/v1/articles/:id   Delete an article
```

Keep responsibilities separate as the project grows:

```text
router → middleware → handler → model / database → response
```

Routes decide where a request goes, handlers validate and coordinate work, and models describe database data.

## A simple project layout

```text
blog-api/
├── main.go
├── router/
├── handler/
├── model/
├── middleware/
└── pkg/response/
```

You do not need every folder on day one. The important part is avoiding a single `main.go` that eventually contains routes, business rules, and database code all mixed together.

## Define a clear model

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

`DeletedAt` enables soft deletes: normal queries hide deleted rows instead of immediately removing them from the database.

## Use route groups and input structs

Versioned routes make future changes easier:

```go
api := r.Group("/api/v1")
api.GET("/articles", handler.ListArticles)
api.POST("/articles", handler.CreateArticle)
```

For incoming JSON, use a dedicated input type instead of binding directly to the database model:

```go
type CreateArticleInput struct {
    Title   string `json:"title" binding:"required,max=120"`
    Content string `json:"content" binding:"required"`
}
```

`ShouldBindJSON` plus validation tags removes a lot of repetitive `if` statements. After sending an error response, always `return` so the handler does not continue.

## Handle missing records explicitly

GORM does not return a nil article when `First` finds nothing. It returns `gorm.ErrRecordNotFound`:

```go
err := db.First(&article, id).Error
if errors.Is(err, gorm.ErrRecordNotFound) {
    c.JSON(http.StatusNotFound, gin.H{"message": "article not found"})
    return
}
```

That distinction lets clients tell “this article does not exist” apart from “the server failed.”

## Practical rules worth remembering

- Use `Offset`, `Limit`, and a maximum page size for list endpoints.
- Use `Preload("Author")` when you need related data and want to avoid N+1 queries.
- Updating with a struct can ignore zero values such as `false`, `0`, or an empty string. Use a `map` or `Select` when those values matter.
- Use `db.Transaction` for multiple writes that must either all succeed or all roll back.
- In authentication middleware, call `AbortWithStatusJSON` and `return` on failure; call `c.Next()` only after successful checks.

Gin + GORM is not just about writing endpoints quickly. A small, well-structured CRUD project teaches the habits that make a backend easier to test, extend, and maintain.
