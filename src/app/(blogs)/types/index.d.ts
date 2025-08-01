import type { ReactNode } from "react"
import type { DateYMD } from "@customTypes/utils"
import { BLOG_SLUG } from "@blogs/constants/"

export type BlogSlug = `${BLOG_SLUG}`

export interface CoverImage {
  src: string
  alt?: string
  credit?: ReactNode
}

export interface BlogDetails {
  title: string
  description: string
  coverImage: Pick<CoverImage, "src">
}

export interface BlogHeaderProps {
  title: string
  subTitle?: string
  coverImage?: CoverImage
  date: DateYMD
  updateDate?: DateYMD
  readingTime: number
}

export interface TextBlockProps {
  content: string | Array<string>
  containerClassName?: string
  className?: string
}

export interface BlogParams {
  params: Promise<{ slug?: BlogSlug }>
}
