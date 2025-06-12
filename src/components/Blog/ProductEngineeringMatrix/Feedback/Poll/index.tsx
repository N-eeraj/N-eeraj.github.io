"use client"

import {
  useState,
  type ChangeEvent,
} from "react"

import {
  Loading,
  Error,
  Votes,
  Option,
} from "@components/Blog/ProductEngineeringMatrix/Feedback"

import {
  useFetch,
} from "@hooks/blog/productEngineeringMatrix"

function Poll() {
  const {
    isFetching,
    fetchError,
    redPercentage,
    bluePercentage,
  } = useFetch()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  if (isFetching) return <Loading />
  if (fetchError) return <Error error={fetchError} />

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="space-y-3 md:space-y-4">
      {/* votes */}
      <ul className="flex h-10 md:h-12 rounded-full overflow-hidden">
        <Votes
          value={redPercentage}
          className="bg-red-500" />
        <Votes
          value={bluePercentage}
          className="justify-end bg-sky-500" />
      </ul>

      {/* options */}
      <ul className="flex h-48">
        <li className="flex-1">
          <Option
            value="red"
            onChange={handleChange} />
        </li>
        <li className="flex-1">
          <Option
            value="blue"
            onChange={handleChange} />
        </li>
      </ul>
    </div>
  )
}

export default Poll
