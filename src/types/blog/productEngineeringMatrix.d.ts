import type { BaseImageProps } from "@customTypes/ui"
import type { TextBlockProps } from "@customTypes/blog"

export interface ComparisonBlockProps {
  image?: BaseImageProps
  comparison: Array<{
    title: string
    content: TextBlockProps["content"]
  }>
}
