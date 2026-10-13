---
translationId: git-beginner-guide
locale: en
title: "Git for Complete Beginners: From First File to First Push"
description: A plain-English introduction to Git and GitHub for students who have never used version control.
pubDate: 2026-10-13
tags:
  - Git
  - Tutorial
  - Beginner Guide
draft: false
---

Git is a tool that records the history of your files. GitHub is a website where you can store that history online and collaborate with other people.

For most student projects, remember one line:

```text
edit files → git add → git commit → git push
```

## The four words that matter

| Word | Meaning |
| --- | --- |
| Repository | A project folder managed by Git |
| Change | A file you edited but have not saved as a Git version yet |
| Commit | A named snapshot saved on your computer |
| Push | Uploading local commits to GitHub |

A commit is **not** an upload. `git push` is the upload step.

## First-time setup

After installing Git, configure the name and email that will appear in your commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"
```

## Download an existing project

Copy the HTTPS address from the repository's green **Code** button on GitHub, then run:

```bash
git clone https://github.com/user/project.git
cd project
```

`clone` downloads the project and connects it to its GitHub repository.

## Make a normal contribution

After editing a file, run:

```bash
git status
git add .
git commit -m "Describe what changed"
git push
```

Use `git status` before committing. It shows exactly what will be included. Good commit messages describe the result, for example `Add login form` or `Fix calculator divide-by-zero error`.

## Work safely with classmates

Before you start coding, download teammates' latest work:

```bash
git pull
```

The simplest daily habit is:

```text
git pull → work → git status → git add → git commit → git push
```

## Two safe recovery commands

If you staged a file by mistake, remove it from the staging area without deleting your edits:

```bash
git restore --staged filename
```

To see uncommitted changes:

```bash
git diff
```

Avoid commands such as `git reset --hard` and `git push --force` until you understand exactly what they do. They can overwrite work.

## Common messages

- `nothing to commit`: there are no new changes to save.
- `failed to push some refs`: run `git pull`, solve any conflicts, then push again.
- `Authentication failed`: sign in with the correct GitHub account or confirm you have repository access.
- `Failed to connect to github.com port 443`: this is a network or proxy problem, not a code problem.

Git becomes much less intimidating once you use it a few times. Think of it as a careful save system for code: save a snapshot, label it, and share it when you are ready.
