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
} as const
