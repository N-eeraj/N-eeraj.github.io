import clsx from "clsx"
import type { VotesProps } from "@customTypes/blog/productEngineeringMatrix"

function Votes({ value, className }: VotesProps) {
  const percentage = `${parseFloat(value.toFixed(2))}%`

  return (
    <li
      style={{ width: percentage }}
      className={`flex items-center h-full text-shadow-xs duration-300 ${className}`}>
      <strong className={clsx(
        "p-4 text-white text-sm md:text-base font-medium",
        value < 20 && "hidden md:block",
        value < 12 && "md:hidden",
      )}>
        {percentage}
      </strong>
    </li>
  )
}

export default Votes
