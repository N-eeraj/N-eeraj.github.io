import type { Metadata } from "next"

import blog from "@blog/product-engineering-matrix.json"
import keywords from "@keywords/blog/product-engineering-matrix.json"

const METADATA: Metadata = {
  title: blog.title,
  description: blog.description,
  openGraph: {
    title: blog.title,
    description: blog.description,
    type: "article",
    images: [
      blog.coverImage.src,
    ],
  },
  twitter: {
    title: blog.title,
    description: blog.description,
    images: [
      blog.coverImage.src,
    ],
  },
  keywords,
}

export default METADATA
