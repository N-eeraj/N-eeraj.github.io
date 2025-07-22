import clsx from "clsx"
import { OptionProps } from "@customTypes/blog/productEngineeringMatrix"
import { POLL_OPTION_CLASS_MAP } from "@constants/blogs/productEngineeringMatrix"

function Option({ value, userVote, isLoading, onChange }: OptionProps) {
  const {
    background,
    activeBackground,
    pill,
    text,
  } = POLL_OPTION_CLASS_MAP[value]

  const isSelected = userVote === value
  const anotherSelected = userVote && !isSelected

  return (
    <label
      tabIndex={0}
      className={clsx(
        "relative size-full flex flex-col justify-center items-center gap-y-4 hover:bg-background focus:bg-background",
        isSelected && "bg-background",
        !isLoading && "group cursor-pointer",
      )}>
      <div className={clsx(
        "absolute size-full duration-300",
        isSelected ? activeBackground : background,
      )} />
      <input
        type="radio"
        className="hidden"
        name="poll"
        value={value}
        disabled={isLoading}
        checked={isSelected}
        onChange={onChange} />
        <div className={clsx(
          "group relative w-8 h-18 rounded-full duration-500",
          "after:absolute after:bg-gradient-to-b after:from-white/60 after:to-white/30 after:rounded-full after:duration-500 after:origin-top",
          pill,
          isSelected ? "scale-110 !rotate-0 after:top-1/12 after:w-5/12 after:h-3/4 " : "group-hover:scale-110 group-focus:scale-110 group-hover:rotate-0 group-focus:rotate-0 after:top-1/6 group-hover:after:top-1/12 after:w-1/3 group-hover:after:w-5/12 after:h-2/3 group-hover:after:h-3/4",
          isLoading && "scale-75 opacity-50",
        )} />
        <span className={clsx(
          "text-sm md:text-base duration-300",
          text,
          !isSelected && "pointer-fine:opacity-0 group-hover:opacity-100 group-focus:opacity-100 scale-95 group-hover:scale-100 group-focus:scale-100 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0",
        )}>
          { isSelected ?
            `You chose the ${value} pill`:
            ( anotherSelected ?
              `Switch to ${value} pill`:
              `Choose the ${value} pill`
            )
          }
        </span>
    </label>
  )
}

export default Option
