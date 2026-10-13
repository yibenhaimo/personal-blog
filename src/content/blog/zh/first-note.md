---
translationId: Gin+Gorm
locale: zh
title: Gin + GORM 实战入门：搭建一个清晰的博客 API
description: 从项目分层、路由设计到 CRUD、鉴权和常见坑，快速搭建可维护的 Go 博客后端。
pubDate: 2026-07-11
tags:
  - Go
  - Gin
  - GORM
  - 后端开发
draft: false
---

Gin 负责接住 HTTP 请求，GORM 负责和数据库打交道。两者组合起来，很适合从零搭建一个小而完整的博客 API。

这篇文章不追求“大而全”，而是围绕一个最常见的需求展开：**创建、查询和管理博客文章**。重点是建立清晰的项目结构，并避开几个刚开始最容易踩到的坑。

## 目标：先做一个能跑的文章接口

完成后，我们至少会有这些接口：

| 方法 | 路径 | 用途 |
| --- | --- | --- |
| `GET` | `/api/v1/articles` | 获取文章列表 |
| `GET` | `/api/v1/articles/:id` | 获取一篇文章 |
| `POST` | `/api/v1/articles` | 创建文章 |
| `PATCH` | `/api/v1/articles/:id` | 更新文章 |
| `DELETE` | `/api/v1/articles/:id` | 删除文章 |

## 一、推荐的项目结构

刚开始时，不必拆得特别复杂。下面这个结构已经足够清楚：

```text
blog-api/
├── main.go             # 程序入口
├── router/             # 路由注册
├── handler/            # 请求处理：解析参数、返回响应
├── model/              # 数据库模型
├── middleware/         # 鉴权、日志等中间件
└── pkg/response/       # 统一响应格式
```

可以把它理解为一条流水线：

```text
请求 → router → middleware → handler → model / database → 响应
```

路由只负责“这个地址交给谁处理”；业务判断写在 `handler`；数据库字段和操作放在 `model`。职责分开后，项目长大也不会很乱。

## 二、初始化项目和依赖

先创建项目并安装 Gin、GORM。这里用 SQLite 演示，因为不需要单独安装数据库服务；正式项目可以换成 MySQL 或 PostgreSQL。

```bash
go mod init example.com/blog-api
go get github.com/gin-gonic/gin
go get gorm.io/gorm
go get gorm.io/driver/sqlite
```

## 三、定义文章模型

文章至少要有标题和正文。GORM 会根据结构体生成表结构：

```go
package model

import "time"

type Article struct {
	ID        uint      `gorm:"primaryKey" json:"id"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}
```

上面的 `DeletedAt` 表示**软删除**：删除后，数据仍留在数据库中，但普通查询不会再返回它。这样误删时还有恢复空间。

> 上面代码还需要在 `import` 中加入 `gorm.io/gorm`。

## 四、连接数据库并启动 Gin

先把数据库初始化放在入口文件中：

```go
package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"example.com/blog-api/model"
)

func main() {
	db, err := gorm.Open(sqlite.Open("blog.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("连接数据库失败: ", err)
	}

	if err := db.AutoMigrate(&model.Article{}); err != nil {
		log.Fatal("迁移数据库失败: ", err)
	}

	r := gin.Default()
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "ok"})
	})

	log.Fatal(r.Run(":8080"))
}
```

`gin.Default()` 默认带有日志和异常恢复中间件，适合作为开发起点。启动后访问 `http://localhost:8080/health`，如果看到 `{"message":"ok"}`，说明服务已正常运行。

## 五、用路由分组管理 API

接口多起来后，不要把所有地址直接堆在 `main.go` 里。可以按版本分组：

```go
api := r.Group("/api/v1")
{
	api.GET("/articles", handler.ListArticles)
	api.GET("/articles/:id", handler.GetArticle)
	api.POST("/articles", handler.CreateArticle)
	api.PATCH("/articles/:id", handler.UpdateArticle)
	api.DELETE("/articles/:id", handler.DeleteArticle)
}
```

这样将来要发布不兼容的新接口时，可以新增 `/api/v2`，而不影响旧客户端。

## 六、创建文章：参数绑定比手写判断更可靠

不要直接把请求体绑定到数据库模型。单独定义一个输入结构体，会更安全也更清楚：

```go
type CreateArticleInput struct {
	Title   string `json:"title" binding:"required,min=1,max=120"`
	Content string `json:"content" binding:"required,min=1"`
}
```

在 handler 中处理请求：

