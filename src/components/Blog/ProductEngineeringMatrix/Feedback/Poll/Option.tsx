import clsx from "clsx"
import { OptionProps } from "@customTypes/blog/productEngineeringMatrix"
import { POLL_OPTION_CLASS_MAP } from "@constants/blogs/productEngineeringMatrix"

function Option({ value, userVote, onChange }: OptionProps) {
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
        "relative group size-full flex flex-col justify-center items-center gap-y-4 hover:bg-background focus:bg-background cursor-pointer",
        isSelected && "bg-background",
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
        checked={isSelected}
        onChange={onChange} />
        <div className={clsx(
          "w-6 h-18 rounded-full duration-500",
          pill,
          isSelected ? "scale-110 !rotate-0" : "group-hover:scale-110 group-focus:scale-110 group-hover:rotate-0 group-focus:rotate-0",
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
