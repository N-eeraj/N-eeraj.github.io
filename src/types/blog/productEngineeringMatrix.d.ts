import type { ChangeEventHandler } from "react"
import { OPTIONS } from "@constants/blogs/productEngineeringMatrix"
import type { BaseImageProps } from "@customTypes/ui"
import type { TextBlockProps } from "@customTypes/blog"

export interface ComparisonBlockProps {
  image?: BaseImageProps
  comparison: Array<{
    title: string
    content: TextBlockProps["content"]
  }>
}

export type Option = typeof OPTIONS[number]

export interface OptionProps {
  value: Option
  isSelected?: boolean
  onChange: ChangeEventHandler
}

export interface PollData {
  red: number
  blue: number
  userVote?: Option
}
