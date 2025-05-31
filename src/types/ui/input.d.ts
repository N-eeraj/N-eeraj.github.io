import type { ComponentProps } from "react"
import type { FieldError } from "react-hook-form"

export interface InputProps extends ComponentProps<"input"> {
  label?: string
  error?: FieldError
}
