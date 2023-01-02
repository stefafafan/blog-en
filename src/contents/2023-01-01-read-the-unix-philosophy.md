---
author: stefafafan
datetime: 2022-12-31T15:00:00Z
title: Read the book "The UNIX Philosophy"
slug: 2023-01-01-read-the-unix-philosophy
featured: true
draft: false
tags:
  - book
  - unix
  - software design
ogImage: ""
description: My impressions of the book "The UNIX Philosophy" by Mike Gancarz.
---

The Japanese version of this blog post is here: [『UNIX という考え方―その設計思想と哲学』を読んだ - stefafafan の fa は 3 つです](https://blog.stenyan.jp/entry/2023/01/01/000000).

---

Happy new year! I was reading "The UNIX Philosophy" and noticed the year 2023 has already arrived. In this post I will write my impressions I had regarding this book.

## Table of contents

## The nine principles introduced in the book.

In this book, nine core principles are introduced.

1. Small is beautiful.
1. Make each program do one thing well.
1. Build a prototype as soon as possible.
1. Choose portability over efficiency.
1. Store data in flat text files.
1. Use software leverage to your advantage.
1. Use shell scripts to increase leverage and portability.
1. Avoid captive user interfaces.
1. Make every program a filter.

When reading this I thought there are several layers of granularity here, so I tried to organize them into the following three topics.

- Software design philosophy
- Software development life cycle
- Detailed techniques

### Principles regarding software design philosophy

First off, topics regarding software design philosophy.

- Small is beautiful.
- Make each program do one thing well.
- Choose portability over efficiency.
- Use software leverage to your advantage.

These principles were about software design. Summing the content up, it was about "Writing a small portable program" and "Not writing the entire code from scratch, but borrowing existing code."

It seems to match the recent trends of avoiding vendor lock-in, and I can relate to the idea of using existing libraries to focus on the real problem. Writing small programs means better testability as well.

In that way, my custom GitHub Actions I recently developed seems to match the UNIX philosophy.

- https://github.com/stefafafan/post-mackerel-metrics
- https://github.com/stefafafan/psi-action

The blog post I wrote recently also stated about using existing ideas when thinking about design. (The following post is Japanese).

<iframe class="hatenablogcard" style="width:100%; height:155px; max-width:640px;" title="はてなのエンジニアとして日々意識しながらやっていることを紹介します - stefafafan の fa は3つです" src="https://hatenablog-parts.com/embed?url=https://blog.stenyan.jp/entry/2022/12/29/000000" width="300" height="150" frameborder="0" scrolling="no"></iframe>

It is nice to know I actually had similar thoughts as a software developer!

One thing I'm a bit concerned though, is the fact that the web applications I develop at work isn't really "small", so how exactly can one execute "Small is beautiful" and "Make each program do one thing well" in these cases. I guess I can think of my web application as a combination of a bunch of small programs (modules, functions, etc.) and use these principles when refactoring. I might also be able to use these principles when breaking up a monolithic repository to a bunch of smaller repositories.

"Breaking a large problem into a group of smaller problems" is something that one can use in a large number of situations.

### Principles regarding software development life cycle

- Build a prototype as soon as possible.

When reading this section it reminded me of the [Manifesto for Agile Software Development](https://agilemanifesto.org/iso/en/manifesto.html). When developing something big, rather than writing down a large large amount of documentation before developing, one should just start developing a prototype right away after a small amount of documentation, and receive feedback from the stakeholders to make the software better. This is very agile.

I guess software engineers back then used their development experience to try to do better and better and finally came up with the manifesto. Also the fact that this idea came up from a developer made me feel more that the connection between agile and software development is a very strong thing (like DevOps). In order to develop something efficiently, one should focus on the bottlenecks instead of just randomly trying to code faster.

Regarding software bottlenecks, I've recently written below (I'm sorry that this is a Japanese entry too).

<iframe class="hatenablogcard" style="width:100%; height:155px; max-width:640px;" title="ソフトウェア開発サイクルの改善を行う際に認識すべきボトルネックの種類 - stefafafan の fa は3つです" src="https://hatenablog-parts.com/embed?url=https://blog.stenyan.jp/entry/2022/11/20/190000" width="300" height="150" frameborder="0" scrolling="no"></iframe>

### Principles regarding detailed techniques

- Store data in flat text files.
- Use software leverage to your advantage.
- Use shell scripts to increase leverage and portability.
- Avoid captive user interfaces.
- Make every program a filter.

These principles were focused on techniques/guidelines when developing cli tools for unix. After reading these sections, it really made me feel like coding some small and portable programs using shell script.

Recently I feel that many people write cli tools using Go and Rust. I guess when the program has a bit of complexity, writing in these languages make it more testable; or it might just be that people are more used to writing these languages thant plain shell script.

## Overall

It was a great read even though the book was written in the 1990s. After the read, I was a bit concerned whether or not tools like git and [mkr](https://github.com/mackerelio/mkr) are actually simple, having many subcommands. I probably would be thinking about this for a while when seeing new cli tools.

I guess it's not really about drawing lines about the boundaries of simple or not; one should just keep in mind of not developing a tool that covers every single use case. Remember the agile principle: "Responding to change over following a plan."

<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=stefafafan05-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B002OL2G4G&linkId=f25077aa41b11a8dd45eca911b9638ba"></iframe>
