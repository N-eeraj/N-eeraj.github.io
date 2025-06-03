import type { ComponentProps } from "react"

export interface ButtonProps extends ComponentProps<"button"> {
  loading?: boolean
  disabled?: boolean
}
