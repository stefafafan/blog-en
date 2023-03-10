import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://blog.stenyan.dev/",
  author: "stefafafan",
  desc: "Japanese software engineer stefafafan's technical blog.",
  title: "stefafafan's tech blog",
  ogImage: "astropaper-og.jpg", // TODO(stefafafan): ogimage
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/stefafafan",
    linkTitle: `${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/stefafafan",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://social.stenyan.dev/@stenyan",
    linkTitle: `${SITE.author} on Mastodon`,
    active: true,
  },
];