```go
func CreateArticle(c *gin.Context) {
	var input CreateArticleInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "标题和正文不能为空",
		})
		return
	}

	article := model.Article{
		Title:   input.Title,
		Content: input.Content,
	}

	if err := db.Create(&article).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "创建文章失败",
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"data": article})
}
```

`ShouldBindJSON` 会把 JSON 请求体解析到结构体中；`binding:"required"` 则能把最基础的空值校验交给 Gin。这里的关键是：**每次出错后都要 `return`**，避免程序继续执行并重复写入响应。

## 七、查询文章：别忽略“查不到”

查询单篇文章时，最容易犯的错误是只看 `article` 是否为空。GORM 在查询不到记录时，会通过错误返回结果：

```go
func GetArticle(c *gin.Context) {
	id := c.Param("id")
	var article model.Article

	err := db.First(&article, id).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		c.JSON(http.StatusNotFound, gin.H{"message": "文章不存在"})
		return
	}
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "查询文章失败"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": article})
}
```

判断 `gorm.ErrRecordNotFound` 后返回 404，前端才能正确区分“文章不存在”和“服务器坏了”。

## 八、列表、分页和预加载

列表接口通常需要分页。一个简单的写法是：

```go
page := 1
size := 10

db.Offset((page - 1) * size).
	Limit(size).
	Order("created_at desc").
	Find(&articles)
```

真实项目中，`page` 和 `size` 应该从查询参数读取，并限制最大值，避免有人请求一次返回几十万条数据。

如果文章还关联作者，需要显示作者信息，可以使用：

```go
db.Preload("Author").Find(&articles)
```

`Preload` 可以避免循环查询作者造成的 N+1 问题。不过前提是模型中已经正确定义好关联和外键。

## 九、更新时的一个隐藏坑：零值字段

很多人第一次使用 GORM 更新数据时会遇到：明明想把某个字段更新为 `0`、空字符串或 `false`，结果数据库没有变化。

原因是 `Updates(结构体)` 往往会忽略 Go 的零值。需要更新零值时，更稳妥的是使用 `map`：

```go
db.Model(&article).Updates(map[string]any{
	"title":   input.Title,
	"content": input.Content,
})
```

也可以使用 `Select` 明确指定要更新的字段。核心原则是：**当“零值”本身有业务含义时，不要默认依赖结构体更新。**

## 十、事务：多步操作要么全成功，要么全失败

例如“创建文章后，同时写一条操作日志”，这两步应该绑在一起：

```go
err := db.Transaction(func(tx *gorm.DB) error {
	if err := tx.Create(&article).Error; err != nil {
		return err
	}

	if err := tx.Create(&logItem).Error; err != nil {
		return err
	}

	return nil
})
```

回调返回错误时，GORM 会回滚事务；返回 `nil` 时才提交。这样可以避免“文章已经创建，但日志写入失败”这种半完成状态。

## 十一、中间件：鉴权失败要中断请求

中间件常用于鉴权、限流和统一日志。以鉴权为例：

```go
func AuthRequired(c *gin.Context) {
	token := c.GetHeader("Authorization")
	if token == "" {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"message": "请先登录",
		})
		return
	}

	// 校验 token 后，把用户信息交给后续 handler 使用。
	c.Set("userID", 1)
	c.Next()
}
```

这里有两个重点：

- 鉴权失败后使用 `c.AbortWithStatusJSON`，并立刻 `return`；
- 鉴权成功后调用 `c.Next()`，让请求继续进入后续 handler。

忘记 `c.Next()` 时，后面的接口函数不会执行；忘记 `Abort()` 时，未登录用户可能继续访问受保护的接口。

## 十二、几个值得记住的坑

1. **查不到数据不等于没有错误。** 使用 `errors.Is(err, gorm.ErrRecordNotFound)` 判断 404。
2. **不要把密码和密钥写进代码。** 数据库地址、JWT 密钥等放到环境变量或配置文件中，并加入 `.gitignore`。
3. **不要只返回 200。** 创建成功用 201，参数错误用 400，未登录用 401，找不到资源用 404。
4. **开发环境可以 `AutoMigrate`，生产环境要更谨慎。** 数据库字段变更最好有可追踪的迁移方案。
5. **接口先小后大。** 先把文章 CRUD 跑通，再加入用户、评论、标签、缓存和权限。

## 结语

Gin + GORM 的价值，不只是“很快写出接口”，而是让我们能用清晰的方式组织一个小型后端项目。

先把路由、参数校验、错误处理和数据库操作这些基础环节写稳，再逐步加入 JWT 鉴权、Redis 缓存、测试和部署。比起收藏一堆教程，亲手完成一个能运行的博客 API，会让你真正理解 Go Web 开发的工作方式。
