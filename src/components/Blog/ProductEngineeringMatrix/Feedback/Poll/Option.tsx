import type { ChangeEventHandler } from "react"

interface RadioProps {
  value: "red" | "blue"
  onChange: ChangeEventHandler
}

const valueClassesMap = {
  red: {
    background: "group-hover:bg-red-500/10 group-focus:bg-red-500/10",
    pill: "bg-red-500 rotate-[20deg]",
    text: "text-red-500",
  },
  blue: {
    background: "group-hover:bg-sky-500/10 group-focus:bg-sky-500/10",
    pill: "bg-sky-500 -rotate-[20deg]",
    text: "text-sky-500",
  },
} as const

function Radio({ value, onChange }: RadioProps) {
  const {
    background,
    pill,
    text,
  } = valueClassesMap[value]

  return (
    <label
      tabIndex={0}
      className="relative group size-full flex flex-col justify-center items-center gap-y-4 hover:bg-background focus:bg-background cursor-pointer">
      <div className={`absolute size-full ${background} duration-300`} />
      <input
        type="radio"
        className="hidden"
        name="poll"
        value={value}
        onChange={onChange} />
        <div className={`w-6 h-18 ${pill} rounded-full group-hover:scale-110 group-focus:scale-110 group-hover:rotate-0 group-focus:rotate-0 duration-500`} />
        <span className={`text-sm md:text-base ${text} pointer-fine:opacity-0 group-hover:opacity-100 group-focus:opacity-100 scale-95 group-hover:scale-100 group-focus:scale-100 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0 duration-300`}>
          Choose the {value} pill
        </span>
    </label>
  )
}

export default Radio
