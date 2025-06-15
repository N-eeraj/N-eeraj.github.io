"use client"

import {
  Loading,
  Error,
  Votes,
  Option,
  Confirmation,
} from "@components/Blog/ProductEngineeringMatrix/Feedback"

import {
  useFetch,
  useSubmit,
} from "@hooks/blog/productEngineeringMatrix"
import type { Option as OptionType } from "@customTypes/blog/productEngineeringMatrix"

const options: Array<OptionType> = [
  "red",
  "blue",
]

function Poll() {
  const {
    isFetching,
    fetchError,
    redPercentage,
    bluePercentage,
    userVote,
  } = useFetch()

  const {
    selectedOption,
    handleSelectionChange,
    clearSelection,
    submitSelection,
    isSubmitting,
  } = useSubmit()

  if (isFetching) return <Loading />
  if (fetchError) return <Error error={fetchError} />

  return (
    <div className="space-y-3 md:space-y-4">
      {/* options */}
      <ul className="flex h-48">
        {options.map((option) => (
          <li
            key={option}
            className="flex-1">
            <Option
              value={option}
              isSelected={(userVote ?? selectedOption) === option}
              onChange={handleSelectionChange} />
          </li>
        ))}
      </ul>

      {/* votes */}
      {!!(redPercentage + bluePercentage) && (
        <ul className="flex h-10 md:h-12 rounded-full overflow-hidden">
          <Votes
            value={redPercentage}
            className="bg-red-500" />
          <Votes
            value={bluePercentage}
            className="justify-end bg-sky-500" />
        </ul>
      )}

      <Confirmation
        selection={selectedOption}
        loading={isSubmitting}
        onCancel={clearSelection}
        onConfirm={submitSelection} />
    </div>
  )
}

export default Poll
