# 坤坤的博客

Astro-powered multilingual personal blog for `yibenhaimo`.

Supported locales:

- `/zh/` Chinese (default)
- `/en/` English
- `/ja/` Japanese
- `/fr/` French

## Local development

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:4321/zh/`.

## Writing a post

Create one Markdown or MDX file for each locale under:

```text
src/content/blog/zh/
src/content/blog/en/
src/content/blog/ja/
src/content/blog/fr/
```

Use the same `translationId` for the four translations:

```yaml
---
translationId: my-post
locale: zh
title: 文章标题
description: 文章摘要
pubDate: 2026-08-03
tags:
  - coding
draft: false
---
```

Files with `draft: true` are kept in the repository but are not published.

## Adding friends

Friend links are data-driven. Put a local image in `public/friends/`, then add an entry to `src/data/friends.ts`:

```ts
export const friends: FriendProfile[] = [
  {
    name: '朋友的博客',
    url: 'https://friend.example.com',
    image: '/friends/friend-blog.webp',
    description: '朋友博客的简短介绍',
  },
];
```

The image may also be an absolute URL, but a local image is more reliable for deployment. The same friend list is shown on all four language versions of the `Friend` page.

## Giscus comments

The site uses `yibenhaimo/personal-blog-comments` and GitHub Discussions through Giscus. Enable Discussions in that public repository, install the Giscus GitHub App, and choose a comment category.

Copy the generated values from [giscus.app](https://giscus.app/) into a local `.env` file or the Cloudflare Pages environment variables:

```text
PUBLIC_GISCUS_REPO=yibenhaimo/personal-blog-comments
PUBLIC_GISCUS_REPO_ID=your-repository-id
PUBLIC_GISCUS_CATEGORY=General
PUBLIC_GISCUS_CATEGORY_ID=your-category-id
```

The comment mapping uses `translationId`, so all four language versions of an article share one Discussion.

## Cloudflare Pages

Connect the `main` branch of `yibenhaimo/personal-blog` to Cloudflare Pages with:

```text
Build command: npm run build
Output directory: dist
```

Set `PUBLIC_SITE_URL` to the actual Pages URL or custom domain so canonical URLs, Open Graph URLs, RSS and Sitemap use the production hostname.

## Quality checks

```bash
npm run check
npm run build
```
