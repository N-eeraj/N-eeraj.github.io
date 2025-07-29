import type { ChangeEventHandler } from "react"
import type { z } from "zod"

import { submitSchema } from "@schema/blogs/productEngineeringMatrix"
import { OPTIONS } from "@constants/blogs/productEngineeringMatrix"
import type {
  BaseImageProps,
  PropsWithClassName,
} from "@customTypes/ui"
import type { TextBlockProps } from "@customTypes/blogs"

export interface ComparisonBlockProps {
  image?: BaseImageProps
  comparison: Array<{
    title: string
    content: TextBlockProps["content"]
  }>
}

export type Option = typeof OPTIONS[number]

export type SubmitSchema = z.infer<typeof submitSchema>

export interface OptionProps {
  value: Option
  userVote?: Option
  isLoading: boolean
  onChange: ChangeEventHandler
}

export interface VotesProps extends PropsWithClassName {
  value: number
}

export interface PollData {
  red: number
  blue: number
  userVote?: Option
}

export interface PollOptionClass {
  background: string
  activeBackground: string
  pill: string
  text: string
}

export interface ConfirmationMessage {
  text: string
  class: string
}

export type PollOptionClassMap = Record<Option, PollOptionClass>
export type ConfirmationMessageMap = Record<Option, ConfirmationMessage>
