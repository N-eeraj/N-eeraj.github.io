import type { PropsWithChildren } from "react"
import { loginFormSchema } from "@auth/schemas/login"
import { signUpFormSchema } from "@auth/schemas/signUp"
import type { z } from "zod"
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
    replace?: true
  }
}

export type BaseAuthFormProps = PropsWithClassName & PropsWithChildren & AuthFormHeaderProps & AuthFormFooterProps

export interface AuthFormProps extends PropsWithClassName {
  replace?: true
}

export interface ModalProps extends PropsWithChildren {
  modalPath: string
}

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>
export type LoginFormSchema = z.infer<typeof loginFormSchema>
