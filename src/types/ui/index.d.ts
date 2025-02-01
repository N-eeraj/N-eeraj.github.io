import { HTMLProps } from "react"

export interface PropsWithClassName {
  className?: HTMLProps<HTMLElement>["className"]
}
