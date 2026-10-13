---
translationId: Gin+Gorm
locale: zh
title: Gin+Gorm
description: 一篇关于Gin和Gorm的学习
pubDate: 2026-07-11
tags:
  - 随笔
draft: false
---

Gin + GORM 实战学习笔记：从 CRUD 到博客 API
最近用 Gin + GORM 重写了个人博客后端，踩了不少坑，也总结了一些干货。如果你刚入门 Go Web，希望这篇笔记能帮你少走弯路。

项目结构与初始化

先 go mod init，然后按 main.go、router、handler、model、middleware、pkg/response 分层。Gin 路由用分组管理，结构清晰：

go
r := gin.Default()
api := r.Group("/api/v1")
{
    api.GET("/articles", handler.ListArticles)
}
二、路由与中间件

gin.Default() 自带 Logger 和 Recovery。自定义 JWT 中间件时，鉴权失败要 c.Abort()，成功则 c.Next() 放行。中间件里可以用 c.Set("userID", id)，后续 handler 用 c.Get 取。踩坑：忘写 c.Next()，后续 handler 不执行，接口直接 404。

参数绑定与校验

Gin 的 ShouldBindJSON、ShouldBindQuery 很好用。结构体加 binding:"required,min=1" 能省去大量 if。建议统一响应格式，比如 {code, msg, data}，方便前端处理。

GORM 模型与迁移

定义 BaseModel 包含 ID、CreatedAt、UpdatedAt、DeletedAt。开发期用 db.AutoMigrate(&User{}, &Article{}) 自动建表，生产环境建议用迁移工具。GORM 默认表名是复数，可用 TableName() 覆盖。

CRUD 与预加载

db.Create、First、Where、Updates、Delete 基本覆盖日常。文章列表分页：

go
db.Offset((page-1)*size).Limit(size).Find(&articles)
查文章和作者时用 Preload("Author")，避免 N+1 查询。注意 First 查不到会返回 gorm.ErrRecordNotFound，要用 errors.Is 判断。

事务与软删除

多表操作要用事务：

go
db.Transaction(func(tx *gorm.DB) error {
    // 操作
    return nil
})
GORM 默认软删除，DeletedAt 非空即视为删除；查已删除数据用 Unscoped。更新零值字段时，用 map 或 Select 指定字段，否则零值可能被忽略。

踩坑记录

First 查不到不是 nil，是 ErrRecordNotFound。

更新 0、""、false 要用 map 或 Select。

中间件顺序很重要，Recovery 要放前面。

预加载要确认外键关系，否则会报错。



Gin + GORM 组合开发效率很高，适合快速构建 API。目前博客接口已跑通，下一步研究分页封装、Redis 缓存和单元测试。如果你也在学 Go 后端，建议直接动手写一个博客 API，比只看文档进步快得多。




