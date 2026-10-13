---
translationId: computer-network-for-beginners
locale: fr
title: Qu'est-ce qu'un réseau informatique ? IP, DNS, TCP et HTTPS à travers une page web
description: Une introduction aux réseaux pour débutants en suivant ce qui se passe quand on ouvre un site web.
pubDate: 2026-10-13
tags:
  - Informatique
  - Réseau
  - Guide débutant
draft: false
---

Quand vous saisissez une adresse web et qu'une page apparaît, plusieurs systèmes coopèrent en quelques secondes. Cela permet de comprendre IP, DNS, paquets, routeurs, ports, TCP, HTTP et HTTPS.

## Un réseau relie des appareils

Un réseau permet à des appareils d'échanger des informations grâce à des connexions et des règles communes.

- Un **LAN** est un petit réseau : Wi-Fi de la maison, salle de cours ou bureau.
- Internet relie de très nombreux réseaux plus petits partout dans le monde.

Se connecter au Wi-Fi signifie d'abord rejoindre un réseau local. Pour atteindre un site lointain, ce réseau doit aussi avoir accès à Internet.

## Ouvrir une page web

Pour `https://example.com`, le chemin simplifié est le suivant :

```text
navigateur → DNS → adresse IP du serveur → routeurs et réseau → serveur web → réponse → affichage
```

## Adresse IP, nom de domaine et DNS

Une adresse IP est l'adresse d'un appareil sur le réseau. Une adresse IPv4 ressemble à ceci :

```text
192.168.1.10
```

Les humains préfèrent retenir `example.com`. Un nom de domaine est donc un nom mémorisable associé à une adresse IP. Le DNS est l'annuaire qui traduit ce nom en adresse IP.

Sous Windows, vous pouvez vérifier cette résolution sans modifier vos réglages :

```powershell
nslookup example.com
```

## Paquets, routeurs et ports

Les grandes données sont découpées en petits paquets. Les routeurs lisent leur destination et les transmettent vers l'étape suivante.

Une adresse IP identifie un appareil ; un **port** identifie un service sur cet appareil.

| Service | Port courant |
| --- | --- |
| HTTP | 80 |
| HTTPS | 443 |
| SSH | 22 |
| Développement local | 3000, 5173, 8080, etc. |

## TCP, UDP, HTTP et HTTPS

| Protocole | Priorité | Usage courant |
| --- | --- | --- |
| TCP | livraison fiable et ordonnée | pages web, connexion, téléchargement |
| UDP | faible latence | appels, streaming, jeux |

HTTP est le format de dialogue entre le navigateur et le serveur. Les codes `200`, `404` et `500` en font partie.

HTTPS est HTTP protégé par le chiffrement TLS. Il aide à vérifier le serveur et protège le contenu pendant le transport. Utilisez HTTPS pour les connexions, formulaires et informations sensibles.

## Pourquoi le Wi-Fi connecté ne suffit pas toujours

Être connecté au Wi-Fi prouve seulement que l'appareil parle au routeur. La connexion du routeur à Internet peut être coupée, le DNS peut échouer, un portail captif peut demander une connexion, ou le site cible peut être indisponible.

Ces commandes Windows sont sûres et utiles :

```powershell
ipconfig
nslookup example.com
ping example.com
```

Elles affichent la configuration réseau, la résolution DNS et la réponse éventuelle d'un hôte. Un ping qui échoue ne signifie pas toujours qu'un site est en panne : beaucoup de serveurs ignorent volontairement ces requêtes.

L'idée centrale est simple : un réseau permet à des appareils d'échanger des informations à la bonne adresse, avec des protocoles partagés. Avec cette histoire en tête, DNS, port 443, TCP et HTTPS deviennent beaucoup plus concrets.
