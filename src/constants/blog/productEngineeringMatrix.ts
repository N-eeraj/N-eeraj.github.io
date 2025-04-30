import type { Metadata } from "next"

import blog from "@blog/product-engineering-matrix.json"
import keywords from "@keywords/blog/product-engineering-matrix.json"
import { DateYMD } from "@customTypes/utils"

export const BLOG_TITLE = blog.title
export const BLOG_SUB_TITLE = blog.subTitle
export const BLOG_DESCRIPTION = blog.description
export const BLOG_COVER_IMAGE = blog.coverImage
export const BLOG_DATE = blog.date as DateYMD

export const METADATA: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    type: "article",
    images: [
      BLOG_COVER_IMAGE,
    ],
  },
  twitter: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    images: [
      BLOG_COVER_IMAGE,
    ],
  },
  keywords,
}
