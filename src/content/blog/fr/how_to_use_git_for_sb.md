---
translationId: git-beginner-guide
locale: fr
title: "Git pour grands débutants : de la première modification au premier Push"
description: Une introduction simple à Git et GitHub pour les étudiants qui découvrent le contrôle de version.
pubDate: 2026-10-13
tags:
  - Git
  - Tutoriel
  - Guide débutant
draft: false
---

Git enregistre l'historique de vos fichiers. GitHub permet de stocker cet historique en ligne et de travailler avec d'autres personnes.

Pour la plupart des projets étudiants, retenez simplement ceci :

```text
modifier les fichiers → git add → git commit → git push
```

## Les quatre mots importants

| Mot | Sens |
| --- | --- |
| dépôt (repository) | un dossier de projet géré par Git |
| modification | un fichier changé, pas encore enregistré dans l'historique Git |
| commit | une sauvegarde nommée sur votre ordinateur |
| push | l'envoi des commits locaux vers GitHub |

Un commit n'est **pas** un envoi. L'envoi vers GitHub se fait avec `git push`.

## Configuration initiale

Après l'installation de Git, configurez une fois votre nom et votre e-mail :

```bash
git config --global user.name "Votre nom"
git config --global user.email "votre-email-github@example.com"
```

## Télécharger un projet existant

Copiez l'adresse HTTPS du bouton **Code** sur GitHub, puis exécutez :

```bash
git clone https://github.com/utilisateur/projet.git
cd projet
```

`clone` télécharge le projet, son historique et sa connexion au dépôt distant.

## Faire une contribution normale

Après avoir modifié des fichiers :

```bash
git status
git add .
git commit -m "Décrire la modification"
git push
```

`git status` permet de vérifier ce qui sera inclus. Écrivez des messages utiles, par exemple `Ajouter le formulaire de connexion` ou `Corriger la division par zéro`.

## Travailler avec une équipe

Avant de commencer, récupérez les changements de vos camarades :

```bash
git pull
```

La routine la plus simple est :

```text
git pull → travailler → git status → git add → git commit → git push
```

Si vous avez ajouté un fichier par erreur à la zone de préparation, cette commande le retire sans effacer vos modifications :

```bash
git restore --staged nom-du-fichier
```

## Messages fréquents

- `nothing to commit` : il n'y a aucune nouvelle modification à enregistrer.
- `failed to push some refs` : faites `git pull`, résolvez les conflits éventuels, puis poussez à nouveau.
- `Authentication failed` : vérifiez le bon compte GitHub et vos droits sur le dépôt.
- `Failed to connect to github.com port 443` : c'est un problème de réseau ou de proxy, pas de code.

N'utilisez pas `git reset --hard` ou `git push --force` tant que vous ne comprenez pas précisément leur effet : ils peuvent écraser du travail.
