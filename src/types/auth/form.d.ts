import type { PropsWithChildren } from "react"
import type { PropsWithClassName } from "@customTypes/ui"

export interface AuthFormHeaderProps {
  title?: string
  description?: string
}

export interface AuthFormFooterProps {
  footerText?: string
  segue?: {
    link: string
    text: string
  }
}

export type AuthFormProps = PropsWithClassName & PropsWithChildren & AuthFormHeaderProps & AuthFormFooterProps
