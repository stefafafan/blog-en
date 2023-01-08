---
author: stefafafan
datetime: 2023-01-08T03:46:00Z
title: GitHub Reusable Workflows vs. Composite Actions
slug: 2023-01-08-github-reusable-workflows-vs-composite-actions
featured: false
draft: false
tags:
  - github
  - github actions
ogImage: ""
description:
---

The Japanese version of this blog post is here: [GitHub Reusable Workflows と Composite Actions の使い分けについて考えた - stefafafan の fa は 3 つです](https://blog.stenyan.jp/entry/2023/01/05/211449).

---

When trying out GitHub's Composite Actions, I was a bit confused about its difference from Reusable Workflows. This blog post is about my thoughts on when and how one should use Reusable Workflows vs. Composite Actions.

## Table of contents

## When and how to use one over the other

### Composite Actions

- When you want to refactor workflows within a single repository, where a series of steps are copy and pasted everywhere.
- When you are interested in developing a Custom Action, Composite Actions can be a first choice over JavaScript Actions or Docker Container Actions since you just have to prepare a single yaml file.

### Reusable Workflows

- When you have multiple repositories and have a need to maintain the same workflow files in each, using a Reusable Workflow can help.

## Detailed thoughts

- When you have a single repository and want to refactor GitHub Workflow files, Composite Actions should mostly be the first choice
  - For Reusable Workflows, the file needs to be in the `.github/workflows/` directory. This is confusing in a way, since one cannot determine which file is reusable or not at a glance. Composite Actions let you choose the directory, which makes it easier (e.g. one can have `.github/actions/my-reusable-action-a/`).
  - When using Reusable Workflows for a single repository, complexity increases. In GitHub Workflows there is a basic relationship of `Workflow -> Job -> Step`, but once you add a Reusable Workflow in the repository, now you have `Workflow -> Job -> Workflow` as well.
    - Reusable Workflows support the normal Workflow triggers (such as `push` or `pull_request`) as well as `workflow_call`. This is convenient, but when used together makes things complex (e.g. a Workflow can be triggered via `push` and called by some other Workflow).
    - The reason Composite Action does not add complexity is because it is an Action--you can treat it the same way you would call `uses: actions/checkout@v3` in a step.
  - Reusable Workflows can only be called by a Job and cannot be used as a Step. Composite Actions can be used as a Step, so is more convenient as a component. One can call a Step before calling the Composite Action, and then use its outputs in the next Step (of course you can do the same with multiple Jobs, but this requires more code).
  - Because of the above points, Composite Actions is a better choice to keep you repository's Workflows clean and maintainable.
- If you are copying the same GitHub Workflow file for each repository at you company's org, or you are an OSS maintainer with multiple repositories using the same Workflow file, Reusable Workflows is a good choice (of course, Composite Actions can be used too).
  - When there is no customization between repository and you are just copying around the same files, simply reusing the whole file is fine.
  - If you are maintaining 10 repositories and all of the have Renovate updating dependencies, instead of going around each repository just having a single repository with Reusable Workflows would be easier to maintain.

## Tell me you thoughts on this topic

My thoughts are based on me just figuring out the features on my own, so if you know other things about GitHub Reusable Workflows vs. Composite Actions, please let me know (via Twitter is fine).

## Links

- [How to start using reusable workflows with GitHub Actions | The GitHub Blog](https://github.blog/2022-02-10-using-reusable-workflows-github-actions/)
- [Reusing workflows - GitHub Docs](https://docs.github.com/en/actions/using-workflows/reusing-workflows)
- [Creating a composite action - GitHub Docs](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action)
