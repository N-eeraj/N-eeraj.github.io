import type { ReactNode } from "react"
import type { DateYMD } from "@customTypes/utils"

export interface CoverImage {
  src: string
  alt?: string
  credit?: ReactNode
}

export interface BlogHeaderProps {
  title: string
  subTitle?: string
  coverImage?: CoverImage
  date: DateYMD
  updateDate?: DateYMD
  readingTime: number
}
