---
translationId: terminal-powershell-cmd-for-beginners
locale: fr
title: "Débuter avec le terminal : quelle différence entre CMD et PowerShell ?"
description: Un guide pour débutants sur les terminaux Windows, les dossiers, les commandes utiles et les bonnes habitudes de sécurité.
pubDate: 2026-10-13
tags:
  - Informatique
  - Windows
  - PowerShell
  - CMD
draft: false
---

Un terminal est une manière de contrôler l'ordinateur avec du texte. Au lieu de cliquer sur un dossier, vous saisissez une commande pour lister des fichiers, changer de dossier ou lancer un programme.

Sous Windows, les deux environnements les plus courants sont CMD et PowerShell.

| Outil | Caractéristique |
| --- | --- |
| CMD | L'invite de commandes historique de Windows ; présente dans beaucoup d'anciens tutoriels. |
| PowerShell | Un environnement plus puissant, adapté au développement et à l'automatisation. |

Pour un nouvel utilisateur Windows, PowerShell est un bon choix par défaut. Beaucoup de commandes simples fonctionnent dans les deux.

## Les cinq premières commandes

```powershell
dir            # afficher les fichiers du dossier courant
cd nom-dossier # entrer dans un dossier
cd ..          # revenir au dossier parent
mkdir demo     # créer un dossier demo
cls            # effacer l'affichage du terminal
```

PowerShell accepte aussi `ls` pour afficher les fichiers. Si un nom contient des espaces, utilisez des guillemets :

```powershell
cd "My Project"
```

`.` signifie le dossier courant et `..` le dossier parent. `cd .\src` entre dans le dossier `src` du dossier actuel.

## CMD et PowerShell : noms de commandes

| Action | CMD | PowerShell |
| --- | --- | --- |
| Lister les fichiers | `dir` | `dir`, `ls`, `Get-ChildItem` |
| Lire un fichier texte | `type fichier.txt` | `Get-Content fichier.txt`, `cat fichier.txt` |
| Copier un fichier | `copy source destination` | `Copy-Item source destination` |
| Effacer l'écran | `cls` | `cls`, `Clear-Host` |

Dans PowerShell, `ls` et `cat` sont des alias courts de commandes plus longues.

## Git dans le terminal

Les commandes Git fonctionnent dans CMD et PowerShell :

```powershell
git status
git add .
git commit -m "Premier exercice terminé"
git push
```

La touche `Tab` complète les chemins et la flèche vers le haut rappelle la commande précédente.

## Prudence avec les commandes destructives

Ne collez pas une commande inconnue dans un terminal. Vérifiez particulièrement les commandes contenant :

```text
del, Remove-Item, rm, format, diskpart, shutdown
```

Les options `-Recurse`, `-Force`, `/s` et `/q` peuvent traiter ou supprimer beaucoup de fichiers sans demander. Vérifiez toujours le chemin, demandez de l'aide si nécessaire et n'ouvrez pas un terminal administrateur sans raison claire.

Le terminal n'est pas un écran de hacker : c'est un outil précis. Commencez par `dir` et `cd`, vérifiez où vous êtes, puis avancez une commande à la fois.
