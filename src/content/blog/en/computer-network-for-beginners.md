---
translationId: computer-network-for-beginners
locale: en
title: What Is Computer Networking? IP, DNS, TCP, and HTTPS Through One Web Page
description: A beginner-friendly tour of networking concepts by following what happens when you open a website.
pubDate: 2026-10-13
tags:
  - Computing Basics
  - Computer Networking
  - Beginner Guide
draft: false
---

When you type a web address and a page appears, several systems cooperate in a few seconds. That process introduces most of the networking words beginners hear: IP, DNS, packets, routers, ports, TCP, HTTP, and HTTPS.

## A network is a set of connected devices

A network lets devices exchange information by using shared connection methods and rules.

- A **LAN** (local area network) is a small network such as your home Wi-Fi, classroom, or office.
- The **Internet** connects many smaller networks around the world.

Connecting to Wi-Fi puts your device on a local network. Reaching a website requires that network to reach the Internet as well.

## Opening a website, step by step

For a URL such as `https://example.com`, the simplified path is:

```text
browser → DNS lookup → server IP → routers and network links → web server → response → browser display
```

## IP addresses, domains, and DNS

An IP address is a network address. An IPv4 address might look like:

```text
192.168.1.10
```

People prefer names such as `example.com`, so a domain name is like a memorable contact name for an IP address. DNS (the Domain Name System) is the Internet's directory service: it translates a domain into an IP address.

On Windows, this command checks a DNS lookup without changing settings:

```powershell
nslookup example.com
```

## Packets, routers, and ports

Large data is split into small pieces called packets. Packets include addressing and ordering information so the receiving computer can reassemble the message.

Routers forward packets toward their destination, much like sorting centers forward parcels. An IP address identifies a device; a **port** identifies a service on that device.

| Service | Common port |
| --- | --- |
| HTTP | 80 |
| HTTPS | 443 |
| SSH | 22 |
| Local development | 3000, 5173, 8080, and others |

## TCP and UDP

| Protocol | Main priority | Typical use |
| --- | --- | --- |
| TCP | Reliable, ordered delivery | web pages, logins, file downloads |
| UDP | Lower delay with less delivery checking | calls, streaming, games |

TCP is like registered mail: it checks that important data arrives. UDP is more like live conversation: a tiny loss may be acceptable if waiting would make the experience stutter.

## HTTP and HTTPS

HTTP is the request-and-response language used by browsers and web servers. Status codes such as `200`, `404`, and `500` describe the result of a request.

HTTPS is HTTP protected with TLS encryption. It helps verify the server and protects web content from casual reading or tampering in transit. Use HTTPS for sign-ins, forms, and any sensitive information.

## When Wi-Fi is connected but the web does not work

Being connected to Wi-Fi only proves that your device can talk to the router. The router might still lack an Internet connection, DNS might fail, a captive portal might require sign-in, or the target website might be unavailable.

Three safe Windows diagnostics are:

```powershell
ipconfig
nslookup example.com
ping example.com
```

They show your network configuration, DNS resolution, and whether a host answers a ping request. A failed ping does not always mean a website is broken, because many servers deliberately ignore pings.

The core idea is simple: networks help devices exchange information at the right address, using shared protocols. Once you know that story, terms such as DNS, port 443, TCP, and HTTPS stop being mysterious abbreviations.
