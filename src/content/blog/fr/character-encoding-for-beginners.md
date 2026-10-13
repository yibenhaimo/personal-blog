---
translationId: character-encoding-for-beginners
locale: fr
title: "Encodage des caractères : UTF-8, GBK, Unicode et texte illisible"
description: Comprendre simplement pourquoi un texte devient illisible et pourquoi UTF-8 est le choix moderne par défaut.
pubDate: 2026-10-13
tags:
  - Informatique
  - Encodage
  - Guide débutant
draft: false
---

Vous avez peut-être ouvert un fichier chinois et vu ceci à la place du texte attendu :

```text
ä½ å¥½ï¼Œä¸–ç•Œ
```

Le fichier n'est généralement pas cassé. Le programme qui l'a enregistré et celui qui le lit n'utilisent simplement pas la même règle d'encodage.

## Les ordinateurs enregistrent des nombres

Au niveau le plus bas, un ordinateur stocke des `0` et des `1`. Pour enregistrer du texte, il faut une convention : quel numéro représente quel caractère, et comment stocker ce numéro sous forme d'octets.

| Terme | Explication simple |
| --- | --- |
| jeu de caractères | un dictionnaire qui associe des caractères à des numéros |
| encodage | la règle qui transforme ces numéros en octets |

On appelle souvent UTF-8 un « jeu de caractères ». Plus précisément, UTF-8 est un encodage des caractères Unicode.

## ASCII, GBK et Unicode

ASCII a été conçu pour les lettres anglaises, les chiffres et la ponctuation. Il ne peut pas représenter le chinois, le japonais, les emoji ou la plupart des langues du monde.

GBK a beaucoup servi pour le chinois simplifié dans les anciens logiciels Windows. Il reste fréquent dans d'anciens fichiers chinois, mais il est moins pratique pour les textes multilingues et les emoji.

Unicode attribue un numéro commun à des caractères de nombreuses langues :

```text
U+0041  A
U+4F60  你
U+597D  好
```

UTF-8 est une façon très répandue de stocker ces numéros Unicode dans un fichier.

## Pourquoi UTF-8 est le choix par défaut

UTF-8 représente de nombreuses langues et les emoji, reste compatible avec ASCII et fonctionne très bien sur le Web, dans les éditeurs, les API et GitHub.

| Contenu | Taille UTF-8 typique |
| --- | --- |
| lettres anglaises et chiffres | 1 octet |
| caractères chinois courants | 3 octets |
| beaucoup d'emoji | 4 octets |

Pour les nouveaux fichiers de code, Markdown, HTML, JSON, YAML et CSV, choisissez UTF-8 sauf contrainte explicite d'un ancien système.

## La cause du texte illisible

Le problème vient souvent de ce décalage :

```text
fichier enregistré en UTF-8 → ouvert comme GBK
fichier enregistré en GBK → ouvert comme UTF-8
```

Les mêmes octets sont lus avec le mauvais dictionnaire. Des carrés ou des `?` peuvent aussi indiquer qu'une police ne contient pas le caractère.

Dans VS Code, cliquez sur l'encodage affiché en bas à droite, choisissez **Reopen with Encoding**, essayez UTF-8 ou GBK, puis sauvegardez en UTF-8 quand le texte est correct. Faites une copie avant de sauvegarder plusieurs fois un fichier illisible.

La règle pratique est simple : **UTF-8 pour les nouveaux fichiers ; GBK à suspecter dans les anciens fichiers chinois ; même encodage à l'écriture et à la lecture.**
