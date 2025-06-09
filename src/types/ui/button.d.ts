import type { ComponentProps } from "react"

export interface ButtonProps extends ComponentProps<"button"> {
  loading?: boolean
  disabled?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}
