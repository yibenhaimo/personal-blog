---
translationId: character-encoding-for-beginners
locale: en
title: "Character Encoding Explained: UTF-8, GBK, Unicode, and Garbled Text"
description: A beginner-friendly explanation of why text becomes garbled and why UTF-8 is the modern default.
pubDate: 2026-10-13
tags:
  - Computing Basics
  - Encoding
  - Beginner Guide
draft: false
---

Have you ever opened a file that should contain Chinese text and seen something like this instead?

```text
ä½ å¥½ï¼Œä¸–ç•Œ
```

That is usually not a broken file. It means the program that wrote the text and the program that read it used different encoding rules.

## Computers store numbers, not letters

At the lowest level, computers store bits: `0` and `1`. To save text, they need an agreement that connects a character to a number and a way to store that number as bytes.

| Term | Simple meaning |
| --- | --- |
| Character set | A dictionary of characters and their numbers |
| Encoding | The rule for storing those numbers as bytes |

People often call UTF-8 a “character set.” Strictly speaking, UTF-8 is an encoding for Unicode characters, but the everyday wording is understandable.

## From ASCII to Unicode

ASCII was designed for English letters, numbers, punctuation, and control characters. It cannot represent Chinese, Japanese, Korean, emoji, or most of the world's writing systems.

GBK was widely used for Simplified Chinese in older Windows software. It works well for many Chinese characters, but it is not a convenient universal choice for multilingual text and emoji.

Unicode solves the naming problem by assigning a common number to characters from many writing systems:

```text
U+0041  A
U+4F60  你
U+597D  好
```

Unicode is the global character map. An encoding such as UTF-8 decides how to store those numbers in a file.

## Why UTF-8 is the default today

UTF-8 can represent Unicode characters, is compatible with ASCII, and works well across the web, code editors, APIs, GitHub, and modern operating systems.

| Text | Typical UTF-8 storage |
| --- | --- |
| English letters and digits | 1 byte |
| Common Chinese characters | 3 bytes |
| Many emoji | 4 bytes |

For new code files, Markdown, HTML, JSON, YAML, and CSV files, choose UTF-8 unless a legacy system explicitly requires another encoding.

## Why garbled text happens

The usual cause is simple:

```text
file saved as UTF-8 → opened as GBK
```

or the reverse:

```text
file saved as GBK → opened as UTF-8
```

The same bytes are interpreted using the wrong “dictionary,” so the visible text changes. Boxes or question marks can also mean that the current font does not contain the character.

## What to do when you see garbled text

In VS Code, click the encoding label in the lower-right corner. Try **Reopen with Encoding**, test UTF-8 and GBK, then save as UTF-8 after the text looks correct.

Do not repeatedly save a garbled file before making a backup: saving with the wrong encoding can make recovery harder.

For web pages, keep these three things consistent:

1. Save the HTML file as UTF-8.
2. Include `<meta charset="UTF-8">`.
3. Configure the server to send the correct character encoding.

The practical rule is short: **use UTF-8 for new files; suspect GBK in older Chinese files; check whether the saving and opening encodings match.**
