import { HTMLProps } from "react"

export interface PropsWithClassName {
  className?: HTMLProps<HTMLElement>["className"]
}

export interface BaseImageProps {
  src: string
  alt: string
}
