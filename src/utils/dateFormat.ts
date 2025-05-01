import type { DateYMD } from "@customTypes/utils"

export function formatShortDate(dateString: DateYMD) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date)
}
