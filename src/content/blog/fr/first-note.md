---
translationId: Gin+Gorm
locale: fr
title: "Gin + GORM en pratique : construire une API de blog claire"
description: Une introduction pratique à la structure d'un projet, au CRUD, à la validation, à l'authentification et aux pièges fréquents.
pubDate: 2026-07-11
tags:
  - Go
  - Gin
  - GORM
  - Backend
draft: false
---

Gin reçoit les requêtes HTTP et GORM dialogue avec la base de données. Ensemble, ils constituent un excellent point de départ pour une petite API de blog.

## Commencer par une API utile

Voici les routes essentielles :

```text
GET    /api/v1/articles       Liste des articles
GET    /api/v1/articles/:id   Lire un article
POST   /api/v1/articles       Créer un article
PATCH  /api/v1/articles/:id   Modifier un article
DELETE /api/v1/articles/:id   Supprimer un article
```

Répartissez les responsabilités dès le départ :

```text
router → middleware → handler → model / database → response
```

Le routeur choisit la destination, le handler valide et coordonne le travail, et le modèle décrit les données.

## Une structure simple

```text
blog-api/
├── main.go
├── router/
├── handler/
├── model/
├── middleware/
└── pkg/response/
```

Il n'est pas nécessaire de créer tous ces dossiers dès le premier jour. L'important est d'éviter de mélanger routes, règles métier et accès à la base dans un seul `main.go`.

## Modèle et validation des entrées

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

`DeletedAt` permet une suppression logique : les requêtes normales n'affichent plus la ligne, sans l'effacer immédiatement.

Utilisez un type distinct pour le JSON entrant :

```go
type CreateArticleInput struct {
    Title   string `json:"title" binding:"required,max=120"`
    Content string `json:"content" binding:"required"`
}
```

`ShouldBindJSON` et les tags de validation évitent beaucoup de conditions répétitives. Après une réponse d'erreur, faites toujours `return`.

## Gérer correctement un article absent

Quand `First` ne trouve rien, GORM renvoie `gorm.ErrRecordNotFound` :

```go
err := db.First(&article, id).Error
if errors.Is(err, gorm.ErrRecordNotFound) {
    c.JSON(http.StatusNotFound, gin.H{"message": "article not found"})
    return
}
```

Ainsi, le client peut distinguer une erreur 404 d'une erreur serveur.

## Points pratiques à retenir

- Utilisez `Offset`, `Limit` et une taille maximale pour les listes.
- Utilisez `Preload("Author")` pour charger des relations sans provoquer de requêtes N+1.
- `Updates(struct)` peut ignorer les valeurs zéro comme `false`, `0` ou une chaîne vide ; préférez une `map` si ces valeurs doivent être enregistrées.
- Utilisez `db.Transaction` pour plusieurs écritures qui doivent toutes réussir ou toutes être annulées.
- Dans un middleware d'authentification, utilisez `AbortWithStatusJSON` et `return` en cas d'échec ; appelez `c.Next()` seulement après la vérification.

Gin + GORM ne servent pas seulement à écrire rapidement des routes. Un petit CRUD bien structuré devient une base solide pour les tests, l'authentification, le cache et le déploiement.
