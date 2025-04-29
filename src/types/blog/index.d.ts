import { ReactNode } from "react"
import { DateYMD } from "@customTypes/utils"

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
  readingTime: number
}
