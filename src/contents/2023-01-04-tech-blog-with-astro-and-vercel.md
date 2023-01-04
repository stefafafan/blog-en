---
author: stefafafan
datetime: 2022-01-04T01:40:00Z
title: I've created a new tech blog using Astro and Vercel
slug: 2023-01-04-tech-blog-with-astro-and-vercel
featured: true
draft: false
tags:
  - astro
  - vercel
ogImage: ""
description: Introducing how I used Astro and Vercel to create this new tech blog.
---

The Japanese version of this blog post is here: [Astro + Vercel で英語の技術ブログを新たに作成した - stefafafan の fa は 3 つです](https://blog.stenyan.jp/entry/2023/01/02/200000).

---

I've been writing blog posts using the Japanese blog service [Hatena Blog](https://hatenablog.com/), but I started to have the need of preparing another blog for English posts. Many people seem to use [Medium](https://medium.com/) for this, but I wanted to try out [Astro](https://astro.build/) so I went ahead and tried it out.

So the blog you are seeing right here is the result.

## What I've done

1. I found a theme called [AstroPaper](https://github.com/satnaing/astro-paper), so I went to its GitHub repository and generated my repository from its template.
1. Went to [Vercel](https://vercel.com/) and linked the previous repository I generated.
1. Retrieved the CNAME value from Vercel to apply to my domain's DNS.

Extremely easy.

## Thoughts

### Astro

I've heard sites built with Astro are fast--that does seem to be true (of course, this blog does not have much images or content yet).
![PageSpeed Insights results for blog.stenyan.dev](https://cdn-ak.f.st-hatena.com/images/fotolife/s/stefafafan/20230102/20230102192705.png)

I was also surprised from the strong integration of Astro and Vercel. One can also use other deploy methods like GitHub Pages etc.; the documentation explains all the different methods that can be used and is very easy to follow.

[Deploy your Astro Site 🚀 Astro Documentation](https://docs.astro.build/en/guides/deploy/)

### Vercel

Vercel's preview deployment feature seamlessly got integrated which was very convenient. Each pull request gets its own deployment and after merging to `main` the production deployment triggers. There isn't anything I want to hide for this blog, so I have made the repository public.

[stefafafan/blog-en](https://github.com/stefafafan/blog-en)

For example for the following pull request you can see the Vercel bot commenting, and when you click the `Visit Preview` link it takes you to a preview of the deployment. I always check this out before merging and deploying to production.
![Comments from the Vercel bot](https://cdn-ak.f.st-hatena.com/images/fotolife/s/stefafafan/20230102/20230102192252.png)

### Dynamic OG image generation of AstroPaper

A few days ago I noticed AstroPaper supported dynamic OG image generation. When this is enabled, the og image of a post is generated from its content in `svg` format.

[feat: generate dynamic og image for blog posts by satnaing · Pull Request #15 · satnaing/astro-paper](https://github.com/satnaing/astro-paper/pull/15)

It uses the same library used by the feature introduced recently from Vercel: [Satori](https://github.com/vercel/satori).
[Introducing OG Image Generation: Fast, dynamic social card images at the Edge – Vercel](https://vercel.com/blog/introducing-vercel-og-image-generation-fast-dynamic-social-card-images)

That's a nice feature, but according to the following post Twitter does not support `svg` as the OG image, so it doesn not work there which is a downside. I am looking forward to Twitter support.
[Dynamic OG image generation in AstroPaper blog posts](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/)

## Regarding writing technical blog posts in English

Writing a technical blog post in Japanese then translating it in English is simply tedious, but I decided to give it a try this year.

If possible, technical thoughts and finds should be shared not only to the Japanese audience but to English speaking audiences. Sometimes I feel the need to share my findings to an English speaking engineer, but only have a Japanese entry on it which is a bit inconvenient. I also just want a chance to actually use English too (I almost only use Japanese at work).

I am not sure if this blog is actually going to get any views but who knows. I am not going to go back and translate all of my Japanese entries from [my blog](https://blog.stenyan.jp/); I will only translate technical entries written after the year 2023.
