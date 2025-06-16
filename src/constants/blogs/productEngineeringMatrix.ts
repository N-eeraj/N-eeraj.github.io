import type {
  ConfirmationMessageMap,
  PollOptionClassMap,
} from "@customTypes/blog/productEngineeringMatrix"

export const OPTIONS = [
  "red",
  "blue",
] as const

export const POLL_QUERY_KEY = "product-engineering-matrix-poll" as const

export const POLL_OPTION_CLASS_MAP = {
  red: {
    background: "group-hover:bg-red-500/10 group-focus:bg-red-500/10",
    activeBackground: "bg-red-500/20 group-hover:bg-red-500/20 group-focus:bg-red-500/20",
    pill: "bg-red-500 rotate-[20deg]",
    text: "text-red-500",
  },
  blue: {
    background: "group-hover:bg-sky-500/10 group-focus:bg-sky-500/10",
    activeBackground: "bg-sky-500/20 group-hover:bg-sky-500/20 group-focus:bg-sky-500/20",
    pill: "bg-sky-500 -rotate-[20deg]",
    text: "text-sky-500",
  },
} as const satisfies PollOptionClassMap

export const CONFIRMATION_MESSAGE_MAP = {
  red: {
    text: "Escape the mainstream and choose a stack built for high-performance systems, speed, and scalability.",
    class: "text-red-500",
  },
  blue: {
    text: "Experience the rich ecosystem with unmatched community support, and the convenience of JavaScript across the entire stack.",
    class: "text-sky-500",
  },
} as const satisfies ConfirmationMessageMap
