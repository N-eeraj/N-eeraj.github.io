"use client"

import {
  useState,
  type ChangeEvent,
} from "react"

import {
  Loading,
  Error,
} from "@components/Blog/ProductEngineeringMatrix/Feedback"

import {
  useFetch,
} from "@hooks/blog/productEngineeringMatrix"

function Poll() {
  const blogResponses = useFetch()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  if (blogResponses.isFetching) return <Loading />
  if (blogResponses.error) return <Error error={blogResponses.error} />

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="flex h-48">
      <label
        tabIndex={0}
        className="relative group flex flex-col justify-center items-center gap-y-4 flex-1 hover:bg-background focus:bg-background cursor-pointer">
        <div className="absolute size-full group-hover:bg-red-500/10 group-focus:bg-red-500/10 duration-300" />
        <input
          type="radio"
          className="hidden"
          value="red"
          name="poll"
          onChange={handleChange} />
          <div className="w-6 h-18 bg-red-500 rounded-full group-hover:scale-110 group-focus:scale-110 rotate-12 group-hover:-rotate-0 group-focus:-rotate-0 duration-500" />
          <span className="text-sm md:text-base text-red-500 pointer-fine:opacity-0 group-hover:opacity-100 group-focus:opacity-100 scale-95 group-hover:scale-100 group-focus:scale-100 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0 duration-300">
            Choose the red pill
          </span>
      </label>
      <label
        tabIndex={0}
        className="relative group flex flex-col justify-center items-center gap-y-4 flex-1 hover:bg-background focus:bg-background cursor-pointer">
        <div className="absolute size-full group-hover:bg-sky-500/10 group-focus:bg-sky-500/10 duration-300" />
        <input
          type="radio"
          className="hidden"
          value="blue"
          name="poll"
          onChange={handleChange} />
          <div className="w-6 h-18 bg-sky-500 rounded-full group-hover:scale-110 group-focus:scale-110 -rotate-12 group-hover:rotate-0 group-focus:rotate-0 duration-500" />
          <span className="text-sm md:text-base text-sky-500 pointer-fine:opacity-0 group-hover:opacity-100 group-focus:opacity-100 scale-95 group-hover:scale-100 group-focus:scale-100 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0 duration-300">
            Choose the blue pill
          </span>
      </label>
    </div>
  )
}

export default Poll
